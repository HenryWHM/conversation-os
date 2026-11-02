'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: string;
  type: 'primary' | 'secondary' | 'muted';
}

function StatCard({ title, value, description, icon, trend, type }: StatCardProps) {
  const variants = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    muted: "bg-muted text-muted-foreground"
  };

  return (
    <Card className="p-6 flex flex-col justify-between space-y-4 transition-all hover:shadow-md group">
      <div className="flex justify-between items-start">
        <div className={cn(
          "p-2 rounded-lg",
          type === 'primary' ? "bg-primary/10 text-primary" : type === 'secondary' ? "bg-secondary/10 text-secondary" : "bg-muted/50 text-muted-foreground"
        )}>
          {icon}
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-xs font-medium text-green-600">
            <TrendingUp className="w-3 h-3" /> {trend}
          </div>
        )}
      </div>
      <div>
        <div className="text-sm font-medium opacity-80">{title}</div>
        <div className="text-3xl font-bold mt-1">{value}</div>
        <div className="text-xs opacity-70 mt-1">{description}</div>
      </div>
    </Card>
  );
}

export function DashboardOverview() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Pending Commitments"
          value="12"
          description="Across all platforms"
          icon={<Calendar className="w-5 h-5" />}
          trend="+2 this week"
          type="primary"
        />
        <StatCard
          title="Urgent Replies"
          value="4"
          description="Require immediate attention"
          icon={<AlertCircle className="w-5 h-5" />}
          type="secondary"
        />
        <StatCard
          title="AI Efficiency"
          value="84%"
          description="Reply automation rate"
          icon={<Zap className="w-5 h-5" />}
          trend="+5% increase"
          type="muted"
        />
        <StatCard
          title="Total Interactions"
          value="1.2k"
          description="Conversations managed"
          icon={<MessageSquare className="w-5 h-5" />}
          type="muted"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Priority Tasks */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">Priority Commitments</h3>
              <Button variant="ghost" size="sm" className="text-primary">View All <ArrowRight className="ml-1 w-3 h-3" /></Button>
            </div>

            <div className="space-y-3">
              {[
                { label: "Reschedule sync with Sarah", time: "Today 3pm", platform: "Slack", status: "urgent" },
                { label: "Send contract to Marcus", time: "Tomorrow", platform: "Email", status: "pending" },
                { label: "Review project alpha docs", time: "Friday", platform: "WhatsApp", status: "pending" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border bg-background hover:border-primary/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "h-2 w-2 rounded-full",
                      item.status === 'urgent' ? "bg-destructive" : "bg-secondary"
                    )} />
                    <span className="text-sm font-medium">{item.label}</span>
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">
                      {item.platform}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{item.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Quick Insights */}
        <div className="space-y-6">
          <Card className="p-6 space-y-4">
            <h3 className="font-bold text-lg">AI Insights</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  <TrendingUp className="w-3 h-3" /> Communication Trend
                </div>
                <p className="text-xs text-muted-foreground">You're responding 20% faster to Slack messages this week.</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                  <Zap className="w-3 h-3" /> Tone Suggestion
                </div>
                <p className="text-xs text-muted-foreground">Your "Professional" tone is seeing higher engagement with clients.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Helper components for icons since I don't have a separate Zap component
function Zap({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
