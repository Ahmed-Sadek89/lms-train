import ToolCard from "@/components/ui/cards/tool-card"
import { CarouselItem } from "@/components/ui/carousel"
import ArrowsUpCarousel from "@/components/ui/carousels/arrows-up-carousel"

const PopularTools = () => {
    return (
        <section className="bg-white">
            <div className="app-container py-0">
                <ArrowsUpCarousel text="Popular tools" >
                    {Array(10).fill(1).map((_, index) => (
                        <CarouselItem key={index} className='basis-1/2 lg:basis-1/4 xl:basis-1/5'>
                            <ToolCard
                                title="HTML 5"
                                description="54,5145 students"
                                href="#"
                            />
                        </CarouselItem>
                    ))}
                </ArrowsUpCarousel>
            </div>
        </section>
    )
}

export default PopularTools
