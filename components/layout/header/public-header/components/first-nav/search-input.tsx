import { useId } from 'react'
import { Search, UserIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

const SearchInput = () => {
  const id = useId()

  return (
    <div className='w-full max-w-[424px] space-y-2'>
      <div className='relative'>
        <div className='  pointer-events-none absolute inset-y-0 left-0 flex items-center gap-5.25 justify-center pl-3 peer-disabled:opacity-50'>
          <Search className='text-gray-900' size={20} />
          <span className='sr-only'>What do you want learn...</span>
        </div>
        <Input id={id} type='search' placeholder='What do you want learn...' className='peer pl-9  ' />
      </div>
    </div>
  )
}

export default SearchInput
