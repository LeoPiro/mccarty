import { projects } from "@/lib/projects";
import { ProjectCard } from "../components/project-card";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Section } from "../components/section";
import { use } from "react";

// Simple filtering via URL search param ?category=Healthcare etc.
export default function ProjectsIndex({ searchParams }: { searchParams: { [k: string]: string | string[] | undefined } }) {
  const category = (searchParams.category as string) || "All";
  const list = category === "All" ? projects : projects.filter(p => p.category === category);
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  return (
    <>
      <Header />
      <Section title="Projects" subtitle="Diverse portfolio across market sectors." className="pt-32">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(c => (
            <a key={c} href={c === "All" ? "/projects" : `/projects?category=${encodeURIComponent(c)}`} className={`px-3 py-1 rounded-full border text-sm ${c === category ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"}`}>{c}</a>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((p,i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
      </Section>
      <Footer />
    </>
  );
}
