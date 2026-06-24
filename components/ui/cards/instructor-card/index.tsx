import {
    Card,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from 'next/link';

const InstructorCard = () => {
    return (
        <Link
            href="/courses/course-slug"
            className="block transition-all duration-300 hover:-translate-y-1"
        >
            <Card className="relative w-full rounded-none ring-0 bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <Image
                    src="/images/course-image.png"
                    alt="course-card"
                    className="object-cover"
                    width={244}
                    height={244}
                    loading="eager"

                />

                <CardDescription className="flex flex-col items-center gap-[8px]">
                    <h3 className="text-gray-900 font-body-large-500">Darrell Steward</h3>
                    <h6 className="text-gray-500 font-body-medium-400">Digital Product Designer</h6>
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
                            652
                        </span>

                        <span className="font-body-medium-400 text-gray-500">
                            {" "}
                            students
                        </span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default InstructorCard
