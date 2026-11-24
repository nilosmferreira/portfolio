import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import { education, profile, skills } from "@/lib/content";

const nav = [
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export default function Home() {
  return (
    <>
      <header className="bg-paper/85 border-line sticky top-0 z-10 border-b backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
          <a href="#" className="font-display text-lg font-bold">
            Nilo<span className="text-cobalt">.</span>
          </a>
          <ul className="flex gap-4 text-sm sm:gap-7 sm:text-base">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted hover:text-ink transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <Projects />
        <Timeline />

        <section className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Competências</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {skills.map((s) => (
                <div key={s.area} className="border-ink border-t-2 pt-4">
                  <h3 className="font-semibold">{s.area}</h3>
                  <ul className="text-muted mt-3 space-y-1.5">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Formação</h2>
            <ul className="mt-10 space-y-6">
              {education.map((e) => (
                <li key={e.school} className="border-line border-t-2 pt-4">
                  <h3 className="font-semibold">{e.course}</h3>
                  <p className="text-muted">
                    {e.school}, {e.city}
                  </p>
                  <p className="text-muted text-sm tabular-nums">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contato" className="bg-ink text-paper scroll-mt-20">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Contato</h2>
            <p className="text-paper/70 mt-3 max-w-xl text-lg">
              Tem um sistema para construir, migrar ou colocar na nuvem? Me mande um e-mail.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="font-display hover:decoration-amber mt-10 inline-block text-[clamp(1.4rem,5.5vw,3.5rem)] font-bold break-all underline decoration-2 underline-offset-8 transition-colors"
            >
              {profile.email}
            </a>
          </div>
          <footer className="border-paper/15 border-t">
            <p className="text-paper/60 mx-auto max-w-6xl px-4 py-6 text-sm sm:px-8">
              {profile.name}, {profile.city}
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}
