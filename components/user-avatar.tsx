import { UserButton, useUser } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export default function UserAvatar() {
  const { user } = useUser();

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>

  );
}
