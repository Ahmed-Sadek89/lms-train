"use client"
import TabsUnderline from '@/components/ui/main-tab/tabs-underline'
import ContentSidebar from './content-sidebar'
import CourseMainImage from './course-main-image'
import { tabs } from '../../utils/tabs'
import ContentDescription from './content-description'
import ContentBenefits from './content-benefits'
import ContentStackeholders from './content-stackholders'
import ContentRequirements from './content-requirements'
import ContentCurriculum from './content-curriculum'
import ContentInstructor from './content-instructor'
import ContentRating from './content-rating'
import ContentComments from './content-comments'

const Content = () => {
    return (
        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="min-h-[140vh] lg:col-span-2 space-y-[40px]">
                <CourseMainImage />
                <div className='sticky top-18 md:top-20 left-0 z-100'>
                    <TabsUnderline tabs={tabs} />
                </div>
                <section id={tabs[0].value} className='space-y-[40px]'>
                    <ContentDescription />
                    <ContentBenefits />
                    <ContentStackeholders />
                    <ContentRequirements />
                </section>
                <section id={tabs[1].value} className='space-y-[40px]'>
                    <ContentCurriculum />
                </section>
                <section id={tabs[2].value} className='space-y-[40px]'>
                    <ContentInstructor />
                </section>
                <section id={tabs[3].value} className='space-y-[40px]'>
                    <ContentRating />
                </section>
                <ContentComments />

            </div>
            <ContentSidebar />
        </div>
    )
}

export default Content
