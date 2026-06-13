import { useId } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface ISearchInput {
    placeholder?: string
    extraStyles?: string
}

const SearchInput = ({ placeholder = "", extraStyles = "" }: ISearchInput) => {
    const id = useId()
    return (
        <div className={cn('w-full space-y-2 hidden md:block', extraStyles)}>
            <div className='relative'>
                <div className='  pointer-events-none absolute inset-y-0 left-0 flex items-center gap-5.25 justify-center pl-3 peer-disabled:opacity-50'>
                    <Search className='text-gray-900' size={20} />
                    <span className='sr-only'>{placeholder}</span>
                </div>
                <Input id={id} type='search' placeholder={placeholder} className='peer pl-9  ' />
            </div>
        </div>
    )
}

export default SearchInput
