import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'
import { Field, FieldDescription, FieldError, FieldLabel } from '../../field'
import { Textarea } from '../../textarea'
import { cn } from '@/lib/utils'

interface IBaseTextarea<T extends FieldValues> {
    control: Control<T, object, T>,
    name: FieldPath<T>,
    id: string,
    label?: string
    placeholder?: string,
    rows?: number
    fieldDescription?: string
}
const BaseTextarea = <T extends FieldValues>({
    control,
    name,
    label = "",
    id,
    placeholder = "",
    rows = 6,
    fieldDescription = "",
}: IBaseTextarea<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={id} 
                    className={cn(!fieldState.invalid?"text-gray-900":"text-error-500")}>
                        {label}
                    </FieldLabel>
                    <Textarea
                        {...field}
                        id={id}
                        placeholder={placeholder}
                        rows={rows}
                        aria-invalid={fieldState.invalid}
                    />
                    {
                        fieldDescription &&
                        <FieldDescription>
                            {fieldDescription}
                        </FieldDescription>
                    }
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
            )}
        />
    )
}

export default BaseTextarea