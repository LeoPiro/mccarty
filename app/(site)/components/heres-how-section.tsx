"use client";
import { motion } from "framer-motion";
import { ProofCounters } from "./proof-counters";

export function HeresHowSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-neutral-900 mb-16">Here&apos;s How</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Descriptive Text */}
          <div className="flex-1">
            <div className="prose prose-neutral max-w-none">
              <p className="text-lg leading-relaxed text-neutral-700">
                Whether we&apos;re focusing on the design, construction and performance of buildings or expanding into new disciplines, we never limit ourselves, applying our expertise to all types of projects across a range of industries. Our approach combines rigorous analysis with innovative thinking to deliver solutions that exceed expectations.
              </p>
              <p className="text-lg leading-relaxed text-neutral-700 mt-6">
                From concept to completion, we leverage cutting-edge technology and proven methodologies to ensure every project meets the highest standards of quality, safety, and efficiency.
              </p>
            </div>
          </div>
          
          {/* Right Side - Proof Counters */}
          <div className="lg:w-[28rem] lg:flex-shrink-0 lg:self-center">
            <div className="bg-neutral-50 rounded-xl py-16 px-12 border border-neutral-200">
              <ProofCounters />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
