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

            await new Promise((resolve) => setTimeout(resolve, 1000));

            alert("Mesajınız başarıyla gönderildi!");
            reset();
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Bir hata oluştu. Lütfen tekrar deneyiniz.");
        }
    };

    return (
        <main className="bg-white rounded-3xl shadow-lg p-8">
            <header className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Get in Touch
                </h2>
                <p className="text-gray-600 text-sm">
                    You can reach us anytime
                </p>
            </header>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" role="form" aria-label="Contact form">
                <fieldset>
                    <legend className="sr-only">Personal Information</legend>
                    <CustomInput
                        placeholder="Ad Soyad"
                        error={errors.adSoyad?.message}
                        {...register("adSoyad")}
                        aria-label="Full name"
                    />
                </fieldset>

                <div>
                    <CustomInput
                        type="email"
                        placeholder="Your email"
                        error={errors.email?.message}
                        {...register("email")}
                        aria-label="Email address"
                    />
                </div>

                {/* Phone number with country code */}
                <fieldset className="flex gap-2">
                    <legend className="sr-only">Phone Number</legend>
                    <label className="sr-only" htmlFor="country-code">Country Code</label>
                    <select
                        id="country-code"
                        className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        aria-label="Country code"
                    >
                        <option>+90</option>
                    </select>
                    <CustomInput
                        type="tel"
                        placeholder="Phone number"
                        error={errors.telefon?.message}
                        {...register("telefon")}
                        className="flex-1"
                        aria-label="Phone number"
                    />
                </fieldset>

                <div>
                    <CustomInput
                        placeholder="Konu"
                        error={errors.konu?.message}
                        {...register("konu")}
                        aria-label="Subject"
                    />
                </div>

                <div>
                    <CustomInput
                        placeholder="How can we help?"
                        error={errors.mesaj?.message}
                        isTextarea
                        {...register("mesaj")}
                        aria-label="Message"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-fit bg-logo-red hover:bg-[#701a25] disabled:bg-[#e53c51] text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 !cursor-pointer"
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