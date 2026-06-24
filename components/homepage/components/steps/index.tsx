import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'

const Steps = () => {
    return (
        <section className='bg-gray-50 w-full'>
            <div className="app-container lg:pb-[360px]">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    <div className="relative p-[40px] h-[270px] w-full bg-instructor-section ">
                        <div className="flex flex-col items-start gap-[12px]">
                            <h3 className="text-white font-heading-3">Become an instructor</h3>
                            <p className="text-white lg:w-[250px] font-body-medium-400">
                                Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
                            </p>
                            <Button asChild variant={"white"} size="md">
                                <Link href="/become-instructor">
                                    Start teaching
                                    <ArrowRight size={24} />
                                </Link>
                            </Button>
                        </div>
                        <div
                            className="hidden md:block translate-y-0 absolute size-[200px] right-0  bottom-0 bg-[url('/images/instructor-stat.png')] bg-contain bg-no-repeat bg-center"
                        />
                    </div>
                    <div className="h-[270px] w-full p-[40px] bg-white flex flex-col gap-[27px]">
                        <h4 className="text-gray-900 font-body-xl-500">
                            Your teaching & earning steps
                        </h4>
                        <div className="grid grid-cols-2 items-start gap-[20px]">
                            {
                                Array(4).fill(0).map((_, index) => (
                                    <div key={index} className="flex items-center gap-[10px]">
                                        <div className="h-[52px] min-h-[52px] min-w-[52px] w-[52px] rounded-full py-[11px] bg-secondary-100 text-secondary-500 flex items-center   justify-center">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-900 font-body-small-400  ">
                                            Apply to become instructor
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps
