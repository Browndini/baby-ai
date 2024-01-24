"use client";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
  apiLimit: number;
  subscribed: boolean;
}
const MobileSidebar = ({ apiLimit, subscribed }: MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={'ghost'} size={'icon'} className='md:hidden'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="p-0" >
        <Sidebar apiLimit={apiLimit} subscribed={subscribed} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
