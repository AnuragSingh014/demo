"use client"; // Add this directive at the top
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { BackgroundGradient } from "./background-gradient";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10",
        className
      )}
      style={{ 
        gridAutoRows: '1fr',
        alignItems: 'stretch' // Ensures items stretch to fill grid area
      }}
    >
      {items.map((item) => (
        <a
          href={item.link}
          key={item.link}
          className=" w-full h-full flex" // Added h-full and flex
          target="_blank"
          rel="noopener noreferrer"
        >
          <BackgroundGradient className="w-full h-full flex flex-col rounded-3xl p-6 bg-white dark:bg-zinc-900">
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">
                {item.description}
              </p>
            </div>
          </BackgroundGradient>
        </a>
      ))}
    </div>
  );
};




export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm", // Changed mt-8 to mt-2 for better spacing
        className
      )}
    >
      {children}
    </p>
  );
};