import Image from 'next/image'
import Link from 'next/link'

const ClientCard = () => {
    return (
        <Link
            href={"#"}
            target='_blank'
            className='shadow-client-card transition duration-300 hover:scale-105 bg-white  h-[100px] flex items-center justify-center py-[50px]'
        >
            <Image
                src={`/images/client.svg`}
                width={100}
                height={23}
                alt='client'
                className='object-contain w-auto h-auto'
            />
        </Link>
    )
}

export default ClientCard
