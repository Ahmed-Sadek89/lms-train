'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { buildToggleCommaSeparatedHref, getCommaSeparatedParam } from '@/utils/build-query-href'
import { ChevronDownIcon, ChevronUpIcon, LucideProps } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import CheckboxInput from '../inputs/filters/checkbox-input'

interface AccordionMultilevelProps {
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
const AccordionMultilevel = ({ title, contents }: AccordionMultilevelProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleCheckboxChange = (faqTitle: string, itemTitle: string, checked: boolean) => {
    const href = buildToggleCommaSeparatedHref(searchParams, faqTitle, itemTitle, checked)
    router.push(`${pathname}${href}`)
  }

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
                  <div className='flex items-center gap-x-[12px] font-body-medium-500'>
                    {content.Icon && <content.Icon size={16} className='text-gray-900 in-aria-expanded:text-primary-500' />}
                    <span className='text-gray-900'>{content.title}</span>
                  </div>
                  <ChevronDownIcon size={16} className="pointer-events-none shrink-0 in-aria-expanded:hidden text-gray-900 " />
                  <ChevronUpIcon size={16} className="pointer-events-none hidden shrink-0 in-aria-expanded:block text-gray-900 " />
                </CollapsibleTrigger>
              }
              <CollapsibleContent className='flex flex-col gap-y-[10px]'>
                {content.contents.map((contentItem, contentIndex) => {
                  const checkedItems = getCommaSeparatedParam(searchParams, title)
                  const isChecked = checkedItems.includes(contentItem.title.toLowerCase())

                  return (
                    <div key={contentIndex} className='flex items-center justify-between'>
                      <CheckboxInput
                        id={`${title}-${contentItem.title}-${contentIndex}-checkbox`}
                        name={contentItem.title}
                        label={`${contentItem.title}`}
                        checked={isChecked}
                        onChange={(checked) => handleCheckboxChange(title, contentItem.title, checked)}
                      />
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

export default AccordionMultilevel
