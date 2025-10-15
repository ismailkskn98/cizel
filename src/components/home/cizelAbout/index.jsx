import About from "./about"
import Stats from "./stats"
import Footer from "./footer"
import FadeIn from "../../common/fadeIn"
import Image from "next/image"
import { Calendar, Building2, Award, Trophy } from "lucide-react"

export default function CizelAbout({ homeData, totalProjectCount, foundingYear, completedProjects }) {
    const date = new Date();
    const currentYear = date.getFullYear();

    const stats = [
        {
            number: `${currentYear - foundingYear}`,
            label: "Tasarımda Kusursuzluğa Adanmış Yıllar",
            icon: Calendar,
        },
        {
            number: `${totalProjectCount}+`,
            label: "Hayata Geçirilmiş Eşsiz Proje",
            icon: Building2,
        },
        {
            number: foundingYear,
            label: "Köklü Geçmişimizle Gurur Duyuyoruz",
            icon: Award,
        },
        {
            number: `${completedProjects}+`,
            label: "Tamamlanan Prestijli Proje",
            icon: Trophy,
        },
    ]

    return (
        <section className="py-16 lg:py-24 relative">
            <main className="container mx-auto px-6 lg:px-8 relative">
                <div className="flex items-center justify-between gap-12 lg:gap-20 mb-20">
                    <FadeIn className="space-y-6">
                        <About data={homeData} />
                    </FadeIn>
                    <div className="w-fit h-fit">
                        <Image src={"/images/cizel-anasayfa.webp"} alt="Cizel Anasayfa" width={600} height={600} className="object-contain object-center w-fit h-[500px] rounded-xl shadow-[20px_30px_22px_rgba(0,0,0,1)]" />
                    </div>
                </div>
                <FadeIn delay={0.3} className="w-full">
                    <Stats stats={stats} />
                </FadeIn>
                <Footer subDescription={homeData.subDescription} />
            </main>
        </section>
    )
}
