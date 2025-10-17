import ProjectSlug from '@/components/projects/slug';
import React from 'react'

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const getProjectsBySlug = async (city, slug) => {
    try {
        const response = await fetch(`${base_url}/api/site/projects?city=${city}&slug=${slug}`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}


export default async function ProjectCitySlugPage({ params }) {
    const { city, slug, locale } = await params;
    const project = await getProjectsBySlug(city, slug);
    console.log(project);
    return (
        <>
            <ProjectSlug project={project} locale={locale} />
        </>
    )
}
