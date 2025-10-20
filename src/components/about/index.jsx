import React from 'react'
import PageTopSection from '../common/pageTopSection';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import AboutStats from './stats';
import { MoveRight } from 'lucide-react';
import Opacity from '../common/opacity';

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function About({ locale, aboutData, totalProjectCount, foundingYear, completedProjects, cityCount }) {
    const t = useTranslations('AboutPage');
    const nav = useTranslations('Navigation');

    const breadcrumbs = [
        { label: nav('home'), href: '/' },
        { label: nav('corporate'), href: null },
        { label: t('title'), href: null }
    ];

    const highlightKeywords = (text) => {
        const keywords = ['İsmail GÜN', 'Çizel İnşaat', 'misyon', 'vision', 'future', 'Türkiye'];
        let highlightedText = text;

        keywords.forEach(keyword => {
            const regex = new RegExp(`(${keyword})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="highlight-keyword">$1</span>');
        });

        return highlightedText;
    };

    const paragraphs = aboutData[locale].description.split('. ');
    const paragraphsPerSection = Math.ceil(paragraphs.length / 3);
    const firstPart = highlightKeywords(paragraphs.slice(0, paragraphsPerSection).join('. '));
    const secondPart = highlightKeywords(paragraphs.slice(paragraphsPerSection, paragraphsPerSection * 2).join('. '));
    const thirdPart = highlightKeywords(paragraphs.slice(paragraphsPerSection * 2).join('. '));

    const highlightedVision = highlightKeywords(aboutData[locale].vision || '');
    const highlightedSubDescription = highlightKeywords(aboutData[locale].subDescription || '');

    return (
        <main className="w-full fluid gridContainer pb-6 sm:pb-8 lg:pb-12">
            <PageTopSection breadcrumbs={breadcrumbs} />
            <section className="fluid gridContainer pt-56 sm:pt-64 lg:pt-72 -mt-52">
                <Opacity className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-7 md:gap-10 lg:gap-16 mb-3 sm:mb-10 lg:mb-16 2xl:mb-20">
                    <section className='flex flex-col gap-6'>
                        <article className="flex flex-col gap-0">
                            <article className="flex items-center gap-2 mb-6">
                                <div className="relative">
                                    <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference">
                                        <div className="h-0.5 w-6 lg:w-10 rounded-lg bg-white" />
                                        <MoveRight className='-ml-2 w-12 lg:w-16 2xl:w-20 h-12 lg:h-16 2xl:h-20 stroke-[0.5px] text-white' />
                                    </div>
                                    <div className="w-7 lg:w-10 h-7 lg:h-10 bg-black rounded-full" />
                                </div>
                                <span className="inline-block text-sm 3xl:text-base font-medium text-black/80 ml-12 lg:ml-16 2xl:ml-20">{t("title")}</span>
                            </article>
                            <h1 className="text-4xl md:text-5xl xl:text-6xl font-medium text-gray-900 leading-tight">
                                {t("title")}
                            </h1>
                        </article>

                        <div className='relative flex flex-col items-start gap-2 sm:gap-6 pl-0 md:pl-12'>
                            <Opacity delay={0.2}>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                                    {aboutData[locale].title}
                                </h1>
                            </Opacity>
                            <Opacity delay={0.4}>
                                <div className='text-xs sm:text-sm lg:text-base space-y-4 text-gray-600 max-w-4xl leading-relaxed'>
                                    <p dangerouslySetInnerHTML={{ __html: firstPart }}>
                                    </p>
                                    <p dangerouslySetInnerHTML={{ __html: secondPart }}>
                                    </p>
                                    <p dangerouslySetInnerHTML={{ __html: thirdPart }}>
                                    </p>
                                </div>
                            </Opacity>
                        </div>
                    </section>
                    <Opacity delay={0.5} className='relative flex-shrink-0'>
                        <Image src={`${base_url}${aboutData.aboutImage}`} alt='cizel about us' width={700} height={700} className='hidden lg:block absolute inset-0 w-full h-full rounded-3xl z-10 translate-8 blur-xs' />
                        <Image src={`${base_url}${aboutData.aboutImage}`} alt='cizel about us' width={700} height={700} className='relative z-20 object-contain w-fit h-72 lg:h-96 2xl:!h-[400px] rounded-3xl' />
                    </Opacity>
                </Opacity>

                <main className='relative w-full fluid gridContainer bg-[#101010] mt-20 py-16'>
                    <section className='relative z-30 w-full mx-auto max-w-6xl flex flex-col items-center gap-16 overflow-hidden'>
                        <Opacity>
                            {aboutData[locale].vision && (
                                <div className="w-full px-4">
                                    <div className="flex flex-col items-center justify-center mx-auto text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <article className="flex flex-col items-center gap-14">
                                                <div className="relative">
                                                    <div className="absolute left-1/2 -translate-x-1/2 top-2 flex flex-col items-center justify-center mix-blend-difference">
                                                        <div className="h-8 w-0.5 rounded-lg bg-white" />
                                                        <MoveRight className='-mt-2 w-10 h-10 stroke-[0.5px] rotate-90 text-white' />
                                                    </div>
                                                    <div className="w-10 h-10 bg-white rounded-full" />
                                                </div>
                                                <span className="inline-block text-sm 3xl:text-base font-medium text-white/80">
                                                    <p className="text-gray-400 text-sm lg:text-base">
                                                        {locale === 'en'
                                                            ? 'Building tomorrow with sustainable and innovative solutions'
                                                            : 'Sürdürülebilir ve yenilikçi çözümlerle geleceği inşa ediyoruz'}
                                                    </p>
                                                </span>
                                            </article>
                                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                                                {locale === 'en' ? 'Vision for the Future' : 'Gelecek Vizyonu'}
                                            </h2>
                                        </div>
                                        <div className="text-gray-300 text-sm xl:text-base leading-relaxed whitespace-pre-line mt-4 max-w-4xl">
                                            <p dangerouslySetInnerHTML={{ __html: highlightedVision }}></p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Opacity>
                        <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className='w-full mt-6'>
                            <AboutStats
                                totalProjectCount={totalProjectCount}
                                foundingYear={foundingYear}
                                completedProjects={completedProjects}
                                cityCount={cityCount}
                            />
                        </div>
                    </section>
                </main>

                {aboutData[locale].subDescription && (
                    <Opacity className='w-full max-w-7xl mx-auto mt-6 lg:mt-12 xl:mt-16 2xl:mt-20 px-4'>
                        <div className="relative">
                            <div className="absolute inset-0 rounded-3xl" />
                            <div className="relative z-10 p-8">
                                <div className="max-w-4xl mx-auto text-center">
                                    <div className="flex justify-center mb-2 sm:mb-4 lg:mb-6 2xl:mb-8">
                                        <div className="relative">
                                            <svg className="w-16 h-16 text-logo-red/30" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-8">
                                        {locale === 'en' ? 'A Message of Gratitude' : 'Teşekkür Mesajımız'}
                                    </h2>

                                    <div className="flex items-center justify-center gap-4 mb-6 2xl:mb-10">
                                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-black/30"></div>
                                        <div className="w-2 h-2 bg-logo-red rounded-full"></div>
                                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-black/30"></div>
                                    </div>

                                    <div className="text-gray-700 text-sm lg:text-base leading-relaxed italic">
                                        <p dangerouslySetInnerHTML={{ __html: highlightedSubDescription }}></p>
                                    </div>

                                    <div className="mt-6 2xl:mt-12 pt-6 2xl:pt-8 border-t border-black/10">
                                        <p className="text-black font-semibold text-sm lg:text-base">
                                            {locale === 'en' ? 'Çizel Construction' : 'Çizel İnşaat'}
                                        </p>
                                        <p className="text-gray-500 text-xs mt-1">
                                            {locale === 'en' ? 'Building Trust, Creating Value' : 'Güven İnşa Ediyor, Değer Yaratıyoruz'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Opacity>
                )}
            </section>
        </main >
    )
}
