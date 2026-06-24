import MainAvatarGroup from '@/components/ui/main-avatar/avatar-group'
import MainBreadcrumb from '@/components/ui/main-breadcrumb'
import StarRating from '@/components/ui/stars-rating'

const DetailsMainHeader = () => {

    return (
        <section className='bg-gray-50'>
            <div className="app-container pb-[20px]">
                <div className="grid lg:grid-cols-3">
                    <div className="col-span-2 flex flex-col items-start w-full gap-y-[24px]">
                        <MainBreadcrumb
                            links={[
                                {
                                    href: "/category",
                                    title: "Development"
                                },
                                {
                                    href: "/category?sub-category=Web Development",
                                    title: "Web Development"
                                }
                            ]}
                            currentPage='webflow'
                        />
                        <h1 className='font-heading-3 text-gray-900'>
                            Complete Website Responsive Design: from Figma to Webflow to Website Design
                        </h1>
                        <p className='font-body-xxl-400 text-gray-700'>
                            3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.
                        </p>
                        <div className='flex items-center justify-between w-full flex-wrap gap-y-5'>
                            <div className='flex items-center gap-x-[12px] flex-wrap sm:flex-nowrap'>
                                <MainAvatarGroup
                                    avatars={[
                                        {
                                            src: '/images/instructor.jpg',
                                            fallback: 'OS',
                                            name: 'Olivia Sparks'
                                        },
                                        {
                                            src: '',
                                            name: 'Howard Lloyd'
                                        }
                                    ]}
                                />
                                <div className='space-y-[4px]'>
                                    <span className='text-gray-600 font-body-medium-400'>Created by:</span>
                                    <p className='text-gray-900 font-body-large-500'> Dianne Russell • Kristin Watson</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-[8px]'>
                                <div className='flex items-center gap-x-1'>
                                    <StarRating percentage={90} size={20} />
                                </div>
                                <p className='text-gray-600 font-body-medium-400'>
                                    <span className='font-body-large-500 text-gray-900 me-1'>5.0</span>
                                    (357,914)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsMainHeader