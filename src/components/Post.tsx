
import { Avatar } from "@nextui-org/avatar"
export default function Post() {

    return (
        <div className="w-full h-fit border-b transition-shadow p-4">
        <div>
            <p
                className="text-gray-900 dark:text-slate-300 text-xl font-semibold truncate flex items-center gap-1.5 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200 w-fit hover:underline hover:cursor-pointer">
                标题
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 mt-1">
                Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive
            </p>
        </div>
        <div className="relative flex items-center gap-x-3 mt-4">
            <div className="relative w-9 h-9 hover:cursor-pointer ">
                <Avatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" className="currentAvatar hover:animate-rotate hover:animate-glow" />
            </div>
            <time dateTime="2023-12-24T16:00:00.000Z" className="text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none">Dec 25, 2023</time>
            <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25">
                Release
            </span>
            <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25">
                IOS
            </span>
        </div>
    </div>
    )
}