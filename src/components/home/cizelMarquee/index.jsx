import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
import SectionHeader from '../../common/sectionHeader';

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function CizelMarquee({ homeData, partnerLogos }) {

    return (
        <section className='w-full mx-auto max-w-10/12 -mt-2 sm:-mt-8 md:-mt-20 pb-24 lg:pb-32'>
            <SectionHeader
                title={homeData.title}
                description={homeData.subtitle}
                className='mb-8 lg:mb-20'
            />
            <article className="relative mt-8 overflow-hidden">
                <div className='w-24 absolute inset-y-0 left-0 bg-gradient-to-r from-white to-transparent z-10'></div>
                <div className='w-24 absolute inset-y-0 right-0 bg-gradient-to-l from-white to-transparent z-10'></div>
                <Marquee
                    speed={50}
                    gradient={true}
                    autoFill={true}
                    gradientColor={[255, 255, 255]}
                    className="overflow-hidden"
                >
                    {partnerLogos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center mx-8">
                            <Image
                                src={`${base_url}${logo}`}
                                alt='Cizel Logo'
                                width={120}
                                height={120}
                                className='object-contain w-auto h-16'
                            />
                        </div>
                    ))}
                </Marquee>
            </article>
        </section>
    )
}
