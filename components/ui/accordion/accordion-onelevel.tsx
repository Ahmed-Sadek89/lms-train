import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils';
import { Course } from '@/types/courses';
import { Clock, File, Play, PlayCircle } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

const AccordionLeftIconDemo = ({ items }: { items: Course[] }) => {
  const defaultOpen = items.length > 0 ? [`item-1`] : [];
  const params = useParams()
  const router = useRouter()
  
  return (
    <Accordion
      type='multiple'
      defaultValue={defaultOpen}
      className='w-full border  border-gray-100 bg-white [&>*>[data-slot="accordion-content"]]:px-0'

    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}
          className=' bg-white border-b border-gray-100  p-[20px] '
        >
          <AccordionTrigger className='items-center justify-start gap-4 cursor-pointer **:data-[slot=accordion-trigger-icon]:order-first **:data-[slot=accordion-trigger-icon]:ml-0'>
            <div className={cn('flex items-center flex-wrap gap-y-2 justify-between w-full group-aria-expanded/accordion-trigger:text-primary-500')}>
              <p className='font-body-large-500'>{item.title}</p>
              <div className="gap-x-3 flex items-center ">
                <div className="flex items-center gap-x-[6px]">
                  <PlayCircle size={16} className="text-secondary-500" />
                  <p className="font-body-tiny-600 text-gray-700">{item.statistics.total_course} lectures</p>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <Clock size={16} className="text-warning-500" />
                  <p className="font-body-tiny-600 text-gray-700">{item.statistics.total_duration}m </p>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className='flex flex-col gap-y-[14px] w-full'>
            {
              item.contents.map((content, idx) => (
                <div
                  className={cn(
                    'w-full font-body-medium-400 flex items-center cursor-auto no-underline! justify-between',
                    content.isPremium ? "" : "cursor-pointer group"
                  )}
                  onClick={() => {
                    if (!content.isPremium) {
                      router.push(
                        content.type === "video" ? `/courses/${params.slug}/watch/series-${idx + 1}` : "#",
                      )
                    }
                  }}
                  key={idx}
                >

                  <div
                    className={
                      cn(
                        'flex items-center gap-x-[8px] text-gray-500',
                        content.isPremium ? "" : "text-gray-700 transition duration-300 group-hover:underline group-hover:text-primary-500"
                      )}
                  >
                    {
                      content.type === "video" ?
                        <Play size={16} />
                        :
                        <File size={16} />
                    }
                    <p>{content.title}</p>
                  </div>
                  <span className={cn(
                    'text-gray-500 ',
                    content.isPremium ? "" : "transition duration-300 group-hover:underline group-hover:text-primary-500"
                  )}>
                    {content.type === "file" ? `${content.fileSize.toFixed(2)} MB` : `${content.duration}:00`}
                  </span>
                </div>
              ))
            }
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionLeftIconDemo
