import React from 'react'
import TurkeyMap from './turkeyMap'
import ProjectsSection from './projectsSection';
import CizelMarquee from './cizelMarquee';
import GoTop from '../goTop';
import Hero from './hero';
import CizelAbout from './cizelAbout';
import CizelProjects from './cizelProjects';


export default function Home() {
    const iller = ["Konya", "Ankara", "Malatya", "Balıkesir", "Çanakkale"];
    return (
        <main className='relative w-full fluid gridContainer'>
            <Hero />
            <CizelAbout />
            <CizelProjects />
            <ProjectsSection />
            <TurkeyMap hasProjects={iller} />
            <CizelMarquee />
            <GoTop />
        </main>
    )
}
