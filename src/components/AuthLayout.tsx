import AuthHeader from "./AuthHeader"
export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="w-full h-full bg-background min-h-screen relative font-sans">
            <AuthHeader></AuthHeader>
            <div className="h-full min-h-screen mx-auto max-w-7xl flex items-center justify-center">
                {children}
            </div>
        </main>
    )
}