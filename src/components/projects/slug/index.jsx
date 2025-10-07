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

    const parseMaybeJSON = (value, fallback = null) => {
        if (!value) return fallback
        try {
            const parsed = typeof value === 'string' ? JSON.parse(value) : value
            return parsed
        } catch {
            return fallback
        }
    }

    const tpl = parseMaybeJSON(item?.json_template) || {}
    const titleI18n = parseMaybeJSON(tpl?.title)
    const descI18n = parseMaybeJSON(tpl?.description)
    const jobTypeI18n = parseMaybeJSON(tpl?.jobType)
    const statusI18n = parseMaybeJSON(tpl?.projectStatus)
    const title =
        (titleI18n && (titleI18n[locale] || titleI18n.tr || titleI18n.en)) || item?.title || 'Proje'
    const description =
        (descI18n && (descI18n[locale] || descI18n.tr || descI18n.en)) || ''

    const meta = {
        location: tpl?.location || item?.location,
        employer: tpl?.employer || item?.employer,
        jobType: jobTypeI18n?.[locale] || jobTypeI18n?.tr || jobTypeI18n?.en,
        status: statusI18n?.[locale] || statusI18n?.tr || statusI18n?.en,
        area: tpl?.area || item?.area,
        startDate: tpl?.startDate || item?.startDate,
        endDate: tpl?.endDate || item?.endDate,
    }

    const rawImages = tpl?.images || item?.images || []
    const images = rawImages.map((src) => (typeof src === 'string' && src.startsWith('http')) ? src : `${baseUrl}${src}`)
    const coverRaw = tpl?.coverImage || item?.coverImage
    const cover = coverRaw ? (coverRaw.startsWith('http') ? coverRaw : `${baseUrl}${coverRaw}`) : null

    const formatDate = (dateValue) => {
        const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
        const localeKey = locale === 'tr' ? 'tr-TR' : 'en-US'
        return date.toLocaleDateString(localeKey, { year: 'numeric', month: 'short' })
    }

    const areaDisplay = meta?.area !== undefined && meta?.area !== null && meta?.area !== '' && !Number.isNaN(Number(meta?.area))
        ? `${Number(meta.area).toLocaleString(locale === 'tr' ? 'tr-TR' : 'en-US')} m²`
        : '-'

    const startDateDisplay = formatDate(meta.startDate) || '-'
    const endDateDisplay = formatDate(meta.endDate) || (locale === 'tr' ? 'Devam Ediyor' : 'Ongoing')

    const normalizedStatus = (meta.status || '').toLowerCase()
    let statusClass = 'bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200'
    if (/\btamam|compl|bitti|done/.test(normalizedStatus)) {
        statusClass = 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
    } else if (/\bdevam|progress|sürüyor|ongoing/.test(normalizedStatus)) {
        statusClass = 'bg-amber-50 text-amber-700 ring-1 ring-amber-200'
    }

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto mb-16">
            <div className="mb-6 absolute inset-x-0 top-0 h-fit w-full">
                <Image src={cover} alt={title} width={1920} height={600} className="w-full h-[500px] object-cover object-center" />
                <div className='absolute inset-0 bg-black/70' />
            </div>

            <article className="relative z-50 mb-6 max-w-4xl pt-8">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-14 text-white">{title}</h1>
                <p className="relative pl-4 py-1 text-sm text-white/80 mt-1">
                    <span className='absolute inset-y-0 left-0 h-full w-1/7 bg-gradient-to-r from-logo-red/20 to-transparent' />
                    <span className='absolute inset-y-0 left-0 h-full w-1 bg-logo-red' />
                    <span className='relative z-20'>{meta.location}</span>
                </p>
                <p className="text-white/90 leading-relaxed whitespace-preline mt-3">
                    {description}
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
                                <span className="text-neutral-900 font-medium text-right">{meta.employer || '-'}</span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Tür</span>
                                <span className="text-right">
                                    <span className="inline-flex items-center rounded-full bg-neutral-50 px-2 py-0.5 text-xs font-medium ring-1 ring-inset ring-neutral-200 text-neutral-700">
                                        {meta.jobType || '-'}
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Durum</span>
                                <span className="text-right">
                                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClass}`}>
                                        {meta.status || '-'}
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Alan</span>
                                <span className="text-neutral-900 font-medium text-right">{areaDisplay}</span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Başlangıç</span>
                                <span className="text-neutral-900 font-medium text-right">{startDateDisplay}</span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Bitiş</span>
                                <span className="text-neutral-900 font-medium text-right">{endDateDisplay}</span>
                            </li>
                        </ul>
                    </section>
                    <Gallery images={images} />
                </article>

                <aside className="relative z-40 hidden lg:block lg:col-span-1">
                    <div className="sticky top-12 rounded-2xl border border-neutral-200/70 bg-white shadow-sm overflow-hidden">
                        <div className="border-b border-neutral-100 bg-gradient-to-r from-neutral-50 to-white px-5 py-4">
                            <h2 className="text-sm font-semibold tracking-wide text-neutral-800">Proje Bilgileri</h2>
                        </div>
                        <ul className="p-5 space-y-3 text-sm">
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">İşveren</span>
                                <span className="text-neutral-900 font-medium text-right">{meta.employer || '-'}</span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Tür</span>
                                <span className="text-right">
                                    <span className="inline-flex items-center rounded-full bg-neutral-50 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-neutral-200 text-neutral-700">
                                        {meta.jobType || '-'}
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-500">Durum</span>
                                <span className="text-right">
                                    <span className={`inline-flex items-centerpx-2 py-0.5 text-xs font-medium`}>
                                        {meta.status || '-'}
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-700">Alan</span>
                                <span className="text-neutral-600 font-medium text-right">{areaDisplay}</span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-700">Başlangıç</span>
                                <span className="text-neutral-600 font-medium text-right">{startDateDisplay}</span>
                            </li>
                            <li className="flex items-center justify-between gap-3">
                                <span className="text-neutral-700">Bitiş</span>
                                <span className="text-neutral-700 font-medium text-right">{endDateDisplay}</span>
                            </li>
                        </ul>
                    </div>
                </aside>
            </main>
        </section>
    )
}
