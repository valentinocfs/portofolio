import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from '../components/ThemeContext';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 100,
            duration: 800,
        });

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
