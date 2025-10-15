"use client"
import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import ProjectSlide from "./projectSlide"
import FadeIn from "../../common/fadeIn"
import ProjectsNavigation from "./navigation"


export default function ProjectsCarousel({ projects }) {
    const [current, setCurrent] = useState(projects.length - 1)
    const swiperRef = useRef(null)

    const handleSlideClick = (index) => {
        if (swiperRef.current) swiperRef.current.slideTo(index)
    }

    return (
        <FadeIn delay={0.2} className="fluid -translate-x-[10%] w-[120%] relative">
            <ProjectsNavigation />
            <Swiper
                ref={swiperRef}
                modules={[Navigation, A11y, Autoplay]}
                navigation={{ prevEl: '#projects-prev', nextEl: '#projects-next' }}
                onSlideChange={(sw) => setCurrent(sw.activeIndex)}
                initialSlide={projects.length - 1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    waitForTransition: false
                }}
                loop={true}
                speed={500}
                slidesPerView={1}
                spaceBetween={24}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 32 },
                    1300: { slidesPerView: 4, spaceBetween: 32 },
                }}
                className="!py-12"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={`${project.id}-${index}`}>
                        <ProjectSlide
                            project={JSON.parse(project.json_template)}
                            location={project.location}
                            slug={project.slug}
                            projectStatus={project.project_status}
                            index={index}
                            current={current}
                            onClick={handleSlideClick}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </FadeIn>
    )
}
