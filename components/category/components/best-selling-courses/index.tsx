import CourseCard from '@/components/ui/cards/course-card'

const BestSellingCourses = () => {
    return (
        <section className='bg-white'>
            <div className="app-container pt-[100px]">
                <div className="flex flex-col items-center gap-6">
                    <h2 className='text-gray-900 font-heading-2 text-center'>
                        Best selling courses in Web Development
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-5'>
                        {
                            [1, 2, 3, 4, 5].map((item) => (
                                <CourseCard key={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestSellingCourses
