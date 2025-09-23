import React from 'react'
import TurkeyMap from './turkeyMap'
import HeroBottom from './heroBottom';
import ProjectsSection from './projectsSection';
import CizelMarquee from './cizelMarquee';
import GoTop from '../goTop';
import Hero from './hero';


export default function Home() {
    const iller = ["Konya", "Ankara", "Malatya", "Balıkesir", "Çanakkale"];
    return (
        <main className='relative w-full fluid gridContainer'>
            <Hero />
            <HeroBottom />
            <ProjectsSection />
            <TurkeyMap hasProjects={iller} />
            <CizelMarquee />
            <GoTop />
        </main>
    )
}
