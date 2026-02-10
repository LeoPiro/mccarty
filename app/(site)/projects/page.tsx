"use client";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  link?: string;
}

export default function OurWorkPage() {
  const projects: Project[] = [
    {
      id: "werfern",
      title: "Werfern pharmaceutical warehouse",
      category: "Industrial",
      location: "Devens, Massachusetts",
      image: "/media/werfern exterior.jpg",
      link: "/projects/werfern"
    },
    {
      id: "boston-lawnmower",
      title: "Boston Lawnmower",
      category: "Retail",
      location: "Westborough, Massachusetts",
      image: "/media/projects/boston-lawnmower/exterior.webp",
      link: "/projects/boston-lawnmower"
    },
    {
      id: "gerrity-stone",
      title: "Gerrity Stone fabrication facility",
      category: "Industrial",
      location: "Wilmington, Massachusetts",
      image: "/media/projects/gerrity-stone/overview.jpg",
      link: "/projects/gerrity-stone"
    },
    {
      id: "patrick-motor-group",
      title: "Patrick Motor Group",
      category: "Automotive",
      location: "Auburn, Massachusetts",
      image: "/media/projects/patrick-motor/auburn-drone.webp",
      link: "/projects/patrick-motor-group"
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-mccarty-dark text-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
              <p className="text-xl md:text-2xl text-mccarty-light max-w-3xl mx-auto">
                Building excellence across New England through integrated engineering and construction solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group"
                >
                  {project.link ? (
                    <Link href={project.link} className="block">
                      <ProjectCard project={project} />
                    </Link>
                  ) : (
                    <div className="cursor-default">
                      <ProjectCard project={project} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-mccarty-dark text-white py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s build something remarkable together
            </h2>
            <p className="text-xl text-mccarty-light mb-8 max-w-2xl mx-auto">
              From concept to completion, McCarty Companies brings engineering expertise and construction excellence to every project
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-mccarty-dark px-8 py-4 rounded-md font-semibold hover:bg-mccarty-light transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg bg-mccarty-dark group-hover:shadow-2xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="absolute inset-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
      
      {/* Project Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-mccarty-light transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-white/90">{project.location}</p>
      </div>
      
      {/* Hover Indicator */}
      {project.link && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white text-mccarty-dark px-4 py-2 rounded-full text-sm font-semibold">
            View Project
          </div>
        </div>
      )}
    </div>
  );
}
