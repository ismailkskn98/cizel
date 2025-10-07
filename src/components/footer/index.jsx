import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import LanguageSwitcher from '@/components/ui/language-switcher'
import { Link } from '@/i18n/navigation'

export default function Footer() {
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
        { label: "KVKK", href: "/about/kvkk" },
    ]

    const socialLinks = [
        { icon: FaFacebook, href: "#", label: "Facebook" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
        { icon: FaLinkedin, href: "#", label: "LinkedIn" },
        { icon: FaYoutube, href: "#", label: "YouTube" },
    ]

    return (
        <footer className="w-full fluid p-2">
            <main className="relative gridContainer py-16 bg-gradient-to-br from-black to-[#232323] rounded-3xl text-white overflow-hidden">
                <div className='absolute inset-x-0 w-full h-full bg-[url("/images/cizel-footer.webp")] bg-no-repeat bg-top bg-cover opacity-30 -bottom-16 invert-25' />
                <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/images/cizel-logo/cizel-logo-white.png"
                                alt="Cizel Logo"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Cizel, kaliteli gayrimenkul projeleri ve taahhüt hizmetleri ile
                            müşteri memnuniyetini ön planda tutan güvenilir bir markadır.
                        </p>
                        <div className="flex items-center space-x-3">
                            <LanguageSwitcher compact={false} />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white border-b border-logo-red pb-2 w-fit">
                            Hızlı Linkler
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group !cursor-pointer"
                                    >
                                        <span className="w-1 h-1 bg-logo-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white border-b border-logo-red pb-2 w-fit">
                            Hizmetlerimiz
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group !cursor-pointer"
                                    >
                                        <span className="w-1 h-1 bg-logo-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white border-b border-logo-red pb-2 w-fit">
                            İletişim
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-logo-red mt-1 flex-shrink-0" />
                                <div className="text-gray-300 text-sm">
                                    <p>Merkez Mahallesi</p>
                                    <p>İstanbul, Türkiye</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-logo-red flex-shrink-0" />
                                <Link href="tel:+902121234567" className="text-gray-300 hover:text-white transition-colors text-sm !cursor-pointer">
                                    +90 212 123 45 67
                                </Link>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-logo-red flex-shrink-0" />
                                <Link href="mailto:info@cizel.com" className="text-gray-300 hover:text-white transition-colors text-sm !cursor-pointer">
                                    info@cizel.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-20 mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-6">
                            <span className="text-gray-300 text-sm">Bizi takip edin:</span>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-gray-700 hover:bg-logo-red rounded-full flex items-center justify-center transition-all duration-200 group !cursor-pointer"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Cizel. Tüm hakları saklıdır.
                        </div>
                    </div>
                </div>
            </main>
        </footer>
    )
}
