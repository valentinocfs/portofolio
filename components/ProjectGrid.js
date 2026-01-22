import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects, projectCategories } from '../data/projects';
import { FaFolderOpen } from 'react-icons/fa';

export default function ProjectGrid() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-20 px-5 bg-black-500">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <FaFolderOpen className="text-green-500" size={24} />
                        <h2 className="text-3xl md:text-4xl font-bold text-white-500">
                            Projects
                        </h2>
                    </div>
                    <p className="text-white-700">
                        A selection of projects I've worked on, showcasing my skills and experience
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {projectCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                                activeCategory === category.id
                                    ? 'bg-green-500 text-black-500'
                                    : 'bg-black-700 text-white-500 hover:bg-black-600 border border-white-700'
                            } focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black-700`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-white-700 text-lg">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
