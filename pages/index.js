import {
    Navbar,
    HomeSection,
    AboutSection,
    SkillSection,
    ProjectSection,
    ContactSection,
    ScrollToTop,
    Footer,
} from '../components';

export default function Home() {
    return (
        <div className="bg-black-500 relative">
            <Navbar />
            <main className="relative">
                <HomeSection />

                <AboutSection />

                <SkillSection />

                <ProjectSection />

                <ContactSection />

                <ScrollToTop className="fixed right-4 bottom-28 lg:right-10 lg:bottom-10" />
            </main>
            <Footer />
        </div>
    );
}
