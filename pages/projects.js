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
                    />
                    <div className="">
                        <h1 className="text-xl sm:text-2xl lg:text-4xl pt-4 lg:pt-24 mt-4 lg:mt-0">THIS PAGE IS UNDER CONSTRUCTION!</h1>
                        <p className=" text-white-700 mt-4 md:mt-16 px-12 lg:px-8">Currently working on this website to deliver a better user experience 👌</p>
                    </div>
                </div>
                <p className="group pt-5 text-white-700 mt-10 hover:underline transition-all">
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
