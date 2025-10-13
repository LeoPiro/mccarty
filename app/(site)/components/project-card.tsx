"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { motion } from "framer-motion";
import { useState } from "react";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group rounded-lg overflow-hidden border border-mccarty-light bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-mccarty-light/30">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-mccarty-medium"></div>
            </div>
          )}
          
          {!imageError ? (
            <Image 
              src={project.coverImage} 
              alt={project.name} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onLoad={handleImageLoad}
              onError={handleImageError}
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-mccarty-light">
              <div className="text-center text-mccarty-medium">
                <div className="text-2xl mb-2">🏗️</div>
                <p className="text-xs">Image unavailable</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="text-xs font-medium tracking-wide uppercase text-mccarty-medium">{project.category}</div>
          <h3 className="mt-1 text-lg font-semibold text-mccarty-dark">{project.name}</h3>
          <p className="mt-2 text-sm text-mccarty-medium line-clamp-3">{project.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
}
