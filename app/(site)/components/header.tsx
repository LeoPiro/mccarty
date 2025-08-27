"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const nav = [
	{ href: "/#services", label: "Services" },
	{ href: "/projects", label: "Our Work" },
	{ href: "/about", label: "About Us" },
];

export function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="fixed top-0 inset-x-0 z-40 bg-white border-b border-neutral-200">
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
				<nav className="hidden md:flex items-center gap-8 text-sm">
					{nav.map((i) => (
						<Link
							key={i.href}
							href={i.href}
							className="hover:underline underline-offset-4"
						>
							{i.label}
						</Link>
					))}
					<Link
						href="/contact"
						className="ml-2 inline-block rounded-md bg-neutral-900 text-white px-4 py-2 font-medium text-sm"
					>
						Let’s Talk
					</Link>
				</nav>
				<button
					onClick={() => setOpen((o) => !o)}
					className="md:hidden text-sm font-medium border px-3 py-2 rounded-md"
				>
					Menu
				</button>
			</div>
			{open && (
				<div className="md:hidden bg-white border-t px-6 pb-6 space-y-4">
					{nav.map((i) => (
						<Link
							onClick={() => setOpen(false)}
							key={i.href}
							href={i.href}
							className="block pt-4 text-sm"
						>
							{i.label}
						</Link>
					))}
					<Link
						onClick={() => setOpen(false)}
						href="/contact"
						className="inline-block rounded-md bg-neutral-900 text-white px-4 py-2 font-medium text-sm"
					>
						Let’s Talk
					</Link>
				</div>
			)}
		</header>
	);
}
