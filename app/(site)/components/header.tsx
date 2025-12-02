"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const nav = [
	{ href: "/projects", label: "Our work" },
	{ href: "/about", label: "Meet our team" },
	{ href: "/news", label: "News and recognition" },
];

const divisions = [
	{ href: "/engineering", label: "McCarty Engineering" },
	{ href: "/associates", label: "McCarty Associates" },
];

export function Header() {
	const [open, setOpen] = useState(false);
	const [divisionsOpen, setDivisionsOpen] = useState(false);
	
	return (
		<header className="fixed top-0 inset-x-0 z-40 bg-white border-b border-mccarty-light">
			<div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
				<Link
					href="/"
					className="flex items-center"
				>
					<div className="bg-white rounded-lg p-2">
						<Image
							src="/mccarty-logo.jpg"
							alt="McCarty Companies Logo"
							width={220}
							height={55}
							className="h-14 w-auto"
						/>
					</div>
				</Link>
				<nav className="hidden md:flex items-center gap-8 text-sm text-mccarty-dark">
					{/* Divisions Dropdown - First item */}
					<div className="relative">
						<button 
							onClick={() => setDivisionsOpen(!divisionsOpen)}
							onBlur={(e) => {
								// Only close if clicking outside the dropdown
								if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
									setDivisionsOpen(false);
								}
							}}
							className="flex items-center gap-1 hover:text-mccarty-medium transition-colors"
						>
							Divisions
							<ChevronDown className={`h-4 w-4 transition-transform ${divisionsOpen ? 'rotate-180' : ''}`} />
						</button>
						
						{divisionsOpen && (
							<div className="absolute top-full left-0 mt-2 w-56 bg-white border border-mccarty-light rounded-md shadow-lg py-2 z-50">
								{divisions.map((division) => (
									<Link
										key={division.label}
										href={division.href}
										onClick={() => setDivisionsOpen(false)}
										className="block px-4 py-2 text-sm text-mccarty-dark hover:bg-mccarty-light transition-colors"
									>
										{division.label}
									</Link>
								))}
							</div>
						)}
					</div>
					
					{nav.map((i) => (
						<Link
							key={i.href}
							href={i.href}
							className="hover:underline underline-offset-4 hover:text-mccarty-medium transition-colors"
						>
							{i.label}
						</Link>
					))}
					
					<Link
						href="/contact"
						className="ml-2 inline-block rounded-md bg-mccarty-dark text-white px-4 py-2 font-medium text-sm hover:bg-mccarty-medium transition-colors"
					>
						Let&apos;s talk
					</Link>
				</nav>
				<button
					onClick={() => setOpen((o) => !o)}
					className="md:hidden text-sm font-medium border border-mccarty-light text-mccarty-dark px-3 py-2 rounded-md hover:bg-mccarty-light transition-colors"
				>
					Menu
				</button>
			</div>
			{open && (
				<div className="md:hidden bg-white border-t border-mccarty-light px-6 pb-6 space-y-4">
					{nav.map((i) => (
						<Link
							onClick={() => setOpen(false)}
							key={i.href}
							href={i.href}
							className="block pt-4 text-sm text-mccarty-dark hover:text-mccarty-medium transition-colors"
						>
							{i.label}
						</Link>
					))}
					
					{/* Divisions - Mobile */}
					<div className="pt-4">
						<div className="text-sm font-semibold text-mccarty-dark mb-2">Divisions</div>
						<div className="pl-4 space-y-2">
							{divisions.map((division) => (
								<Link
									onClick={() => setOpen(false)}
									key={division.label}
									href={division.href}
									className="block text-sm text-mccarty-medium hover:text-mccarty-dark transition-colors"
								>
									{division.label}
								</Link>
							))}
						</div>
					</div>
					
					<Link
						onClick={() => setOpen(false)}
						href="/contact"
						className="inline-block rounded-md bg-mccarty-dark text-white px-4 py-2 font-medium text-sm hover:bg-mccarty-medium transition-colors"
					>
						Let&apos;s talk
					</Link>
				</div>
			)}
		</header>
	);
}
