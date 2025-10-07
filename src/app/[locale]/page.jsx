import React from 'react'
import Home from "@/components/home";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
const getProjects = async () => {
  try {
    const res = await fetch(`${base_url}/api/site/projects`, { next: { revalidate: 10 } });
    if (!res.ok) {
      throw new Error('Failed to fetch projects');
    }
    const responseData = await res.json();
    return responseData.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function HomePage() {
  const projects = await getProjects();
  return (
    <Home projects={projects} />
  );
}
