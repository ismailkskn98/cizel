'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant'

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
export default function Gallery({ images = [], className = '' }) {
    const t = useTranslations('ProjectsPage');
    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const slides = (images || []).map((img) => {
        if (typeof img === 'string') return { src: `${baseUrl}${img}` };
        if (img && typeof img === 'object' && img.src) return { src: `${baseUrl}${img.src}` };
        return null;
    })
        .filter(Boolean);

    if (!slides.length) {
        return (
            <div className={`relative z-20 pt-5 ${className}`}>
                <div className="relative flex flex-col items-center justify-center p-12 lg:p-16 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border border-neutral-200/50 shadow-xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-300"></div>

                    <div className="relative mb-6 p-5 bg-gradient-to-br from-neutral-100 to-white rounded-full shadow-lg border border-neutral-200/50">
                        <ShieldCheck className="w-12 h-12 lg:w-14 lg:h-14 text-neutral-700" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-neutral-800 mb-3 text-center">
                        {t('privacyTitle')}
                    </h3>

                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mb-4"></div>

                    <p className="text-sm lg:text-base text-neutral-600 text-center max-w-md leading-relaxed">
                        {t('privacyDescription')}
                    </p>

                    <div className="mt-6 px-4 py-2 bg-neutral-100 rounded-lg border border-neutral-200">
                        <p className="text-xs text-neutral-500 text-center">
                            {t('privacyNote')}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`pt-5 ${className}`}>
            <MotionScrollInViewVariant className={"grid grid-cols-2 gap-3"} childClassname={"relative group rounded-lg overflow-hidden ring-1 ring-black/5 hover:ring-black/10 focus:outline-none !cursor-pointer"}>
                {slides.map((s, idx) => (
                    <div
                        key={idx}
                        type="button"
                        onClick={() => {
                            setPhotoIndex(idx)
                            setOpen(true)
                        }}
                        className="relative group rounded-lg overflow-hidden ring-1 ring-black/5 hover:ring-black/10 focus:outline-none !cursor-pointer"
                    >
                        <Image
                            src={`${s.src}`}
                            alt={`Photo ${idx + 1}`}
                            width={300}
                            height={300}
                            className="h-32 sm:h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </MotionScrollInViewVariant>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={photoIndex}
                carousel={{ finite: false }}
                controller={{ closeOnBackdropClick: true }}
            />
        </div>
    )
}
