import Container from './Container';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectSection() {
    const featuredProjects = projects.slice(0, 4);

    return (
        <section className="px-10 pt-4 sm:pt-8 md:pt-16 lg:pt-20" id="projects">
            <Container>
                <div 
                    className="relative text-center mb-4 sm:mb-16 md:mb-20 z-10"
                    data-aos="fade-up"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white-500">
                            Projects
                        </h2>
                    </div>
                    <p className="text-white-700 max-w-2xl mx-auto">
                        A selection of projects I've worked on
                    </p>
                    <div className="bg-white-500 w-32 h-0.5 rounded-md mx-auto mt-6"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-white-500 px-5">
                    {featuredProjects.map((project, index) => (
                        <div 
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={`${200 + index * 100}`}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
                
                <div 
                    className="py-16 md:py-24 text-white-700 text-center"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <a href="/projects" className="hover:text-green-500 transition-colors inline-flex items-center gap-2">
                        See more projects
                    </a>
                </div>
            </Container>
        </section>
    );
}
