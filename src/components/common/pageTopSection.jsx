import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from 'next/image';

export default function PageTopSection({ breadcrumbs }) {
    return (
        <section className="fluid p-2 relative z-40 mt-[-6rem] h-64 w-full overflow-hidden">
            <div className="relative flex items-center justify-center bg-gradient-to-b from-black to-[#2b2b2b] w-full h-full rounded-3xl overflow-hidden">
                <div className="bg-[url('/images/page-top-bg.svg')] absolute z-10 inset-0 w-full h-full bg-cover bg-center" />
                <Image
                    src="/images/cizel-logo/cizel-logo-material-left.webp"
                    alt='cizel logo material'
                    width={200}
                    height={200}
                    className='absolute left-0 bottom-[-2px] w-fit h-72 brightness-[12] opacity-[0.05]'
                />
                <Image
                    src="/images/cizel-logo/cizel-logo-material-right.webp"
                    alt='cizel logo material'
                    width={200}
                    height={200}
                    className='absolute right-0 bottom-[-2px] w-fit h-72 brightness-[12] opacity-[0.05]'
                />
                <article className='relative z-20'>
                    <Breadcrumb>
                        <BreadcrumbList className="text-sm md:text-base lg:text-lg 2xl:text-xl font-medium">
                            {breadcrumbs.map((breadcrumb, index) => (
                                <React.Fragment key={index}>
                                    <BreadcrumbItem>
                                        {breadcrumb.href ? (
                                            <BreadcrumbLink
                                                href={breadcrumb.href}
                                                className="text-white/80 hover:text-white !cursor-pointer hover:underline"
                                            >
                                                {breadcrumb.label}
                                            </BreadcrumbLink>
                                        ) : (
                                            <BreadcrumbPage className="text-white">
                                                {breadcrumb.label}
                                            </BreadcrumbPage>
                                        )}
                                    </BreadcrumbItem>
                                    {index < breadcrumbs.length - 1 && (
                                        <BreadcrumbSeparator className="text-white/70" />
                                    )}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </article>
            </div>
        </section>
    );
}