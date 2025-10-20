import React from 'react'
import TurkeyMap from './turkeyMap'
import ProjectsSection from './projectsSection';
import CizelMarquee from './cizelMarquee';
import GoTop from '../goTop';
import Hero from './hero';
import CizelAbout from './cizelAbout';
import CizelProjects from './cizelProjects';


export default function Home({ projects, carousels, homeData, partnerLogos, totalProjectCount, foundingYear, completedProjects }) {
    const locations = projects.map(proje => proje.location);
    return (
        <main className='relative w-full fluid gridContainer'>
            <Hero carousels={carousels} />
            <CizelAbout homeData={homeData.about} totalProjectCount={totalProjectCount} foundingYear={foundingYear} completedProjects={completedProjects} />
            <CizelProjects projects={projects} homeData={homeData.cizelProjects} />
            <ProjectsSection projects={projects} homeData={homeData.projectsBlock} />
            <TurkeyMap hasProjects={locations} homeData={homeData.mapBlock} />
            {/* <CizelMarquee homeData={homeData.partnersBlock} partnerLogos={partnerLogos} /> */}
            <GoTop />
        </main>
    )
}
