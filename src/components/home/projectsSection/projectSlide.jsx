"use client"
import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, ArrowRight } from "lucide-react"
import Opacity from "../../common/opacity"
import { useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function ProjectSlide({ project, index, current, onClick }) {
    const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
    const locale = useLocale();

    console.log(project);
    return (
        <motion.section
            className="relative h-[450px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-sm group !cursor-pointer" onClick={() => onClick(index)}>
            <Link href={`/projects/${project.location.toLowerCase()}/${JSON.parse(project.title)["tr"]}`} className="absolute inset-0 z-10" />

            <article className="absolute inset-0">
                <img
                    src={`${base_url}${project.coverImage}`}
                    alt={JSON.parse(project.title)[locale]}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            </article>

            <article className="absolute top-6 right-6 z-10">
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
            </article>

            <article className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <Opacity delay={index * 0.05} className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight line-clamp-2 font-heading">
                        {JSON.parse(project.title)[locale]}
                    </h3>

                    <p className="text-sm text-white/80 line-clamp-2 font-body">
                        {JSON.parse(project.description)[locale]}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-white" />
                                <span>{project.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Building className="h-4 w-4 text-white" />
                                <span>{JSON.parse(project.jobType)[locale]}</span>
                            </div>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-gray-200/20">
                            <ArrowRight className="h-5 w-5 text-white group-hover:text-white transition-colors" />
                        </div>
                    </div>
                </Opacity>
            </article>
        </motion.section>
    )
}
