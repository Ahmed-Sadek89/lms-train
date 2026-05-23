import ClientCard from '@/components/ui/cards/client-card'

const Clients = () => {
    return (
        <section className='pt-[360px] bg-white app-container'>
            <div className='grid grid-cols-3 items-center gap-[24px]'>
                <div className='flex flex-col gap-y-[24px]'>
                    <h3 className='text-gray-900 font-body-xl-500'>6.3k trusted companies</h3>
                    <p className='text-gray-600 font-body-medium-400 w-[312px]'>
                        Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                    </p>
                </div>
                <div className='col-span-2 p-2 grid grid-cols-4 gap-[24px]  '>
                    {
                        Array(8).fill(0).map((_, index) => (
                            <ClientCard key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Clients
