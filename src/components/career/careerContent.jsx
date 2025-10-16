import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const CareerContent = ({ careerData, careerImage }) => {
    return (
        <main className="flex flex-col">
            <section className="text-center lg:text-left mb-8">
                <article className="flex items-center gap-2 mb-6">
                    <div className="relative">
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference">
                            <div className="h-0.5 w-10 rounded-lg bg-white" />
                            <MoveRight className='-ml-2 w-20 h-20 stroke-[0.5px] text-white' />
                        </div>
                        <div className="w-10 h-10 bg-black rounded-full" />
                    </div>
                    <span className="inline-block text-sm 3xl:text-base font-medium text-black/80 ml-20">Kariyer Fırsatları</span>
                </article>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Çizel İnşaat'ta {" "}
                    <span className="bg-logo-red rounded-full text-white px-3 py-0.5">Kariyer</span>
                    {" "} Yapın
                </h1>
                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                    {careerData.description}
                </p>
            </section>

            <article className='flex flex-col gap-3'>
                <Image src={careerImage} alt="Çizel İnşaat Ofis" width={800} height={600} className="" />
            </article>
        </main>
    );
};

export default CareerContent;