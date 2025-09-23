'use client';

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import Image from 'next/image';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function CizelProjects() {
    const verticalScrollRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {

        const leftColumn = leftColumnRef.current;
        const rightColumn = rightColumnRef.current;
        const verticalScroll = verticalScrollRef.current;
        const container = containerRef.current;
        const images = gsap.utils.toArray('.img-wrapper');


        gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${images.length * 100}%`,
                scrub: 5,
                invalidateOnRefresh: true,
            }
        })
            .to(leftColumn, {
                y: () => -(leftColumn.scrollHeight - verticalScroll.offsetHeight)
            })
            .fromTo(rightColumn, {
                y: () => verticalScroll.offsetHeight - rightColumn.scrollHeight
            }, { y: 0 }, 0);

        ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: () => `+=${images.length * 100}%`,
            invalidateOnRefresh: true,
            pin: true,
        })
    }, [])
    return (
        <main id='smooth-wrapper' className='w-full'>
            <section id='smooth-content' className=''>
                {/* sm altında -> flex, items-center, justify-center, h-screen */}
                <main ref={containerRef} className='relative h-screen lg:h-auto flex lg:grid lg:grid-cols-2 items-center lg:items-center justify-center lg:justify-start overflow-hidden'>
                    {/* sm altında-> z-index-1, bg-gray-300, w-[80%], h-[60%], border-radius-20px, color-white */}
                    <article id='context' className='relative z-10 w-[80%] lg:w-auto h-[60%] lg:h-auto flex flex-col items-center justify-center text-center text-white lg:text-black bg-black/20 backdrop-blur-lg lg:backdrop-blur-none lg:bg-transparent overflow-hidden rounded-lg lg:rounded-none'>
                        {/* sm altında-> mb-30px */}
                        <div id='title' className='flex items-center gap-1 mb-3'>
                            {/* sm altında-> color white */}
                            <h2 className='text-3xl font-medium'>Lorem, ipsum.</h2>
                            <div id='word-underline' className='w-min flex flex-col items-center mx-auto'>
                                <span className='text-3xl font-medium'>lorem</span>
                                {/* sm altında, fill->#ffdc50 */}
                                <svg viewBox="0 0 1321 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.9154 87.2689C25.6668 87.3987 30.4182 87.5121 35.1788 87.5365C41.4524 87.577 47.6339 86.985 53.8338 86.2224C64.2038 84.9407 74.0295 82.2881 83.5692 78.4917C92.0017 75.1495 99.6316 70.5338 107.298 66.0397C118.812 59.2987 130.216 52.5982 142.652 47.2524C154.167 43.2613 165.902 40.0976 178.08 38.1426C179.372 38.0858 180.654 38.0858 181.946 38.1426C183.976 38.532 185.95 39.0349 187.924 39.6433C200.02 44.6484 211.146 51.6328 222.264 58.0656C227.891 61.3266 233.658 64.3606 239.507 67.3052C246.62 70.8745 254.269 73.5838 261.945 76.0337C268.061 77.9724 274.455 79.2704 280.876 80.1627C290.305 81.485 299.854 82.7343 309.431 82.499C317.504 82.2962 325.613 80.8117 333.215 78.4349C340.735 76.0824 348.023 73.4379 354.712 69.5604C361.632 65.5531 368.007 60.7588 374.511 56.2323C377.814 54.107 381.145 52.0547 384.567 50.051C387.907 48.096 391.515 46.5061 395.094 44.8918C399.633 43.2937 404.2 41.8092 408.869 40.4626C413.98 38.9943 419.137 38.0047 424.396 37.2016C428.751 36.8771 433.041 36.65 437.414 36.8852C443.937 38.0047 450.137 39.8299 456.3 41.9552C468.035 46.9847 479.448 52.5333 491.137 57.6357C498.582 60.8805 506.304 63.6548 513.999 66.3967C519.784 68.4572 525.799 70.3067 531.897 71.4829C540.275 73.0891 548.679 74.1842 557.204 74.971C560.581 75.2793 563.939 75.474 567.325 75.6444C575.73 76.0905 583.96 75.3199 592.272 74.1923C602.043 72.8701 611.149 69.2602 620.107 65.7802C623.124 64.6039 626.095 63.3547 629.056 62.0892C635.044 59.5177 641.023 56.9461 647.001 54.3746C653.062 51.7707 659.161 49.2235 665.315 46.7899C673.009 44.2265 680.787 42.0282 688.878 40.7465C691.655 40.5843 694.404 40.6087 697.172 40.7871C701.527 41.501 705.734 42.5555 709.876 43.9264C715.652 46.3276 721.123 49.1668 726.538 52.1601C731.677 54.9912 736.751 57.9927 742.158 60.4182C749.696 63.8171 757.491 66.6724 765.5 69.1142C773.877 71.6857 782.937 73.0566 791.72 73.9408C802.201 74.9954 812.395 74.0219 822.775 72.4888C829.27 71.5396 835.377 69.5928 841.439 67.4431C849.493 64.5796 857.252 61.2861 864.984 57.8304C875.797 53.0038 886.526 48.1204 897.57 43.7237C901.251 42.4988 904.923 41.3306 908.669 40.2436C912.295 39.1972 916.096 38.6131 919.86 38.0371C926.069 37.518 932.223 37.4774 938.432 37.9723C943.359 38.7591 948.119 39.8948 952.824 41.4117C963.637 45.8814 973.611 51.8032 984.082 56.8489C995.827 62.5029 1007.93 67.1998 1020.5 71.2558C1023.01 72.067 1025.67 72.6185 1028.25 73.2918C1032.12 74.3139 1036.15 74.9142 1040.15 75.4253C1045.97 76.1635 1051.56 76.6421 1057.44 76.2365C1065.87 75.6525 1074.04 74.03 1081.96 71.4747C1088.01 69.5198 1093.85 67.1105 1099.6 64.5715C1110.18 59.8989 1120.64 55.0723 1131.34 50.6432C1139.42 47.7797 1147.62 45.273 1156.22 43.8696C1159.81 43.5776 1163.4 43.4883 1167.01 43.6749C1171.4 44.4293 1175.63 45.5732 1179.82 46.9846C1192.66 52.2169 1204.26 59.5014 1217.03 64.8634C1234.79 72.3346 1254.28 76.0742 1273.98 74.8818C1278.78 74.5897 1283.62 73.9083 1288.3 72.943C1292.79 72.0101 1297.24 70.185 1301.36 68.4409C1304.53 67.1024 1307.55 65.7396 1310.48 64.0199C1315.11 61.3105 1318.58 57.8547 1320.08 53.0443C1321.57 48.3069 1320.79 43.1396 1317.98 38.897C1315.24 34.7842 1310.72 31.7179 1305.5 30.4524C1300.37 29.2113 1293.93 29.6493 1289.4 32.3019C1286.69 33.8919 1283.85 35.2304 1280.92 36.4472C1278.58 37.1773 1276.2 37.7289 1273.78 38.1426C1268.6 38.4914 1263.43 38.4914 1258.25 38.0858C1251.7 37.0961 1245.35 35.5791 1239.12 33.5187C1228.77 29.3086 1219.28 23.7925 1209.29 18.9983C1198.47 13.7985 1186.78 9.19086 1174.47 7.72259C1169.78 7.17097 1165.41 6.74907 1160.7 6.85453C1156.15 6.95998 1151.47 7.51169 1146.98 8.16065C1143.75 8.62303 1140.48 9.18274 1137.34 9.99394C1132.05 11.3568 1126.79 12.7764 1121.7 14.6503C1115.05 17.092 1108.5 19.631 1101.99 22.316C1091.76 26.5181 1082.01 31.58 1071.74 35.7252C1066.88 37.3638 1061.93 38.6617 1056.82 39.5134C1053.84 39.7 1050.89 39.692 1047.9 39.5054C1039.77 38.1913 1032.07 35.9604 1024.3 33.47C1019.62 31.6773 1014.96 29.8439 1010.5 27.6943C1004.59 24.8469 998.742 21.9592 992.948 18.9496C984.239 14.4069 975.566 10.0264 966.11 6.72481C947.824 0.324438 927.757 -0.381298 908.549 2.65259C901.685 3.73149 895.107 5.35384 888.602 7.57653C880.354 10.3752 872.346 13.5876 864.375 16.9378C852.584 21.9024 841.125 27.451 829.307 32.3912C828.08 32.8292 826.853 33.2672 825.616 33.6972C820.699 35.4494 815.477 36.512 810.246 37.2745C804.802 37.7288 799.451 37.8263 793.999 37.4125C790.318 36.869 786.655 36.1875 783.048 35.3358C779.071 34.3948 775.242 33.2754 771.349 32.091C767.123 30.4443 762.972 28.6921 758.968 26.6074C753.607 23.8087 748.358 20.8478 743.071 17.9356C734.602 13.2631 725.182 9.51531 715.688 6.87891C710.457 5.42686 704.83 4.73731 699.395 4.23437C695.244 3.8531 691.193 3.79636 687.042 4.15329C681.774 4.60756 676.358 5.36202 671.21 6.55449C664.826 8.03087 658.69 9.8479 652.536 11.9489C645.626 14.3014 638.845 17.1162 632.193 19.9717C620.661 24.9281 609.211 30.0954 597.476 34.6706C592.3 36.439 587.069 37.81 581.616 38.7023C572.547 39.4081 563.552 38.8239 554.51 38.0127C549.491 37.3313 544.472 36.5851 539.601 35.3277C533.789 33.827 528.179 32.0423 522.57 30.0955C511.628 25.7799 501.073 20.9127 490.436 16.0373C487.373 14.634 484.319 13.2144 481.219 11.8921C476.237 9.78298 471.172 7.90098 466.07 6.05145C462.739 4.85087 459.298 3.88555 455.838 2.99323C450.616 1.64664 445.201 0.876024 439.794 0.356856C437.451 0.137832 435.117 0 432.782 0C431.269 0 429.756 0.056686 428.234 0.178366C420.115 0.835438 411.692 1.46816 403.822 3.47993C397.576 5.078 391.321 6.74915 385.315 8.96373C377.74 11.7705 370.101 14.4636 363.237 18.5034C356.179 22.6405 349.499 27.1751 342.801 31.7503C341.583 32.5858 340.375 33.4376 339.166 34.2893C334.756 37.1934 330.272 39.9272 325.3 42.0525C320.825 43.537 316.258 44.7944 311.571 45.638C305.75 46.0112 299.965 45.6543 294.162 45.0783C290.056 44.478 286.015 43.7885 281.937 43.0179C277.546 42.1905 273.256 40.7303 269.039 39.3675C267.545 38.7753 266.059 38.1669 264.602 37.4854C261.326 35.9604 258.107 34.3624 254.887 32.74C249.13 29.8521 243.631 26.5343 238.095 23.3382C232.873 20.3206 227.652 17.2542 222.273 14.4312C212.29 9.19083 201.8 3.8613 190.176 2.27135C186.642 1.79274 183.201 1.4195 179.63 1.31404C176.687 1.22481 172.849 1.8738 170.164 2.26318C168.799 2.45787 167.433 2.62009 166.077 2.85534C162.608 3.4394 159.176 4.08034 155.763 4.84287C149.018 6.35981 142.44 8.21742 135.899 10.3103C128.306 12.7358 120.824 15.6237 113.738 19.0389C107.99 21.8051 102.455 24.8876 96.9653 28.035C86.217 34.2001 75.8193 41.1927 64.213 46.0843C58.3545 48.023 52.3207 49.4182 46.1485 50.3511C37.7436 51.0163 29.3295 50.7811 20.8877 50.5539C9.50278 50.2538 0 59.1364 0 68.9194C0 73.7704 2.22348 78.4836 6.11686 81.9069C10.1394 85.4031 15.3244 87.1228 20.9154 87.2689Z"
                                        fill="#d0842d" />
                                </svg>
                            </div>
                        </div>
                        <p className='2xl:text-lg font-light w-[80%] leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus quasi iure in. Laborum aliquid soluta maxime accusamus repellendus. Quidem aut accusamus fugiat ex unde doloremque autem pariatur quisquam distinctio ullam facilis expedita voluptate numquam commodi voluptates ut ratione, eius necessitatibus magni incidunt, nulla at. Saepe voluptates facilis neque reprehenderit?</p>
                    </article>
                    <article ref={verticalScrollRef} className='absolute top-0 left-0 lg:top-auto lg:left-auto lg:relative flex w-full h-screen overflow-hidden'>
                        <div className='z-10 absolute inset-x-0 top-[-1px] w-full h-16 bg-gradient-to-t from-transparent to-white'></div>
                        <div className='z-10 absolute inset-x-0 bottom-[-1px] w-full h-16 bg-gradient-to-b from-transparent to-white'></div>
                        <section id='column' className='w-1/2'>
                            <div ref={leftColumnRef} className='img-wrapper grid grid-cols-1 place-items-stretch will-change-transform'>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/3.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/3.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                            </div>
                        </section>
                        <section id='column' className='w-1/2'>
                            <div ref={rightColumnRef} className='img-wrapper grid grid-cols-1 place-items-stretch will-change-transform'>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/3.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/1.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/2.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                                <div id='frame' className='flex w-full p-2'>
                                    <Image src="/images/carousel/3.jpg" alt="cizel project" width={500} height={700} className='block h-auto max-w-full rounded-xl' />
                                </div>
                            </div>
                        </section>
                    </article>
                </main>
            </section>
        </main>
    )
}
