import Container from './Container';
import { skills } from '../data/skills';
import { FaCode, FaDatabase, FaTools, FaServer } from 'react-icons/fa';

export default function SkillSection() {
    return (
        <section className="py-10 lg:py-20 px-5 bg-black-700/30" id="skills">
            <Container>
                <div 
                    className="relative text-center mb-20 z-10"
                    data-aos="fade-up"
                >
                    <h2 className="text-4xl font-bold text-white-500 mb-2">SKILLS & TECHNOLOGIES</h2>
                    <p className="text-white-700 max-w-2xl mt-5 mx-auto">
                        A comprehensive overview of my technical skills and the technologies I work with
                    </p>
                </div>
                
                {/* Tech Stack */}
                <section className="py-0 lg:py-8 px-5">
                    <div className="container mx-auto max-w-4xl">
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Frontend */}
                            <div 
                                className="bg-black-700 rounded-xl p-6 border border-white-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group cursor-default"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                        <FaCode className="text-green-500" size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white-500">
                                        Frontend
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-white-700 text-sm">
                                    {skills.frontend.map((skill) => (
                                        <li key={skill.name} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Backend */}
                            <div 
                                className="bg-black-700 rounded-xl p-6 border border-white-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group cursor-default"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                        <FaServer className="text-green-500" size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white-500">
                                        Backend
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-white-700 text-sm">
                                    {skills.backend.map((skill) => (
                                        <li key={skill.name} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Databases */}
                            <div 
                                className="bg-black-700 rounded-xl p-6 border border-white-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group cursor-default"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                        <FaDatabase className="text-green-500" size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white-500">
                                        Database
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-white-700 text-sm">
                                    {skills.databases.map((skill) => (
                                        <li key={skill.name} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tools */}
                            <div 
                                className="bg-black-700 rounded-xl p-6 border border-white-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group cursor-default"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                        <FaTools className="text-green-500" size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white-500">
                                        Tools
                                    </h3>
                                </div>
                                <ul className="space-y-2 text-white-700 text-sm">
                                    {skills.tools.map((skill) => (
                                        <li key={skill.name} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </section>
    );
}
