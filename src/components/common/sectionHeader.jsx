import FadeIn from "./fadeIn"

export default function SectionHeader({
    title,
    description,
    className = "",
    titleClassName = "text-5xl lg:text-6xl font-bold text-foreground mb-6 font-heading",
    descriptionClassName = "text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed",
    showDivider = true,
    dividerClassName = "w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"
}) {
    return (
        <FadeIn className={`text-center mb-20 ${className}`}>
            <h2 className={titleClassName}>
                {title}
            </h2>
            {showDivider && <div className={dividerClassName} />}
            {description && (
                <p className={descriptionClassName}>
                    {description}
                </p>
            )}
        </FadeIn>
    )
}
