export function RegenerativeSection({title, body}: {title: string; body: string}) {
  return (
    <section className="border-y border-white/10 bg-[#0d1424] py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-2xl font-semibold tracking-wide text-[#c9a962] md:text-3xl">
          {title}
        </h2>
        <p className="mt-8 text-center text-sm leading-relaxed text-[#e8e4dc]/78 md:text-base">{body}</p>
      </div>
    </section>
  );
}
