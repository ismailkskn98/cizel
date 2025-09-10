"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, ArrowRight } from "lucide-react"
import Opacity from "../../common/opacity"

export default function ProjectSlide({ project, index, current, onClick }) {
    const slideRef = useRef(null)
    const xRef = useRef(0)
    const yRef = useRef(0)
    const frameRef = useRef(null)

    React.useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return
            slideRef.current.style.setProperty("--x", `${xRef.current}px`)
            slideRef.current.style.setProperty("--y", `${yRef.current}px`)
            frameRef.current = requestAnimationFrame(animate)
        }
        frameRef.current = requestAnimationFrame(animate)
        return () => frameRef.current && cancelAnimationFrame(frameRef.current)
    }, [])

    const handleMouseMove = (e) => {
        const el = slideRef.current
        if (!el) return
        const r = el.getBoundingClientRect()
        xRef.current = e.clientX - (r.left + Math.floor(r.width / 2))
        yRef.current = e.clientY - (r.top + Math.floor(r.height / 2))
    }

    const handleMouseLeave = () => {
        xRef.current = 0
        yRef.current = 0
    }

    return (
        <motion.div
            ref={slideRef}
            className="relative h-[500px] cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl group"
            onClick={() => onClick(index)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform:
                    current !== index ? "scale(0.95) rotateX(8deg)" : "scale(1) rotateX(0deg)",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                transformOrigin: "bottom",
            }}
            whileHover={{ y: -10 }}
        >
            <div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{
                    background:
                        "radial-gradient(600px circle at calc(50% + var(--x, 0px)) calc(50% + var(--y, 0px)), rgba(14,165,233,0.15), transparent 40%)",
                }}
            />

            <div className="absolute inset-0">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            </div>

            <div className="absolute top-6 right-6 z-10">
                <Badge
                    variant={
                        project.status === "Tamamlandı"
                            ? "default"
                            : project.status === "Devam Ediyor"
                                ? "secondary"
                                : "outline"
                    }
                    className="backdrop-blur-md bg-white/10 border-white/20 text-white font-medium"
                >
                    {project.status}
                </Badge>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <Opacity delay={index * 0.05} className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight line-clamp-2 font-heading">
                        {project.title}
                    </h3>

                    <p className="text-sm text-white/80 line-clamp-2 font-body">
                        {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Building className="h-4 w-4 text-primary" />
                                <span>{project.units}</span>
                            </div>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 transition-all duration-300 hover:bg-primary hover:scale-110">
                            <ArrowRight className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                    </div>
                </Opacity>
            </div>
        </motion.div>
    )
}
