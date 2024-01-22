import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface EmptyProps {
  label: string;
}

export default function Empty({ label }: EmptyProps) {
  return (
    <>
      <div className="h-full p-20 flex flex-col items-center justify-center">
        <div className="relative h-72 w-72">
          <Image alt="Empty" fill src={"/empty.png"} />
        </div>
        <p className="text-muted-foreground text-sm text-center">{label}</p>
      </div>
    </>
  );
}
