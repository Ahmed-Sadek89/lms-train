import { Button } from "@/components/ui/button"
import CourseCard from "@/components/ui/cards/course-card"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'

const RecentlyAddedCourse = () => {
    return (
        <section className='bg-white app-container lg:pt-[350px]'>
            <div className="flex flex-col items-center gap-y-[40px]">
                <h3 className="text-center text-gray-800 font-heading-2">Recently added courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px]">
                    {
                        Array(4).fill(0).map((_, index) => (
                            <CourseCard key={index} />
                        ))
                    }
                </div>
                <div className="flex items-center justify-center w-full">
                    <Button asChild variant={"primary-100"} size={"md"}>
                        <Link href="/courses"  >
                            Browse all Course
                            <ArrowRight size={24} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default RecentlyAddedCourse
