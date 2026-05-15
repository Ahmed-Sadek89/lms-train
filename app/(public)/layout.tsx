import PublicFooter from '@/components/layout/footer'
import PublicHeader from '@/components/layout/footer'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <PublicHeader />
            <main className='min-h-screen'>
                {children}
            </main>
            <PublicFooter />
        </>
    )
}

export default layout
