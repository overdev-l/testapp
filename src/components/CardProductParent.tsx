import { Link } from "@nextui-org/link"
import Image from "next/image"
import { CgTag } from "react-icons/cg";
export default function CardProductParent({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full h-fit">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-1 mt-1">
                    <CgTag className="w-6 h-6 dark:text-gray-400" />
                    <span className="text-lg text-gray-800 font-bold dark:text-gray-400 select-none">服务器</span>
                </div>
                <Link className="flex parent hover:cursor-pointer transition-transform duration-500">
                    <span className="text-gray-800 dark:text-gray-400 text-sm">m</span>
                    <Image src="/gdn.svg" className="child-rotate transition-transform duration-500" width="10" height="10" alt="more" />
                    <span className="text-gray-800 dark:text-gray-400 text-sm">re</span>
                </Link>
            </div>
            <div className="w-full grid xl:grid-cols-4 gap-x-2 gap-y-4 mt-2 md:grid-cols-3 sm:grid-cols-2">
                {children}
            </div>
        </section>

    )
}