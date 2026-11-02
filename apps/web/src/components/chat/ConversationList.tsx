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
      <div className="p-4 border-b bg-background">
        <h2 className="font-bold text-lg">Conversations</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={cn(
              "flex items-center gap-3 p-4 cursor-pointer transition-colors hover:bg-muted/50",
              activeId === conv.id && "bg-muted"
            )}
          >
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                {conv.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <span className="font-medium truncate">{conv.name}</span>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap ml-2">{conv.time}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
            </div>
            {conv.unread > 0 && (
              <Badge className="ml-2 h-5 w-5 flex items-center justify-center rounded-full p-0 text-[10px]">
                {conv.unread}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
