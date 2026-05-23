import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Stats = () => {
    return (
        <section className='app-container border-b border-b-gray-50/10'>
            <div className='grid grid-cols-2 gap-34 justify-between items-center'>
                <div className='flex flex-col gap-y-[32px] items-start'>
                    <h3 className='font-heading-3'>
                        Start learning with 67.1k students around the world.
                    </h3>
                    <div className='flex items-center gap-[16px]'>
                        <Button variant='primary-500' asChild size='md'>
                            <Link href='/courses'>Join the Family</Link>
                        </Button>
                        <Button variant='white-5' asChild size='md'>
                            <Link href='/courses'>Browse all courses</Link>
                        </Button>
                    </div>
                </div>
                <div className='flex items-center justify-between w-full gap-[24px]'>
                    <div className='flex flex-col items-start gap-y-[12px]'>
                        <h5 className='font-heading-3'>6.3k</h5>
                        <p className='text-gray-300 font-body-small-500'>courses</p>
                    </div>
                    <div className='flex flex-col items-start gap-y-[12px]'>
                        <h5 className='font-heading-3'>26k</h5>
                        <p className='text-gray-300 font-body-small-500'>Certified Instructor</p>
                    </div>
                    <div className='flex flex-col items-start gap-y-[12px]'>
                        <h5 className='font-heading-3'>99.9%</h5>
                        <p className='text-gray-300 font-body-small-500'>Sucess Rate</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats
