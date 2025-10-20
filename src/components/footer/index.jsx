import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from '@/i18n/navigation'
import LanguageChange from '@/components/ui/language-switcher'

export default function Footer({ contactData }) {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { label: "Anasayfa", href: "/" },
        { label: "Hakkımızda", href: "/about" },
        { label: "Projeler", href: "/projects" },
        { label: "Kariyer", href: "/career" },
        { label: "İletişim", href: "/contact" },
    ]

    const services = [
        { label: "Gayrimenkul Projeler", href: "/projects/real-estate" },
        { label: "Taahhüt Projeler", href: "/projects/construction" },
        { label: "Kalite Belgeleri", href: "/about/certificates" },
        { label: "KVKK", href: "/kvkk.pdf" },
    ]

    const socialLinks = [
        { icon: FaLinkedin, href: "https://www.linkedin.com/company/%C3%A7izelin%C5%9Faat/?viewAsMember=true", label: "LinkedIn" },
    ]

    return (
        <footer className="w-full fluid p-1 sm:p-2">
            <main className="relative z-20 gridContainer py-10 sm:py-12 lg:py-16 bg-gradient-to-br from-black to-[#232323] rounded-3xl text-white overflow-hidden px-3">
                <section className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    <article className="col-span-2 lg:col-span-1 space-y-6 max-w-md">
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <Image
                                src="/images/cizel-logo/cizel-logo-white.png"
                                alt="Cizel Logo"
                                width={80}
                                height={80}
                                className="object-contain object-center w-fit h-16 sm:h-20 xl:h-24"
                            />
                        </div>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                            İnşaat sektörü, yalnızca fiziksel yapılar inşa etmekle kalmaz; aynı zamanda toplumların yaşam kalitesini yükselten, şehirleri dönüştüren ve geleceğe değer katan stratejik bir alandır.
                        </p>
                    </article>

                    <article className="space-y-6">
                        <h3 className="text-base sm:text-lg font-semibold text-white border-b border-logo-red pb-2 w-fit">
                            Hızlı Linkler
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm flex items-center group !cursor-pointer"
                                    >
                                        <span className="hidden md:block w-1 h-1 bg-logo-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="space-y-6">
                        <h3 className="text-base sm:text-lg font-semibold text-white border-b border-logo-red pb-2 w-fit">
                            Hizmetlerimiz
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm flex items-center group !cursor-pointer"
                                    >
                                        <span className="hidden md:block w-1 h-1 bg-logo-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="col-span-2 lg:col-span-1 space-y-6">
                        <h3 className="text-base sm:text-lg font-semibold text-white border-b border-logo-red pb-2 w-fit">
                            İletişim
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-logo-red mt-1 flex-shrink-0" />
                                <div className="text-gray-300 text-xs sm:text-sm">
                                    {contactData.address}
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-logo-red flex-shrink-0" />
                                <Link href={`tel:${contactData.phone}`} className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm !cursor-pointer">
                                    {contactData.phone}
                                </Link>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-logo-red flex-shrink-0" />
                                <Link href={`mailto:${contactData.email}`} className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm !cursor-pointer">
                                    {contactData.email}
                                </Link>
                            </div>
                        </div>
                    </article>
                </section>
                <div className='absolute inset-x-0 w-full h-full bg-[url("/images/cizel-footer.webp")] bg-no-repeat bg-top bg-cover opacity-30 -bottom-16 invert-25 -z-10' />
                <div className='hidden lg:flex w-full item-center justify-center mt-6 relative z-10'>
                    <h2 className='text-[130px] xl:text-[170px] 2xl:text-[200px] text-center opacity-20 font-black text-nowrap'>ÇİZEL İNŞAAT</h2>
                </div>
                <div className="relative z-20 mt-10 lg:mt-2 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-3">
                            <LanguageChange footer={true} />
                            <span className="text-gray-300 text-xs sm:text-sm">Bizi takip edin:</span>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-700 hover:bg-logo-red rounded-full flex items-center justify-center transition-all duration-200 group !cursor-pointer"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-3 sm:w-4 h-3 sm:h-4 text-gray-300 group-hover:text-white transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm">
                            © {currentYear} Cizel. Tüm hakları saklıdır.
                        </div>
                    </div>
                </div>
            </main>
        </footer>
    )
}
