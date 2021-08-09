import {
    Navbar,
    HomeSection,
    SocmedBox,
    AboutSection,
    SkillSection,
    WorkSection,
    ContactSection,
    ScrollToTop,
    Footer,
} from "../components";

export default function Home() {
    return (
        <div className="bg-black-500 ">
            <Navbar />
            <main className="relative">
                <HomeSection />

                <SocmedBox />

                <AboutSection />

                <SkillSection />

                <WorkSection />

                <ContactSection />

                <ScrollToTop className="fixed right-5 bottom-5 lg:right-10 lg:bottom-10" />
            </main>
            <Footer />
        </div>
    );
}
