import Image from 'next/image'
import Link from 'next/link'
import { CategoryDropdown } from './category-dropdown'
import SearchInput from './search-input'
import NotAuthSection from './not-auth-section'
import AuthSection from './auth-section'

const FirstNav = () => {
    const isAuth = true
    return (
        <nav className='flex items-center justify-center w-full px-8 py-6 bg-white shadow-nav'>
            <section className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-12.5'>
                    <Link href={'/'}>
                        <Image src={"/logo.svg"} alt='logo' width={153} height={40} />
                    </Link>
                    <div className='flex items-center w-full gap-4'>
                        <CategoryDropdown />
                        <SearchInput />
                    </div>
                </div>
                {isAuth ? <AuthSection /> : <NotAuthSection />}
            </section>
        </nav>
    )
}

export default FirstNav
