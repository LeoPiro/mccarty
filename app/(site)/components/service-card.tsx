"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ServiceCard({ icon, title, children, index }: { icon: ReactNode; title: string; children: ReactNode; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-lg border p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-neutral-700 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">{children}</p>
    </motion.div>
  );
}
