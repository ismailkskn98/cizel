import React from 'react';
import Gallery from './Gallery';
import Image from 'next/image';

export default function ProjectSlug({ project, locale = 'tr' }) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';

    const item = Array.isArray(project) ? project?.[0] : project;
    if (!item) {
        return (
            <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-3xl mx-auto text-center">
                <h1 className="text-xl font-semibold">Proje bulunamadı</h1>
                <p className="text-neutral-500 mt-2">Lütfen daha sonra tekrar deneyin.</p>
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
            <div className="mb-6 absolute inset-x-0 top-0 h-fit w-full">
                <Image
                    src={template.coverImage ? (template.coverImage.startsWith('http') ? template.coverImage : `${baseUrl}${template.coverImage}`) : '/images/about-2.jpg'}
                    alt={JSON.parse(template.title)[locale] || 'Proje'}
                    width={1920}
                    height={600}
                    className="w-full h-[500px] object-cover object-center"
                />
                <div className='absolute inset-0 bg-black/70' />
            </div>

            <article className="relative z-50 mb-6 max-w-4xl pt-8">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-14 text-white">
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
            </article>
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <article className="lg:col-span-2 w-full flex flex-col">
                    <section className="block lg:hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm overflow-hidden mt-6 mb-10">
                        <div className="border-b border-neutral-100 bg-gradient-to-r from-neutral-50 to-white px-5 py-4">
                            <h2 className="text-sm font-semibold tracking-wide text-neutral-800">Proje Bilgileri</h2>
                        </div>
                        <ul className="p-5 space-y-3 text-sm">
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">İşveren</span>
                                <span className="text-neutral-900 font-medium text-right">{template.administration || '-'}</span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Tür</span>
                                <span className="text-right flex flex-wrap gap-1 justify-end">
                                    {JSON.parse(template.jobType)[locale]?.map((type, idx) => (
                                        <span key={idx} className="inline-flex items-center rounded-full bg-neutral-50 px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-neutral-200 text-neutral-700">
                                            {type}
                                        </span>
                                    ))}
                                </span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Durum</span>
                                <span className="text-right">
                                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${/\btamam|compl|bitti|done/.test((JSON.parse(template.projectStatus)[locale] || '').toLowerCase())
                                        ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                                        : /\bdevam|progress|sürüyor|ongoing/.test((JSON.parse(template.projectStatus)[locale] || '').toLowerCase())
                                            ? 'bg-amber-50 text-amber-700 ring-amber-200'
                                            : 'bg-neutral-100 text-neutral-700 ring-neutral-200'
                                        }`}>
                                        {JSON.parse(template.projectStatus)[locale] || '-'}
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Yılı</span>
                                <span className="text-neutral-900 font-medium text-right">{formatDate(template.year)}</span>
                            </li>
                        </ul>
                    </section>
                    <Gallery images={template.images} />
                </article>

                <aside className="relative z-40 hidden lg:block lg:col-span-1">
                    <div className="sticky top-12 rounded-2xl border border-neutral-200/70 bg-white shadow-sm overflow-hidden">
                        <div className="border-b border-neutral-100 bg-gradient-to-r from-neutral-50 to-white px-5 py-4">
                            <h2 className="text-sm font-semibold tracking-wide text-neutral-800">Proje Bilgileri</h2>
                        </div>
                        <ul className="p-5 space-y-3 text-sm">
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">İşveren</span>
                                <span className="text-neutral-900 font-medium text-right">{template.administration || '-'}</span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Tür</span>
                                <span className="text-right flex flex-wrap gap-1 justify-end">
                                    {JSON.parse(template.jobType)[locale]?.map((type, idx) => (
                                        <span key={idx} className="inline-flex items-center rounded-full bg-neutral-50 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-neutral-200 text-neutral-700">
                                            {type}
                                        </span>
                                    ))}
                                </span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Durum</span>
                                <span className="text-right">
                                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${/\btamam|compl|bitti|done/.test((JSON.parse(template.projectStatus)[locale] || '').toLowerCase())
                                        ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                                        : /\bdevam|progress|sürüyor|ongoing/.test((JSON.parse(template.projectStatus)[locale] || '').toLowerCase())
                                            ? 'bg-amber-50 text-amber-700 ring-amber-200'
                                            : 'bg-neutral-100 text-neutral-700 ring-neutral-200'
                                        }`}>
                                        {JSON.parse(template.projectStatus)[locale] || '-'}
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-700">Yılı</span>
                                <span className="text-neutral-600 font-medium text-right">{formatDate(template.year)}</span>
                            </li>
                        </ul>
                    </div>
                </aside>
            </main>
        </section>
    )
}
