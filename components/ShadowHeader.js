export default function ShadowHeader({ title, subtitle, span, variant }) {
    const variants = {
        center: "relative top-20 sm:top-24 lg:top-32",
        absolute: "lg:absolute lg:top-4 relative top-24",
    };

    return (
        <>
            <h2
                className={`text-white-500 text-5xl font-bold font-red-hat z-50 tracking-widest ${variants[variant]}`}
            >
                {title}
                <span className="text-base font-red-hat">{span}</span>
            </h2>
            <p className="header-shadow font-red-hat text-5xl sm:text-7xl md:text-8xl lg:text-11xl font-black tracking-wider">
                {subtitle}
            </p>
        </>
    );
}
