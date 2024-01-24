"use client";
import { cn } from "@/lib/utils";
import { LayoutDashboard, MessagesSquare, Settings } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./free-counter";

const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface SidebarProps {
  apiLimit: number;
  subscribed: boolean;
}
export default function Sidebar({
  apiLimit = 0,
  subscribed = false,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#E9BB86] text-blue-950">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src={"/logo.png"} />
          </div>
          <h1 className={cn("text-xl font-bold", monserrat.className)}>
            Baby Helper
          </h1>
        </Link>
        <div>
          {routes.map((route) => (
            <Link
              className={cn(
                pathname === route.href
                  ? "text-slate-800 bg-white/10"
                  : "text-zinc-400",
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-slate-800 hover:bg-white/10 rounded-lg transition"
              )}
              href={route.href}
              key={route.href}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {!subscribed && <FreeCounter apiLimit={apiLimit} />}
    </div>
  );
}
