'use client';

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import Image from 'next/image';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function CizelProjects({ projects, homeData }) {
    const verticalScrollRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {

        const leftColumn = leftColumnRef.current;
        const rightColumn = rightColumnRef.current;
        const verticalScroll = verticalScrollRef.current;
        const container = containerRef.current;
        const images = gsap.utils.toArray('.img-wrapper');


        gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${images.length * 100}%`,
                scrub: 5,
                invalidateOnRefresh: true,
            }
        })
            .to(leftColumn, {
                y: () => -(leftColumn.scrollHeight - verticalScroll.offsetHeight)
            })
            .fromTo(rightColumn, {
                y: () => verticalScroll.offsetHeight - rightColumn.scrollHeight
            }, { y: 0 }, 0);

        ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: () => `+=${images.length * 100}%`,
            invalidateOnRefresh: true,
            pin: true,
        })
    }, [])

    return (
        <main id='smooth-wrapper' className='w-full'>
            <section id='smooth-content' className=''>
                <main ref={containerRef} className='relative h-screen lg:h-auto flex lg:grid lg:grid-cols-2 items-center lg:items-center justify-center lg:justify-start overflow-hidden'>
                    <article id='context' className='relative z-10 w-[80%] lg:w-auto h-[60%] lg:h-auto flex flex-col items-center justify-center text-center text-white lg:text-black bg-black/20 backdrop-blur-lg lg:backdrop-blur-none lg:bg-transparent overflow-hidden rounded-lg lg:rounded-none'>
                        <div id='title' className='flex items-center gap-1 mb-3'>
                            <h2 className='text-3xl 2xl:text-4xl font-medium'>{homeData.title}</h2>
                        </div>
                        <p className='2xl:text-lg font-light w-[80%] leading-relaxed'>{homeData.description}</p>
                    </article>
                    <article ref={verticalScrollRef} className='absolute top-0 left-0 lg:top-auto lg:left-auto lg:relative flex w-full h-screen overflow-hidden'>
                        <div className='z-10 absolute inset-x-0 top-[-2px] w-full h-16 bg-gradient-to-t from-transparent to-white'></div>
                        <div className='z-10 absolute inset-x-0 bottom-[-2px] w-full h-16 bg-gradient-to-b from-transparent to-white'></div>
                        <section id='column' className='w-1/2'>
                            <div ref={leftColumnRef} className='img-wrapper grid grid-cols-1 place-items-stretch will-change-transform'>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/3.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                            </div>
                        </section>
                        <section id='column' className='w-1/2'>
                            <div ref={rightColumnRef} className='img-wrapper grid grid-cols-1 place-items-stretch will-change-transform'>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/3.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.webp" alt="cizel project" width={340} height={300} className='object-cover block h-auto min-h-72 max-w-full rounded-xl' />
                                </div>
                            </div>
                        </section>
                    </article>
                </main>
            </section>
        </main>
    )
}
