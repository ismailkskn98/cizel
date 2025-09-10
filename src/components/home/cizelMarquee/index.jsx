import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
import SectionHeader from '../../common/sectionHeader';

export default function CizelMarquee() {

    const logos = [
        "/images/cizel-logo.png",
        "/images/cizel-logo-white.png",
        "/images/marka-force.png",

    ]

    return (
        <section className='w-full mx-auto max-w-10/12 -mt-20 pb-32'>
            <SectionHeader
                title='Güvenilir İş Ortaklarımız'
                description='Sektördeki önde gelen markalarla birlikte çalışarak, kaliteli hizmet anlayışımızı sürdürüyoruz. Müşteri memnuniyetini ön planda tutarak, güvenilir çözümler sunuyoruz.'
            />
            <div className="mt-8">
                <Marquee
                    speed={50}
                    gradient={true}
                    autoFill={true}
                    gradientColor={[255, 255, 255]}
                    className="overflow-hidden"
                >
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center mx-8">
                            <Image
                                src={logo}
                                alt='Cizel Logo'
                                width={120}
                                height={120}
                                className='object-contain w-auto h-16'
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
