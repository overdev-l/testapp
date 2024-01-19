
// import { useSession, signIn, signOut } from "next-auth/react"
import { Badge } from "@nextui-org/badge"
import { IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import { Link } from "@nextui-org/link";
export default function MessageBox() {
  // const { data: Session } = useSession()
  const [isInvisible, setIsInvisible] = useState(false);
  // if (Session) {
  //   return (
      
  //   )
  // }
  return <Link href="/messages">
  <div className="w-8 h-8 rounded-md hover:bg-foreground flex items-center justify-center hover:cursor-pointer">
    <Badge color="danger" content={5} isInvisible={isInvisible} size="sm" shape="circle">
      <IoMdNotifications size={20} className="dark:text-gray-300" />
    </Badge>
  </div>
</Link>
}