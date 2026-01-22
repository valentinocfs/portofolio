import ExperienceCard from './ExperienceCard';
import { experience } from '../data/experience';
import { FaBriefcase } from 'react-icons/fa';

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-5 bg-black-500">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-12" data-aos="fade-up">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white-500">
                            Experience
                        </h2>
                    </div>
                    <p className="text-white-700">
                        Building products and gaining experience across different projects and challenges
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8">
                    {experience.map((job, index) => (
                        <div 
                            key={job.id}
                            data-aos="fade-up"
                            data-aos-delay={`${100 + index * 100}`}
                        >
                            <ExperienceCard experience={job} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
