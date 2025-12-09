"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/ceramic-coating", label: "Ceramic Coating" },
  { href: "/tint", label: "Tint" },
  { href: "/interior-detail", label: "Interior Detail" },
  { href: "/exterior-detail", label: "Exterior Detail" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Company name (click = home) */}
        <Link
  href="/"
  className="flex items-center gap-3 text-lg font-semibold tracking-wide text-white"
  onClick={() => setOpen(false)}
>
  <Image
    src="/logos/logo.png"
    alt={`${site.name} logo`}
    width={36}
    height={36}
    priority
    className="rounded-sm"
  />
  <span>{site.name}</span>
</Link>


        {/* Desktop navigation */}
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop Call + Book Now */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${site.phone}`}
            className="rounded-2xl bg-white px-4 py-2 text-sm text-black hover:opacity-90 transition"
          >
            Call
          </a>

          <Link
            href="/contact"
            className="rounded-2xl border border-white px-4 py-2 text-sm text-white hover:bg-white hover:text-black transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu button */}
        <button
          className="md:hidden rounded-xl border border-white/20 px-3 py-2 text-sm text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile dropdown links + CTAs */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-white/85 hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-2 flex gap-3">
              <a
                href={`tel:${site.phone}`}
                className="flex-1 rounded-2xl bg-white px-4 py-2 text-sm text-black text-center hover:opacity-90 transition"
              >
                Call
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-2xl border border-white px-4 py-2 text-sm text-white text-center hover:bg-white hover:text-black transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
