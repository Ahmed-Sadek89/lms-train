import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const FooterLinks = () => {
    return (
        <section className='app-container border-b border-b-gray-50/10'>
            <div className="grid grid-cols-5 items-start gap-[24px]">
                <div className="col-span-2">
                    <div className="flex flex-col gap-y-[26px]">
                        <div className="flex flex-col gap-y-[20px]">
                            <Image
                                src="/logo-2.svg"
                                alt="logo"
                                width={176}
                                height={46}
                                className="object-cover"
                            />
                            <p className="w-[300px] font-body-medium-400 text-gray-500">
                                Aliquam rhoncus ligula est, non pulvinar elit
                                convallis nec. Donec mattis odio at.
                            </p>
                        </div>
                        <div className="flex items-center gap-x-[12px]">
                            {
                                Array(5).fill(0).map((_, index) => (
                                    <Button key={index} asChild variant={"icon"} size={"icon-size"}>
                                        <Link target="_blank" href={"#"}>
                                            <Image
                                                src="/icon/twitter.svg" alt="twitter"
                                                width={18} height={18}
                                            />
                                        </Link>
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-span-3">links</div>
            </div>
        </section>
    )
}

export default FooterLinks
