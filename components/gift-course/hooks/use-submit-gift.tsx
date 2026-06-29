import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { formSchema, IFormSchema } from '../utils/form-schema'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { toast } from 'sonner'

const useSubmitGift = () => {
    const form = useForm<z.infer<IFormSchema>>({
        mode: "onBlur",
        resolver: standardSchemaResolver(formSchema),
        defaultValues: {
            ReceiptName: "",
            ReceiptEmail: "",
            giftMessage: "",
            cardName: "",
            cardNumber: "",
            cvc: "",
            expiration: "",
            isSaveCardInfo: false,
        },
    })

    function onSubmit(data: z.infer<IFormSchema>) {
        toast("You submitted the following values:", {
            description: "You submitted the following values:" + data.ReceiptName,
            position: "bottom-right",
            closeButton: true,
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
    }
    return {
        form, onSubmit
    }
}

export default useSubmitGift