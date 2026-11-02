'use client';

import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'sent' | 'received';
  content: string;
  timestamp: string;
}

export function ChatWindow({ messages }: { messages: readonly Message[] }) {
  return (
    <ScrollArea className="h-full p-4">
      <div className="flex flex-col gap-6">
        {messages.map((msg, index) => {
          const isFirstInGroup = index === 0 || messages[index - 1].role !== msg.role;

          return (
            <div
              key={msg.id}
              className={cn(
                "flex w-full",
                msg.role === 'sent' ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] px-4 py-2 text-sm shadow-sm transition-all",
                  "rounded-2xl",
                  msg.role === 'sent'
                    ? "bg-primary text-primary-foreground rounded-tr-none"
                    : "bg-muted text-foreground rounded-tl-none",
                  !isFirstInGroup && (msg.role === 'sent' ? "mt-1" : "mt-1")
                )}
              >
                <p className="leading-relaxed">{msg.content}</p>
                <span className={cn(
                  "text-[10px] opacity-60 mt-1 block",
                  msg.role === 'sent' ? "text-right" : "text-left"
                )}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
