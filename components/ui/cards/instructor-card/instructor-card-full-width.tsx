import { PlayCircle, Star, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InstructorCardFullWidth = () => {
    return (
        <Link className='bg-white border border-gray-100 p-[30px] flex items-start flex-wrap md:flex-nowrap gap-x-[24px] gap-y-3 w-full' href={"#"}>
            <Image src={'/images/instructor.jpg'}
                alt='instructor'
                width={136}
                height={136}
                className='object-cover rounded-full'
            />
            <div className='flex flex-col gap-y-[16px]'>
                <h3 className='text-gray-900 font-body-xxl-600'>Vako Shvili</h3>
                <h6 className='text-gray-600 font-body-medium-400'>
                    Web Designer & Best-Selling Instructor
                </h6>
                <div className=" flex  items-center gap-x-6 ">
                    <div className="flex items-center gap-x-[6px]">
                        <Star size={20} className="fill-warning-500 " stroke='0' />
                        <p className="font-body-tiny-500">
                            <span className="text-gray-700  ">265.7K </span>
                            <span className="text-gray-400  ">students</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-x-[6px]">
                        <Users size={20} className="text-secondary-500" />
                        <p className="font-body-tiny-500">
                            <span className="text-gray-700  ">265.7K </span>
                            <span className="text-gray-400  ">students</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-x-[6px]">
                        <PlayCircle size={20} className="text-primary-500" />
                        <p className="font-body-tiny-500">
                            <span className="text-gray-700  ">265.7K </span>
                            <span className="text-gray-400  ">students</span>
                        </p>
                    </div>
                </div>
                <p className='text-gray-500 font-body-medium-400'>One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job,
                    or more like got himself fired from his own startup. He decided to work on his dream: be his own boss,
                    travel the world, only do the work he enjoyed...
                </p>
            </div>
        </Link>
    )
}

export default InstructorCardFullWidth