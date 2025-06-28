"use client"
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function useCountUp(to: number, start: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const increment = to / (duration / 16);
    let raf: number;

    function animate() {
      startVal += increment;
      if (startVal < to) {
        setCount(Math.floor(startVal));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, [to, start, duration]);

  return count;
}

export default function StatsSection() {
    const [ref, inView] = useInView(0.3); // 30% visible
    const campaigns = useCountUp(1200, inView);
    const users = useCountUp(2000, inView);
    const hours = useCountUp(500, inView);
  
    return (
      <section className="py-12 md:py-20" ref={ref}>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
            <h2 className="text-4xl font-medium lg:text-5xl">LeedSeeder in numbers</h2>
            <p>
              LeedSeeder is evolving to be more than just a Chrome Extension. It supports an entire to the APIs and platforms helping marketer and businesses innovate.
            </p>
          </div>
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <div className="space-y-4">
              <div className="text-5xl font-bold">+{campaigns}</div>
              <p>Campaigns Launched</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold">+{users}</div>
              <p>Active Users</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold">+{hours}</div>
              <p>Engagement Hours</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  