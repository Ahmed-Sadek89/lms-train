import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink
} from '@/components/ui/pagination'
import { buildQueryHref } from '@/utils/build-query-href'
import { ChevronFirstIcon, ChevronLeftIcon, ChevronRightIcon, ChevronLastIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

const TOTAL_PAGES = 10

function getPaginationItems(currentPage: number, totalPages: number): (number | 'ellipsis')[] {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    const items: (number | 'ellipsis')[] = [1]

    let start = Math.max(2, currentPage - 1)
    let end = Math.min(totalPages - 1, currentPage + 1)

    if (currentPage <= 3) {
        start = 2
        end = 4
    }

    if (currentPage >= totalPages - 2) {
        start = totalPages - 3
        end = totalPages - 1
    }

    if (start > 2) {
        items.push('ellipsis')
    }

    for (let page = start; page <= end; page++) {
        items.push(page)
    }

    if (end < totalPages - 1) {
        items.push('ellipsis')
    }

    items.push(totalPages)

    return items
}

function getCompactPaginationItems(totalPages: number): (number | 'ellipsis')[] {
    return [1, 2, 'ellipsis', totalPages]
}

function renderPaginationItems(
    items: (number | 'ellipsis')[],
    searchParams: ReturnType<typeof useSearchParams>,
    currentPage: number,
    itemClassName?: string,
) {
    return items.map((item, index) => {
        if (item === 'ellipsis') {
            return (
                <PaginationItem key={`ellipsis-${itemClassName ?? 'default'}-${index}`} className={itemClassName}>
                    <PaginationEllipsis />
                </PaginationItem>
            )
        }

        return (
            <PaginationItem key={`page-${itemClassName ?? 'default'}-${item}`} className={itemClassName}>
                <PaginationLink
                    href={buildQueryHref(searchParams, 'page', item.toString())}
                    isActive={item === currentPage}
                    className='rounded-full'
                >
                    {item}
                </PaginationLink>
            </PaginationItem>
        )
    })
}

const MainPagination = () => {
    const searchParams = useSearchParams()
    const currentPage = Math.min(Math.max(Number(searchParams.get('page')) || 1, 1), TOTAL_PAGES)
    const paginationItems = getPaginationItems(currentPage, TOTAL_PAGES)
    const compactPaginationItems = getCompactPaginationItems(TOTAL_PAGES)

    return (
        <div className='flex w-full items-center justify-center '>

            <Pagination >
                <PaginationContent>
                    <PaginationItem className='hidden lg:block'>
                        <PaginationLink
                            href={currentPage === 1 ? '#' : buildQueryHref(searchParams, 'page', '1')}
                            aria-label='Go to first page'
                            size='paginate-sm'
                            className='rounded-full disabled:opacity-50 '
                            disabled={currentPage === 1}
                        >
                            <ChevronFirstIcon className='size-4' />
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className='hidden sm:block'>
                        <PaginationLink
                            href={currentPage === 1 ? '#' : buildQueryHref(searchParams, 'page', (currentPage - 1).toString())}
                            aria-label='Go to previous page'
                            size='paginate-sm'
                            className='rounded-full'
                            disabled={currentPage === 1}
                        >
                            <ChevronLeftIcon className='size-4' />
                        </PaginationLink>
                    </PaginationItem>
                    {renderPaginationItems(compactPaginationItems, searchParams, currentPage, 'md:hidden')}
                    {renderPaginationItems(paginationItems, searchParams, currentPage, 'hidden md:list-item')}
                    <PaginationItem className='hidden sm:block'>
                        <PaginationLink
                            href={currentPage === TOTAL_PAGES ? '#' : buildQueryHref(searchParams, 'page', (currentPage + 1).toString())}
                            aria-label='Go to next page'
                            size='paginate-sm'
                            className='rounded-full'
                            disabled={currentPage === TOTAL_PAGES}
                        >
                            <ChevronRightIcon className='size-4' />
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className='hidden lg:block'>
                        <PaginationLink
                            href={currentPage === TOTAL_PAGES ? '#' : buildQueryHref(searchParams, 'page', TOTAL_PAGES.toString())}
                            aria-label='Go to last page'
                            size='paginate-sm'
                            className='rounded-full'
                            disabled={currentPage === TOTAL_PAGES}
                        >
                            <ChevronLastIcon className='size-4' />
                        </PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default MainPagination
