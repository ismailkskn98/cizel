import { z } from "zod";

export const contactFormSchema = z.object({
    fullName: z
        .string()
        .min(2, "Ad soyad en az 2 karakter olmalıdır")
        .max(50, "Ad soyad en fazla 50 karakter olmalıdır")
        .regex(/^[a-zA-ZğüşıöçĞÜŞİIÖÇ\s]+$/, "Geçerli bir ad soyad giriniz"),

    email: z
        .string()
        .min(1, "Email adresi gereklidir")
        .email("Geçerli bir email adresi giriniz"),

    phone: z
        .string()
        .min(10, "Telefon numarası en az 10 karakter olmalıdır")
        .max(15, "Telefon numarası en fazla 15 karakter olmalıdır")
        .regex(/^[0-9+\s\-()]+$/, "Geçerli bir telefon numarası giriniz"),

    subject: z
        .string()
        .min(3, "Konu en az 3 karakter olmalıdır")
        .max(100, "Konu en fazla 100 karakter olmalıdır"),

    message: z
        .string()
        .min(10, "Mesaj en az 10 karakter olmalıdır")
        .max(500, "Mesaj en fazla 500 karakter olmalıdır"),
});