"use client";

import { cn } from "@/lib/utils";

type TimelineDotProps = {
  variant?: "active" | "idle";
};

export function TimelineDot({ variant = "idle" }: TimelineDotProps) {
  return (
    <span
      className={cn(
        "relative flex h-3.5 w-3.5 items-center justify-center",
        variant === "active" && "scale-110",
      )}
    >
      <span
        className={cn(
          "absolute h-6 w-6 rounded-full bg-indigo-500/30 blur-md transition",
          variant === "active" ? "opacity-100" : "opacity-0",
        )}
      />
      <span
        className={cn(
          "relative h-3 w-3 rounded-full border-2 border-white transition dark:border-zinc-900",
          variant === "active" ? "bg-indigo-500" : "bg-indigo-200 dark:bg-indigo-900",
        )}
      />
    </span>
  );
}
