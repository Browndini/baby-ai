"use client";

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Check, MessagesSquare, Zap } from "lucide-react";
import { Button } from "./ui/button";

export const ProModal = ({  }) => {
  const proModal = useProModal();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
      <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
          
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
              <div className="flex items-center gap-x-2 font-bold py-1">

              Upgrade to Pro
              <Badge variant='baby' className='uppercase text-sm py-1'>
                Pro
              </Badge>
              </div>
            </DialogTitle>
            <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
              <Card className="p-3 border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="p-2 w-fit rounded-md bg-violet-500/10">
                      <MessagesSquare className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-sm">Conversation</div>
                </div>
                  <Check className="text-primary w-5 h-5" />

              </Card>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button size={'lg'} variant={'baby'} className="w-full">
              upgrade
              <Zap className="w-4 h-4 ml-2 fill-white" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}