import { useEffect, useState } from 'react';
import Container from './Container';
import { contact } from '../data/contact';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setHours(now.getHours());
            setMinutes(now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes());
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
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
    );
}
