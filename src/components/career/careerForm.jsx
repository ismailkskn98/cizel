"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerFormSchema } from "./careerFormSchema";
import CustomInput from "../contact/customInput";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Link } from "@/i18n/navigation";

const CareerForm = () => {
    const t = useTranslations("CareerPage");
    const fileInputRef = useRef(null);

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch } = useForm({
        resolver: zodResolver(careerFormSchema(t)),
    });

    const watchedCV = watch("cv");
    const selectedFileName = watchedCV && watchedCV[0] ? watchedCV[0].name : null;

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('fullName', data.fullName);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('position', data.position);
            formData.append('experience', data.experience);
            formData.append('education', data.education);
            formData.append('message', data.message || '');
            formData.append('cv', data.cv[0]);

            const response = await fetch('/api/career', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();

            toast.success(t("toast.success"), {
                description: t("toast.successDescription"),
            });
            reset();
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error(t("toast.error"), {
                description: t("toast.errorDescription"),
            });
        }
    };

    return (
        <main className="bg-white rounded-3xl shadow-xl border border-gray-100 p-5 xl:p-10 w-full max-w-2xl">
            <header className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {t("form.title")}
                </h2>
                <p className="text-gray-600">
                    {t("form.subtitle")}
                </p>
                <div className="flex items-center justify-center gap-1 mt-3 text-sm text-logo-red">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{t("form.email")}</span>
                </div>
            </header>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-6" role="form" aria-label="Career application form">
                <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CustomInput
                        placeholder={t("form.fullName")}
                        error={errors.fullName?.message}
                        {...register("fullName")}
                        aria-label="Full name"
                    />

                    <CustomInput
                        type="email"
                        placeholder={t("form.emailField")}
                        error={errors.email?.message}
                        {...register("email")}
                        aria-label="Email address"
                    />
                </article>

                <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CustomInput
                        type="tel"
                        placeholder={t("form.phone")}
                        error={errors.phone?.message}
                        {...register("phone")}
                        aria-label="Phone number"
                    />

                    <CustomInput
                        placeholder={t("form.position")}
                        error={errors.position?.message}
                        {...register("position")}
                        aria-label="Position"
                    />
                </article>

                <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <select
                            {...register("experience")}
                            className={cn(
                                "w-full px-2.5 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-white",
                                errors.experience && "border-red-500 focus:ring-red-500 focus:border-red-500"
                            )}
                            aria-label="Experience level"
                        >
                            <option value="">{t("form.experienceOptions.placeholder")}</option>
                            <option value="0-1">{t("form.experienceOptions.0-1")}</option>
                            <option value="1-3">{t("form.experienceOptions.1-3")}</option>
                            <option value="3-5">{t("form.experienceOptions.3-5")}</option>
                            <option value="5-10">{t("form.experienceOptions.5-10")}</option>
                            <option value="10+">{t("form.experienceOptions.10+")}</option>
                        </select>
                        {errors.experience && (
                            <p className="absolute left-1 bottom-0 translate-y-[120%] text-[8px] xl:text-[10px] text-red-600 mt-1">
                                * {errors.experience.message}
                            </p>
                        )}
                    </div>

                    <CustomInput
                        placeholder={t("form.education")}
                        error={errors.education?.message}
                        {...register("education")}
                        aria-label="Education"
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

                <article className="w-full relative">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-logo-red transition-colors duration-300">
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            {...register("cv")}
                            className="absolute inset-0 w-full h-full opacity-0 !cursor-pointer"
                            aria-label="CV file upload"
                        />
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-logo-red/10 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-logo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            {selectedFileName ? (
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{selectedFileName}</p>
                                    <p className="text-xs text-gray-500">{t("form.cvSelected")}</p>
                                </div>
                            ) : (
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{t("form.cvUpload")}</p>
                                    <p className="text-xs text-gray-500">{t("form.cvUploadDescription")}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {errors.cv && (
                        <p className="absolute left-1 bottom-0 translate-y-[120%] text-[8px] xl:text-[10px] text-red-600 mt-1">
                            * {errors.cv.message}
                        </p>
                    )}
                </article>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-fit mx-auto bg-logo-red hover:bg-[#701a25] disabled:bg-[#e53c51] text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform text-sm !cursor-pointer"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-1.5">
                            <svg className="animate-spin w-4 2xl:w-5 h-4 2xl:h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t("form.submitting")}
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-1.5">
                            <svg className="w-4 2xl:w-5 h-4 2xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            {t("form.submit")}
                        </span>
                    )}
                </button>

                <footer className="text-center text-xs text-gray-500 mx-auto">
                    <p>
                        {t("form.privacy")}{" "}
                        <Link href="/kvkk" className="text-logo-red hover:underline !cursor-pointer">
                            {t("form.privacyLink")}
                        </Link>{" "}
                        {t("form.privacyEnd")}
                    </p>
                </footer>
            </form>
        </main>
    );
};

export default CareerForm;