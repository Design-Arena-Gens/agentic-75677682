import type { ComponentType, ReactNode } from "react";
import { ActivityFeed } from "@/components/sections/activity-feed";
import { CampaignTable } from "@/components/sections/campaign-table";
import { ChannelBreakdown } from "@/components/sections/channel-breakdown";
import { ConversionFunnel } from "@/components/sections/conversion-funnel";
import { InsightCards } from "@/components/sections/insight-cards";
import { MetricGrid } from "@/components/sections/metric-grid";
import { PerformanceOverview } from "@/components/sections/performance-overview";
import { activities, campaigns, channelShare, metrics, performanceTrend } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Bell, ChevronDown, Flame, Sparkle, Wand2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen px-4 pb-16 pt-10 sm:px-8 lg:px-12">
      <main className="mx-auto flex max-w-7xl flex-col gap-10">
        <Hero />
        <MetricGrid data={metrics} />
        <section className="grid gap-6 xl:grid-cols-3">
          <div className="space-y-6 xl:col-span-2">
            <PerformanceOverview data={performanceTrend} />
            <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <CampaignTable data={campaigns} />
              <ConversionFunnel />
            </section>
            <InsightCards />
          </div>
          <aside className="space-y-6">
            <ChannelBreakdown data={channelShare} />
            <ActivityFeed data={activities} />
            <GrowthLevers />
          </aside>
        </section>
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="glass-surface relative overflow-hidden rounded-3xl px-8 py-10 shadow-2xl">
      <GradientOrbs />
      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Pulse by Orbits
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 drop-shadow-sm dark:text-slate-100">
            Marketing command center for teams that scale demand intelligently
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Align growth, pipeline, and retention in a single workspace. AI augments your team with
            proactive insights and automations so you can focus on the next breakout campaign.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton icon={Sparkle}>Generate next play</PrimaryButton>
            <GhostButton icon={Bell}>Set alert</GhostButton>
            <GhostButton icon={ChevronDown}>Share dashboard</GhostButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <HeroStat
            label="Forecasted ARR influenced"
            value="$4.8M"
            chip="+42% Q/Q"
            accent="from-indigo-500 to-sky-500"
          />
          <HeroStat
            label="AI-recommended experiments"
            value="6"
            chip="3 ready to launch"
            accent="from-emerald-500 to-lime-400"
          />
        </div>
      </div>
    </section>
  );
}

function HeroStat({
  label,
  value,
  chip,
  accent,
}: {
  label: string;
  value: string;
  chip: string;
  accent: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg shadow-indigo-500/10 backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className={cn("absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br opacity-80", accent)} />
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
      <span className="mt-4 inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-100">
        {chip}
      </span>
    </div>
  );
}

function PrimaryButton({ children, icon: Icon }: { children: ReactNode; icon: ComponentType<{ className?: string }> }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900">
      <Icon className="h-4 w-4" aria-hidden />
      {children}
    </button>
  );
}

function GhostButton({ children, icon: Icon }: { children: ReactNode; icon: ComponentType<{ className?: string }> }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/50 px-5 py-2 text-sm font-semibold text-slate-600 shadow-sm shadow-indigo-500/10 transition hover:-translate-y-0.5 hover:bg-white/80 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
      <Icon className="h-4 w-4" aria-hidden />
      {children}
    </button>
  );
}

function GradientOrbs() {
  return (
    <>
      <span className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />
      <span className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl" />
      <span className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-2xl" />
    </>
  );
}

function GrowthLevers() {
  const levers = [
    {
      id: "level-1",
      title: "Creative refresh cadence",
      description: "Experiment with AI-generated video scripts to extend Meta Ads fatigue horizon.",
      score: "High",
    },
    {
      id: "level-2",
      title: "Lifecycle sequencing",
      description: "Trigger win-back SMS for churn-risk cohorts after intent signals flag drop-off.",
      score: "Medium",
    },
    {
      id: "level-3",
      title: "Attribution weighting",
      description: "Blend media mix model insights with first-party data to unlock extra 12% ROAS.",
      score: "High",
    },
  ];

  return (
    <div className="rounded-3xl border border-indigo-500/10 bg-white/70 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur dark:border-indigo-500/20 dark:bg-indigo-950/20">
      <div className="flex items-center gap-2 text-sm font-semibold text-indigo-500">
        <Flame className="h-4 w-4" aria-hidden />
        Acceleration Levers
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Initiatives surfaced by AI co-pilot with the biggest projected boost to quarterly pipeline.
      </p>
      <ul className="mt-5 space-y-4">
        {levers.map((lever) => (
          <li key={lever.id} className="rounded-2xl border border-indigo-500/10 bg-indigo-50/40 p-4 dark:border-indigo-500/20 dark:bg-indigo-500/10">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {lever.title}
              </p>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                {lever.score} impact
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{lever.description}</p>
          </li>
        ))}
      </ul>
      <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:bg-indigo-600">
        <Wand2 className="h-4 w-4" aria-hidden />
        Automate with AI
      </button>
    </div>
  );
}
