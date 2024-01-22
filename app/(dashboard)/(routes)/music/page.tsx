"use client";
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs'
import { ArrowRight, MessageSquare, Music } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color:'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color:'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href: '/music',
  }
]
export default function MusicPage() {
  const router = useRouter();
  return (
    <div className='mb-8 space-y-4'>
      <h2 className='text-2xl mb:text-4xl font-bold text-center'>
        everything baby!
      </h2>
      <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
        Chat about baby tings
      </p>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>

      </div>
    </div>
  )
}
