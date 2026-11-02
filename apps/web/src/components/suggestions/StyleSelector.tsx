'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StyleOption {
  id: string;
  label: string;
  description: string;
  icon?: React.ReactNode;
}

export const STYLE_OPTIONS: StyleOption[] = [
  { id: 'professional', label: 'Professional', description: 'Polite and business-ready', icon: '💼' },
  { id: 'casual', label: 'Casual', description: 'Friendly and relaxed', icon: '👋' },
  { id: 'concise', label: 'Concise', description: 'Short and to the point', icon: '⚡' },
  { id: 'warm', label: 'Warm', description: 'Empathetic and welcoming', icon: '☀️' },
];

export function StyleSelector({
  activeStyle,
  onStyleChange
}: {
  activeStyle: string,
  onStyleChange: (styleId: string) => void
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      {STYLE_OPTIONS.map((style) => (
        <Button
          key={style.id}
          variant={activeStyle === style.id ? 'default' : 'outline'}
          size="sm"
          onClick={() => onStyleChange(style.id)}
          className={cn(
            "rounded-full px-3 py-1 h-auto whitespace-nowrap transition-all",
            activeStyle === style.id ? "shadow-md ring-2 ring-primary/20" : "hover:bg-muted"
          )}
        >
          <span className="mr-1.5">{style.icon}</span>
          <span className="text-xs font-medium">{style.label}</span>
        </Button>
      ))}
    </div>
  );
}
