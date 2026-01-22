import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project }) {
    return (
        <article className="bg-black-700 rounded-xl overflow-hidden border border-white-700 hover:border-green-500/50 transition-all duration-300 group">
            {/* Project Image */}
            <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black-500/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-green-500 text-black-500 rounded-full hover:bg-green-400 transition-colors transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black-700"
                            aria-label={`View ${project.title} live`}
                        >
                            <FaExternalLinkAlt size={18} />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white-500 text-black-500 rounded-full hover:bg-white-400 transition-colors transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 focus:ring-offset-black-700"
                            aria-label={`View ${project.title} on GitHub`}
                        >
                            <FaGithub size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white-500 mb-2 group-hover:text-green-500 transition-colors">
                    {project.title}
                </h3>
                <p className="text-white-700 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-black-500 text-white-500 rounded border border-white-700"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium text-white-700">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <a
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-green-500 text-sm font-medium hover:underline transition-colors"
                >
                    View Details
                    <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </article>
    );
}
