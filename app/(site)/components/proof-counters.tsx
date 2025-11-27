"use client";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountTo(target: number, start: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1800;
    const startTs = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - startTs) / duration);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, start]);
  return val;
}

export function ProofCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const a = useCountTo(44, inView);
  const b = useCountTo(2500000, inView);
  const c = useCountTo(100, inView);
  const d = useCountTo(300, inView);

  const items = [
    { label: "Years in business", value: a },
    { label: "SF delivered", value: `${b.toLocaleString()}+` },
    { label: "On-time delivery", value: `${c}%` },
    { label: "Projects completed", value: `${d}+` },
    { label: "Client satisfaction", value: "100%" },
  ];

  return (
    <div ref={ref}>
      <div className="space-y-12">
        {/* Top Row - 2 items */}
        <div className="grid grid-cols-2 gap-8 text-center">
          {items.slice(0, 2).map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-2xl md:text-3xl font-semibold text-mccarty-dark text-center w-full min-h-[2.5rem] flex items-center justify-center font-mono">
                {item.value}
              </div>
              <div className="mt-2 text-xs text-mccarty-medium leading-tight text-center w-full">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 3 items */}
        <div className="grid grid-cols-3 gap-8 text-center">
          {items.slice(2).map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 2) * 0.05 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-2xl md:text-3xl font-semibold text-mccarty-dark text-center w-full min-h-[2.5rem] flex items-center justify-center font-mono">
                {item.value}
              </div>
              <div className="mt-2 text-xs text-mccarty-medium leading-tight text-center w-full">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
