'use client'

import { Link } from "@/i18n/navigation"
import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About({ data }) {
    const t = useTranslations('AboutPage');

    const paragraphs = data.description.split('. ');
    const firstPart = paragraphs.slice(0, 2).join('. ');
    const secondPart = paragraphs.slice(2).join('. ');
    return (
        <section className="space-y-8">
            <article className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference">
                            <div className="h-0.5 w-10 rounded-lg bg-white" />
                            <MoveRight className='-ml-2 w-20 h-20 stroke-[0.5px] text-white' />
                        </div>
                        <div className="w-10 h-10 bg-black rounded-full" />
                    </div>
                    <span className="inline-block text-sm 3xl:text-base font-medium text-black/80 ml-20">{t('badge')}</span>
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-black/90 leading-tight">
                    {data.title}
                </h2>
                <p className="text-sm xl:text-base text-black/70 leading-relaxed font-body max-w-2xl mb-4">
                    {firstPart}.
                </p>
                <p className="text-sm xl:text-base text-black/70 leading-relaxed font-body max-w-2xl">
                    {secondPart}
                </p>
                <Link href={"/about"} className="relative w-fit group flex items-center gap-2.5 sm:gap-4 px-4 sm:px-5 2xl:px-6 py-2.5 sm:py-3 rounded-full bg-black text-white xl:text-base !cursor-pointer transition-all duration-150">
                    <span className="text-xs sm:text-sm 2xl:text-base">{t('readMore')}</span>
                    <span className="inline-block h-3 md:h-4 w-3 md:w-4 rotate-45 border border-white/90 group-hover:rotate-210 transition-all duration-200" />
                </Link>
            </article>
        </section>
    )
}
