"use client"

import { Suspense, useState } from "react"
import MainHeader from "./components/main-header"
import { cn } from "@/lib/utils"
import CourseCard from "../cards/course-card"
import MainSidebar from "./components/main-sidebar"
import DrawerSidebar from "./components/drawer-sidebar"
import MainPagination from "../main-pagination"

const PublicCoursesSelectionWrapper = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleOpenFilter = () => {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            setSidebarOpen((prev) => !prev)
            return
        }
        setDrawerOpen((prev) => !prev)
    }

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <section className='bg-white'>
                    <div className="app-container">
                        <div className="flex flex-col gap-10">
                            <MainHeader handleOpenFilter={handleOpenFilter} />
                            <div
                                className={cn(
                                    "grid grid-cols-1 gap-6 lg:transition-[grid-template-columns] lg:duration-300 lg:ease-in-out",
                                    sidebarOpen
                                        ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]"
                                        : "lg:grid-cols-[0fr_1fr]"
                                )}
                            >
                                <div className="hidden min-w-0 overflow-hidden lg:block">
                                    <div
                                        className={cn(
                                            "transition-transform duration-300 ease-in-out",
                                            sidebarOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
                                        )}
                                    >
                                        <MainSidebar />
                                    </div>
                                </div>
                                <div className="min-w-0 space-y-6">
                                    <div className={cn("grid gap-[40px] grid-cols-1 md:grid-cols-2", sidebarOpen ? "lg:grid-cols-3" : "lg:grid-cols-4")}>
                                        {
                                            Array.from({ length: 12 }).map((_, index) => (
                                                <CourseCard key={index} />
                                            ))
                                        }
                                    </div> 
                                </div>
                            </div>
                            <div className='flex w-full justify-center items-center '>
                                <MainPagination />
                            </div>
                        </div>
                    </div>
                </section>
                <DrawerSidebar open={drawerOpen} onOpenChange={setDrawerOpen}>
                    <MainSidebar />
                </DrawerSidebar>
            </Suspense>
        </>
    )
}

export default PublicCoursesSelectionWrapper
