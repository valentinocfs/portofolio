# Docker Setup for Next.js 11 Portfolio

This document describes the Docker configuration for the Next.js 11 portfolio project.

## Prerequisites

- Docker Desktop installed and running
- Docker Desktop includes Docker Compose (v2+)
- Minimum 4GB RAM allocated to Docker
- At least 2GB disk space

## Quick Start

### 1. Environment Setup

Create environment files based on the template:

```bash
# For development
cp .env.example .env.development

# For production (update values accordingly)
cp .env.example .env.production
```

### 2. Development Mode

Start the development server with hot-reload:

```bash
# Build and start development server
docker-compose up dev --build

# Or use docker compose (newer syntax)
docker compose up dev --build

# Run in detached mode (background)
docker-compose up -d dev

# View logs
docker-compose logs -f dev
```

Access the development server at: http://localhost:3000

**Features:**
- Hot-reload enabled (changes reflect immediately)
- Volume mounting for live code updates
- Polling file watcher for Windows compatibility

### 3. Production Mode

Build and run the production image:

```bash
# Build and start production server
docker-compose up prod --build

# Or use docker compose
docker compose up prod --build

# Run in detached mode (background)
docker-compose up -d prod

# View logs
docker-compose logs -f prod
```

Access the production server at: http://localhost:3000

**Features:**
- Optimized production build
- Multi-stage Docker build for smaller image size
- Health checks included
- Auto-restart on failure

### 4. Stop Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (data loss)
docker-compose down -v
```

## Image Information

### Base Images

| Stage | Base Image | Size |
|-------|------------|------|
| Development | node:16-alpine | ~170MB |
| Production | node:16-alpine | ~400MB |

### Node.js Version

- **Version:** 16.x (LTS)
- **Package Manager:** Yarn
- **Next.js:** 11.0.1
- **React:** 17.0.2

## Docker Commands Reference

### Build Commands

```bash
# Rebuild images (cache bypass)
docker-compose build --no-cache

# Build specific service only
docker-compose build prod

# View build progress
docker-compose build --progress=plain
```

### Container Management

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# View running containers
docker-compose ps

# View container logs
docker-compose logs -f <service-name>
```

### Debugging

```bash
# Execute shell in running container
docker-compose exec dev sh

# Execute shell in new container (one-off)
docker-compose run --rm dev sh

# Check container resource usage
docker stats

# View Docker network
docker network ls
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
# Check what's using port 3000
netstat -ano | findstr :3000

# Change port in docker-compose.yml (ports section)
# Or stop the conflicting process
```

### Volume Issues

If hot-reload not working:

```bash
# Remove existing volumes and rebuild
docker-compose down -v
docker-compose up dev --build
```

### Build Failures

If build fails with memory issues:

```bash
# Increase Docker Desktop memory limit:
# Docker Desktop > Settings > Resources > Memory (min 4GB)

# Or clean Docker cache
docker system prune -a
```

### Windows-Specific

If file watching doesn't work on Windows:

```bash
# Ensure Docker Desktop has file sharing enabled:
# Docker Desktop > Settings > Resources > File Sharing
# Add D:\Docker\portofolio to shared paths
```

## Customization

### Changing Port

Edit `docker-compose.yml`:

```yaml
ports:
  - "8080:3000"  # External:Internal
```

### Environment Variables

Edit `.env.development` or `.env.production`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Adding Dependencies

If you add new packages:

```bash
# Rebuild to include new dependencies
docker-compose build --no-cache
docker-compose up -d
```

## Security Notes

- Container runs as non-root user `nextjs` (uid 1001)
- `poweredByHeader` disabled to hide server information
- Production image has no build tools or source code

## Performance Tips

1. **Use .dockerignore:** Avoid copying unnecessary files
2. **Multi-stage build:** Reduces production image size
3. **Volume mounting:** Only for development (not production)
4. **Docker cache:** Don't delete cache unless needed

## Next.js Static Export Note

This project uses `next export` for static HTML generation. The configuration in `next.config.js` includes:

```javascript
images: {
  unoptimized: true,
}
```

This is required because `next export` doesn't support the default image optimization API. If you switch to SSR/ISR, remove the `unoptimized` option and configure `images.domains` if needed.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Documentation](https://docs.docker.com)
- [Docker Compose Documentation](https://docs.docker.com/compose)
- [Node.js Docker Images](https://hub.docker.com/_/node)
