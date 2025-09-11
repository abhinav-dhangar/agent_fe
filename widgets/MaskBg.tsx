"use client";

export default function App() {
    return (
        <div className="relative w-full h-screen bg-white overflow-hidden">
            {/* Flower image (base layer) */}
            <img
                src="/pictures/red_flower.avif"
                alt="red flower"
                className="w-full h-full object-cover"
            />

            {/* Cloudy mask video */}
            <div className="absolute inset-0 mix-blend-screen pointer-events-none">
                <video
                    src="/pictures/cloud_screen.webm"
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
