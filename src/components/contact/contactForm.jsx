"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "./formSchema";
import CustomInput from "./customInput";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data) => {
        try {
            console.log("Form data:", data);

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

            alert("Mesajınız başarıyla gönderildi!");
            reset();
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Bir hata oluştu. Lütfen tekrar deneyiniz.");
        }
    };

    return (
        <main className="bg-white rounded-3xl shadow-lg p-8">
            <header className="flex flex-col items-start gap-2 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Get in Touch
                </h2>
                <p className="text-gray-600 text-sm">
                    You can reach us anytime
                </p>
            </header>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-start gap-6" role="form" aria-label="Contact form">
                <article className="w-full">
                    <CustomInput
                        placeholder="Ad Soyad"
                        error={errors.fullName?.message}
                        {...register("fullName")}
                        aria-label="Full name"
                    />
                </article>

                <article className="w-full">
                    <CustomInput
                        type="email"
                        placeholder="Your email"
                        error={errors.email?.message}
                        {...register("email")}
                        aria-label="Email address"
                    />
                </article>

                <article className="w-full">
                    <CustomInput
                        type="tel"
                        placeholder="Phone number"
                        error={errors.phone?.message}
                        {...register("phone")}
                        className="flex-1"
                        aria-label="Phone number"
                    />
                </article>

                <article className="w-full">
                    <CustomInput
                        placeholder="Konu"
                        error={errors.subject?.message}
                        {...register("subject")}
                        aria-label="Subject"
                    />
                </article>

                <article className="w-full">
                    <CustomInput
                        placeholder="How can we help?"
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
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                <footer className="text-center text-xs text-gray-500 mt-4">
                    <p>
                        By contacting us, you agree to our{" "}
                        <a href="/terms" className="text-blue-600 underline cursor-pointer">Terms of Service</a> and{" "}
                        <a href="/privacy" className="text-blue-600 underline cursor-pointer">Privacy Policy</a>
                    </p>
                </footer>
            </form>
        </main>
    );
};

export default ContactForm;