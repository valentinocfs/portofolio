import { useEffect, useState } from "react";

export default function ScrollToTop({ className }) {
    const [displayScrollBox, setDisplayScrollBOx] = useState("hidden");

    const addClassName = className ? className : "";

    useEffect(() => {
        window.addEventListener("scroll", function () {
            let yPosition = window.pageYOffset;
            if (yPosition > 300) {
                setDisplayScrollBOx("block");
            } else {
                setDisplayScrollBOx("hidden");
            }
        });
    }, []);

    return (
        <>
            <a
                href="#home"
                className={`${displayScrollBox} ${addClassName} bg-black-400 text-white-500 text-sm rounded-md px-4 py-3 transition-all flex items-center z-40`}
            >
                Back To Top
                <img
                    src="/icon/short_up.png"
                    alt="Back To Top"
                    width="16"
                    height="16"
                    className="ml-1"
                />
            </a>
        </>
    );
}
