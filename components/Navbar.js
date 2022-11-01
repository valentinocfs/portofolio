import { useEffect, useState } from 'react';
import NavList from './NavList';
import { FiGrid } from 'react-icons/fi';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [bgColor, setBgColor] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return function unMount() {
            window.removeEventListener('scroll', changeNavbarColor);
        };
    }, []);

    function changeNavbarColor() {
        let yPosition = window.pageYOffset;
        if (yPosition > 150) {
            setBgColor('bg-black-700');
        } else {
            setBgColor('bg-transparent');
        }
    }

    function closeNavbarCollapse() {
        setMenu(false);
    }

    return (
        <>
            <header
                className={`bg-black-700 sm:${bgColor} fixed w-full h-20 bottom-0 sm:top-0 left-0 sm:px-4 py-4 z-[90] transition-all flex items-center`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <section className="hidden sm:block">
                        <a href="/">
                            <img
                                src="/img/profile.svg"
                                alt="Profile Valentino Stania"
                                className="w-10 h-10"
                                priority="true"
                            />
                        </a>
                    </section>
                    <section className="sm:hidden w-full px-4">
                        <nav className="w-full pt-2">
                            <ul className="flex justify-between">
                                <li
                                    onClick={() => setMenu(true)}
                                    className="group flex flex-col justify-center items-center text-white-700 cursor-pointer hover:text-green-500 -mt-1"
                                >
                                    <FiGrid size={20} />
                                    <span className="text-xs pt-1 group-hover:text-green-500">
                                        Menu
                                    </span>
                                </li>
                                <NavList link="#home" variant="icon_top">
                                    Home
                                </NavList>
                                <NavList link="#about" variant="icon_top">
                                    About
                                </NavList>
                                <NavList link="#skills" variant="icon_top">
                                    Skills
                                </NavList>
                                <NavList link="#projects" variant="icon_top">
                                    Project
                                </NavList>
                                <NavList link="#contact" variant="icon_top">
                                    Contact
                                </NavList>
                            </ul>
                        </nav>
                    </section>
                    <section className="hidden sm:block text-white-500">
                        <nav>
                            <ul className="flex">
                                <li className="mr-8">
                                    <a
                                        href="/"
                                        rel="noopener"
                                        className="cursor-pointer hover:text-green-500"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li className="mr-8">
                                    {' '}
                                    <a
                                        href="/projects"
                                        rel="noopener"
                                        className="cursor-pointer hover:text-green-500"
                                    >
                                        PROJECTS
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        href="#contact"
                                        rel="noopener"
                                        className="cursor-pointer hover:text-green-500"
                                    >
                                        CONTACT
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </div>
            </header>
            {menu ? (
                <div className="navbar-collapse bg-transparent fixed top-0 left-0 w-screen h-screen flex z-[99] text-white-500">
                    <div className="bg-black-700 w-3/4 h-screen">
                        <div className="border-r-1 relative">
                            <img
                                src="/img/navbar-banner.png"
                                alt="Navbar Banner Image"
                                priority="true"
                                className="w-full h-full bg-cover bg-center bg-no-repeat"
                            />
                        </div>
                        <nav className="navbar-section-page px-8 mt-8">
                            <h3 className="text-md uppercase">Section</h3>
                            <ul className="text-white-700 pl-4 mt-4">
                                <NavList
                                    variant="icon_left"
                                    link="#home"
                                    onclick={() => closeNavbarCollapse()}
                                >
                                    Home
                                </NavList>
                                <NavList
                                    variant="icon_left"
                                    link="#about"
                                    onclick={() => closeNavbarCollapse()}
                                >
                                    About
                                </NavList>
                                <NavList
                                    variant="icon_left"
                                    link="#skills"
                                    onclick={() => closeNavbarCollapse()}
                                >
                                    Skills
                                </NavList>
                                <NavList
                                    variant="icon_left"
                                    link="#projects"
                                    onclick={() => closeNavbarCollapse()}
                                >
                                    Project
                                </NavList>
                                <NavList
                                    variant="icon_left"
                                    link="#contact"
                                    onclick={() => closeNavbarCollapse()}
                                >
                                    Contact
                                </NavList>
                            </ul>
                        </nav>
                        <div className="w-10/12 h-0.5 rounded-sm bg-black-500 mx-auto"></div>
                        <nav className="px-8 mt-4">
                            <h3 className="text-md uppercase">Others</h3>
                            <ul className="text-white-700 pl-4 mt-4">
                                <NavList
                                    variant="icon_left"
                                    className="text-base"
                                    link="https://docs.google.com/document/d/1Gw2j4oyElcZ5GM01_k_Wb0fugnJaZfSY1NT1gtlQ3-Y/edit?usp=sharing"
                                    target="_blank"
                                >
                                    My Resume
                                </NavList>
                                <NavList
                                    variant="icon_left"
                                    className="text-base"
                                    link="https://github.com/valentinocfs/portofolio"
                                    target="_blank"
                                >
                                    Source code
                                </NavList>
                                <NavList
                                    variant="icon_left"
                                    className="text-base"
                                    link="https://www.figma.com/file/FXyDNpUOZvCp4ZZfYYYERU/Portofolio"
                                    target="_blank"
                                >
                                    Design
                                </NavList>
                            </ul>
                        </nav>
                        <div className="w-10/12 h-0.5 rounded-sm bg-black-500 mx-auto"></div>
                        <div className="px-8 my-4 flex justify-between items-center">
                            <h3 className="text-md uppercase">Theme</h3>
                            <div className="flex">
                                <p className="text-white-700">coming soon</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 h-screen bg-black-100 relative z-[99]">
                        <button
                            className="w-full h-screen"
                            onClick={() => setMenu(false)}
                        ></button>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
}
