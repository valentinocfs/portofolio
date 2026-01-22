import { useState, useEffect } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide preloader after page is fully loaded
        const handleLoad = () => {
            setLoading(false);
        };

        // Fallback timer in case onload already fired
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        if (document.readyState === 'complete') {
            clearTimeout(timer);
            setLoading(false);
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(timer);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black-500 transition-opacity duration-500">
            <div className="text-center">
                {/* Animated VS Logo */}
                <div className="relative w-20 h-20 mx-auto mb-8">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                    <div className="relative w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-black-500 font-bold text-2xl animate-pulse">
                            VS
                        </span>
                    </div>
                </div>

                {/* Loading Text */}
                <p className="text-white-500 text-sm tracking-widest animate-pulse">
                    LOADING
                </p>

                {/* Progress Bar */}
                <div className="w-48 h-1 bg-black-700 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full animate-loading-bar"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes loading-bar {
                    0% {
                        width: 0%;
                        margin-left: 0%;
                    }
                    50% {
                        width: 100%;
                        margin-left: 0%;
                    }
                    100% {
                        width: 0%;
                        margin-left: 100%;
                    }
                }
                .animate-loading-bar {
                    animation: loading-bar 1.5s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
