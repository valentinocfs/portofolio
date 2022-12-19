import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 50,
        });

        document.documentElement.lang = 'id';
    }, []);

    return (
        <>
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
                <title>Valentino Stania - Portfolio Website</title>
                <meta
                    name="title"
                    content="Valentino Stania - Portfolio Website"
                />
                <meta
                    name="description"
                    content="Web Developer | Frontend Developer - React - Tailwind - Next - Typescript? | UI Designer - Figma | Backend Developer - Laravel - MySQL - Nodejs?"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta
                    property="og:title"
                    content="Valentino Stania - Portfolio Website"
                />
                <meta
                    property="og:description"
                    content="Web Developer | Frontend Developer - React - Tailwind - Next - Typescript? | UI Designer - Figma | Backend Developer - Laravel - MySQL - Nodejs?   "
                />
                <meta
                    // property="og:image"
                    // content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta
                    property="twitter:title"
                    content="Valentino Stania - Portfolio Website"
                />
                <meta
                    property="twitter:description"
                    content="Web Developer | Frontend Developer - React - Tailwind - Next - Typescript? | UI Designer - Figma | Backend Developer - Laravel - MySQL - Nodejs?   "
                />
                <meta
                    property="twitter:image"
                    content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
