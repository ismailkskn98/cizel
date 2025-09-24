import { Link } from "@/i18n/navigation";
import React from "react";

const ContactContent = () => {
    return (
        <section className="space-y-8">
            <header>
                <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4">
                    Contact Us
                </h1>
                <div className="space-y-1">
                    <p className="text-gray-600 w-full max-w-xs">
                        Email, call, or complete the form to learn how
                        Cizel can solve your messaging problem.
                    </p>
                </div>

                <article className="flex flex-col items-start gap-2 mt-4">
                    <Link href="mailto:info@cizel.com.tr" className="text-gray-900 hover:text-gray-950 text-sm underline !cursor-pointer">
                        info@cizel.com.tr
                    </Link>
                    <Link href="tel:+903123558000" className="text-gray-900 hover:text-gray-950 text-sm underline !cursor-pointer">
                        0 312 355 80 00
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
                        <Link href="mailto:media@cizel.com.tr" className="text-gray-900 hover:text-gray-950 underline !cursor-pointer">
                            media@cizel.com.tr
                        </Link>
                    </p>
                </article>
            </main>
        </section>
    );
};

export default ContactContent;