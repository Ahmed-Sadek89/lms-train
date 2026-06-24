import { Dot } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import StarRating from '../stars-rating'

const BaseComment = () => {
    return (
        <div className='flex items-start w-full gap-4'>
            <Image src={'/images/instructor.jpg'} alt='user' width={40} height={40}
                className='object-cover rounded-full'
            />
            <div className='flex-1 flex flex-col w-full gap-y-3'>
                <div className='flex items-center gap-x-1'>
                    <span className='font-body-medium-500 text-gray-900'>Ahmed Sadek</span>
                    <Dot size={14} className='text-gray-600'/>
                    <span className='font-body-small-400 text-gray-600'>1 week ago</span>
                </div>
                <StarRating size={12} percentage={70} />
                <p className='text-gray-700 font-medium-400'>
                I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.
                </p>
            </div>
        </div>
    )
}

export default BaseComment