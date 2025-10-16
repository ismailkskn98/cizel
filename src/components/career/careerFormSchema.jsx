import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

export const careerFormSchema = z.object({
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

    position: z
        .string()
        .min(2, "Pozisyon en az 2 karakter olmalıdır")
        .max(100, "Pozisyon en fazla 100 karakter olmalıdır"),

    experience: z
        .string()
        .min(1, "Deneyim seviyesi seçiniz"),

    education: z
        .string()
        .min(2, "Mezuniyet bilgisi en az 2 karakter olmalıdır")
        .max(100, "Mezuniyet bilgisi en fazla 100 karakter olmalıdır"),

    message: z
        .string()
        .max(1000, "Mesaj en fazla 1000 karakter olmalıdır")
        .optional(),

    cv: z
        .any()
        .refine((file) => file && file.length > 0, "CV dosyası gereklidir")
        .refine(
            (file) => file && file[0]?.size <= MAX_FILE_SIZE,
            "Dosya boyutu en fazla 5MB olmalıdır"
        )
        .refine(
            (file) => file && ACCEPTED_FILE_TYPES.includes(file[0]?.type),
            "Sadece PDF, DOC veya DOCX formatları kabul edilir"
        ),
});