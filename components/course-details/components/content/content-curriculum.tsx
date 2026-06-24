import AccordionOneLevel from '@/components/ui/accordion/accordion-onelevel'
import { Clock, Folder, PlayCircle } from 'lucide-react'
import { curriculumData } from '../../utils/curriculum-data'
import { Course } from '@/types/courses'

const ContentCurriculum = () => {
  return (
    <div className='space-y-[20px]'>
      <div className='flex w-full items-center justify-between gap-y-2 flex-wrap'>
        <h4 className='font-heading-4 text-gray-900'>Curriculum</h4>
        <div className="gap-x-3 flex items-center ">
          <div className="flex items-center gap-x-[6px]">
            <Folder size={16} className="text-primary-500" />
            <p className="text-gray-700 font-body-tiny-400 ">6 Sections</p>
          </div>
          <div className="flex items-center gap-x-[6px]">
            <PlayCircle size={16} className="text-secondary-500" />
            <p className="font-body-tiny-400 text-gray-700">202 lectures</p>
          </div>
          <div className="flex items-center gap-x-[6px]">
            <Clock size={16} className="text-warning-500" />
            <p className="font-body-tiny-400 text-gray-700">19h 37m </p>
          </div>
        </div>
      </div>
      <AccordionOneLevel
        items={curriculumData as Course[]}
      />
    </div>
  )
}

export default ContentCurriculum