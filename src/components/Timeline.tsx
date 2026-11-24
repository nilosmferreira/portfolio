"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { jobs } from "@/lib/content";

export default function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="trajetoria" className="bg-paper-2 scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Trajetória</h2>
        <p className="text-muted mt-3 max-w-xl text-lg">
          Quase três décadas entre Belém, Recife e Olinda.
        </p>

        <ol ref={ref} className="relative mt-14 space-y-14 pl-8 sm:pl-12">
          <span aria-hidden className="bg-line absolute top-2 bottom-2 left-[5px] w-0.5" />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="bg-cobalt absolute top-2 bottom-2 left-[5px] w-0.5 origin-top"
          />
          {jobs.map((job) => (
            <li key={job.company} className="relative grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-8">
              <span
                aria-hidden
                className="border-cobalt bg-paper-2 absolute top-2.5 -left-8 size-3 rounded-full border-2 sm:-left-12"
              />
              <p className="font-display text-2xl font-bold tabular-nums sm:text-3xl">
                {job.start}
                <span className="text-muted font-normal">–{job.end}</span>
              </p>
              <div>
                <h3 className="text-xl font-semibold">
                  {job.title}, {job.company}
                </h3>
                <p className="text-muted">{job.city}</p>
                <ul className="mt-3 max-w-2xl list-disc space-y-1.5 pl-5 leading-relaxed marker:text-[var(--muted)]">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
