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
        title="Interior Detailing"
        subtitle="Deep-clean transformation for all interior surfaces — with optional ceramic protection for a long-lasting, premium finish."
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

      {/* MAIN INTERIOR DETAIL CONTENT */}
      <ServiceContent
        intro="Our interior detailing service is designed to restore, sanitize, and rejuvenate every surface inside your vehicle. We eliminate stains, remove dirt and bacteria, revive leather and plastics, and leave the cabin looking and smelling like new."
        benefits={[
          "Removes deep-embedded dirt, stains, and grime",
          "Sanitizes high-touch surfaces for a fresh, healthy cabin",
          "Restores plastics, rubber, vinyl, and leather",
          "Eliminates odors including food, smoke, and pets",
          "Revives neglected interiors with professional-grade tools",
        ]}
        process={[
          "Full vacuum and air purge of carpets, mats, seats, and trunk",
          "Steam cleaning for crevices, cracks, vents, and sensitive areas",
          "Shampoo and hot-water extraction for carpets and cloth seats",
          "Leather deep-clean + conditioning treatment",
          "Plastics, dashboard, door panels, and trim restoration",
          "Final inspection and customer walk-through",
        ]}
        faqs={[
          {
            q: "Can you remove pet hair?",
            a: "Yes — we use specialized tools to lift embedded hair from carpets and upholstery.",
          },
          {
            q: "How long does an interior detail take?",
            a: "Most interior details take 3–6 hours depending on size, condition, and package level.",
          },
          {
            q: "Does detailing remove all odors?",
            a: "Most odors are eliminated through steam treatment, extraction, and cleaning. Severe smoke or mildew may require additional odor-neutralizing services.",
          },
        ]}
      />

      {/* SUPREME REFLECTION PACKAGE SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
          <h2 className="text-xl font-semibold md:text-2xl">
            Supreme Reflection Package
          </h2>

          <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
            Upgrade your interior detail with our premium{" "}
            <span className="font-semibold">Supreme Reflection Package</span>.  
            After a full interior detail, we apply a professional-grade 
            <span className="font-semibold"> interior ceramic coating</span> to protect,
            preserve, and enhance every treated surface.
          </p>

          <ul className="mt-6 space-y-2 text-white/80 text-sm md:text-base">
            <li>• Ceramic protection for leather, vinyl, plastics, and trims</li>
            <li>• Hydrophobic finish repels spills, staining, and dirt</li>
            <li>• UV protection prevents fading and cracking of materials</li>
            <li>• Enhances color depth and creates a clean, satin sheen</li>
            <li>• Makes future cleanings significantly easier</li>
          </ul>

          <p className="mt-6 text-white/70 text-sm md:text-base">
            Perfect for customers who want a long-lasting, luxury interior finish.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition"
            >
              Ask About Supreme Reflection
            </Link>

            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-2xl border border-white px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <CTA />
    </>
  );
}
