import { useEffect, useState } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { FaSun, FaMoon, FaCode, FaFigma } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

function DesktopThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center p-2.5 rounded-lg bg-black-700 text-white-500 hover:bg-black-600 hover:text-green-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black-700 border border-white-500"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <FaSun size={16} className="text-yellow-400" />
            ) : (
                <FaMoon size={16} className="text-blue-400" />
            )}
        </button>
    );
}

function MobileThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={() => {
                toggleTheme();
                import('./Navbar').then(() => {});
            }}
            className="flex items-center gap-3 w-full text-white-500 hover:bg-white-700/50 rounded-lg transition-colors px-0"
        >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white-700/30 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black-700 border border-white-500">
                {theme === 'dark' ? (
                    <FaSun size={16} className="text-yellow-400" />
                ) : (
                    <FaMoon size={16} className="text-blue-400" />
                )}
            </span>
            <span className="text-sm font-medium">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
        </button>
    );
}

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [bgColor, setBgColor] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    const CV_LINK = 'https://docs.google.com/document/d/1Gw2j4oyElcZ5GM01_k_Wb0fugnJaZfSY1NT1gtlQ3-Y/edit?usp=sharing';

    const navLinks = [
        { href: '/', label: 'HOME' },
        { href: '/projects', label: 'PROJECTS' },
        { href: '/about', label: 'ABOUT' },
        { href: '/blogs', label: 'BLOG' },
    ];

    const mobileNavLinks = [
        { href: '/', label: 'HOME' },
        { href: '/projects', label: 'PROJECTS' },
        { href: '/about', label: 'ABOUT' },
        { href: '/blogs', label: 'BLOG' },
    ];

    const isActive = (href) => {
        if (href.startsWith('#')) {
            return router.asPath === '/';
        }
        return router.pathname === href;
    };

    useEffect(() => {
        const html = document.querySelector('html');

        if (!menu) {
            html.classList.remove('disable-scroll');
        } else {
            html.classList.add('disable-scroll');
        }

        const handleScroll = () => {
            const yPosition = window.pageYOffset;
            const isScrolled = yPosition > 20;
            setScrolled(isScrolled);
            setBgColor(yPosition > 150 ? 'bg-black-700' : 'bg-transparent');
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [menu]);

    function closeNavbarCollapse() {
        setMenu(false);
    }

    function closeNavbarInMobile() {
        setMenu(false);
    }

    return (
        <>
            <header
                className={`fixed w-full h-16 sm:h-20 bottom-0 sm:top-0 left-0 sm:px-4 z-[90] transition-all duration-300 flex items-center ${
                    scrolled
                        ? 'bg-black-700/95 backdrop-blur-sm shadow-lg'
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <section className="flex items-center pl-3 sm:pl-0">
                        <a
                            href="/"
                            className="flex items-center gap-3 group"
                            aria-label="Valentino Stania - Home"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-black-500 text-sm group-hover:scale-105 transition-transform">
                                VS
                            </div>
                            <span className="hidden sm:block text-white-500 font-semibold text-sm tracking-wide">
                                Valentino Stania
                            </span>
                        </a>
                    </section>

                    {/* Desktop Navigation */}
                    <section className="hidden sm:flex items-center gap-4">
                        <nav>
                            <ul className="flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            rel="noopener"
                                            className={`text-sm font-medium tracking-wider transition-colors ${
                                                isActive(link.href)
                                                    ? 'text-green-500'
                                                    : 'text-white-500 hover:text-green-500'
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>

                    {/* Desktop Navigation */}
                    <section className="hidden sm:flex items-center gap-4">
                        <a
                            href={CV_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-black-500 text-sm font-medium rounded-lg hover:bg-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black-700"
                            aria-label="Download Resume"
                        >
                            <FiDownload size={16} />
                            <span>Resume</span>
                        </a>
                        {/* Theme Toggle */}
                        <DesktopThemeToggle />
                    </section>

                    {/* Mobile Menu Button */}
                    <section className="sm:hidden">
                        <button
                            onClick={() => setMenu(true)}
                            className="flex flex-col justify-center items-center gap-1 p-2 text-white-500 hover:text-green-500 transition-colors"
                            aria-label="Open menu"
                        >
                            <FiMenu size={24} />
                            <span className="text-xs">Menu</span>
                        </button>
                    </section>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {menu ? (
                <div className="navbar-collapse bg-transparent fixed top-0 left-0 w-screen h-screen flex z-[99] text-white-500">
                    <div className="bg-black-700 w-full h-screen flex flex-col">
                        {/* Mobile Header */}
                        <div className="flex justify-between items-center p-4 border-b border-white-700">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black-500 font-bold text-sm ml-3">
                                    VS
                                </div>
                                <span className="text-white-500 font-medium">
                                
                                </span>
                            </div>
                            <button
                                onClick={() => closeNavbarInMobile()}
                                className="p-2 text-white-500 hover:text-green-500 transition-colors"
                                aria-label="Close menu"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 px-4 py-6 overflow-y-auto">
                            <ul className="space-y-2">
                                {mobileNavLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            rel="noopener"
                                            onClick={() => closeNavbarCollapse()}
                                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                                                isActive(link.href)
                                                    ? 'bg-green-500/10 text-green-500'
                                                    : 'text-white-500 hover:bg-white-700/50'
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="w-full h-0.5 rounded-sm bg-white-700 my-6"></div>

                            {/* Theme Toggle */}
                            <div className="px-4 mb-4">
                                <p className="text-xs uppercase text-white-700 mb-3">Appearance</p>
                                <MobileThemeToggle />
                            </div>

                            {/* Other Links */}
                            <h3 className="text-xs uppercase text-white-700 mb-4 px-4">
                                Resources
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href={CV_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-4 py-3 text-white-500 hover:bg-white-700/50 rounded-lg transition-colors"
                                    >
                                        <FiDownload size={18} />
                                        <span>Download CV</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/valentinocfs/portofolio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-4 py-3 text-white-500 hover:bg-white-700/50 rounded-lg transition-colors"
                                    >
                                        <FaCode size={18} />
                                        Source Code
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.figma.com/file/FXyDNpUOZvCp4ZZfYYYERU/Portofolio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-4 py-3 text-white-500 hover:bg-white-700/50 rounded-lg transition-colors"
                                    >
                                        <FaFigma size={18} />
                                        Design
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Mobile Footer */}
                        <div className="p-4 border-t border-white-700">
                            <p className="text-center text-white-700 text-sm">
                                © {new Date().getFullYear()} Valentino Stania
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-1/4 h-screen bg-black-100/50"
                        onClick={() => closeNavbarInMobile()}
                    ></div>
                </div>
            ) : (
                ''
            )}
        </>
    );
}
