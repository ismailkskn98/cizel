import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ({ title = "Frequently Asked Questions", faqData, className = "" }) {
    return (
        <section className={`fluid p-2 relative w-full min-h-screen ${className}`}>
            <main className='relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-black to-[#333333] rounded-3xl overflow-hidden'>
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48">
                    <div className="w-full h-full bg-gradient-to-bl from-logo-red to-logo-red/50 rounded-bl-full opacity-90"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32">
                    <div className="w-full h-full bg-gradient-to-tr from-yellow-400 to-orange-400 rounded-tr-full opacity-80"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                            {title}
                        </h2>
                    </div>

                    <div className="rounded-2xl overflow-hidden">
                        <Accordion type="single" collapsible className="w-full">
                            {faqData.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b border-white/20 last:border-b-0"
                                >
                                    <AccordionTrigger className="px-6 sm:px-8 py-6 text-left hover:bg-[#161616] transition-all duration-300 text-white font-medium text-sm sm:text-base group [&[data-state=open]]:bg-[#161616]">
                                        <div className="flex items-start gap-4 w-full pr-4">
                                            <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                                                <div className="w-full h-full rounded-full border-2 border-gray-300 group-hover:border-logo-red transition-colors duration-300 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-gray-400 group-hover:bg-logo-red transition-colors duration-300 rounded-full"></div>
                                                </div>
                                            </div>
                                            <span className="text-left leading-relaxed">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 sm:px-8 py-6 text-white/80 leading-relaxed">
                                        <div className="pl-10 text-sm 2xl:text-base">
                                            {item.answer}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </main>
        </section>
    )
}
