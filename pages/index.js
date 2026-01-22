import Head from 'next/head';
import {
    Navbar,
    HomeSection,
    SkillSection,
    ProjectSection,
    ContactSection,
    ScrollToTop,
    Footer,
    ExperienceSection,
} from '../components';

export default function Home() {
    return (
        <>
            <Head>
                <title>Valentino Stania - Software Developer</title>
                <meta name="description" content="Fullstack Developer with 3+ years of experience building end-to-end web applications using React, Next.js, PHP, and modern web technologies." />
                <meta property="og:title" content="Valentino Stania - Software Developer" />
                <meta property="og:description" content="Fullstack Developer with 3+ years of experience building end-to-end web applications." />
            </Head>
            <div className="bg-black-500 relative">
                <Navbar />
                <main className="relative">
                    <HomeSection />

                    <ExperienceSection />

                    <SkillSection />

                    <ProjectSection />

                    <ContactSection />

                    <ScrollToTop className="fixed right-4 bottom-28 lg:right-10 lg:bottom-10" />
                </main>
                <Footer />
            </div>
        </>
    );
}
