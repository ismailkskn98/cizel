'use client'
import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { IoChevronDown } from "react-icons/io5";
import { useTranslations } from 'next-intl';
import LanguageChange from '../ui/language-switcher';

export default function MobileNavbar({ items }) {
    const [open, setOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);
    const t = useTranslations();

    const toggleDropdown = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const handleLinkClick = () => {
        setOpen(false);
        setExpandedItem(null);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className='focus:outline-none'>
                <IoIosMenu className='text-4xl text-black' />
            </SheetTrigger>
            <SheetContent
                side="left"
                className='w-[85vw] sm:w-[400px] bg-gradient-to-br from-black to-[#232323] p-0 overflow-hidden border-none'
            >
                <SheetTitle className="sr-only">Navigasyon Menüsü</SheetTitle>

                <div className='sticky top-0 z-10 bg-black backdrop-blur-sm px-6 pt-6 flex items-center justify-between'>
                    <Link href="/" onClick={handleLinkClick} className='block'>
                        <Image
                            src="/images/cizel-logo/cizel-logo-white.png"
                            alt="Çizel Logo"
                            width={120}
                            height={40}
                            className='object-contain h-16 w-auto'
                        />
                    </Link>
                </div>

                <nav className='flex flex-col py-4'>
                    {items?.map((item, index) => (
                        <div key={index} className=''>
                            {item.dropdown ? (
                                <div>
                                    <button
                                        onClick={() => toggleDropdown(index)}
                                        className='w-full flex items-center justify-between px-6 py-4 text-white/90 hover:text-white hover:bg-[#131212] transition-all duration-300 group'
                                    >
                                        <span className='text-[15px] font-medium tracking-wide'>
                                            {item.label}
                                        </span>
                                        <IoChevronDown
                                            className={`text-lg transition-transform duration-300 text-white/60 group-hover:text-white ${expandedItem === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 bg-[#1c1c1c] ${expandedItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        {item.dropdownItems?.map((dropdownItem, dropIndex) => (
                                            <Link
                                                key={dropIndex}
                                                href={dropdownItem.href}
                                                onClick={handleLinkClick}
                                                className='block px-8 py-3 text-white/70 hover:text-white hover:bg-slate-700/50 transition-all duration-300 text-[14px] border-l-2 border-transparent hover:border-primary ml-6'
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className='block px-6 py-4 text-white/90 hover:text-white hover:bg-slate-800/50 transition-all duration-300 text-[15px] font-medium tracking-wide'
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
