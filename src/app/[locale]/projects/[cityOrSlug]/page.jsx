import Projects from '@/components/projects';
import React from 'react'

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const getProjectsByCity = async (cityOrSlug) => {
    try {
        const response = await fetch(`${base_url}/api/site/projects?city=${cityOrSlug}`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getProjectsByProjectStatus = async (projectStatus) => {
    try {
        const response = await fetch(`${base_url}/api/site/projects?status=${projectStatus}`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}


export default async function ProjectsCityPage({ params }) {
    const { cityOrSlug } = await params;
    const projectStatusSlugMap = {
        "tamamlanan-projeler": "Tamamlanan Projeler",
        "devam-eden-projeler": "Devam Eden Projeler",
        "gayrimenkul-projeler": "Gayrimenkul Projeler",
        "tahhut-projeler": "Tahhut Projeler"
    };
    const isValidCity = Object.keys(projectStatusSlugMap).includes(cityOrSlug);

    let projects = [];
    let city = false;
    let projectStatusName = null;

    if (isValidCity) {
        projects = await getProjectsByProjectStatus(cityOrSlug);
        city = false;
        projectStatusName = projectStatusSlugMap[cityOrSlug];
    } else {
        projects = await getProjectsByCity(cityOrSlug);
        city = true;
    }

    return (
        <Projects projects={projects} city={city} projectStatusName={projectStatusName} />
    )
}
