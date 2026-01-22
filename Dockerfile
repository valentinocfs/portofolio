# syntax=docker/dockerfile:1.4

# =============================================================================
# STAGE 1: Dependencies - Install production dependencies only
# =============================================================================
FROM node:16-alpine AS deps

WORKDIR /app

# Copy package files first for better layer caching
COPY package.json yarn.lock ./

# Install dependencies with frozen lockfile for reproducibility
# --frozen-lockfile ensures no modifications to yarn.lock
# --production installs only production dependencies (devDependencies excluded)
RUN yarn install --frozen-lockfile --production=false

# =============================================================================
# STAGE 2: Builder - Build the Next.js application
# =============================================================================
FROM node:16-alpine AS builder

WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy application source code
COPY . .

# Build the Next.js application
# This creates the .next directory with production build
RUN yarn build

# =============================================================================
# STAGE 3: Runner - Production runtime with minimal image size
# =============================================================================
FROM node:16-alpine AS runner

WORKDIR /app

# Set Node.js environment to production
ENV NODE_ENV=production

# Create non-root user for security (Next.js best practice)
# Using uid 1001 to match Next.js defaults
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy necessary files from builder stage
# 1. Static assets (public folder)
# 2. Next.js build output (.next directory)
# 3. Package files for production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Change ownership to non-root user
USER nextjs

# Expose the default Next.js port
EXPOSE 3000

# Health check endpoint
# Docker will check http://localhost:3000 every 30s to verify container health
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

# Start the Next.js production server
# Next.js 11 doesn't support standalone, so we use standard next start
CMD ["yarn", "start"]
