import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatDummyMoney, getDummyCourse } from "@/lib/dummy-commerce"
import Image from "next/image"

const CompletePaymentBlock = () => {
  const course = getDummyCourse("course-slug")
  const formattedAmount = course
    ? formatDummyMoney(course.amount, course.currency)
    : "EGP 0.00"

  return (
    <div className='border border-gray-100 lg:sticky top-28'>
      <div className='border-b border-b-gray-100'>
        <div className='p-[24px] flex flex-col gap-y-[16px]'>
          <h6>Course</h6>
          <div className="flex items-center gap-3 flex-wrap">
            <Image
              src={"/images/instructor.jpg"}
              alt="course"
              width={100}
              height={75}
              className="object-cover"
            />
            <div className="flex flex-col items-start gap-y-[12px]">
              <div className="space-y-1">
                <p className="flex items-center gap-x-1 flex-wrap font-body-small-400">
                  <span className="text-gray-400">Course by:</span>
                  <span className="text-gray-700">Courtney Henry</span>
                </p>
                <p className="text-gray-900 font-body-medium-400">
                  {course?.title ?? "Course"}
                </p>
              </div>
              <span className="text-primary-400 font-body-medium-500">{formattedAmount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='p-[24px] flex flex-col gap-[16px]'>
        <div className="space-y-[16px]">
          <h2 className="text-gray-900 font-body-xl-500">Order Summery</h2>
          <div className="flex items-center flex-wrap justify-between">
            <p className="text-gray-600 font-body-medium-400">Subtotal</p>
            <p className="text-gray-900 font-body-medium-500">{formattedAmount}</p>
          </div>
          <div className="flex items-center flex-wrap justify-between">
            <p className="text-gray-600 font-body-medium-400">Coupon Discount</p>
            <p className="text-gray-900 font-body-medium-500">0%</p>
          </div>
          <Separator className="bg-gray-100" />
          <div className="flex items-center flex-wrap justify-between">
            <p className="text-gray-900 font-body-large-400">Total:</p>
            <p className="text-gray-900 font-heading-4">{formattedAmount}</p>
          </div>
        </div>
        <Button type="submit" size={"lg"}>
          Complete payment
        </Button>
      </div>
    </div>
  )
}

export default CompletePaymentBlock
