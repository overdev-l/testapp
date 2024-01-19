import Image from "next/image"
import { Link } from "@nextui-org/link"

import "@/assets/styles/logo.css"

export default function AuthHeader() {
    return (
        <header className="w-full  h-16">
            <div className="mx-auto max-w-7xl h-full flex justify-between items-center px-6 md:px-10">
            <nav className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            <Link className="text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-700 font-bold" href="/">
                                首页
                            </Link>
                            <Link className="text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-700 font-bold" href="/forums">
                                讨论
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}