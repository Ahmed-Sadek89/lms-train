import BestSellingCourses from './components/best-selling-courses'
import HeroSection from './components/hero-section'
import TopCategories from './components/top-category'

const HomepageWrapper = () => {
    return (
        <>
            <HeroSection />
            <TopCategories />
            <div className='relative'>
                <BestSellingCourses />
            </div>
        </>
    )
}

export default HomepageWrapper
