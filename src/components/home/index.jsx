import React from 'react'
import TurkeyMap from './turkeyMap'
import ProjectsSection from './projectsSection';
import CizelMarquee from './cizelMarquee';
import GoTop from '../goTop';
import Hero from './hero';
import CizelAbout from './cizelAbout';
import CizelProjects from './cizelProjects';


export default function Home({ projects }) {
    const locations = projects.map(proje => JSON.parse(proje.json_template).location);
    return (
        <main className='relative w-full fluid gridContainer'>
            <Hero />
            <CizelAbout />
            <CizelProjects projects={projects} />
            <ProjectsSection projects={projects} />
            <TurkeyMap hasProjects={locations} />
            <CizelMarquee />
            <GoTop />
        </main>
    )
}
