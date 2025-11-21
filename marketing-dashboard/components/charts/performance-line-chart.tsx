"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TrendPoint } from "@/lib/data";

type PerformanceLineChartProps = {
  data: TrendPoint[];
};

export function PerformanceLineChart({ data }: PerformanceLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ left: 12, right: 12, top: 12, bottom: 0 }}>
        <defs>
          <linearGradient id="leadsGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.25} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="conversionsGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="4 4" stroke="#e4e4e7" />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} width={40} />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickFormatter={(value) => `$${value}k`}
          axisLine={false}
          tickLine={false}
          width={50}
        />
        <Tooltip
          cursor={false}
          formatter={(value: number, name) => {
            if (name === "leads") return [`${value} leads`, "Leads"];
            if (name === "conversions") return [`${value} conversions`, "Conversions"];
            if (name === "spend") return [`$${value}k`, "Spend"];
            return [`${value}`, name];
          }}
          contentStyle={{
            borderRadius: "0.75rem",
            border: "1px solid rgba(24,24,27,0.08)",
            boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
          }}
        />
        <Area
          type="monotone"
          dataKey="leads"
          stroke="#2563eb"
          strokeWidth={2}
          fill="url(#leadsGradient)"
          name="Leads"
        />
        <Area
          type="monotone"
          dataKey="conversions"
          stroke="#22c55e"
          strokeWidth={2}
          fill="url(#conversionsGradient)"
          name="Conversions"
        />
        <Line
          type="monotone"
          dataKey="spend"
          yAxisId="right"
          stroke="#f59e0b"
          strokeWidth={2}
          dot={false}
          name="Spend"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
