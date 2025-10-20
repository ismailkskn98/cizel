import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Building2, Globe, Mail, MapPin, MoveRight, Phone } from "lucide-react";
import MotionScrollInViewVariant from "../common/motionScrollInViewVariant";

const ContactContent = ({ contactData }) => {
    const locale = useLocale();
    const t = useTranslations("ContactPage");

    return (
        <section className="space-y-16">
            <MotionScrollInViewVariant className={"relative"}>
                <article className="flex flex-col gap-0">
                    <article className="flex items-center gap-2 mb-6">
                        <div className="relative">
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference">
                                <div className="h-0.5 w-6 lg:w-10 rounded-lg bg-white" />
                                <MoveRight className='-ml-2 w-12 lg:w-16 2xl:w-20 h-12 lg:h-16 2xl:h-20 stroke-[0.5px]' />
                            </div>
                            <div className="w-7 lg:w-10 h-7 lg:h-10 bg-black rounded-full" />
                        </div>
                        <span className="inline-block text-sm 3xl:text-base font-medium text-black/80 ml-12 lg:ml-16 2xl:ml-20">{t("title")}</span>
                    </article>
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-medium text-gray-900 leading-tight">
                        {t("title")}
                    </h1>
                </article>


                <article>
                    <div className="space-y-6 mt-4">
                        <div className="flex flex-col items-start gap-2">
                            <h3 className="font-bold text-gray-900 mb-2 text-lg">{t("headquarters")}</h3>
                            <address className="not-italic space-y-3 text-gray-600">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                    <p className="text-sm leading-relaxed">{contactData.address}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <p className="text-sm">{t("turkey")}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <a href={`tel:${contactData.phone}`} className="text-sm hover:text-logo-red transition-colors">
                                        {contactData.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <a href={`mailto:${contactData.email}`} className="text-sm hover:text-logo-red transition-colors">
                                        {contactData.email}
                                    </a>
                                </div>
                            </address>
                        </div>
                    </div>
                </article>
                <article className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                    <Link
                        href={`mailto:${contactData.email}`}
                        className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white border border-gray-200 rounded-xl sm:rounded-2xl !cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg sm:rounded-xl group-hover:bg-black/70 transition-colors">
                            <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] sm:text-xs text-gray-500 font-medium">{t("emailLabel")}</span>
                            <span className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors break-all">
                                {contactData.email}
                            </span>
                        </div>
                    </Link>

                    <Link
                        href={`tel:${contactData.phone}`}
                        className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white border border-gray-200 rounded-xl sm:rounded-2xl !cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg sm:rounded-xl group-hover:bg-black/70 transition-colors">
                            <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] sm:text-xs text-gray-500 font-medium">{t("phone")}</span>
                            <span className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                                {contactData.phone}
                            </span>
                        </div>
                    </Link>
                </article>
            </MotionScrollInViewVariant>
        </section>
    );
};

export default ContactContent;