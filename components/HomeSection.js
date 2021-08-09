import Container from "./Container";
import Button from "./Button";

export default function HomeSection() {
    return (
        <section className="p-5 pb-24" id="home">
            <Container className="lg:flex lg:justify-between md:pt-10 xl:pt-20">
                <div className="text-center pt-32 lg:w-1/2 lg:text-left">
                    <h1 className="text-white-500 text-2xl sm:text-3xl md:text-5xl mb-4 tracking-wider">
                        Valentino Stania <br /> Frontend Developer <br />
                        Bandung, Indonesia
                    </h1>
                    <p className="text-white-700 mb-16 w-full sm:w-6/12 md:w-8/12 mx-auto lg:mx-0 tracking-wide">
                        Menulis kode untuk membantu Anda membuat dan
                        mengembangkan <span className="">Website</span> yang
                        menarik.
                    </p>
                    <Button
                        link="#works"
                        value="MY WORKS"
                        variant="green"
                        className=""
                    />
                </div>
                <div className="relative">
                    <img
                        src="/img/photo.png"
                        alt="Human with notes"
                        className="hero-image mx-auto z-50 h-full w-full"
                        priority
                    />
                </div>
            </Container>
        </section>
    );
}
