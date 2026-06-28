import MainHeader from "../ui/main-header"
import { breedcrumb } from "./utils/breadcrumb"

const GiftCourseWrapper = () => {
    return (
        <>
            <MainHeader 
                title="Gift course"
                links={breedcrumb}
            />
            <section>form</section>
        </>
    )
}

export default GiftCourseWrapper