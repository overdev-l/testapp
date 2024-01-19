import { SignedOut, SignedIn, useUser, SignInButton } from "@clerk/nextjs";
import { Avatar } from "@nextui-org/avatar"
import { useAuth } from "@clerk/nextjs";
import { FaUserAlt } from "react-icons/fa";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown"
import Link from "next/link";
export default function Auth() {
    const { signOut } = useAuth()
    const menuAction = (key: string | number) => {
        console.log(key)
        if (key === 'logout') {
            signOut()
        }
    }
    const { user } = useUser();

    return (
        <>
            <SignedIn>
                <Dropdown>
                    <DropdownTrigger>
                        <Avatar src={user?.imageUrl} isBordered
                            as="button" className="currentAvatar hover:cursor-pointer hover:animate-rotate hover:animate-glow w-8 h-8" />
                    </DropdownTrigger>
                    <DropdownMenu variant="flat" aria-label="Profile Actions" onAction={menuAction}>
                        <DropdownItem key="profile" className="h-14 gap-2 dark:text-gray-500">
                            <p className="font-bold">{user?.username}</p>
                            <p className="font-bold">{user?.emailAddresses[0].emailAddress}</p>
                        </DropdownItem>
                        <DropdownItem key="settings" className="dark:text-gray-500">
                            我的草稿
                        </DropdownItem>
                        <DropdownItem key="team_settings" className="dark:text-gray-500">Team Settings</DropdownItem>
                        <DropdownItem key="system" className="dark:text-gray-500">System</DropdownItem>
                        <DropdownItem key="configurations" className="dark:text-gray-500">Configurations</DropdownItem>
                        <DropdownItem key="logout" color="danger" className="dark:text-gray-500">
                            退出登陆
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </SignedIn>
            <SignedOut>
                <Link href="/sign-in">
                <div className="w-8 h-8 rounded-md hover:bg-foreground flex items-center justify-center hover:cursor-pointer">
                    <FaUserAlt className="dark:text-gray-400" size={20} />
                </div>
                </Link>
            </SignedOut>
        </>
    )
}