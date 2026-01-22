import Container from './Container';
import SocmedBox from './SocmedBox';
import { FaBriefcase, FaCode } from 'react-icons/fa';

export default function HomeSection() {
    return (
        <section className="p-5 pb-24 min-h-screen flex items-center" id="home">
            <Container className="relative">
                {/* Decorative Code Background */}
                {/* <div 
                    className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none hidden xl:block"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    <pre className="text-xs text-green-500 font-mono leading-relaxed transform translate-x-4">
                        {`const developer = {
                            name: "Valentino",
                            role: "Frontend Dev",
                            skills: ["React", "Next.js", "Typescript", "Tailwind", "Figma", "Laravel", "MySQL", "Nodejs"],
                            available: true
                        };

                        function buildWeb() {
                            return "Amazing sites";
                        }`}
                    </pre>
                </div> */}
                <div className="lg:flex lg:justify-between md:pt-10 xl:pt-0 relative z-10">
                    {/* Left Content */}
                    <div className="text-center pt-8 sm:pt-24 lg:pt-8 lg:w-1/2 lg:text-left">
                        {/* Availability Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-green-500 text-sm font-medium">
                                Open to Work
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1
                            className="text-white-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-wider"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Software Developer
                        </h1>

                        {/* Value Proposition */}
                        <h2
                            className="text-white-700 text-md sm:text-lg md:text-xl tracking-wide mb-6"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Fullstack Developer with 3 years of experience building end-to-end web applications, covering both frontend and backend development.
                        </h2>

                        {/* Stats Badges */}
                        <div
                            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black-700 rounded-lg border border-white-700 hover:border-green-500/50 transition-colors">
                                <FaBriefcase className="text-green-500" size={14} />
                                <span className="text-white-500 text-sm font-medium">3+ Years</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black-700 rounded-lg border border-white-700 hover:border-green-500/50 transition-colors">
                                <FaCode className="text-green-500" size={14} />
                                <span className="text-white-500 text-sm font-medium">9+ Projects</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-black-500 rounded-lg hover:bg-green-400 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black-700 text-sm"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white-500 text-white-500 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 focus:ring-offset-black-700 text-sm"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                Get in Touch
                            </a>
                        </div>

                        {/* Social Links - Desktop */}
                        <div 
                            className="hidden lg:block"
                            data-aos="fade-up"
                            data-aos-delay="700"
                        >
                            <SocmedBox />
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div
                        className="relative mt-8 lg:mt-16 lg:w-1/2 flex justify-center lg:justify-end"
                        data-aos="fade-left"
                        data-aos-delay="500"
                    >
                        <div className="relative w-64 sm:w-80 md:w-96 lg:w-[450px]">
                            {/* Decorative circle behind image */}
                            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl transform scale-75 animate-pulse-slow"></div>
                            
                            {/* Main Image */}
                            <img
                                src="/img/banner.png"
                                alt="Valentino Stania - Software Developer"
                                className="relative z-10 mx-auto w-full h-auto object-contain transition-transform duration-500 animate-float"
                                priority="true"
                            />

                            {/* Floating badges */}
                            <div 
                                className="absolute -bottom-4 -left-4 bg-black-700 px-4 py-2 rounded-lg border border-white-700 shadow-lg z-20 sm:block animate-float"
                                data-aos="fade-up"
                                data-aos-delay="800"
                            >
                                <p className="text-white-500 text-sm font-medium">Frontend</p>
                            </div>
                            <div 
                                className="absolute -top-4 -right-4 bg-black-700 px-4 py-2 rounded-lg border border-white-700 shadow-lg z-20 sm:block animate-float"
                                data-aos="fade-up"
                                data-aos-delay="900"
                                style={{ animationDelay: '0.5s' }}
                            >
                                <p className="text-white-500 text-sm font-medium">Backend</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links - Mobile */}
                    <div
                        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 lg:hidden"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                    </div>
                </div>
            </Container>

            <style jsx global>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                
                @keyframes pulseSlow {
                    0%, 100% {
                        opacity: 0.2;
                    }
                    50% {
                        opacity: 0.4;
                    }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-pulse-slow {
                    animation: pulseSlow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
