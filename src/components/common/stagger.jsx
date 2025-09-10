"use client"

import { motion } from "framer-motion"

export default function Stagger({ children, delay = 0, staggerDelay = 0.1, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={className}
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.6,
                    delay,
                    staggerChildren: staggerDelay
                }}
                className="contents"
            >
                {children}
            </motion.div>
        </motion.div>
    )
}
