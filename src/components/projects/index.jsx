import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import PageTopSection from '../common/pageTopSection'
import { ArrowRight, Calendar, MapPin, User, Building2 } from 'lucide-react'

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function Projects({ projects }) {
    const locale = useLocale()

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: null }
    ]

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
            year: 'numeric',
            month: 'short'
        })
    }

    const parseJsonField = (jsonString) => {
        try {
            const parsed = JSON.parse(jsonString)
            return parsed[locale] || parsed.tr || parsed.en || jsonString
        } catch {
            return jsonString
        }
    }

    const getProjectData = (project) => {
        try {
            const template = JSON.parse(project.json_template)
            return {
                title: parseJsonField(template.title),
                description: parseJsonField(template.description),
                jobType: parseJsonField(template.jobType),
                projectStatus: parseJsonField(template.projectStatus)
            }
        } catch {
            return {
                title: project.slug?.replace(/-/g, ' ').toUpperCase() || 'Project',
                description: '',
                jobType: '',
                projectStatus: ''
            }
        }
    }
    return (
        <main className="w-full fluid gridContainer pb-24">
            <PageTopSection breadcrumbs={breadcrumbs} />

            <section className="fluid gridContainer pb-20 pt-16 -mt-52">
                <div className="relative z-20">
                    <div className="flex items-start flex-col mb-16 pt-52">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                            {projects[0]?.location} {locale === 'tr' ? 'Projeleri' : 'Projects'}
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            {locale === 'tr' ? 'Kaliteli yapı çözümleri ile hayallerinizi gerçekleştiriyoruz.' : 'We bring your dreams to life with quality construction solutions.'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((projectItem, i) => {
                            const projectData = getProjectData(projectItem);
                            const project = JSON.parse(projectItem.json_template);
                            return (
                                <main
                                    key={i}
                                    className="group relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                                >
                                    <section className="relative h-96 overflow-hidden">
                                        <Image
                                            src={`${base_url}${project.coverImage}`}
                                            alt={projectData.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/90 text-white rounded-full backdrop-blur-sm">
                                                {projectData.projectStatus}
                                            </span>
                                        </div>

                                        {projectData.jobType && (
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1 text-xs font-semibold bg-logo-red/90 text-white rounded-full backdrop-blur-sm">
                                                    {projectData.jobType}
                                                </span>
                                            </div>
                                        )}

                                        <article className="z-20 absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 ">
                                            <Link href={`/projects/${project.location.toLowerCase()}/${project.slug}`} className='absolute inset-0 w-ful h-full z-10 !cursor-pointer' />
                                            <div className="text-center text-white space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="space-y-2">
                                                    {project.location && (
                                                        <div className="flex items-center justify-center gap-2 text-sm">
                                                            <MapPin className="w-4 h-4" />
                                                            <span>{project.location}</span>
                                                        </div>
                                                    )}

                                                    {project.employer && (
                                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-200">
                                                            <User className="w-4 h-4" />
                                                            <span className="text-center text-xs">{project.employer}</span>
                                                        </div>
                                                    )}

                                                    <div className="flex items-center justify-center gap-2 text-sm text-gray-200">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                                                    </div>

                                                    {project.area && (
                                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-200">
                                                            <Building2 className="w-4 h-4" />
                                                            <span>{new Intl.NumberFormat(locale === 'tr' ? 'tr-TR' : 'en-US').format(project.area)} m²</span>
                                                        </div>
                                                    )}
                                                </div>

                                                <button className="inline-flex items-center gap-2 text-white font-light">
                                                    <span>{locale === 'tr' ? 'Detayları Gör' : 'View Details'}</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </article>
                                    </section>

                                    <article className="absolute inset-x-0 inset-y-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 flex flex-col justify-end items-center p-6 z-10">
                                        <div className='absolute inset-x-0 w-full bottom-0 h-[70%] bg-gradient-to-t from-black/90 to-transparent -z-10' />
                                        <h3 className="text-lg font-medium text-white mb-2 line-clamp-2 leading-tight">
                                            {projectData.title}
                                        </h3>
                                        {projectData.description && (
                                            <p className="text-gray-200 text-xs line-clamp-3 leading-relaxed">
                                                {projectData.description}
                                            </p>
                                        )}
                                    </article>
                                </main>
                            )
                        })}
                    </div>

                    {projects.length === 0 && (
                        <article className="text-center py-20">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
                                <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-semibold text-white mb-4">
                                    {locale === 'tr' ? 'Henüz proje bulunmamaktadır' : 'No projects found'}
                                </h3>
                                <p className="text-gray-400">
                                    {locale === 'tr'
                                        ? 'Bu lokasyon için henüz bir proje eklenmemiştir.'
                                        : 'No projects have been added for this location yet.'
                                    }
                                </p>
                            </div>
                        </article>
                    )}
                </div>
            </section>
        </main>
    )
}
