'use client';

import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'sent' | 'received';
  content: string;
  timestamp: string;
}

export function ChatWindow({ messages }: { messages: Message[] }) {
  return (
    <ScrollArea className="h-full p-4">
      <div className="flex flex-col gap-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex w-full mb-4",
              msg.role === 'sent' ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm",
                msg.role === 'sent'
                  ? "bg-primary text-primary-foreground rounded-tr-none"
                  : "bg-muted text-foreground rounded-tl-none"
              )}
            >
              <p>{msg.content}</p>
              <span className={cn(
                "text-[10px] opacity-70 mt-1 block",
                msg.role === 'sent' ? "text-right" : "text-left"
              )}>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
