import {assets} from '../content/assets';
import {useSiteCopy} from '@/i18n/useSiteCopy';

const interviewImages = [
  assets.interviewTakahara,
  assets.interviewKato,
  assets.interviewFukuzawa,
  assets.interviewCell,
  assets.interviewTsukada,
] as const;

export function InterviewsSection() {
  const copy = useSiteCopy();
  const {items, title, subtitle} = copy.interviews;

  return (
    <section id="interviews" className="scroll-mt-28 border-y border-white/10 bg-[#0d1424] py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{title}</p>
        <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{subtitle}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((it, i) => (
            <a
              key={it.href}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-[#c9a962]/35"
            >
              <div className="aspect-[16/9] overflow-hidden bg-black/40">
                <img
                  src={interviewImages[i] ?? assets.interviewCell}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold leading-snug text-white">{it.title}</p>
                <p className="mt-3 text-xs text-[#e8e4dc]/55">
                  {it.name} ({it.nameEn}) · {it.clinic}
                </p>
                <p className="mt-4 text-xs font-semibold text-[#c9a962]">{copy.ui.interviewRead}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
