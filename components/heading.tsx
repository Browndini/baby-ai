import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export default function Heading({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) {
  return (
    <>
    <div className="flex items-center p-4 lg:px-8 gap-x-3 mb-8">
      <div className={cn('p-2 w-fit rounded-mb', bgColor)}>
        <Icon className={cn('w-10 h-10', iconColor)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </>
  );
}
