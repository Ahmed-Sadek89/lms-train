"use client"
import useSubmitGift from "../../hooks/use-submit-gift"
import Inputs from "./inputs"
import CompletePaymentBlock from "./complete-payment-block"

export default function FormLayout() {
    const { form, onSubmit } = useSubmitGift()
    console.log("ahmed sadke")
    const x = 10
    return (
        <form
            className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-x-[136px] lg:gap-y-0 gap-y-5"
            onSubmit={form.handleSubmit(onSubmit)}
        >
            {/* <Inputs form={form} /> */}
            <CompletePaymentBlock />
        </form>
    )
}
