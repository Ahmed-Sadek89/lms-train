import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SelectCategory } from './select-category'

const LeftSide = () => {
    return (
        <div className='flex items-center gap-12.5'>
            <Link href="/">
                <Image
                    src={"/images/logo.svg"}
                    alt='home'
                    width={153}
                    height={40}
                />
            </Link>
            <SelectCategory />
        </div>
    )
}

export default LeftSide
