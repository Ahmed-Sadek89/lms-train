import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '../../field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../../input-group'
import { BadgeCheck, CreditCard, InfoIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatCardNumber } from '@/utils/formate-payment-info'

interface ICardNumberInput<T extends FieldValues> {
    control: Control<T, object, T>,
    name: Path<T>,
    id: string,
    label?: string,
    placeholder?: string,
    autoComplete?: string,
}

const CardNumberInput = <T extends FieldValues>({
    control,
    name,
    label = "",
    id,
    placeholder = "1234 5678 9012 3456",
    autoComplete = "cc-number",
}: ICardNumberInput<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => {
                const { value, onChange, ...restField } = field

                return (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={id}
                            className={cn(!fieldState.invalid ? "text-gray-900" : "text-error-500")}>
                            {label}
                        </FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                {...restField}
                                id={id}
                                inputMode="numeric"
                                type="text"
                                aria-invalid={fieldState.invalid}
                                placeholder={placeholder}
                                autoComplete={autoComplete}
                                maxLength={19}
                                value={formatCardNumber(value || '')}
                                onChange={e => {
                                    const rawValue = e.target.value.replace(/\D/g, "").slice(0, 16);
                                    onChange(rawValue)
                                }}
                            />
                            <InputGroupAddon className='border-r border-r-gray-100 pr-2 '>
                                <CreditCard size={40} className="text-white fill-primary-400" />
                            </InputGroupAddon>
                            {fieldState.invalid ? (
                                <InputGroupAddon align="inline-end">
                                    <InfoIcon size={24} className='fill-error-500 text-white' />
                                </InputGroupAddon>
                            ) : (
                                fieldState.isDirty && fieldState.isTouched && (
                                    <InputGroupAddon align="inline-end">
                                        <BadgeCheck size={24} className='fill-success-500 text-white' />
                                    </InputGroupAddon>
                                )
                            )}
                        </InputGroup>
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )
            }}
        />
    )
}

export default CardNumberInput