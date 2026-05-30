"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { UserIcon, SettingsIcon, CreditCardIcon, BellIcon, LogOutIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const listItems = [
    {
        icon: (
            <UserIcon />
        ),
        property: 'Profile'
    },
    {
        icon: (
            <SettingsIcon />
        ),
        property: 'Settings'
    },
    {
        icon: (
            <CreditCardIcon />
        ),
        property: 'Billing'
    },
    {
        icon: (
            <BellIcon />
        ),
        property: 'Notifications'
    },
    {
        icon: (
            <LogOutIcon />
        ),
        property: 'Sign Out'
    }
]

const UserDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex size-[35px] items-center justify-center rounded-full outline-none'>
                <Image
                    src='/images/instructor.jpg'
                    alt='user-auth'
                    width={35}
                    height={35}
                    className='size-[35px] object-cover cursor-pointer rounded-full'
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={16} className='z-100 w-56 ring-0 rounded-none  bg-white'>
                <DropdownMenuLabel className='font-label-small'>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                    {listItems.map((item, index) => (
                        <DropdownMenuItem asChild key={index} className='font-body-medium-500 text-gray-600 flex items-center rounded-none gap-3 transition duration-300 hover:bg-primary-100 cursor-pointer hover:text-primary-500'>
                            <Link href={`index-${index}`}>
                                {item.icon}
                                <span className='  text-popover-foreground'>{item.property}</span>
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
