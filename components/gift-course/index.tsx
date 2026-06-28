import MainHeader from "../ui/main-header"
import FormLayout from "./components/form-layout"
import { breedcrumb } from "./utils/breadcrumb"

const GiftCourseWrapper = () => {
    return (
        <>
            <MainHeader 
                title="Gift course"
                links={breedcrumb}
            />
            <section className="bg-white">
                <div className="app container">
                    <FormLayout />
                </div>
            </section>
        </>
    )
}

export default GiftCourseWrapper