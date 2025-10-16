import { Link } from "@/i18n/navigation"
import CustomButton from "./customButton"
import FadeIn from "./fadeIn"
import { MoveRight } from "lucide-react"

export default function SectionHeader({
    title,
    description,
    className = "",
    descriptionClassName = "text-xs sm:text-sm lg:text-base text-muted-foreground max-w-2xl leading-relaxed text-start",
}) {
    return (
        <FadeIn className={`w-full text-center mb-8 flex flex-col items-start ${className}`}>
            <article className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-4">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference">
                                    <div className="h-0.5 w-4 lg:w-7 2xl:w-10 rounded-lg bg-white" />
                                    <MoveRight className='-ml-2 w-16 2xl:w-20 h-16 2xl:h-20 stroke-[0.5px] text-white' />
                                </div>
                                <div className="w-10 h-10 bg-black rounded-full" />
                            </div>
                            <h2 className="inline-block text-3xl lg:text-4xl 2xl:text-5xl font-medium text-black/80 ml-10 lg:ml-16 2xl:ml-20">{title}</h2>
                        </div>
                    </div>
                    {description && (
                        <p className={`mt-4 ${descriptionClassName}`}>
                            {description}
                        </p>
                    )}
                </div>
                <Link href={"/projects"} className="relative group flex items-center gap-2.5 sm:gap-4 px-6 py-3 rounded-full bg-black text-white xl:text-base !cursor-pointer">
                    <span className="text-xs sm:text-sm 2xl:text-base text-nowrap">Tüm Projeler</span>
                    <span className="inline-block h-3 md:h-4 w-3 md:w-4 rotate-45 border border-white/90 group-hover:rotate-210 transition-all duration-200" />
                </Link>
            </article>
        </FadeIn>
    )
}
