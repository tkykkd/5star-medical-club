type Intro = {title: string; lead: string; body: string};
type Promo = {title: string; subtitle: string; detail: string};
type AssetPack = {
  promoWellness: string;
  promoCheckup: string;
};

export function IntroAndPromo({
  intro,
  promos,
  assets,
}: {
  intro: Intro;
  promos: readonly Promo[];
  assets: AssetPack;
}) {
  const imgs = [assets.promoWellness, assets.promoCheckup] as const;

  return (
    <section id="hero-story" className="scroll-mt-28 py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">{intro.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#e8e4dc]/85">{intro.lead}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#e8e4dc]/75">{intro.body}</p>
          </div>
          <div className="grid gap-6">
            {promos.map((p, i) => (
              <article
                key={p.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <img src={imgs[i]} alt="" className="aspect-[16/9] w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a962]">
                    {p.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#e8e4dc]/75">{p.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
