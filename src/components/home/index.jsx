import React from 'react'
import TurkeyMap from './turkeyMap'
import MainCarousel from './mainCarousel';
import HeroBottom from './heroBottom';
import ProjectsSection from './projectsSection';

export default function Home() {
    const iller = ["Konya", "Ankara", "Malatya", "Balıkesir", "Çanakkale"];
    return (
        <main className='w-full fluid gridContainer'>
            <MainCarousel />
            <HeroBottom />
            <ProjectsSection />
            <TurkeyMap hasProjects={iller} />
        </main>
    )
}
