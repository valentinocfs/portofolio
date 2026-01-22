import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from '../components/ThemeContext';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Initialize AOS animations
        AOS.init({
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 100,
            duration: 800,
        });

        // Set document language
        document.documentElement.lang = 'en';
    }, []);

    return (
        <ThemeProvider>
            <Head>
                <link rel="icon" href="/profile.ico" />
                <link
                    rel="preload"
                    href="/font/Poppins-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/font/RedHatText-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <title>Valentino Stania - Portfolio</title>
            {/* Meta Tags */}
            <meta
                name="title"
                content="Valentino Stania - Portfolio"
            />
            <meta
                name="description"
                content="Software Developer - Fullstack Web"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io/" />
            <meta
                property="og:title"
                content="Valentino Stania - Portfolio"
            />
            <meta
                property="og:description"
                content="Software Developer - Fullstack Web"
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta
                property="twitter:title"
                content="Valentino Stania - Portfolio"
            />
            <meta
                property="twitter:description"
                content="Software Developer - Fullstack Web"
            />
            <meta
                property="twitter:image"
                content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />
            {/* Skip Link for Accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-green-500 focus:text-black-500 focus:font-bold focus:rounded-lg"
            >
                Skip to main content
            </a>
            <div id="main-content">
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
