import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'

const RegisterOffer = () => {
    return (
        <section className='app-container border-b border-b-gray-50/10'>
            <div className='grid lg:grid-cols-2 gap-10 lg:gap-34 justify-between items-center '>
                <div className='flex flex-col gap-y-[40px] items-start order-2 lg:order-1'>
                    <div className="flex flex-col gap-y-[24px] items-start">
                        <h3 className='font-heading-3'>
                            Start teaching with us and inspire others
                        </h3>
                        <p className="text-gray-300 text-body-large-400">
                            Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.
                        </p>
                    </div>
                    <Button variant='primary-500' asChild size='lg'>
                        <Link href='/register'>Register now</Link>
                    </Button>
                </div>
                <Image
                    src="/images/register-now.jpg"
                    alt="register now"
                    width={648}
                    height={382}
                    className="w-auto h-auto object-cover order-1 lg:order-2"
                />
            </div>
        </section>
    )
}

export default RegisterOffer
