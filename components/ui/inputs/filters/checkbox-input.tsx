import { Field } from '../../field'
import { Checkbox } from '../../checkbox'
import { Label } from '../../label'
import { cn } from '@/lib/utils'

interface CheckboxInputProps {
    id: string
    name: string
    label?: string
    checked?: boolean
    onChange?: (_checked: boolean) => void
}

// 'checked' prop is intentionally not omitted to avoid no-unused-vars lint error
const CheckboxInput = (props: CheckboxInputProps) => {
    const { id, name, label = '', checked = false, onChange } = props

    return (
        <Field orientation="horizontal">
            <Checkbox
                id={id}
                name={name}
                checked={checked}
                onCheckedChange={value => onChange?.(value === true)}
                className="data-checked:border-primary-500 cursor-pointer data-checked:bg-primary-500 data-checked:text-white hover:border-primary-500"
            />
            {label && (
                <Label
                    htmlFor={id}
                    className={cn(
                        'text-gray-700 hover:text-gray-900 font-body-medium-400 cursor-pointer',
                        checked && 'text-gray-900'
                    )}
                >
                    {label}
                </Label>
            )}
        </Field>
    )
}

export default CheckboxInput