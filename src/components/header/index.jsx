import Image from 'next/image'
import React from 'react'
import Navbar from './navbar'
import LanguageSwitcher from '../ui/language-switcher'

export default function Header() {

    const navbarItems = [
        { label: "Anasayfa", href: "/" },
        {
            label: "Kurumsal", dropdown: true,
            dropdownItems: [
                { label: "Hakkımızda", href: "/about" },
                { label: "Vizyon Misyon", href: "/about" },
                { label: "Kalite Belgeleri", href: "/about" },
                { label: "KVKK", href: "/about" },
                { label: "Bilgi Toplama Merkezi", href: "/about" },
            ],
        },
        {
            label: "Projeler", dropdown: true, dropdownItems: [
                { label: "Gayrimenkul Projeler", href: "/about" },
                { label: "taahhüt Projeler", href: "/about" },
                { label: "Tamamlanan Projeler", href: "/about" },
                { label: "Devam Eden Projeler", href: "/about" },
            ],
        },
        { label: "Kariyer", href: "/" },
        { label: "Basında Biz", href: "/" },
        { label: "İletişim", href: "/" },
    ]

    return (
        <header className='relative z-50 w-full fluid gridContainer items-end h-24'>
            <main className='w-full flex justify-between lg:grid lg:grid-cols-5 items-center'>
                <Image src={"/images/cizel-logo/cizel-logo-white.png"} alt='cizel logo' width={100} height={100} className='relative z-20 justify-self-start object-contain object-center w-fit h-16' />
                <Navbar items={navbarItems} />
                <div className='justify-self-end'>
                    <LanguageSwitcher compact={false} />
                </div>
            </main>
        </header>
    )
}
