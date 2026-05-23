import BestSellingCourses from './components/best-selling-courses'
import FeaturedCourses from './components/featured-courses'
import HeroSection from './components/hero-section'
import RecentlyAddedCourse from './components/recently-added-courses'
import TopCategories from './components/top-category'

const HomepageWrapper = () => {
    return (
        <>
            <HeroSection />
            <TopCategories />
            <div className="relative">
                <BestSellingCourses />
                <FeaturedCourses />
            </div>
            <RecentlyAddedCourse />
        </>
    )
}

export default HomepageWrapper
