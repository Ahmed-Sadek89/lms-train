import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className='bg-hero-section '>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full justify-between">
                <div className="w-full order-2 lg:order-1 flex items-center justify-center lg:pl-[200px] lg:pt-[100px] px-3 py-6">
                    <div className="flex flex-col gap-y-[20px] lg:gap-y-[40px] items-start">
                        <h1 className="font-display-3 text-gray-900">
                            Learn with expert anytime anywhere
                        </h1>
                        <p className="text-gray-700 md:font-body-xxxl-400">
                            Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
                        </p>
                        <Button asChild variant={"primary-500"} size={"lg"}>
                            <Link href={"/register"}>Create Account</Link>
                        </Button>
                    </div>
                </div>
                <div className="w-full h-full lg:w-auto order-1 lg:order-2 flex items-stretch  lg:justify-end">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Hero Background"
                        width={900}
                        height={548}
                        loading="eager"
                        className="object-cover w-full h-full lg:[clip-path:polygon(16%_0,100%_0%,100%_100%,0%_100%)]"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
