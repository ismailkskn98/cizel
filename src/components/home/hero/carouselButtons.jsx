import Image from 'next/image'
import React from 'react'

export default function CarouselButtons() {
    return (
        <>
            <button
                id="carousel-prev"
                aria-label="Önceki slayt"
                className="hidden md:inline-block w-16 h-16 group absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/50 transition !cursor-pointer"
            >
                <div className='absolute left-[55%] top-[50%] -translate-1/2 scale-[150%] group-hover:scale-125 -rotate-[90deg] cursor-pointer transition-all duration-500 brightness-[12]'>
                    <Image src={"/images/cizel-logo/cizel-logo-material-top.webp"} alt='cizel logo material top' width={40} height={40} className='z-10 object-contain w-fit min-h-12 group-hover:-mt-6 transition-all duration-500' />
                    <Image src={"/images/cizel-logo/cizel-logo-material-right.webp"} alt='cizel logo material right' width={40} height={40} className='absolute left-[90%] group-hover:left-[73%] -translate-x-1/2 top-[90%] group-hover:top-[76%] -translate-y-1/2 object-contain w-fit h-3 transition-all duration-500' />
                    <Image src={"/images/cizel-logo/cizel-logo-material-left.webp"} alt='cizel logo material left' width={40} height={40} className='absolute left-[15%] group-hover:left-[25%] -translate-x-1/2 top-[75%] group-hover:top-[76%] -translate-y-1/2 object-contain w-fit h-3 transition-all duration-500' />
                </div>
            </button>
            <button
                id="carousel-next"
                aria-label="Sonraki slayt"
                className="hidden md:inline-block w-16 h-16 group absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/50 transition !cursor-pointer"
            >
                <div className='absolute left-[55%] top-[50%] -translate-1/2 scale-[150%] group-hover:scale-125 rotate-[90deg] cursor-pointer transition-all duration-500 brightness-[12]'>
                    <Image src={"/images/cizel-logo/cizel-logo-material-top.webp"} alt='cizel logo material top' width={40} height={40} className='z-10 object-contain w-fit min-h-12 group-hover:-mt-2 transition-all duration-500' />
                    <Image src={"/images/cizel-logo/cizel-logo-material-right.webp"} alt='cizel logo material right' width={40} height={40} className='absolute left-[90%] group-hover:left-[73%] -translate-x-1/2 top-[90%] group-hover:top-[76%] -translate-y-1/2 object-contain w-fit h-3 transition-all duration-500' />
                    <Image src={"/images/cizel-logo/cizel-logo-material-left.webp"} alt='cizel logo material left' width={40} height={40} className='absolute left-[15%] group-hover:left-[25%] -translate-x-1/2 top-[75%] group-hover:top-[76%] -translate-y-1/2 object-contain w-fit h-3 transition-all duration-500' />
                </div>
            </button>
        </>
    )
}
