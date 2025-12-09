import ServiceHero from "@/components/ServiceHero";
import CTA from "@/components/CTA";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <ServiceHero
        title="Gallery"
        subtitle="A look at the finishes we deliver — deep gloss, clean installs, and spotless interiors."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <GalleryGrid />
      </section>

      <CTA />
    </>
  );
}
