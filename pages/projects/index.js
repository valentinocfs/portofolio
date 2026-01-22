import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { projects, projectCategories } from '../../data/projects';

export default function ProjectsPage({ allProjects, categories }) {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all' 
        ? allProjects 
        : allProjects.filter(project => project.category === activeFilter);

    return (
        <>
            <div className="bg-black-500 min-h-screen">
                <Navbar />
                <main className="pt-0 md:pt-10">
                    <section id="projects" className="py-20 px-5">
                        <div className="container mx-auto">
                            {/* Section Header */}
                            <div className="mb-16">
                                <div className="flex items-center gap-3 mb-4">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white-500">
                                        Projects
                                    </h2>
                                </div>
                                <p className="text-white-700">
                                    A selection of projects I've worked on, showcasing my skills and experience
                                </p>
                            </div>

                            {/* Category Filter */}
                            <div 
                                className="flex flex-wrap gap-3 mb-8"
                            >
                                {categories.map((category, index) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveFilter(category.id)}
                                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                            activeFilter === category.id
                                                ? 'bg-green-500 text-black-500'
                                                : 'bg-black-700 text-white-500 border border-white-700 hover:border-green-500/50'
                                        }`}
                                    >
                                        {category.label}
                                    </button>
                                ))}
                            </div>

                            {/* Projects Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project) => (
                                    <div key={project.id}>
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>

                            {/* No Results Message */}
                            {filteredProjects.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-white-700">
                                        No projects found in this category.
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            allProjects: projects,
            categories: projectCategories,
        },
    };
}
