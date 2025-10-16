import FadeIn from "@/components/common/fadeIn"

export default function TurkeyMapHeader({ homeData }) {
    return (
        <FadeIn className={`text-center mb-8 flex flex-col items-start`}>
            <article className="w-full flex items-center justify-between gap-4">
                <div className="mx-auto flex flex-col items-start lg:items-center">
                    <div className="flex flex-col items-start lg:items-center">
                        <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-medium text-foreground mb-3">
                            {homeData.title}
                        </h2>
                        <div className="w-32 h-1 bg-gradient-to-r from-logo-red to-secondary mb-3" />
                    </div>
                    {homeData.subtitle && (
                        <p className="text-xs sm:text-sm lg:text-lg text-muted-foreground max-w-2xl leading-relaxed text-start lg:text-center">
                            {homeData.subtitle}
                        </p>
                    )}
                </div>
            </article>
        </FadeIn>
    )
}
