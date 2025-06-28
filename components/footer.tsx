"use client";

import React from "react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

import { FloatingDock } from "@/components/ui/floating-dock";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { PointerHighlight } from "./ui/pointer-highlight";

const footerLinks = [
  { title: "Pricing", href: "#" },
  { title: "Faq", href: "#" },
  { title: "Blogs", href: "#" },
  { title: "Book a call", href: "#" },
  { title: "Help", href: "#" },
  { title: "About", href: "#" },
];

const dockLinks = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Products",
    icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Components",
    icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Twitter",
    icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
];

export default function FooterSection() {
  return (
    // <footer className="relative h-[55vh] bg-black dark:bg-[oklch(0.147_0.004_49.25)] text-neutral-800 dark:text-neutral-200 pt-10  overflow-hidden">
    <footer className="relative h-[55vh] bg-white dark:bg-[oklch(0.147_0.004_49.25)] text-neutral-800 dark:text-neutral-200 pt-10  overflow-hidden">
      {/* Background beams behind everything */}
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0 pointer-events-none" /> 

      {/* Content overlaid above the background */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center justify-between">
  {/* Leadseeder title - centered with more spacing */}
  <h2 className="text-3xl sm:text-4xl font-extrabold mb-16 sm:mb-20 tracking-tight flex items-center justify-center">
    <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 rounded-md py-6 text-center"
            pointerClassName="text-yellow-500"
          >
            <span className="text-center relative z-10 px-5 py-5">Leadseeder</span>
          </PointerHighlight>

  </h2>

  {/* Bottom grouped content */}
  <div className="w-full space-y-2 sm:space-y-3 ">
    {/* Footer links */}
    <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-2 text-xs sm:text-sm">
      {footerLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-muted-foreground hover:text-primary transition-colors duration-150 px-2"
        >
          {link.title}
        </Link>
      ))}
    </div>

    {/* Floating dock */}
    <div className="w-full flex justify-center">
      <FloatingDock 
        mobileClassName="translate-y-20" 
        items={dockLinks} 
      />
    </div>

    {/* Copyright */}
    <div className="text-xs text-muted-foreground pb-4">
      © {new Date().getFullYear()} Leadseeder. Not an official product of LinkedIn™.
    </div>
  </div>


</div>

    </footer>
  );
}
