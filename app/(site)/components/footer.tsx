"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-mccarty-light bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Contact Information & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-1 text-mccarty-dark">
            <a
              href="tel:+19785348727"
              className="text-sm hover:text-mccarty-medium transition-colors"
            >
              978-534-8727
            </a>
            <div className="text-sm">
              42 Tucker Drive, Leominster, MA 01453
            </div>
            <div className="text-xs text-mccarty-medium pt-2">
              © {new Date().getFullYear()} McCarty Companies. All rights reserved.
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/mccarty-logo.jpg"
                alt="McCarty Companies Logo"
                width={180}
                height={45}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Right Side - Social Media Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-mccarty-light hover:bg-mccarty-dark hover:text-white transition-colors text-mccarty-dark"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-mccarty-light hover:bg-mccarty-dark hover:text-white transition-colors text-mccarty-dark"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-mccarty-light hover:bg-mccarty-dark hover:text-white transition-colors text-mccarty-dark"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
