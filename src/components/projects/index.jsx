import React from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import PageTopSection from '../common/pageTopSection'
import { ArrowRight, Calendar, MapPin, Building2, MoveRight } from 'lucide-react'

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Projects({ projects, city, projectStatusName }) {
    const locale = useLocale();
    const t = useTranslations();

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: null }
    ]

    const parseJsonField = (jsonString) => {
        try {
            const parsed = JSON.parse(jsonString);
            return parsed[locale] || parsed.tr || parsed.en || jsonString
        } catch {
            return jsonString;
        }
    }

    const getProjectData = (project) => {
        try {
            const template = JSON.parse(project.json_template)
            return {
                title: parseJsonField(template.title),
                location: template.location || '',
                jobType: parseJsonField(template.jobType),
                projectStatus: parseJsonField(template.projectStatus),
                administration: template.administration || '',
                projectName: parseJsonField(template.projectName),
                year: template.year || '',
                slug: template.slug || '',
                coverImage: template.coverImage || null
            }
        } catch {
            return {
                title: project.slug?.replace(/-/g, ' ').toUpperCase() || 'Project',
                location: '',
                jobType: [],
                projectStatus: '',
                administration: '',
                projectName: '',
                year: '',
                slug: '',
                coverImage: null
            }
        }
    }

    return (
        <main className="w-full fluid gridContainer pb-24">
            <PageTopSection breadcrumbs={breadcrumbs} />
            <section className="fluid gridContainer pb-20 pt-16 -mt-52">
                <div className="relative z-20">

                    <div className="relative overflow-hidden mb-12 pt-52">

                        <div className="relative z-10 max-w-4xl">
                            <article className="flex items-center gap-2 mb-6 bg-white">
                                <div className="relative">
                                    <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference">
                                        <div className="h-0.5 w-6 lg:w-10 rounded-lg bg-white" />
                                        <MoveRight className='-ml-2 w-12 lg:w-16 2xl:w-20 h-12 lg:h-16 2xl:h-20 stroke-[0.5px] text-white' />
                                    </div>
                                    <div className="w-7 lg:w-10 h-7 lg:h-10 bg-black rounded-full" />
                                </div>
                                <span className="inline-block text-sm 3xl:text-base font-medium text-black/80 ml-12 lg:ml-16 2xl:ml-20">{t('ProjectsPage.badge')}</span>
                            </article>

                            <h1 className="text-5xl md:text-6xl font-medium mb-3 leading-tight">
                                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                                    {city ? `${projects[0].location}` : `${projectStatusName}`}
                                </span>
                                <br />
                                <span className="text-logo-red">
                                    {city ? t('ProjectsPage.cityProjects') : ''}
                                </span>
                            </h1>

                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
                                {t('ProjectsPage.description')}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {projects.map((projectItem, i) => {
                            const project = getProjectData(projectItem);
                            const jobTypes = Array.isArray(project.jobType) ? project.jobType : [];

                            return (
                                <Link
                                    key={i}
                                    href={`/projects/${project.location.toLowerCase()}/${project.slug}`}
                                    className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 !cursor-pointer"
                                >
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        {project.coverImage ? (
                                            <Image
                                                src={`${base_url}${project.coverImage}`}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <>
                                                <Image
                                                    src="/images/about-2.jpg"
                                                    alt={project.title || ''}
                                                    fill
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                            </>
                                        )}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {project.projectStatus && (
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1.5 text-xs font-semibold bg-white/95 text-gray-800 rounded-full shadow-lg backdrop-blur-sm">
                                                    {project.projectStatus}
                                                </span>
                                            </div>
                                        )}

                                        {jobTypes.length > 0 && (
                                            <div className="absolute top-4 right-4 flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                                                {jobTypes.map((type, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2.5 py-1 text-[10px] font-semibold bg-logo-red text-white rounded-full shadow-lg"
                                                    >
                                                        {type}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                                                    {t('ProjectsPage.viewDetails')}
                                                    <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-logo-red transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                            {project.projectName}
                                        </p>

                                        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            {project.location && (
                                                <div className="flex items-start gap-2">
                                                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-600 font-medium">{project.location}</span>
                                                </div>
                                            )}

                                            {project.year && (
                                                <div className="flex items-start gap-2">
                                                    <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-600 font-medium">{project.year}</span>
                                                </div>
                                            )}
                                        </div>

                                        {project.administration && (
                                            <div className="pt-2">
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
                                                    <Building2 className="w-3.5 h-3.5 text-gray-500" />
                                                    <span className="text-xs font-medium text-gray-700 line-clamp-1">
                                                        {project.administration}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-logo-red via-red-600 to-logo-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </Link>
                            )
                        })}
                    </div>

                    {projects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm max-w-md mx-auto">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Building2 className="w-10 h-10 text-gray-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    {t('ProjectsPage.noProjects')}
                                </h3>
                                <p className="text-gray-600">
                                    {t('ProjectsPage.noProjectsDescription')}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}
