export function GroupSection({
  group,
  strip,
  groupLogo,
}: {
  group: {
    titleWell: string;
    bodyWell: string;
    wellHref: string;
    titleSccl: string;
    bodySccl: string;
    scclHref: string;
  };
  strip: {
    title: string;
    items: readonly {name: string; desc: string; href: string}[];
  };
  groupLogo: string;
}) {
  return (
    <section className="border-y border-white/10 bg-[#0d1424] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <img src={groupLogo} alt="" className="mx-auto mb-12 h-16 w-auto opacity-90 md:h-20" loading="lazy" />
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-semibold text-white">{group.titleWell}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#e8e4dc]/75">{group.bodyWell}</p>
            <a
              href={group.wellHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-[#c9a962] underline-offset-4 hover:underline"
            >
              well-m-gr.jp →
            </a>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-semibold text-white">{group.titleSccl}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#e8e4dc]/75">{group.bodySccl}</p>
            <a
              href={group.scclHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-[#c9a962] underline-offset-4 hover:underline"
            >
              sccl.jp →
            </a>
          </article>
        </div>

        <div className="mt-14">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a962]">
            {strip.title}
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strip.items.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#c9a962]/35"
              >
                <p className="text-sm font-semibold text-white">{c.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-[#e8e4dc]/65">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
