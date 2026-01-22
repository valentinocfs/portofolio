export default function TechBadge({ tech }) {
    return (
        <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-black-500 text-white-500 rounded-full border border-white-700 hover:border-green-500/50 transition-colors">
            {tech}
        </span>
    );
}
