import { BaseDropDown } from '@/components/ui/inputs/filters/dropdown'
import { useSearchParams } from 'next/navigation'
import { ratingData } from '../../utils/rating'
import BaseComment from '@/components/ui/comments/base-comment';
import { Fragment } from "react"
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

const ContentComments = () => {
    const searchParams = useSearchParams();
    const rating = searchParams.get("rating") || "5-star"
    return (
        <section className='space-y-[20px]'>
            <div className='flex items-center gap-2 justify-between w-full'>
                <h4 className='font-heading-4 text-gray-900'>
                    Comments
                </h4>
                <BaseDropDown
                    label={rating || "Trending"}
                    data={ratingData(searchParams)}
                />
            </div>
            {
                Array(6).fill(1).map((comment, index) => (
                    <Fragment key={index}>
                        <BaseComment />
                        {
                            (index + 1) !== 6 &&
                            <Separator className='bg-gray-100' />
                        }
                    </Fragment>
                ))
            }
            <Button variant={"primary-100"} size={"md"}>
                Show more
                <Loader />
            </Button>

        </section>
    )
}

export default ContentComments