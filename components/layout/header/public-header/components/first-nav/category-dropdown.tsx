"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp, Cpu } from "lucide-react"
import { useState } from "react"

export function CategoryDropdown() {
    const [open, setOpen] = useState(false)

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger
                className={cn(
                    "w-50 h-12  p-5 cursor-pointer border focus:outline-0 hidden md:flex items-center justify-between font-body-large-400",
                    open ? "border-gray-200 text-gray-900" : "border-gray-100 text-gray-700"
                )}
            >
                Browse
                {open ? (
                    <ChevronUp size={16} />
                ) : (
                    <ChevronDown size={16} />
                )}
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-[288px] bg-white ring-0 px-0 flex flex-col gap-1 rounded-none shadow-dropdown border border-gray-100 py-3"
                align="start"
                sideOffset={16}
            >
                <DropdownMenuGroup>
                   <DropdownMenuSub >
                        <DropdownMenuSubTrigger
                            className="capitalize flex items-center gap-3 bg-white text-gray-600 cursor-pointer rounded-none font-body-md-400 transition duration-300 hover:bg-primary-100 hover:text-primary-500"
                        >
                            <Cpu />
                            development
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent
                                sideOffset={12}
                                className="rounded-none w-70 border border-gray-100 ring-0 py-3 px-0 bg-white shadow-dropdown"
                            >
                                <DropdownMenuItem className="px-5 text-gray-600 transition duration-300 hover:text-primary-500 cursor-pointer">Email</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSub >
                        <DropdownMenuSubTrigger
                            className="capitalize flex items-center gap-3 bg-white text-gray-600 cursor-pointer rounded-none font-body-md-400 transition duration-300 hover:bg-primary-100 hover:text-primary-500"
                        >
                            <Cpu />
                            development
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent
                                sideOffset={12}
                                className="rounded-none w-70 border border-gray-100 ring-0 py-3 px-0 bg-white shadow-dropdown"
                            >
                                <DropdownMenuItem className="px-5 text-gray-600 transition duration-300 hover:text-primary-500 cursor-pointer">Email</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
