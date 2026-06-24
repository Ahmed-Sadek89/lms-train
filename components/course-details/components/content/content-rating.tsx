import MainProgress from '@/components/ui/main-progressbar'
import StarRating from '@/components/ui/stars-rating'

const ContentRating = () => {
    return (
        <div className='space-y-[20px]'>
            <h4 className='font-heading-4 text-gray-900'>
                Course rating
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-6">
                <div className='px-5 py-[32px] flex items-center justify-center bg-white border border-gray-100'>
                    <div className='flex flex-col items-center text-center gap-y-6'>
                        <h3 className='font-heading-1'>4.8</h3>
                        <div className='flex flex-col gap-y-3'>
                            <StarRating percentage={75} />
                            <p className='font-body-mdeium-500'>Course rating</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-6 w-full col-span-3'>
                    {
                        [1, 2, 3, 4, 5].map((prog) => (
                            <MainProgress
                                key={prog}
                                percentage={((prog + 1) * 10)}
                                showStars
                                showPercentage
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ContentRating