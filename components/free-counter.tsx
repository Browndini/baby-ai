"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNT } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
  apiLimit: number;
}
export const FreeCounter = ({ apiLimit }: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);
  const { onOpen } = useProModal();

  useEffect(() => {
    setMounted(true);
  }, [apiLimit]);

  if (!mounted) return null;

  return (
    <div className="px-3">
      <Card className="bg-white/30 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-slate-800 mb-4 space-y-2">
            <p>
              {apiLimit} / {MAX_FREE_COUNT} Free Questions
            </p>
            <Progress
              className="h-3"
              value={(apiLimit / MAX_FREE_COUNT) * 100}
            />
          </div>
          <Button onClick={onOpen} variant='baby' className="w-full">
            Upgrade <Zap className="w-4 h-4 ml-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
