"use client"
import { useState } from "react"
import Tabs from "@/components/Tabs"
import Post from "@/components/Post"
const tabs = [
    {
        label: "服务器",
        index: 0
    },
    {
        label: "域名",
        index: 1
    },
    {
        label: "数据库",
        index: 2
    },
    {
        label: "创意",
        index: 3
    },
    {
        label: "问答",
        index: 4
    },
]
export default function Home() {
    const [active, setActive] = useState(0)
    return (
        <div className="w-full h-full flex flex-col">
            <Tabs active={active} items={tabs} change={setActive} />
            <div className="flex-1 mt-6">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
        </div>
    )
}