import { cn } from '@/lib/utils'
import { categories } from '../../utils/fixed-values'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const TopCategories = () => {
    return (
        <section className='bg-white w-full'>
            <div className='flex flex-col gap-[40px] items-center app-container'>
                <h2 className='font-heading-2 text-gray-900'>Browse top category</h2>
                <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-[24px]'>
                    {
                        categories.map((category, index) => (
                            <Link href={`/course/${category.slug}`} key={index}
                                className={cn(
                                    "flex group justify-center h-26 p-5 w-full",
                                    category.bgColor,
                                    "hover:bg-white hover:shadow-category-card transition duration-300"
                                )}
                            >
                                <div className='flex items-center gap-5'>
                                    <div className='bg-white p-[16px] group-hover:bg-primary-500 transition duration-300'>
                                        {category.Icon && <category.Icon className={cn("w-6 h-6 transition duration-300 group-hover:text-white", category.iconColor)} />}
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='font-body-medium-500 text-gray-900'>{category.title}</h3>
                                        <span className='font-body-tiny-600 text-gray-600'>{parseInt(category.courseCount).toLocaleString()} courses</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className='flex items-center gap-[12px] flex-col md:flex-row justify-center w-full'>
                    <span className='text-gray-700'>We have more category & subcategory.</span>
                    <Button asChild size='sm' variant="link-primary-500">
                        <Link href="/category" className="flex items-center gap-[8px]">
                            Browse All <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default TopCategories
