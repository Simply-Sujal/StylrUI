import React from 'react';
import { FaDesktop, FaCode, FaLightbulb } from 'react-icons/fa';

const OurExperties = () => {
    return (
        <div className="relative bg-white overflow-hidden py-20 mt-16">
            <h1 className='text-center font-roboto font-light text-6xl mb-20'>Our Experties</h1>
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* UI Creation Section */}
                <div className="mb-12 flex-shrink-0">
                    <div className="flex items-center justify-center mb-6">
                        <FaLightbulb className="text-6xl text-blue-500 mr-4" />
                    </div>
                    <h1 className="text-2xl font-mulsih text-slate-800 font-semibold text-center mb-3">UI Creation</h1>
                    <p className="text-gray-600 font-light font-asap text-xl text-center">
                        Designing intuitive user interfaces that enhance user experience and engagement. Our expertise lies in crafting visually appealing and user-friendly designs.
                    </p>
                </div>

                {/* Build Website Section */}
                <div className="mb-12 flex-shrink-0">
                    <div className="flex items-center justify-center mb-6">
                        <FaDesktop className="text-6xl text-blue-500 mr-4" />
                    </div>
                    <h1 className="text-2xl font-mulsih text-slate-800 font-semibold text-center mb-3">Build Website</h1>
                    <p className="text-gray-600 font-light font-asap text-xl text-center">
                        Building responsive and scalable websites tailored to your business needs. <a href="https://skillez.in/" className="text-blue-500 hover:underline">Visit Skillez.in</a> to see our work.
                    </p>
                </div>

                {/* Custom Development Section */}
                <div className="mb-12 flex-shrink-0">
                    <div className="flex items-center justify-center mb-6">
                        <FaCode className="text-6xl text-blue-500 mr-4" />
                    </div>
                    <h1 className="text-2xl font-mulsih text-slate-800 font-semibold text-center mb-3">Custom Development</h1>
                    <p className="text-gray-600 font-asap font-light text-xl text-center">
                        Developing bespoke solutions and applications to address your unique business challenges. We specialize in creating customized solutions that meet your specific requirements.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurExperties;
