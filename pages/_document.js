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
                    <meta name="theme-color" content="#22c55e" />
                    
                    {/* Favicon */}
                    <link rel="icon" href="/favicon.ico" />
                    
                    {/* Preconnect for Performance */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    
                    {/* Theme initialization script - runs before React hydrates */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function() {
                                    var theme = localStorage.getItem('theme');
                                    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    if (theme === 'dark' || (!theme && systemDark)) {
                                        document.documentElement.classList.add('dark');
                                    } else {
                                        document.documentElement.classList.remove('dark');
                                    }
                                })();
                            `,
                        }}
                    />
                    
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
