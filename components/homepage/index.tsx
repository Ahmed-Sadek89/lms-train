import BestSellingCourses from './components/best-selling-courses'
import FeaturedCourses from './components/featured-courses'
import HeroSection from './components/hero-section'
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
            <section className='bg-white app-container pt-[350px]'>
                recently
            </section>
        </>
    )
}

export default HomepageWrapper
