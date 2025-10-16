import React from 'react'
import PageTopSection from '../common/pageTopSection';
import CareerContent from './careerContent';
import CareerForm from './careerForm';

export default function Career({ careerData, careerImage }) {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Career', href: null }
    ];
    return (
        <main className="w-full fluid gridContainer pb-6 lg:pb-10 xl:pb-16 2xl:pb-24">
            <PageTopSection breadcrumbs={breadcrumbs} />
            <section className="fluid gridContainer pb-20 pt-52 sm:pt-64 lg:pt-72 -mt-52">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-9 lg:gap-12 items-start">
                        <CareerContent careerData={careerData} careerImage={careerImage} />
                        <div className="flex justify-center lg:justify-end">
                            <CareerForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
