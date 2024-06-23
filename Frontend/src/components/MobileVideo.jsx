import React from 'react';
import vid2 from "../assets/vid2.mp4";

const MobileVideo = () => {
    return (
        <div className=" px-4 md:px-28 pt-10 md:pt-28 flex justify-center items-center">
            <div className="relative w-80 h-[30rem] md:h-[35rem] bg-black rounded-[40px] shadow-lg overflow-hidden border-slate-200 border-[8px] transform transition-all duration-200 hover:shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-lg flex justify-center items-center">
                    <div className="w-8 h-2 bg-gray-800 rounded-full"></div>
                </div>
                {/* Video */}
                <video
                    className="absolute top-6 w-full h-[calc(100%-4rem)] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={vid2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Home button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-800 rounded-full"></div>
            </div>
        </div>
    );
};

export default MobileVideo;
