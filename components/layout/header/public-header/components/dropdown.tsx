"use client"

import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronUp } from "lucide-react"

export function Dropdown({ elements = [], value = '' }: { elements: string[] | Record<string, string>[], value: string }) {
    const [open, setOpen] = useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="flex cursor-pointer items-center text-gray-600 gap-2 outline-none">
                <span className="font-body-medium-400 uppercase ">
                    {value}
                </span>

                {open ? (
                    <ChevronUp size={16} />
                ) : (
                    <ChevronDown size={16} />
                )}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="rounded-none bg-white p-0 ring-gray-100 shadow-[0px_6px_16px_0px_#0000000F]">
                {elements.map((elem, index) => (
                    <DropdownMenuItem
                        key={index}
                        className="rounded-none px-4 py-1.5 font-body-medium-400 uppercase hover:bg-primary-100 hover:text-gray-900"
                    >
                        {elem as string}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}