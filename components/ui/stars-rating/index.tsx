import { Star } from 'lucide-react'
import React from 'react'

interface StarRatingProps {
    percentage: number
    size?:number
}

const StarRating: React.FC<StarRatingProps> = ({ percentage, size=20 }) => {
    const rating = Math.max(0, Math.min(5, (percentage / 100) * 5));

    return (
        <div className='flex items-center gap-x-1'>
            {[0, 1, 2, 3, 4].map((i) => {
                let fillLevel = 0;

                if (rating >= i + 1) {
                    fillLevel = 1;
                } else if (rating > i) {
                    fillLevel = rating - i
                }

                return (
                    <span key={i} className='relative inline-block'>
                        <Star className='stroke-warning-500 fill-warning-100' size={size} />
                        <span
                            className='absolute top-0 left-0 h-full overflow-hidden pointer-events-none inline-block'
                            style={{
                                width: fillLevel === 1 ? '100%' : `${fillLevel * 100}%`,
                            }}
                        >
                            <Star className='fill-warning-500 stroke-warning-500' size={size} />
                        </span>
                    </span>
                );
            })}
        </div>
    );
}

export default StarRating