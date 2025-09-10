import React from 'react'
import TurkeyMap from './turkeyMap'
import MainCarousel from './mainCarousel';
import HeroBottom from './heroBottom';

export default function Home() {
    const iller = ["Konya", "Ankara", "Malatya", "Balıkesir", "Çanakkale"];
    return (
        <main className='w-full fluid gridContainer'>
            <MainCarousel />
            <HeroBottom />
            <TurkeyMap hasProjects={iller} />
        </main>
    )
}
