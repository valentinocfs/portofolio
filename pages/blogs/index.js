import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaCog} from 'react-icons/fa';

export default function BlogPage() {
    return (
        <>
            <Head>
                <title>Blog - Valentino Stania</title>
                <meta name="description" content="Technical articles, tutorials, and insights about web development, software engineering, and modern technologies." />
                <meta property="og:title" content="Blog - Valentino Stania" />
                <meta property="og:description" content="Technical articles and insights about web development." />
            </Head>
            <div className="bg-black-500 min-h-screen">
                <Navbar />
                <main className="pt-8 md:pt-20">
                    <section className="py-20 px-5">
                        <div className="container mx-auto max-w-2xl text-center">
                            {/* Icon */}
                            <div 
                                className="mb-8 flex justify-center"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <div className="relative w-48 h-48">
                                    <img
                                        src="/img/worker-image.png"
                                        alt="Working on blog"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Header */}
                            <div data-aos="fade-up" data-aos-delay="200">
                                <p className="text-white-700 mb-8">
                                    Technical articles, tutorials, and insights about Web Development
                                </p>
                            </div>

                            {/* Under Construction Message */}
                            <div 
                                className="bg-black-700 rounded-xl p-8 border border-white-700 max-w-xl mx-auto"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <FaCog className="text-green-500 animate-spin" size={20} />
                                    <span className="text-green-500 font-medium">Currently Working On This Page</span>
                                </div>
                                <p className="text-white-700 text-sm leading-relaxed">
                                    I'm currently building this section to share my knowledge and experiences 
                                    in Web Development.
                                </p>
                            </div>

                            {/* CTA */}
                            <div 
                                className="mt-8"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-black-500 text-sm font-medium rounded-lg hover:bg-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black-700"
                                    aria-label="Back to Home"
                                >
                                    <span>Back to Home</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>

            <style jsx global>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }
                
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-spin {
                    animation: spin 2s linear infinite;
                }
            `}</style>
        </>
    );
}
