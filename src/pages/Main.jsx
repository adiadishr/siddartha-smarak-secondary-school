import MainAbout from '@/components/main/MainAbout'
import MainCarousel from '@/components/main/MainCarousel'
import MainGallery from '@/components/main/MainGallery'
import MainHero from '@/components/main/MainHero'
import MainNews from '@/components/main/MainNews'
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
            <MainNews /> 
        </>
    )
}

export default Main