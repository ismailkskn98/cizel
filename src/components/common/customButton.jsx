import { Link } from '@/i18n/navigation'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export default function CustomButton({ label = "Contact Us", href, bgcolor = "bg-white", fillcolor = "fill-white", textcolor = "text-white", iconcolor = "text-black", bordercolor = "border-white/50" }) {
    return (
        <Link href={href} className={`group relative w-fit flex items-center rounded-full border-2 ${bordercolor} p-0.5 pr-6 overflow-hidden !cursor-pointer`}>
            <span className={`flex-1 px-4 py-2 bg-transparent ${textcolor} rounded-full text-sm`}>{label}</span>
            <span className={`absolute inset-y-0 right-0 flex items-center justify-center w-6 rounded-r-3xl ${bgcolor}`}>
                <IoIosArrowForward className={`relative z-20 ${iconcolor} text-sm mr-1 group-hover:translate-x-[150%] transition-all duration-300`} />
                <IoIosArrowForward className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 z-20 ${iconcolor} text-sm mr-1 transition-all duration-300`} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`absolute -z-10 -left-13 scale-[200%] bottom-0 h-full w-auto rotate-[223deg] ${fillcolor}`} width="24" height="24">
                    <path d="M0 24h24C5.745 24 0 13.255 0 0z'/%3E%3C/svg%3E" />
                </svg>
            </span>
        </Link>
    )
}
