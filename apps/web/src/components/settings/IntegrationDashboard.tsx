'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  MessageCircle,
  Mail,
  MoreHorizontal,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  icon: React.ReactNode;
  status: 'connected' | 'disconnected' | 'error';
  lastSync: string;
}

const INTEGRATIONS: Integration[] = [
  { id: 'whatsapp', name: 'WhatsApp', icon: <MessageCircle className="w-5 h-5" />, status: 'connected', lastSync: '1 hour ago' },
  { id: 'email', name: 'Gmail', icon: <Mail className="w-5 h-5" />, status: 'disconnected', lastSync: 'Never' },
];

export function IntegrationDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Connected Platforms</h2>
        <p className="text-muted-foreground text-sm">Manage your communication channels and synchronization settings.</p>
      </div>

      <div className="grid gap-4">
        {INTEGRATIONS.map((int) => (
          <Card key={int.id} className="p-4 flex items-center justify-between group hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                {int.icon}
              </div>
              <div>
                <div className="font-medium">{int.name}</div>
                <div className="text-xs text-muted-foreground">Last sync: {int.lastSync}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {int.status === 'connected' ? (
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-none">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Connected
                </Badge>
              ) : (
                <Badge variant="outline" className="text-muted-foreground">
                  <AlertCircle className="w-3 h-3 mr-1" /> Disconnected
                </Badge>
              )}
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
        <Button variant="outline" className="w-full border-dashed py-6">
          + Add New Integration
        </Button>
      </div>
    </div>
  );
}
