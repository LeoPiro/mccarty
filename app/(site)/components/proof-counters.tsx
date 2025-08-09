"use client";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountTo(target: number, start: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1200;
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
  const a = useCountTo(25, inView);
  const b = useCountTo(1800000, inView);
  const c = useCountTo(98, inView);
  const d = useCountTo(0, inView);

  const items = [
    { label: "Years in Business", value: a },
    { label: "Sq Ft Delivered", value: b.toLocaleString() },
    { label: "On‑time Delivery", value: `${c}%` },
    { label: "Recordable Incidents", value: d },
  ];

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-semibold">{item.value}</div>
            <div className="mt-2 text-sm opacity-70">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
