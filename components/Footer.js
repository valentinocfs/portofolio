import Container from '../components/Container';
import SocmedCard from '../components/SocmedCard';
import { FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function Footer() {
    const contact = {
        email: 'valentinostania@gmail.com',
        location: 'Bandung, West Java, Indonesia',
        website: 'valentinocfs.my.id',
    };

    return (
        <footer className="bg-black-700 text-white-500">
            <Container className="pt-10 sm:pt-14 pb-20 md:pb-8">
                <div className="flex flex-col lg:flex-row justify-between mb-16 sm:mb-24 px-5 sm:px-8 relative gap-8">
                    {/* About Section */}
                    <div className="lg:w-1/3">
                        <p className="mb-7 font-medium tracking-wider text-white-500">About</p>
                        <div className="space-y-2 text-white-700">
                            <p className="font-semibold text-white-600">Valentino Stania</p>
                            <div className="mt-4 pt-3 space-y-2">
                                <p className="flex items-center gap-2 text-sm">
                                    <FaEnvelope size={14} />
                                    <a href={`mailto:${contact.email}`} className="hover:text-green-500 transition-colors">
                                        {contact.email}
                                    </a>
                                </p>
                                <p className="flex items-center gap-2 text-sm">
                                    <FaGlobe size={14} />
                                    <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                                        {contact.website}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="text-left lg:text-center lg:w-1/3">
                        <p className="mb-8 font-medium tracking-wider text-white-500">
                            Social Media
                        </p>
                        <ul className="flex flex-wrap justify-start lg:justify-center gap-8">
                            <SocmedCard
                                type="instagram"
                                link="valentinocfs"
                                className="opacity-60 hover:opacity-100 transition-opacity"
                            />
                            <SocmedCard
                                type="twitter"
                                link="valentino_cfs"
                                className="opacity-60 hover:opacity-100 transition-opacity"
                            />
                            <SocmedCard
                                type="linkedin"
                                link="in/valentinostania"
                                className="opacity-60 hover:opacity-100 transition-opacity"
                            />
                            <SocmedCard
                                type="github"
                                link="valentinocfs"
                                className="opacity-60 hover:opacity-100 transition-opacity"
                            />
                        </ul>
                    </div>

                    {/* Others Section */}
                    <div className="lg:w-1/3 lg:text-right">
                        <p className="mb-8 font-medium tracking-wider text-white-500">
                            Others
                        </p>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://docs.google.com/document/d/1Gw2j4oyElcZ5GM01_k_Wb0fugnJaZfSY1NT1gtlQ3-Y/edit?usp=sharing"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-white-700 hover:text-green-500 transition-colors"
                                >
                                    Download Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-white-700 text-sm">
                    <p>
                        Made with ❤ <br />
                        &copy; {new Date().getFullYear()} Valentino Stania
                    </p>
                </div>
            </Container>
        </footer>
    );
}
