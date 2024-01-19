"use client";
import Image from "next/image"
import { Link } from "@nextui-org/link"

import { ThemeSwitcher } from "./ThemeSwitcher";
import MessageBox from "./MessageBox";
import Auth from "./Auth";
import "@/assets/styles/avatar.css"
import "@/assets/styles/logo.css"

export default function AppHeader() {
    return (
        <header className="w-full bg-gray-50 dark:bg-[#030712] backdrop-blur-sm h-16 border-b dark:border-gray-600 shadow-sm top-0">
            <div className="mx-auto max-w-7xl h-full flex justify-between items-center px-6 md:px-10">
                <Link href="/" className="text-gray-900">
                    <div className="flex justify-center items-center gap-1 parent hover:cursor-pointer transition-transform duration-500">
                        <Image src="/gdn.svg" width="30" height="30" alt="logo" className="child-rotate transition-transform duration-500" />
                        <span className="text-1xl font-bold dark:text-gray-200">GDN</span>
                    </div>
                </Link>
                <div className="flex justify-center gap-4 items-center">

                    <Link href="/forums" className="text-gray-900 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500 font-bold">
                        讨论
                    </Link>
                    <Link href="/share" className="text-gray-900 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500 font-bold">
                        资源提交
                    </Link>
                    <Auth></Auth>

                    <MessageBox></MessageBox>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}