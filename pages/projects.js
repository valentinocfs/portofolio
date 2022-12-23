export default function Projects() {
    return (
        <div className="w-full h-screen grid place-items-center bg-black-500 text-white-500">
            <div className="text-center">
                <div className="text-center lg:flex justify-center">
                    <img 
                        src="/img/worker-image.png"
                        alt="Photo of worker"
                        className="under-construct-image mx-auto"
                        priority="true"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                    />
                    <div 
                        className=""
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <h1 className="text-xl sm:text-2xl lg:text-4xl pt-4 lg:pt-24 mt-4 lg:mt-0">THIS PAGE IS UNDER CONSTRUCTION!</h1>
                        <p className=" text-white-700 mt-4 md:mt-16 px-12 lg:px-8">Currently working on this website to deliver a better user experience 👌</p>
                    </div>
                </div>
                <p className="group pt-5 text-white-700 mt-10 hover:underline transition-all"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <a
                        href="/"
                        rel="noopener"
                        className=""
                    >
                        Back to <span className="group-hover:text-green-500">Home</span>
                    </a>
                </p>
            </div>
        </div>
    );
}
