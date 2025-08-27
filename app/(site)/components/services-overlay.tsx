"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard } from "./service-card";

interface ServiceData {
  icon: React.ReactNode;
  title: string;
  body: string;
  backgroundImage: string;
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
      <div className="relative w-full h-[600px] overflow-hidden bg-neutral-100 flex items-center justify-center">
        <div className="text-center text-neutral-600">
          <p>Loading services...</p>
        </div>
      </div>
    );
  }

  const currentService = services[currentIndex];

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image - Full Browser Width with Panning Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url('${currentService.backgroundImage}')`,
          left: '50%',
          transform: 'translateX(-50%) scale(1.1)',
          width: '100vw',
          maxWidth: '100vw',
          animation: 'pan 20s ease-in-out infinite'
        }}

      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Service Card Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {isLoaded && currentService && (
          <div className="max-w-2xl w-full mb-8">
            <ServiceCard 
              icon={currentService.icon}
              title={currentService.title}
              index={currentIndex}
              overlay={true}
            >
              {currentService.body}
            </ServiceCard>
          </div>
        )}

        {/* Navigation Arrows - Below Service Card */}
        <div className="flex items-center justify-center space-x-8">
          <button
            onClick={prevService}
            className="p-3 bg-white/90 hover:bg-white text-neutral-800 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
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
            className="p-3 bg-white/90 hover:bg-white text-neutral-800 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next service"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pan {
          0% {
            transform: translateX(-50%) scale(1.1);
          }
          50% {
            transform: translateX(-50%) scale(1.1) translateX(-3%);
          }
          100% {
            transform: translateX(-50%) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
