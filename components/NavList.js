export default function NavList({ children, link, onclick, className }) {
    let addClassName = className ? className : "";
    return (
        <li
            className={`text-white-500 transition hover:text-green-500 font-medium ${addClassName}`}
        >
            <a href={link} onClick={onclick} rel="noreferrer">
                {children}
            </a>
        </li>
    );
}
