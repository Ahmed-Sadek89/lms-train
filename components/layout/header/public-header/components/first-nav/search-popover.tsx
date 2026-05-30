'use client'

import { useEffect, useMemo, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { SearchIcon, Search } from 'lucide-react'

const users = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Howard Lloyd',
    fallback: 'HL',
    notifications: 3
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    name: 'Olivia Sparks',
    fallback: 'OS'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Hallie Richards',
    fallback: 'HR',
    notifications: 1
  }
]

const useDebounce = (value: string, delay: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

const SearchPopover = () => {
  const [inputValue, setInputValue] = useState('')
  const debouncedSearch = useDebounce(inputValue)
  const filteredUsers = useMemo(() => {
    const normalizedSearch = debouncedSearch.trim().toLowerCase()

    return normalizedSearch
      ? users.filter(user => user.name.toLowerCase().includes(normalizedSearch))
      : users
  }, [debouncedSearch])

  return (
    <Popover>
      <PopoverTrigger
        className="flex md:hidden cursor-pointer text-gray-900 outline-none"
        aria-label="Open search"
      >
        <Search size={18} />
      </PopoverTrigger>
      <PopoverContent sideOffset={17} side='right' className='w-80 bg-white'>
        <div className='grid gap-4'>
          <div className='relative'>
            <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
              <SearchIcon className='size-4' />
              <span className='sr-only'>Search</span>
            </div>
            <Input
              type='search'
              placeholder='Search users'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className='peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none'
            />
          </div>
          <ul className='space-y-2'>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <li key={index} className='flex items-center gap-2 text-gray-600 transition duration-300 cursor-pointer hover:bg-primary-300 hover:text-primary-200 p-2 '>
                  <Avatar className='size-6'>
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback className='text-xs'>{user.fallback}</AvatarFallback>
                  </Avatar>
                  <div className='flex-1 text-sm font-medium'>{user.name}</div>
                  {user.notifications && (
                    <span className='text-muted-foreground text-xs'>{`${user.notifications} Notification${user.notifications > 1 ? 's' : ''}`}</span>
                  )}
                </li>
              ))
            ) : (
              <li className='py-2 text-center text-sm'>No users found</li>
            )}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default SearchPopover
