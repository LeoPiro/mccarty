"use client";
import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="mt-32 border-t bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/mccarty-logo.jpg"
              alt="McCarty Companies Logo"
              width={180}
              height={45}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed opacity-80 max-w-xs">Building spaces that move people. Construction, development, and delivery—on time and on budget.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase mb-3 text-neutral-400">Navigate</h4>
                      <ul className="space-y-2 text-sm">
              <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/#services" className="hover:underline">Services</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
            </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase mb-3 text-neutral-400">Get in touch</h4>
          <p className="text-sm opacity-80">info@mccarty.example<br/> (555) 123‑4567<br/> 100 Main St, Boston, MA</p>
        </div>
      </div>
      <div className="border-t border-neutral-800 text-xs text-neutral-500 py-4 text-center">© {new Date().getFullYear()} McCarty Companies. All rights reserved.</div>
    </footer>
  );
}
