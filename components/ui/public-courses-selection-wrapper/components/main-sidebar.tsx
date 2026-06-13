import AccordionMultilevel from '../../accordion/accordion-multilevel'
import { categoriesData, courseLevelData, durationData, PriceRange, ratingData, toolsData } from '../utils/fixed-data'

const MainSidebar = () => {
    return (
        <div className='space-y-6'>
            <AccordionMultilevel
                title="Categories"
                contents={categoriesData}
            />
            <AccordionMultilevel
                title="Tools"
                contents={toolsData}
            />
            <AccordionMultilevel
                title="Rating"
                contents={ratingData}
            />
            <AccordionMultilevel
                title="Course Level"
                contents={courseLevelData}
            />
            <AccordionMultilevel
                title="Price"
                contents={PriceRange}
            />
            <AccordionMultilevel
                title="Duration"
                contents={durationData}
            />
        </div>
    )
}

export default MainSidebar