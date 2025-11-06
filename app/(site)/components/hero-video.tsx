"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroVideo() {
  const reduce = useReducedMotion();
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    setCanPlay(!reduce);
  }, [reduce]);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {canPlay ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/media/Werfern_interior.mp4"
        />
      ) : (
        <div className="absolute inset-0 bg-mccarty-dark" />
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
          <h1 className="text-4xl md:text-6xl font-semibold text-balance">A better way to build</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">Integrated design and construction — from start to finish</p>
          <a href="/contact" className="mt-8 inline-block rounded-md bg-white text-mccarty-dark px-6 py-3 font-medium hover:bg-mccarty-light transition-colors">Start your project</a>
        </div>
      </motion.div>
    </section>
  );
}
