export default function ServiceHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="border-b border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">
          Service
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-white/75 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
