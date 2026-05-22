import CourseCardDefault from "@/components/ui/course-card-default"

const FeaturedCourses = () => {
    return (
        <section className="absolute left-1/2 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 px-4">
            <div className="bg-white p-[80px] border border-gray-100 flex flex-col gap-y-[40px]">
                <div className=" flex items-center justify-between">
                    <h2 className="text-gray-900 font-heading-2 capitalize">
                        Our feature courses
                    </h2>

                    <div className="flex-1 flex items-start justify-end">
                        <p className="font-body-medium-400 text-gray-700 w-2/3">
                            Vestibulum sed dolor sed diam mollis maximus vel nec dolor.
                            Donec varius purus et eleifend porta.
                        </p>
                    </div>
                </div>

                <div className="grid gap-[16px] md:grid-cols-2">
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
