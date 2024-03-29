"use client";
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color:'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation',
  },
]
export default function DashboardPage() {
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
        {tools.map((tool) => (
          <Card 
            onClick={() => router.push(tool.href)}
          className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition' key={tool.href}>
            <div className='flex items-center gap-x-4'>
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />

              </div>
              <div className='font-semibold'>{tool.label}</div>
            </div>
            <ArrowRight className='w-5 h-5' />
          </Card>
        ))}
      </div>
    </div>
  )
}
