'use client';
import React from 'react'
import PageTopSection from '../common/pageTopSection';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import AboutStats from './stats';

export default function About() {
    const t = useTranslations('AboutPage');

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Kurumsal', href: null },
        { label: t('title'), href: null }
    ];

    return (
        <main className="w-full fluid gridContainer pb-24">
            <PageTopSection breadcrumbs={breadcrumbs} />
            <section className="fluid gridContainer pb-20 pt-72 -mt-52">
                <div className='mx-auto max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-16 mb-20'>
                    <section className='flex flex-col gap-6'>
                        <article className="inline-flex w-fit items-center gap-2 bg-gradient-to-r from-logo-red/20 to-logo-red/5 text-logo-red px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                            </svg>
                            — {t('title')}
                        </article>
                        <div className='relative flex flex-col items-start gap-6 pl-9'>
                            <div className='absolute left-0 inset-y-0 w-4 h-full bg-gradient-to-t from-transparent to-logo-red/80'></div>
                            <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                                {t('mainTitle')}
                            </h1>
                            <div className='space-y-4 text-gray-600'>
                                <p className='leading-relaxed'>
                                    {t('missionDescription')}
                                </p>
                                <p className='leading-relaxed'>
                                    {t('teamDescription')}
                                </p>
                            </div>
                        </div>
                    </section>
                    <article className='relative flex-shrink-0'>
                        <div className='absolute inset-0 w-full h-full bg-[url("/images/about.jpg")] rounded-3xl z-10 translate-8 shadow-[4px_6px_4px_black] blur-xs'></div>
                        <Image src={"/images/about.jpg"} alt='cizel about us' width={600} height={500} className='relative z-20 object-contain w-fit h-96 rounded-3xl shadow-[4px_6px_4px_black]' />
                    </article>
                </div>

                <main className='relative w-full fluid gridContainer bg-[#101010] mt-6 pb-16 md:pb-24 pt-12 sm:pt-16'>
                    <section className='relative z-30 w-full mx-auto max-w-6xl flex flex-col items-start lg:items-center gap-6 mt-6 overflow-hidden'>
                        <h2 className='lg:hidden block text-white font-light uppercase text-4xl min-[330px]:text-5xl mb-0 sm:mb-4'>About <span>CAST</span></h2>
                        <div className='w-full max-w-md self-start text-white/70 text-xs py-0 lg:py-6'>
                            <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis quos magnam deserunt suscipit nemo expedita maxime ea, quas rem asperiores, neque quasi reiciendis id, accusamus enim modi deleniti optio.</p>
                        </div>
                        <div className='lg:hidden block max-w-md self-start text-white/70 text-xs py-0 lg:py-6'>
                            <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo neque voluptates unde eveniet iusto possimus eos libero. Non, hic?</p>
                        </div>
                        <Image src={"/images/about-company.jpg"} alt='cizel about us' width={800} height={600} className='block lg:hidden object-cover md:object-contain object-top-left w-full max-w-3xl h-[250px] md:h-[400px]' />
                        <main className='hidden lg:flex w-full h-[70vh] items-center justify-end'>
                            <article className='z-10 relative bg-[url("/images/about-company.jpg")] bg-cover bg-center w-full max-w-[75%] h-full'>
                                <div className='absolute left-0 bottom-0 bg-[#101010] w-96 h-72 p-6'>
                                    <div className='absolute -left-28 xl:-left-40 2xl:-left-64 -top-6 xl:top-0 flex flex-col text-[9rem] xl:text-[10rem] 2xl:text-[12rem] leading-52 text-white font-light uppercase'>
                                        <span>ABOUT</span>
                                        <span className='relative ml-16 before:content-[""] before:absolute before:h-[1px] before:w-96 before:top-1/2 before:translate-y-1/2 before:right-[103%] before:bg-white'>CAST</span>
                                    </div>
                                </div>
                                <div className='absolute right-0 bottom-0 bg-[#101010] w-96 h-24 text-white/70 text-xs p-6'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo neque voluptates unde eveniet iusto possimus eos libero. Non, hic?
                                </div>
                            </article>
                        </main>
                        <main className='w-full mt-10 lg:mt-40'>
                            <AboutStats />
                        </main>
                    </section>
                </main>
            </section>
        </main>
    )
}
