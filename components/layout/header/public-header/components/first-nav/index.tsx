import Image from 'next/image'
import Link from 'next/link'
import { CategoryDropdown } from './category-dropdown'

const FirstNav = () => {

    return (
        <nav className='flex items-center justify-center w-full px-8 py-6 bg-white shadow-nav'>
            <section className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-12.5'>
                    <Link href={'/'}>
                        <Image src={"/logo.svg"} alt='logo' width={153} height={40} />
                    </Link>
                    <div className='flex items-center w-full gap-4'>
                        <CategoryDropdown />
                        <span>search</span>
                    </div>
                </div>
                <div>right</div>
            </section>
        </nav>
    )
}

export default FirstNav
