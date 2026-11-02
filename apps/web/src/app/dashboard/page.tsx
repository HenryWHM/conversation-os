'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { Header } from '@/components/layout/Header';
import { ConversationList } from '@/components/chat/ConversationList';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { ChatInput } from '@/components/chat/ChatInput';
import { AiSuggestionCard } from '@/components/suggestions/AiSuggestionCard';
import { StyleSelector } from '@/components/suggestions/StyleSelector';
import { IntegrationDashboard } from '@/components/settings/IntegrationDashboard';
import { UserProfileSettings } from '@/components/settings/UserProfileSettings';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { MOCK_CONVERSATIONS, MOCK_MESSAGES, MOCK_SUGGESTION } from '@/lib/mocks/chat';
import { Settings, LayoutDashboard, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AppWorkspace() {
  const [view, setView] = useState<'overview' | 'chat' | 'settings'>('overview');
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
        <div className="flex flex-col h-full">
          <div className="p-4 border-b bg-background space-y-2">
             <Button
               variant={view === 'overview' ? 'default' : 'ghost'}
               className="w-full justify-start gap-2"
               onClick={() => setView('overview')}
             >
               <LayoutDashboard className="w-4 h-4" />
               <span className="text-sm font-medium">Overview</span>
             </Button>
          </div>
          <div className="flex-1 overflow-hidden">
            <ConversationList
              conversations={MOCK_CONVERSATIONS}
              activeId={activeId}
              onSelect={(id) => {
                setActiveId(id);
                setView('chat');
              }}
            />
          </div>
          <div className="p-4 border-t bg-background">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setView('settings')}
            >
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Settings</span>
            </Button>
          </div>
        </div>
      }
    >
      <div className="flex flex-col h-full">
        <Header
          title={
            view === 'overview' ? 'Dashboard Overview' :
            view === 'settings' ? 'Settings' :
            (activeConversation?.name || 'Conversation')
          }
        />

        <div className="flex-1 overflow-hidden relative">
          {view === 'overview' ? (
            <div className="p-8 overflow-y-auto h-full bg-muted/20">
              <div className="max-w-5xl mx-auto">
                <DashboardOverview />
              </div>
            </div>
          ) : view === 'settings' ? (
            <div className="p-8 overflow-y-auto h-full bg-muted/20">
              <div className="max-w-4xl mx-auto space-y-12">
                <IntegrationDashboard />
                <div className="h-px bg-border" />
                <UserProfileSettings />
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-hidden">
                <ChatWindow messages={MOCK_MESSAGES} />
              </div>

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
          )}
        </div>
      </div>
    </AppShell>
  );
}
