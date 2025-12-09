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
        title="Window Tint"
        subtitle="Premium film for heat rejection, UV protection, and a sharper, cleaner silhouette."
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
        intro="Our window tint packages improve comfort, reduce glare, and protect your interior from fading. We install high-quality films with clean edges and consistent clarity."
        benefits={[
          "Blocks up to 99% of harmful UV rays",
          "Significant heat rejection for a cooler cabin",
          "Reduces glare for safer driving",
          "Protects leather and plastics from fading",
          "Sleek, factory-plus appearance",
        ]}
        process={[
          "Glass cleaned and decontaminated",
          "Precision-cut patterns for your vehicle",
          "Dust-controlled application",
          "Heat shrinking for perfect curvature",
          "Final check + cure guidance",
        ]}
        faqs={[
          {
            q: "Is tint legal in NC?",
            a: "Yes — we can install within North Carolina limits or to your preference for show use.",
          },
          {
            q: "How long does tint take to cure?",
            a: "Typically 2–5 days depending on temperature and humidity.",
          },
          {
            q: "Can I wash my car after tint?",
            a: "Yes, but avoid rolling windows down for 48–72 hours.",
          },
          {
            q: "Do you tint windshields?",
            a: "Yes — clear or light-shade heat-rejecting films are available.",
          },
        ]}
      />

      <CTA />
    </>
  );
}

