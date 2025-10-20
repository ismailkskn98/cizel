'use client';
import { Calendar, Building2, MapPin, Users } from "lucide-react"
import Counter from "../common/counter"
import Opacity from "../common/opacity"
import { useTranslations } from "next-intl"
import MotionScrollInViewVariant from "../common/motionScrollInViewVariant";

export default function AboutStats({ totalProjectCount, foundingYear, completedProjects }) {
    const t = useTranslations('AboutPage.stats');
    const date = new Date();
    const currentYear = date.getFullYear();

    const stats = [
        {
            number: foundingYear,
            label: t('foundedYearLabel'),
            icon: Calendar,
            bgColor: "bg-white",
            iconColor: "text-gray-600"
        },
        {
            number: totalProjectCount + "+",
            label: t('projectsLabel'),
            icon: Building2,
            bgColor: "bg-white",
            iconColor: "text-gray-600"
        },
        {
            number: `${currentYear - foundingYear}`,
            label: t('experienceLabel'),
            icon: Users,
            bgColor: "bg-white",
            iconColor: "text-gray-600"
        },
        {
            number: t('cities'),
            label: t('citiesLabel'),
            icon: MapPin,
            bgColor: "bg-white",
            iconColor: "text-gray-600"
        },
    ]

    return (
        <MotionScrollInViewVariant className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 lg:gap-12 place-items-center w-full">
            {stats.map((stat, index) => (
                <Opacity
                    key={index}
                    delay={index * 0.2}
                    className="relative group w-full h-full flex flex-col items-center text-center"
                >
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 text-white">
                        {stat.number.includes('+') ? (
                            <Counter
                                end={parseInt(stat.number.replace('+', ''))}
                                suffix="+"
                                className="inline"
                            />
                        ) : stat.number === "2010" ? (
                            stat.number
                        ) : (
                            <Counter
                                end={parseInt(stat.number)}
                                className="inline"
                            />
                        )}
                    </div>
                    <div className="text-xs lg:text-sm text-white/60 font-medium">
                        {stat.label}
                    </div>
                </Opacity>
            ))}
        </MotionScrollInViewVariant>
    )
}