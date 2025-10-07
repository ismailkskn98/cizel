import Projects from '@/components/projects';
import React from 'react'

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const getProjectsByCity = async (city) => {
    try {
        const response = await fetch(`${base_url}/api/site/projects?city=${city}`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function ProjectsCityPage({ params }) {
    const { city } = await params;
    const projects = await getProjectsByCity(city);

    return (
        <Projects projects={projects} />
    )
}
