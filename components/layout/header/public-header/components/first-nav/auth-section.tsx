import { Button } from '@/components/ui/button'
import { Bell, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import BadgeIcon from './badge-icon'

const AuthSection = () => {
    return (
        <div className='flex items-center gap-6'>
            <BadgeIcon Icon={Bell} />
            <Link href={"#"} className='text-gray-900 transition duration-300 hover:text-primary-500'>
                <Heart size={24} />
            </Link>
            <BadgeIcon number={10} Icon={ShoppingCart} />
            <div className='flex items-center gap-3'>
                <Button asChild variant={'primary-100'} size={"md"}  >
                    <Link href={"/auth/register"}>create account</Link>
                </Button>
                <Button asChild variant={'primary/primary'} size={"md"}>
                    <Link href={"/auth/sign-in"}>sign in</Link>
                </Button>
            </div>
        </div>
    )
}

export default AuthSection
