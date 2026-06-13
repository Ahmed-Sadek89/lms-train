import { cn } from '@/lib/utils'
import Link from 'next/link'

interface IKeywordChip {
    text: string,
    href?: string
    extraStyles?: string
}

const KeywordChip = ({ text, href = "#", extraStyles = "" }: IKeywordChip) => {
    return (
        <Link
            href={href}
            className={cn(extraStyles)}
        >
            {text}
        </Link>
    )
}

export default KeywordChip
