"use client"
import { currencies, languages, navItems } from '../../utils/fixed-data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Dropdown } from './dropdown'

const Topnav = () => {
    const pathname = usePathname()

    return (
        <section className='bg-gray-900 h-13 px-8 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                {
                    navItems.map((item, index) => {
                        return (
                            <Link key={index} href={item.link}
                                className={
                                    cn(
                                        'bg-gray-900 text-gray-500 p-4 hover:text-white font-body-medium-500 transition duration-200',
                                        item.link === pathname ? 'shadow-[inset_0px_2px_0px_0px_#FF6636]' : ''
                                    )
                                }
                            >
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
            <div className='flex items-center gap-6'>
                <Dropdown
                    elements={currencies}
                    value='usd'
                />
                <Dropdown
                    elements={languages}
                    value='english'
                />
            </div>
        </section>
    )
}

export default Topnav
