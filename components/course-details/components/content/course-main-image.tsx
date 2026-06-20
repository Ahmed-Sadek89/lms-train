import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const CourseMainImage = () => {
    return (
        <Link href="/courses/course-slug/watch/series-1" className='relative cursor-pointer group'>
            <Image
                src={"/images/course-main-bg.jpg"}
                alt='course title'
                loading="eager"
                width={872}
                height={492}
                className='object-cover'
            />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='bg-white size-[72px] flex items-center justify-center rounded-full cursor-pointer transition duration-300 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-primary-400'>
                    <Play />
                </div>
            </div>
        </Link>
    )
}

export default CourseMainImage