import Image from "next/image";
import Link from "next/link";

export function FeaturedProject() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">Featured Project</h2>
        <p className="mt-4 text-xl text-neutral-600">Showcasing projects delivered on time and within budget through precision planning and execution.</p>
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
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
            
            {/* Card overlay similar to Thornton Tomasetti style */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-md shadow-xl mx-6 md:mx-12">
                <div className="text-xs font-medium tracking-wide uppercase text-neutral-500 mb-2">
                  Industrial • Distribution
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                  232,320 SF Pharmaceutical Distribution Facility
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">
                  State-of-the-art pharmaceutical distribution center with advanced automation, 
                  temperature-controlled environments, and comprehensive security systems.
                </p>
                <div className="flex items-center text-sm text-neutral-500 space-x-4">
                  <span>Springfield, MA</span>
                  <span>•</span>
                  <span>2024</span>
                </div>
                <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                  View Project Details →
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
      <div className="mt-8 text-center mx-auto max-w-6xl px-6">
        <Link href="/projects" className="text-base font-medium underline hover:text-neutral-700 transition-colors">
          View all projects →
        </Link>
      </div>
    </section>
  );
}
