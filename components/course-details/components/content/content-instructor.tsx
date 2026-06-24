import InstructorCardFullWidth from '@/components/ui/cards/instructor-card/instructor-card-full-width'

const ContentInstructor = () => {
    return (
        <div className='space-y-[20px]'>
            <h4 className='font-heading-4 text-gray-900'>
                Course Instructor <span className="font-body-xxxl-500 text-gray-700">(02)</span>
            </h4>
            {
                [1, 2].map((instructor) => (
                    <InstructorCardFullWidth key={instructor} />
                ))
            }
        </div>
    )
}

export default ContentInstructor