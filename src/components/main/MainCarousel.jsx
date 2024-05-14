import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import photo1 from '../../assets/parentsDay.jpg'
import photo2 from '../../assets/prizeDistributions.jpg'
import photo3 from '../../assets/runningShieldCompetition.jpg'
import photo4 from '../../assets/sportsDay.jpg'

const MainCarousel = () => {
    return (
        <Carousel
            orientation="horizontal"
            opts={{ loop: true }}
            className="relative h-[calc(100vh-130px)] mt-[130px]"
        >
            <CarouselContent>
                <CarouselItem className='relative'>
                    <img src={photo1} alt="Slide 1" className="object-cover w-full h-[calc(100vh-130px)] brightness-50 z-0s" />
                    <div className="absolute z-20 top-0 w-full h-full items-center justify-center flex px-[5%] ">
                        <p className="text-4xl font-semibold tracking-wide text-center text-white md:text-6xl/snug font-merriwether">Welcome to <br /> सिद्धार्थ स्मारक सेचोन्दरी स्चूल </p>
                    </div>
                    <div className="top-0 left-0 inset-0 absolute w-full h-[calc(100vh-130px)] z-10 bg-gradient-to-t from-sky-900/75" />
                </CarouselItem>
                <CarouselItem className='relative'>
                    <img src={photo4} alt="Slide 2" className="object-cover w-full h-[calc(100vh-130px)] brightness-50" />
                    <div className="absolute z-20 top-0 w-full h-full items-center justify-center flex px-[5%] ">
                        <p className="text-4xl font-semibold tracking-wide text-center text-white md:text-6xl/snug font-merriwether">Welcome to <br /> सिद्धार्थ स्मारक सेचोन्दरी स्चूल </p>
                    </div>
                    <div className="top-0 left-0 inset-0 absolute w-full h-[calc(100vh-130px)] z-10 bg-gradient-to-t from-sky-800/50" />
                </CarouselItem>
                <CarouselItem className='relative'>
                    <img src={photo3} alt="Slide 3" className="object-cover w-full h-[calc(100vh-130px)] brightness-50" />
                    <div className="absolute top-0 w-full h-full items-center justify-center flex px-[5%] z-20">
                        <p className="text-4xl font-semibold tracking-wide text-center text-white md:text-6xl/snug font-merriwether">Welcome to <br /> सिद्धार्थ स्मारक सेचोन्दरी स्चूल </p>
                    </div>
                    <div className="top-0 left-0 inset-0 absolute w-full h-[calc(100vh-130px)] z-10 bg-gradient-to-t from-sky-900/75" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="border-transparent bg-white/25 size-12" />
            <CarouselNext className="border-transparent bg-white/25 size-12" />
        </Carousel>
    )
}

export default MainCarousel