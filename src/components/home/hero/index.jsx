'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import CarouselButtons from './carouselButtons';
import CustomButton from '@/components/common/customButton';

const slides = [
    {
        id: 1,
        image: "/images/carousel/1.jpg",
        title: "Güvenle Yükseliyoruz",
        subtitle: "İnşaat Sektöründe Lider",
        description:
            "Modern teknoloji ve deneyimli ekibimizle, her projede mükemmelliği hedefliyoruz. Güvenilir çözümler sunarak sektörde öncü olmaya devam ediyoruz.",
        cta: "Projelerimizi Keşfedin",
    },
    {
        id: 2,
        image: "/images/carousel/2.jpg",
        title: "Modern Yapılar",
        subtitle: "Çağdaş Mimari Çözümler",
        description:
            "Sürdürülebilir ve estetik tasarımlarla, yaşam kalitesini artıran projeler geliştiriyoruz. Her detayda kalite ve yenilik anlayışımızı yansıtıyoruz.",
        cta: "Tasarımları İnceleyin",
    },
    {
        id: 3,
        image: "/images/carousel/3.jpg",
        title: "Geleceği İnşa Ediyoruz",
        subtitle: "Yenilikçi Teknolojiler",
        description:
            "Akıllı bina sistemleri ve çevre dostu malzemelerle, gelecek nesillere yaşanabilir mekanlar bırakıyoruz. Teknoloji ve doğa uyumunu sağlıyoruz.",
        cta: "Geleceği Görün",
    },
]

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [subtitle, setSubtitle] = useState(slides[0].subtitle);

    return (
        <section className="fluid p-2 bg-white relative z-40 mt-[-6rem] h-[60vh] xl:h-screen w-full overflow-hidden">
            <CarouselButtons />
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop
                autoplay={{ delay: 45000000 }}
                onSlideChange={(sw) => {
                    setActiveIndex(sw.realIndex);
                    setSubtitle(slides[sw.realIndex].subtitle);
                }}
                navigation={{ prevEl: '#carousel-prev', nextEl: '#carousel-next' }}
                pagination={{ el: '#carousel-pagination', clickable: true }}
                className="h-full w-full rounded-3xl"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="relative">
                        <div className="relative h-full w-full">
                            <div
                                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                            <div className="absolute inset-0 -z-10 bg-black/20" />

                            <div className="w-full max-w-5xl flex h-full items-center">
                                <div className="mx-auto px-6 lg:px-8">
                                    <div className="max-w-2xl">
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
                                                        className="text-4xl md:text-5xl font-bold leading-tight text-white lg:text-7xl font-heading"
                                                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                                                    >
                                                        {slide.title}
                                                    </motion.h1>

                                                    <motion.p
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.6, duration: 0.8 }}
                                                        className="text-sm md:text-lg leading-relaxed text-white/90 max-w-2xl font-body"
                                                        style={{ fontFamily: "var(--font-dm-sans)" }}
                                                    >
                                                        {slide.description}
                                                    </motion.p>

                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.8, duration: 0.8 }}
                                                    >
                                                        <CustomButton href={slide.link} />
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
                    className="hero-slogan-clip z-20 absolute left-1/2 -translate-x-1/2 bottom-0 inline-flex items-center justify-center w-full max-w-sm bg-white text-black/90 px-4 py-2 text-xs sm:text-sm font-medium backdrop-blur-sm border border-primary/30"
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
