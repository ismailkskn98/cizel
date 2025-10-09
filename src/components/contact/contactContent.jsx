import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import React from "react";

const ContactContent = ({ contactData }) => {
    const locale = useLocale();
    return (
        <section className="space-y-8">
            <header>
                <article className="flex flex-col gap-4">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 w-full max-w-xs">
                        {contactData[locale].description}
                    </p>
                </article>

                <article className="flex flex-col items-start gap-2 mt-4">
                    <Link href={`mailto:${contactData.email}`} className="text-gray-900 hover:text-gray-950 text-sm underline !cursor-pointer">
                        {contactData.email}
                    </Link>
                    <Link href={`tel:${contactData.phone}`} className="text-gray-900 hover:text-gray-950 text-sm underline !cursor-pointer">
                        {contactData.phone}
                    </Link>
                </article>
            </header>

            <main className="grid grid-cols-3 gap-6">
                <article>
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
                    <p className="text-gray-600 text-sm">
                        Our support team is available around the clock to address any concerns or queries you may have.
                    </p>
                </article>

                <article>
                    <h3 className="font-semibold text-gray-900 mb-2">Feedback and Suggestions</h3>
                    <p className="text-gray-600 text-sm">
                        We value your feedback and are continuously working to improve Cizel. Your input is crucial in shaping the future of Cizel.
                    </p>
                </article>

                <article>
                    <h3 className="font-semibold text-gray-900 mb-2">Media Inquiries</h3>
                    <p className="text-gray-600 text-sm">
                        For media inquiries or press-related questions, please contact us at{" "}
                        <Link href={`mailto:${contactData.email}`} className="text-gray-900 hover:text-gray-950 underline !cursor-pointer">
                            {contactData.email}
                        </Link>
                    </p>
                </article>
            </main>
        </section>
    );
};

export default ContactContent;