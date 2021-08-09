export default function Button({ link, value, className, variant, type }) {
    let addClassName = className ? className : "";
    let variants = {
        green: "bg-green-500 border border-green-500 hover:bg-black-500 hover:border-white-500",
        "outline-green":
            "border border-white-500 hover:bg-green-500 hover:border-none",
    };
    return (
        <>
            <a
                href={link}
                className={`group px-12 py-3 rounded-md font-bold tracking-widest text-black-500 button-works relative hover:text-white-500 font-medium hover:border transition cursor-pointer ${addClassName} ${variants[variant]}`}
            >
                <i
                    className={`text-black-500 group-hover:text-white-500 relative top-1 text-2xl font-bold bx bx-${type} ${
                        type ? "mr-3" : ""
                    }`}
                ></i>
                {value}
            </a>
        </>
    );
}
