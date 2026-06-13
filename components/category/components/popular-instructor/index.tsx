import InstructorCard from '@/components/ui/cards/instructor-card'
import React from 'react'

const PopularInstructor = () => {
    return (
        <section className='bg-gray-50'>
            <div className="app-container">
                <div className="flex flex-col items-center justify-center gap-[25px]">
                    <h2 className="text-gray-900 text-center font-heading-2 capitalize">
                        Popular instructor in Web Development
                    </h2>
                    <div className="grid gap-[16px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
                        {
                            Array(5).fill(0).map((_, index) => (
                                <InstructorCard key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularInstructor
