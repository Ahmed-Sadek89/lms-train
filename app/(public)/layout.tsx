import Navbar from '@/components/public-layout/navbar'
import Topnav from '@/components/public-layout/top-nav'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Topnav />
            <Navbar />
            <main className='min-h-screen'>
                {children}
            </main>
            footer
        </>
    )
}

export default layout
