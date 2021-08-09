import Container from "../components/Container";
import SocmedCard from "../components/SocmedCard";

export default function Footer() {
    return (
        <footer className="bg-black-700 text-white-500">
            <Container className="pt-10 sm:pt-14 pb-20 md:pb-8">
                <div className="flex justify-between mb-16 sm:mb-24 px-5 sm:px-8 relative">
                    <div className="">
                        <p className="mb-8 font-medium tracking-wider">
                            PORTOFOLIO
                        </p>
                        <p className="text-white-700">Valentino Stania</p>
                    </div>
                    <div className="text-left text-center order-3 lg:order-2 hidden lg:block">
                        <p className="mb-8 font-medium tracking-wider">
                            SOCIAL MEDIA
                        </p>
                        <ul className="flex flex-wrap">
                            <SocmedCard
                                type="instagram"
                                link="valentino.cfs"
                                className="mr-10 opacity-60"
                            />
                            <SocmedCard
                                type="twitter"
                                link="valentino.cfs"
                                className="mr-10 opacity-60"
                            />
                            <SocmedCard
                                type="facebook"
                                link="valentino_cfs"
                                className="mr-10 opacity-60"
                            />
                            <SocmedCard
                                type="github"
                                link="valentinocfs"
                                className="opacity-60"
                            />
                        </ul>
                    </div>
                    <div className="order-2 lg:order-3">
                        <p className="mb-8 font-medium tracking-wider">
                            LAINNYA
                        </p>
                        <p className="text-white-700">Download CV</p>
                    </div>
                </div>
                <div className="text-center text-white-700">
                    <p>
                        Made with ❤ <br /> From Bandung, Indonesia{" "}
                    </p>
                </div>
            </Container>
        </footer>
    );
}
