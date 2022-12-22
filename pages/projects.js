export default function Projects() {
    return (
        <div className="w-full h-screen grid place-items-center bg-black-500 text-white-500">
            <div className="text-center">
                <div class="text-center lg:flex justify-center ">
                    <img 
                        src="/img/worker-image.svg"
                        alt="Photo of worker"
                        className="mx-auto"
                        property="true"
                    />
                    <div>
                        <h1 className="text-xl sm:text-2xl lg:text-4xl pt-4 lg:pt-10">THIS PAGE IS UNDER CONSTRUCTION!</h1>
                        <p className=" text-white-700 mt-16 px-4">Currently working on this website to deliver a better user experience</p>
                    </div>
                </div>
                <p className="pt-5 text-white-700 mt-16 hover:underline">
                    Back to{' '}
                    <a
                        href="/"
                        rel="noopener"
                        className="text-green-500"
                    >
                        Home
                    </a>
                </p>
            </div>
        </div>
    );
}
