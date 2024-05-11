import MainGallery from '@/components/main/MainGallery'
import NewsHero from '@/components/news/NewsHero'
import NewsMain from '@/components/news/NewsMain'
import React from 'react'

const News = () => {
    return (
        <>
            <NewsHero />
            <NewsMain />
            <MainGallery title='events' />
        </>
    )
}

export default News