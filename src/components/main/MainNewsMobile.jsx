import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { FaArrowRight } from "react-icons/fa6"

const MainNewsMobile = () => {
    return (
        <div className="flex items-center justify-center w-full h-max py-24 md:hidden px-[5%] flex-col">
            <div className='flex flex-wrap pb-2 mb-8 text-2xl font-bold uppercase border-b-2 text-sky-900 border-stone-200 w-max font-merriwether'>Latest News</div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {cards.map((card) => (
                        <CarouselItem key={card.id} className='pl-8 overflow-hidden basis-[90%] z-10 relative w-full h-full group'>
                            <div style={{
                                backgroundImage: `url(${card.url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                            }} className='relative z-0 h-[70vh] duration-300 rounded-xl brightness-[.2] saturate-0 group-hover:saturate-100 group-hover:brightness-50'>
                            </div>
                            <div className="absolute top-0 flex flex-col w-full h-full py-[2.5%] pr-[5%] rounded-xl">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex justify-between w-full pr-8">
                                            <p className="flex p-8 text-2xl font-black text-white uppercase font-merriwether">
                                                {card.title}
                                            </p>
                                            <div className="flex items-center justify-center text-xl text-white duration-300 group-hover:rotate-[-45deg]">
                                                <FaArrowRight />
                                            </div>
                                        </div>
                                        <p className=" line-clamp-4 px-8 text-lg/[250%] tracking-tight text-white md:opacity-0 group-hover:opacity-100 duration-300 font-manrope ">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                    <div className="flex pl-[7.5%] text-white font-manrope pb-[10%] pr-[7.5%] w-full"><button className="w-full px-4 py-2 duration-75 bg-orange-500 active:ring-4 ring-orange-200 rounded-xl active:scale-90">Read More</button></div>
                                </div>
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

export default MainNewsMobile

const cards = [
    {
        url: "https://source.unsplash.com/random/?sports_children",
        title: "Sports Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 1,
    },
    {
        url: "https://source.unsplash.com/random/?kids_theatre",
        title: "Annual Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 2,
    },
    {
        url: "https://source.unsplash.com/random/?report_card",
        title: "Results Out",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 3,
    },
    {
        url: "https://source.unsplash.com/random/?education",
        title: "Voted Best School",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 4,
    },
    {
        url: "https://source.unsplash.com/random/?teacher",
        title: "Teacher's Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 5,
    },
    {
        url: "https://source.unsplash.com/random/?children",
        title: "Children's Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 6,
    },
    {
        url: "https://source.unsplash.com/random/?poetry",
        title: "Student Poem",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 7,
    },
];