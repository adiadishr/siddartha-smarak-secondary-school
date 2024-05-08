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
                        <CarouselItem key={card.id} className='pl-8 overflow-hidden basis-[90%]'>
                            <div style={{
                                backgroundImage: `url(${card.url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                            }} className='z-0 duration-300 aspect-square rounded-xl brightness-50 saturate-0 hover:saturate-100 hover:brightness-75'>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='top-[50%] translate-y-[-50%]' />
                <CarouselNext className='top-[50%] translate-y-[-50%]' />
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