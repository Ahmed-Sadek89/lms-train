import { Button } from '../../button'
import { KanbanSquare, X } from 'lucide-react'
import { Badge } from '../../badge'
import SearchInput from '../../inputs/filters/search-input'
import { BaseDropDown } from '../../inputs/filters/dropdown'
import { sortByData, suggestionsData } from '../utils/fixed-data'
import { buildQueryHref } from '@/utils/build-query-href'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import KeywordChip from '../../chip/keyword'

const MainHeader = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const sortBy = searchParams.get('sort_by')
    const suggestion = searchParams.get('suggestion')

    return (
        <div className='shadow-nav space-y-6 pb-4'>
            <div className='flex items-center justify-between w-full flex-col md:flex-row'>
                <div className='flex items-center gap-x-6 '>
                    <Button
                        size="filter-md"
                        variant={"white-filter"}
                        className='flex group items-center text-gray-900 gap-x-6 transition duration-300 hover:text-primary-500'
                    >
                        <KanbanSquare />
                        <span className='hidden md:block'>filter</span>
                        <Badge variant={"primary-100"}>3</Badge>
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
