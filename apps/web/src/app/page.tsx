'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ShieldCheck, Zap, MessageSquare, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <MessageSquare className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">ConversationOS</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </div>
        <Link href="/dashboard">
          <Button variant="default" className="rounded-full px-6">
            Launch App <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="py-1 px-3 rounded-full border-primary/30 text-primary bg-primary/5 animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles className="w-3 h-3 mr-2" /> Now in Early Access
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Unify your conversations. <br />
            <span className="text-primary">Personalize every reply.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The first AI-powered communication OS that helps you manage digital conversations, identify commitments, and generate context-aware replies across all platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="rounded-full px-8 h-12 text-md font-semibold shadow-lg shadow-primary/25">
                Start Communicating Smarter
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-md">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need in one place</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stop switching between apps. ConversationOS brings your messages, contacts, and AI assistance into a single, intelligent workspace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6 text-primary" />}
              title="Unified Inbox"
              description="Connect Slack, WhatsApp, Gmail and more. Manage all your digital interactions from one central hub."
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6 text-secondary" />}
              title="AI-Powered Replies"
              description="Generate context-aware reply suggestions that match your personal tone and style effortlessly."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6 text-primary" />}
              title="Local-First Privacy"
              description="Your data never leaves your machine. We use local inference via Ollama to ensure absolute privacy."
            />
          </div>
        </div>
      </section>

      {/* a "How it works" section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Turn conversations into actions</h2>
            <p className="text-lg text-muted-foreground">
              ConversationOS doesn't just help you chat; it helps you manage your life. Our AI identifies commitments and tasks buried in your messages.
            </p>
            <ul className="space-y-4">
              {[
                "Automatically detect deadlines and promises",
                "Create a unified task list from all platforms",
                "Get reminded of commitments before they expire",
                "Analyze communication styles for better rapport"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <div className="h-5 w-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-muted rounded-3xl p-8 border shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg">
              AI Analysis Active ✨
            </div>
            <div className="space-y-4">
              <div className="h-12 w-3/4 bg-background rounded-lg border p-2 text-xs flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-muted" />
                <span>Can we reschedule the sync to 3pm?</span>
              </div>
              <div className="h-12 w-1/2 bg-primary/10 rounded-lg border border-primary/20 p-2 text-xs flex items-center gap-2 ml-auto">
                <span>I'm free at 3pm!</span>
                <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center ml-auto">
                  <CheckCircle className="w-3 h-3" />
                </div>
              </div>
              <div className="p-4 bg-background rounded-xl border-l-4 border-l-secondary space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                  <Zap className="w-3 h-3" /> Commitment Detected
                </div>
                <p className="text-xs text-muted-foreground">Sync meeting scheduled for tomorrow at 3pm EST.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to unify your digital life?</h2>
          <p className="text-lg opacity-90">
            Join the early access and start experiencing the future of communication management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-md font-semibold">
                Get Started Now
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="rounded-full px-8 h-12 text-md text-primary-foreground hover:bg-primary-foreground/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded-lg">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">ConversationOS</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2026 ConversationOS. Built for privacy and intelligence.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-background border rounded-3xl shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
      <div className="mb-6 p-3 bg-muted rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-3 h-3", className)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
