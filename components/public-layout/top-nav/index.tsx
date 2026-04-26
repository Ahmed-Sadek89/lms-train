import Link from 'next/link'
import { LangSwitcher } from './lang-switcher'

const Topnav = () => {
    return (
        <div className='hidden md:flex justify-between items-center bg-gray-900 px-8 w-full h-13 text-white'>
            <div className="flex items-center gap-2">
                <Link href="#" className="link link-active">
                    <span>Home</span>
                </Link>
                <Link href="#" className="link">
                    <span>Courses</span>
                </Link>
                <Link href="#" className="link">
                    <span>About</span>
                </Link>
                <Link href="#" className="link">
                    <span>Contact</span>
                </Link>
                <Link href="#" className="link">
                    <span>Become an instructor</span>
                </Link>
            </div>
            <LangSwitcher />
        </div>
    )
}

export default Topnav
