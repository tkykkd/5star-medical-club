export function AboutSection({
  title,
  subtitle,
  blocks,
}: {
  title: string;
  subtitle: string;
  blocks: readonly {heading: string; text: string}[];
}) {
  return (
    <section id="about" className="scroll-mt-28 py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{subtitle}</p>
        <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {blocks.map((b) => (
            <article key={b.heading} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-lg font-semibold text-[#c9a962]">{b.heading}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#e8e4dc]/78">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
