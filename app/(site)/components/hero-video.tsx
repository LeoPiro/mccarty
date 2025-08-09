"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroVideo() {
  const reduce = useReducedMotion();
  const [canPlay, setCanPlay] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setCanPlay(!reduce);
  }, [reduce]);

  const poster = "/media/hero-poster.jpg"; // switched from .svg to .jpg

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {canPlay && !videoError ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          src="/media/hero.mp4"
          onError={() => setVideoError(true)}
        />
      ) : (
        <img
          src={poster}
          alt="McCarty Companies hero placeholder"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-16 text-white"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold text-balance">Building spaces that move people.</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">Construction, development, and project delivery—on time and on budget.</p>
          <a href="/contact" className="mt-8 inline-block rounded-md bg-white text-neutral-900 px-6 py-3 font-medium">Start Your Project</a>
        </div>
      </motion.div>
    </section>
  );
}
