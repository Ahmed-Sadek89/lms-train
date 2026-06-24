"use client"
import Image from "next/image"
import Link from 'next/link'
import AuthSection from "./auth-section"
import NotAuthSection from "./not-auth-section"
import DrawerLinks from "./drawer-links"
import SearchInput from "@/components/ui/inputs/filters/search-input"
import { BaseDropDown } from "@/components/ui/inputs/filters/dropdown"
import { staticDropdown } from "../../utils/fixed-data"

const FirstNav = () => {
    const isAuth = true

    return (
        <nav className='sticky top-0 z-50 flex items-center justify-center w-full px-8 py-6 bg-white shadow-nav'>
            <section className='flex items-center justify-between w-full'>
                <DrawerLinks isAuth={isAuth} />
                <div className='flex items-center gap-12.5'>
                    <Link href={'/'} className="hidden md:flex">
                        <Image
                            src={"/logo.svg"}
                            alt='logo'
                            width={153}
                            height={40}
                            className="h-auto w-auto"
                        />
                    </Link>

                    <div className='flex items-center w-full gap-4'>
                        <Link href={'/'} className="flex md:hidden items-center justify-center">
                            <Image
                                src={"/logo.svg"}
                                alt='logo'
                                width={100}
                                height={30}
                            />
                        </Link>
                        <BaseDropDown
                            extraStyles="hidden md:flex"
                            label="Browse"
                            data={staticDropdown}
                        />
                        <SearchInput
                            placeholder="What do you want learn..."
                        />
                    </div>
                </div>

                {isAuth ? <AuthSection /> : <NotAuthSection />}
            </section>
        </nav>
    )
}
export default FirstNav 
