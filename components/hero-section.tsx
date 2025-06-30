"use client";
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HoverBorderGradient } from './ui/hover-border-gradient';
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from 'framer-motion';
import { FlipWords } from "./ui/flip-words";
const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    const words = ["Automation", "preservation", "Automation", "Automation"];

    return (
        <main className=" bg-white dark:bg-[oklch(0.147_0.004_49.25)] text-black dark:text-neutral-200 rounded-md mx-3 flex pt-6 pb-4 items-center justify-center overflow-hidden">
            <section className=" w-full">
                <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
                    
                    <div className="relative z-20 text-center">
                        
                        <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mx-auto max-w-4xl text-balance text-6xl font-bold text-black dark:text-neutral-200 md:text-7xl lg:text-6xl xl:text-[5.25rem]">
    Modern <br/> <FlipWords words={words} /> <br/> Solutions for Lead Generation
    </motion.h1>
  
  <TextEffect
    per="line"
    preset="fade-in-blur"
    speedSegment={0.3}
    delay={0.5}
    as="p"
    className="relative z-20 mx-auto max-w-2xl py-8 text-center text-lg text-black dark:text-neutral-200 md:text-base">
    Automate LinkedIn connection requests, Send automated follow-up messages, and visit the profiles of your prospects. 10x your LinkedIn outreach and book meetings with Leadseeder
  </TextEffect>
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
                            <div
                                key={1}
                                className="rounded-[calc(var(--radius-xl)+0.125rem)] border border-white/20 bg-foreground/10 p-0.5">
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-xl bg-[#7abf9b] px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-[#3c8388] border-[#54a295] focus:ring-offset-2 focus:ring-offset-black dark:bg-black dark:text-white">
                                    <Link href="#link">
                                        <span className="text-nowrap">Get started</span>
                                    </Link>
                                </Button>
                            </div>
                            <HoverBorderGradient
  key={2}
  as={Link}
  href={"#"}
  containerClassName="rounded-xl"
  className="h-10.5 px-6 py-2.5 text-black bg-white border-white backdrop-blur-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-black"
  duration={1}
  clockwise={true}
>
  <span className="text-nowrap">Request a demo</span>
</HoverBorderGradient>

                        </AnimatedGroup>
                    </div>

                    {/* Overlay */}
                    {/* <div className="absolute inset-0 z-10 h-full w-full bg-white dark:bg-black/40" /> */}
                    
                    {/* 3D Marquee Background */}
                    {/* <ThreeDMarquee
                        className="pointer-events-none absolute inset-0 h-full w-full"
                        images={images}
                    /> */}
                </div>
            </section>
        </main>
    )
}
