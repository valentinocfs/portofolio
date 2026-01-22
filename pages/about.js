import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceSection from '../components/ExperienceSection';
import { profile } from '../data/profile';
import { education } from '../data/education';
import { achievements } from '../data/achievements';
import { contact } from '../data/contact';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Container from '../components/Container';

export default function AboutPage() {
    return (
        <>
            <div className="bg-black-500 min-h-screen">
                <Navbar />
                <main className="pt-8 md:pt-20">
                    {/* Hero Section */}
                    <section className="py-16 px-5">
                        <div className="container mx-auto">
                            <div className="text-center max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
                                <div 
                                    className="w-32 h-32 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center"
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                >
                                    <span className="text-black-500 font-bold text-4xl">VS</span>
                                </div>
                                <h1 
                                    className="text-4xl md:text-5xl font-bold text-white-500 mb-2"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    {profile.name}
                                </h1>
                                <p 
                                    className="text-xl text-green-500 font-medium mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    {profile.title}
                                </p>
                                <p 
                                    className="text-white-700 max-w-xl mx-auto text-lg"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                >
                                    {profile.tagline}
                                </p>

                                {/* Contact Info */}
                                <div 
                                    className="flex flex-wrap justify-center gap-4 mt-6"
                                    data-aos="fade-up"
                                    data-aos-delay="600"
                                >
                                    <a 
                                        href={`mailto:${profile.email}`}
                                        className="inline-flex items-center gap-2 text-white-700 hover:text-green-500 transition-colors"
                                    >
                                        <FaEnvelope size={16} />
                                        <span className="text-sm">{profile.email}</span>
                                    </a>
                                    <a 
                                        href={`https://${profile.linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white-700 hover:text-green-500 transition-colors"
                                    >
                                        <FaLinkedin size={18} />
                                        <span className="text-sm">Valentino Stania</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* My Story */}
                    <section 
                        className="py-12 px-5 bg-black-700"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="100"
                    >
                        <div className="container mx-auto max-w-4xl">
                            <div className="flex items-center gap-3 mb-6">
                                <h2 
                                    className="text-2xl md:text-3xl font-bold text-white-500"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    My Story
                                </h2>
                            </div>
                            <div 
                                className="prose prose-invert max-w-none text-white-700 leading-relaxed space-y-4 text-lg"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <p>
                                    Hello! I'm <strong>{profile.name}</strong>, a passionate <strong>{profile.title}</strong> based in {profile.location}. 
                                    I have three years of experience building end-to-end web applications, covering both frontend and backend development.
                                </p>
                                <p>
                                    My journey started with a curiosity about how websites work, which quickly evolved into a deep passion 
                                    for creating intuitive and visually appealing digital experiences. I specialize in using JavaScript and 
                                    TypeScript with React and Next.js for frontend, and PHP and Node.js for backend services.
                                </p>
                                <p>
                                    I have experience developing data-driven systems, including tax information platforms and GIS-based applications. 
                                    I'm comfortable designing RESTful APIs, working with relational databases, and delivering scalable, 
                                    maintainable solutions in Agile environments.
                                </p>
                                <p>
                                    When I'm not coding, you can find me exploring new technologies, participating in tech events like 
                                    Google Developer Groups, or sharing knowledge with the developer community.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Experience Section - Same as Home */}
                    <div data-aos="fade-up" data-aos-offset="100">
                        <ExperienceSection />
                    </div>

                    {/* Education */}
                    <section 
                        className="py-10 px-5 bg-black-700/30"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="100"
                    >
                        <div className="container mx-auto max-w-4xl">
                            <div className="flex items-center gap-3 mb-8">
                                <h2 
                                    className="text-2xl md:text-3xl font-bold text-white-500"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    Education
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div 
                                        key={edu.id} 
                                        className="bg-black-700 rounded-xl p-6 border border-white-700"
                                        data-aos="fade-up"
                                        data-aos-delay={`${300 + index * 100}`}
                                    >
                                        <h3 className="text-xl font-bold text-white-500 mb-2">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-green-500 font-medium mb-2">
                                            {edu.degree}
                                        </p>
                                        <p className="text-white-700 text-sm mb-4">
                                            {edu.period}
                                        </p>
                                        <ul className="space-y-2">
                                            {edu.highlights.map((highlight, hIndex) => (
                                                <li 
                                                    key={hIndex} 
                                                    className="flex items-start gap-2 text-white-700 text-sm"
                                                    data-aos="fade-left"
                                                    data-aos-delay={`${400 + index * 100 + hIndex * 50}`}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Achievements */}
                    <section 
                        className="py-16 mb-20 px-5"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="100"
                    >
                        <div className="container mx-auto max-w-4xl">
                            <div className="flex items-center gap-3 mb-8">
                                <h2 
                                    className="text-2xl md:text-3xl font-bold text-white-500"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    Achievements & Certifications
                                </h2>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {achievements.map((achievement, index) => (
                                    <div 
                                        key={achievement.id}
                                        className="bg-black-700 rounded-lg p-4 border border-white-700"
                                        data-aos="fade-up"
                                        data-aos-delay={`${200 + index * 100}`}
                                    >
                                        <p className="text-white-500 font-medium mb-1">
                                            {achievement.title}
                                        </p>
                                        <p className="text-white-700 text-sm">
                                            {achievement.description}
                                        </p>
                                        {achievement.year && (
                                            <p className="text-white-700 text-xs mt-1">
                                                {achievement.year}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Let's Work Together CTA */}
                    <section className="pt-20 pb-20" id="contact">
                        <Container className="relative px-10 sm:px-8">
                            <div className="mx-auto relative -top-3 lg:-top-16 flex flex-col-reverse items-center justify-center">
                                <div className="bg-black-500 text-white-500 p-5 lg:w-3/4 rounded-md">
                                    <h3
                                        className="font-bold text-2xl sm:text-3xl md:text-center mb-8"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                        data-aos-duration="3000"
                                    >
                                        {contact.headline} 🤝
                                    </h3>
                                    <p
                                        className="text-white-700 md:text-center"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                        data-aos-duration="3000"
                                    >
                                        {contact.subheadline}
                                    </p>
                                    {/* Connect with me on LinkedIn */}
                                    <div className="text-center mt-8 flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="3000">
                                        <a
                                            href={contact.ctaLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white-500 text-white-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 focus:ring-offset-black-700"
                                        >
                                            <FaEnvelope size={20} />
                                            {contact.ctaText}
                                        </a>
                                        <a
                                            href={contact.ctaLink2}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white-500 text-white-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 focus:ring-offset-black-700"
                                        >
                                            <FaLinkedin size={20} />
                                            {contact.ctaText2}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
