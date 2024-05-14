import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React from 'react'
import { FaArrowRight } from "react-icons/fa6"
import photo1 from '../../assets/parentsDay.jpg'
import photo2 from '../../assets/prizeDistributions.jpg'
import photo3 from '../../assets/runningShieldCompetition.jpg'
import photo4 from '../../assets/sportsDay.jpg'
import { Link } from "react-router-dom"

const toTop = () => {
    window.scrollTo({ top: 0 })
}

const NewsMain = () => {
    return (
        <div className="w-full px-[5%] pb-24">
            <h5 className='mb-12 heading'>Latest News</h5>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {cards.map((card) => (
                        <CarouselItem key={card.id} className='pl-4 overflow-hidden basis-[90%] md:basis-1/2 lg:basis-1/3  z-10 relative w-full h-full group'>
                            <div style={{
                                backgroundImage: `url(${card.url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                            }} className='relative z-0 aspect-square duration-300 rounded-xl brightness-[.4]  group-hover:brightness-50'>
                            </div>
                            <div className="absolute top-0 flex flex-col w-full h-full py-[2.5%] pr-[5%]">
                                <Link onClick={toTop} to="/BlogPage" className="flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex justify-between w-full pr-8">
                                            <p className="p-8 pb-0 mb-8 text-lg font-black text-white uppercase md:text-2xl font-merriwether line-clamp-1">
                                                {card.title}
                                            </p>
                                            <div className="flex items-center justify-center text-xl text-white duration-300 group-hover:rotate-[-45deg]">
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                        <p className="line-clamp-4 sm:line-clamp-5 px-8 text-base/[250%] md:text-lg/[250%] tracking-tight text-white md:opacity-80 group-hover:opacity-100 duration-300 font-manrope ">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='top-[50%] translate-y-[-50%] -translate-x-8' />
                <CarouselNext className='top-[50%] translate-y-[-50%] translate-x-8' />
            </Carousel>
        </div>
    )
}

export default NewsMain

const cards = [
    {
        url: photo4,
        title: "Sports Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 1,
    },
    {
        url: photo1,
        title: "Annual Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 2,
    },
    {
        url: photo3,
        title: "Results Out",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 3,
    },
    {
        url: photo2,
        title: "Voted Best School",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 4,
    },
];
