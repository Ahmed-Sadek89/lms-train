import MainBreadcrumb from '../main-breadcrumb'

interface IMainHeader {
    title: string,
    links?: {
        title: string,
        href: string
    }[],
}
const MainHeader = ({ title, links }: IMainHeader) => {
    return (
        <section className='bg-gray-50'>
            <div className="app-container">
                <div className='flex flex-col items-center justify-center text-center gap-y-[16px]'>
                    <h2>{title}</h2>
                    <MainBreadcrumb
                        currentPage={title}
                        links={links}
                        showSlash
                    />
                </div>
            </div>
        </section>
    )
}

export default MainHeader