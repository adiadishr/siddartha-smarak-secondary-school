import MainAbout from '@/components/main/MainAbout'
import MainCarousel from '@/components/main/MainCarousel'
import MainGallery from '@/components/main/MainGallery'
import MainHero from '@/components/main/MainHero'
import MainQuote from '@/components/main/MainQuote'
import React from 'react'

const Main = () => {

    return (
        <>
            <MainCarousel />
            <MainQuote />
            <MainHero />
            <MainAbout />
            <MainGallery />
        </>
    )
}

export default Main