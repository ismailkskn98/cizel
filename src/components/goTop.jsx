'use client';

import Image from 'next/image'
import { useLenis } from '@/lib/lenis'
import React, { useState } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "motion/react"

export default function GoTop() {
    const lenis = useLenis();
    const { scrollY } = useScroll();
    const [show, setShow] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300) {
            setShow(true)
        } else {
            setShow(false)
        }
    })

    const goTop = () => {
        if (show) {
            if (lenis) {
                lenis.scrollTo(0, { duration: 1 })
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }
    }

    return (
        <div
            className='group w-fit flex flex-col items-center fixed bottom-4 right-4 cursor-pointer z-30'
            onClick={goTop}
        >
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                    >
                        <Tooltip>
                            <TooltipTrigger className="!cursor-pointer">
                                <Image
                                    src='/images/harput.png'
                                    alt='Harput'
                                    width={300}
                                    height={300}
                                    className='object-contain h-24 sm:h-28 md:h-36 w-fit -z-10 pointer-events-none select-none'
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                Yukarı Çık
                            </TooltipContent>
                        </Tooltip>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
