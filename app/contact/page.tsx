"use client";

import { useState } from "react";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <>
      <section className="border-b border-white/10 bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
            Get a Free Quote
          </h1>
          <p className="mt-4 max-w-2xl text-white/75 md:text-lg">
            Tell us what you need and we’ll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 text-white">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-black p-6 space-y-4"
          >
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-black px-3 py-2 text-white outline-none focus:border-white/40"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Phone</label>
              <input
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-black px-3 py-2 text-white outline-none focus:border-white/40"
                placeholder="(984)-303-5330"
              />
            </div>

            <div>
              <label className="text-sm text-white/70">Service</label>
              <select
                className="mt-1 w-full rounded-xl border border-white/10 bg-black px-3 py-2 text-white outline-none focus:border-white/40"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Ceramic Coating</option>
                <option>Paint Protection Film (PPF)</option>
                <option>Window Tint</option>
                <option>Interior Detailing</option>
                <option>Exterior Detailing</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea
                required
                rows={5}
                className="mt-1 w-full rounded-xl border border-white/10 bg-black px-3 py-2 text-white outline-none focus:border-white/40"
                placeholder="Tell us about your vehicle and what you’re looking for."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition"
            >
              Submit Request
            </button>

            {status === "sent" && (
              <p className="text-sm text-white/80">
                ✅ Thanks! We’ll reach out shortly.
              </p>
            )}
          </form>

          {/* Contact details */}
          <div className="rounded-3xl border border-white/10 bg-black p-6 space-y-4">
            <h2 className="text-xl font-semibold">Nitro Detailing & Coatings</h2>
            <p className="text-white/75">{site.address}</p>
            <p className="text-white/75">{site.hours}</p>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${site.phone}`}
                className="inline-block rounded-2xl bg-white px-4 py-2 text-sm text-black hover:opacity-90 transition"
              >
                Call {site.phone}
              </a>
              <p className="text-sm text-white/70">{site.email}</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
