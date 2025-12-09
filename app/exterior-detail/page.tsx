import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import CTA from "@/components/CTA";

const PHONE = "(984)-303-5330";
const PHONE_TEL = "9843035330";

export default function Page() {
  return (
    <>
      <ServiceHero
        title="Exterior Detailing"
        subtitle="Safe wash, decontamination, polishing, and protection for a flawless finish."
      />

      {/* TOP CTA BUTTONS */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      <ServiceContent
        intro="Exterior detailing restores clarity and gloss to your paint while safely removing contamination that normal washes leave behind. We finish with protection tailored to your goals."
        benefits={[
          "Removes road film, tar, bugs, and embedded fallout",
          "Enhances gloss and clarity for a sharper finish",
          "Reduces swirl marks and light scratches",
          "Protects paint from UV and environmental damage",
          "Leaves a slick, easy-to-maintain surface",
        ]}
        process={[
          "Foam pre-soak to loosen dirt safely",
          "Two-bucket hand wash with paint-safe mitts",
          "Iron removal + clay bar decontamination",
          "Machine polish (as needed) for clarity",
          "Sealant or wax protection applied",
          "Final detail and inspection",
        ]}
        faqs={[
          {
            q: "Do you do paint correction?",
            a: "Yes — we can add correction stages to remove swirls and restore gloss.",
          },
          {
            q: "How long does an exterior detail take?",
            a: "Usually 2–5 hours depending on size and condition.",
          },
          {
            q: "Is ceramic coating required after?",
            a: "Not required, but ceramic gives much longer protection than wax/sealant.",
          },
          {
            q: "Is this safe for matte paint?",
            a: "Yes — we use matte-safe products and avoid gloss enhancers unless requested.",
          },
        ]}
      />

      <CTA />
    </>
  );
}
