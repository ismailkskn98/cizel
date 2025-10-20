import React from 'react';
import ContactContent from './contactContent';
import ContactForm from './contactForm';
import PageTopSection from '@/components/common/pageTopSection';
import MapSection from './mapSection';
import { useTranslations } from 'next-intl';
import MotionScrollInView from '../common/motionScrollInView';
// import FAQ from '../common/faq';

export default function Contact({ contactData, faqData }) {
    const nav = useTranslations('Navigation');

    const breadcrumbs = [
        { label: nav('home'), href: '/' },
        { label: nav('contact'), href: null }
    ];

    return (
        <main className="w-full fluid gridContainer pb-24">
            <PageTopSection breadcrumbs={breadcrumbs} />
            <section className="fluid gridContainer pb-20 pt-52 sm:pt-64 lg:pt-72 -mt-44 lg:-mt-52">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ContactContent contactData={contactData} />
                        <MotionScrollInView className="flex justify-center lg:justify-end">
                            <ContactForm />
                        </MotionScrollInView>
                    </div>
                </div>
            </section>
            <MapSection contactData={contactData} />
            {/* <FAQ faqData={faqData} /> */}
        </main>
    );
}
