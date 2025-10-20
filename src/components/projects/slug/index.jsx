'use client'

import React from 'react';
import Gallery from './Gallery';
import Image from 'next/image';
import { Building2, Calendar, Briefcase, CheckCircle2, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import MotionScrollInView from '@/components/common/motionScrollInView';

export default function ProjectSlug({ project, locale = 'tr' }) {
    const t = useTranslations('ProjectDetail');
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';

    const item = Array.isArray(project) ? project?.[0] : project;
    if (!item) {
        return (
            <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-3xl mx-auto text-center">
                <h1 className="text-xl font-semibold">{t('notFound')}</h1>
                <p className="text-neutral-500 mt-2">{t('notFoundDescription')}</p>
            </section>
        )
    }

    const template = JSON.parse(item.json_template);

    const formatDate = (year) => {
        const date = new Date(year);
        const localeKey = locale === 'tr' ? 'tr-TR' : 'en-US';
        return date.toLocaleDateString(localeKey, { year: 'numeric' });
    }

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto mb-16">
            <div className="mb-6 absolute inset-x-0 top-12 lg:top-0 h-fit w-full">
                <Image
                    src={template.coverImage ? (template.coverImage.startsWith('http') ? template.coverImage : `${baseUrl}${template.coverImage}`) : '/images/about-2.jpg'}
                    alt={JSON.parse(template.title)[locale] || 'Proje'}
                    width={1920}
                    height={800}
                    className="w-full h-[500px] object-cover object-center"
                />
                <div className='absolute inset-0 bg-black/80 lg:bg-black/70 backdrop-blur-none lg:backdrop-blur-xs' />
            </div>

            <article className="relative z-50 mb-6 max-w-4xl pt-8">
                <MotionScrollInView>
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold 2xl:leading-14 text-white">
                        {JSON.parse(template.title)[locale] || 'Proje'}
                    </h1>
                    <p className="relative pl-4 py-1 text-sm text-white/80 mt-1">
                        <span className='absolute inset-y-0 left-0 h-full w-1/7 bg-gradient-to-r from-logo-red/20 to-transparent' />
                        <span className='absolute inset-y-0 left-0 h-full w-1 bg-logo-red' />
                        <span className='relative z-20'>{template.location}</span>
                    </p>
                    <p className="text-white/90 leading-relaxed whitespace-preline mt-3">
                        {JSON.parse(template.projectName)[locale] || ''}
                    </p>
                </MotionScrollInView>
            </article>
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <article className="order-2 md:order-1 lg:col-span-2 w-full flex flex-col">
                    <Gallery images={template.images} />
                </article>

                <MotionScrollInView className={"order-1 md:order-2 relative z-40 block lg:col-span-1"}>
                    <article className="sticky top-12 rounded-2xl bg-gradient-to-br from-white to-neutral-50 shadow-xl border border-gray-300/50 overflow-hidden">
                        <div className="relative bg-gradient-to-r from-neutral-800 to-neutral-900 px-6 py-5">
                            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
                            <h2 className="relative text-base font-bold text-white tracking-wide flex items-center gap-2">
                                <Briefcase className="w-5 h-5" />
                                {t('title')}
                            </h2>
                        </div>

                        <div className="p-6 space-y-5">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                                    <Building2 className="w-4 h-4" />
                                    {t('employer')}
                                </div>
                                <p className="text-sm font-medium text-neutral-900 leading-relaxed pl-6">
                                    {template.administration || '-'}
                                </p>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                                    <Briefcase className="w-4 h-4" />
                                    {t('projectType')}
                                </div>
                                <div className="flex flex-wrap gap-2 pl-6">
                                    {JSON.parse(template.jobType)[locale]?.map((type, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-neutral-100 to-neutral-50 text-xs font-medium text-neutral-700 border border-neutral-200/70 shadow-sm"
                                        >
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                                    {/\btamam|compl|bitti|done/.test((JSON.parse(template.projectStatus)[locale] || '').toLowerCase())
                                        ? <CheckCircle2 className="w-4 h-4" />
                                        : <Clock className="w-4 h-4" />
                                    }
                                    {t('status')}
                                </div>
                                <div className="pl-6">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm ${/\btamam|compl|bitti|done/.test((JSON.parse(template.projectStatus)[locale] || '').toLowerCase())
                                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                                        : /\bdevam|progress|sürüyor|ongoing/.test((JSON.parse(template.projectStatus)[locale] || '').toLowerCase())
                                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                                            : 'bg-gradient-to-r from-neutral-500 to-neutral-600 text-white'
                                        }`}>
                                        {/\btamam|compl|bitti|done/.test((JSON.parse(template.projectStatus)[locale] || '').toLowerCase())
                                            ? <CheckCircle2 className="w-3.5 h-3.5" />
                                            : <Clock className="w-3.5 h-3.5" />
                                        }
                                        {JSON.parse(template.projectStatus)[locale] || '-'}
                                    </span>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                                    <Calendar className="w-4 h-4" />
                                    {t('completionYear')}
                                </div>
                                <p className="text-lg font-bold text-neutral-900 pl-6">
                                    {formatDate(template.year)}
                                </p>
                            </div>
                        </div>
                    </article>
                </MotionScrollInView>
            </main>
        </section>
    )
}
