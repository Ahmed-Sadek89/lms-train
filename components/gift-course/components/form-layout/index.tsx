"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldGroup,
} from "@/components/ui/field"
import BaseInput from "@/components/ui/inputs/forms/base-input"
import BaseTextarea from "@/components/ui/inputs/forms/base-textarea"
import useSubmitGift from "../../hooks/use-submit-gift"

export default function FormLayout() {
    const {form, onSubmit} = useSubmitGift()

    return (
        <Card  >
            <CardHeader>
                <CardTitle>Bug Report</CardTitle>
                <CardDescription>
                    Help us improve by reporting bugs you encounter.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <BaseInput
                            control={form.control}
                            id="title"
                            name="title"
                            label="Full name"
                            placeholder="Full name"
                        />
                        <BaseTextarea
                            control={form.control}
                            id="description"
                            name="description"
                            label="description"
                            placeholder="description"
                            rows={3}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                    </Button>
                    <Button type="submit" form="form-rhf-demo">
                        Submit
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    )
}
