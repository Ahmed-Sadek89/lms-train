import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { Fragment } from 'react'

interface IMainBreadcrumb {
    links?: {
        title: string,
        href: string
    }[],
    currentPage: string
}

const MainBreadcrumb = ({ links = [], currentPage }: IMainBreadcrumb) => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild className='text-gray-600 font-body-medium-400 transition duration-300 hover:text-gray-900'>
                        <Link href={"/"}>{"Home"}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {
                    links?.map((breadcrumb, index) => (
                        <Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild className='text-gray-600 font-body-medium-400 transition duration-300 hover:text-gray-900'>
                                    <Link href={breadcrumb?.href || "#"}>{breadcrumb.title}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className='text-gray-600' />
                        </Fragment>
                    ))
                }
                <BreadcrumbItem>
                    <BreadcrumbPage className=' font-body-medium-400 text-gray-900'>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default MainBreadcrumb
