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


const projects = [
    {
        id: 1,
        title: "KARAMAN İLİ MERKEZ İLÇESİ KIRBAĞ MAHALLESİ 998 ADET KONUT PROJESİ",
        location: "Karaman",
        units: "998 Konut",
        status: "Tamamlandı",
        image: "/images/carousel/1.webp",
        description:
            "Karaman ili merkezinde gerçekleştirilen büyük ölçekli konut projesi. Modern yaşam standartlarına uygun tasarım.",
    },
    {
        id: 2,
        title:
            "MALATYA İLİ, MERKEZ YEŞİLYURT İLÇESİ 1048 ADET KONUT, 83 ADET DÜKKAN VE 4 ADET FIRIN PROJESİ",
        location: "Malatya",
        units: "1048 Konut + 83 Dükkan + 4 Fırın",
        status: "Devam Ediyor",
        image: "/images/carousel/2.webp",
        description:
            "Malatya'da karma kullanımlı büyük ölçekli kentsel dönüşüm projesi. Konut ve ticari alanları bir arada sunan modern yaşam merkezi.",
    },
    {
        id: 3,
        title:
            "İSTANBUL ARNAVUTKÖY DURSUNKÖY 3. ETAP 4. KISIM 946 ADET KONUT VE 81 ADET TİCARET İNŞAATI PROJESİ",
        location: "İstanbul",
        units: "946 Konut + 81 Ticaret",
        status: "Planlama",
        image: "/images/carousel/3.webp",
        description:
            "İstanbul Arnavutköy'de gerçekleştirilen prestijli konut ve ticaret merkezi projesi. Şehrin dinamik yaşamına uygun modern tasarım.",
    },
    {
        id: 4,
        title:
            "MALATYA İLİ, MERKEZ YEŞİLYURT İLÇESİ 1048 ADET KONUT, 83 ADET DÜKKAN VE 4 ADET FIRIN PROJESİ",
        location: "Malatya",
        units: "1048 Konut + 83 Dükkan + 4 Fırın",
        status: "Devam Ediyor",
        image: "/images/carousel/2.webp",
        description:
            "Malatya'da karma kullanımlı büyük ölçekli kentsel dönüşüm projesi. Konut ve ticari alanları bir arada sunan modern yaşam merkezi.",
    },
    {
        id: 5,
        title:
            "İSTANBUL ARNAVUTKÖY DURSUNKÖY 3. ETAP 4. KISIM 946 ADET KONUT VE 81 ADET TİCARET İNŞAATI PROJESİ",
        location: "İstanbul",
        units: "946 Konut + 81 Ticaret",
        status: "Planlama",
        image: "/images/carousel/3.webp",
        description:
            "İstanbul Arnavutköy'de gerçekleştirilen prestijli konut ve ticaret merkezi projesi. Şehrin dinamik yaşamına uygun modern tasarım.",
    },
]

export default function ProjectsCarousel() {
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
                                project={project}
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
