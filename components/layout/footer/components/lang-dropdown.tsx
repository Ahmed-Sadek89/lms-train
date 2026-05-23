"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function LangDropdown() {
    const [open, setOpen] = useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger
                className={cn(
                    "w-50 h-12  p-5 cursor-pointer border focus:outline-0 text-gray-500 flex items-center justify-between font-body-large-400",
                    open ? "border-gray-100 " : "border-gray-800 "
                )}
            >
                English
                {open ? (
                    <ChevronUp size={16} />
                ) : (
                    <ChevronDown size={16} />
                )}
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-[100px] bg-white ring-0 px-0 flex flex-col gap-1 rounded-none shadow-dropdown border border-gray-100 py-3"
                align="start"
                sideOffset={16}
            >
                <DropdownMenuGroup>

                    <DropdownMenuItem
                        className="capitalize flex items-center gap-3 bg-white text-gray-600 cursor-pointer rounded-none font-body-md-400 transition duration-300 hover:bg-primary-100 hover:text-primary-500"
                    >
                        English
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="capitalize flex items-center gap-3 bg-white text-gray-600 cursor-pointer rounded-none font-body-md-400 transition duration-300 hover:bg-primary-100 hover:text-primary-500"
                    >
                        Arabic
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
