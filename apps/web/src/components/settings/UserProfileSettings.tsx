'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { User, Brain, ShieldCheck } from 'lucide-react';

export function UserProfileSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-20 w-20 rounded-full bg-muted border-2 border-primary flex items-center justify-center text-2xl font-bold">
          WH
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Personalization</h2>
          <p className="text-muted-foreground text-sm">Fine-tune how the AI represents you.</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-md mb-2">
            <User className="w-5 h-5 text-primary" /> Basic Info
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Display Name</Label>
              <Input defaultValue="William Henry" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" defaultValue="william@example.com" />
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-md mb-2">
            <Brain className="w-5 h-5 text-primary" /> AI Behavior
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors">
              <div className="space-y-0.5">
                <Label className="cursor-pointer">Predictive Drafting</Label>
                <p className="text-xs text-muted-foreground">Auto-generate suggestions for all incoming messages.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors">
              <div className="space-y-0.5">
                <Label className="cursor-pointer">Strict Professionalism</Label>
                <p className="text-xs text-muted-foreground">Ensure all drafts adhere to formal business standards.</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-md mb-2">
            <ShieldCheck className="w-5 h-5 text-primary" /> Privacy & Security
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors">
              <div className="space-y-0.5">
                <Label className="cursor-pointer">Local Inference Only</Label>
                <p className="text-xs text-muted-foreground">Process all AI drafts using Ollama locally. No data leaves this machine.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors">
              <div className="space-y-0.5">
                <Label className="cursor-pointer">Encrypted History</Label>
                <p className="text-xs text-muted-foreground">Encrypt conversation history at rest using a master key.</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button className="px-8">Save Changes</Button>
      </div>
    </div>
  );
}
