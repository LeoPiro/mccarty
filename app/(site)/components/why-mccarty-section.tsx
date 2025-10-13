"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "One source. Less stress.",
    body: "Coordinating multiple firms for a single project often leads to delays, confusion and costly miscommunication. McCarty removes that complexity by managing every stage of the process, from design and permitting, through construction and delivery.\n\nWith one dedicated partner handling the process, you can avoid the stress of juggling engineers, contractors and project managers. We take full responsibility for every phase, so you can stay focused on your business while we ensure your project is delivered as planned."
  },
  {
    title: "Smarter spending",
    body: "Budgets matter and we manage costs with discipline. By keeping all our services in-house, we avoid unnecessary outside services, eliminate redundant work and prevent the use of materials that add expense without adding value.\n\nWith construction and design working together from day one, every choice is evaluated for efficiency, constructability and performance. The result is a project that maximizes your investment while meeting the highest standards of quality."
  },
  {
    title: "Accountability that matters",
    body: "Every project faces challenges, but what defines success is how they are addressed. We take full ownership of your project from start to finish. If challenges arise, we address them directly and resolve them without delay. At McCarty, accountability is more than a value, it is one of our operating principles."
  },
  {
    title: "Timelines that you can trust",
    body: "Your schedule is central to the success of your project. With disciplined project management, proactive scheduling and experienced teams, we maintain momentum and deliver projects on time and on budget. You can move into your space with confidence, knowing it will be ready when your business needs it."
  }
];

export function WhyMcCartySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark">Why businesses choose McCarty</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-xl p-8 border border-mccarty-light shadow-sm hover:shadow-lg hover:border-mccarty-medium transition-all duration-300 cursor-default"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4 group-hover:text-mccarty-medium transition-colors duration-300">
              {reason.title}
            </h3>
            <div className="space-y-4">
              {reason.body.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-base leading-relaxed text-mccarty-medium">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

