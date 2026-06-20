import Image from 'next/image'


interface IMainAvatarGroup {
    avatars?: {
        src?: string,
        fallback?: string,
        name?: string
    }[]
}

const MainAvatarGroup = ({ avatars = [] }: IMainAvatarGroup) => {
    return (
        <div className="flex -space-x-4 rtl:space-x-reverse">
            {avatars?.map((element, index) => {
                if (element?.src) {
                    return (
                        <Image
                            key={index}
                            className="size-[50] border-2 object-cover border-white rounded-full"
                            src={element.src}
                            alt={element?.name as string}
                            width={50}
                            title={element?.name as string}
                            height={50}
                        />
                    )
                } else {
                    return (
                        <div key={index}
                            title={element?.name as string}
                            className='bg-primary-500 text-white size-[50px] rounded-full border-2 border-white flex items-center justify-center text-xs'
                        >
                            {element?.fallback || element?.name?.toString().slice(0, 2).toUpperCase()}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default MainAvatarGroup
