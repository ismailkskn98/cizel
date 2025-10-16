"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "./formSchema";
import CustomInput from "./customInput";
import Opacity from "../common/opacity";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Link } from "@/i18n/navigation";

const ContactForm = () => {
    const t = useTranslations("ContactPage");

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: zodResolver(contactFormSchema(t)),
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch("/api/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            toast.success(t("toast.success"), {
                description: t("toast.successDescription"),
            });
            reset();
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error(t("toast.error"), {
                description: t("toast.errorDescription"),
            });
        }
    };

    return (
        <Opacity>
            <main className="bg-white rounded-3xl shadow-lg p-8">
                <header className="flex flex-col items-start gap-2 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {t("form.title")}
                    </h2>
                    <p className="text-gray-600 text-sm">
                        {t("form.subtitle")}
                    </p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-start gap-6" role="form" aria-label="Contact form">
                    <article className="w-full">
                        <CustomInput
                            placeholder={t("form.fullName")}
                            error={errors.fullName?.message}
                            {...register("fullName")}
                            aria-label="Full name"
                        />
                    </article>

                    <article className="w-full">
                        <CustomInput
                            type="email"
                            placeholder={t("form.email")}
                            error={errors.email?.message}
                            {...register("email")}
                            aria-label="Email address"
                        />
                    </article>

                    <article className="w-full">
                        <CustomInput
                            type="tel"
                            placeholder={t("form.phone")}
                            error={errors.phone?.message}
                            {...register("phone")}
                            className="flex-1"
                            aria-label="Phone number"
                        />
                    </article>

                    <article className="w-full">
                        <CustomInput
                            placeholder={t("form.subject")}
                            error={errors.subject?.message}
                            {...register("subject")}
                            aria-label="Subject"
                        />
                    </article>

                    <article className="w-full">
                        <CustomInput
                            placeholder={t("form.message")}
                            error={errors.message?.message}
                            isTextarea
                            {...register("message")}
                            aria-label="Message"
                        />
                    </article>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-fit self-center bg-logo-red hover:bg-[#701a25] disabled:bg-[#e53c51] text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 !cursor-pointer mt-2"
                        aria-describedby="submit-status"
                    >
                        {isSubmitting ? t("form.submitting") : t("form.submit")}
                    </button>

                    <footer className="text-center text-xs text-gray-500 mt-4">
                        <p>
                            {t("form.terms")}{" "}
                            <Link href="/kvkk" className="text-logo-red hover:underline !cursor-pointer">{t("form.termsLink")}</Link>
                            {" "}
                            {t("form.termsEnd")}
                        </p>
                    </footer>
                </form>
            </main>
        </Opacity>
    );
};

export default ContactForm;