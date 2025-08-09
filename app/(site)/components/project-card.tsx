"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { motion } from "framer-motion";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group rounded-lg overflow-hidden border bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={project.coverImage} alt={project.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <div className="text-xs font-medium tracking-wide uppercase text-neutral-500">{project.category}</div>
          <h3 className="mt-1 text-lg font-semibold">{project.name}</h3>
          <p className="mt-2 text-sm text-neutral-600 line-clamp-3">{project.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
}
