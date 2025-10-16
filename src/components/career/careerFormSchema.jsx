import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

export const careerFormSchema = (t) => z.object({
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

    position: z
        .string()
        .min(2, t("validation.positionMin"))
        .max(100, t("validation.positionMax")),

    experience: z
        .string()
        .min(1, t("validation.experienceRequired")),

    education: z
        .string()
        .min(2, t("validation.educationMin"))
        .max(100, t("validation.educationMax")),

    message: z
        .string()
        .max(1000, t("validation.messageMax"))
        .optional(),

    cv: z
        .any()
        .refine((file) => file && file.length > 0, t("validation.cvRequired"))
        .refine(
            (file) => file && file[0]?.size <= MAX_FILE_SIZE,
            t("validation.cvSize")
        )
        .refine(
            (file) => file && ACCEPTED_FILE_TYPES.includes(file[0]?.type),
            t("validation.cvFormat")
        ),
});