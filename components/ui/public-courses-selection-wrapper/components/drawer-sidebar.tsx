"use client"
import {
    Sheet,
    SheetContent,
} from '@/components/ui/sheet'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const DrawerSidebar = ({ children, open, onOpenChange }: { children: React.ReactNode, open: boolean, onOpenChange: (_open: boolean) => void }) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        onOpenChange(false)
    }, [pathname, searchParams, onOpenChange])

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side='left'
                className='bg-white lg:hidden data-[side=left]:sm:max-w-75 data-[side=right]:sm:max-w-75'
                showCloseButton
            >
                {children}
            </SheetContent>
        </Sheet>
    )
}

export default DrawerSidebar
