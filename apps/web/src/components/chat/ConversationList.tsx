'use client';

import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
}

export function ConversationList({ conversations, activeId, onSelect }: { conversations: Conversation[], activeId: string, onSelect: (id: string) => void }) {
  return (
    <div className="flex flex-col h-full bg-muted/30 border-r">
      <div className="p-4 border-b bg-background space-y-4">
        <h2 className="font-bold text-lg">Conversations</h2>
        <div className="relative">
           <input
             type="text"
             placeholder="Search chats..."
             className="w-full text-xs p-2 bg-muted border-none rounded-md focus:ring-1 ring-primary"
           />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-200",
              activeId === conv.id
                ? "bg-background text-foreground shadow-sm border-l-4 border-l-primary"
                : "hover:bg-muted/50 text-muted-foreground"
            )}
          >
            <Avatar className={cn("h-10 w-10 border transition-all", activeId === conv.id && "border-primary ring-2 ring-primary/20")}>
              <AvatarFallback className={cn("font-bold", activeId === conv.id ? "bg-primary text-primary-foreground" : "bg-muted-foreground/20")}>
                {conv.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <span className={cn("font-medium truncate", activeId === conv.id && "text-foreground")}>{conv.name}</span>
                <span className="text-[10px] whitespace-nowrap ml-2 opacity-70">{conv.time}</span>
              </div>
              <p className={cn("text-xs truncate", activeId === conv.id ? "text-muted-foreground" : "text-muted-foreground/60")}>{conv.lastMessage}</p>
            </div>
            {conv.unread > 0 && (
              <Badge className="ml-2 h-5 w-5 flex items-center justify-center rounded-full p-0 text-[10px] bg-primary text-primary-foreground">
                {conv.unread}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
