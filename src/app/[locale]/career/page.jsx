import Career from '@/components/career'
import React from 'react'
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.career' });

    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
        },
    };
}

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
const getCareer = async () => {
    try {
        const response = await fetch(`${base_url}/api/site/career`, { next: { revalidate: 10 } });
        if (!response.ok) {
            throw new Error('Failed to fetch career');
        }
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function CareerPage({ params }) {
    const { locale } = await params;
    const careerData = await getCareer();
    const careerImage = `${base_url}${careerData.careerImage}`;
    const careerDataLocalized = careerData[locale];
    return (
        <Career careerData={careerDataLocalized} careerImage={careerImage} />
    )
}
