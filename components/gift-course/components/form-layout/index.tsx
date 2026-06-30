"use client"
import useSubmitGift from "../../hooks/use-submit-gift"
import Inputs from "./inputs"
import CompletePaymentBlock from "./complete-payment-block"
import { Elements } from "@stripe/react-stripe-js"
import { stripePromise } from "@/lib/stripe"


function GiftCourseForm() {
    const { form, onSubmit } = useSubmitGift()

    return (
        <form
            className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-x-[136px] lg:gap-y-0 gap-y-5"
            onSubmit={form.handleSubmit(onSubmit)}
        >
            <Inputs form={form} />
            <CompletePaymentBlock />
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
