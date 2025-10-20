import Projects from '@/components/projects';
import React from 'react'

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const getProjectAll = async () => {
    try {
        const response = await fetch(`${base_url}/api/site/projects/all`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function ProjectsPage() {
    const projects = await getProjectAll();
    return (
        <Projects projects={projects} />
    );
}
