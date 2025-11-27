"use client";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scroll into movement values - increased parallax effect
  const factsY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Slow down video playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  
  const images = [
    {
      src: "/media/werfern site clear.JPG",
      alt: "Werfern site clearing and preparation"
    },
    {
      src: "/media/Werfern pre construction.JPG",
      alt: "Werfern pre-construction phase"
    },
    {
      src: "/media/werfern_interior_image.JPG",
      alt: "Werfern facility interior - high-bay warehouse"
    },
    {
      src: "/media/Werfern_fridge_exterior.JPG",
      alt: "Werfern facility - refrigerated storage area"
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
        {/* Hero Section with Image and Project Facts Overlay */}
        <section ref={heroRef} className="relative h-[90vh] w-full overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            <Image
              src="/media/werfern exterior.jpg"
              alt="Werfern pharmaceutical warehouse exterior"
              fill
              className="object-cover animate-pan"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
          
          <div className="relative z-10 mx-auto h-full max-w-7xl px-6 py-12">
            {/* Project Facts Box - Middle Right with Parallax */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              style={{ y: factsY }}
              className="absolute top-1/2 -translate-y-1/2 right-6 bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-8 w-[320px] shadow-2xl"
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
                  <p className="text-xs uppercase mb-1 opacity-70">Size</p>
                  <p className="text-base font-medium">232,320 SF</p>
                </div>
                
                <div className="border-b border-white/10 pb-3">
                  <p className="text-xs uppercase mb-1 opacity-70">Status</p>
                  <p className="text-base font-medium">Completed 2025</p>
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

            {/* Title Section - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="absolute bottom-16 left-6 text-white max-w-2xl"
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  Featured project
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Werfern pharmaceutical warehouse</h1>
              <p className="text-xl md:text-2xl">
                A state-of-the-art pharmaceutical warehousing and distribution facility
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
                    This 232,320 SF pharmaceutical warehousing and distribution facility was engineered to meet the strict environmental and operational demands of modern drug storage. Built with a 45-foot clear height and a 50 x 66 foot column spacing, the structure provides optimal flow throughout the building for racking and clear movement paths.
                  </p>
                  <p>
                    A key feature is its 30,000 SF walk-in cooler with a soaring 40-foot ceiling height, purpose-built for large-volume temperature-controlled pharmaceutical storage. The facility structural backbone includes 7,200 cubic yards of concrete, 266 tons of reinforcing rod, and 1,310 tons of structural steel.
                  </p>
                  <p>
                    Extensive site development included 90,000 cubic yards of historic fill excavation and replacement, 26,000 cubic yards of topsoil export, and 101,000 tons of imported structural fill. The project also incorporates 12,500 SF of retaining wall construction, reaching heights up to 24 feet.
                  </p>
                  <p>
                    To ensure uninterrupted operations for sensitive pharmaceutical products, the facility is powered by a 2,000A primary electrical service paired with a 1,600KW back-up generator. The building is fully climate-controlled with 13 rooftop units, 94 destratification fans, and a Trane Building Management System, delivering precise environmental control across all storage zones.
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
            
            {/* Navigation Controls - Bottom Center */}
            <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center space-x-8">
              {/* Previous Arrow */}
              <button
                onClick={prevImage}
                className="p-3 bg-white/90 hover:bg-white text-mccarty-dark rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              {/* Image Indicators */}
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
              
              {/* Next Arrow */}
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

        {/* Key Features Title Section */}
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

        {/* Key Features Grid with Video Background */}
        <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/media/werferninside_10s.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Key Features Content */}
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">Structural design</h3>
                <ul className="space-y-2">
                  <li>• 45-foot clear ceiling height</li>
                  <li>• 50 x 66 foot column spacing</li>
                  <li>• 7,200 cubic yards of concrete</li>
                  <li>• 266 tons of reinforcing rod</li>
                  <li>• 1,310 tons of structural steel</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">Climate control</h3>
                <ul className="space-y-2">
                  <li>• 30,000 SF walk-in cooler (40 foot height)</li>
                  <li>• 13 rooftop HVAC units</li>
                  <li>• 94 destratification fans</li>
                  <li>• Trane Building Management System</li>
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
                  <li>• 90,000 CY fill excavation/replacement</li>
                  <li>• 26,000 CY topsoil export</li>
                  <li>• 101,000 tons structural fill import</li>
                  <li>• 12,500 SF retaining walls (up to 24 feet high)</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-mccarty-dark/25 backdrop-blur-md text-white rounded-lg p-6 shadow-xl"
              >
                <h3 className="font-bold mb-4 text-xl">Power and backup</h3>
                <ul className="space-y-2">
                  <li>• 2,000A primary electrical service</li>
                  <li>• 1,600KW backup generator</li>
                  <li>• Uninterrupted power for critical ops</li>
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
            <a
              href="/contact"
              className="inline-block bg-white text-mccarty-dark px-8 py-4 rounded-md font-semibold hover:bg-mccarty-light transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
