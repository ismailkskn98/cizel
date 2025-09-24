import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import LanguageSwitcher from '@/components/ui/language-switcher'

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
            <div className="gridContainer py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/images/cizel-logo-white.png"
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
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <span className="w-1 h-1 bg-logo-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.label}
                                    </a>
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
                                    <a
                                        href={service.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <span className="w-1 h-1 bg-logo-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {service.label}
                                    </a>
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
                                <a href="tel:+902121234567" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    +90 212 123 45 67
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-logo-red flex-shrink-0" />
                                <a href="mailto:info@cizel.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    info@cizel.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-6">
                            <span className="text-gray-300 text-sm">Bizi takip edin:</span>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-gray-700 hover:bg-logo-red rounded-full flex items-center justify-center transition-all duration-200 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Cizel. Tüm hakları saklıdır.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
