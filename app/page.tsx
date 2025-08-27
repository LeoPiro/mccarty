import { HeroVideo } from "./(site)/components/hero-video";
import { HeresHowSection } from "./(site)/components/heres-how-section";
import { ServiceCard } from "./(site)/components/service-card";
import { ServicesOverlay } from "./(site)/components/services-overlay";
import { ReviewCarousel } from "./(site)/components/review-carousel";
import { Header } from "./(site)/components/header";
import { Footer } from "./(site)/components/footer";
import { Section } from "./(site)/components/section";
import { FeaturedProject } from "./(site)/components/featured-project";
import { HardHat, Building2, ClipboardList, Wrench, Users2, Map } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const capabilityData = [
    { 
      icon: <HardHat className="h-8 w-8" />, 
      title: "Preconstruction", 
      body: "Early cost + constructability insight to de-risk delivery and optimize value.",
      backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      icon: <Building2 className="h-8 w-8" />, 
      title: "Project Management", 
      body: "Schedule, budget, quality, and stakeholder coordination executed with precision.",
      backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      icon: <ClipboardList className="h-8 w-8" />, 
      title: "Procurement", 
      body: "Strategic trade partner alignment and material lead‑time mitigation.",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      icon: <Wrench className="h-8 w-8" />, 
      title: "Field Execution", 
      body: "Safety-led site operations driving predictable progress and quality.",
      backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      icon: <Users2 className="h-8 w-8" />, 
      title: "Client Service", 
      body: "Transparent communication and proactive issue resolution from day one.",
      backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    { 
      icon: <Map className="h-8 w-8" />, 
      title: "Site Development", 
      body: "Comprehensive civil engineering solutions including grading, drainage, utilities, and infrastructure design.",
      backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">Services</h2>
            </div>
          </div>
          <ServicesOverlay services={capabilityData} />
        </div>

        <FeaturedProject />

        <Section id="about" title="About Us" subtitle="Building excellence through experience and innovation.">
          <div className="text-center text-neutral-600">
            <p>Content coming soon...</p>
          </div>
        </Section>

        <Section title="Client Feedback" subtitle="Relationships built on delivery, communication, and trust.">
          <ReviewCarousel />
        </Section>

        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl bg-neutral-900 text-white p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-balance">Ready to start your project?</h2>
              <p className="mt-4 text-neutral-300 max-w-xl">Engage a team focused on clarity, accountability, and outcomes.</p>
            </div>
            <Link href="/contact" className="self-start rounded-md bg-white text-neutral-900 px-6 py-3 font-medium text-sm">Let’s Talk</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
