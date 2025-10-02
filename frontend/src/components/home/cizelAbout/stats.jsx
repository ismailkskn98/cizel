import { Calendar, Building2, Award, Trophy } from "lucide-react"
import Counter from "../../common/counter"
import Opacity from "../../common/opacity"

const stats = [
    {
        number: "24",
        label: "years of experience in interior design",
        icon: Calendar,
        bgColor: "bg-gradient-to-tr from-gray-100 to-gray-200",
        iconColor: "text-logo-red"
    },
    {
        number: "1400+",
        label: "completed projects",
        icon: Building2,
        bgColor: "bg-gradient-to-tr from-logo-red to-logo-red/80",
        iconColor: "text-white",
        textColor: "text-white"
    },
    {
        number: "100+",
        label: "amazing and architecture projects",
        icon: Award,
        bgColor: "bg-gradient-to-tr from-gray-100 to-gray-200",
        iconColor: "text-logo-red"
    },
    {
        number: "12",
        label: "awards for excellence in interior design",
        icon: Trophy,
        bgColor: "bg-gradient-to-tr from-gray-100 to-gray-200",
        iconColor: "text-logo-red"
    },
]

export default function Stats() {
    return (
        <section className="grid grid-cols-2 gap-4 lg:gap-6 place-items-stretch">
            {stats.map((stat, index) => (
                <Opacity
                    key={index}
                    delay={index * 0.1}
                    className="relative group w-full h-full"
                >
                    <main className={`${stat.bgColor} h-full w-full rounded-xl p-6`}>
                        <article className="relative">
                            <div className="w-full flex items-center justify-end">
                                <stat.icon className={`h-6 w-6 ${stat.iconColor} mb-4`} />
                            </div>
                            <div className={`text-3xl lg:text-4xl font-bold mb-2 font-heading ${stat.textColor || 'text-foreground'}`}>
                                {stat.number.includes('+') ? (
                                    <Counter
                                        end={parseInt(stat.number.replace('+', ''))}
                                        suffix="+"
                                        className="inline"
                                    />
                                ) : (
                                    <Counter
                                        end={parseInt(stat.number)}
                                        className="inline"
                                    />
                                )}
                            </div>
                            <div className={`text-sm leading-relaxed font-body ${stat.textColor || 'text-muted-foreground'}`}>
                                {stat.label}
                            </div>
                        </article>
                    </main>
                </Opacity>
            ))}
        </section>
    )
}
