import { Button } from '@/components/ui/button'
import { LogIn, ShoppingCart, UserPlus } from 'lucide-react'
import Link from 'next/link'
import BadgeIcon from './badge-icon'
import SearchPopover from './search-popover'

const NotAuthSection = () => {
    return (
        <div className='flex items-center gap-6'>
            <div className='flex items-center gap-x-2'>
                <SearchPopover />
                <BadgeIcon number={10} Icon={ShoppingCart} />
            </div>
            <div className='hidden md:flex items-center gap-3'>
                <Button asChild variant={'primary-100'} size={"md"} className='hidden lg:block' >
                    <Link href={"/auth/register"}>
                        create account
                    </Link>
                </Button>
                <Link href={"/auth/register"} className='block lg:hidden text-primary-500 hover:text-primary-600' >
                    <UserPlus size={24} />
                </Link>
                <Button asChild variant={'primary/primary'} size={"md"} className='hidden lg:block'>
                    <Link href={"/auth/sign-in"}>sign in</Link>
                </Button>
                <Link href={"/auth/sign-in"} className='block lg:hidden text-primary-500 hover:text-primary-600' >
                    <LogIn size={24} />
                </Link>
            </div>
        </div>
    )
}

export default NotAuthSection
