import React from 'react'
import Home from "@/components/home";

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
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

const getCarousels = async () => {
  try {
    const response = await fetch(`${base_url}/api/site/carousel`, { next: { revalidate: 10 } });
    if (!response.ok) {
      throw new Error('Failed to fetch carousels');
    }
    const responseData = await response.json();
    return responseData.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

const getHome = async () => {
  try {
    const response = await fetch(`${base_url}/api/site/home`, { next: { revalidate: 10 } });
    if (!response.ok) {
      throw new Error('Failed to fetch home');
    }
    const responseData = await response.json();
    return responseData.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

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

export default async function HomePage({ params }) {
  const { locale } = await params;
  const [projects, carousels, homeData, aboutData] = await Promise.all([getProjects(), getCarousels(), getHome(), getAbout()]);
  const homeDataLocalized = homeData[locale];
  const partnerLogos = homeData.partnerLogos;
  const totalProjectCount = projects.length;
  const foundingYear = aboutData.foundingYear;
  const completedProjects = projects.filter(proje => proje.project_status === 'tamamlanan-projeler').length;
  return (
    <Home projects={projects} carousels={carousels} homeData={homeDataLocalized} partnerLogos={partnerLogos} totalProjectCount={totalProjectCount} foundingYear={foundingYear} completedProjects={completedProjects} />
  );
}
