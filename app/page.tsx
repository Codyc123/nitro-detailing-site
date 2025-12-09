import Link from "next/link";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

const services = [
  {
    title: "Ceramic Coating",
    href: "/ceramic-coating",
    blurb: "Long-term hydrophobic protection with a deep, glass-like gloss.",
  },
  
  {
    title: "Window Tint",
    href: "/tint",
    blurb: "Heat and UV rejection with a clean, factory-plus look.",
  },
  {
    title: "Interior Detailing",
    href: "/interior-detail",
    blurb: "Steam, extraction, and surface renewal for a fresh, sterile cabin.",
  },
  {
    title: "Exterior Detailing",
    href: "/exterior-detail",
    blurb: "Safe wash, decon, polish, and protection for a flawless finish.",
  },
];


export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            {site.city}
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
            {site.tagline}
          </h1>

          <p className="mt-5 max-w-2xl text-white/75 md:text-lg">
            {site.description}
          </p>

          {/* CTA BUTTONS (WORKING) */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition"
            >
              Get a Free Quote
            </Link>

            <Link
              href="/ceramic-coating"
              className="rounded-2xl border border-white px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Services
        </h2>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              href={s.href}
              key={s.title}
              className="group rounded-3xl border border-white/10 bg-black p-6 hover:border-white/30 transition"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {s.blurb}
              </p>
              <p className="mt-4 text-sm text-white group-hover:text-white/80">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 grid gap-6 md:grid-cols-3">
          {[
            [
              "Studio-grade results",
              "Paint correction and finishing under high-CRI lighting.",
            ],
            [
              "Premium materials",
              "Top-tier coatings, films, and tint with proven longevity.",
            ],
            [
              "Obsessive prep",
              "90% of perfection happens before protection touches paint.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="rounded-3xl border border-white/10 p-6">
              <p className="text-lg font-semibold">{t}</p>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CTA />
    </>
  );
}
