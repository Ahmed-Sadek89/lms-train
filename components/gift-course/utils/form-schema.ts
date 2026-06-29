import * as z from "zod"

export const formSchema = z.object({
    ReceiptName: z
        .string()
        .min(5, "Receipt name must be at least 5 characters.")
        .max(32, "Receipt name must be at most 32 characters."),
    ReceiptEmail: z
        .email("It must be in email format, ex: john-doe12@example.com")
        .min(1, "Receipt Email is required."),
    giftMessage: z
        .string()
        .max(100, "Gift message must be at most 100 characters."),

    cardName: z
        .string()
        .min(2, "Card holder name must be at least 2 characters.")
        .max(32, "Card holder name must be at most 32 characters.")
        .regex(/^[a-zA-Z\s]+$/, "Card holder name can only contain letters and spaces."),
    cardNumber: z
        .string()
        .length(16, "Card number must contain exactly 16 digits.")
        .regex(/^\d{16}$/, "Card number must contain only digits.")
        .refine(
            value => !/^(\d)\1{15}$/.test(value),
            {
                message:
                    "Card number cannot have all digits the same.",
            }
        ),
    cvc: z
        .string()
        .length(3, "CVC must be exactly 3 digits.")
        .regex(/^\d{3}$/, "CVC must be exactly 3 digits."),
    expiration: z
        .string()
        .regex(
            /^(0[1-9]|[12][0-9]|3[01])\/([0-9]{2})$/,
            "Expiration must be in DD/YY format, day 01-31."
        )
        .refine((val) => {
            const match = val.match(/^(\d{2})\/(\d{2})$/);
            if (!match) return false;
            const day = parseInt(match[1], 10);
            const year = parseInt(match[2], 10);

            if (day < 1 || day > 31) return false;

            const now = new Date();
            const currentYear = now.getFullYear() % 100;
            return year > currentYear;
        }, {
            message: "Day must be between 01 and 31 and year must be greater than the current year's last two digits."
        }),

    isSaveCardInfo: z.boolean().optional(),
    // isSaveCardInfo: z.boolean().refine(val => val === true, {
    //     message: "You must accept this",
    // }),
})

export type IFormSchema = typeof formSchema