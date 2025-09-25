import React from 'react'
import PageTopSection from '../common/pageTopSection';
import CareerContent from './careerContent';
import CareerForm from './careerForm';

export default function Career() {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Career', href: null }
    ];
    return (
        <main className="w-full fluid gridContainer pb-24">
            <PageTopSection breadcrumbs={breadcrumbs} />
            <section className="fluid gridContainer bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 pb-20 pt-72 -mt-52">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <CareerContent />
                        <div className="flex justify-center lg:justify-end">
                            <CareerForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
