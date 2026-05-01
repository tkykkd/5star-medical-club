export function Footer({
  contact,
  legal,
  logoSrc,
  officialUrl,
}: {
  contact: {name: string; address: string; phone: string; hours: string};
  legal: readonly string[];
  logoSrc: string;
  officialUrl: string;
}) {
  return (
    <footer id="footer" className="scroll-mt-28 border-t border-white/10 bg-black/40 pb-12 pt-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <img src={logoSrc} alt="5Star Medical Club" className="h-12 w-auto opacity-95" loading="lazy" />
            <p className="mt-6 text-sm font-semibold text-white">{contact.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#e8e4dc]/75">{contact.address}</p>
            <p className="mt-4 text-lg font-semibold tracking-wide text-[#c9a962]">{contact.phone}</p>
            <p className="mt-2 text-xs text-[#e8e4dc]/60">{contact.hours}</p>
          </div>
          <div className="space-y-4">
            <a
              href={`${officialUrl}/contact/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#c9a962] px-6 py-3 text-sm font-semibold text-[#0a0f1a] md:w-auto"
            >
              แบบฟอร์มติดต่อบนเว็บไซต์ทางการ (JP)
            </a>
            <ul className="space-y-2 text-xs leading-relaxed text-[#e8e4dc]/55">
              {legal.map((line) => (
                <li key={line}>· {line}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-[#e8e4dc]/45">
          © {new Date().getFullYear()} 5Star Medical Club · เว็บเพจภาษาไทยจัดทำจากเนื้อหาเว็บไซต์ทางการ{' '}
          <a href={officialUrl} className="text-[#c9a962]/90 underline-offset-4 hover:underline">
            5stars.tokyo
          </a>
        </p>
      </div>
    </footer>
  );
}
