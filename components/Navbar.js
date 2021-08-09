import { useEffect, useState } from "react";
import SocmedCard from "./SocmedCard";
import NavList from "./NavList";

export default function Navbar() {
    const [button, setButton] = useState(false);
    const [collpase, setCollpase] = useState(false);
    const [menu, setMenu] = useState(false);

    const [bgColor, setBgColor] = useState("bg-black-500");

    useEffect(() => {
        function responsiveNavbar() {
            const vw = window.outerWidth;
            const threshold = 768;

            if (vw <= threshold) {
                setCollpase(true);
            }

            if (vw >= threshold) {
                setCollpase(false);
            }
        }

        window.addEventListener("resize", responsiveNavbar);

        window.addEventListener("scroll", function () {
            let yPosition = window.pageYOffset;
            if (yPosition > 110) {
                setBgColor("bg-black-700");
            } else {
                setBgColor("bg-black-500");
            }
        });

        return function unMount() {
            window.removeEventListener("scroll", responsiveNavbar);
        };
    });

    function autoClose() {
        setMenu(false);
        setButton(false);
    }

    return (
        <header
            className={`${bgColor} w-full fixed px-5 py-4 md:py-4 z-50 transition-all`}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/img/profile.svg"
                        alt="Profile Valentino Stania"
                        className="w-10 h-10"
                        priority
                    />
                    <a
                        href="#home"
                        className="hidden sm:block text-2xl font-semibold text-white-500 pl-6 tracking-widest"
                    >
                        PORTOFOLIO
                    </a>
                </div>
                <div className={`block md:hidden p-0 -mt-1`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        style={{
                            fill: "#f0f0f0",
                            transform: "",
                            msFilter: "",
                        }}
                        className={`z-50 cursor-pointer ${
                            button ? "hidden" : "block"
                        }`}
                        onClick={() => {
                            setButton(true);
                            setMenu(true);
                        }}
                    >
                        <path d="M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z" />
                    </svg>
                </div>
                <nav
                    className={`z-30 md:block ${
                        collpase
                            ? "absolute h-screen w-full bg-black-700 transition-all"
                            : ""
                    } ${menu ? "top-0 left-0" : "hidden left-full top-0"}`}
                >
                    <ul
                        className={`${
                            collpase ? "inline-block p-8 sm:p-16" : "flex"
                        }`}
                    >
                        <NavList
                            link="#home"
                            onclick={() => autoClose()}
                            className="mr-10 mb-10 md:mb-0"
                        >
                            HOME
                        </NavList>
                        <NavList
                            link="#about"
                            onclick={() => autoClose()}
                            className="mr-10 mb-10 md:mb-0"
                        >
                            ABOUT
                        </NavList>
                        <NavList
                            link="#skills"
                            onclick={() => autoClose()}
                            className="mr-10 mb-10 md:mb-0"
                        >
                            SKILL
                        </NavList>
                        <NavList
                            link="#works"
                            onclick={() => autoClose()}
                            className="mr-10 mb-10 md:mb-0"
                        >
                            WORKS
                        </NavList>
                        <NavList link="#contact" onclick={() => autoClose()}>
                            CONTACT
                        </NavList>
                    </ul>
                    <div className="mx-auto md:hidden mt-12 bg-black-400 rounded-xl w-8/12 sm:w-6/12">
                        <ul className="flex justify-center py-4">
                            <SocmedCard
                                type="instagram"
                                link="valentino.cfs"
                                className="mr-10"
                            />
                            <SocmedCard
                                type="twitter"
                                link="valentino_cfs"
                                className="mr-10"
                            />
                            <SocmedCard
                                type="facebook"
                                link="valentino_cfs"
                                className=""
                            />
                        </ul>
                    </div>
                    <div className="absolute top-6 right-8 sm:top-12 sm:right:5 z-50 md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            style={{
                                fill: "#f0f0f0",
                                transform: "",
                                msFilter: "",
                            }}
                            className={`z-50 cursor-pointer ${
                                button ? "block" : "hidden"
                            }`}
                            onClick={() => {
                                setButton(false);
                                setMenu(false);
                            }}
                        >
                            <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                        </svg>
                    </div>
                </nav>
            </div>
        </header>
    );
}
