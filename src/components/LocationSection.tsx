export function LocationSection({
  location,
}: {
  location: {
    title: string;
    floor: string;
    body: string;
    peninsulaTitle: string;
    peninsulaBody: string;
    peninsulaHref: string;
    peninsulaLinkLabel: string;
  };
}) {
  return (
    <section id="location" className="scroll-mt-28 border-y border-white/10 bg-[#0d1424] py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{location.title}</p>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{location.floor}</h2>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#e8e4dc]/78">{location.body}</p>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-lg font-semibold text-[#c9a962]">{location.peninsulaTitle}</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#e8e4dc]/75">{location.peninsulaBody}</p>
          <a
            href={location.peninsulaHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            {location.peninsulaLinkLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
