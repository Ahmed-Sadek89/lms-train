import Link from 'next/link'
import { LangDropdown } from './lang-dropdown'

const Copyright = () => {
    return (
        <section className='app-container py-[24px]'>
            <div className='flex w-full items-center justify-between flex-col gap-y-6 lg:flex-row'>
                <p className='text-gray-500 font-body-medium-400'>
                    © {new Date().getFullYear()} - Developed by <Link className='text-white' href={"https://ahmed-sadek89.github.io/s-a-d-e-k/"} target='_blank'>SADEK</Link>.  All rights reserved
                </p>
                <LangDropdown />
            </div>
            
        </section>
    )
}

export default Copyright
