import React from 'react'
import Image from 'next/image'
import { MoveLeft, MoveRight } from 'lucide-react';

export default function CarouselButtons() {
    return (
        <>
            <button
                id="carousel-prev"
                aria-label="Önceki slayt"
                className="hidden md:inline-block w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24 group absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/50 hover:border-white transition !cursor-pointer"
            >
                <div className='absolute left-full top-[50%] -translate-1/2 cursor-pointer transition-all duration-500 group-hover:left-[70%]'>
                    <MoveLeft className='text-white/50 w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24 stroke-[0.5px] group-hover:text-white' />
                </div>
            </button>
            <button
                id="carousel-next"
                aria-label="Sonraki slayt"
                className="hidden md:inline-block w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24 group absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/50 hover:border-white transition !cursor-pointer"
            >
                <div className='absolute left-0 top-[50%] -translate-1/2 cursor-pointer transition-all duration-500 group-hover:left-1/3'>
                    <MoveRight className='text-white/50 w-16 xl:w-20 2xl:w-24 h-16 xl:h-20 2xl:h-24 stroke-[0.5px] group-hover:text-white' />
                </div>
            </button>
        </>
    )
}
