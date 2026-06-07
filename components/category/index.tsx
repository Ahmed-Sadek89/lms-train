import PublicCoursesSelectionWrapper from '../ui/public-courses-selection-wrapper'
import BestSellingCourses from './components/best-selling-courses'
import PopularInstructor from './components/popular-instructor'
import PopularKeyword from './components/popular-keyword'
import PopularTools from './components/popular-tools'

const CategoryPageWrapper = () => {
    return (
        <>
            <BestSellingCourses />
            <PopularTools />
            <PopularKeyword />
            <PopularInstructor />
            <PublicCoursesSelectionWrapper
            // courses={[]}
            // categories={[]}
            // tools={[]}
            />
        </>
    )
}

export default CategoryPageWrapper
