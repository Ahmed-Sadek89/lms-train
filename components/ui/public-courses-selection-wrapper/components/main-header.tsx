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
    console.log({ combinedFilters })
    return (
        <div className='shadow-nav space-y-6 pb-4'>
            <div className='flex items-center justify-between w-full flex-col md:flex-row'>
                <div className='flex items-center gap-x-6 '>
                    <Button
                        size="filter-md"
                        variant={"white-filter"}
                        className='flex group items-center text-gray-900 gap-x-3 transition duration-300 hover:text-primary-500'
                        onClick={handleOpenFilter}
                    >
                        <KanbanSquare size={16} className='text-gray-900 group-hover:text-primary-500' />
                        <span className='hidden md:block'>filter</span>
                        {
                            combinedFilters > 0 &&
                            <Badge variant={"primary-100"}>{combinedFilters}</Badge>
                        }
                    </Button>
                    <SearchInput
                        placeholder="UI/UX Design"
                        extraStyles='hidden md:block max-w-[600px] '
                    />
                </div>
                <div className='flex items-center gap-x-6 '>
                    <span className='text-gray-700 font-body-medium-400'> Sort by: </span>
                    <BaseDropDown
                        label={sortBy || "Trending"}
                        data={sortByData(searchParams)}
                    />
                </div>
            </div>
            <div className='flex items-center justify-between w-full flex-col md:flex-row'>
                <div className='flex items-start gap-3 flex-wrap lg:flex-nowrap'>
                    <p className='font-body-medium-400 text-gray-900 text-nowrap'>
                        Suggestions:
                    </p>
                    <div className='flex items-center gap-2 flex-wrap w-full'>
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
                <div className='flex items-center gap-x-2'>
                    {
                        suggestion &&
                        <p className='font-body-medium-600 space-x-1'>
                            <span className='text-gray-900 '>3,145,684</span>
                            <span className='text-gray-700'>results find for "{suggestion}"</span>
                        </p>
                    }
                    {
                        searchParams.size > 0 &&
                        <Button variant={"error-500"} size="sm" onClick={() => router.push(pathname)}>
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
