import { projects } from "@/lib/projects";
import { ProjectCard } from "../components/project-card";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Section } from "../components/section";
import Link from "next/link";

// Simple filtering via URL search param ?category=Healthcare etc.
export default function ProjectsIndex(props: any) {
  const { searchParams = {} } = props;
  const category = (searchParams.category as string) || "All";
  const list = category === "All" ? projects : projects.filter(p => p.category === category);
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  return (
    <>
      <Header />
      <Section title="Projects" subtitle="Diverse portfolio across market sectors." className="pt-32">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(c => {
            const href = c === "All" ? "/projects" : `/projects?category=${encodeURIComponent(c)}`;
            const active = c === category;
            return (
              <Link
                key={c}
                href={href}
                className={`px-3 py-1 rounded-full border text-sm ${active ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"}`}
                prefetch={false}
              >
                {c}
              </Link>
            );
          })}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((p,i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
      </Section>
      <Footer />
    </>
  );
}
