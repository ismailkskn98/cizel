import { Building2, Users, Globe, Award } from "lucide-react"
import Counter from "../../common/counter"
import Opacity from "../../common/opacity"

const stats = [
    { number: "2005", label: "Kuruluş Yılı", icon: Building2 },
    { number: "1000+", label: "Tamamlanan Proje", icon: Award },
    { number: "4", label: "Ülke Deneyimi", icon: Globe },
    { number: "500+", label: "Uzman Ekip", icon: Users },
]

export default function Stats() {
    return (
        <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
                <Opacity
                    key={index}
                    delay={index * 0.1}
                    className="relative group"
                >
                    <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-100 " />
                        <div className="relative">
                            <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                            <div className="text-3xl font-bold text-foreground mb-2 font-heading">
                                {stat.number.includes('+') ? (
                                    <Counter
                                        end={stat.number.replace('+', '')}
                                        suffix="+"
                                        className="inline"
                                    />
                                ) : (
                                    <Counter
                                        end={stat.number}
                                        className="inline"
                                    />
                                )}
                            </div>
                            <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
                        </div>
                    </div>
                </Opacity>
            ))}
        </div>
    )
}
