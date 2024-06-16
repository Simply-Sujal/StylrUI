import React from 'react'
import LandingPageAbout from '../AboutUs/LandingPageAbout'
import OurExperties from '../AboutUs/OurExperties'
import Techstack from '../AboutUs/Techstack'
import Newsletter from '../components/Newsletter'

const About = () => {
    return (
        <>
            <LandingPageAbout />
            <OurExperties />
            <Techstack />
            <Newsletter />
        </>
    )
}

export default About