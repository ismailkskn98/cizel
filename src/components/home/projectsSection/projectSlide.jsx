"use client"
import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, ArrowRight } from "lucide-react"
import Opacity from "../../common/opacity"
import { useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"
import Image from "next/image"

export default function ProjectSlide({ project, index, onClick, location, slug, projectStatus }) {
    const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
    const locale = useLocale();
    return (
        <motion.section
            className="relative h-[450px] overflow-hidden rounded-2xl shadow-md group !cursor-pointer" onClick={() => onClick(index)}>
            <Link href={`/projects/${location}`} className="absolute inset-0 z-10" />

            <article className="absolute inset-0 w-full h-full">
                {project.coverImage ? (
                    <>
                        <Image
                            src={`${base_url}${project.coverImage}`}
                            alt={JSON.parse(project.title)[locale]}
                            fill
                            className="h-full w-full object-cover transition-transform duration-500 scale-105 group-hover:scale-110"
                        />
                        <div className="absolute inset-x-0 top-0 w-full h-1/2 bg-gradient-to-b from-black/30 from-10% to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    </>
                ) : (
                    <>
                        <Image
                            src="/images/about-2.jpg"
                            alt={JSON.parse(project.title)[locale]}
                            fill
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    </>
                )}
            </article>

            <article className="absolute top-6 right-6 z-10">
                <Badge className="backdrop-blur-md bg-white/10 border-white/20 text-white font-medium">
                    {JSON.parse(project.projectStatus)[locale]}
                </Badge>
            </article>

            <article className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <Opacity delay={index * 0.05} className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight line-clamp-2 font-heading">
                        {JSON.parse(project.title)[locale]}
                    </h3>

                    <p className="text-sm text-white/80 line-clamp-2 font-body">
                        {project.administration}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-white" />
                                <span>{location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Building className="h-4 w-4 text-white" />
                                <div className="flex items-center gap-2">{JSON.parse(project.jobType)[locale].map((item, i) => (
                                    <span key={i} className="">{item}</span>
                                ))}</div>
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
