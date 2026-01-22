import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Primary Meta Tags */}
                    <meta charSet="utf-8" />
                    <meta name="title" content="Valentino Stania - Software Developer" />
                    <meta name="description" content="Fullstack Developer with 3+ years of experience building end-to-end web applications using React, Next.js, PHP, and modern web technologies. Based in Bandung, Indonesia." />
                    <meta name="keywords" content="fullstack developer, web developer, react, nextjs, php, laravel, javascript, typescript, bandung, indonesia, frontend, backend" />
                    <meta name="author" content="Valentino Stania" />
                    <meta name="robots" content="index, follow" />
                    <meta name="theme-color" content="#22c55e" />
                    
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://valentinocfs.my.id/" />
                    <meta property="og:title" content="Valentino Stania - Software Developer" />
                    <meta property="og:description" content="Fullstack Developer with 3+ years of experience. Specialized in React, Next.js, PHP, and modern web technologies." />
                    <meta property="og:image" content="https://valentinocfs.my.id/og-image.png" />
                    <meta property="og:site_name" content="Valentino Stania Portfolio" />
                    <meta property="og:locale" content="en_US" />
                    
                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://valentinocfs.my.id/" />
                    <meta property="twitter:title" content="Valentino Stania - Software Developer" />
                    <meta property="twitter:description" content="Fullstack Developer with 3+ years of experience. Specialized in React, Next.js, PHP, and modern web technologies." />
                    <meta property="twitter:image" content="https://valentinocfs.my.id/og-image.png" />
                    
                    {/* Favicon */}
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/manifest.json" />
                    
                    {/* Preconnect for Performance */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    
                    {/* Structured Data - Person */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'Person',
                                name: 'Valentino Stania',
                                jobTitle: 'Fullstack Developer',
                                url: 'https://valentinocfs.my.id',
                                email: 'valentinostania@gmail.com',
                                address: {
                                    '@type': 'PostalAddress',
                                    addressLocality: 'Bandung',
                                    addressRegion: 'West Java',
                                    addressCountry: 'Indonesia'
                                },
                                sameAs: [
                                    'https://github.com/valentinocfs',
                                    'https://linkedin.com/in/valentinostania',
                                    'https://instagram.com/valentinocfs',
                                ],
                                knowsAbout: [
                                    'React',
                                    'Next.js',
                                    'JavaScript',
                                    'TypeScript',
                                    'PHP',
                                    'Laravel',
                                    'MySQL',
                                    'PostgreSQL',
                                    'Node.js',
                                    'Tailwind CSS',
                                ],
                            }),
                        }}
                    />
                </Head>
                <body className="bg-black-500 text-white-500 antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
