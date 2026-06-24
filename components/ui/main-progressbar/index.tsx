import { Progress } from '@/components/ui/progress'
import StarRating from '../stars-rating'

interface IMainProgress {
    percentage: number,
    showPercentage?: boolean,
    showStars?: boolean
}
const MainProgress = ({ percentage, showPercentage = true, showStars = true }: IMainProgress) => {

    const rating = Math.max(0, Math.min(5, (percentage / 100) * 5));

    return (
        <div className='flex flex-wrap md:flex-nowrap items-center gap-x-6 gap-y-2'>
            {
                showStars &&
                <div className='flex items-center gap-x-3 flex-wrap sm:flex-nowrap '>
                    <StarRating percentage={Math.round(percentage)} size={16} />
                    <span className='font-body-medium-400 text-gray-600 text-nowrap'>{Math.round(rating)} Star rating</span>
                </div>
            }
            <Progress value={percentage}  />
            {
                showPercentage &&
                <span className='text-nowrap hidden md:block text-gray-900 font-body-medium-500'>{percentage}%</span>
            }
        </div>
    )
}

export default MainProgress
