import {
    FiHome,
    FiCommand,
    FiCoffee,
    FiPhone,
    FiUser,
    FiGrid,
    FiFigma,
    FiGithub,
    FiDownload,
} from 'react-icons/fi';

export default function NavList({
    children,
    link,
    onclick,
    className,
    variant,
    target,
}) {
    let addClassName = className ? className : '';
    let variants = {
        icon_top: 'flex justify-center pb-2',
        icon_left: 'inline-block mr-6 relative top-1',
    };

    return (
        <li
            className={`text-white-700 transition ${
                variant === 'icon_top' ? 'text-xs' : 'text-lg mb-4'
            } ${addClassName}`}
        >
            <a
                href={link}
                onClick={onclick}
                target={target}
                rel="noopener"
                className="group cursor-pointer"
            >
                <i
                    className={` group-hover:text-green-500 ${variants[variant]}`}
                >
                    {getIcon(children)}
                </i>
                <span
                    className={`text-white-700 group-hover:text-green-500 relative -top-0.5`}
                >
                    {children}
                </span>
            </a>
        </li>
    );
}

function getIcon(type) {
    switch (type) {
        case 'Home':
            return <FiHome size={20} />;
        case 'About':
            return <FiUser size={20} />;
        case 'Skills':
            return <FiCommand size={20} />;
        case 'Project':
            return <FiCoffee size={20} />;
        case 'Contact':
            return <FiPhone size={20} />;
        case 'Menu':
            return <FiGrid size={20} />;
        case 'Download Resume':
            return <FiDownload size={20} />;
        case 'Source code':
            return <FiGithub size={20} />;
        case 'Design':
            return <FiFigma size={20} />;
        default:
            break;
    }
}
