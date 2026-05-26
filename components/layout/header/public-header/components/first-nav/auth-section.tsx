import { Bell, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import BadgeIcon from './badge-icon'
import UserDropdown from './user-dropdown'
import SearchPopover from './search-popover'

const AuthSection = () => {
    return (
        <div className='flex items-center gap-3 md:gap-6'>
            <SearchPopover />
            <div className='hidden md:flex items-center gap-6'>
                <BadgeIcon Icon={Bell} />
                <Link href={"#"} className='text-gray-900 transition duration-300 hover:text-primary-500'>
                    <Heart size={24} />
                </Link>
                <BadgeIcon number={10} Icon={ShoppingCart} />
            </div>
            <UserDropdown />
        </div>
    )
}

export default AuthSection
