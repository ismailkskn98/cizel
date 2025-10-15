"use client"

import { motion } from "framer-motion"

export default function FadeIn({ children, delay = 0, duration = 0.3, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
