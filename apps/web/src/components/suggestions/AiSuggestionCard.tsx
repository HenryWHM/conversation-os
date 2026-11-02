'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, RotateCcw, Copy, Trash2 } from 'lucide-react';
import { ContextIndicators } from '@/components/suggestions/ContextIndicators';

export function AiSuggestionCard({
  suggestion,
  onAccept,
  sources = []
}: {
  suggestion: string,
  onAccept: () => void,
  sources?: any[]
}) {
  const [text, setText] = useState(suggestion);

  return (
    <Card className="p-4 border-primary/30 bg-primary/5 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex gap-1 items-center bg-background">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] uppercase font-bold">AI Draft</span>
          </Badge>
          <span className="text-xs text-muted-foreground italic">Suggested reply based on context</span>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" title="Regenerate">
            <RotateCcw className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" title="Copy">
            <Copy className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" title="Discard">
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {sources.length > 0 && <ContextIndicators sources={sources} />}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-background border rounded-lg p-3 text-sm min-h-[100px] focus:ring-2 focus:ring-primary outline-none transition-all mb-3"
      />

      <div className="flex justify-end">
        <Button size="sm" onClick={() => onAccept()} className="px-4">
          Use Suggestion
        </Button>
      </div>
    </Card>
  );
}
