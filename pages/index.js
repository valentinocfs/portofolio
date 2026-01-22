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
    );
}
