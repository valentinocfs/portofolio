import { getLocationOrigin } from 'next/dist/next-server/lib/utils';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

export default function SocmedCard({ link, type, className }) {
    let addClassName = className ? className : '';

    const getIcon = () => {
        switch (type) {
            case 'instagram':
                return <FiInstagram />;
            case 'twitter':
                return <FiTwitter />;
            case 'github':
                return <FiGithub />;
            case 'youtube':
                return <FiYoutube />;
            case 'facebook':
                return <FiFacebook />;
            case 'email':
                return <FiMail />;
            case 'linkedin':
                return <FiLinkedin />;
            default:
                break;
        }
    };

    return (
        <li className={`${addClassName}`}>
            <a
                href={`https://www.${type}.com/${link}`}
                target="_blank"
                className="text-2xl text-center transition-all text-white-500 hover:text-green-500"
                rel="noopener"
            >
                {getIcon()}
            </a>
        </li>
    );
}
