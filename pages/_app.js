import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
            delay: 50,
        });

        document.documentElement.lang = "id";
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
                <meta
                    name="description"
                    content="Website Portofolio Valentino Stania as a Frontend Developer"
                />
                <title>Portofolio - Valentino Stania</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
