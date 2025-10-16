import { Calendar, Building2, Award, Trophy } from "lucide-react"
import Counter from "../../common/counter"
import Opacity from "../../common/opacity"

const defaultStats = [
    { number: "24", label: "İç mimarlıkta deneyim yılı", icon: Calendar },
    { number: "1400+", label: "Tamamlanan proje", icon: Building2 },
    { number: "100+", label: "Mimari ve tasarım projesi", icon: Award },
    { number: "12", label: "İç mimarlıkta mükemmellik ödülü", icon: Trophy },
]

export default function Stats({ stats = defaultStats }) {

    return (
        <section className="w-full">
            <h2 id="stats-title" className="sr-only">Şirket İstatistikleri</h2>

            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 lg:mt-24 xl:mt-32 2xl:mt-40">
                {stats.map((stat, index) => (
                    <li key={index} className="h-full">
                        <Opacity delay={index * 0.08} className="h-full">
                            <article
                                className={["h-full w-full rounded-lg", "border border-neutral-200/80 ", "bg-white", "shadow-sm hover:shadow-md transition-shadow", "focus-within:ring-1 focus-within:ring-neutral-300 ",].join(" ")}
                            >
                                <div className="p-5 lg:p-6 h-full">
                                    <div className="mb-4 flex items-start justify-between">
                                        <stat.icon className="h-5 w-5 lg:h-6 lg:w-6 text-neutral-500 " />
                                        <span className="ml-3 h-1 w-10 rounded bg-neutral-200 " />
                                    </div>

                                    <div className="mb-1 font-heading text-2xl lg:text-3xl xl:text-5xl font-semibold tracking-tight text-neutral-900 ">
                                        {stat.number.includes("+") ? (
                                            <Counter end={parseInt(stat.number.replace("+", ""))} suffix="+" className="inline" />
                                        ) : (
                                            <Counter end={parseInt(stat.number)} className="inline" />
                                        )}
                                    </div>

                                    <p className="font-body text-sm leading-relaxed text-neutral-600 ">
                                        {stat.label}
                                    </p>
                                </div>
                            </article>
                        </Opacity>
                    </li>
                ))}
            </ul>
        </section>
    )
}
