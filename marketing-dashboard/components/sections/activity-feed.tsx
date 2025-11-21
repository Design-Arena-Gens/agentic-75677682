"use client";

import { Activity } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { TimelineDot } from "@/components/ui/timeline-dot";

type ActivityFeedProps = {
  data: Activity[];
};

export function ActivityFeed({ data }: ActivityFeedProps) {
  return (
    <Card
      title="Live Activity"
      description="Automations and collaborators keeping campaigns on track."
    >
      <ol className="space-y-5">
        {data.map((item, index) => (
          <li key={item.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <TimelineDot variant={index === 0 ? "active" : "idle"} />
              {index !== data.length - 1 && (
                <span className="h-full w-px flex-1 bg-gradient-to-b from-indigo-400/60 via-indigo-200/40 to-transparent dark:from-indigo-300/60 dark:via-indigo-950" />
              )}
            </div>
            <div className="rounded-2xl bg-indigo-500/5 px-4 py-3 shadow-sm shadow-indigo-500/10 dark:bg-indigo-500/10">
              <p className="text-xs font-medium uppercase tracking-wider text-indigo-500">
                {item.time}
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {item.actor}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.action}</p>
              <p className="mt-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                {item.impact}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}
