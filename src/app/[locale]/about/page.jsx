import About from '@/components/about'
import React from 'react'
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata.about' });

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

const getAbout = async () => {
    try {
        const response = await fetch(`${base_url}/api/site/about`, { next: { revalidate: 10 } });
        if (!response.ok) {
            throw new Error('Failed to fetch about');
        }
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getProjects = async () => {
    try {
        const response = await fetch(`${base_url}/api/site/projects`, { next: { revalidate: 10 } });
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function AboutPage({ params }) {
    const { locale } = await params;
    const [projects, aboutData] = await Promise.all([getProjects(), getAbout()]);

    const totalProjectCount = projects.length;
    const foundingYear = aboutData.foundingYear;
    const completedProjects = projects.filter(proje => proje.project_status === '"tamamlanan-projeler"').length;
    const uniqueCities = [...new Set(projects.map(p => p.location))];
    const cityCount = uniqueCities.length;

    return (
        <About locale={locale} aboutData={aboutData} totalProjectCount={totalProjectCount} foundingYear={foundingYear} completedProjects={completedProjects} cityCount={cityCount} />
    )
}
