import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ImQuotesLeft } from "react-icons/im"

const MainCarousel = () => {
    return (
        <Carousel
            orientation="horizontal"
            opts={{ loop: true }} // Optional: Set options for the carousel
            className="relative h-[calc(100vh-114px)] mt-[114px]" // Make the carousel full-screen
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
                {/* Add more CarouselItem components for additional slides */}
            </CarouselContent>
            <CarouselPrevious className="border-transparent bg-white/25 size-12" />
            <CarouselNext className="border-transparent bg-white/25 size-12" />
        </Carousel>
    )
}

export default MainCarousel