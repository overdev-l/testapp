import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import Loader from "@/components/loading"
export default function Page() {
    return <main className="max-w-7xl mx-auto flex justify-center items-center h-full">
        <ClerkLoading>
            <Loader />
        </ClerkLoading>
        <ClerkLoaded>
            <SignUp />
        </ClerkLoaded>
    </main>;
}