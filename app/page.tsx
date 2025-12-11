import Link from "next/link";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

const PHONE = "(984)-303-5330";
const PHONE_TEL = "9843035330";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          {/* Top label */}
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            {site.city}
          </p>

          {/* Main headline */}
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Nitro Detailing &amp; Coatings
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
            Ceramic coatings, window tint, and interior / exterior detailing —
            tailored for daily drivers, show cars, and everything in between.
            Located at{" "}
            <span className="font-semibold">
              1533 Wendell Falls Pkwy, Wendell, NC 27591
            </span>
            .
          </p>

          {/* HERO CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition"
            >
              Get a Free Quote
            </Link>

            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-2xl border border-white px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition"
            >
              Call {PHONE}
            </a>

            <Link
              href="/ceramic-coating"
              className="rounded-2xl border border-white/40 px-5 py-3 text-sm font-medium text-white/90 hover:border-white hover:text-white transition"
            >
              View Services
            </Link>
          </div>

          {/* NEW PACKAGE BANNER */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-base font-semibold tracking-wide">
            Ask us about our interior and exterior packages!
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES SECTION */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Focused on results, not gimmicks.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">
                Real protection, real cleanliness, and real customer service.
                From ceramic coatings to deep interior resets, we build packages
                around how you actually use your vehicle.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Ceramic Coating */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black px-5 py-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Ceramic Coating
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Long-term, hydrophobic protection with a deep, glass-like
                  gloss. Perfect for vehicles you want to keep looking sharp for
                  years.
                </p>
              </div>
              <Link
                href="/ceramic-coating"
                className="mt-4 inline-block text-sm font-medium text-white/90 underline underline-offset-4 hover:text-white"
              >
                Learn more
              </Link>
            </div>

            {/* Interior Packages */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black px-5 py-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Interior Detailing Packages
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Package options for light cleanups to full deep-clean interior
                  restorations, pet hair removal, and odor reduction.
                </p>
              </div>
              <Link
                href="/interior-detail"
                className="mt-4 inline-block text-sm font-medium text-white/90 underline underline-offset-4 hover:text-white"
              >
                View interior options
              </Link>
            </div>

            {/* Exterior Packages */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black px-5 py-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Exterior Detailing Packages
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Safe wash, decontamination, polishing, and protection — with
                  packages tuned for daily drivers, weekend cars, and more.
                </p>
              </div>
              <Link
                href="/exterior-detail"
                className="mt-4 inline-block text-sm font-medium text-white/90 underline underline-offset-4 hover:text-white"
              >
                View exterior options
              </Link>
            </div>

            {/* Tint */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black px-5 py-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Window Tint
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Heat rejection, UV protection, and a cleaner look with premium
                  films and precise installs.
                </p>
              </div>
              <Link
                href="/tint"
                className="mt-4 inline-block text-sm font-medium text-white/90 underline underline-offset-4 hover:text-white"
              >
                Learn more
              </Link>
            </div>

            {/* Gallery */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black px-5 py-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Recent Work
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  See real before-and-after results from Nitro Detailing &amp;
                  Coatings customers in Wendell and surrounding areas.
                </p>
              </div>
              <Link
                href="/gallery"
                className="mt-4 inline-block text-sm font-medium text-white/90 underline underline-offset-4 hover:text-white"
              >
                View gallery
              </Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black px-5 py-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Ready to Book?
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Tell us about your vehicle, how you use it, and what you’d
                  like to improve. We’ll match you with the right package.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm font-medium text-white/90 underline underline-offset-4 hover:text-white"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL CTA (existing component) */}
      <CTA />
    </main>
  );
}
