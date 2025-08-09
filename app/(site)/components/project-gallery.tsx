"use client";
import { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectGallery({ project }: { project: Project }) {
  const images = project.gallery ?? [project.coverImage];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button key={img} onClick={() => { setActive(i); setOpen(true); }} className="relative aspect-[4/3] overflow-hidden rounded-md focus:outline-none focus:ring">
            <Image src={img} alt={`${project.name} image ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col">
            <button aria-label="Close" onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white text-sm underline">Close</button>
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="relative w-full max-w-5xl aspect-video">
                <Image src={images[active]} alt={project.name} fill className="object-contain" />
              </div>
            </div>
            <div className="p-4 flex justify-center gap-2 flex-wrap">
              {images.map((img, i) => (
                <button key={img} onClick={() => setActive(i)} className={`h-14 w-20 relative rounded overflow-hidden border ${i === active ? "ring-2 ring-white" : "opacity-60 hover:opacity-90"}`}>
                  <Image src={img} alt="thumb" fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
