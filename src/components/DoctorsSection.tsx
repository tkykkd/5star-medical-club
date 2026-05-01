import {doctors} from '../content/doctors';
import {useI18n} from '@/i18n/context';
import {useSiteCopy} from '@/i18n/useSiteCopy';

export function DoctorsSection() {
  const {locale} = useI18n();
  const copy = useSiteCopy();

  return (
    <section id="doctors" className="scroll-mt-28 py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">DOCTOR</p>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{copy.ui.doctorsSectionTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm text-[#e8e4dc]/70">{copy.ui.doctorsLead}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <a
              key={d.detailUrl}
              href={d.detailUrl}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-[#c9a962]/35"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/40">
                <img
                  src={d.image}
                  alt={d.nameJa}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-white">{d.nameJa}</p>
                <p className="text-xs text-[#e8e4dc]/55">{d.nameEn}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#e8e4dc]/75">
                  {locale === 'ja' ? d.roleJa : d.roleTh}
                </p>
                <p className="mt-4 text-xs font-semibold text-[#c9a962]">{copy.ui.profileOnOfficial}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
