'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Header } from '@/components/layout/Header';
import { ConversationList } from '@/components/chat/ConversationList';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { ChatInput } from '@/components/chat/ChatInput';
import { AiSuggestionCard } from '@/components/suggestions/AiSuggestionCard';
import { StyleSelector } from '@/components/suggestions/StyleSelector';
import { MOCK_CONVERSATIONS, MOCK_MESSAGES, MOCK_SUGGESTION } from '@/lib/mocks/chat';

export default function ChatPage() {
  const [activeId, setActiveId] = useState(MOCK_CONVERSATIONS[0].id);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [activeStyle, setActiveStyle] = useState('professional');

  const activeConversation = MOCK_CONVERSATIONS.find(c => c.id === activeId);

  const MOCK_CONTEXT = [
    { type: 'message', label: 'Last message', content: 'reschedule sync to 3pm' },
    { type: 'calendar', label: 'Calendar Availability', content: 'Free 3pm-5pm' },
    { type: 'profile', label: 'User Preference', content: 'Professional tone' },
  ];

  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
  };

  return (
    <AppShell
      sidebar={
        <ConversationList
          conversations={MOCK_CONVERSATIONS}
          activeId={activeId}
          onSelect={setActiveId}
        />
      }
    >
      <div className="flex flex-col h-full">
        <Header
          title={activeConversation?.name || 'Conversation'}
        />

        <div className="flex-1 flex flex-col relative overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 overflow-hidden">
            <ChatWindow messages={MOCK_MESSAGES} />
          </div>

          {/* Interaction Area */}
          <div className="p-4 bg-background border-t">
            <div className="max-w-3xl mx-auto w-full space-y-4">

              {showSuggestion && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Adjustment Style:</span>
                    <StyleSelector
                      activeStyle={activeStyle}
                      onStyleChange={setActiveStyle}
                    />
                  </div>
                  <AiSuggestionCard
                    suggestion={MOCK_SUGGESTION}
                    sources={MOCK_CONTEXT}
                    onAccept={() => {
                      handleSendMessage(MOCK_SUGGESTION);
                      setShowSuggestion(false);
                    }}
                  />
                </div>
              )}

              <div className="flex gap-2 items-center">
                <ChatInput
                  onSend={handleSendMessage}
                />
                <button
                  onClick={() => setShowSuggestion(!showSuggestion)}
                  className="text-xs font-medium text-primary hover:underline px-2 py-1 whitespace-nowrap"
                >
                  {showSuggestion ? "Hide AI" : "Suggest ✨"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
