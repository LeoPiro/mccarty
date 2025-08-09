/* eslint-disable @typescript-eslint/no-explicit-any */
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ProjectGallery } from "../../components/project-gallery";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata(props: any) {
  const { params } = props;
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  const desc = project.excerpt || `Project ${project.name} by McCarty Companies.`;
  return {
    title: `${project.name} | McCarty Companies`,
    description: desc,
    openGraph: {
      title: project.name,
      description: desc,
      images: [{ url: project.coverImage }]
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: desc,
      images: [project.coverImage]
    }
  };
}

export default function ProjectDetail(props: any) {
  const { params } = props;
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();
  return (
    <>
      <Header />
      <div className="pt-24">
        <div className="relative h-[50vh] w-full">
          <Image src={project.coverImage} alt={project.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 mx-auto max-w-6xl text-white">
            <h1 className="text-4xl md:text-5xl font-semibold text-balance">{project.name}</h1>
            <p className="mt-3 max-w-2xl text-neutral-200">{project.excerpt}</p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3">
          <div className="prose prose-neutral max-w-none md:col-span-2">
            {project.body.split("\n").map((p,i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="bg-neutral-50 border rounded-lg p-6 space-y-3 h-fit">
            <h2 className="text-sm uppercase tracking-wide font-semibold text-neutral-500">Specs</h2>
            <dl className="text-sm space-y-1">
              {project.specs.location && <div><dt className="font-medium">Location</dt><dd>{project.specs.location}</dd></div>}
              {project.specs.sizeSqFt && <div><dt className="font-medium">Size</dt><dd>{project.specs.sizeSqFt.toLocaleString()} SF</dd></div>}
              {project.specs.delivery && <div><dt className="font-medium">Delivery</dt><dd>{project.specs.delivery}</dd></div>}
              {project.specs.completion && <div><dt className="font-medium">Completion</dt><dd>{project.specs.completion}</dd></div>}
              {project.specs.valueUSD && <div><dt className="font-medium">Value</dt><dd>${project.specs.valueUSD.toLocaleString()}</dd></div>}
            </dl>
          </aside>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <ProjectGallery project={project} />
        </div>
      </div>
      <Footer />
    </>
  );
}
