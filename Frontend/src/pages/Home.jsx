import React from 'react'
import HomeLandingPage from '../Home/HomeLandingPage'
import AvoidingDependency from '../Home/AvoidingDependency'
import UseOurLibrary from '../Home/UseOurLibrary'
import ChoosingKodeKomp from '../Home/ChoosingKodeKomp'
import SupportingTech from '../Home/SupportingTech'
import MainFeature from '../Home/MainFeature'

const Home = () => {
    return (
        <>
            <HomeLandingPage />
            <AvoidingDependency />
            <UseOurLibrary />
            <ChoosingKodeKomp />
            <SupportingTech />
            <MainFeature />
        </>
    )
}

export default Home