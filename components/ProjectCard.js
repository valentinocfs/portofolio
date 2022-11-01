export default function ProjectCard({ title, subtitlte, link, img }) {
    return (
        <article
            className="project-card p-8 lg:p-14 rounded-xl"
            data-aos="zoom-in-up"
            data-aos-delay="200"
            data-aos-duration="2000"
        >
            <div className="group relative transition-all">
                <img
                    src={`/img/${img}`}
                    alt={title}
                    className="w-full mx-auto h-full rounded-lg group-hover:opacity-50"
                    loading="lazy"
                />
                <span className="text-white-500 w-full absolute top-0 h-full hidden transition-all group-hover:block group-hover:opacity-100 text-2xl cursor-pointer -mt-4">
                    <a
                        href="/projects"
                        rel="noopener"
                        className="hover:underline flex justify-center relative top-1/2"
                    >
                        See Detail
                    </a>
                </span>
            </div>
            <div className="text-center sm:px-10 md:px-0">
                <p className="text-xl mt-7 tracking-wider">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener"
                        className="hover:underline"
                    >
                        {title}
                    </a>
                </p>
                <p className="text-white-700 text-base mt-4">{subtitlte}</p>
            </div>
        </article>
    );
}
