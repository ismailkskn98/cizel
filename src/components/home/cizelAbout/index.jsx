import About from "./about"
import Stats from "./stats"
import Features from "./features"
import Footer from "./footer"
import FadeIn from "../../common/fadeIn"

export default function CizelAbout({ homeData }) {
    return (
        <section className="py-16 lg:py-24 relative overflow-hidden">
            <main className="container mx-auto px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
                    <FadeIn className="space-y-6">
                        <About data={homeData} />
                    </FadeIn>
                    <FadeIn delay={0.2} className="lg:pl-8">
                        <Stats />
                    </FadeIn>
                </div>
                <Features />
                <Footer subDescription={homeData.subDescription} />
            </main>
        </section>
    )
}
