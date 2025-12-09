export default function ServiceContent({
  intro,
  benefits,
  process,
  faqs,
}: {
  intro: string;
  benefits: string[];
  process: string[];
  faqs: { q: string; a: string }[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 text-white">
      <div className="grid gap-10 md:grid-cols-3">
        {/* Main content */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">What it is</h2>
          <p className="mt-3 text-white/75 leading-relaxed">{intro}</p>

          <h2 className="mt-8 text-xl font-semibold">Benefits</h2>
          <ul className="mt-3 grid gap-2 text-white/80 list-disc pl-5">
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-xl font-semibold">Our process</h2>
          <ol className="mt-3 grid gap-2 text-white/80 list-decimal pl-5">
            {process.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </div>

        {/* Sidebar */}
        <aside className="h-fit rounded-3xl border border-white/10 bg-white text-black p-6">
          <h3 className="text-lg font-semibold">Included with every service</h3>
          <ul className="mt-3 space-y-2 text-sm text-black/70">
            <li>• Paint-safe wash & decontamination</li>
            <li>• Trim & glass detailing</li>
            <li>• Final inspection under studio lighting</li>
            <li>• Aftercare guide + maintenance plan</li>
          </ul>
        </aside>
      </div>

      {/* FAQ section */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-white/10 bg-black p-5"
            >
              <p className="font-medium">{f.q}</p>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
