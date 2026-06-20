import { Check } from 'lucide-react'

const ContentBenefits = () => {
  return (
    <div className='bg-success-gradient p-[40px] space-y-[20px]'>
      <h4 className='font-heading-4 text-gray-900'>What you will learn in this course</h4>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className='flex items-start gap-x-[8px] text-gray-700 font-body-medium-400'>
            <div className='bg-success-500 p-0.5 rounded-full text-white'>
              <Check size={14} />
            </div>
            You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentBenefits