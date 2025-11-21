"use client";

import { ChannelDistributionChart } from "@/components/charts/channel-distribution-chart";
import { Card } from "@/components/ui/card";
import type { ChannelShare } from "@/lib/data";

type ChannelBreakdownProps = {
  data: ChannelShare[];
};

export function ChannelBreakdown({ data }: ChannelBreakdownProps) {
  return (
    <Card
      title="Channel Velocity"
      description="Lead volume vs spend (k$). Surface areas for budget reallocation."
    >
      <ChannelDistributionChart data={data} />
    </Card>
  );
}
