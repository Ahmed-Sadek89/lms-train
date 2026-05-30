"use client"
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger
} from '@/components/ui/sheet'
import { BadgeCheckIcon, LogIn, LogOut, Menu, UserPlus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '../../utils/fixed-data'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const DrawerLinks = ({ isAuth }: { isAuth: boolean }) => {
    const pathname = usePathname()

    return (
        <div className='flex lg:hidden flex-wrap gap-2'>
            <Sheet>
                <SheetTrigger asChild>
                    <Menu size={24} className="flex text-gray-900 w-full cursor-pointer"  />
                </SheetTrigger>
                <SheetContent side='left' className='bg-white data-[side=left]:sm:max-w-75 data-[side=right]:sm:max-w-75' showCloseButton={false} >
                    <SheetHeader className=' border-b border-b-gray-100'>
                        <Link href={'/'}  >
                            <Image
                                src={"/logo.svg"}
                                alt='logo'
                                width={153}
                                height={40}
                                className="h-auto w-auto"
                            />
                        </Link>
                    </SheetHeader>
                    <div className='flex flex-col items-start gap-2 px-4 justify-between h-full '>
                        <div className='flex flex-col w-full gap-2'>
                            {
                                navItems.map((item, index) => {
                                    return (
                                        <Link key={index} href={item.link}
                                            className={
                                                cn(
                                                    'w-fulltext-primary-500 p-2 hover:bg-primary-500 hover:text-white font-body-medium-500 transition duration-200',
                                                    item.link === pathname ? 'bg-primary-500 shadow-primary-500 text-white' : ''
                                                )
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className='border-t border-t-gray-100 w-full space-y-3 py-3'>
                            {isAuth ?
                                <Link href={"/profile"} className='flex flex-col items-center justify-center gap-4 p-6'>
                                    <div className='relative w-fit'>
                                        <Avatar className='size-14'>
                                            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' alt='Hallie Richards' />
                                            <AvatarFallback>HR</AvatarFallback>
                                        </Avatar>
                                        <span className='absolute -top-1.5 -right-1.5'>
                                            <span className='sr-only'>Verified</span>
                                            <BadgeCheckIcon className='text-white size-6 fill-primary-500' />
                                        </span>
                                    </div>
                                    <div className='space-y-2 text-center'>
                                        <h4 className='text-lg font-medium'>Matthew Johnson</h4>
                                        <p>A-84862141</p>
                                        <Button asChild variant={'error-500'} size={"sm"} >
                                            <Link href={"/auth/logout"}>
                                                <LogOut size={18} />
                                                Logout
                                            </Link>
                                        </Button>
                                    </div>
                                </Link>

                                : <>
                                    <Button asChild variant={'primary-100'} size={"sm"} >
                                        <Link href={"/auth/register"}>
                                            <UserPlus size={18} />
                                            create account
                                        </Link>
                                    </Button>
                                    <Button asChild variant={'primary/primary'} size={"sm"}>
                                        <Link href={"/auth/sign-in"}>
                                            <LogIn size={18} />
                                            sign in
                                        </Link>
                                    </Button>

                                </>
                            }
                        </div>
                    </div>
                    <SheetFooter className='relative border-t border-t-gray-100 text-center'>
                        <p className='text-gray-500 font-body-medium-400'>
                            © {new Date().getFullYear()} - Developed by <Link className='text-primary-500' href={"https://ahmed-sadek89.github.io/s-a-d-e-k/"} target='_blank'>SADEK</Link>.
                        </p>
                        <p className='text-gray-500 font-body-medium-400'>
                            All rights reserved
                        </p>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default DrawerLinks
