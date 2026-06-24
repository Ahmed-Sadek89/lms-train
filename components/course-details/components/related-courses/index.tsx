import { Button } from "@/components/ui/button"
import CourseCard from "@/components/ui/cards/course-card"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'

const RelatedCourses = () => {
    return (
        <div className="flex flex-col items-center gap-y-[40px]">
            <div className="flex items-center justify-between flex-wrap gap-2 w-full">
                <h3 className="text-center text-gray-900 font-heading-2">Related Courses</h3>
                <Button asChild variant={"primary-100"} size={"sm"}>
                    <Link href="/courses"  >
                        View all
                        <ArrowRight size={24} />
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px]">
                {
                    Array(4).fill(0).map((_, index) => (
                        <CourseCard key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedCourses
