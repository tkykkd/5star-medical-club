export function Ribbon({text, officialUrl}: {text: string; officialUrl: string}) {
  return (
    <div className="border-y border-[#c9a962]/25 bg-[#c9a962]/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="text-sm leading-relaxed text-[#e8e4dc]/90">{text}</p>
        <a
          href={officialUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-sm font-semibold text-[#c9a962] underline-offset-4 hover:underline"
        >
          5stars.tokyo
        </a>
      </div>
    </div>
  );
}
