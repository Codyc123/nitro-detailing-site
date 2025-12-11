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
        subtitle="Safe wash, decontamination, polishing, and protection for a sharp, glossy finish that lasts."
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

      {/* MAIN EXTERIOR DETAIL CONTENT */}
      <ServiceContent
        intro="Our exterior detailing service is built to safely clean, decontaminate, and protect your vehicle’s paint. We remove bonded contaminants, reduce swirls when possible, and finish with a quality sealant to keep your vehicle looking fresh and easier to maintain."
        benefits={[
          "Removes road film, bugs, and light contamination",
          "Restores gloss and clarity for a sharper finish",
          "Safe wash methods that help reduce new swirl marks",
          "Protective sealant for easier washing and better water beading",
          "Package levels tailored to how you use your vehicle",
        ]}
        process={[
          "Pre-rinse and foam pre-soak to loosen dirt safely",
          "Two-bucket hand wash with paint-safe mitts",
          "Wheel and tire cleaning",
          "Rinse and soft towel / forced-air drying",
          "Decontamination, polish, and seal depending on package",
          "Final inspection and wipe-down of jambs and glass",
        ]}
        faqs={[
          {
            q: "How often should I have exterior detailing done?",
            a: "Most daily drivers benefit from exterior detailing every 3–6 months, depending on driving conditions and storage.",
          },
          {
            q: "Will this remove all scratches?",
            a: "Our exterior detail improves gloss and can reduce light swirls. Deep scratches and heavy defects may require dedicated paint correction.",
          },
          {
            q: "Is this safe for ceramic-coated vehicles?",
            a: "Yes — we adjust products and methods to be coating-safe and help maintain your existing protection.",
          },
        ]}
      />

      {/* EXTERIOR PACKAGES SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
          <h2 className="text-xl font-semibold md:text-2xl">
            Exterior Detailing Packages
          </h2>

          <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">
            Whether you&apos;re looking for a quick refresh, deeper clean, or a
            more refined finish before protection, our exterior packages are
            built to match your goals and your vehicle.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* BASIC PACKAGE */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-black/60 p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Basic Package
                </h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  A great maintenance option for well-kept vehicles.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-white/75">
                  <li>• Basic hand wash</li>
                  <li>• Gentle wheel and tire cleaning</li>
                  <li>• Dry and{" "}
                    <span className="font-semibold">sealant application</span>
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-xs text-white/60">
                Ideal for regular upkeep and vehicles that are already in good
                shape.
              </p>
            </div>

            {/* MID LEVEL PACKAGE */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-black/60 p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Mid Level Package
                </h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  For vehicles that need more than a basic wash without going
                  all the way to correction.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-white/75">
                  <li>• Basic wash</li>
                  <li>
                    •{" "}
                    <span className="font-semibold">Clay bar treatment</span> to
                    remove bonded contaminants
                  </li>
                  <li>• High-quality sealant for added protection</li>
                </ul>
              </div>
              <p className="mt-4 text-xs text-white/60">
                Great for rough-feeling paint, light overspray, or vehicles that
                haven&apos;t been detailed in a while.
              </p>
            </div>

            {/* TOP TIER PACKAGE */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/15 bg-black/60 p-5">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Top Tier Package
                </h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  Our highest level exterior package for maximum gloss and prep
                  before long-term protection.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-white/75">
                  <li>
                    •{" "}
                    <span className="font-semibold">Iron decontamination</span>{" "}
                    to break down embedded fallout
                  </li>
                  <li>
                    •{" "}
                    <span className="font-semibold">Machine polish</span> to
                    refine gloss and clarity
                  </li>
                  <li>
                    •{" "}
                    <span className="font-semibold">Sealant application</span>{" "}
                    for durable protection
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-xs text-white/60">
                Ideal before ceramic coating or for customers who want their
                paint looking as clean and glossy as possible.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition"
            >
              Ask About Exterior Packages
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
