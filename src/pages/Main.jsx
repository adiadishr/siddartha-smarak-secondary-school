import MainAbout from '@/components/main/MainAbout'
import MainCarousel from '@/components/main/MainCarousel'
import MainGallery from '@/components/main/MainGallery'
import MainHero from '@/components/main/MainHero'
import MainNews from '@/components/main/MainNews'
import MainNewsMobile from '@/components/main/MainNewsMobile'
import MainQuote from '@/components/main/MainQuote'
import NewsMain from '@/components/news/NewsMain'
import React from 'react'

const Main = () => {

    return (
        <>
            <MainCarousel />
            <MainQuote />
            <MainHero />
            <MainAbout />
            <MainGallery />
            <NewsMain />
        </>
    )
}

export default Main