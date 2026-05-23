import BestSellingCourses from './components/best-selling-courses'
import Clients from './components/clients'
import FeaturedCourses from './components/featured-courses'
import HeroSection from './components/hero-section'
import RecentlyAddedCourse from './components/recently-added-courses'
import Steps from './components/steps'
import TopCategories from './components/top-category'
import TopInstructors from './components/top-instructors'

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
            <div className="relative">
                <Steps />
                <TopInstructors />
            </div>
            <Clients />
        </>
    )
}

export default HomepageWrapper
