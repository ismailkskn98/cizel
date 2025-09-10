import Header from "./header"
import About from "./about"
import Stats from "./stats"
import Features from "./features"
import Footer from "./footer"
import FadeIn from "../../common/fadeIn"

export default function HeroBottom() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative">
                <Header />
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <FadeIn className="space-y-6">
                        <About />
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <Stats />
                    </FadeIn>
                </div>

                <Features />

                <Footer />
            </div>
        </section>
    )
}
