'use client'
import * as React from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

interface IArrowsUpCarousel {
  text: string,
  children?: React.ReactNode
}

const ArrowsUpCarousel = ({ text, children }: IArrowsUpCarousel) => {
  return (
    <Carousel
      opts={{
        align: 'start',

      }}

      className='flex flex-col w-full gap-6'
    >
      <div className='flex items-center justify-between w-full flex-wrap'>
        <h3 className='font-heading-4 text-gray-900'>
          {text}
        </h3>
        <div className='flex items-center gap-x-3'>
          <CarouselPrevious variant={"outline"} className='p-0 inline relative top-0 left-0 right-0 translate-0 disabled:text-gray-500 text-primary-500' />
          <CarouselNext variant={"outline"} className='p-0 inline relative top-0 left-0 right-0 translate-0 disabled:text-gray-500 text-primary-500' />
        </div>
      </div>
      <CarouselContent >
        {children}
      </CarouselContent>
    </Carousel>
  )
}

export default ArrowsUpCarousel
