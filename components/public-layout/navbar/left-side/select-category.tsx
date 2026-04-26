import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ChevronDown } from "lucide-react"

export function SelectCategory() {
    return (
        <Menubar className="bg-white p-0 px-4 py-3 border border-gray-100 rounded-none w-50 h-12">
            <MenubarMenu>
                <MenubarTrigger className="flex justify-between items-center w-full font-body-large-400 text-gray-700">
                    <span>Category</span>
                    <ChevronDown size={16} />
                </MenubarTrigger>
                <MenubarContent
                    className="bg-white border border-gray-100 rounded-none w-50"
                    sideOffset={20}
                    align="center"
                >
                    <MenubarGroup >
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            New Window <MenubarShortcut>⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem disabled>New Incognito Window</MenubarItem>
                    </MenubarGroup>
                    <MenubarSeparator />
                    <MenubarGroup>
                        <MenubarSub>
                            <MenubarSubTrigger>Share</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarGroup>
                                    <MenubarItem>Email link</MenubarItem>
                                    <MenubarItem>Messages</MenubarItem>
                                    <MenubarItem>Notes</MenubarItem>
                                </MenubarGroup>
                            </MenubarSubContent>
                        </MenubarSub>
                    </MenubarGroup>
                    <MenubarSeparator />
                    <MenubarGroup>
                        <MenubarItem>
                            Print... <MenubarShortcut>⌘P</MenubarShortcut>
                        </MenubarItem>
                    </MenubarGroup>
                </MenubarContent>
            </MenubarMenu>

        </Menubar>
    )
}
