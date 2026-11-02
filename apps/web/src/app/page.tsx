'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Header } from '@/components/layout/Header';
import { ConversationList } from '@/components/chat/ConversationList';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { ChatInput } from '@/components/chat/ChatInput';
import { AiSuggestionCard } from '@/components/suggestions/AiSuggestionCard';
import { MOCK_CONVERSATIONS, MOCK_MESSAGES, MOCK_SUGGESTION } from '@/lib/mocks/chat';

export default function ChatPage() {
  const [activeId, setActiveId] = useState(MOCK_CONVERSATIONS[0].id);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const activeConversation = MOCK_CONVERSATIONS.find(c => c.id === activeId);

  const handleSendMessage = (message: string) => {
    console.log("Sending message:", message);
    // In a real app, we'd update the state or call an API
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
                <AiSuggestionCard
                  suggestion={MOCK_SUGGESTION}
                  onAccept={() => {
                    handleSendMessage(MOCK_SUGGESTION);
                    setShowSuggestion(false);
                  }}
                />
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
