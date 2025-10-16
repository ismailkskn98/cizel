import React from 'react';
import ContactContent from './contactContent';
import ContactForm from './contactForm';
import PageTopSection from '@/components/common/pageTopSection';
import MapSection from './mapSection';
// import FAQ from '../common/faq';

export default function Contact({ contactData, faqData }) {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Contact', href: null }
    ];

    return (
        <main className="w-full fluid gridContainer pb-24">
            <PageTopSection breadcrumbs={breadcrumbs} />
            <section className="fluid gridContainer pb-20 pt-64 -mt-52">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ContactContent contactData={contactData} />
                        <div className="flex justify-center lg:justify-end">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <MapSection contactData={contactData} />
            {/* <FAQ faqData={faqData} /> */}
        </main>
    );
}
