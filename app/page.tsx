import { HeroVideo } from "./(site)/components/hero-video";
import { HeresHowSection } from "./(site)/components/heres-how-section";
import { ServicesOverlay } from "./(site)/components/services-overlay";
import { WhyMcCartySection } from "./(site)/components/why-mccarty-section";
import { ReviewCarousel } from "./(site)/components/review-carousel";
import { Header } from "./(site)/components/header";
import { Footer } from "./(site)/components/footer";
import { FeaturedProject } from "./(site)/components/featured-project";
import Link from "next/link";

// Force dynamic rendering to avoid clientReferenceManifest error
export const dynamic = 'force-dynamic';

export default function Home() {
  const capabilityData = [
    { 
      title: "Site inspections", 
      body: "Comprehensive site evaluations and inspections to ensure compliance and quality throughout every phase of your project.",
      backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Project management", 
      body: "Schedule, budget, quality, and stakeholder coordination executed with precision from concept to completion.",
      backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Landscape architecture", 
      body: "Thoughtful landscape design and planning that enhances aesthetics while meeting regulatory requirements and environmental goals.",
      backgroundImage: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Civil engineering design", 
      body: "Expert civil engineering solutions for site development, infrastructure, and utilities tailored to your project needs.",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Commercial, industrial and residential development plans", 
      body: "Complete development planning and design services for commercial, industrial, and residential projects of any scale.",
      backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Utility design", 
      body: "Comprehensive water, wastewater, stormwater, and utility infrastructure design for reliable and efficient systems.",
      backgroundImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Construction monitoring", 
      body: "Ongoing construction oversight and quality assurance to ensure your project stays on track and meets all specifications.",
      backgroundImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Site development", 
      body: "Full-scale site development services including grading, drainage, utilities, and infrastructure design.",
      backgroundImage: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      title: "Construction management", 
      body: "Expert construction management ensuring seamless coordination, cost control, and timely delivery of your project.",
      backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];



  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroVideo />

        {/* Here's How Section */}
        <HeresHowSection />

        {/* Services Overlay Section - Full Browser Width */}
        <div id="services" className="w-full">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark">Services</h2>
              <p className="mt-4 text-xl text-mccarty-medium">Engineering excellence meets construction precision for infrastructure that stands the test of time</p>
            </div>
          </div>
          <ServicesOverlay services={capabilityData} />
        </div>

        {/* Why McCarty Section */}
        <WhyMcCartySection />

        <FeaturedProject />



        <section className="py-8">
          <div className="mx-auto max-w-6xl px-6 text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-mccarty-dark">Client feedback</h2>
            <p className="mt-4 text-xl text-mccarty-medium">Relationships built on delivery, communication, and trust</p>
          </div>
          <div className="mx-auto max-w-6xl px-6">
            <ReviewCarousel />
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="rounded-2xl bg-mccarty-dark text-white p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-balance">Ready to start your project?</h2>
            </div>
            <Link href="/contact" className="self-start rounded-md bg-white text-mccarty-dark px-8 py-4 font-medium text-base hover:bg-mccarty-light transition-colors">Contact us</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
