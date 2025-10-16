import { z } from "zod";

export const contactFormSchema = (t) => z.object({
    fullName: z
        .string()
        .min(2, t("validation.fullNameMin"))
        .max(50, t("validation.fullNameMax"))
        .regex(/^[a-zA-ZğüşıöçĞÜŞİIÖÇ\s]+$/, t("validation.fullNameInvalid")),

    email: z
        .string()
        .min(1, t("validation.emailRequired"))
        .email(t("validation.emailInvalid")),

    phone: z
        .string()
        .min(10, t("validation.phoneMin"))
        .max(15, t("validation.phoneMax"))
        .regex(/^[0-9+\s\-()]+$/, t("validation.phoneInvalid")),

    subject: z
        .string()
        .min(3, t("validation.subjectMin"))
        .max(100, t("validation.subjectMax")),

    message: z
        .string()
        .min(10, t("validation.messageMin"))
        .max(500, t("validation.messageMax")),
});