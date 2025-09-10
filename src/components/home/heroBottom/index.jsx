import Header from "./header"
import About from "./about"
import Stats from "./stats"
import Features from "./features"
import Footer from "./footer"
import FadeIn from "../../common/fadeIn"

export default function HeroBottom() {
    return (
        <section className="py-24 relative overflow-hidden">
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
