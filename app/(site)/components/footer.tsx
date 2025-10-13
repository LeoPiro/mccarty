"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-mccarty-light bg-mccarty-dark text-mccarty-light">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-mccarty-medium hover:bg-white hover:text-mccarty-dark transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-mccarty-medium hover:bg-white hover:text-mccarty-dark transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-mccarty-medium hover:bg-white hover:text-mccarty-dark transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/mccarty-logo.jpg"
              alt="McCarty Companies Logo"
              width={220}
              height={55}
              className="h-16 w-auto"
            />
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-center space-y-2 mb-6">
          <div>
            <a
              href="tel:+19785348727"
              className="text-base hover:text-white transition-colors"
            >
              978-534-8727
            </a>
          </div>
          <div className="text-sm opacity-90">
            42 Tucker Drive, Leominster, MA 01453
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-mccarty-medium pt-6 border-t border-mccarty-medium">
          © {new Date().getFullYear()} McCarty Companies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
