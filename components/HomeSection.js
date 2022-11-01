import Container from './Container';
import Button from './Button';
import SocmedBox from './SocmedBox';

export default function HomeSection() {
    return (
        <section className="p-5 pb-24" id="home">
            <Container className="lg:flex lg:justify-between md:pt-10 xl:pt-20 relative">
                <div className="text-center pt-16 sm:pt-32 lg:pt-40 lg:w-1/2 lg:text-left">
                    <h1
                        className="text-white-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 tracking-wider"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                    >
                        Valentino Stania <br />
                    </h1>
                    <h2
                        className="text-white-700 tracking-wider mb-12"
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                    >
                        Web Developer - Frontend Enthusiast
                    </h2>
                    {/* <p className="text-white-700 mb-12 w-10/12 sm:w-6/12 md:w-8/12 mx-auto lg:mx-0 lg:w-10/12 tracking-wide">
                        Writing <span className="text-purple-500">code</span> to
                        help you build and develop a great{' '}
                        <span className="text-purple-500">websites</span>.
                    </p> */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <Button
                            link="https://docs.google.com/document/d/1Gw2j4oyElcZ5GM01_k_Wb0fugnJaZfSY1NT1gtlQ3-Y/edit?usp=sharing"
                            value="MY RESUME"
                            variant="green"
                            className="font-bold"
                        />
                    </div>
                </div>
                <div
                    className="relative mt-2 lg:mt-0 "
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                >
                    <img
                        src="/img/photo.png"
                        alt="3D Human Animation"
                        className="hero-image mx-auto z-50 relative h-full w-full"
                        priority="true"
                    />
                </div>
                <div className="absolute -bottom-32 left-1/2 right-1/2 lg:hidden">
                    <SocmedBox />
                </div>
            </Container>
        </section>
    );
}
