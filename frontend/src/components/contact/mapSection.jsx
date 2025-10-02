import React from 'react';
import { IoLocationSharp } from "react-icons/io5";

const MapSection = () => {
    return (
        <section className="bg-white" aria-label="Location and map information">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <figure className="bg-gray-300 p-[1px] rounded-3xl h-auto flex items-center justify-center">
                        <iframe className='rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.3294537491174!2d32.8581952!3d39.866857700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3451126f46db1%3A0xfbee61888560f7fc!2zw4dpemVsIMSwbsWfYWF0IEVsZWt0cmlrIE3DvGguIMSwdGguIMSwaHIuIFNhbi4gdmUgVGljLiBMdGQuIMWedGku!5e0!3m2!1str!2str!4v1758704477556!5m2!1str!2str" width="600" height="550" style={{ border: 0, }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </figure>

                    <article className='w-full max-w-lg'>
                        <header className="mb-6">
                            <p className="flex items-center gap-0.5 text-gray-600 mb-2">
                                <IoLocationSharp className='text-2xl text-logo-red' />
                                <span>Konumumuz</span>
                            </p>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Yakın ve Uzaktan Bağlantı Kuruyoruz
                            </h2>
                        </header>

                        <section>
                            <h3 className="font-semibold text-gray-900 mb-4">Merkez Ofis</h3>
                            <address className="not-italic space-y-1 text-gray-600">
                                <p>Çizel İnşaat Elektrik Müh. İth. İhr. San. ve Tic. Ltd. Şti.</p>
                                <p>Hilal, Turan Güneş Blv. No:86 D:2</p>
                                <p>06550 Çankaya/Ankara</p>
                                <p>Türkiye</p>
                                <p>Telefon: (0312) 355 80 00</p>
                                <p>Web: cizel.com.tr</p>
                            </address>
                        </section>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default MapSection;