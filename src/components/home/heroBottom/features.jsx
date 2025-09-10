import { Shield, Globe, Zap } from "lucide-react"
import Stagger from "../../common/stagger"
import Opacity from "../../common/opacity"

const features = [
    {
        icon: Shield,
        title: "Tesis Güvenlik Belgeli",
        description: "Savunma sanayi alanında sertifikalı hizmet",
    },
    {
        icon: Globe,
        title: "Uluslararası Deneyim",
        description: "Uluslararası projelerde aktif faaliyet",
    },
    {
        icon: Zap,
        title: "Yenilikçi Teknoloji",
        description: "Sürdürülebilir ve modern çözümler",
    },
]

export default function Features() {
    return (
        <Stagger delay={0.4} className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <Opacity
                    key={index}
                    delay={index * 0.1}
                    className="group"
                >
                    <div className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-100" />
                        <div className="relative">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                <feature.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">{feature.title}</h3>
                            <p className="text-muted-foreground font-body">{feature.description}</p>
                        </div>
                    </div>
                </Opacity>
            ))}
        </Stagger>
    )
}
