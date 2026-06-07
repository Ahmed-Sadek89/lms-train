import Link from 'next/link'

interface IToolCard {
    href?: string,
    title: string,
    description: string,
}

const ToolCard = ({ href = "#", title, description }: IToolCard) => {
    return (
        <Link href={href || "#"} className='px-9 py-6 bg-white border border-gray-100 transition duration-300 hover:shadow-category-card group flex flex-col items-center gap-4'>
            <h6 className="transition duration-300 group-hover:text-primary-500 text-gray-900 font-body-large-500">
                {title}
            </h6>
            <p className="font-body-small-400 text-gray-500">
                {description}
            </p>
        </Link>
    )
}

export default ToolCard
