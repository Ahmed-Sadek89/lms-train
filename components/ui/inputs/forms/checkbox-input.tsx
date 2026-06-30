import { Field, FieldError } from '../../field'
import { Checkbox } from '../../checkbox'
import { Label } from '../../label'
import { cn } from '@/lib/utils'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

interface CheckboxInputProps<T extends FieldValues> {
    id: string
    name: Path<T>,
    control: Control<T, object, T>,
    label?: string
    checked?: boolean
    onChange?: (_checked: boolean) => void
    disabled?: boolean
}

const CheckboxInput = <T extends FieldValues>({
    id,
    control,
    name,
    label = '',
    checked,
    onChange,
    disabled = false
}: CheckboxInputProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <div className='flex flex-col gap-y-1'>
                    <Field data-invalid={fieldState.invalid} orientation="horizontal">
                        <Checkbox
                            id={id}
                            disabled={disabled}
                            name={name}
                            checked={typeof checked !== "undefined" ? checked : field.value}
                            onCheckedChange={(value) => {
                                field.onChange(value === true);
                                onChange?.(value === true);
                            }}
                            className='data-checked:border-primary-500 cursor-pointer data-checked:bg-primary-500 data-checked:text-white hover:border-primary-500'
                        />
                        {label && (
                            <Label
                                htmlFor={id}
                                className={cn(
                                    'text-gray-700 hover:text-gray-900 font-body-medium-400 cursor-pointer',
                                    (typeof checked !== "undefined" ? checked : field.value) && 'text-gray-900'
                                )}
                            >
                                {label}
                            </Label>
                        )}
                    </Field>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </div>
            )}
        />
    )
}

export default CheckboxInput