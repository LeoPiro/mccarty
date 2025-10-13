"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  children: ReactNode;
  index: number;
  overlay?: boolean;
}

export function ServiceCard({ title, children, index, overlay = false }: ServiceCardProps) {
  const baseClasses = "rounded-lg border p-8 shadow-sm hover:shadow-md transition-all duration-300";
  const overlayClasses = overlay 
    ? "bg-white/95 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl" 
    : "bg-white border-mccarty-light hover:shadow-md";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`${baseClasses} ${overlayClasses}`}
    >
      <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${overlay ? 'text-mccarty-dark' : 'text-mccarty-dark'}`}>{title}</h3>
      <p className={`text-base md:text-lg leading-relaxed ${overlay ? 'text-mccarty-medium' : 'text-mccarty-medium'}`}>{children}</p>
    </motion.div>
  );
}
