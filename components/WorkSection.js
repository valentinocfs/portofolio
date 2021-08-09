import Container from "./Container";
import ShadowHeader from "./ShadowHeader";

export default function WorkSection() {
    return (
        <section className="pt-20 lg:pt-20 px-5" id="works">
            <Container className="">
                <div className="relative text-center mb-20 z-10">
                    <ShadowHeader
                        title="WORKS"
                        subtitle="MY WORKS"
                        variant="center"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-white-500">
                    <div
                        className=""
                        data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="3000"
                    >
                        <div>
                            <img
                                src="/img/project-1.png"
                                alt="20 Project Javscript"
                                className="w-full mx-auto h-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-center sm:px-10 md:px-0">
                            <p className="sm:text-xl mt-7">
                                20 Project Javascript
                            </p>
                            <p className="text-white-700 text-sm sm:text-base mt-4">
                                HTML, CSS, & Javascript
                            </p>
                        </div>
                    </div>
                    <div
                        className=""
                        data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="3000"
                    >
                        <div>
                            <img
                                src="/img/project-2.png"
                                alt="Mockup Procode - Website For Learning AI & Programming"
                                className="w-full mx-auto h-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-center sm:px-10 md:px-0">
                            <p className="sm:text-xl mt-7">
                                Mockup Procode - Learning AI & Programming
                            </p>
                            <p className="text-white-700 text-sm sm:text-base mt-4">
                                Figma
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-20 lg:pt-40 text-white-700 text-center underline">
                    <a href="#">Lihat Karya Lainnya</a>
                </div>
            </Container>
        </section>
    );
}
