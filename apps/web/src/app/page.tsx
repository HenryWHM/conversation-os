'use client';

import React, { useState } from 'react';
import { ConversationList } from '@/components/chat/ConversationList';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { AiSuggestionCard } from '@/components/suggestions/AiSuggestionCard';
import { MOCK_CONVERSATIONS, MOCK_MESSAGES, MOCK_SUGGESTION } from '@/lib/mocks/chat';

export default function ChatPage() {
  const [activeId, setActiveId] = useState(MOCK_CONVERSATIONS[0].id);
  const [showSuggestion, setShowSuggestion] = useState(false);

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 hidden md:block">
        <ConversationList
          conversations={MOCK_CONVERSATIONS}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="h-16 border-b flex items-center px-6 justify-between bg-background z-10">
          <div className="flex items-center gap-3">
            <div className="font-bold">
              {MOCK_CONVERSATIONS.find(c => c.id === activeId)?.name}
            </div>
          </div>
          <button
            onClick={() => setShowSuggestion(!showSuggestion)}
            className="text-xs font-medium text-primary hover:underline"
          >
            {showSuggestion ? "Hide AI Suggestion" : "Suggest Reply ✨"}
          </button>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-hidden relative">
          <ChatWindow messages={MOCK_MESSAGES} />
        </div>

        {/* Bottom Suggestion Area */}
        <div className="p-4 max-w-3xl mx-auto w-full">
          {showSuggestion && (
            <AiSuggestionCard
              suggestion={MOCK_SUGGESTION}
              onAccept={() => setShowSuggestion(false)}
            />
          )}

          {/* Basic Input Field (Mock) */}
          <div className="mt-4 flex gap-2">
            <div className="flex-1 h-10 bg-muted rounded-full px-4 flex items-center text-sm text-muted-foreground italic">
              Type a message...
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
