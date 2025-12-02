"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ServiceData {
  title: string;
  body: string;
  backgroundImage: string;
  link?: string;
  buttonText?: string;
}

interface ServicesOverlayProps {
  services: ServiceData[];
}

export function ServicesOverlay({ services }: ServicesOverlayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset state when component mounts or services change
  useEffect(() => {
    setIsLoaded(true);
  }, [services]);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Ensure we have valid service data
  if (!services || services.length === 0) {
    return (
      <div className="relative w-full h-[600px] overflow-hidden bg-mccarty-light/30 flex items-center justify-center">
        <div className="text-center text-mccarty-medium">
          <p>Loading services...</p>
        </div>
      </div>
    );
  }

  const currentService = services[currentIndex];
  
  // Custom background position for specific services
  const getBackgroundPosition = () => {
    if (currentService.title === "Site inspections") {
      return "center bottom"; // Focus all the way to the bottom
    }
    if (currentService.title === "Project management") {
      return "center 60%"; // Focus down 60% from top
    }
    if (currentService.title === "Construction management") {
      return "center 10%"; // Focus on upper portion
    }
    return "center";
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Full Width Background Image */}
      <div 
        key={currentIndex}
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700 ease-in-out animate-pan"
        style={{
          backgroundImage: `url('${currentService.backgroundImage}')`,
          backgroundPosition: getBackgroundPosition(),
        }}
      />

      {/* Dark Text Box Overlay - Right Side */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-12">
        {isLoaded && currentService && (
          <div className="bg-[#3d3d3d] p-8 md:p-12 max-w-xl w-full md:w-auto">
            <div className="text-white space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight uppercase">
                {currentService.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-white/90">
                {currentService.body}
              </p>
              {currentService.link && currentService.buttonText && (
                <Link href={currentService.link} className="mt-4 inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase text-sm transition-colors duration-200">
                  {currentService.buttonText}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows - Bottom of Image */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center space-x-8">
        <button
          onClick={prevService}
          className="p-3 bg-white/90 hover:bg-white text-mccarty-dark rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous service"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Service Indicators */}
        <div className="flex space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextService}
          className="p-3 bg-white/90 hover:bg-white text-mccarty-dark rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next service"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
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
    </div>
  );
}
