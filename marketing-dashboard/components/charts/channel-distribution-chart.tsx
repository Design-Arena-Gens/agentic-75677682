"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { ChannelShare } from "@/lib/data";

type ChannelDistributionChartProps = {
  data: ChannelShare[];
};

export function ChannelDistributionChart({ data }: ChannelDistributionChartProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 8, right: 24, left: 12, bottom: 8 }}
      >
        <CartesianGrid strokeDasharray="4 4" stroke="#e4e4e7" horizontal={false} />
        <XAxis type="number" hide />
        <YAxis
          dataKey="channel"
          type="category"
          axisLine={false}
          tickLine={false}
          width={110}
        />
        <Tooltip
          cursor={{ fill: "rgba(148, 163, 184, 0.08)" }}
          formatter={(value: number, name) => {
            if (name === "leads") {
              return [`${value} leads`, "Leads"];
            }
            if (name === "spend") {
              return [`$${value}k`, "Spend"];
            }
            return value;
          }}
          contentStyle={{
            borderRadius: "0.75rem",
            border: "1px solid rgba(24,24,27,0.08)",
            boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
          }}
        />
        <Bar dataKey="leads" radius={[12, 12, 12, 12]} fill="#6366f1" maxBarSize={26} />
        <Bar
          dataKey="spend"
          radius={[12, 12, 12, 12]}
          fill="#f97316"
          barSize={12}
          maxBarSize={14}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
