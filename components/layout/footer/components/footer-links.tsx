import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'
import { footerLinks } from "../utils/links"
import { ArrowRight } from "lucide-react"

const FooterLinks = () => {
    return (
        <section className='app-container border-b border-b-gray-50/10'>
            <div className="grid  lg:grid-cols-5 items-start gap-[24px]">
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
                <div className="col-span-3 grid grid-cols-2 lg:grid-cols-4 items-start gap-[20px]">
                    {
                        footerLinks.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-[20px] items-start"
                            >
                                <h6 className="uppercase font-label-medium text-nowrap">
                                    {item.header}
                                </h6>
                                <div className="flex flex-col items-start">
                                    {
                                        item.links.map((link, idx) => (
                                            <Link
                                                key={idx}
                                                className="py-[6px] bg-gray-900 text-gray-500 flex items-center gap-x-[12px] group font-body-medium-400 transition duration-300 hover:text-white hover:shadow-footer-link"
                                                href={link.href}
                                            >
                                                {link.label}
                                                <ArrowRight size={16} className="invisible group-hover:visible transition duration-300" />
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                    <div
                        className="flex flex-col gap-[20px] items-start"
                    >
                        <h6 className="uppercase font-label-medium text-nowrap">
                            Downlaod our app
                        </h6>
                        <div className="gap-[12px] flex flex-col">
                            <Link
                                href={"#"}
                                target="_blank"
                                className="px-[20px] w-[163px] py-[12px] flex items-center gap-x-[7px] bg-icon-button transition duration-300 hover:bg-gray-800"
                            >
                                <Image
                                    src="/icon/apple.svg"
                                    alt="apple"
                                    width={32}
                                    height={32}
                                    className="size-auto"
                                />
                                <div className="flex text-nowrap flex-col items-center gap-y-0.5">
                                    <span className="font-body-tiny-400 text-gray-300">Download now</span>
                                    <span className="font-body-large-500">App Store</span>
                                </div>
                            </Link>

                            <Link
                                href={"#"}
                                target="_blank"
                                className="px-[20px] w-[163px] py-[12px] flex items-center gap-x-[7px] bg-icon-button transition duration-300 hover:bg-gray-800"
                            >
                                <Image
                                    src="/icon/play-store.svg"
                                    alt="play store"
                                    width={32}
                                    height={32}
                                    className="size-auto"
                                />
                                <div className="flex text-nowrap flex-col items-center gap-y-0.5">
                                    <span className="font-body-tiny-400 text-gray-300">Download now</span>
                                    <span className="font-body-large-500">Play Store</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterLinks
