"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const DrawerLinks = () => {
    return (
        <div className='flex lg:hidden flex-wrap gap-2'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        type="button"
                        variant="outline"
                        className="capitalize"
                        aria-label="Open navigation menu"
                    >
                        <Menu size={24} className="flex text-gray-900" />
                    </Button>
                </SheetTrigger>
                <SheetContent side='left' className='bg-white'>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
                    </SheetHeader>
                    <div className='grid flex-1 auto-rows-min gap-6 px-4'>
                        <div className='grid gap-3'>
                            <Label htmlFor='sheet-demo-name'>Name</Label>
                            <Input id='sheet-demo-name' defaultValue='Pedro Duarte' />
                        </div>
                        <div className='grid gap-3'>
                            <Label htmlFor='sheet-demo-username'>Username</Label>
                            <Input id='sheet-demo-username' defaultValue='@peduarte' />
                        </div>
                    </div>
                    <SheetFooter>
                        <Button type='submit'>Save changes</Button>
                        <SheetClose asChild>
                            <Button variant='outline'>Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default DrawerLinks
