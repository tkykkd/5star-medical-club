export function VipSection({
  eyebrow,
  title,
  paras,
}: {
  eyebrow: string;
  title: string;
  paras: readonly string[];
}) {
  return (
    <section id="vip" className="scroll-mt-28 border-y border-white/10 bg-[#0d1424] py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{eyebrow}</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {paras.map((p) => (
            <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-[#e8e4dc]/78">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
