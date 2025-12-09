import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import CTA from "@/components/CTA";

const PHONE = "(984)-303-5330";
const PHONE_TEL = "9843035330";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Ceramic Coating"
        subtitle="A durable, liquid-glass layer that bonds to your clear coat to enhance gloss and protect against UV, chemicals, and environmental fallout."
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

      {/* MAIN CERAMIC CONTENT */}
      <ServiceContent
        intro="Ceramic coating is a semi-permanent protective layer applied to your vehicle’s paint. Once cured, it forms a hard, hydrophobic shell that resists contaminants, boosts gloss, and makes washing dramatically easier."
        benefits={[
          "Deep, reflective gloss that stays sharp for years",
          "Hydrophobic surface that repels water, dirt, and road film",
          "UV resistance that slows fading and oxidation",
          "Chemical protection from bird droppings, salt, and bugs",
          "Reduced wash time and fewer swirl marks",
        ]}
        process={[
          "Foam pre-wash + two-bucket contact wash",
          "Iron removal + clay decontamination",
          "Multi-stage paint correction (as needed)",
          "Panel wipe to ensure perfect bonding",
          "Coating application and controlled cure",
          "Final inspection and aftercare handoff",
        ]}
        faqs={[
          {
            q: "How long does it last?",
            a: "Typical lifespan is 2–5+ years depending on the package, mileage, and maintenance.",
          },
          {
            q: "Can you coat new cars?",
            a: "Yes. New paint benefits the most because correction is minimal and protection starts day one.",
          },
          {
            q: "Does it prevent scratches?",
            a: "It resists micro-marring and light swirls, but it won’t stop rock chips. Pair with PPF for impact protection.",
          },
          {
            q: "How do I maintain it?",
            a: "Hand washes with pH-neutral soap are best. Avoid automatic brush washes to prevent swirls.",
          },
        ]}
      />

      {/* BOTTOM CTA */}
      <CTA />
    </>
  );
}


