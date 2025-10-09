import Image from 'next/image';
import React from 'react';

const CareerContent = ({ careerData, careerImage }) => {
    return (
        <main className="flex flex-col">
            <section className="text-center lg:text-left mb-8">
                <article className="inline-flex items-center gap-2 bg-gradient-to-r from-logo-red/20 to-logo-red/5 text-logo-red px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    Kariyer Fırsatları
                </article>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Çizel İnşaat'ta {" "}
                    <span className="bg-logo-red rounded-full text-white px-4 py-1">Kariyer</span>
                    {" "} Yapın
                </h1>
                <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                    {careerData.description}
                </p>
            </section>

            <article className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                    <div className="text-3xl font-bold text-logo-red mb-1">15+</div>
                    <div className="text-sm text-gray-600">Yıllık Deneyim</div>
                </div>
                <div className="text-center p-4">
                    <div className="text-3xl font-bold text-logo-red mb-1">100+</div>
                    <div className="text-sm text-gray-600">Tamamlanan Proje</div>
                </div>
                <div className="text-center p-4">
                    <div className="text-3xl font-bold text-logo-red mb-1">5+</div>
                    <div className="text-sm text-gray-600">Farklı Şehir</div>
                </div>
            </article>

            <article className='flex flex-col gap-3'>
                <Image src={careerImage} alt="Çizel İnşaat Ofis" width={800} height={600} className="" />
            </article>
        </main>
    );
};

export default CareerContent;