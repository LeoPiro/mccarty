"use client";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AssociatesPage() {
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
              src="/media/Excavation.mp4"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4">McCarty Associates</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">Comprehensive construction and site development services</p>
            
            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('site-inspections')}
                className="px-6 py-3 bg-white/90 hover:bg-white text-mccarty-dark font-semibold rounded-md transition-colors"
              >
                Site inspections
              </button>
              <button
                onClick={() => scrollToSection('project-management')}
                className="px-6 py-3 bg-white/90 hover:bg-white text-mccarty-dark font-semibold rounded-md transition-colors"
              >
                Project management
              </button>
              <button
                onClick={() => scrollToSection('site-development')}
                className="px-6 py-3 bg-white/90 hover:bg-white text-mccarty-dark font-semibold rounded-md transition-colors"
              >
                Site development
              </button>
              <button
                onClick={() => scrollToSection('construction-management')}
                className="px-6 py-3 bg-white/90 hover:bg-white text-mccarty-dark font-semibold rounded-md transition-colors"
              >
                Construction management
              </button>
            </div>
          </motion.div>
        </section>

        {/* Intro Section */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-lg leading-relaxed text-mccarty-medium">
            McCarty Associates provides complete construction management, site development and project oversight services for commercial, industrial and municipal clients. From initial inspection to project completion, our team delivers the precision, accountability, and efficiency needed to keep complex developments on track — all under one integrated partner. McCarty Associates works hand-in-hand with McCarty Engineering to ensure each project moves seamlessly from design through construction — under one coordinated team.
          </p>
        </section>

        {/* Site Inspections - Image on Right */}
        <section id="site-inspections" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text on Left */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark mb-6">Site inspections</h2>
                <div className="space-y-6 text-lg leading-relaxed text-mccarty-medium">
                  <p>
                    McCarty Associates provides specialized inspection services tailored to the needs of financial institutions, property owners, and investors. Our team conducts thorough evaluations to verify that work is in place and completed in accordance with approved plans before funds are released or transactions move forward.
                  </p>
                  <p>
                    For clients considering property purchases, our inspections help identify capital expenditure needs and potential issues that could impact value or performance. These detailed assessments offer clear, actionable insights—helping lenders and buyers make informed decisions with confidence.
                  </p>
                </div>
              </div>
              {/* Image on Right */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/media/site inspections.jpg"
                  alt="Construction site inspection professional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Management */}
        <section id="project-management" className="bg-mccarty-light py-16">
          <div className="mx-auto max-w-6xl px-6">
            {/* Centered Header and Intro */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark mb-6">Project management</h2>
              <p className="text-lg leading-relaxed text-mccarty-medium max-w-4xl mx-auto">
                Project management services extend far beyond simple scheduling. McCarty Associates embody dedicated client advocacy, robust financial stewardship, and proactive regulatory risk mitigation.
              </p>
            </div>
            
            {/* Stacked Layout for Services */}
            <div className="space-y-12">
              {/* Owner and Investor Representation */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Owner and investor representation</h3>
                <p className="text-lg leading-relaxed text-mccarty-medium">
                  We act as a trusted representative, overseeing the entire construction lifecycle on behalf of the client, investor, or lending institution. Our team oversees budgets, schedules and contracts while coordinating communication among all stakeholders. With transparent reporting and proactive issue resolution, clients can make confident, informed decisions that keep their projects on schedule and within scope.
                </p>
              </div>

              {/* Building Owner and Bank Representation */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Building owner and bank representation, contract fulfillment and funds dispersal</h3>
                <p className="text-lg leading-relaxed text-mccarty-medium">
                  For lenders and owners, we offer rigorous funds control and contract oversight. Our specialists verify construction draw requests, change orders and lien waivers to ensure payments are accurate and properly dispersed. This is all backed by detailed documentation, giving stakeholders clear visibility into progress and expenses. This provides a crucial layer of financial and contractual security for the owner or lending institution, mitigating the risks associated with non-compliant performance or mismanaged funds.
                </p>
              </div>

              {/* Project Remediation */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Project remediation and recovery consultation</h3>
                <p className="text-lg leading-relaxed text-mccarty-medium">
                  When projects experience delays, contractor default, or quality concerns, our remediation experts step in to assess and recover work efficiently. We conduct on-site evaluations, review plans and contracts, and prepare cost-to-complete analysis that guide next steps. Through detailed monitoring, daily reporting, and progress validation, we restore control, manage cost recovery, and help owners bring challenged projects to successful completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Site Development */}
        <section id="site-development" className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            {/* Header with Image on Left */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Excavator Image on Left */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/media/excavator_mccarty.png"
                  alt="McCarty excavator"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Header and Intro on Right */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark mb-6">Site development</h2>
                <p className="text-lg leading-relaxed text-mccarty-medium">
                  Preparing a site for construction demands technical experience, environmental sensitivity and precise execution. Our site development services cover every aspect of pre-construction work, managing everything from early clearing and grading to final paving and utility installation. Each phase is coordinated to ensure compliance with local, state and federal regulations.
                </p>
              </div>
            </div>
            
            {/* 2x2 Grid for Services */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Top Left - Site Clearing */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Site clearing, demolition, recycling and disposal</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg text-mccarty-medium">
                  <li>Complete removal of existing structures, vegetation and debris</li>
                  <li>Detailed assessment of soil conditions, existing utilities, and drainage patterns</li>
                  <li>Emphasis on responsible material recycling and disposal</li>
                </ul>
              </div>

              {/* Top Right - Excavation */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Excavation, grading and earthwork</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg text-mccarty-medium">
                  <li>Full-service excavation and grading for stable foundations and precise elevations</li>
                  <li>Includes foundation excavation, trenching for underground utilities, and bulk earth movement</li>
                  <li>Utilizes modern equipment and CAD-based modeling for smooth, accurate surfaces that optimize construction performance</li>
                </ul>
              </div>

              {/* Bottom Left - Stormwater */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Stormwater drainage, erosion control and retention ponds</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg text-mccarty-medium">
                  <li>Design and installation of stormwater systems that manage runoff and protect surrounding environments</li>
                  <li>Incorporation of proven methods to balance water flow, prevent erosion, and ensure long-term site stability</li>
                  <li>Compliance with all environmental and municipal regulations</li>
                </ul>
              </div>

              {/* Bottom Right - Roadbed */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Roadbed preparation, construction and utility infrastructure</h3>
                <ul className="list-disc pl-6 space-y-2 text-lg text-mccarty-medium">
                  <li>Preparation and construction of roads and utility systems supporting new developments</li>
                  <li>Services include subgrade and roadbed preparation, curb and gutter installation, asphalt paving, resurfacing and final striping</li>
                  <li>Coordination of underground utility work to ensure accurate installation and seamless integration with site infrastructure</li>
                </ul>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center">
              <p className="text-lg leading-relaxed text-mccarty-medium max-w-4xl mx-auto">
                Our late-model fleet and advanced surveying equipment allow for accurate layouts and dependable schedules, reducing downtime and preventing costly delays. Whether the project involves a large-scale commercial site or municipal infrastructure, we provide the groundwork for lasting success.
              </p>
            </div>
          </div>
        </section>

        {/* Construction Management */}
        <section id="construction-management" className="bg-mccarty-light py-16">
          <div className="mx-auto max-w-6xl px-6">
            {/* Centered Header and Intro */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark mb-6">Construction management</h2>
              <p className="text-lg leading-relaxed text-mccarty-medium max-w-4xl mx-auto">
                As general contractors and construction managers, McCarty Associates offers a unified source of accountability, expertly guiding projects from the earliest schematic design reviews through final interior fit-out.
              </p>
            </div>
            
            {/* 2x2 Grid for Services */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Top Left - Estimating */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Estimating and scheduling</h3>
                <p className="text-lg leading-relaxed text-mccarty-medium">
                  Accurate estimating and proactive scheduling are key to delivering projects on time and within budget. Our team develops comprehensive cost models from early conceptual estimates through detailed construction budgets, incorporating risk analysis, phasing, and procurement strategies. Continuous monitoring throughout design and construction keeps financial performance aligned with project goals.
                </p>
              </div>

              {/* Top Right - Value Engineering */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Value engineering</h3>
                <p className="text-lg leading-relaxed text-mccarty-medium">
                  Value engineering is central to how we deliver efficiency without compromise. By analyzing materials, systems, and construction methods early, we identify opportunities to reduce costs while maintaining performance and aesthetics. Our experts regularly propose innovative solutions that optimize both design and lifecycle value.
                </p>
              </div>

              {/* Bottom Left - Design/Build */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">Design/build contracting</h3>
                <p className="text-lg leading-relaxed text-mccarty-medium">
                  Through the design-build approach, we integrate design and construction under one contract — simplifying communication, accelerating timelines, and reducing cost. This single-source accountability streamlines project delivery, ensuring design intent aligns with constructability from day one. Our collaborative process often shortens overall schedules while improving cost control and quality outcomes.
                </p>
              </div>

              {/* Bottom Right - General Contracting */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-4">General contracting and construction management</h3>
                <p className="text-lg leading-relaxed text-mccarty-medium">
                  As a general contractor, we coordinate all trades, materials, and schedules to ensure seamless execution in the field. Our construction managers maintain consistent oversight, enforce safety standards, and monitor quality control. This integration of planning, design, and construction management ensures every project meets its technical, budgetary, and performance objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full h-[600px] overflow-hidden">
          {/* Full Width Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pan"
            style={{
              backgroundImage: `url('/media/mccartyengineering.jpg')`,
            }}
          />

          {/* Dark Text Box Overlay - Right Side */}
          <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-12">
            <div className="bg-[#3d3d3d] p-8 md:p-12 max-w-xl w-full md:w-auto">
              <div className="text-white space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
                  Built on engineering precision
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-white/90">
                  A trusted leader in civil and site design, McCarty Engineering serves developers, owners, and contractors across New England. Guided by technical precision and practical experience, our team delivers comprehensive design, permitting and construction support services for commercial, industrial and residential projects. Each plan is thoughtfully engineered for performance, longevity and lasting value.
                </p>
                <a href="/engineering" className="inline-block mt-4 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase text-sm transition-colors duration-200">
                  Explore the McCarty Engineering difference →
                </a>
              </div>
            </div>
          </div>

          <style jsx global>{`
            @keyframes pan {
              0% {
                transform: scale(1.05) translateX(0);
              }
              50% {
                transform: scale(1.05) translateX(-2%);
              }
              100% {
                transform: scale(1.05) translateX(0);
              }
            }
            
            .animate-pan {
              animation: pan 20s ease-in-out infinite;
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}

