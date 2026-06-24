import DetailsMainHeader from './components/details-main-header'
import Content from './components/content'
import RelatedCourses from './components/related-courses'

const CourseDetailsWrapper = () => {
    return (
        <div className='content w-full bg-white'>
            <DetailsMainHeader />
            <div className="app-container pt-[20px] border-b border-gray-50">
                <Content />
            </div>
            <section className="app-container">
                <RelatedCourses />
            </section>
        </div>
    )
}

export default CourseDetailsWrapper
