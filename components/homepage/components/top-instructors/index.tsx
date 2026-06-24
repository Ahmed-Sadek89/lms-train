import { Button } from "@/components/ui/button"
import InstructorCard from "@/components/ui/cards/instructor-card"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'

const TopInstructors = () => {
    return (
        <section className="lg:absolute left-1/2 w-full lg:max-w-6xl lg:-translate-x-1/2 lg:-translate-y-1/2 px-4">
            <div className="bg-white p-[30px] lg:py-[80px] lg:px-[60px] lg:border lg:border-gray-100 flex flex-col items-center gap-y-[40px]">
                <h2 className="text-gray-900 text-center font-heading-2 capitalize">
                    Top instructor of the month
                </h2>
                <div className="grid gap-[16px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        Array(4).fill(0).map((_, index) => (
                            <InstructorCard key={index} />
                        ))
                    }
                </div>
                <div className='flex items-center lg:gap-[8px] flex-col lg:flex-row text-center'>
                    <span className='text-gray-600 text-body-medium-400'>
                        Thousands of students waiting for a instructor. Start teaching & earning now!.
                    </span>
                    <Button asChild size='icon-right' variant="link-primary-500" className="p-0">
                        <Link href="/instructors"  >
                            Browse Instructors <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default TopInstructors
