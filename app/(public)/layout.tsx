import PublicFooter from '@/components/layout/footer'
import PublicHeader from '@/components/layout/header/public-header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <PublicHeader />
            <main className='min-h-screen  '>
                {children}
            </main>
            <PublicFooter
                showStats={true}
                showRegisterOffer={true}
            />
        </>
    )
}

export default layout
