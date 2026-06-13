"use client"

import { Suspense } from "react"
import MainHeader from "./components/main-header"


const PublicCoursesSelectionWrapper = () => {
    // https://shadcnstudio.com/blocks/dashboard-and-application/dashboard-sidebar
    // dashboard-sidebar 1
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <section className='bg-white'>
                <div className="app-container">
                    <div className="flex flex-col gap-10">
                        <MainHeader />
                        <div className='grid grid-cols-3 lg:grid-cols-4'>
                            <div className='hidden lg:block'>
                                sidebar
                            </div>
                            <div className='col-span-3'>
                                <div>courses</div>
                                <div className='flex w-full justify-center items-center '>
                                    <div>pagination</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Suspense>

    )
}

export default PublicCoursesSelectionWrapper
