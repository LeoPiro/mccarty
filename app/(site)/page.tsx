import { HeroVideo } from "./components/hero-video";
import { ProofCounters } from "./components/proof-counters";
import { Section } from "./components/section";
import { CapabilityCard } from "./components/capability-card";
import { ProjectCard } from "./components/project-card";
import { ReviewCarousel } from "./components/review-carousel";
import { projects } from "@/lib/projects";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Briefcase, Building2, Hammer, Shield, Users } from "lucide-react";

const capabilities = [
	{
		title: "Preconstruction",
		icon: <Hammer size={28} />,
		body: "Early cost modeling, constructability, and logistics planning to de‑risk delivery.",
	},
	{
		title: "Project Management",
		icon: <Briefcase size={28} />,
		body: "Schedule, budget, procurement, and stakeholder alignment across the lifecycle.",
	},
	{
		title: "Field Execution",
		icon: <Building2 size={28} />,
		body: "Site coordination, trade oversight, QA/QC, and safety leadership.",
	},
	{
		title: "Safety & Compliance",
		icon: <Shield size={28} />,
		body: "Proactive hazard analysis, training, and zero‑incident culture reinforcement.",
	},
	{
		title: "Client Partnership",
		icon: <Users size={28} />,
		body: "Transparent reporting and responsive communication from kickoff to turnover.",
	},
];

export default function HomePage() {
	return (
		<>
			<Header />
			<main className="relative">
				<HeroVideo />
				<Section
					id="capabilities"
					title="Capabilities"
					subtitle="Integrated services that bring vision to reality."
				>
					<div className="grid gap-6 md:grid-cols-3">
						{capabilities.map((c, i) => (
							<CapabilityCard
								key={c.title}
								title={c.title}
								icon={c.icon}
								index={i}
							>
								{c.body}
							</CapabilityCard>
						))}
					</div>
				</Section>
				<ProofCounters />
				<Section
					title="Featured Projects"
					subtitle="Select work demonstrating range and execution excellence."
				>
					<div className="grid gap-6 md:grid-cols-3">
						{projects
							.slice(0, 3)
							.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
					</div>
				</Section>
				<Section
					title="Client Feedback"
					subtitle="Partnership, accountability, and predictable outcomes."
				>
					<ReviewCarousel />
				</Section>
				<Section
					className="py-28"
					title="Ready to build?"
					subtitle="Let’s start a conversation about your project objectives."
				>
					<a
						href="/contact"
						className="inline-block rounded-md bg-neutral-900 text-white px-8 py-4 font-medium"
					>
						Let’s Talk
					</a>
				</Section>
			</main>
			<Footer />
		</>
	);
}
