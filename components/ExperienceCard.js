import { useState } from 'react';
import TechBadge from './TechBadge';
import { FaMapMarkerAlt, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ExperienceCard({ experience }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const getTypeColor = (type) => {
        switch (type.toLowerCase()) {
            case 'full-time':
                return 'bg-green-500/10 text-green-500';
            case 'internship':
                return 'bg-blue-500/10 text-blue-500';
            case 'freelance':
                return 'bg-purple-500/10 text-purple-500';
            default:
                return 'bg-gray-500/10 text-gray-500';
        }
    };

    return (
        <article className="bg-black-700 rounded-xl p-6 border border-white-700 hover:border-green-500/50 transition-all duration-300">
            {/* Header - Company name and job type on same line */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-white-500">
                            {experience.company}
                        </h3>
                        <span className={`inline-block px-3 my-2 md:my-0 py-1 text-xs font-medium rounded-full ${getTypeColor(experience.type)}`}>
                            {experience.type}
                        </span>
                    </div>
                    <p className="text-green-500 font-medium mt-1">
                        {experience.role}
                    </p>
                </div>
                
                {/* Date on the right */}
                <div className="flex flex-wrap gap-4 text-sm text-white-700 items-start">
                    <span className="text-white-700 whitespace-nowrap">
                        {experience.startDate} — {experience.endDate}
                    </span>
                    {experience.website && (
                        <a
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-white-700 hover:text-green-500 transition-colors"
                            aria-label={`Visit ${experience.company} website`}
                        >
                            <FaExternalLinkAlt size={12} />
                        </a>
                    )}
                </div>
            </div>

            {/* Description - Smaller font size */}
            <p className="text-white-700 mb-4 text-sm leading-relaxed">
                {experience.description}
            </p>

            {/* Tech Stack */}
            {experience.techStack && experience.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {experience.techStack.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                    ))}
                </div>
            )}

            {/* Achievements - Expandable */}
            {experience.achievements && experience.achievements.length > 0 && (
                <>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-2 text-green-500 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black-700 rounded px-2 py-1 -ml-2 transition-colors"
                        aria-expanded={isExpanded}
                    >
                        {isExpanded ? (
                            <>
                                <FaChevronUp size={12} />
                                Hide Key Achievements
                            </>
                        ) : (
                            <>
                                <FaChevronDown size={12} />
                                Show Key Achievements
                            </>
                        )}
                    </button>

                    {isExpanded && (
                        <ul className="mt-4 space-y-3 pt-4 border-t border-white-700">
                            {experience.achievements.map((achievement, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-white-700 text-sm leading-relaxed"
                                >
                                    <span className="text-green-500 mt-1 flex-shrink-0">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </span>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </article>
    );
}
