"use client";

import { ArrowDownRight, ArrowUpRight, DollarSign, Info, LineChart, Target, Users } from "lucide-react";
import type { Metric } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type MetricGridProps = {
  data: Metric[];
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  pipeline: DollarSign,
  leads: Users,
  cac: Target,
  retention: LineChart,
};

export function MetricGrid({ data }: MetricGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {data.map((metric) => {
        const Icon = iconMap[metric.id] ?? LineChart;
        const indicator =
          metric.trend === "up" ? (
            <ArrowUpRight className="h-4 w-4 text-emerald-500" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-rose-500" />
          );

        return (
          <Card
            key={metric.id}
            className="group relative overflow-hidden bg-gradient-to-br from-white via-white to-indigo-50/40 dark:from-zinc-950 dark:via-zinc-950 dark:to-indigo-950/20"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-indigo-500 dark:text-indigo-300">
                  {metric.label}
                </span>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {metric.value}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                      metric.trend === "up"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
                    )}
                  >
                    {indicator}
                    {metric.change}%
                  </span>
                </div>
              </div>
              <span className="rounded-2xl bg-indigo-500/10 p-3 text-indigo-600 transition group-hover:bg-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <Info className="h-4 w-4 shrink-0 text-indigo-400" aria-hidden />
              <span>{metric.tooltip}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
