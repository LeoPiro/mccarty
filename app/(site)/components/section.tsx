"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({ id, title, children, subtitle, className = "" }: { id?: string; title?: string; subtitle?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {title && <h2 className="text-3xl md:text-4xl font-semibold text-balance">{title}</h2>}
        {subtitle && <p className="mt-4 text-neutral-600 max-w-2xl">{subtitle}</p>}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </motion.div>
    </section>
  );
}
