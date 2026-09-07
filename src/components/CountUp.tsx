"use client";

import { useEffect, useRef, useState } from "react";


export function CountUp({ value, displayValue, durationMs = 1200 }: { value: number; displayValue: string; durationMs?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [display, setDisplay] = useState(displayValue);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !value) {
      setDisplay(displayValue);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const prefix = displayValue.match(/^[^\d]*/)?.[0] ?? "";
          const suffix = displayValue.match(/[^\d]*$/)?.[0] ?? "";
          const step = (now: number) => {
            const progress = Math.min((now - start) / durationMs, 1);
            const current = Math.floor(progress * value);
            setDisplay(`${prefix}${current.toLocaleString("en-US")}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
            else setDisplay(displayValue);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
   
  }, [value, displayValue]);

  return (
    <span ref={ref} aria-label={displayValue}>
      {display}
    </span>
  );
}
