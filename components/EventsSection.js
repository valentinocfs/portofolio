import EventCard from './EventCard';
import { events } from '../data/events';
import { FaGraduationCap, FaCertificate, FaUsers } from 'react-icons/fa';

export default function EventsSection() {
    const stats = {
        totalEvents: events.length,
        bootcamps: events.filter(e => e.role.toLowerCase().includes('bootcamp')).length,
        workshops: events.filter(e => e.role.toLowerCase().includes('workshop')).length,
        certificates: events.filter(e => e.certificate).length,
    };

    return (
        <section id="events" className="py-20 px-5 bg-black-500">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <FaGraduationCap className="text-green-500" size={24} />
                        <h2 className="text-3xl md:text-4xl font-bold text-white-500">
                            Events & Bootcamps
                        </h2>
                    </div>
                    <p className="text-white-700 max-w-2xl">
                        Workshops, bootcamps, and learning experiences I've participated in to grow my skills
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

                {/* No Events Message */}
                {events.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-white-700 text-lg mb-4">
                            No events added yet.
                        </p>
                        <p className="text-white-500 text-sm">
                            Edit <code className="bg-black-700 px-2 py-1 rounded">data/events.js</code> to add your events.
                        </p>
                    </div>
                )}

                {/* Stats */}
                {events.length > 0 && (
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-black-700 rounded-lg border border-white-700">
                            <FaUsers className="text-green-500 mx-auto mb-2" size={24} />
                            <p className="text-3xl font-bold text-green-500">{stats.totalEvents}</p>
                            <p className="text-white-700 text-sm">Total Events</p>
                        </div>
                        <div className="text-center p-6 bg-black-700 rounded-lg border border-white-700">
                            <FaGraduationCap className="text-green-500 mx-auto mb-2" size={24} />
                            <p className="text-3xl font-bold text-green-500">{stats.bootcamps}</p>
                            <p className="text-white-700 text-sm">Bootcamps</p>
                        </div>
                        <div className="text-center p-6 bg-black-700 rounded-lg border border-white-700">
                            <FaCertificate className="text-green-500 mx-auto mb-2" size={24} />
                            <p className="text-3xl font-bold text-green-500">{stats.certificates}</p>
                            <p className="text-white-700 text-sm">Certificates</p>
                        </div>
                        <div className="text-center p-6 bg-black-700 rounded-lg border border-white-700">
                            <p className="text-3xl font-bold text-green-500">2023</p>
                            <p className="text-white-700 text-sm">Started</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
