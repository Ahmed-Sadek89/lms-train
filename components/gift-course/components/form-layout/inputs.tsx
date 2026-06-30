import { FieldGroup } from "@/components/ui/field"
import BaseInput from "@/components/ui/inputs/forms/base-input"
import BaseTextarea from "@/components/ui/inputs/forms/base-textarea"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import CheckboxInput from "@/components/ui/inputs/forms/checkbox-input"
import { CardElement } from "@stripe/react-stripe-js"

interface IInputs<T extends FieldValues> {
    form: UseFormReturn<T, object, T>,
}
const Inputs = <T extends FieldValues>({ form }: IInputs<T>) => {
    const { control } = form;

    return (
        <div className='flex flex-col gap-y-[40px] text-gray-900'>
            <h1 className="font-heading-3">Gift Course</h1>
            <div className="flex flex-col gap-y-[24px]">
                <h4 className="font-body-xl-500">Recipient&apos;s Information</h4>
                <div className="flex flex-col gap-y-[18px]">
                    <FieldGroup>
                        <BaseInput
                            control={control}
                            id="ReceiptName"
                            name={"ReceiptName" as Path<T>}
                            label="Receipt name"
                            placeholder="ex:john doe"
                        />
                        <BaseInput
                            control={control}
                            id="ReceiptEmail"
                            name={"ReceiptEmail" as Path<T>}
                            label="Receipt email"
                            placeholder="ex:john-doe12@example.com"
                        />
                        <BaseTextarea
                            control={control}
                            id="giftMessage"
                            name={"giftMessage" as Path<T>}
                            label="Gift message"
                            placeholder="Add your personal message here... "
                            rows={3}
                        />
                    </FieldGroup>
                </div>
            </div>
            <div className="flex flex-col gap-y-[24px]">
                <h4 className="font-body-xl-500">Payment Method</h4>
                <div className="flex flex-col gap-y-[18px]">
                    <FieldGroup>
                        <BaseInput
                            control={control}
                            id="cardName"
                            name={"cardName" as Path<T>}
                            label="Name"
                            placeholder="ex:Ahmed Mohamed Ahmed"
                        />
                        <div className="flex flex-col gap-y-2">
                            <label className="font-body-small-400 text-gray-900" htmlFor="card-element">
                                Card details
                            </label>
                            <div
                                id="card-element"
                                className="min-h-11 rounded-md border border-gray-100 bg-white px-3 py-3"
                            >
                                <CardElement
                                    options={{
                                        hidePostalCode: true,
                                        style: {
                                            base: {
                                                color: "#1d2026",
                                                fontFamily: "inherit",
                                                fontSize: "16px",
                                                "::placeholder": {
                                                    color: "#8c94a3",
                                                },
                                            },
                                            invalid: {
                                                color: "#dc2626",
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <CheckboxInput
                            control={control}
                            id="isSaveCardInfo"
                            name={"isSaveCardInfo" as Path<T>}
                            label="Remember this card, save it on my card list"
                        />
                    </FieldGroup>
                </div>
            </div>
        </div>
    )
}

export default Inputs
