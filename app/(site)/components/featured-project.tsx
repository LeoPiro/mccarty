import Image from "next/image";
import Link from "next/link";

export function FeaturedProject() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark">Featured Project</h2>
        <p className="mt-4 text-xl text-mccarty-medium">Showcasing projects delivered on time and within budget through precision planning and execution.</p>
      </div>
      
      <div className="relative group w-full">
        <Link href="/projects" className="block">
          <div className="relative h-[600px] overflow-hidden w-full">
            <Image
              src="/Recent work.jpg"
              alt="Featured Project - Pharmaceutical Distribution Facility"
              fill
              sizes="(min-width: 768px) 100vw, 100vw"
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mccarty-dark/80 via-mccarty-dark/20 to-transparent" />
            
            {/* Card overlay - Right side on desktop, bottom on mobile */}
            <div className="absolute bottom-0 left-0 right-0 md:top-0 md:bottom-0 md:left-auto md:right-0 md:flex md:items-center p-8 md:p-12">
              <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 md:p-8 max-w-md shadow-xl mx-6 md:mx-12 md:mr-12">
                <div className="text-xs font-medium tracking-wide uppercase text-mccarty-dark mb-2">
                  232,320 square feet
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-3">
                  Pharmaceutical distribution facility
                </h3>
                <p className="text-mccarty-dark mb-4">
                  A state-of-the-art pharmaceutical distribution facility in Devens with full climate control, 45&apos; clear height, and a 30,000 SF walk-in cooler — built with over 1,300 tons of steel, 7,200 cubic yards of concrete, and 90,000 cubic yards of historic fill moved and compacted.
                </p>
                <div className="flex items-center text-sm text-mccarty-dark space-x-4">
                  <span>Devens, MA</span>
                  <span>•</span>
                  <span>June 2025</span>
                </div>
                <div className="mt-4 text-sm font-medium text-mccarty-dark group-hover:text-mccarty-medium transition-colors">
                  View Project Details →
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
      <div className="mt-8 text-center mx-auto max-w-6xl px-6">
        <Link href="/projects" className="text-base font-medium text-mccarty-dark underline hover:text-mccarty-medium transition-colors">
          View all projects →
        </Link>
      </div>
    </section>
  );
}
