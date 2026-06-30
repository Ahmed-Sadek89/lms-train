"use client"
import useSubmitGift from "../../hooks/use-submit-gift"
import Inputs from "./inputs"
import CompletePaymentBlock from "./complete-payment-block"
import { Elements } from "@stripe/react-stripe-js"
import { stripePromise } from "@/lib/stripe"
import { useCallback, useState } from "react"


function GiftCourseForm() {
    const { form, onSubmit } = useSubmitGift()
    const isSubmitting = form.formState.isSubmitting
    const [cardInvalid, setCardInvalid] = useState(false);
    const handleIsInvalid = useCallback((value: boolean) => setCardInvalid(value), [])
    return (
        <form
            className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-x-[136px] lg:gap-y-0 gap-y-5"
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <Inputs
                handleIsInvalid={handleIsInvalid}
                form={form}
                isSubmitting={isSubmitting}
            />
            <CompletePaymentBlock cardInvalid={cardInvalid} isSubmitting={isSubmitting} />
        </form>

    )
}

export default function FormLayout() {
    return (
        <Elements stripe={stripePromise}>
            <GiftCourseForm />
        </Elements>
    )
}
