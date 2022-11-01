import Container from '../components/Container';
import SocmedCard from '../components/SocmedCard';

export default function Footer() {
    return (
        <footer className="bg-black-700 text-white-500">
            <Container className="pt-10 sm:pt-14 pb-20 md:pb-8">
                <div className="flex justify-between mb-16 sm:mb-24 px-5 sm:px-8 relative">
                    <div className="">
                        <p className="mb-8 font-medium tracking-wider">About</p>
                        <p className="text-white-700">Valentino Stania</p>
                    </div>
                    <div className="text-center order-3 lg:order-2 hidden lg:block">
                        <p className="mb-8 font-medium tracking-wider">
                            Social Media
                        </p>
                        <ul className="flex flex-wrap">
                            <SocmedCard
                                type="github"
                                link="valentinocfs"
                                className="mr-10 opacity-60"
                            />
                            <SocmedCard
                                type="linkedin"
                                link="in/valentino-s-9643131b6"
                                className="mr-10 opacity-60"
                            />
                            <SocmedCard
                                type="instagram"
                                link="valentinocfs"
                                className="mr-10 opacity-60"
                            />
                            <SocmedCard
                                type="twitter"
                                link="valentino_cfs"
                                className="opacity-60"
                            />
                        </ul>
                    </div>  
                    <div className="order-2 lg:order-3">
                        <p className="mb-8 font-medium tracking-wider">
                            Others
                        </p>
                        <a
                            href="https://docs.google.com/document/d/1Gw2j4oyElcZ5GM01_k_Wb0fugnJaZfSY1NT1gtlQ3-Y/edit?usp=sharing"
                            target="_blank"
                            rel="noopener"
                            className="text-white-700"
                        >
                            My Resume
                        </a>
                    </div>
                </div>
                <div className="text-center text-white-700">
                    <p>
                        Made with ❤ <br />
                        From Bandung, Indonesia <br />
                        &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </Container>
        </footer>
    );
}
