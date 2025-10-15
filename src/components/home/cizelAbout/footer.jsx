import FadeIn from "../../common/fadeIn"

export default function Footer({ subDescription }) {
    return (
        <FadeIn delay={0.6} className="mt-16 text-center max-w-4xl mx-auto">
            <p className="text-sm xl:text-base 2xl:text-lg text-muted-foreground leading-relaxed font-body">
                {subDescription}
            </p>
        </FadeIn>
    )
}
