export default function ShadowHeader({
    title,
    subtitle,
    span,
    variant,
    className,
}) {
    const addClassName = className ? className : '';
    const variants = {
        center: 'relative sm:top-24 lg:top-32',
        absolute: 'lg:absolute lg:top-4 relative top-24',
    };

    return (
        <>
            <h2
                className={`text-white-500 text-3xl font-extrabold font-red-hat z-50 tracking-widest ${variants[variant]} ${addClassName}`}
            >
                {title}
                <span className="text-base font-red-hat">{span}</span>
            </h2>
            <p className="header-shadow font-red-hat text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-wider relative top-8">
                {subtitle}
            </p>
        </>
    );
}
