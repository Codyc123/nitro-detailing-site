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
        title="Interior Detailing"
        subtitle="Deep-clean restoration for seats, carpets, plastics, leather, and every surface you touch."
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
        intro="Interior detailing is a full reset for your cabin. We remove embedded dirt, stains, odors, and bacteria using steam, extraction, and safe interior cleaners — then condition surfaces for a like-new feel."
        benefits={[
          "Removes stains, spills, and embedded grime",
          "Eliminates odors (food, smoke, pets)",
          "Restores plastics, trim, and leather",
          "Sanitizes high-touch areas",
          "Leaves a clean, dry, factory-fresh finish",
        ]}
        process={[
          "Thorough vacuum and blowout",
          "Steam cleaning for cracks and crevices",
          "Shampoo/extraction for carpets and mats",
          "Leather and upholstery deep clean + conditioning",
          "Trim, dash, and door panel restoration",
          "Final wipe-down and inspection",
        ]}
        faqs={[
          {
            q: "Can you remove pet hair?",
            a: "Yes — we use specialized tools to remove stubborn hair from carpets and upholstery.",
          },
          {
            q: "Do you handle smoke or mildew odor?",
            a: "We neutralize odors at the source and can recommend ozone treatment for extreme cases.",
          },
          {
            q: "How long does it take?",
            a: "Most interiors take 3–6 hours depending on condition and vehicle size.",
          },
          {
            q: "Will the seats be wet after?",
            a: "They’ll be slightly damp but dry quickly. We avoid soaking materials.",
          },
        ]}
      />

      <CTA />
    </>
  );
}
