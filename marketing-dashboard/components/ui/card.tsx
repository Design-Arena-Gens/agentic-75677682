"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CardProps = {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  footer?: ReactNode;
  className?: string;
  children: ReactNode;
};

export function Card({
  title,
  description,
  action,
  footer,
  className,
  children,
}: CardProps) {
  return (
    <section
      className={cn(
        "flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-black/5 transition hover:shadow-md hover:shadow-black/10 dark:border-zinc-800 dark:bg-zinc-900",
        className,
      )}
    >
      {(title || description || action) && (
        <header className="mb-4 flex items-start justify-between gap-4">
          <div className="space-y-1">
            {typeof title === "string" ? (
              <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {title}
              </p>
            ) : (
              title
            )}
            {description && (
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                {description}
              </div>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </header>
      )}
      <div className="flex-1">{children}</div>
      {footer && (
        <footer className="mt-4 border-t border-dashed border-zinc-200 pt-4 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          {footer}
        </footer>
      )}
    </section>
  );
}
