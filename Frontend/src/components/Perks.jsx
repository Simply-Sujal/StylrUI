import React from 'react';
import Topic from './Topic';

const perks = [
    {
        title: "Skill Enhancement",
        description: "Contributing to open-source projects enhances your coding skills and exposes you to best practices.",
        icon: "🌟",
    },
    {
        title: "Networking",
        description: "Collaborate with talented developers and grow your professional network.",
        icon: "🤝",
    },
    {
        title: "Portfolio Building",
        description: "Showcase your contributions on your portfolio to impress potential employers.",
        icon: "📁",
    },
    {
        title: "Learning Opportunities",
        description: "Gain hands-on experience with new technologies and frameworks.",
        icon: "📚",
    },
    {
        title: "Community Impact",
        description: "Make a positive impact on the developer community by contributing valuable code.",
        icon: "🌍",
    },
    {
        title: "Recognition",
        description: "Get recognized for your contributions and earn a reputation in the open-source community.",
        icon: "🏅",
    }
];

const Perks = () => {
    return (
        <>
            <Topic
                smallHeading="StylrUI Perks"
                mainHeading="Open Source Contribution Perks"
                aboutHeading="By contributing to StylrUI, you not only improve your skills but also make a lasting impact on the developer community."
            />
            <div className="px-4 md:px-24 py-20 flex items-center justify-center mt-16 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    {perks.map((perk, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg transition-all duration-200 hover:scale-105 hover:bg-opacity-30 hover:animate-smoothBounce"
                        >
                            <div className="text-5xl hover:animate-pulse">{perk.icon}</div>
                            <h2 className="text-2xl font-roboto font-semibold mt-4 mb-2 text-orange-500">{perk.title}</h2>
                            <p className="text-gray-800 font-asap">{perk.description}</p>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}

export default Perks;
