type HeroCopy = {
  kicker: string;
  title: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
};

export function Hero({
  logoSrc,
  videoSrc,
  videoPoster,
  copy,
  disclaimer,
}: {
  logoSrc: string;
  videoSrc: string;
  videoPoster: string;
  copy: HeroCopy;
  disclaimer: string;
}) {
  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-55"
          autoPlay
          muted
          playsInline
          loop
          poster={videoPoster}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/75 via-[#0a0f1a]/55 to-[#0a0f1a]"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-16 md:pt-24">
        <div className="flex flex-col gap-6 md:max-w-3xl">
          <img src={logoSrc} alt="" className="h-12 w-auto opacity-95 md:h-14" loading="eager" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c9a962] md:text-sm">
            {copy.kicker}
          </p>
          <h1 className="whitespace-pre-line text-3xl font-semibold leading-snug text-white md:text-4xl lg:text-5xl">
            {copy.title}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#e8e4dc]/80">{disclaimer}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={copy.ctaPrimaryHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#c9a962] px-6 py-3 text-sm font-semibold text-[#0a0f1a] shadow-lg shadow-black/30 transition hover:bg-[#dcc07a]"
            >
              {copy.ctaPrimary}
            </a>
            <a
              href={copy.ctaSecondaryHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copy.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
