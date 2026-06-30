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

    isSaveCardInfo: z.boolean().optional(),
    // isSaveCardInfo: z.boolean().refine(val => val === true, {
    //     message: "You must accept this",
    // }),
    price: z.number()
})

export type IFormSchema = typeof formSchema
