import { Button } from '../../button'
import { KanbanSquare, X } from 'lucide-react'
import { Badge } from '../../badge'
import SearchInput from '../../inputs/filters/search-input'
import { BaseDropDown } from '../../inputs/filters/dropdown'
import { sortByData, suggestionsData } from '../utils/fixed-data'
import { buildQueryHref } from '@/utils/build-query-href'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import KeywordChip from '../../chip/keyword'
import { useMemo } from 'react'

const MainHeader = ({ handleOpenFilter }: { handleOpenFilter: () => void }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const sortBy = searchParams.get('sort_by')
    const suggestion = searchParams.get('suggestion')
    const categories = searchParams.get('categories')
    const tools = searchParams.get('tools')
    const price = searchParams.get('price')
    const rating = searchParams.get('rating')
    const courseLevel = searchParams.get('course_level')
    const duration = searchParams.get('duration')
    const combinedFilters = useMemo(() => {
        const combinedString = [categories, tools, price, rating, courseLevel, duration].filter(Boolean).join(',')
        return combinedString ? combinedString.split(',').length : 0
    }, [categories, tools, price, rating, courseLevel, duration])

    return (
        <div className='shadow-nav space-y-4 pb-4 md:space-y-6'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:gap-6'>
                <div className='flex w-full items-center justify-between gap-3 md:w-auto md:shrink-0'>
                    <Button
                        size="filter-md"
                        variant={"white-filter"}
                        className='flex shrink-0 group items-center text-gray-900 gap-x-3 transition duration-300 hover:text-primary-500'
                        onClick={handleOpenFilter}
                    >
                        <KanbanSquare size={16} className='text-gray-900 group-hover:text-primary-500' />
                        <span  >filter</span>
                        {
                            combinedFilters > 0 &&
                            <Badge variant={"primary-100"}>{combinedFilters}</Badge>
                        }
                    </Button>
                    <div className='flex items-center gap-2 md:hidden'>
                        <span className='sr-only'>Sort by</span>
                        <BaseDropDown
                            label={sortBy || "Trending"}
                            data={sortByData(searchParams)}
                            extraStyles='w-[132px] sm:w-50'
                        />
                    </div>
                </div>
                <SearchInput
                    placeholder="UI/UX Design"
                    extraStyles='block w-full min-w-0 md:flex-1 md:max-w-[600px]'
                />
                <div className='hidden md:flex shrink-0 items-center gap-3 lg:gap-6'>
                    <span className='font-body-medium-400 whitespace-nowrap text-gray-700'>Sort by:</span>
                    <BaseDropDown
                        label={sortBy || "Trending"}
                        data={sortByData(searchParams)}
                    />
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6'>
                <div className='flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start'>
                    <p className='shrink-0 font-body-medium-400 text-gray-900'>
                        Suggestions:
                    </p>
                    <div className='flex min-w-0 flex-wrap items-center gap-2'>
                        {
                            suggestionsData.map((keyword) => (
                                <KeywordChip
                                    key={keyword}
                                    text={keyword}
                                    href={buildQueryHref(searchParams, 'suggestion', keyword.toLowerCase())}
                                    extraStyles='font-body-medium-400 text-primary-500 transition duration-300 hover:text-primary-700'
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-x-2'>
                    {
                        suggestion &&
                        <p className='font-body-medium-600 text-sm sm:text-base'>
                            <span className='text-gray-900'>3,145,684</span>
                            <span className='text-gray-700'> results find for "{suggestion}"</span>
                        </p>
                    }
                    {
                        searchParams.size > 0 &&
                        <Button
                            variant={"error-500"}
                            size="sm"
                            className='w-fit'
                            onClick={() => router.push(pathname)}
                        >
                            <X size={16} />
                            Clear all
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainHeader
