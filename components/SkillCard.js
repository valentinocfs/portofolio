export default function SkillCard({ skill, level, img, alt, list }) {
    return (
        <article
            className="skill-card border border-white-700 rounded-md text-center relative overflow-hidden text-white-500 px-8 sm:h-80"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
        >
            <div className="skill-card-img rounded-sm py-8 mt-2">
                <img
                    src={img}
                    alt={alt}
                    className="mx-auto h-24 w-24 md:h-32 md:w-32"
                    loading="lazy"
                />
            </div>
            <div className="py-4 md:py-2 mb-4">
                <p className="tracking-wider text-lg mb-2">{skill}</p>
                <p className="font-red-hat text-sm lg:text-lg text-white-700 pb-4">
                    {level}
                </p>
            </div>
            {list ? (
                <div
                    className="skill-desc-card text-left bg-black-500 absolute bottom-0 px-8 py-5 w-full left-0 top-0 translate-y-full text-white-500 border-t
                border-white-700 rounded-tr-md rounded-tl-md"
                >
                    <p className="mb-7 text-md">{skill}</p>
                    {list.map((value, index) => {
                        return (
                            <p
                                className="mb-4 font-thin text-white-700 text-sm lg:text-base"
                                key={index}
                            >
                                {value}
                            </p>
                        );
                    })}
                </div>
            ) : (
                ''
            )}
        </article>
    );
}
