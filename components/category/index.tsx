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

        </>
    )
}

export default CategoryPageWrapper
