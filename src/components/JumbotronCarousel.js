import { useState, useEffect } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/Carousel"
import Image from 'next/image'

const JumbotronCarousel = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 640)
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const carouselItems = [
        { id: 1, desktop: '/carousel-1.jpg', mobile: '/carousel-1-mobile.jpg' },
        { id: 2, desktop: '/carousel-2.jpg', mobile: '/carousel-2-mobile.jpg' },
        { id: 3, desktop: '/carousel-3.jpg', mobile: '/carousel-3-mobile.jpg' },
    ];

    return (
        <div className='mt-20 mb-14'>
            <Carousel 
                  opts={{
                    align: "start",
                  }}
                  orientation="vertical"
            >
                <CarouselContent className="max-sm:h-[200px] h-[500px] rounded-[20px]">
                    {carouselItems.map((item) => (
                        <CarouselItem key={item.id} className="pt-1 md:basis-1/2">
                            <Image 
                                className={`object-cover w-full ${isMobile ? 'h-[50vh]' : 'h-[80vh]'} rounded-[20px]`} 
                                src={isMobile ? item.mobile : item.desktop} 
                                width={2160} 
                                height={2160} 
                                alt={`Carousel-${item.id}`} 
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default JumbotronCarousel