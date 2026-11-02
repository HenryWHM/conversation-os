'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Info, Link as LinkIcon, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContextSource {
  type: 'message' | 'profile' | 'calendar' | 'email';
  label: string;
  content: string;
}

export function ContextIndicators({ sources }: { sources: ContextSource[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {sources.map((source, idx) => (
        <Badge
          key={idx}
          variant="secondary"
          className="flex items-center gap-1.5 px-2 py-0.5 bg-muted/50 text-[10px] text-muted-foreground border-none"
        >
          {source.type === 'message' && <LinkIcon className="w-3 h-3" />}
          {source.type === 'profile' && <User className="w-3 h-3" />}
          {source.type === 'calendar' && <Info className="w-3 h-3" />}
          <span className="max-w-[100px] truncate">{source.label}</span>
        </Badge>
      ))}
    </div>
  );
}
