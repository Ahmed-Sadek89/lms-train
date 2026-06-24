import Image from "next/image"
import { Badge } from "../../badge"
import { BarChart, Check, Clock, Heart, ShoppingBag, Star, User } from "lucide-react"
import { Button } from "../../button"
import Link from "next/link"

const CourseDetails = () => {
    return (
        <div
            className="w-[433px] py-3 bg-white shadow-course-details-card border border-gray-100 details">
            <div className="flex flex-col gap-y-[20px]">
                <div className="flex flex-col px-4 gap-[16px] w-full items-start ">
                    <Badge variant="secondary-100">Development</Badge>
                    <h4 className="font-body-xl-500 text-gray-900">
                        2021 Complete Python Bootcamp From Zero to Hero in Python
                    </h4>
                    <div className="flex items-center w-full justify-between">
                        <div className="flex items-center gap-x-[12px]">
                            <Image
                                src="/images/instructor.jpg"
                                alt="instructor"
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                            />
                            <div className="flex flex-col gap-y-1 font-body-medium-400">
                                <h6 className="text-gray-500">Course by</h6>
                                <p className="text-gray-900">Kevin Gilbert</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[4px]">
                            <Star className="text-warning-500 fill-warning-500" size={16} />

                            <div className="flex items-center gap-x-[6px]">
                                <span className="font-body-large-500 text-gray-900">
                                    5.0
                                </span>
                                <span className="text-gray-600 font-body-medium-400">
                                    (357,914)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 flex w-full items-center justify-between">
                    <div className="flex items-center gap-x-[6px]">
                        <User size={20} className="text-secondary-500" />
                        <p className="font-body-medium-600">
                            <span className="text-gray-700 font-bold">265.7K </span>
                            <span className="text-gray-400 font-light">students</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-x-[6px]">
                        <BarChart size={20} className="text-error-500" />
                        <p className="font-body-medium-400 text-gray-700">Beginner</p>
                    </div>
                    <div className="flex items-center gap-x-[6px]">
                        <Clock size={20} className="text-success-500" />
                        <p className="font-body-medium-400 text-gray-700">6 hour</p>
                    </div>
                </div>
                <div className="px-4 w-full flex items-center justify-between">
                    <div className="flex items-center gap-x-[10px]">
                        <div className="flex items-center gap-x-[4px]">
                            <h4 className="text-gray-900 font-body-xxxl-400">$14.00</h4>
                            <span className="text-gray-500 font-400 text-base line-through">$26.00</span>
                        </div>
                        <Badge variant="primary-100" className="text-primary-500 font-label-large">56% off</Badge>
                    </div>
                    <Button variant={"primary-100"} size={"sm"}>
                        <Heart size={24} className="text-primary-500" />
                    </Button>
                </div>
                <ul className="p-3 border-y border-y-gray-100 flex flex-col items-start gap-y-[8px]">
                    <li className="uppercase text-gray-900 font-label-medium">What you’ll learn</li>
                    {Array(3).fill(0).map((_, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-x-[8px]"
                        >
                            <Check size={24} className="text-success-500 " />
                            <p className="text-gray-600 font-body-medium-400">
                                Learn to use Python professionally, learning both Python 2 and Python 3!
                            </p>
                        </li>
                    ))}
                </ul>
                <div className="p-3 flex flex-col gap-y-[12px]">
                    <Button size={"md"} variant={"primary-500"}>
                        <ShoppingBag size={24} className="text-white" />
                        Add to cart
                    </Button>
                    <Button size={"md"} variant={"primary-100"} asChild>
                        <Link
                            href="/courses/course-slug"
                        >
                            Course Detail
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
