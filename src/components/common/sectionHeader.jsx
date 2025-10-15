import { Link } from "@/i18n/navigation"
import CustomButton from "./customButton"
import FadeIn from "./fadeIn"

export default function SectionHeader({
    title,
    description,
    className = "",
    titleClassName = "text-4xl md:text-5xl font-medium text-foreground mb-3 ",
    descriptionClassName = "text-xs sm:text-sm lg:text-lg text-muted-foreground max-w-2xl leading-relaxed text-start",
    showDivider = true,
    dividerClassName = "w-32 h-1 bg-gradient-to-r from-logo-red to-secondary mb-3"
}) {
    return (
        <FadeIn className={`text-center mb-8 flex flex-col items-start ${className}`}>
            <article className="w-full flex items-center justify-between gap-4">
                <div className="flex flex-col items-start">
                    <div className="flex flex-col items-start">
                        <h2 className={titleClassName}>
                            {title}
                        </h2>
                        {showDivider && <div className={`${dividerClassName}`} />}
                    </div>
                    {description && (
                        <p className={descriptionClassName}>
                            {description}
                        </p>
                    )}
                </div>
                <Link href={"/projects"} className="relative group flex items-center gap-4 px-6 py-3 rounded-full bg-black text-white xl:text-base !cursor-pointer">
                    <span>Tüm Projeler</span>
                    <span className="inline-block h-4 w-4 rotate-45 border border-white/90 group-hover:rotate-180 transition-all duration-200" />
                </Link>
            </article>
        </FadeIn>
    )
}
