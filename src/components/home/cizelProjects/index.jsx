'use client';

import React from 'react'
import ProjectsCarousel from './projectsCarousel';
import { useTranslations } from 'next-intl';


export default function CizelProjects({ projects, homeData }) {
    const t = useTranslations('CizelProjects');

    return (
        <main className='relative w-full fluid gridContainer bg-[#101010] py-16 lg:py-24'>
            <section className='relative z-30 w-full mx-auto max-w-7xl px-4'>
                <article className='w-full text-center space-y-4 mb-12 lg:mb-16'>
                    <div className='flex items-center justify-center gap-2 mb-3'>
                        <div className='w-12 h-px bg-white/30'></div>
                        <span className='text-sm text-white/60 uppercase tracking-wider'>{t('badge')}</span>
                        <div className='w-12 h-px bg-white/30'></div>
                    </div>
                    <h2 className='text-3xl lg:text-4xl xl:text-5xl font-semibold text-white'>
                        {homeData.title}
                    </h2>
                    <p className='text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed'>
                        {homeData.description}
                    </p>
                </article>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center'>
                    <div className='w-full order-2 lg:order-1 space-y-6'>
                        <div className='space-y-4'>
                            <h3 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight'>
                                {t('sectionTitle')}
                            </h3>
                            <p className='text-base lg:text-lg text-white/70 leading-relaxed'>
                                {t('sectionDescription')}
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <div className='flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300'>
                                <div className='w-2 h-2 mt-2 rounded-full bg-white/60'></div>
                                <div>
                                    <h4 className='text-base lg:text-lg font-semibold text-white mb-1'>
                                        {t('categories.publicProjects.title')}
                                    </h4>
                                    <p className='text-sm text-white/60'>
                                        {t('categories.publicProjects.description')}
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300'>
                                <div className='w-2 h-2 mt-2 rounded-full bg-white/60'></div>
                                <div>
                                    <h4 className='text-base lg:text-lg font-semibold text-white mb-1'>
                                        {t('categories.nationalGardens.title')}
                                    </h4>
                                    <p className='text-sm text-white/60'>
                                        {t('categories.nationalGardens.description')}
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300'>
                                <div className='w-2 h-2 mt-2 rounded-full bg-white/60'></div>
                                <div>
                                    <h4 className='text-base lg:text-lg font-semibold text-white mb-1'>
                                        {t('categories.housingProjects.title')}
                                    </h4>
                                    <p className='text-sm text-white/60'>
                                        {t('categories.housingProjects.description')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full order-1 lg:order-2'>
                        <ProjectsCarousel projects={projects} />
                    </div>
                </div>
            </section>
        </main>
    )
}
