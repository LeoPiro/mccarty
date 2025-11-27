"use client";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function EngineeringPage() {
  const reduce = useReducedMotion();
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    setCanPlay(!reduce);
  }, [reduce]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Video Section */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          {canPlay ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="/media/Flyoverofcars.mp4"
            />
          ) : (
            <div className="absolute inset-0 bg-mccarty-dark" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-16 text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">McCarty Engineering</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">Building strong foundations for communities and businesses</p>
            
            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('civil-design')}
                className="px-6 py-3 bg-white/90 hover:bg-white text-mccarty-dark font-semibold rounded-md transition-colors"
              >
                Civil engineering
              </button>
              <button
                onClick={() => scrollToSection('development-plans')}
                className="px-6 py-3 bg-white/90 hover:bg-white text-mccarty-dark font-semibold rounded-md transition-colors"
              >
                Development plans
              </button>
              <button
                onClick={() => scrollToSection('utility-design')}
                className="px-6 py-3 bg-white/90 hover:bg-white text-mccarty-dark font-semibold rounded-md transition-colors"
              >
                Utility design
              </button>
              <button
                onClick={() => scrollToSection('construction-monitoring')}
                className="px-6 py-3 bg-white/90 hover:bg-white text-mccarty-dark font-semibold rounded-md transition-colors"
              >
                Construction monitoring
              </button>
            </div>
          </motion.div>
        </section>

        {/* Intro Section */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-lg leading-relaxed text-mccarty-medium">
            McCarty Engineering provides complete civil design, permitting, and construction support services for commercial, industrial, and residential development projects of every scale. Working in tandem with McCarty Associates, McCarty Engineering forms the design foundation of our integrated, end-to-end project delivery model. From site evaluation to final inspection, our engineers bring technical precision, environmental responsibility, and practical insight to every project—helping clients navigate complex regulations and move confidently from concept to completion.
          </p>
        </section>

        {/* Civil Engineering Design - Image on Right */}
        <section id="civil-design" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text on Left */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark mb-6">Civil engineering design</h2>
                <div className="space-y-6 text-lg leading-relaxed text-mccarty-medium">
                  <p>
                    Our engineers develop efficient, code-compliant site plans that balance functionality, cost, and sustainability. Every design considers grading, drainage, access, and infrastructure to ensure safe and durable outcomes. Leveraging advanced CAD and modeling software, we produce highly accurate layouts that streamline permitting, reduce change orders and minimize construction delays.
                  </p>
                  <p>
                    Each project begins with a comprehensive analysis of existing conditions including soil composition, utilities, and environmental features, allowing us to design systems that work with the land rather than against it. From parking lot layout to roadway alignment and stormwater management, our approach prioritizes reliability and constructability.
                  </p>
                </div>
              </div>
              {/* Image on Right */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/media/civil engineering design.jpg"
                  alt="Civil engineering design and blueprints"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Development Plans - Image on Left */}
        <section id="development-plans" className="bg-mccarty-light py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image on Left */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/media/development-plans.jpg"
                  alt="Development plans and site planning"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text on Right */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark mb-6">Commercial, industrial and residential development plans</h2>
                <div className="space-y-6 text-lg leading-relaxed text-mccarty-medium">
                  <p>
                    McCarty Engineering prepares detailed development plans for a wide range of projects. Our plans address everything from traffic flow and accessibility to drainage systems and utility coordination, all while meeting the requirements of local planning boards and state agencies. Our plans address every critical element of site development including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Traffic flow and vehicular/pedestrian accessibility</li>
                    <li>Drainage and stormwater management systems</li>
                    <li>Utility coordination and infrastructure integration</li>
                    <li>Compliance with zoning, planning board, and state agency requirements</li>
                  </ul>
                  <p>
                    By coordinating closely with architects, contractors, and local officials, we help clients navigate the approval process efficiently. Our proactive approach identifies potential permitting challenges early, minimizing delays and ensuring each development plan aligns with long-term operational and environmental goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Utility Design - Image on Right */}
        <section id="utility-design" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text on Left */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark mb-6">Utility design</h2>
                <div className="space-y-6 text-lg leading-relaxed text-mccarty-medium">
                  <p>
                    Reliable utilities are the backbone of every successful development. We design and coordinate complete water, sewer, and electrical systems that meet current codes and support future capacity needs. Each design accounts for site elevation, flow rates, and material specifications to ensure safe, efficient, and maintainable infrastructure.
                  </p>
                  <p>
                    Our team integrates utility layouts with site grading and roadway systems to prevent conflicts and simplify construction sequencing. Whether designing new service connections or upgrading existing infrastructure, we focus on long-term functionality, durability, and ease of maintenance.
                  </p>
                </div>
              </div>
              {/* Image on Right */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/media/util_design_frompdf.png"
                  alt="Utility infrastructure and civil works"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Construction Monitoring - Image on Left */}
        <section id="construction-monitoring" className="bg-mccarty-light py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image on Left */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/media/construction monitoring.JPG"
                  alt="Construction monitoring and site inspection"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text on Right */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark mb-6">Construction monitoring</h2>
                <div className="space-y-6 text-lg leading-relaxed text-mccarty-medium">
                  <p>
                    Effective construction monitoring bridges the gap between design and execution. Our engineers provide on-site oversight to verify that work aligns with approved plans, specifications, and permit conditions. This includes reviewing submittals, performing field inspections, and preparing compliance reports for regulatory agencies.
                  </p>
                  <p>
                    By maintaining open communication with contractors and owners, we ensure any design clarifications are addressed quickly to keep the project moving forward. This consistent oversight helps maintain quality control, protect the owner&apos;s investment, and deliver projects that meet every regulatory and technical requirement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Video Background with Overlay */}
        <section className="relative w-full h-[600px] overflow-hidden">
          {/* Full Width Background Video */}
          <video
            className="absolute inset-0 h-full w-full object-cover object-bottom"
            autoPlay
            muted
            loop
            playsInline
            src="/media/Tree_clearing.mp4"
          />

          {/* Dark Text Box Overlay - Right Side */}
          <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-12">
            <div className="bg-[#3d3d3d] p-8 md:p-12 max-w-xl w-full md:w-auto">
              <div className="text-white space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
                  From plans to performance
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  McCarty Associates transforms our engineering designs into finished spaces through integrated construction management and site development expertise
                </p>
                <a href="/associates" className="mt-4 inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase text-sm transition-colors duration-200">
                  Explore our construction management capabilities with McCarty Associates →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

