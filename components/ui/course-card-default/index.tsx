import Image from "next/image";
import { Badge } from "../badge";
import { BarChart, Clock, Star, User } from "lucide-react";
import Link from "next/link";

export default function CourseCardDefault() {
    return (
        <Link
            href={"/course/course-slug"}
            className="flex items-center transition max-h-[160px] delay-300 group hover:shadow-category-card hover:scale-105 border border-gray-100 bg-white"
        >
            <Image
                src="/images/course-card-default.png"
                alt="course card"
                width={140}
                height={140}
                className="  h-full object-cover"
            />

            <div className="flex flex-col py-[16px] flex-1  w-full gap-[10px]">
                <div className="flex w-full px-[16px] items-center justify-between">
                    <Badge className="font-label-small" variant={"secondary-100"}>HEALTH & FITNESS</Badge>

                    <div className="flex items-center gap-x-[4px]">
                        <h4 className="text-gray-900 font-body-xl-400">$14.00</h4>
                        <span className="text-gray-500 font-400 text-sm line-through">$26.00</span>
                    </div>
                </div>

                <h4 className="text-gray-900 px-[16px] font-body-large-500 transition duration-300 group-hover:text-primary-500">
                    Investing In Stocks The ...
                </h4>

                <div className="flex px-[16px] items-center w-full justify-between">
                    <div className="flex items-center gap-x-[12px]">
                        <Image
                            src="/images/instructor.jpg"
                            alt="instructor"
                            width={28}
                            height={28}
                            className="rounded-full object-cover"
                        />
                        <p className="text-gray-700 font-body-medium-400">Kevin Gilbert</p>
                    </div>
                    <div className="flex items-center gap-[4px]">
                        <Star className="text-warning-500 fill-warning-500" size={16} />

                        <div className="flex items-center ">
                            <span className="font-body-medium-500 text-gray-900">
                                5.0
                            </span>
                            <span className="text-gray-600 font-body-medium-400">
                                (357,914)
                            </span>
                        </div>
                    </div>
                </div>

                <div className="px-4 flex w-full items-center justify-between border-t border-t-gray-100 pt-[12px]">
                    <div className="flex items-center gap-x-[6px]">
                        <User size={16} className="text-secondary-500" />
                        <p className="font-body-tiny-500">
                            <span className="text-gray-700  ">265.7K </span>
                            <span className="text-gray-400  ">students</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-x-[6px]">
                        <BarChart size={16} className="text-error-500" />
                        <p className="font-body-tiny-400 text-gray-700">Beginner</p>
                    </div>
                    <div className="flex items-center gap-x-[6px]">
                        <Clock size={16} className="text-success-500" />
                        <p className="font-body-tiny-400 text-gray-700">6 hour</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}