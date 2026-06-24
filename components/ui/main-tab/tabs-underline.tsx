import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { useMemo } from 'react'


const TabsUnderline = ({ tabs }: { tabs: { value: string, name: string }[] }) => {
    const router = useRouter()
    const pathname = usePathname()
    const hash = useMemo(() => {
        return window.location.hash.replace("#", "") || ""
    }, [window?.location?.hash])

    return (
        <div className='w-full overflow-auto'>
            <Tabs defaultValue={hash || tabs[0].value} className='gap-4 bg-white'>
                <TabsList variant='line' className={cn('rounded-none border-b  border-b-gray-100 ')}>
                    {tabs.map(tab => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className='border-0 cursor-pointer hover:text-primary-500 data-active:border-b-2 rounded-none data-active:border-primary-500'
                            onClick={() => router.replace(`${pathname}#${tab.value}`)}
                        >
                            {tab.name}
                        </TabsTrigger>
                    ))}
                </TabsList>


            </Tabs>
        </div>
    )
}

export default TabsUnderline
