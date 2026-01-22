import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

export default function EventCard({ event }) {
    return (
        <article className="bg-black-700 rounded-lg p-6 border border-white-700 hover:border-green-500/50 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-white-500 mb-1">
                        {event.name}
                    </h3>
                    <p className="text-green-500 text-sm font-medium">
                        {event.organizer}
                    </p>
                </div>
                <span className="mt-2 md:mt-0 inline-block px-3 py-1 text-xs font-medium bg-black-500 text-white-500 rounded-full border border-white-700">
                    {event.role}
                </span>
            </div>

            <p className="text-white-700 text-sm mb-4 leading-relaxed">
                {event.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white-700">
                <span className="inline-flex items-center gap-1">
                    <FaCalendarAlt size={12} className="text-green-500" />
                    {event.date}
                </span>
                {event.link && (
                    <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-green-500 hover:underline transition-colors"
                    >
                        <FaExternalLinkAlt size={12} /> Event Link
                    </a>
                )}
                {event.certificate && (
                    <a
                        href={event.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white-700 hover:text-green-500 transition-colors"
                    >
                        <FaCertificate size={12} /> Certificate
                    </a>
                )}
            </div>
        </article>
    );
}
