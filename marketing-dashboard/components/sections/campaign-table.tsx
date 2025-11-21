"use client";

import { ArrowDownRight, ArrowUpRight, Pause, Rocket, Sparkles } from "lucide-react";
import type { Campaign } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CampaignTableProps = {
  data: Campaign[];
};

const statusConfig: Record<
  Campaign["status"],
  { label: string; color: string; icon: React.ComponentType<{ className?: string }> }
> = {
  Live: { label: "Live", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300", icon: Rocket },
  Paused: { label: "Paused", color: "bg-amber-500/15 text-amber-600 dark:text-amber-300", icon: Pause },
  Draft: { label: "Draft", color: "bg-zinc-500/15 text-zinc-600 dark:text-zinc-300", icon: Sparkles },
  Ended: { label: "Ended", color: "bg-rose-500/15 text-rose-600 dark:text-rose-300", icon: Pause },
};

export function CampaignTable({ data }: CampaignTableProps) {
  return (
    <Card
      title="Campaign Performance"
      description="Key KPIs across priority programs. ROI calculated on last-touch attribution."
      action={
        <button className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-600 shadow-sm transition hover:bg-indigo-500/20 dark:text-indigo-300">
          Add Campaign
        </button>
      }
    >
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-widest text-zinc-500">
              <th className="pb-3 pr-4 font-medium">Campaign</th>
              <th className="pb-3 pr-4 font-medium">Channel</th>
              <th className="pb-3 pr-4 font-medium">Status</th>
              <th className="pb-3 pr-4 font-medium">CPA</th>
              <th className="pb-3 pr-4 font-medium">CTR</th>
              <th className="pb-3 pr-4 font-medium">Spend</th>
              <th className="pb-3 font-medium">ROI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {data.map((campaign) => {
              const status = statusConfig[campaign.status];
              const Icon = status.icon;
              const TrendIcon = campaign.trend === "up" ? ArrowUpRight : ArrowDownRight;

              return (
                <tr key={campaign.id} className="text-zinc-700 dark:text-zinc-200">
                  <td className="py-3 pr-4 font-medium text-zinc-900 dark:text-zinc-50">
                    {campaign.name}
                  </td>
                  <td className="py-3 pr-4">{campaign.channel}</td>
                  <td className="py-3 pr-4">
                    <span
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                        status.color,
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {status.label}
                    </span>
                  </td>
                  <td className="py-3 pr-4 font-medium">${campaign.cpa}</td>
                  <td className="py-3 pr-4 font-medium">{campaign.ctr}%</td>
                  <td className="py-3 pr-4 font-medium">${campaign.spend.toLocaleString()}</td>
                  <td className="py-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                        campaign.trend === "up"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
                          : "bg-rose-500/10 text-rose-600 dark:text-rose-300",
                      )}
                    >
                      <TrendIcon className="h-4 w-4" aria-hidden />
                      {campaign.roi}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
