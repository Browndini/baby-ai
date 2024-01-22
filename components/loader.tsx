import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LoaderProps {
  label: string;
}

export default function Loader({ label }: LoaderProps) {
  return (
    <>
      <div className="h-full p-20 flex flex-col items-center justify-center">
        <div className="relative h-10 w-10 animate-spin-slow">
          <Image alt="Empty" fill src={"/loading.png"} />
        </div>
        <p className="text-muted-foreground text-sm text-center">{label}</p>
      </div>
    </>
  );
}
