"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  index: number;
  overlay?: boolean;
}

export function ServiceCard({ icon, title, children, index, overlay = false }: ServiceCardProps) {
  const baseClasses = "rounded-lg border p-6 shadow-sm hover:shadow-md transition-all duration-300";
  const overlayClasses = overlay 
    ? "bg-white/95 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl" 
    : "bg-white border-neutral-200 hover:shadow-md";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`${baseClasses} ${overlayClasses}`}
    >
      <div className={`mb-4 ${overlay ? 'text-neutral-800' : 'text-neutral-700'}`}>{icon}</div>
      <h3 className={`text-lg font-semibold mb-2 ${overlay ? 'text-neutral-900' : 'text-neutral-800'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${overlay ? 'text-neutral-700' : 'text-neutral-600'}`}>{children}</p>
    </motion.div>
  );
}
