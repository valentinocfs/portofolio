import Container from './Container';
import ShadowHeader from './ShadowHeader';

export default function AboutSection() {
    return (
        <section className="px-10 mt-24 pt-2 lg:pt-32" id="about">
            <Container>
                <div className="relative text-center lg:text-left mb-20 z-10">
                    <ShadowHeader
                        title="ABOUT ME"
                        subtitle="ABOUT ME"
                        variant="absolute"
                    />
                    <div className="bg-white-500 w-full sm:w-80 lg:w-96 h-0.5 rounded-md mt-20 lg:absolute lg:top-12 mx-auto lg:mx-0"></div>
                </div>
                <div className="lg:pr-96 lg:pl-16 mx-5">
                    <div className="sm:px-10 md:px-12 lg:px-0 text-white-500">
                        <div
                            className="flex mb-10"
                            data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="2000"
                        >
                            <div>
                                <p className="mt-1 mb-6 text-white-700">
                                    ABOUT
                                </p>
                                <p className="text-white-500 text-justify">
                                    Hi! I am Valentino Stania. Interested in web
                                    and android development especially in
                                    Frontend Development. I have
                                    <span className="text-green-500">
                                        {' '}
                                        1 year{' '}
                                    </span>
                                    of experience in Web Development and have
                                    created several projects to solve a problem
                                    with my expertise.
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex mb-10"
                            data-aos="fade-right"
                            data-aos-delay="400"
                            data-aos-duration="2000"
                        >
                            <div>
                                <p className="mt-1 mb-6 text-white-700">
                                    JOURNEY
                                </p>
                                <p className="text-white-500 text-justify">
                                    Start learning about web development in high
                                    school and interested about frontend web
                                    using{' '}
                                    <span className="text-green-500">
                                        Javascript
                                    </span>
                                    . In 2021, I started learning backend web
                                    development using PHP and Laravel. I worked
                                    on several projects, including Procode,
                                    PILKASIS, Peduli Diri, and Pomoline. For my
                                    last projects, I mostly used{' '}
                                    <span className="text-green-500">
                                        React
                                    </span>{' '}
                                    and{' '}
                                    <span className="text-green-500">Next</span>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
