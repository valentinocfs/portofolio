import { FiMail } from 'react-icons/fi';

export default function Button({ link, value, className, variant, type }) {
    let addClassName = className ? className : '';
    let variants = {
        green: 'green text-black-500 group-hover:text-white-500 bg-green-500 border border-green-500',
        black: 'black text-white-500 border border-white-500',
    };
    let types = {
        email: <FiMail className={''} />,
    };

    return (
        <>
            <a
                href={link}
                target="_blank"
                rel="noopener"
                className={`btn group py-3 px-12 tracking-widest button-works relative font-bold hover:border ease-in-out cursor-pointer transition-[box-shadow] ${addClassName} ${
                    variants[variant] ? variants[variant] : 'text-black-500'
                } ${type ? 'py-2 px-10' : ''}`}
            >
                <i className={`text-black-500 text-xl absolute left-5`}>
                    {types[type]}
                </i>
                <span className={`${type ? 'pl-4' : ''}`}>{value}</span>
            </a>
        </>
    );
}
