import classNames from "classnames"

export default function Tabs({
    items,
    active,
    change
}: {
    items: Array<{
        label: string
        index: number
    }>
    active: number
    change: (val: number) => void
}) {
    const changeVal = (val: number) => {
        if (val === active) return
        change(val)
    }
    return (
        <div className="w-full p-2 flex justify-start items-center gap-x-2 bg-foreground rounded-md  sticky">
            {
                items.map(tag => (
                    <div
                        className={classNames(
                            "px-2 py-1 hover:cursor-pointer select-none hover:bg-slate-300 dark:hover:bg-slate-700 dark:text-gray-400 rounded-md text-gray-700 font-mono text-sm",
                            active === tag.index && 'bg-slate-300 dark:bg-slate-700' 
                        )}
                        
                        key={tag.index}
                        onClick={() => changeVal(tag.index)}
                    >
                        {tag.label}
                    </div>))

            }

        </div>
    )
}
// 'bg-slate-300': active === item.index,
//             'dark:bg-slate-700': active === item.index
// {{ item.label }}
