import React from 'react'
import PageTopSection from '../common/pageTopSection';
import Image from 'next/image';

export default function About() {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Kurumsal', href: null },
        { label: 'About', href: null }
    ];
    return (
        <main className="w-full fluid gridContainer pb-24">
            <PageTopSection breadcrumbs={breadcrumbs} />
            <section className="fluid gridContainer bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 pb-20 pt-72 -mt-52">

                <main className='mx-auto max-w-7xl w-full flex items-center gap-6'>
                    <article className='flex flex-col items-start gap-6'>
                        <h1 className='font-medium text-4xl lg:text-5xl xl:text-6xl text-nowrap'>About Us</h1>
                        <p className='leading-relaxed text-sm lg:text-base 2xl:text-lg max-w-2xl'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </article>
                    <article className='relative'>
                        <div className='absolute inset-0 w-full h-full bg-logo-red rounded-3xl -z-10 translate-10 shadow-[4px_6px_4px_black]'></div>
                        <Image src={"/images/about.jpg"} alt='cizel about us' width={600} height={500} className='object-contain w-fit h-96 rounded-3xl shadow-[4px_6px_4px_black]' />
                    </article>
                </main>
            </section>
        </main>
    )
}
