import React from 'react';
import { MapPin, Building2, Globe, Phone, Mail } from "lucide-react";
import Opacity from '../common/opacity';
import { useTranslations } from 'next-intl';
import MotionScrollInView from '../common/motionScrollInView';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const MapSection = ({ contactData }) => {
    const t = useTranslations("ContactPage");

    const generateMapEmbedUrl = (address) => {
        if (!address) {
            return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.3294537491174!2d32.8581952!3d39.866857700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3451126f46db1%3A0xfbee61888560f7fc!2zw4dpemVsIMSwbsWfYWF0IEVsZWt0cmlrIE3DvGguIMSwdGguIMSwaHIuIFNhbi4gdmUgVGljLiBMdGQuIMWedGku!5e0!3m2!1str!2str!4v1758704477556!5m2!1str!2str";
        }

        const encodedAddress = encodeURIComponent(address);
        return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`;
    };
    const mapUrl = generateMapEmbedUrl(contactData?.address);

    return (
        <MotionScrollInView className="" aria-label="Location and map information">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-12 items-start">
                    <Opacity delay={0.1}>
                        <figure className="relative group">
                            <div className="relative bg-white p-2 rounded-3xl shadow-xl">
                                <iframe
                                    className='rounded-2xl w-full'
                                    src={mapUrl}
                                    height="550"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`${t("location")} - ${contactData?.address || 'Konum'}`}
                                />
                            </div>
                        </figure>
                    </Opacity>
                </div>
            </div>
        </MotionScrollInView>
    );
};

export default MapSection;