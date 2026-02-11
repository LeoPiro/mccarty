"use client";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SmcProjectPage() {
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
      src: "/media/projects/smc/window.jpg",
      alt: "SMC cleanroom production floor viewed through observation windows"
    },
    {
      src: "/media/projects/smc/office.jpg",
      alt: "SMC quality control lab and workspace"
    },
    {
      src: "/media/projects/smc/hall.jpg",
      alt: "SMC facility corridor with cleanroom viewing panels"
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
              src="/media/projects/smc/hall.jpg"
              alt="SMC facility interior corridor"
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
                  <p className="text-sm font-medium">Devens, Massachusetts</p>
                </div>
                <div className="border-b border-white/10 pb-2">
                  <p className="text-xs uppercase mb-1 opacity-70">Scope</p>
                  <p className="text-sm font-medium">Phased Cleanroom &amp; Manufacturing</p>
                </div>
                <div className="border-b border-white/10 pb-2">
                  <p className="text-xs uppercase mb-1 opacity-70">Partnership</p>
                  <p className="text-sm font-medium">2015 – Present</p>
                </div>
                <div>
                  <p className="text-xs uppercase mb-1 opacity-70">Client</p>
                  <p className="text-sm font-medium">SMC, Ltd.</p>
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
                  <p className="text-base font-medium">Devens, Massachusetts</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-xs uppercase mb-1 opacity-70">Scope</p>
                  <p className="text-base font-medium">Phased Cleanroom &amp; Manufacturing</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-xs uppercase mb-1 opacity-70">Partnership</p>
                  <p className="text-base font-medium">2015 – Present</p>
                </div>
                <div>
                  <p className="text-xs uppercase mb-1 opacity-70">Client</p>
                  <p className="text-base font-medium">SMC, Ltd.</p>
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
              <h1 className="text-3xl md:text-7xl font-bold mb-3 md:mb-4">SMC, Ltd.</h1>
              <p className="text-base md:text-2xl">
                A decade-long partnership delivering phased cleanroom and manufacturing facilities in Devens, Massachusetts
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
                  SMC, Ltd. is one of McCarty&apos;s longest-standing clients, with a partnership that began in early 2015 when SMC leased the former Gillette Building at 18 Independence Drive in Devens, Massachusetts. Since that time, McCarty has completed a series of complex, phased projects to support SMC&apos;s continued growth in medical-grade manufacturing, cleanroom production, and pharmaceutical operations.
                </p>
                <p>
                  The initial project, completed in 2016, included extensive renovations and expansion of the existing office areas, along with the construction of multiple cleanroom environments. Scope included a 22,000 SF Class 8 cleanroom for medical-grade injection molding, the shell of a future 22,000 SF cleanroom, a 7,300 SF Class 7 cleanroom for assembly, a dedicated tool room for mold cleaning and servicing, underpinning work, construction of five new loading docks, one drive-in dock, and reconstruction of the existing parking areas.
                </p>
                <p>
                  In 2018, McCarty completed two additional phased buildouts within Cleanroom 2. The middle one-third of the space was constructed as assembly area with a 16-foot ceiling height and bridge cranes installed to allow flexibility between assembly and molding operations. Later that year, the front one-third of Cleanroom 2 was also completed as assembly space, featuring a 22-foot ceiling height and bridge cranes to further expand production capability.
                </p>
                <p>
                  Expansion continued in 2020 with the construction of Cleanroom 3, located adjacent to Cleanroom 2. The front two-thirds of the space was built with a 22-foot ceiling height and preparatory work completed for future bridge crane installation. The rear one-third was developed as white space with an office mezzanine above. In 2021, McCarty completed two major projects simultaneously: Cleanroom 4, a 15,400 SF Class 8 assembly room, and the Controlled Space addition, a 3,100 SF building addition designed exclusively for pharmaceutical storage.
                </p>
                <p>
                  After fully building out the available space at 18 Independence Drive, SMC once again engaged McCarty to locate, perform due diligence, design, permit, and construct a new facility at 11 Grant Road in Devens for Werfen, an existing tenant at the Independence Drive campus.
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
              src="/media/projects/smc/window.jpg"
              alt="SMC cleanroom production floor"
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
                <h3 className="font-bold mb-4 text-xl">Cleanroom and manufacturing</h3>
                <ul className="space-y-2">
                  <li>• 22,000 SF Class 8 cleanroom for injection molding</li>
                  <li>• 22,000 SF cleanroom shell for future expansion</li>
                  <li>• 7,300 SF Class 7 cleanroom for assembly</li>
                  <li>• 15,400 SF Class 8 Cleanroom 4 (assembly)</li>
                  <li>• Multiple phased cleanroom buildouts</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">Material handling and infrastructure</h3>
                <ul className="space-y-2">
                  <li>• Bridge cranes installed across multiple cleanrooms</li>
                  <li>• Tool room for mold cleaning and servicing</li>
                  <li>• Five (5) new loading docks and one (1) drive-in dock</li>
                  <li>• Reconstructed parking areas and site circulation</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">Phased expansion timeline</h3>
                <ul className="space-y-2">
                  <li>• 2016 — Initial renovations and cleanroom construction</li>
                  <li>• 2018 — Cleanroom 2 phased buildouts</li>
                  <li>• 2020 — Cleanroom 3 expansion</li>
                  <li>• 2021 — Cleanroom 4 and Controlled Space addition</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">3,100 SF Controlled Space addition</h3>
                <ul className="space-y-2">
                  <li>• Dedicated pharmaceutical storage building addition</li>
                  <li>• Constructed simultaneously with Cleanroom 4</li>
                  <li>• Purpose-built for regulated storage requirements</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* A Look Ahead Section */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mccarty-dark mb-6">Looking ahead</h2>
            <p className="prose prose-lg max-w-none text-mccarty-medium leading-relaxed mb-8">
              Werfen&apos;s relocation has freed approximately 130,000 SF of space at the initial site, enabling the next phase of SMC&apos;s long-term growth. McCarty has again been selected to design, permit, and construct significant new manufacturing and support space, with the current project slated for completion at the end of 2026.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-mccarty-dark mb-4">Planned expansion scope</h3>
                <ul className="space-y-3 text-mccarty-medium">
                  <li>• 23,700 SF assembly room</li>
                  <li>• 20,100 SF Class 8 assembly room</li>
                  <li>• 6,350 SF tool room with overhead and sliding jib cranes</li>
                  <li>• 57,050 SF unfinished structural steel mezzanine for future expansion</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-mccarty-dark mb-4">New building addition and site work</h3>
                <ul className="space-y-3 text-mccarty-medium">
                  <li>• 60,200 SF pre-engineered building addition</li>
                  <li>• 25,675 SF molding room with three (3) 10-ton bridge cranes</li>
                  <li>• 25,675 SF automated warehouse on mezzanine above molding</li>
                  <li>• 31,355 SF high-bay warehouse with 45-foot clear height</li>
                  <li>• Six (6) new 100,000 lb resin storage silos</li>
                  <li>• New 62-space parking lot and site improvements</li>
                </ul>
              </div>
            </div>
          </motion.div>
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
