import {treatments} from '../content/treatments';
import {useI18n} from '@/i18n/context';
import {useSiteCopy} from '@/i18n/useSiteCopy';

type Intro = {
  title: string;
  subtitle: string;
  lead: string;
  belief: string;
  closing: string;
};

export function TreatmentsSection({intro}: {intro: Intro}) {
  const {locale} = useI18n();
  const copy = useSiteCopy();
  const lang = locale === 'ja' ? 'ja' : 'th';

  return (
    <section id="treatments" className="scroll-mt-28 py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{intro.title}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{intro.subtitle}</h2>
          <p className="mt-6 text-sm leading-relaxed text-[#e8e4dc]/78">{intro.lead}</p>
          <p className="mt-4 text-sm leading-relaxed text-[#e8e4dc]/78">{intro.belief}</p>
          <p className="mt-4 text-sm leading-relaxed text-[#e8e4dc]/78">{intro.closing}</p>
        </div>

        <div className="mt-14 grid gap-10">
          {treatments.map((t, idx) => {
            const s = t[lang];
            return (
              <article
                key={t.id}
                className={`grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-2 md:p-10 ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`overflow-hidden rounded-xl bg-black/30 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={t.image} alt="" className="aspect-[16/10] w-full object-cover" loading="lazy" />
                </div>
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a962]">{s.badge}</span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[#e8e4dc]/85">{s.subtitle}</p>
                  <p className="mt-5 text-sm leading-relaxed text-[#e8e4dc]/75">{s.body}</p>
                  {t.moreHref ? (
                    <a
                      href={t.moreHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex text-sm font-semibold text-[#c9a962] underline-offset-4 hover:underline"
                    >
                      {copy.ui.treatmentMore}
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
