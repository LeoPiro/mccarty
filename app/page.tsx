import { HeroVideo } from "./(site)/components/hero-video";
import { ProofCounters } from "./(site)/components/proof-counters";
import { CapabilityCard } from "./(site)/components/capability-card";
import { ReviewCarousel } from "./(site)/components/review-carousel";
import { Header } from "./(site)/components/header";
import { Footer } from "./(site)/components/footer";
import { Section } from "./(site)/components/section";
import { projects } from "@/lib/projects";
import { HardHat, Building2, ClipboardList, Wrench, Users2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const capabilityData = [
    { icon: <HardHat className="h-8 w-8" />, title: "Preconstruction", body: "Early cost + constructability insight to de-risk delivery and optimize value." },
    { icon: <Building2 className="h-8 w-8" />, title: "Project Management", body: "Schedule, budget, quality, and stakeholder coordination executed with precision." },
    { icon: <ClipboardList className="h-8 w-8" />, title: "Procurement", body: "Strategic trade partner alignment and material lead‑time mitigation." },
    { icon: <Wrench className="h-8 w-8" />, title: "Field Execution", body: "Safety-led site operations driving predictable progress and quality." },
    { icon: <Users2 className="h-8 w-8" />, title: "Client Service", body: "Transparent communication and proactive issue resolution from day one." },
  ];

  const featured = projects.slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroVideo />

        <Section id="capabilities" title="Capabilities" subtitle="Full lifecycle delivery grounded in transparency and technical rigor.">
          <div className="grid gap-6 md:grid-cols-3">
            {capabilityData.map((c, i) => (
              <CapabilityCard key={c.title} icon={c.icon} title={c.title} index={i}>{c.body}</CapabilityCard>
            ))}
          </div>
        </Section>

        <ProofCounters />

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
