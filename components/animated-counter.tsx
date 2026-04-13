"use client";

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  countTo?: number;
  value: string;
  prefix?: string;
  suffix?: string;
};

export function AnimatedCounter({ countTo, value, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(countTo ? 0 : value);

  useEffect(() => {
    if (!countTo) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 900;
    const started = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - started) / duration, 1);
      const next = Math.round(progress * countTo);
      setDisplay(`${prefix}${next}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [countTo, prefix, suffix, value]);

  return <>{display}</>;
}
