import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '../../field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../../input-group'
import { BadgeCheck, InfoIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IBaseInput<T extends FieldValues> {
    control: Control<T, object, T>,
    name: Path<T>,
    id: string,
    label?: string
    placeholder?: string,
    autoComplete?: string
    icon?: React.ReactNode | null
    type?: "text" | "email" | "number",
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BaseInput = <T extends FieldValues>({
    control,
    name,
    label = "",
    id,
    placeholder = "",
    autoComplete = "on",
    type = "text",
    icon = null,
    onChange,
}: IBaseInput<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={id}
                        className={cn(!fieldState.invalid ? "text-gray-900" : "text-error-500")}>
                        {label}
                    </FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            {...field}
                            id={id}
                            type={type}
                            aria-invalid={fieldState.invalid}
                            placeholder={placeholder}
                            autoComplete={autoComplete}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                field.onChange(e);
                                onChange?.(e);
                            }}
                            value={field.value}
                        />
                        {
                            icon &&
                            <InputGroupAddon className='border-r border-r-gray-100 pr-2 h-full'>
                                {icon}
                            </InputGroupAddon>
                        }
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
            )}
        />
    )
}

export default BaseInput