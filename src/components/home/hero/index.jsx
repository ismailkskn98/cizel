'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarouselButtons from './carouselButtons';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function Hero({ carousels }) {
    const locale = useLocale();
    const [activeIndex, setActiveIndex] = useState(0);
    const [subtitle, setSubtitle] = useState(JSON.parse(carousels[0].subtitle)[locale]);

    return (
        <section className="fluid p-2 bg-white relative z-40 mt-0 lg:mt-[-6rem] h-[60vh] xl:h-screen w-full overflow-hidden">
            <CarouselButtons />
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4500 }}
                onSlideChange={(sw) => {
                    setActiveIndex(sw.realIndex);
                    setSubtitle(JSON.parse(carousels[sw.realIndex].subtitle)[locale]);
                }}
                navigation={{ prevEl: '#carousel-prev', nextEl: '#carousel-next' }}
                pagination={{ el: '#carousel-pagination', clickable: true }}
                className="h-full w-full rounded-3xl"
            >
                {carousels.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="relative">
                        <div className="relative h-full w-full">
                            <div
                                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${base_url}${slide.image})` }}
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                            <div className="absolute inset-0 -z-10 bg-black/20" />

                            <div className="w-full mx-auto max-w-5xl flex h-full items-center text-center">
                                <div className="mx-auto px-6 lg:px-8">
                                    <div className="w-full">
                                        <AnimatePresence mode="wait">
                                            {activeIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -30 }}
                                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                                    className="space-y-3 md:space-y-6"
                                                >
                                                    <motion.h1
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.4, duration: 0.8 }}
                                                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl leading-tight text-white font-medium"
                                                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                                                    >
                                                        {JSON.parse(slide.title)[locale]}
                                                    </motion.h1>

                                                    <motion.p
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.6, duration: 0.8 }}
                                                        className="text-sm md:text-lg leading-relaxed text-white/90 max-w-2xl text-center mx-auto"
                                                        style={{ fontFamily: "var(--font-dm-sans)" }}
                                                    >
                                                        {JSON.parse(slide.description)[locale]}
                                                    </motion.p>

                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.8, duration: 0.8 }}
                                                        className='w-fit mx-auto'
                                                    >
                                                        <Link href={"/projects"} className="relative group flex items-center gap-4 px-6 py-3 rounded-full bg-logo-red hover:bg-[#7d1d2a] text-white xl:text-base !cursor-pointer transition-all duration-150">
                                                            <span>Tüm Projeler</span>
                                                            <span className="inline-block h-4 w-4 rotate-45 border border-white/90 group-hover:rotate-210 transition-all duration-200" />
                                                        </Link>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
                )}
                <motion.span
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className=" z-20 absolute left-1/2 -translate-x-1/2 bottom-0 inline-flex items-center justify-center w-full max-w-xs rounded-t-2xl bg-white text-black px-4 py-2 text-xs font-light"
                >
                    {subtitle}
                </motion.span>
            </Swiper>
            <div
                id="carousel-pagination"
                className="!w-fit flex flex-col items-center pointer-events-auto absolute !bottom-5 md:!bottom-12 !left-auto !right-9 z-20"
            />
        </section>
    );
}
