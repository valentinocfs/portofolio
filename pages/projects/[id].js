import Head from 'next/head';
import { projects } from '../../data/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaLink, FaTasks, FaLightbulb, FaChartLine } from 'react-icons/fa';

export default function ProjectDetail({ project }) {
    if (!project) {
        return (
            <div className="bg-black-500 min-h-screen flex items-center justify-center">
                <Head>
                    <title>404 - Project Not Found</title>
                </Head>
                <div className="text-center px-5">
                    <h1 className="text-4xl md:text-5xl font-bold text-white-500 mb-4">
                        404
                    </h1>
                    <p className="text-white-700 text-lg mb-8">
                        Project not found
                    </p>
                    <a
                        href="/projects"
                        className="inline-flex items-center gap-2 text-green-500 hover:underline text-lg"
                    >
                        <FaArrowLeft /> Back to Projects
                    </a>
                </div>
            </div>
        );
    }

    return (
        <>  
            <Head>
                <title>{project.title} - Project | Valentino Stania</title>
                <meta name="description" content={project.shortDescription} />
                <meta property="og:title" content={`${project.title} - Project | Valentino Stania`} />
                <meta property="og:description" content={project.shortDescription} />
            </Head>
            <div className="bg-black-500 min-h-screen">
                <Navbar />
                <main className="pt-0 sm:pt-20 mt-8 sm:mt-16 pb-20">
                    <article className="container mx-auto px-5 max-w-5xl">
                        {/* Back Link */}
                        <a
                            href="/projects"
                            className="inline-flex items-center gap-2 text-white-700 hover:text-green-500 mb-6 transition-colors text-sm"
                            data-aos="fade-left"
                        >
                            <FaArrowLeft size={14} /> Back to Projects
                        </a>

                        {/* Hero Image */}
                        <div 
                            className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8 border border-white-700"
                            data-aos="fade-up"
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} main screenshot`}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>

                        {/* Project Header */}
                        <header className="mb-8 border-0 shadow-none" data-aos="fade-up" data-aos-delay="100">
                            {/* Category Badge */}
                            <span 
                                className="inline-block px-3 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded-full mb-4"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                {project.category === 'web-app' ? 'Web Application' : 
                                 project.category === 'landing-page' ? 'Landing Page' : 
                                 project.category === 'api' ? 'Backend/API' : 'Project'}
                            </span>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-white-500 mb-4">
                                {project.title}
                            </h1>

                            {/* Short Description */}
                            <p className="text-lg text-white-700 mb-6 leading-relaxed">
                                {project.shortDescription}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black-500 text-sm rounded-lg hover:bg-green-400 transition-colors"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                        View Live
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-black-700 text-white-500 text-sm rounded-lg border border-white-700 hover:border-green-500/50 transition-colors"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        <FaGithub size={16} />
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </header>

                        {/* Divider */}
                        <div className="border-t border-white-700 mb-8" data-aos="fade-up" data-aos-delay="500"></div>

                        {/* Tech Stack Section */}
                        <section className="mb-8" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="text-xl font-bold text-white-500 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                    <FaCode size={16} className="text-green-500" />
                                </span>
                                Tech Stack
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-black-700 text-white-500 text-sm rounded-lg border border-white-700"
                                        data-aos="zoom-in"
                                        data-aos-delay={`${100 + index * 50}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* About This Project Section */}
                        <section className="mb-8" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="text-xl font-bold text-white-500 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                    <FaLink size={16} className="text-green-500" />
                                </span>
                                About This Project
                            </h2>
                            <div className="bg-black-700 rounded-xl p-6 border border-white-700">
                                <p className="text-white-700 leading-relaxed whitespace-pre-line">
                                    {project.fullDescription}
                                </p>
                            </div>
                        </section>

                        {/* Key Features Section */}
                        {project.features && project.features.length > 0 && (
                            <section className="mb-8" data-aos="fade-up" data-aos-delay="200">
                                <h2 className="text-xl font-bold text-white-500 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                        <FaTasks size={16} className="text-green-500" />
                                    </span>
                                    Key Features
                                </h2>
                                <div className="bg-black-700 rounded-xl p-6 border border-white-700">
                                    <ul className="space-y-3">
                                        {project.features.map((feature, index) => (
                                            <li 
                                                key={index} 
                                                className="flex items-start gap-3 text-white-700"
                                                data-aos="fade-left"
                                                data-aos-delay={`${100 + index * 50}`}
                                            >
                                                <span className="text-green-500 mt-1 flex-shrink-0">
                                                    <svg
                                                        className="w-5 h-5"
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
                                                <span className="leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        )}

                        {/* Challenges & Solutions Section */}
                        {project.challenges && (
                            <section className="mb-8" data-aos="fade-up" data-aos-delay="200">
                                <h2 className="text-xl font-bold text-white-500 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                        <FaChartLine size={16} className="text-green-500" />
                                    </span>
                                    Challenges & Solutions
                                </h2>
                                <div className="bg-black-700 rounded-xl p-6 border border-white-700">
                                    <p className="text-white-700 leading-relaxed whitespace-pre-line">
                                        {project.challenges}
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Lessons Learned Section */}
                        {project.lessonsLearned && (
                            <section className="mb-8" data-aos="fade-up" data-aos-delay="200">
                                <h2 className="text-xl font-bold text-white-500 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                        <FaLightbulb size={16} className="text-green-500" />
                                    </span>
                                    Lessons Learned
                                </h2>
                                <div className="bg-black-700 rounded-xl p-6 border border-white-700">
                                    <p className="text-white-700 leading-relaxed whitespace-pre-line">
                                        {project.lessonsLearned}
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Screenshots Gallery Section */}
                        {project.screenshots && project.screenshots.length > 0 && (
                            <section className="mb-8" data-aos="fade-up" data-aos-delay="200">
                                <h2 className="text-xl font-bold text-white-500 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                                        <FaLink size={16} className="text-green-500" />
                                    </span>
                                    Screenshots
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.screenshots.map((screenshot, index) => (
                                        <div 
                                            key={index} 
                                            className="relative h-56 rounded-lg overflow-hidden border border-white-700"
                                            data-aos="fade-up"
                                            data-aos-delay={`${100 + index * 100}`}
                                        >
                                            <img
                                                src={screenshot}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>
                </main>
                <Footer />
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const paths = projects.map((project) => ({
        params: { id: project.id },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const project = projects.find((p) => p.id === params.id);

    return {
        props: {
            project: project || null,
        },
    };
}
