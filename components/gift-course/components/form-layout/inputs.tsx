import { FieldGroup } from "@/components/ui/field"
import BaseInput from "@/components/ui/inputs/forms/base-input"
import BaseTextarea from "@/components/ui/inputs/forms/base-textarea"
import CardExpirationInput from "@/components/ui/inputs/forms/card-expiration-input"
import CardNumberInput from "@/components/ui/inputs/forms/card-number-input"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"
import UserCardsSelection from "./user-cards-selection"
import { useCallback, useState } from "react"
import { ICardSelection } from "@/types/payment"
import CheckboxInput from "@/components/ui/inputs/forms/checkbox-input"

interface IInputs<T extends FieldValues> {
    form: UseFormReturn<T, object, T>,
}
const Inputs = <T extends FieldValues>({ form }: IInputs<T>) => {
    const { control, setValue } = form;
    const [cardSelect, setCardSelect] = useState<ICardSelection>({
        id: "",
        cardName: "",
        cardNumber: "",
        CVC: "",
        expiration: ""
    })
    const handleCardSelection = useCallback((payload: ICardSelection) => {
        setCardSelect(payload)
        setValue("cardNumber" as Path<T>, payload?.cardNumber as T[Path<T>])
        setValue("cardName" as Path<T>, payload?.cardName as T[Path<T>])
        setValue("cvc" as Path<T>, payload?.CVC as T[Path<T>])
        setValue("expiration" as Path<T>, payload?.expiration as T[Path<T>])
    }, [setValue])

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
                <UserCardsSelection
                    cardSelect={cardSelect}
                    handleCardSelection={handleCardSelection}
                />
                <div className="flex flex-col gap-y-[18px]">
                    <FieldGroup>
                        <BaseInput
                            control={control}
                            id="cardName"
                            name={"cardName" as Path<T>}
                            label="Name"
                            placeholder="ex:Ahmed Mohamed Ahmed"
                        />
                        <CardNumberInput
                            control={control}
                            id="cardNumber"
                            name={"cardNumber" as Path<T>}
                            label="Card Number"
                            placeholder="**** **** **** ****"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-2">
                            <CardExpirationInput
                                control={control}
                                id="expiration"
                                name={"expiration" as Path<T>}
                                label="Expiration date"
                                placeholder="ex:01/31"
                            />
                            <BaseInput
                                control={control}
                                id="cvc"
                                name={"cvc" as Path<T>}
                                label="CVC"
                                placeholder="ex:123"
                                onChange={e => {
                                    const rawValue = e.target.value.replace(/\D/g, '').slice(0, 3)
                                    setValue("cvc" as Path<T>, rawValue as T[Path<T>]);
                                }}
                            />
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