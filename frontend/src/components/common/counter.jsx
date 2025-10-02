"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function Counter({
    end,
    duration = 2,
    className = "",
    prefix = "",
    suffix = ""
}) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        let startTime
        const startValue = 0
        const endValue = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) || 0 : end

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

            const currentCount = Math.floor(progress * endValue)
            setCount(currentCount)

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [isInView, end, duration])

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    )
}
