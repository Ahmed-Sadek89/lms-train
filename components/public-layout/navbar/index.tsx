import React from 'react'
import LeftSide from './left-side'
import RightSide from './right-side'

const Navbar = () => {
    return (
        <header className='top-0 sticky flex justify-center items-center bg-white shadow-nav px-8 py-6 w-full h-24'>
            <div className='flex justify-between items-center w-full'>
                <LeftSide />
                <RightSide />
            </div>
        </header>
    )
}

export default Navbar
