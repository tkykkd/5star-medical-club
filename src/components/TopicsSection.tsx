import {useSiteCopy} from '@/i18n/useSiteCopy';

export function TopicsSection() {
  const site = useSiteCopy();
  const t = site.topics;

  return (
    <section id="topics" className="scroll-mt-28 py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{t.title}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{t.subtitle}</h2>
          </div>
          <a
            href={t.moreHref}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#c9a962] underline-offset-4 hover:underline"
          >
            {t.moreLabel}
          </a>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {t.items.map((item, idx) => (
            <li
              key={`${item.cat}-${idx}`}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-relaxed text-[#e8e4dc]/85"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a962]/90">{item.cat}</span>
              <p className="mt-2 font-medium text-white/95">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
