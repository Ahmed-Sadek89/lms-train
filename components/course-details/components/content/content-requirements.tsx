import { Dot } from 'lucide-react'

const ContentRequirements = () => {
  return (
    <div className='space-y-[20px]'>
      <h4 className='font-heading-4 text-gray-900'>Course requirements</h4>
      <div className='grid grid-cols-1 gap-y-[12px]'>
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className='flex items-start gap-x-[8px] text-gray-700 font-body-medium-400'>
            <Dot size={24} className='text-gray-900' />
            You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentRequirements