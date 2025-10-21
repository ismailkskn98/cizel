'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, usePathname } from '@/i18n/navigation';
import MotionScrollInViewOpacity from '../common/motionScrollInViewOpacity';

const spring = {
    type: 'spring',
    mass: 0.5,
    damping: 12,
    stiffness: 120,
};

export default function Navbar({ items = [] }) {
    const [open, setOpen] = useState(null);
    const pathname = usePathname();

    return (
        <MotionScrollInViewOpacity className='relative col-span-3 flex items-center gap-6 justify-self-center px-6 py-4 rounded-b-3xl bg-white z-20 -mt-8' onMouseLeave={() => setOpen(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute -right-6 top-0 rotate-90 scale-105 fill-white" width="24" height="24">
                <path d="M0 24h24C10.745 24 0 13.255 0 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute -left-6 top-0 rotate-180 scale-105 fill-white" width="24" height="24">
                <path d="M0 24h24C10.745 24 0 13.255 0 0z" />
            </svg>
            <div className='absolute bg-white -top-2 inset-x-0 w-full h-2 z-30' />
            {items.map((item, i) => {
                if (!item.dropdown) {
                    return (
                        <Link key={i} href={item.href} onMouseEnter={() => setOpen(null)} className={`uppercase text-black/90 text-xs hover:text-black transition-colors !cursor-pointer ${pathname === item.href ? "text-logo-red" : ""}`}>
                            {item.label}
                        </Link>
                    );
                }

                const isOpen = open === i;

                return (
                    <div
                        key={i}
                        className="relative"
                        onMouseEnter={() => setOpen(i)}
                    >
                        <button
                            type="button"
                            className="uppercase text-xs flex items-center gap-1 text-black/90 hover:text-black transition-colors"
                            onClick={() => setOpen(isOpen ? null : i)}
                            aria-expanded={isOpen}
                            aria-haspopup="menu"
                        >
                            {item.label}
                            <svg
                                className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z" />
                            </svg>
                        </button>

                        {open !== null && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.1 } }}
                                animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.1 } }}
                                transition={spring}
                            >
                                {isOpen && (
                                    <section onMouseLeave={() => setOpen(null)} className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-5">
                                        <motion.main
                                            layoutId="active"
                                            transition={spring}
                                            className="bg-white text-black rounded-md border border-gray/200 overflow-hidden px-1 py-2.5"
                                        >
                                            <motion.div layout className="min-w-44 w-fit">
                                                {item.dropdownItems?.map((dropItem, idx) => {
                                                    const isPDF = dropItem.href?.endsWith('.pdf');

                                                    if (isPDF) {
                                                        return (
                                                            <a
                                                                href={dropItem.href}
                                                                onClick={() => setOpen(null)}
                                                                key={idx}
                                                                className="flex px-3 py-2 text-xs uppercase tracking-wide rounded !cursor-pointer hover:bg-gray-50 group items-center transition-all duration-200"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-logo-red">{">"}</span>
                                                                <span className="group-hover:translate-x-1 transition-transform duration-200 text-nowrap">{dropItem.label}</span>
                                                            </a>
                                                        );
                                                    }

                                                    return (
                                                        <Link
                                                            href={dropItem.href}
                                                            onClick={() => setOpen(null)}
                                                            key={idx}
                                                            className="flex px-3 py-2 text-xs uppercase tracking-wide rounded !cursor-pointer hover:bg-gray-50 group items-center transition-all duration-200"
                                                        >
                                                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 text-logo-red">{">"}</span>
                                                            <span className="group-hover:translate-x-1 transition-transform duration-200 text-nowrap">{dropItem.label}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        </motion.main>
                                    </section>
                                )}
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </MotionScrollInViewOpacity>
    );
}
