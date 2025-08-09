"use client";
import { useEffect, useState } from "react";
import { reviews } from "@/lib/reviews";
import { motion, AnimatePresence } from "framer-motion";

export function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex(i => (i + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const current = reviews[index];

  return (
    <div className="relative max-w-3xl mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-center"
        >
          <p className="text-lg md:text-xl font-medium leading-relaxed">“{current.quote}”</p>
          <div className="mt-4 text-sm font-semibold">{current.author}</div>
          {current.roleOrCompany && <div className="text-xs mt-1 text-neutral-500">{current.roleOrCompany}</div>}
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-center gap-3 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to review ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-neutral-900" : "bg-neutral-300"}`}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button onClick={() => setIndex(i => (i - 1 + reviews.length) % reviews.length)} className="text-xs underline">
          Prev
        </button>
        <button onClick={() => setIndex(i => (i + 1) % reviews.length)} className="text-xs underline">
          Next
        </button>
      </div>
    </div>
  );
}
