import React from 'react';
import ContactContent from './contactContent';
import ContactForm from './contactForm';
import MapSection from './mapSection';
import PageTopSection from '@/components/common/pageTopSection';

export default function Contact() {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Contact', href: null }
    ];

    return (
        <main className="w-full fluid gridContainer">
            <PageTopSection breadcrumbs={breadcrumbs} />
            <section className="fluid gridContainer bg-gradient-to-tl from-logo-red/20 to-logo-red/5 pb-20 pt-64 -mt-52">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ContactContent />
                        <div className="flex justify-center lg:justify-end">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <MapSection />
        </main>
    );
}
