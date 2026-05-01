import {useState} from 'react';
import {useI18n} from '@/i18n/context';
import {useSiteCopy} from '@/i18n/useSiteCopy';

export function Header({logoSrc, officialUrl}: {logoSrc: string; officialUrl: string}) {
  const [open, setOpen] = useState(false);
  const {locale, setLocale} = useI18n();
  const copy = useSiteCopy();

  const langBtn =
    'min-w-[2.25rem] shrink-0 whitespace-nowrap rounded px-2 py-1 text-[11px] font-bold uppercase tracking-wider transition md:text-xs';
  const langActive = 'bg-[#c9a962]/25 text-[#c9a962]';
  const langIdle = 'text-[#e8e4dc]/70 hover:bg-white/10 hover:text-[#e8e4dc]';

  const langSwitch = (
    <div
      className="flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/[0.04] p-0.5"
      role="group"
      aria-label={copy.ui.langSwitchAria}
    >
      <button
        type="button"
        className={`${langBtn} ${locale === 'th' ? langActive : langIdle}`}
        onClick={() => setLocale('th')}
        aria-pressed={locale === 'th'}
      >
        {copy.ui.langTh}
      </button>
      <button
        type="button"
        className={`${langBtn} ${locale === 'ja' ? langActive : langIdle}`}
        onClick={() => setLocale('ja')}
        aria-pressed={locale === 'ja'}
      >
        {copy.ui.langJa}
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0f1a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 md:gap-4 md:py-4">
        <a href="#top" className="flex max-w-[45%] shrink-0 items-center sm:max-w-none">
          <img src={logoSrc} alt="5Star Medical Club" className="h-9 w-auto md:h-11" loading="eager" />
        </a>

        <nav className="hidden min-w-0 flex-1 justify-center gap-1 lg:flex lg:px-4">
          {copy.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded px-2 py-1.5 text-xs font-medium text-[#e8e4dc]/85 transition hover:bg-white/5 hover:text-[#c9a962]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`${officialUrl}/contact/`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#c9a962]/50 bg-[#c9a962]/10 px-3 py-1.5 text-xs font-semibold text-[#c9a962] transition hover:bg-[#c9a962]/20 lg:ml-2"
          >
            {copy.ui.contactOfficial}
          </a>
        </nav>

        {/* Keep language + menu together so the pill is never squeezed against the viewport edge. */}
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          {langSwitch}
          <button
            type="button"
            className="flex items-center gap-2 rounded border border-white/15 px-3 py-1.5 text-xs font-semibold text-[#e8e4dc] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={copy.ui.mobileNavAria}
          >
            <span className="flex w-[18px] flex-col justify-center gap-[4px] text-[#e8e4dc]" aria-hidden>
              <span className="h-[2px] w-full rounded-full bg-current" />
              <span className="h-[2px] w-full rounded-full bg-current" />
              <span className="h-[2px] w-full rounded-full bg-current" />
            </span>
            {copy.ui.menu}
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-[#0a0f1a] px-4 pb-4 lg:hidden">
          <p className="pt-3 text-[10px] font-semibold uppercase tracking-wider text-[#c9a962]/90">
            {copy.ui.langHeadingMobile}
          </p>
          <div className="flex gap-2 border-b border-white/10 pb-3 pt-2">
            <button
              type="button"
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold ${locale === 'th' ? 'bg-[#c9a962]/20 text-[#c9a962]' : 'bg-white/5 text-[#e8e4dc]'}`}
              onClick={() => setLocale('th')}
            >
              <span className="block">{copy.ui.langTh}</span>
              <span className="mt-0.5 block text-[11px] font-normal opacity-80">{copy.ui.langThHint}</span>
            </button>
            <button
              type="button"
              className={`flex-1 rounded-lg py-2.5 text-sm font-semibold ${locale === 'ja' ? 'bg-[#c9a962]/20 text-[#c9a962]' : 'bg-white/5 text-[#e8e4dc]'}`}
              onClick={() => setLocale('ja')}
            >
              <span className="block">{copy.ui.langJa}</span>
              <span className="mt-0.5 block text-[11px] font-normal opacity-80">{copy.ui.langJaHint}</span>
            </button>
          </div>
          <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto pt-2">
            {copy.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded px-2 py-2 text-sm text-[#e8e4dc]/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`${officialUrl}/contact/`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-[#c9a962]/15 px-3 py-2 text-center text-sm font-semibold text-[#c9a962]"
            >
              {copy.ui.contactOfficialMobile}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
