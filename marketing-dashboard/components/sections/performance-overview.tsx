"use client";

import { PerformanceLineChart } from "@/components/charts/performance-line-chart";
import { Card } from "@/components/ui/card";
import type { TrendPoint } from "@/lib/data";

type PerformanceOverviewProps = {
  data: TrendPoint[];
};

export function PerformanceOverview({ data }: PerformanceOverviewProps) {
  return (
    <Card
      title="Pipeline Traction"
      description="Leads and conversions across the last 12 months. Spend represented in k$."
      action={
        <div className="flex gap-2 rounded-full border border-zinc-200 bg-white px-1 py-1 text-xs dark:border-zinc-800 dark:bg-zinc-900">
          <button className="rounded-full bg-indigo-500 px-3 py-1 font-semibold text-white shadow-sm shadow-indigo-500/30">
            12M
          </button>
          <button className="rounded-full px-3 py-1 font-semibold text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            30D
          </button>
          <button className="rounded-full px-3 py-1 font-semibold text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            Custom
          </button>
        </div>
      }
    >
      <PerformanceLineChart data={data} />
    </Card>
  );
}
