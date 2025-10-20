'use client'

import Image from 'next/image'
import React from 'react'
import Navbar from './navbar'
import { Link } from '@/i18n/navigation'
import Opacity from '../common/opacity'
import LanguageChange from '../ui/language-switcher'
import MobileNavbar from './mobileNavbar'
import { useTranslations } from 'next-intl'

export default function Header() {
    const t = useTranslations('Navigation')

    const navbarItems = [
        { label: t('home'), href: "/" },
        {
            label: t('corporate'), dropdown: true,
            dropdownItems: [
                { label: t('about'), href: "/about" },
                { label: t('kvkk'), href: "/kvkk.pdf" },
            ],
        },
        {
            label: t('projects'), dropdown: true, dropdownItems: [
                { label: t('completedProjects'), href: "/projects/tamamlanan-projeler" },
                { label: t('ongoingProjects'), href: "/projects/devam-eden-projeler" },
            ],
        },
        { label: t('career'), href: "/career" },
        { label: t('contact'), href: "/contact" },
    ]

    return (
        <header className='relative z-50 w-full fluid gridContainer items-start h-auto lg:h-24 pb-1 lg:pb-0 pt-4 lg:pt-4'>
            <main className='bg-white w-full lg:hidden grid grid-cols-5 gap-4'>
                <MobileNavbar items={navbarItems} />
                <Link href={"/"} className='col-span-3 flex-1 flex justify-center'>
                    <Image
                        src={"/images/cizel-logo/cizel-logo.png"}
                        alt='cizel logo'
                        width={100}
                        height={100}
                        className='object-contain object-center w-auto h-12 !cursor-pointer'
                    />
                </Link>
                <div className='w-full flex items-center justify-end'>
                    <LanguageChange />
                </div>
            </main>

            <main className='w-full hidden lg:grid lg:grid-cols-5 items-center justify-between'>
                <Opacity delay={0.2} className=''>
                    <Link href={"/"}>
                        <Image src={"/images/cizel-logo/cizel-logo-white.png"} alt='cizel logo' width={100} height={100} className='relative z-20 justify-self-start object-contain object-center w-fit h-16 !cursor-pointer' />
                    </Link>
                </Opacity>
                <Navbar items={navbarItems} />
                <div className='justify-self-end'>
                    <Opacity delay={0.2}>
                        <LanguageChange />
                    </Opacity>
                </div>
            </main>
        </header>
    )
}
