"use client";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BostonLawnmowerProjectPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const factsY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const images = [
    {
      src: "/media/projects/boston-lawnmower/showroom-overview.jpg",
      alt: "Boston Lawnmower full showroom overview"
    },
    {
      src: "/media/projects/boston-lawnmower/showroom-mowers.jpg",
      alt: "Boston Lawnmower showroom floor display"
    },
    {
      src: "/media/projects/boston-lawnmower/showroom-ariens.jpg",
      alt: "Boston Lawnmower Ariens display area"
    },
    {
      src: "/media/projects/boston-lawnmower/showroom-gravely.jpg",
      alt: "Boston Lawnmower Gravely showroom and counter"
    },
    {
      src: "/media/projects/boston-lawnmower/counter.jpg",
      alt: "Boston Lawnmower service counter"
    },
    {
      src: "/media/projects/boston-lawnmower/construction.jpg",
      alt: "Boston Lawnmower building under construction"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-[90vh] w-full overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            <Image
              src="/media/projects/boston-lawnmower/exterior.jpg"
              alt="Boston Lawnmower exterior"
              fill
              className="object-cover object-center animate-pan"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />

          <div className="relative z-10 mx-auto h-full max-w-7xl px-6 py-12">
            {/* Mobile Project Facts */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              style={{ y: factsY }}
              className="absolute top-[200px] left-1/2 -translate-x-1/2 md:hidden bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 w-[320px] shadow-2xl"
              suppressHydrationWarning
            >
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-3">
                Project Facts
              </h3>
              <div className="space-y-3">
                <div className="border-b border-white/10 pb-2">
                  <p className="text-xs uppercase mb-1 opacity-70">Location</p>
                  <p className="text-sm font-medium">Westborough, Massachusetts</p>
                </div>
                <div className="border-b border-white/10 pb-2">
                  <p className="text-xs uppercase mb-1 opacity-70">Size</p>
                  <p className="text-sm font-medium">24,500 SF</p>
                </div>
                <div className="border-b border-white/10 pb-2">
                  <p className="text-xs uppercase mb-1 opacity-70">Status</p>
                  <p className="text-sm font-medium">Completed January 2025</p>
                </div>
                <div className="border-b border-white/10 pb-2">
                  <p className="text-xs uppercase mb-1 opacity-70">Design</p>
                  <p className="text-sm font-medium">McCarty Engineering</p>
                </div>
                <div>
                  <p className="text-xs uppercase mb-1 opacity-70">Construction</p>
                  <p className="text-sm font-medium">McCarty Associates</p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Project Facts */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              style={{ y: factsY }}
              className="hidden md:block absolute top-1/2 -translate-y-1/2 right-6 bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-8 w-[320px] shadow-2xl"
              suppressHydrationWarning
            >
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 border-b border-white/20 pb-3">
                Project Facts
              </h3>
              <div className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <p className="text-xs uppercase mb-1 opacity-70">Location</p>
                  <p className="text-base font-medium">Westborough, Massachusetts</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-xs uppercase mb-1 opacity-70">Size</p>
                  <p className="text-base font-medium">24,500 SF</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-xs uppercase mb-1 opacity-70">Status</p>
                  <p className="text-base font-medium">Completed January 2025</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-xs uppercase mb-1 opacity-70">Design</p>
                  <p className="text-base font-medium">McCarty Engineering</p>
                </div>
                <div>
                  <p className="text-xs uppercase mb-1 opacity-70">Construction</p>
                  <p className="text-base font-medium">McCarty Associates</p>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="absolute top-6 md:bottom-16 left-6 text-white max-w-2xl"
              suppressHydrationWarning
            >
              <div className="mb-4 hidden md:block">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  Featured project
                </span>
              </div>
              <h1 className="text-3xl md:text-7xl font-bold mb-3 md:mb-4">Boston Lawnmower</h1>
              <p className="text-base md:text-2xl">
                A 24,500 SF retail power equipment dealership in Westborough, Massachusetts
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-mccarty-dark mb-6">Overview</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-mccarty-medium leading-relaxed">
                <p>
                  This 24,500 SF retail power equipment dealership was designed, permitted, and constructed for Boston Lawnmower on a previously vacant, undeveloped site in Westborough, Massachusetts. The project includes a primary retail and service facility along with a free-standing storage building, delivering a highly functional layout tailored to sales, service, and equipment storage.
                </p>
                <p>
                  The main building consists of a 20,000 SF pre-engineered metal structure with a 4,500 SF central mezzanine, providing dedicated office space and additional storage while maintaining an open, efficient floor plan below. Interior spaces were thoughtfully designed to support customer flow and operational efficiency, including an open showroom, centralized parts and service writer area, and an expansive open service bay.
                </p>
                <p>
                  Exterior features include a 20&apos; x 30&apos; drive-under rear canopy to accommodate equipment pick-up and delivery, as well as a front wrap-around canopy at the showroom for outdoor display of equipment. A separate 3,000 SF pre-engineered clear-span metal storage building supports overflow storage and operational flexibility.
                </p>
                <p>
                  Site development scope included full utility connections, landscaping, stormwater management systems, and construction of 61 parking spaces. The project received Site Plan Approval from the Town of Westborough Planning Board and was constructed between February 2024 and January 2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image Slider */}
        <section className="relative w-full">
          <div className="relative h-[70vh] w-full overflow-hidden">
            <div className="absolute inset-0">
              <Image
                key={currentImageIndex}
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-cover animate-pan"
                priority={currentImageIndex === 0}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center space-x-8">
              <button
                onClick={prevImage}
                className="p-3 bg-white/90 hover:bg-white text-mccarty-dark rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextImage}
                className="p-3 bg-white/90 hover:bg-white text-mccarty-dark rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Key Features Title */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark mb-4 text-center">Key features</h2>
          </motion.div>
        </section>

        {/* Key Features Grid with Static Image Background */}
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/media/projects/boston-lawnmower/showroom-overview.jpg"
              alt="Boston Lawnmower building"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">Building design</h3>
                <ul className="space-y-2">
                  <li>• 24,500 SF total development</li>
                  <li>• 20,000 SF pre-engineered metal main building</li>
                  <li>• 4,500 SF central mezzanine for offices and storage</li>
                  <li>• 3,000 SF free-standing clear-span metal storage building</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">Retail and service features</h3>
                <ul className="space-y-2">
                  <li>• Open retail showroom layout</li>
                  <li>• Central parts and service writer area</li>
                  <li>• Open service area for power equipment maintenance</li>
                  <li>• Rear 20&apos; x 30&apos; drive-under canopy for pick-up and delivery</li>
                  <li>• Front wrap-around showroom canopy for equipment display</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">Site development</h3>
                <ul className="space-y-2">
                  <li>• Previously vacant, undeveloped site</li>
                  <li>• At-grade and below-grade stormwater management</li>
                  <li>• Utility connections and site infrastructure</li>
                  <li>• Landscaping improvements</li>
                  <li>• 61 on-site parking spaces</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">Permitting and schedule</h3>
                <ul className="space-y-2">
                  <li>• Site Plan Approval from Town of Westborough Planning Board</li>
                  <li>• Construction start: February 2024</li>
                  <li>• Construction completion: January 2025</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-mccarty-dark text-white py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to bring your project to life?
            </h2>
            <p className="text-xl text-mccarty-light mb-8 max-w-2xl mx-auto">
              From design through construction, McCarty Companies delivers integrated solutions for complex developments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-mccarty-dark px-8 py-4 rounded-md font-semibold hover:bg-mccarty-light transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-mccarty-dark transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
