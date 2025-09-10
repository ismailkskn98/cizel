'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoIosArrowForward } from 'react-icons/io';

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

export default function MainCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="fluid relative -mt-24 h-[60vh] xl:h-screen w-full overflow-hidden bg-black">
            <button
                id="carousel-prev"
                aria-label="Önceki slayt"
                className="hidden md:inline-block group absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20 cursor-pointer"
            >
                <span className="block h-5 w-5 rotate-180 border-y-2 border-l-2 border-white/90 group-hover:!rotate-180 transition-all duration-200"></span>
            </button>

            <button
                id="carousel-next"
                aria-label="Sonraki slayt"
                className="hidden md:inline-block group absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20 cursor-pointer"
            >
                <span className="block h-5 w-5 rotate-180 border-y-2 border-l-2 border-white/90 group-hover:!rotate-180 transition-all duration-200"></span>
            </button>

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4500 }}
                onSlideChange={(sw) => setActiveIndex(sw.realIndex)}
                navigation={{ prevEl: '#carousel-prev', nextEl: '#carousel-next' }}
                pagination={{ el: '#carousel-pagination', clickable: true }}
                className="h-full w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id} className="relative">
                        <div className="relative h-full w-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                            <div className="absolute inset-0 bg-black/20" />

                            <div className="w-full max-w-5xl relative z-10 flex h-full items-center">
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
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.2, duration: 0.6 }}
                                                        className="inline-block"
                                                    >
                                                        <span className="hidden sm:inline-flex items-center rounded-full bg-black/20 text-white px-4 py-2 text-xs sm:text-sm font-medium backdrop-blur-sm border border-primary/30">
                                                            {slide.subtitle}
                                                        </span>
                                                    </motion.div>

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
                                                        <button
                                                            className="group flex items-center gap-1 bg-black/20 text-white backdrop-blur-lg px-6 py-3 hover:bg-black/90 text-sm sm:text-base font-light transition-all duration-300 cursor-pointer"
                                                        >
                                                            <span>{slide.cta}</span>
                                                            <IoIosArrowForward className="transition-transform group-hover:translate-x-1" />
                                                        </button>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div
                id="carousel-pagination"
                className="!w-fit flex flex-col items-center pointer-events-auto absolute !bottom-5 md:!bottom-12 !left-auto !right-4 z-20"
            />
        </section>
    );
}
