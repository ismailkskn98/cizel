import { Briefcase, MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import Opacity from '../common/opacity';

const CareerContent = ({ careerData, careerImage }) => {
    const t = useTranslations("CareerPage");

    return (
        <main className="flex flex-col space-y-12">
            <Opacity>
                <section className="text-center lg:text-left">
                    <article className="space-y-3">
                        <article className="flex flex-col lg:flex-row items-center gap-1 mb-6">
                            <div className="relative">
                                <div className="absolute left-1/2 lg:left-2 top-2 lg:top-1/2 translate-y-0 lg:-translate-y-1/2 -translate-x-1/2 lg:translate-x-0 flex flex-col lg:flex-row items-center justify-center mix-blend-difference">
                                    <div className="h-4 md:h-6 lg:h-0.5 w-0.5 lg:w-6 xl:w-10 rounded-lg bg-white" />
                                    <MoveRight className='ml-0 -mt-2 lg:mt-0 lg:-ml-2 w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 stroke-[0.5px] text-white rotate-90 lg:rotate-0' />
                                </div>
                                <div className="w-7 md:w-7 xl:w-10 h-7 md:h-7 xl:h-10 bg-black rounded-full" />
                            </div>
                            <span className="inline-block text-xs lg:text-sm 3xl:text-base font-medium text-black/80 ml-0 mt-12 sm:mt-16 lg:mt-0 lg:ml-16 xl:ml-20">{t("badge")}</span>
                        </article>

                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900">
                            {t("title")} {" "}
                            <span className="inline-flex items-center bg-logo-red rounded-full text-white px-3 lg:px-4 py-0.5 lg:py-1">
                                {t("titleHighlight")}
                            </span>
                            {" "} {t("titleEnd")}
                        </h1>

                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl">
                            {careerData.description}
                        </p>
                    </article>
                </section>
            </Opacity>

            <Opacity delay={0.1}>
                <article className='relative group'>
                    <div className="relative overflow-hidden rounded-3xl">
                        <Image
                            src={careerImage}
                            alt="Çizel İnşaat Ofis"
                            width={1200}
                            height={700}
                            className="w-full max-h-96 lg:max-h-max h-auto object-contain lg:object-cover"
                            priority
                        />
                    </div>
                </article>
            </Opacity>
        </main>
    );
};

export default CareerContent;