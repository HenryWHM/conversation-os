'use client';

import React, { useState } from 'react';
import { SendHorizontal, Paperclip, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-2 p-2 bg-background border rounded-2xl focus-within:ring-1 ring-primary transition-all">
      <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 shrink-0">
        <Paperclip className="h-5 w-5 text-muted-foreground" />
      </Button>

      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Message..."
        className="flex-1 min-h-[40px] max-h-[200px] border-none focus-visible:ring-0 resize-none py-2 px-1 text-sm"
        rows={1}
        disabled={disabled}
      />

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 shrink-0">
          <Smile className="h-5 w-5 text-muted-foreground" />
        </Button>
        <Button
          onClick={handleSend}
          size="icon"
          className="rounded-full h-9 w-9 shrink-0 transition-all"
          disabled={disabled || !text.trim()}
        >
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
