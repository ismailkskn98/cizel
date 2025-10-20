import React from 'react'
import PageTopSection from '../common/pageTopSection';
import { ArrowRight, Building2, Calendar, MapPin, MoveRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function Projects({ projects }) {
    const locale = useLocale();
    const t = useTranslations();
    const nav = useTranslations('Navigation');

    const breadcrumbs = [
        { label: nav('home'), href: '/' },
        { label: nav('projects'), href: null }
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
                    <div className="relative overflow-hidden mb-6 lg:mb-12 pt-44 lg:pt-52">
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

                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-3 leading-tight">
                                {t('Common.allProjects')}
                            </h1>

                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
                                {t('ProjectsPage.description')}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {projects.map((projectItem, i) => {
                            const project = getProjectData(projectItem);
                            const jobTypes = Array.isArray(project.jobType) ? project.jobType : [];

                            return (
                                <Link
                                    key={i}
                                    href={`/projects/${project.location.toLowerCase()}/${project.slug}`}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 !cursor-pointer"
                                >
                                    {project.projectStatus && (
                                        <div className="absolute top-7 right-7 z-10">
                                            <span className="px-3 py-1 text-xs font-medium bg-white/95 backdrop-blur-sm text-gray-900 rounded-lg shadow-md">
                                                {project.projectStatus}
                                            </span>
                                        </div>
                                    )}

                                    <div className="p-3">
                                        <div className="relative h-56 overflow-hidden bg-gray-100 rounded-xl">
                                            {project.coverImage ? (
                                                <Image
                                                    src={`${base_url}${project.coverImage}`}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <Image
                                                    src="/images/about-2.jpg"
                                                    alt={project.title || ''}
                                                    fill
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <div className="mb-3">
                                            <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-1">
                                                {project.title}
                                            </h3>
                                            {project.projectName && (
                                                <p className="text-sm text-gray-500 line-clamp-1">
                                                    {project.projectName}
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1.5">
                                                {project.location && (
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                                                        <span className="text-xs text-gray-600">{project.location}</span>
                                                    </div>
                                                )}
                                                {project.year && (
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                                                        <span className="text-xs text-gray-600">{project.year}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <button className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-logo-red transition-colors duration-300">
                                                <ArrowRight className="w-4 h-4 text-white" />
                                            </button>
                                        </div>

                                        {jobTypes.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                                                {jobTypes.slice(0, 2).map((type, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-700 rounded"
                                                    >
                                                        {type}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
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
