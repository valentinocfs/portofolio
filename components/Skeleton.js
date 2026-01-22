export default function SkeletonCard({ className = '' }) {
    return (
        <div className={`bg-black-700 rounded-xl overflow-hidden border border-white-700 ${className}`}>
            {/* Image placeholder */}
            <div className="h-48 md:h-56 bg-black-600 animate-pulse"></div>
            
            {/* Content placeholder */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <div className="h-6 bg-black-600 rounded animate-pulse w-3/4"></div>
                
                {/* Description */}
                <div className="space-y-2">
                    <div className="h-4 bg-black-600 rounded animate-pulse"></div>
                    <div className="h-4 bg-black-600 rounded animate-pulse w-5/6"></div>
                </div>
                
                {/* Tech stack badges */}
                <div className="flex gap-2">
                    <div className="h-6 w-16 bg-black-600 rounded-full animate-pulse"></div>
                    <div className="h-6 w-16 bg-black-600 rounded-full animate-pulse"></div>
                    <div className="h-6 w-16 bg-black-600 rounded-full animate-pulse"></div>
                </div>
                
                {/* Button */}
                <div className="h-5 w-28 bg-black-600 rounded animate-pulse mt-4"></div>
            </div>
        </div>
    );
}

export function SkeletonHero() {
    return (
        <div className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-5">
                <div className="lg:flex lg:justify-between">
                    {/* Text content placeholder */}
                    <div className="text-center pt-16 sm:pt-24 lg:pt-0 lg:w-1/2 lg:text-left space-y-6">
                        <div className="h-10 bg-black-600 rounded animate-pulse w-3/4 mx-auto lg:mx-0"></div>
                        <div className="h-6 bg-black-600 rounded animate-pulse w-1/2 mx-auto lg:mx-0"></div>
                        <div className="h-4 bg-black-600 rounded animate-pulse w-full max-w-md mx-auto lg:mx-0"></div>
                        
                        {/* Buttons placeholder */}
                        <div className="flex gap-4 justify-center lg:justify-start mt-8">
                            <div className="h-12 w-36 bg-black-600 rounded animate-pulse"></div>
                            <div className="h-12 w-36 bg-black-600 rounded animate-pulse"></div>
                        </div>
                    </div>
                    
                    {/* Image placeholder */}
                    <div className="hidden lg:block lg:w-1/2 flex justify-center">
                        <div className="w-64 sm:w-80 md:w-96 h-96 bg-black-600 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function SkeletonSection() {
    return (
        <section className="py-20 px-5">
            <div className="container mx-auto">
                {/* Section header */}
                <div className="mb-12">
                    <div className="h-8 bg-black-600 rounded animate-pulse w-48 mb-4"></div>
                    <div className="h-4 bg-black-600 rounded animate-pulse w-full max-w-md"></div>
                </div>
                
                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            </div>
        </section>
    );
}

export function SkeletonExperience() {
    return (
        <section className="py-20 px-5 bg-black-500">
            <div className="container mx-auto">
                {/* Section header */}
                <div className="mb-12">
                    <div className="h-8 bg-black-600 rounded animate-pulse w-48 mb-4"></div>
                    <div className="h-4 bg-black-600 rounded animate-pulse w-full max-w-md"></div>
                </div>
                
                {/* Experience cards */}
                <div className="space-y-6">
                    <div className="bg-black-700 rounded-xl p-6 border border-white-700">
                        <div className="flex flex-col md:flex-row md:justify-between mb-4">
                            <div className="space-y-2">
                                <div className="h-6 bg-black-600 rounded animate-pulse w-48"></div>
                                <div className="h-4 bg-green-500/20 rounded animate-pulse w-32"></div>
                                <div className="h-3 bg-black-600 rounded animate-pulse w-40"></div>
                            </div>
                            <div className="h-6 w-24 bg-black-600 rounded-full animate-pulse mt-4 md:mt-0"></div>
                        </div>
                        <div className="h-4 bg-black-600 rounded animate-pulse w-full mb-4"></div>
                        <div className="h-4 bg-black-600 rounded animate-pulse w-5/6"></div>
                    </div>
                    <div className="bg-black-700 rounded-xl p-6 border border-white-700">
                        <div className="flex flex-col md:flex-row md:justify-between mb-4">
                            <div className="space-y-2">
                                <div className="h-6 bg-black-600 rounded animate-pulse w-48"></div>
                                <div className="h-4 bg-green-500/20 rounded animate-pulse w-32"></div>
                                <div className="h-3 bg-black-600 rounded animate-pulse w-40"></div>
                            </div>
                            <div className="h-6 w-24 bg-black-600 rounded-full animate-pulse mt-4 md:mt-0"></div>
                        </div>
                        <div className="h-4 bg-black-600 rounded animate-pulse w-full mb-4"></div>
                        <div className="h-4 bg-black-600 rounded animate-pulse w-5/6"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
