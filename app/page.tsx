import { HeroVideo } from "./(site)/components/hero-video";
import { HeresHowSection } from "./(site)/components/heres-how-section";
import { ServiceCard } from "./(site)/components/service-card";
import { ServicesOverlay } from "./(site)/components/services-overlay";
import { ReviewCarousel } from "./(site)/components/review-carousel";
import { Header } from "./(site)/components/header";
import { Footer } from "./(site)/components/footer";
import { Section } from "./(site)/components/section";
import { projects } from "@/lib/projects";
import { HardHat, Building2, ClipboardList, Wrench, Users2, Map } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

  const featured = projects.slice(0, 3);

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

        <Section title="Featured Projects" subtitle="Select work demonstrating market range and delivery discipline.">
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map(p => (
              <div key={p.slug} className="flex flex-col">
                {/* Reuse project card minimal inline to avoid import loop; could also import ProjectCard */}
                {/* Simplified preview */}
                <Link href={`/projects/${p.slug}`} className="group rounded-lg overflow-hidden border bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.name + " project cover"}
                      fill
                      sizes="(min-width:768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-neutral-900/10" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-medium tracking-wide uppercase text-neutral-500">{p.category}</div>
                    <h3 className="mt-1 text-lg font-semibold group-hover:underline underline-offset-4">{p.name}</h3>
                    <p className="mt-2 text-sm text-neutral-600 line-clamp-3">{p.excerpt}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/projects" className="text-sm font-medium underline">View all projects →</Link>
          </div>
        </Section>

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
