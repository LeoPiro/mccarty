"use client";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PatrickMotorGroupPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const factsY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const mazdaImages = [
    { src: "/media/projects/patrick-motor/auburn-drone.webp", alt: "Patrick Mazda aerial view" },
    { src: "/media/projects/patrick-motor/auburn-exterior.avif", alt: "Patrick Mazda exterior" },
    { src: "/media/projects/patrick-motor/auburn-exterior-night.avif", alt: "Patrick Mazda exterior at night" },
    { src: "/media/projects/patrick-motor/auburn-display.webp", alt: "Patrick Mazda showroom display" },
    { src: "/media/projects/patrick-motor/auburn-cafe.webp", alt: "Patrick Mazda customer lounge" },
    { src: "/media/projects/patrick-motor/auburn-waiting.webp", alt: "Patrick Mazda waiting area" },
    { src: "/media/projects/patrick-motor/auburn-service.webp", alt: "Patrick Mazda service area" },
  ];

  const volvoImages = [
    { src: "/media/projects/patrick-motor/volvo-drone.webp", alt: "Patrick Volvo aerial view" },
    { src: "/media/projects/patrick-motor/volvo-exterior.webp", alt: "Patrick Volvo exterior" },
    { src: "/media/projects/patrick-motor/volvo-night.webp", alt: "Patrick Volvo exterior at night" },
    { src: "/media/projects/patrick-motor/volvo-night-2.webp", alt: "Patrick Volvo night view" },
    { src: "/media/projects/patrick-motor/volvo-interior.webp", alt: "Patrick Volvo showroom" },
    { src: "/media/projects/patrick-motor/volvo-interior-2.webp", alt: "Patrick Volvo interior" },
    { src: "/media/projects/patrick-motor/volvo-interior-3.webp", alt: "Patrick Volvo lounge" },
    { src: "/media/projects/patrick-motor/volvo-reception.webp", alt: "Patrick Volvo reception" },
    { src: "/media/projects/patrick-motor/volvo-chairs.webp", alt: "Patrick Volvo waiting area" },
    { src: "/media/projects/patrick-motor/volvo-service.webp", alt: "Patrick Volvo service bays" },
  ];

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
              src="/media/projects/patrick-motor/auburn-drone.webp"
              alt="Patrick Motor Group aerial view"
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
                  <p className="text-sm font-medium">Auburn, Massachusetts</p>
                </div>
                <div className="border-b border-white/10 pb-2">
                  <p className="text-xs uppercase mb-1 opacity-70">Scope</p>
                  <p className="text-sm font-medium">Multiple Facilities</p>
                </div>
                <div>
                  <p className="text-xs uppercase mb-1 opacity-70">Partner</p>
                  <p className="text-sm font-medium">Patrick Motor Group</p>
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
                  <p className="text-base font-medium">Auburn, Massachusetts</p>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <p className="text-xs uppercase mb-1 opacity-70">Scope</p>
                  <p className="text-base font-medium">Multiple Facilities</p>
                </div>
                <div>
                  <p className="text-xs uppercase mb-1 opacity-70">Partner</p>
                  <p className="text-base font-medium">Patrick Motor Group</p>
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
              <h1 className="text-3xl md:text-7xl font-bold mb-3 md:mb-4">Patrick Motor Group</h1>
              <p className="text-base md:text-2xl">
                A series of automotive dealership projects across Auburn, Massachusetts
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overarching Overview */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-mccarty-dark mb-6">Overview</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-mccarty-medium leading-relaxed">
                <p>
                  McCarty has partnered with the Patrick Motor Group on a series of complex automotive dealership projects in Auburn, Massachusetts, delivering new construction, phased renovations, and supporting facilities to meet the group&apos;s continued growth. Across multiple sites, these projects required extensive coordination with national automotive brand consultants, local and state permitting authorities, and ongoing dealership operations.
                </p>
                <p>
                  Scope across the Auburn campus includes new ground-up dealership construction, multi-brand renovations and expansions, large-scale site development, and the creation of a dedicated reconditioning and inventory storage facility. Each project was carefully phased and executed to maintain active dealership operations while meeting evolving brand standards and customer experience requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Patrick Mazda Section ── */}

        {/* Mazda Image Divider */}
        <section className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src="/media/projects/patrick-motor/auburn-exterior.avif"
            alt="Patrick Mazda dealership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white text-center"
            >
              Patrick Mazda
            </motion.h2>
          </div>
        </section>

        {/* Mazda Overview + Specs */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-6">Project overview</h3>
              <div className="prose prose-lg max-w-none space-y-4 text-mccarty-medium leading-relaxed">
                <p>
                  McCarty provided site design, permitting, and construction services for a new 18,000 SF Patrick Mazda dealership on a 5.62-acre site in Auburn, Massachusetts. The project involved significant site engineering challenges, including major elevation changes and extensive earthwork, while coordinating closely with Mazda&apos;s national design consultants to deliver a prototypical dealership facility.
                </p>
                <p>
                  The completed building includes a modern showroom, service drive-through, and twelve service bays, supported by extensive on-site parking and infrastructure improvements. Construction began in October 2019 and was completed in January 2025.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-mccarty-dark mb-3 text-lg">Building and site scope</h4>
                <ul className="space-y-2 text-mccarty-medium">
                  <li>• 18,000 SF prototypical Mazda dealership</li>
                  <li>• Showroom, service drive-through, and 12 service bays</li>
                  <li>• 335 parking spaces constructed</li>
                  <li>• Coordination with national Mazda design consultant</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-mccarty-dark mb-3 text-lg">Site development and permitting</h4>
                <ul className="space-y-2 text-mccarty-medium">
                  <li>• 5.62-acre site</li>
                  <li>• 68 feet of elevation change across site</li>
                  <li>• Retaining walls with maximum height of 15 feet</li>
                  <li>• Export of 20,000 CY of excess material</li>
                  <li>• Planning Board, Conservation Commission, and MassDOT permits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mazda Image Slider */}
        <ImageSlider images={mazdaImages} />

        {/* ── Patrick Volvo / Volkswagen Section ── */}

        {/* Volvo Image Divider */}
        <section className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src="/media/projects/patrick-motor/volvo-exterior.webp"
            alt="Patrick Volvo / Volkswagen dealership"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white text-center"
            >
              Patrick Volvo / Volkswagen
            </motion.h2>
          </div>
        </section>

        {/* Volvo Overview + Specs */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-mccarty-dark mb-6">Project overview</h3>
              <div className="prose prose-lg max-w-none space-y-4 text-mccarty-medium leading-relaxed">
                <p>
                  This project included renovations, additions, and expansions to an existing two-brand automotive dealership originally constructed in 1995. McCarty coordinated a highly phased construction approach, allowing the Volkswagen dealership to remain fully operational while half of the building was renovated and expanded at a time.
                </p>
                <p>
                  The project transformed the facility to meet current brand standards for both Volvo and Volkswagen, including distinct prototype requirements, expanded service capacity, and modernized customer spaces. Construction began in February 2021 and was completed in April 2023.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-mccarty-dark mb-3 text-lg">Building expansion</h4>
                <ul className="space-y-2 text-mccarty-medium">
                  <li>• Existing building: 24,910 SF</li>
                  <li>• Completed building: 39,187 SF</li>
                  <li>• Additions on front, left, and right sides</li>
                  <li>• Right side: Volkswagen &quot;White Frame&quot; prototype</li>
                  <li>• Left side: Volvo prototype</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-mccarty-dark mb-3 text-lg">Operations and permitting</h4>
                <ul className="space-y-2 text-mccarty-medium">
                  <li>• Showrooms, service drive-throughs, and 31 service bays</li>
                  <li>• 341 parking spaces constructed</li>
                  <li>• 13.58-acre site</li>
                  <li>• Planning Board, Conservation Commission, and MassDOT permits</li>
                  <li>• Coordination with national Volkswagen and Volvo consultants</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Volvo Image Slider */}
        <ImageSlider images={volvoImages} />

        {/* ── Patrick Recon Facility Section ── */}

        <section className="bg-mccarty-dark text-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-8 text-center"
            >
              Patrick Recon Facility
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-mccarty-light">Project overview</h3>
                <div className="prose prose-lg max-w-none space-y-4 text-white/80 leading-relaxed">
                  <p>
                    To support the growth of its operating dealerships, the Patrick Motor Group engaged McCarty to design, permit, and construct a dedicated vehicle reconditioning facility and excess inventory storage site. The project was developed on a 2.08-acre site formerly occupied by a bubble-style athletic facility, requiring full demolition of existing foundations and site improvements.
                  </p>
                  <p>
                    The completed facility includes a new 6,000 SF pre-engineered recon building, associated site infrastructure, and extensive parking to accommodate vehicle storage. Construction began in April 2022 and was completed in February 2023.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold mb-3 text-lg text-mccarty-light">Facility and site scope</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• 6,000 SF pre-engineered recon facility</li>
                    <li>• 148 parking spaces for inventory storage</li>
                    <li>• Demolition of existing athletic facility foundations</li>
                    <li>• Associated site improvements and utilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-lg text-mccarty-light">Permitting and schedule</h4>
                  <ul className="space-y-2 text-white/80">
                    <li>• Planning Board and Conservation Commission approvals</li>
                    <li>• Construction start: April 2022</li>
                    <li>• Construction completion: February 2023</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Looking Ahead ── */}

        <section className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mccarty-dark mb-6">Looking ahead</h2>
            <p className="prose prose-lg max-w-none text-mccarty-medium leading-relaxed mb-8">
              McCarty is currently under contract with the Patrick Motor Group for the design and permitting of a new Subaru dealership in Shrewsbury, Massachusetts, continuing the long-standing partnership across the region.
            </p>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-mccarty-dark mb-4">Patrick Subaru — Shrewsbury, MA</h3>
              <ul className="space-y-3 text-mccarty-medium">
                <li>• New 50,000 SF Subaru dealership planned along Route 9</li>
                <li>• Initial consultation completed with Change-Up, Subaru&apos;s national consultant</li>
                <li>• Site plan preparation currently underway</li>
                <li>• Design and permitting targeted for completion by Q4 2026</li>
                <li>• Anticipated construction start in early 2027</li>
              </ul>
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

function ImageSlider({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover animate-pan"
            priority={currentIndex === 0}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center space-x-8">
          <button
            onClick={prev}
            className="p-3 bg-white/90 hover:bg-white text-mccarty-dark rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 bg-white/90 hover:bg-white text-mccarty-dark rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
