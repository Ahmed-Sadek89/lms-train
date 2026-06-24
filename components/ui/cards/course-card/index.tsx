import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../../badge";
import { Star } from "lucide-react";
import Link from 'next/link';
import CourseDetails from "./course-details";

export default function CourseCard() {
    return (
        <div className="relative group">
            <Link
                href="/courses/course-slug"
                className="block transition-all duration-300 group-hover:-translate-y-1"
            >
                <Card className="relative w-full rounded-none ring-0 bg-white overflow-hidden transition-all duration-300 group-hover:shadow-2xl border border-gray-100">
                    <Image
                        src="/images/course-image.png"
                        alt="course-card"
                        className=" w-full lg:h-full h-[250px] object-cover rounded-none transition-transform duration-500 group-hover:scale-105"
                        width={244}
                        height={183}
                        loading="eager"
                    />

                    <CardHeader className="flex items-center justify-between w-full">
                        <Badge variant="primary-100">Design</Badge>

                        <span className="text-primary-500 font-body-large-600">
                            $75
                        </span>
                    </CardHeader>

                    <CardDescription className="text-gray-900 font-body-large-500 px-6">
                        Machine Learning A-Z™: Hands-On Python & R In Data...
                    </CardDescription>

                    <CardFooter className="border-t border-t-gray-100 flex items-center w-full justify-between">
                        <div className="flex items-center gap-[4px]">
                            <Star className="text-warning-500 fill-warning-500" size={16} />

                            <span className="font-body-medium-500 text-gray-700">
                                5.0
                            </span>
                        </div>

                        <div>
                            <span className="font-body-medium-500 text-gray-700">
                                265.7K
                            </span>

                            <span className="font-body-medium-400 text-gray-500">
                                {" "}
                                students
                            </span>
                        </div>
                    </CardFooter>
                </Card>
            </Link>
            <div className="absolute hidden left-[92px] -top-[139px] z-30 opacity-0 invisible scale-95 transition-all duration-300 group-hover:opacity-100 lg:group-hover:visible lg:group-hover:block group-hover:scale-100">
                <CourseDetails />
            </div>
        </div>
    );
}