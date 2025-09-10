'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const slides = [
    { img: '/images/carousel/1.jpg', title: 'Soldaki Yazı', desc: 'Sağdaki Yazı (1 saniye sonra)' },
    { img: '/images/carousel/2.jpg', title: 'Başlık 2', desc: 'Açıklama 2' },
    { img: '/images/carousel/3.jpg', title: 'Başlık 3', desc: 'Açıklama 3' },
];

export default function MainCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loaded, setLoaded] = useState({});

    function handleImageLoaded(i) {
        setLoaded(prev => ({ ...prev, [i]: true }));
    }

    return (
        <section className="fluid relative -mt-24 h-screen w-full overflow-hidden bg-black">
            <button
                id="carousel-prev"
                aria-label="Önceki slayt"
                className="group absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20 cursor-pointer"
            >
                <span className="block h-5 w-5 rotate-180 border-y-2 border-l-2 border-white/90 group-hover:!rotate-180 transition-all duration-200"></span>
            </button>

            <button
                id="carousel-next"
                aria-label="Sonraki slayt"
                className="group absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20 cursor-pointer"
            >
                <span className="block h-5 w-5 rotate-180 border-y-2 border-l-2 border-white/90 group-hover:!rotate-180 transition-all duration-200"></span>
            </button>

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={0}
                loop
                autoplay={{ delay: 4000 }}
                onSlideChange={(sw) => setActiveIndex(sw.realIndex)}
                navigation={{ prevEl: '#carousel-prev', nextEl: '#carousel-next' }}
                pagination={{ el: '#carousel-pagination', clickable: true }}
                className="h-full w-full"
            >
                {slides.map((s, i) => {
                    const isActive = activeIndex === i;
                    const canPlay = isActive && loaded[i];

                    const baseDelay = 0.35 + i * 0.05;

                    return (
                        <SwiperSlide key={i}>
                            <article className="relative flex h-full items-center justify-center text-white">
                                <Image
                                    src={s.img}
                                    alt="cizel carousel"
                                    width={1800}
                                    height={900}
                                    priority={i === 0}
                                    onLoadingComplete={() => handleImageLoaded(i)}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="relative z-10 px-6 text-center">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={canPlay ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                                        transition={{ delay: baseDelay, duration: 0.6 }}
                                        className="text-4xl font-bold md:text-5xl"
                                    >
                                        {s.title}
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={canPlay ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                                        transition={{ delay: baseDelay + 0.5, duration: 0.6 }}
                                        className="mt-4 text-lg md:text-xl"
                                    >
                                        {s.desc}
                                    </motion.p>
                                </div>

                                <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent" />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
                            </article>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div
                id="carousel-pagination"
                className="pointer-events-auto absolute !bottom-12 !left-1/2 z-20 -translate-x-1/2"
            />
        </section>
    );
}
