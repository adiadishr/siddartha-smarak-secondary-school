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
import photo5 from '../../assets/classroom.jpg'
import photo8 from '../../assets/praman.jpg'
import photo11 from '../../assets/medal.jpg'

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
        url: photo11,
        title: "Sports Day",
        subtitle: "At Siddhartha Smarak Secondary School, we believe in nurturing not just academic excellence but also holistic development among our students. With this ethos in mind, our annual Sports Day event holds a special place in our school calendar. It's a day filled with excitement, camaraderie, and the celebration of sportsmanship.",
        id: 1,
    },
    {
        url: photo1,
        title: "Annual Day",
        subtitle: "Siddhartha Smarak Secondary School's Annual Day event is not just a date on the calendar; it's a culmination of months of preparation, dedication, and anticipation. It's a day where the entire school community comes together to celebrate achievements, embrace diversity, and reaffirm our commitment to excellence in education.",
        id: 2,
    },
    {
        url: photo8,
        title: "Results Out",
        subtitle: "At Siddhartha Smarak Secondary School, we believe in recognizing and celebrating the hard work and achievements of our students. As the school year comes to a close, we are excited to announce the much-awaited results that reflect the dedication and commitment of our students and educators.",
        id: 3,
    },
    {
        url: photo5,
        title: "Voted Best School",
        subtitle: "At Siddhartha Smarak Secondary School, we are thrilled to announce that our commitment to excellence in education has been recognized once again. We are honored to have been voted the best school in our region, a testament to the dedication and hard work of our students, teachers, and staff.",
        id: 4,
    },
];
