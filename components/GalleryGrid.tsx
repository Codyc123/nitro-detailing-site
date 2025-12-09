import Image from "next/image";

const images = [
  { src: "/gallery/1.jpg", alt: "Nitro Detailing ceramic coating finish" },
  { src: "/gallery/2.jpg", alt: "Nitro Detailing PPF install" },
  { src: "/gallery/3.jpg", alt: "Nitro Detailing window tint" },
  { src: "/gallery/4.jpg", alt: "Nitro Detailing interior detail" },
  { src: "/gallery/5.jpg", alt: "Nitro Detailing exterior detail" },
  { src: "/gallery/6.jpg", alt: "Nitro Detailing paint correction" },
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img) => (
        <div
          key={img.src}
          className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-black"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
        </div>
      ))}
    </div>
  );
}
