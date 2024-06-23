import React from 'react';
import { Link } from 'react-router-dom';
import Perks from './Perks';
import MobileVideo from './MobileVideo';

const ContributerPage = () => {
    return (
        <>
            <div className="h-screen bg-blue-50 flex flex-col items-center justify-center mt-20 mb-20">
                <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                        <div className="p-10 flex flex-col items-center justify-center bg-blue-100">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">Contribute to Components</h2>
                            <p className="text-gray-700 font-mukta font-semibold text-center mb-6">
                                Share your components with the community. Click the link below to get the form.
                            </p>
                            <Link
                                to="/codesubmissionform"
                                className="px-6 py-3 text-xl rounded-lg font-semibold text-white bg-gradient-to-r from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-800 transition duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Contribute to Components
                            </Link>
                        </div>
                        <div className="p-10 flex flex-col items-center justify-center bg-blue-200">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">Contribute to Blocks</h2>
                            <p className="font-mukta font-semibold text-gray-700 text-center mb-6">
                                Share your blocks with the community. Click the link below to get the form.
                            </p>
                            <Link
                                to="/blockSubmissionForm"
                                className="px-6 py-3 text-xl rounded-lg font-semibold text-white bg-gradient-to-r from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-800 transition duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Contribute to Blocks
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Perks />
            <MobileVideo />
        </>

    );
};

export default ContributerPage;
