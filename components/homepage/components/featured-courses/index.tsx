import CourseCardDefault from "@/components/ui/cards/course-card-default"

const FeaturedCourses = () => {
    return (
        <section className="lg:absolute left-1/2 w-full max-w-6xl lg:-translate-x-1/2 lg:-translate-y-1/2 px-4">
            <div className="bg-white p-[30px] lg:py-[80px] lg:px-[60px] lg:border border-gray-100 flex flex-col gap-y-[40px]">
                <div className=" flex items-center justify-between flex-col lg:flex-row gap-y-2">
                    <h2 className="text-gray-900 text-center lg:text-left font-heading-2 capitalize">
                        Our feature courses
                    </h2>

                    <div className="lg:flex-1 flex items-center justify-center text-center lg:text-end lg:items-start lg:justify-end">
                        <p className="font-body-medium-400 text-gray-700 lg:w-2/3">
                            Vestibulum sed dolor sed diam mollis maximus vel nec dolor.
                            Donec varius purus et eleifend porta.
                        </p>
                    </div>
                </div>

                <div className="grid gap-[16px] grid-cols-1 md:grid-cols-2">
                    {
                        Array(4).fill(0).map((_, index) => (
                            <CourseCardDefault key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedCourses
