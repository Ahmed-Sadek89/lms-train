import CourseCard from '@/components/ui/course-card'
import React from 'react'

const BestSellingCourses = () => {
    return (
        <section className='bg-gray-50'>
            <div className='app-container pb-[320px] flex flex-col items-center gap-[40px]'>
                <h2 className='font-heading-2 text-gray-900'>Best selling courses</h2>
                <div className='grid grid-cols-4 items-start gap-[25px]'>
                    {
                        Array(8).fill(0).map((_, index) => (
                            <CourseCard key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BestSellingCourses
