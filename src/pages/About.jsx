import AboutFaculty from '@/components/about/AboutFaculty'
import AboutHero from '@/components/about/AboutHero'
import AboutMessage from '@/components/about/AboutMessage'
import MainAbout from '@/components/main/MainAbout'
import MainQuote from '@/components/main/MainQuote'
import React from 'react'

const About = () => {
    return (
        <>
            <AboutHero />
            <MainAbout />
            <AboutMessage />
            <AboutFaculty />
            <MainQuote />
        </>
    )
}

export default About