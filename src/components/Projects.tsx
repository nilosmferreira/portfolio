import { projects } from "@/lib/content";

export default function Projects() {
  const live = projects.filter((p) => p.url);
  const soon = projects.filter((p) => !p.url);

  return (
    <section id="projetos" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-8 sm:py-28">
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Projetos</h2>
      <p className="text-muted mt-3 max-w-xl text-lg">
        Sistemas que construí e que estão no ar.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {live.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-ink bg-paper hover:bg-ink hover:text-paper flex min-h-72 flex-col justify-between rounded-lg border-2 p-6 transition-colors duration-300 sm:p-8"
          >
            <div className="flex items-center gap-2 text-sm">
              <span className="live-dot bg-cobalt group-hover:bg-amber inline-block size-2.5 rounded-full" />
              <span className="text-muted group-hover:text-paper/70">No ar</span>
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{p.name}</h3>
              <p className="text-muted group-hover:text-paper/75 mt-3 max-w-md leading-relaxed">
                {p.description}
              </p>
              <p className="mt-6 font-medium underline decoration-2 underline-offset-4 group-hover:decoration-amber">
                Abrir {p.domain}
                <span className="sr-only"> (abre em nova aba)</span>
              </p>
            </div>
          </a>
        ))}

        {soon.map((p, i) => (
          <div
            key={i}
            className="border-line text-muted flex min-h-40 flex-col justify-between rounded-lg border-2 border-dashed p-6 sm:p-8"
          >
            <h3 className="font-display text-ink/60 text-2xl font-bold tracking-tight">{p.name}</h3>
            <p className="mt-4">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
