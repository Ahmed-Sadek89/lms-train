import KeywordChip from '@/components/ui/chip/keyword'

const PopularKeyword = () => {
    return (
        <section className='bg-white'>
            <div className="app-container pt-[40px] pb-[80px]">
                <div className='flex items-start gap-3 flex-wrap lg:flex-nowrap'>
                    <p className='font-body-xl-400 text-gray-900 text-nowrap'>
                        Popular keywords:
                    </p>
                    <div className='flex items-center gap-2 flex-wrap w-full'>
                        {
                            Array(5).fill(1).map((_, index) => (
                                <KeywordChip
                                    key={index}
                                    text='Responsive Developments'
                                    href='#'
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularKeyword
