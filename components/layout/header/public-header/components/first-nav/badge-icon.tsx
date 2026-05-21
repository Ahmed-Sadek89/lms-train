import { Avatar, AvatarFallback, AvatarBadge } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const BadgeIcon = ({
    number = 0,
    Icon
}: {
    number?: number
    Icon: React.ElementType
}) => {
    return (
        <div className='relative'>
            <Avatar className='after:hidden'>
                <AvatarFallback className='after:hidden'>
                    <Icon size={24} />
                </AvatarFallback>
                <AvatarBadge
                    className={
                        cn(
                            'bg-primary-500 ',
                            number ?
                                "group-data-[size=default]/avatar:size-4 font-body-tiny-500 text-white p-0.75 ring-0 -top-0.5 flex items-center justify-center left-4.5"
                                : "group-data-[size=default]/avatar:size-2 top-1.25 left-4.5 ring-white ring"
                        )
                    }
                >
                    <span>{number ? (number > 9 ? `9+` : number) : null}</span>
                </AvatarBadge>
            </Avatar>
        </div>
    )
}

export default BadgeIcon
