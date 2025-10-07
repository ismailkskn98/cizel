'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

export default function Gallery({ images = [], className = '' }) {
    const [open, setOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const slides = (images || [])
        .map((img) => {
            if (typeof img === 'string') return { src: img }
            if (img && typeof img === 'object' && img.src) return { src: img.src }
            return null
        })
        .filter(Boolean)

    if (!slides.length) return null

    return (
        <div className={`pt-5 ${className}`}>
            <div className="grid grid-cols-2 gap-3">
                {slides.map((s, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => {
                            setPhotoIndex(idx)
                            setOpen(true)
                        }}
                        className="relative group rounded-lg overflow-hidden ring-1 ring-black/5 hover:ring-black/10 focus:outline-none !cursor-pointer"
                    >
                        <Image
                            src={s.src}
                            alt={`Photo ${idx + 1}`}
                            width={300}
                            height={300}
                            className="h-32 sm:h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                ))}
            </div>

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
