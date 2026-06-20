'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDownIcon, ChevronUpIcon, LucideProps } from 'lucide-react'

interface AccordionMultilevelCourseContentProps {
  title: string
  contents: {
    title: string
    Icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    contents: {
      title: string
      count: string
    }[]
  }[]
}
const AccordionMultilevelCourseContent = ({ title, contents }: AccordionMultilevelCourseContentProps) => {
 
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full border border-gray-100 bg-white [&>*>[data-slot="accordion-content"]]:px-0'
      defaultValue={`${title}`}
    >
      <AccordionItem
        value={`${title}`}
        className=' bg-white border-b border-gray-100   '
      >
        <AccordionTrigger className='p-[20px] cursor-pointer outline-none focus-visible:ring-0 text-gray-900 font-label-xxl'>
          {title}
        </AccordionTrigger>
        <AccordionContent className='h-auto pb-0 '>
          {contents.map((content, index) => (
            <Collapsible
              key={index}
              className='bg-muted border-t border-t-gray-100 px-[20px] py-[10px] flex flex-col gap-y-[16px]'
              defaultOpen={index === 0}
            >
              {
                contents.length > 1 &&
                <CollapsibleTrigger className='cursor-pointer focus-visible:ring-ring/50 flex w-full items-center gap-4   py-0.5  outline-none focus-visible:z-10 focus-visible:ring-3 justify-between'>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-x-[12px] font-body-medium-500'>
                      <ChevronDownIcon size={16} className="pointer-events-none shrink-0 in-aria-expanded:hidden text-gray-900 " />
                      <ChevronUpIcon size={16} className="pointer-events-none hidden shrink-0 in-aria-expanded:block text-gray-900 " />
                      <span className='text-gray-900'>{content.title}</span>
                    </div>
                    <span>4.11 m</span>
                  </div>
                </CollapsibleTrigger>
              }
              <CollapsibleContent className='flex flex-col gap-y-[10px]'>
                {content.contents.map((contentItem, contentIndex) => {

                  return (
                    <div key={contentIndex} className='flex items-center justify-between'>
                       
                      <span className='text-gray-700 font-body-medium-400'>{contentItem.count}</span>
                    </div>
                  )
                })}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionMultilevelCourseContent
