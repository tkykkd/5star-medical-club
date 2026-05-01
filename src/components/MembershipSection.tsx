type Benefits = {
  title: string;
  subtitle: string;
  intro: string;
  sections: readonly {heading: string; text: string}[];
};

type MembershipSales = {
  title: string;
  body: string;
  moreLabel: string;
  moreHref: string;
};

type Passport = {
  title: string;
  heading: string;
  body: string;
  unlimitedTitle: string;
  unlimitedHeading: string;
  unlimitedBody: string;
  links: readonly {label: string; href: string}[];
};

type Magazine = {
  title: string;
  line: string;
  href: string;
  note: string;
};

export function MembershipSection({
  benefits,
  membership,
  passport,
  magazine,
}: {
  benefits: Benefits;
  membership: MembershipSales;
  passport: Passport;
  magazine: Magazine;
}) {
  return (
    <section id="membership" className="scroll-mt-28 py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{benefits.title}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{benefits.subtitle}</h2>
          <p className="mt-6 text-sm leading-relaxed text-[#e8e4dc]/78">{benefits.intro}</p>
        </div>

        <div className="mt-12 space-y-4">
          {benefits.sections.map((s) => (
            <details
              key={s.heading}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]"
            >
              <summary className="cursor-pointer list-none px-6 py-5 text-base font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {s.heading}
                  <span className="text-[#c9a962] transition group-open:rotate-180">⌄</span>
                </span>
              </summary>
              <div className="border-t border-white/10 px-6 pb-6 pt-2">
                <p className="text-sm leading-relaxed text-[#e8e4dc]/75">{s.text}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#c9a962]/25 bg-[#c9a962]/5 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{membership.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#e8e4dc]/78">{membership.body}</p>
            <a
              href={membership.moreHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-[#c9a962]/40 px-5 py-2.5 text-sm font-semibold text-[#c9a962] hover:bg-[#c9a962]/10"
            >
              {membership.moreLabel}
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{passport.title}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{passport.heading}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#e8e4dc]/75">{passport.body}</p>
            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a962]">
                {passport.unlimitedTitle}
              </p>
              <h4 className="mt-3 text-lg font-semibold text-white">{passport.unlimitedHeading}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#e8e4dc]/75">{passport.unlimitedBody}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {passport.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[#c9a962] underline-offset-4 hover:underline"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-[#0d1424] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a962]">{magazine.title}</p>
          <p className="mt-3 text-lg font-semibold text-white">{magazine.line}</p>
          <p className="mt-2 text-sm text-[#e8e4dc]/65">{magazine.note}</p>
          <a
            href={magazine.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            ageless-medical.com →
          </a>
        </div>
      </div>
    </section>
  );
}
