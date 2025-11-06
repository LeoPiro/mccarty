/* eslint-disable @typescript-eslint/no-explicit-any */
import { projects } from "@/lib/projects";
import { ProjectCard } from "../components/project-card";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Section } from "../components/section";
import Link from "next/link";
import { Suspense } from "react";

// Force dynamic rendering since this page uses searchParams
export const dynamic = 'force-dynamic';

// Loading component
function ProjectsLoading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mccarty-dark mx-auto mb-4"></div>
        <p className="text-mccarty-medium">Loading projects...</p>
      </div>
    </div>
  );
}

// Error component
function ProjectsError({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <p className="text-red-600 mb-4">Error loading projects</p>
        <p className="text-mccarty-medium text-sm">{error.message}</p>
        <Link href="/" className="mt-4 inline-block text-mccarty-dark hover:underline hover:text-mccarty-medium transition-colors">
          Return to home
        </Link>
      </div>
    </div>
  );
}

// Main projects component
function ProjectsContent(props: any) {
  try {
    const searchParams = props.searchParams || {};
    const category = (searchParams.category as string) || "All";
    
    // Validate projects data
    if (!projects || projects.length === 0) {
      throw new Error("No projects data available");
    }
    
    const list = category === "All" ? projects : projects.filter(p => p.category === category);
    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
    
    return (
      <>
        <Header />
        <Section title="Our work" subtitle="Diverse portfolio across market sectors" className="pt-32">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(c => {
              const href = c === "All" ? "/projects" : `/projects?category=${encodeURIComponent(c)}`;
              const active = c === category;
              return (
                <Link
                  key={c}
                  href={href}
                  className={`px-3 py-1 rounded-full border border-mccarty-light text-sm transition-colors ${
                    active ? "bg-mccarty-dark text-white" : "text-mccarty-dark hover:bg-mccarty-light"
                  }`}
                >
                  {c}
                </Link>
              );
            })}
          </div>
          
          {list.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-mccarty-medium">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {list.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          )}
        </Section>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error in ProjectsContent:", error);
    return <ProjectsError error={error as Error} />;
  }
}

// Main page component with error boundary
export default function ProjectsIndex(props: any) {
  return (
    <Suspense fallback={<ProjectsLoading />}>
      <ProjectsContent {...props} />
    </Suspense>
  );
}
