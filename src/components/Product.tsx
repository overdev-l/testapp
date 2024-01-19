import Image from "next/image"
export default function Product() {

    return (
        <div className="w-full h-28 flex flex-col p-3 hover:cursor-pointer productContainer gap-x-1 dark:bg-slate-700 bg-slate-200 rounded-xl shadow-xl hover:-translate-y-2 transition-transform duration-200">
        <div className="w-full flex items-center gap-1 ">
            <Image src="/gdn.svg" width="50" height="50" alt="logo" />
            <div className="flex flex-col gap-1 flex-1">
                <h3 className="text-sm font-bold text-gray-600 dark:text-gray-300 target">GDN</h3>
                <p className="text-sm w-full text-gray-400 dark:text-gray-500 overflow-hidden whitespace-nowrap truncate">global developers navigator</p>
            </div>
        </div>
        <div className="flex items-end flex-1 gap-1 ">
            <span className="inline-flex items-center font-medium rounded-full text-xs px-2 py-1 bg-primary-500 dark:bg-primary-400 text-white dark:text-gray-900">
                新人限免
            </span>
        </div>
    </div>
    )
}