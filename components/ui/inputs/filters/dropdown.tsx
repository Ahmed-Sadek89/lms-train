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
import { ChevronDown, ChevronUp, LucideProps } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface IDropDownSubElement {
    subValue: string
    href?: string
}
interface IDropDownElement {
    value: string
    href?: string
    Icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    subValues?: IDropDownSubElement[]
}

interface IBaseDropDown {
    extraStyles?: string
    label?: string
    data?: IDropDownElement[]
}

export function BaseDropDown({ extraStyles="", label, data = [] }: IBaseDropDown) {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleNavigate = (href: string) => {
        if (href === "#") return
        router.push(href, href.startsWith("?") ? { scroll: false } : undefined)
    }

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger
                className={cn(
                    "w-50 h-12  p-5 cursor-pointer border focus:outline-0 flex items-center justify-between font-body-large-400",
                    open ? "border-gray-200 text-gray-900" : "border-gray-100 text-gray-700"    ,
                    extraStyles

                )}
            >
                {label}
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
                    {data.map((item, index) => {
                        const hasSubValues = item.subValues && item.subValues.length > 0

                        if (!hasSubValues) {
                            return (
                                <DropdownMenuItem
                                    onClick={() => handleNavigate(item.href || "#")}
                                    key={index}
                                    className="capitalize flex items-center gap-3 px-3 py-3 bg-white text-gray-600 cursor-pointer rounded-none font-body-md-400 transition duration-300 hover:bg-primary-100 hover:text-primary-500"
                                >
                                    {item.Icon && <item.Icon size={16} />}
                                    {item.value}
                                </DropdownMenuItem>
                            )
                        }
                        return (
                            <DropdownMenuSub key={item.value}>
                                <DropdownMenuSubTrigger
                                    className="capitalize flex items-center gap-3 bg-white text-gray-600 cursor-pointer rounded-none font-body-md-400 transition duration-300 hover:bg-primary-100 hover:text-primary-500"
                                >
                                    {item.Icon && <item.Icon size={16} />}
                                    {item.value}
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent
                                        sideOffset={12}
                                        className="rounded-none w-70 border border-gray-100 ring-0 py-3 px-0 bg-white shadow-dropdown"
                                    >
                                        {item.subValues?.map((elem) => (
                                            <DropdownMenuItem
                                                key={elem.subValue}
                                                onClick={() => handleNavigate(elem.href || "#")}
                                                className="px-5 py-3 text-gray-600 transition duration-300 hover:text-primary-500 cursor-pointer"
                                            >
                                                {elem.subValue}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        )
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
