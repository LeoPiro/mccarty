"use client";
import { motion } from "framer-motion";
import { ProofCounters } from "./proof-counters";

export function HeresHowSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-left text-mccarty-dark mb-16">Here&apos;s how</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Descriptive Text */}
          <div className="flex-1">
            <div className="prose prose-neutral max-w-none">
              <p className="text-lg leading-relaxed text-mccarty-medium">
                When you&apos;re planning a new facility, whether it&apos;s a manufacturing facility, auto dealership or any commercial development, you need more than a contractor. You need a partner who can take your project from the first idea through to a finished space that advances your business
              </p>
              <p className="text-lg leading-relaxed text-mccarty-medium mt-6">
                That&apos;s exactly what McCarty delivers. For more than 40 years, we&apos;ve helped New England businesses turn concepts into high-performing facilities by combining engineering precision, construction expertise and full accountability — all within one integrated team
              </p>
            </div>
          </div>
          
          {/* Right Side - Proof Counters */}
          <div className="lg:w-[28rem] lg:flex-shrink-0 lg:self-center">
            <div className="bg-white rounded-xl py-16 px-12 border border-mccarty-light shadow-sm">
              <ProofCounters />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
