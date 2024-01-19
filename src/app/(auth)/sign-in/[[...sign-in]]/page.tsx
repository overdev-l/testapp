import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import Loader from "@/components/loading"
export default function Page() {
    return (
        <main className="max-w-7xl mx-auto flex justify-center items-center h-full">
            <ClerkLoading>
                <Loader />
            </ClerkLoading>
            <ClerkLoaded>
                <SignIn path="/sign-in" redirectUrl="/" afterSignInUrl="/" signUpUrl="/sign-up" />
            </ClerkLoaded>
        </main>
    )
}