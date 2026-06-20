"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import CopyLink from '@/components/ui/buttons/copy-link'
import { FacebookShare, LinkedinShare, WhatsAppShare, XShare } from '@/components/ui/buttons/share-buttons'
import { Check, Clock } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const ContentSidebar = () => {
  const params = useParams();

  return (
    <div className="  bg-white shadow-dropdown border border-gray-100 lg:sticky lg:top-108 lg:-translate-y-80">
      <div className='p-[24px] border border-gray-100 space-y-[12px]'>
        <div className="flex items-center gap-x-[10px] justify-between w-full">
          <div className="flex items-center gap-x-[4px]">
            <h4 className="text-gray-900 font-body-xxxl-400">$14.00</h4>
            <span className="text-gray-500 font-400 text-base line-through">$26.00</span>
          </div>
          <Badge variant="primary-100" className="text-primary-500 font-label-large">56% off</Badge>
        </div>
        <p className='font-body-medium-500 text-error-500 flex items-center'>
          <Clock className='me-1' size={20} />
          2 days left at this price!
        </p>
      </div>
      <div className='p-[24px] border border-gray-100 space-y-[12px]'>
        <div className=" flex flex-col gap-y-[12px]">
          <Button size={"md"} variant={"primary-500"}>
            Add to cart
          </Button>
          <Button size={"md"} variant={"primary-100"}>
            Buy now
          </Button>
        </div>
        <div className=" grid grid-cols-2 items-center gap-x-[12px] w-full">
          <Button size={"sm"} variant={"white"}>
            Add to wishlist
          </Button>
          <Button size={"sm"} variant={"white"} asChild>
            <Link href={`/courses/${params.slug}/gift`}>
              gift course
            </Link>
          </Button>
        </div>
        <p className='font-body-medium-400 text-gray-500'>
          <span className='font-bold'>Note:</span> all course have 30-days money-back guarantee
        </p>
      </div>
      <div className='p-[24px] border border-gray-100 space-y-[12px]'>
        <ul className=" flex flex-col items-start gap-y-[8px]">
          <li className="uppercase text-gray-900 font-label-medium">What you’ll learn</li>
          {Array(3).fill(0).map((_, index) => (
            <li
              key={index}
              className="flex items-start gap-x-[8px]"
            >
              <Check size={24} className="text-primary-500 " />
              <p className="text-gray-600 font-body-medium-400">
                Learn to use Python professionally, learning both Python 2 and Python 3!
              </p>
            </li>
          ))}
        </ul>

      </div>
      <div className='p-[24px] border border-gray-100 space-y-[12px]'>
        <p className=" text-gray-900 font-body-large-500">Share this course</p>
        <div className='flex items-center gap-2 flex-wrap'>
          <CopyLink />
          <FacebookShare />
          <WhatsAppShare />
          <LinkedinShare />
          <XShare />
        </div>
      </div>
    </div>
  )
}

export default ContentSidebar
