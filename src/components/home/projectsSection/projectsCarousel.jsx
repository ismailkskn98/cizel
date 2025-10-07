"use client"

import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ProjectSlide from "./projectSlide"
import FadeIn from "../../common/fadeIn"
import ProjectsNavigation from "./navigation"


export default function ProjectsCarousel({ projects }) {
    const [current, setCurrent] = useState(0)
    const swiperRef = useRef(null)

    const handleSlideClick = (index) => {
        if (swiperRef.current) swiperRef.current.slideTo(index)
    }

    return (
        <FadeIn delay={0.2} className="relative">
            <div className="relative">
                <ProjectsNavigation />
                <Swiper
                    modules={[Navigation, A11y]}
                    navigation={{ prevEl: '#cprojects-prev', nextEl: '#projects-next' }}
                    onSlideChange={(sw) => setCurrent(sw.activeIndex)}
                    slidesPerView={1}
                    spaceBetween={24}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    className="!py-12"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={`${project.id}-${index}`}>
                            <ProjectSlide
                                project={JSON.parse(project.json_template)}
                                index={index}
                                current={current}
                                onClick={handleSlideClick}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </FadeIn>
    )
}
