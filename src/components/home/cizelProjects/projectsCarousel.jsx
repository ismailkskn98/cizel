'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { useLocale } from 'next-intl';
import { motion } from 'motion/react';
import { Link } from '@/i18n/navigation';
import { MapPin, Building2 } from 'lucide-react';

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ProjectsCarousel({ projects }) {
    const locale = useLocale();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, Pagination, EffectCube]}
                effect="cube"
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false
                }}
                speed={1000}
                pagination={{
                    el: '#projects-carousel-pagination',
                    clickable: true
                }}
                onSlideChange={(sw) => {
                    setActiveIndex(sw.realIndex);
                }}
                className="h-[500px] lg:h-[600px] rounded-2xl"
            >
                {projects.map((project, index) => {
                    const jsonProject = JSON.parse(project.json_template);
                    if (!jsonProject.coverImage) return null;
                    const jobTypes = jsonProject.jobType ? JSON.parse(jsonProject.jobType)[locale] : [];

                    return (
                        <SwiperSlide key={project.id} className="relative">
                            <article className="relative h-full w-full rounded-2xl overflow-hidden">
                                <motion.div
                                    key={`${project.id}-${activeIndex}`}
                                    className="absolute inset-0"
                                    initial={{ scale: 1.15 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 5.2, ease: "easeOut" }}
                                >
                                    <Image
                                        src={`${base_url}${jsonProject.coverImage}`}
                                        alt={JSON.parse(jsonProject.title)[locale]}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 500px) 100vw, 90vw"
                                    />
                                </motion.div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

                                <main className="absolute inset-0 flex flex-col justify-between p-6 lg:p-10">
                                    <article className="flex items-start justify-between">
                                        <div className="flex flex-wrap items-center gap-2">
                                            {jobTypes.slice(0, 2).map((type, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs text-white/70 font-medium"
                                                >
                                                    {type}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                                            <span className="text-sm text-white/70 font-semibold">
                                                {jsonProject.year}
                                            </span>
                                        </div>
                                    </article>

                                    <article className="space-y-3 lg:space-y-4">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-white/80" />
                                            <span className="text-xs text-white/90 font-medium">
                                                {jsonProject.location}
                                            </span>
                                        </div>

                                        <Link
                                            href={`/projects/${project.location}/${project.slug}`}
                                            className="!cursor-pointer block text-xl lg:text-2xl font-medium text-white leading-tight max-w-3xl hover:text-white/90 transition-colors duration-200"
                                        >
                                            {JSON.parse(jsonProject.title)[locale]}
                                        </Link>

                                        {jsonProject.administration && (
                                            <div className="flex items-center gap-2 max-w-2xl">
                                                <Building2 className="w-4 h-4 lg:w-5 lg:h-5 text-white/70 flex-shrink-0 mt-0.5" />
                                                <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                                                    {jsonProject.administration}
                                                </p>
                                            </div>
                                        )}
                                    </article>
                                </main>
                            </article>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <div
                id="projects-carousel-pagination" className="max-w-11/12 mx-auto flex items-center justify-center gap-2 mt-10" />
        </section>
    );
}
