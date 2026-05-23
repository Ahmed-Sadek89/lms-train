import { Button } from '@/components/ui/button'
import { Bell, Heart, LogOut, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import BadgeIcon from './badge-icon'
import UserDropdown from './user-dropdown'

const AuthSection = () => {
    return (
        <div className='flex items-center gap-3 md:gap-6'>
            <Search size={24} className="block md:hidden text-gray-900" />
            <div className='hidden md:flex items-center gap-6'>
                <BadgeIcon Icon={Bell} />
                <Link href={"#"} className='text-gray-900 transition duration-300 hover:text-primary-500'>
                    <Heart size={24} />
                </Link>
            </div>
            <BadgeIcon number={10} Icon={ShoppingCart} />
            <UserDropdown />
        </div>
    )
}

export default AuthSection
