import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { UserIcon, SettingsIcon, CreditCardIcon, BellIcon, LogOutIcon } from 'lucide-react'

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
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png' alt='Hallie Richards' />
                    <AvatarFallback className='text-xs'>HR</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                    {listItems.map((item, index) => (
                        <DropdownMenuItem key={index} className='*:[svg]:text-muted-foreground'>
                            {item.icon}
                            <span className='text-popover-foreground'>{item.property}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
