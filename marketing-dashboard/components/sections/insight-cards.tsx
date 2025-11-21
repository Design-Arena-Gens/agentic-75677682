"use client";

import { BrainCircuit, Flame, Sparkle, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const insights = [
  {
    id: "insight-1",
    title: "Retention Lift",
    body: "Lifecycle nurture sequences triggered by product engagement are driving 74% retention influence. Expand the playbook to include post-onboarding surveys.",
    icon: TrendingUp,
    badge: "+3.2 pts vs last month",
  },
  {
    id: "insight-2",
    title: "Creative Momentum",
    body: "Video-first creatives outperform static assets by 27% in paid social campaigns. Repurpose the Product Launch video for retargeting experiments.",
    icon: Flame,
    badge: "High impact opportunity",
  },
  {
    id: "insight-3",
    title: "Predictive Lead Scoring",
    body: "Attribution AI suggests prioritizing leads engaging with the comparison guide – their close rate is 2.4× higher. Route to your enterprise reps.",
    icon: BrainCircuit,
    badge: "Automation ready",
  },
  {
    id: "insight-4",
    title: "Next Experiment",
    body: "Test AI-generated landing page copy variants informed by the best-performing nurture emails to improve CAC efficiency.",
    icon: Sparkle,
    badge: "Experiment backlog",
  },
];

export function InsightCards() {
  return (
    <Card
      title="Insights & Recommended Plays"
      description="AI-surfaced opportunities that keep growth compounding."
      className="col-span-2"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {insights.map((insight) => {
          const Icon = insight.icon;
          return (
            <div
              key={insight.id}
              className="rounded-2xl border border-indigo-500/10 bg-indigo-500/5 p-4 shadow-sm shadow-indigo-500/10 transition hover:border-indigo-500/20 hover:shadow-md dark:bg-indigo-500/5"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-2xl bg-indigo-500/20 p-2 text-indigo-600 dark:text-indigo-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                  {insight.badge}
                </p>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {insight.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {insight.body}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
