import { getLocationOrigin } from "next/dist/next-server/lib/utils";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

export default function SocmedCard({ link, type, className }) {
    let addClassName = className ? className : "";

    const getIcon = () => {
        switch (type) {
            case "instagram":
                return <FiInstagram className={`text-white-500`} />;
            case "twitter":
                return <FiTwitter className={`text-white-500`} />;
            case "github":
                return <FiGithub className={`text-white-500`} />;
            case "youtube":
                return <FiYoutube className={`text-white-500`} />;
            case "facebook":
                return <FiFacebook className={`text-white-500`} />;
            default:
                break;
        }
    };

    return (
        <li className={`${addClassName}`}>
            <a
                href={`https://www.${type}.com/${link}`}
                target="_blank"
                className="text-2xl text-center"
                rel="noopener"
            >
                {getIcon()}
            </a>
        </li>
    );
}
