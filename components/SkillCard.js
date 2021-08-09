export default function SkillCard({ skill, level, img, alt, list }) {
    return (
        <div
            className="skill-card bg-black-600 p-5 rounded-md text-center relative overflow-hidden text-white-500"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
        >
            <div className="skill-card-img rounded-sm py-8 px-4">
                <img
                    src={img}
                    alt={alt}
                    className="mx-auto h-32 w-32"
                    loading="lazy"
                />
            </div>
            <p className="font-red-hat mt-4 mb-3 tracking-wider">{skill}</p>
            <p className="font-red-hat text-sm text-white-700 pb-3">{level}</p>
            {list ? (
                <div className="skill-desc-card text-left bg-black-500 absolute bottom-0 px-8 py-5 w-full left-0 translate-y-full text-white-700 border border-black-500 rounded-br-md rounded-bl-md">
                    <p></p>
                    {list.map((value, index) => {
                        return (
                            <p
                                className="mb-4 font-thin text-white-500"
                                key={index}
                            >
                                {value}
                            </p>
                        );
                    })}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
