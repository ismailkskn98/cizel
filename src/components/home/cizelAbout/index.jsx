'use client'

import About from "./about"
import Stats from "./stats"
import Footer from "./footer"
import FadeIn from "../../common/fadeIn"
import Image from "next/image"
import { Calendar, Building2, Award, Trophy } from "lucide-react"
import { useTranslations } from "next-intl"
import MotionScrollInViewVariant from "@/components/common/motionScrollInViewVariant"

export default function CizelAbout({ homeData, totalProjectCount, foundingYear, completedProjects }) {
    const t = useTranslations('AboutPage.homeStats')
    const date = new Date();
    const currentYear = date.getFullYear();

    const stats = [
        {
            number: `${currentYear - foundingYear}`,
            label: t('experienceYears'),
            icon: Calendar,
        },
        {
            number: `${totalProjectCount}+`,
            label: t('totalProjects'),
            icon: Building2,
        },
        {
            number: foundingYear,
            label: t('foundingYear'),
            icon: Award,
        },
        {
            number: `${completedProjects}+`,
            label: t('completedProjects'),
            icon: Trophy,
        },
    ]

    return (
        <section className="py-16 lg:py-24 relative">
            <MotionScrollInViewVariant className="container mx-auto relative">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-12 xl:gap-16 2xl:gap-20 mb-20">
                    <About data={homeData} />
                    <div className="w-fit h-fit">
                        <Image src={"/images/cizel-anasayfa.webp"} alt="Cizel Anasayfa" width={600} height={600} className="object-cover lg:object-contain object-center w-fit h-[320px] sm:h-[350px] lg:h-[500px] rounded-xl drop-shadow-2xl lg:drop-shadow-[20px_30px_22px_rgba(0,0,0,1)]" />
                    </div>
                </div>
                <Stats stats={stats} />
                <Footer subDescription={homeData.subDescription} />
            </MotionScrollInViewVariant>
        </section>
    )
}
