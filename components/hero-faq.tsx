import React from "react";
import { TextEffect } from "@/components/ui/text-effect";

export default function HeroFAQ() {
  return (
    <main className="overflow-hidden [--color-primary-foreground:var(--color-white)] [--color-primary:var(--color-green-600)]">
      <section>
        <div className="relative mx-auto max-w-6xl px-6 pb-4 pt-8 lg:pt-8">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h1"
              className="text-balance text-5xl font-medium md:text-6xl"
            >
              Frequently Asked Questions
            </TextEffect>
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
            >
              See the most common billing, service, features, and other questions users like you had about using Aimfox effectively.
            </TextEffect>
          </div>
        </div>
      </section>
    </main>
  );
}
