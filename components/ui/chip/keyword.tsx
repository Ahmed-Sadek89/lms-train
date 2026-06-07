import Link from 'next/link'

interface IKeywordChip {
    text: string,
    href?: string
}

const KeywordChip = ({ text, href = "#" }: IKeywordChip) => {
    return (
        <Link
            href={href}
            className='py-1 px-3 bg-gray-50 text-gray-900 transition duration-300 hover:bg-primary-500 hover:text-white '
        >
            {text}
        </Link>
    )
}

export default KeywordChip
