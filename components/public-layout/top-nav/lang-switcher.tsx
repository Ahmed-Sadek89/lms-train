import {
    Menubar,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ChevronDown } from "lucide-react"

export function LangSwitcher() {
    return (
        <Menubar className="p-0 border-0 outline-0 text-gray-400" >
            <MenubarMenu  >
                <MenubarTrigger className="flex items-center gap-1.5 font-body-medium-400 cursor-pointer" >
                    <span>English</span>
                    <ChevronDown size={12} />
                </MenubarTrigger>
                <MenubarContent className="bg-gray-800 p-0 border-0 rounded-sm outline-0 text-white">
                    <MenubarGroup>
                        <MenubarItem className="hover:bg-gray-900 cursor-pointer">
                            العربية
                        </MenubarItem>
                        <MenubarItem className="hover:bg-gray-900 cursor-pointer">
                            English
                        </MenubarItem>
                    </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
