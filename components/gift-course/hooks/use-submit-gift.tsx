import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { formSchema, IFormSchema } from '../utils/form-schema'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { toast } from 'sonner'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useParams, useRouter } from 'next/navigation'

const useSubmitGift = () => {
    const stripe = useStripe()
    const elements = useElements()
    const router = useRouter()
    const params = useParams<{ slug: string }>()
    const form = useForm<z.infer<IFormSchema>>({
        mode: "onBlur",
        resolver: standardSchemaResolver(formSchema),
        defaultValues: {
            ReceiptName: "",
            ReceiptEmail: "",
            giftMessage: "",
            cardName: "",
            isSaveCardInfo: false,
        },
    })

    async function onSubmit(data: z.infer<IFormSchema>) {
        try {
            if (!stripe || !elements) {
                toast.error("Stripe is not ready. Check your publishable key.")
                return
            }

            const cardElement = elements.getElement(CardElement)

            if (!cardElement) {
                toast.error("Card details are required.")
                return
            }

            if (!params.slug) {
                toast.error("Course was not found.")
                return
            }

            const fetchResponse = await fetch(
                "/api/create-payment-intent",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        courseId: params.slug,
                        email: data.ReceiptEmail,
                        name: data.ReceiptName,
                        giftMessage: data.giftMessage,
                        isSaveCardInfo: data.isSaveCardInfo,
                    })

                }
            );
            const res = await fetchResponse.json() as {
                success: boolean
                clientSecret?: string
                message?: string
            }

            if (!fetchResponse.ok || !res.success || !res.clientSecret) {
                throw new Error(res.message ?? "Unable to start payment.")
            }

            const { error, paymentIntent } = await stripe.confirmCardPayment(
                res.clientSecret,
                {
                    payment_method: {
                        card: cardElement,
                        billing_details: {
                            email: data.ReceiptEmail,
                            name: data.cardName,
                        },
                    },
                }
            )

            if (error) {
                throw new Error(error.message ?? "Payment failed.")
            }

            if (paymentIntent?.status !== "succeeded") {
                toast.info("Payment is being processed.", {
                    description: `Current status: ${paymentIntent?.status ?? "unknown"}`,
                    position: "bottom-right",
                    closeButton: true,
                })
                return
            }
            router.push(`/courses/${params.slug}`)
            toast.success("Payment completed", {
                description: `Stripe confirmed the payment. The webhook will finalize the gift order.`,
                position: "bottom-right",
                closeButton: true,
                classNames: {
                    content: "flex flex-col gap-2",
                },
                style: {
                    "--border-radius": "calc(var(--radius)  + 4px)",
                } as React.CSSProperties,
            })
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Error paying")
        }
    }
    return {
        form, onSubmit
    }
}

export default useSubmitGift
