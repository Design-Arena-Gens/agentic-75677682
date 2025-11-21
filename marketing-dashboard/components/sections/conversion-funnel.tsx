"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const funnelSteps = [
  {
    id: "awareness",
    label: "Awareness",
    value: "182K",
    completion: 100,
    delta: "+12.4%",
  },
  {
    id: "engagement",
    label: "Engagement",
    value: "47.2K",
    completion: 62,
    delta: "+8.2%",
  },
  {
    id: "mql",
    label: "MQL",
    value: "4,286",
    completion: 28,
    delta: "+12.1%",
  },
  {
    id: "sql",
    label: "SQL",
    value: "1,196",
    completion: 12,
    delta: "+9.4%",
  },
  {
    id: "closed",
    label: "Closed Won",
    value: "312",
    completion: 100,
    delta: "+6.8%",
  },
];

export function ConversionFunnel() {
  return (
    <Card
      title="Full-Funnel Health"
      description="Where prospects graduate into revenue. Completion measured vs target."
    >
      <div className="space-y-4">
        {funnelSteps.map((step, index) => (
          <div key={step.id} className="space-y-2">
            <div className="flex items-baseline justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-zinc-800 dark:text-zinc-100">
                  {step.label}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-indigo-500">
                <span>{step.value}</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-600 dark:text-emerald-300">
                  {step.delta}
                </span>
              </div>
            </div>
            <div className="relative h-3 rounded-full bg-indigo-100/60 dark:bg-indigo-900/40">
              <div
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 transition-all",
                )}
                style={{
                  width: `${step.completion}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
