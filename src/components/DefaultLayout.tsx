import AppHeader from "./AppHeader"
export default function DefaultLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="w-full h-fit min-h-screen bg-background relative font-sans">
            <AppHeader />
            <div className="h-full mx-auto max-w-7xl px-6 md:px-10 pt-6">
                {children}
            </div>
        </main>
    )
}