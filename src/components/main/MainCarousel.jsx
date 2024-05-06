import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const MainCarousel = () => {
    return (
        <Carousel
            orientation="horizontal"
            opts={{ loop: true }}
            className="relative h-[calc(100vh-114px)] mt-[114px]"
        >
            <CarouselContent>
                <CarouselItem>
                    <img src="https://source.unsplash.com/random/school" alt="Slide 1" className="object-cover w-full h-[calc(100vh-114px)] brightness-50" />
                </CarouselItem>
                <CarouselItem>
                    <img src="https://source.unsplash.com/random/university" alt="Slide 2" className="object-cover w-full h-[calc(100vh-114px)] brightness-50" />
                </CarouselItem>
                <CarouselItem>
                    <img src="https://source.unsplash.com/random/playground" alt="Slide 3" className="object-cover w-full h-[calc(100vh-114px)] brightness-50" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="border-transparent bg-white/25 size-12" />
            <CarouselNext className="border-transparent bg-white/25 size-12" />
        </Carousel>
    )
}

export default MainCarousel