import Container from './Container';
import ShadowHeader from './ShadowHeader';
import ProjectCard from './ProjectCard';

export default function ProjectSection() {
    return (
        <section className="px-10 pt-16 lg:pt-20" id="projects">
            <Container className="">
                <div className="relative text-center mb-20 z-10">
                    <ShadowHeader
                        title="PROJECTS"
                        subtitle="MY PROJECTS"
                        variant="center"
                        className="relative -bottom-24"
                    />
                    <div className="bg-white-500 w-full sm:w-80 lg:w-96 h-0.5 rounded-md mt-20 lg:mt-4 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-16 text-white-500 px-5">
                    <ProjectCard
                        title="20 Project Javascript"
                        subtitlte="HTML, CSS, & Javascript"
                        link="https://valentinocfs.github.io/twenty-project-javascript/index.html"
                        img="20-Project-Js.png"
                    />
                    <ProjectCard
                        title="Procode - Education Mockup Website"
                        subtitlte="Figma"
                        link="https://www.figma.com/file/t5POn7czFMav4CS10rs3AL/Procode"
                        img="Procode.png"
                    />
                    <ProjectCard
                        title="Pilkasis"
                        subtitlte="Laravel - Stisla - Livewire"
                        link="https://github.com/valentinocfs/pilkasis"
                        img="Pilkasis.png"
                    />
                    <ProjectCard
                        title="Peduli Diri"
                        subtitlte="Laravel - Voler"
                        link="https://github.com/valentinocfs/peduli_diri"
                        img="Peduli-Diri.png"
                    />
                </div>
                <div className="py-16 md:py-24 text-white-700 text-center underline">
                    <a href="/projects" className="hover:text-green-500">
                        See more projects
                    </a>
                </div>
            </Container>
        </section>
    );
}
