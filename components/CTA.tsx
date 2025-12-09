import Link from "next/link";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-white/10 bg-white text-black p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Ready for a lasting, showroom finish?
          </h3>
          <p className="mt-2 text-black/70">
            Get a free quote within 24 hours. Transparent pricing, flawless results.
          </p>
        </div>

        <div className="flex gap-3">
          {/* Button 1: goes to contact page */}
          <Link
            href="/contact"
            className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Request a Quote
          </Link>

          {/* Button 2: calls your phone */}
          <a
            href={`tel:${site.phone}`}
            className="rounded-2xl border border-black px-5 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
