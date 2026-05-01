export function BlockSection({id, title, body}: {id: string; title: string; body: string}) {
  return (
    <section id={id} className="scroll-mt-28 border-y border-white/10 bg-[#0d1424] py-16 md:scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
        <p className="mt-6 text-sm leading-relaxed text-[#e8e4dc]/78 md:text-base">{body}</p>
      </div>
    </section>
  );
}
