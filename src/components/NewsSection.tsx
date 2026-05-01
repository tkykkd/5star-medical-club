import {newsItems} from '../content/news';
import {useI18n} from '@/i18n/context';
import {useSiteCopy} from '@/i18n/useSiteCopy';

export function NewsSection() {
  const {locale} = useI18n();
  const copy = useSiteCopy();

  return (
    <section id="news" className="scroll-mt-28 border-b border-white/10 bg-[#0d1424] py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">NEWS</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{copy.ui.newsSectionTitle}</h2>
          </div>
          <p className="max-w-xl text-sm text-[#e8e4dc]/70">{copy.ui.newsLead}</p>
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {newsItems.map((n) => (
            <li key={n.id}>
              <a
                href={n.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#c9a962]/35 hover:bg-white/[0.06]"
              >
                <span className="text-xs font-semibold text-[#c9a962]/90">{n.date}</span>
                <span className="mt-2 text-base font-medium leading-snug text-[#e8e4dc] group-hover:text-white">
                  {locale === 'ja' ? n.title.ja : n.title.th}
                </span>
                <span className="mt-3 text-xs font-semibold text-[#c9a962]">{copy.ui.readOnOfficial}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
