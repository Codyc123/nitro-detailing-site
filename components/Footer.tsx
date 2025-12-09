import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        {/* Company blurb */}
        <div>
          <p className="text-base font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-white/70">{site.description}</p>
        </div>

        {/* Services links */}
        <div className="text-sm">
          <p className="font-semibold">Services</p>
          <ul className="mt-2 space-y-1 text-white/70">
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/ceramic-coating">Ceramic Coating</Link></li>
            <li><Link href="/tint">Tint</Link></li>
            <li><Link href="/interior-detail">Interior Detail</Link></li>
            <li><Link href="/exterior-detail">Exterior Detail</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="text-sm">
          <p className="font-semibold">Contact</p>
          <p className="mt-2 text-white/70">{site.address}</p>
          <p className="text-white/70">{site.hours}</p>
          <p className="mt-2">{site.phone}</p>
          <p className="text-white/70">{site.email}</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
