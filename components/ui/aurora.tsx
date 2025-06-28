"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const Aurora = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 transition-bg dark:bg-zinc-900",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora": "repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%)",
              "--dark-gradient": "repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%)",
              "--white-gradient": "repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%)",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              "pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] invert filter will-change-transform",
              "after:absolute after:inset-0 after:mix-blend-difference after:content-['']",
              "dark:invert-0",
              showRadialGradient && 
                "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
            )}
            style={{
              backgroundImage: "var(--white-gradient), var(--aurora)",
              backgroundSize: "300%, 200%",
              backgroundPosition: "50% 50%, 50% 50%",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "var(--white-gradient), var(--aurora)",
                backgroundSize: "200%, 100%",
                backgroundAttachment: "fixed",
              }}
            />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};