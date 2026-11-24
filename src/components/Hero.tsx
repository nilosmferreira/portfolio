"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/lib/content";

// Um sinal que começa como o ruído quadrado de um modem discado e termina
// como uma onda limpa: a trajetória de 1997 até hoje.
const W = 1200;
const MID = 70;

function buildSignal() {
  const parts: string[] = [`M 0 ${MID}`];
  // Trecho 1: onda quadrada irregular (linha discada)
  const widths = [18, 30, 12, 24, 16, 34, 10, 22, 28, 14, 20, 26, 12, 30, 18, 24, 16, 22];
  let x = 0;
  let up = true;
  for (const w of widths) {
    const y = up ? MID - 44 : MID + 44;
    parts.push(`L ${x} ${y}`, `L ${x + w} ${y}`);
    x += w;
    up = !up;
  }
  // Trecho 2: dentes de serra que vão se acalmando
  let amp = 40;
  while (x < 700) {
    x += 22;
    parts.push(`L ${x} ${up ? MID - amp : MID + amp}`);
    up = !up;
    amp *= 0.9;
  }
  // Trecho 3: onda senoidal suave (rede, nuvem)
  const step = 50;
  const a = 22;
  parts.push(`Q ${x + step / 2} ${MID - a} ${x + step} ${MID}`);
  x += step;
  while (x < W - 40) {
    parts.push(`T ${x + step} ${MID}`);
    x += step;
  }
  return { d: parts.join(" "), endX: x };
}

const { d: SIGNAL, endX } = buildSignal();

const marks = [
  { left: "0%", label: "1997", shift: "0%" },
  { left: `${(420 / W) * 100}%`, label: "2005", shift: "-50%" },
  { left: "100%", label: "hoje", shift: "-100%" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const draw = reduce ? 0 : 2.6;

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-8 sm:pt-28 sm:pb-28">
      <motion.p
        className="text-muted text-base sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {profile.role} · {profile.city}
      </motion.p>

      <h1
        className="font-display mt-3 text-[clamp(3.2rem,13vw,10.5rem)] leading-[0.88] font-extrabold tracking-[-0.035em]"
        style={{ fontVariationSettings: '"wdth" 80' }}
      >
        {profile.name.split(" ").map((word, i) => (
          <span key={word} className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block"
              initial={reduce ? false : { y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.2, 0.7, 0.1, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="mt-10 sm:mt-14" aria-hidden="true">
        <svg
          viewBox={`-8 -8 ${W + 16} 140`}
          className="h-auto w-full overflow-visible"
          fill="none"
        >
          <line x1={0} x2={W} y1={MID} y2={MID} stroke="var(--line)" strokeDasharray="2 6" />
          <motion.path
            d={SIGNAL}
            stroke="var(--cobalt)"
            strokeWidth={3}
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: draw, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.circle
            cx={endX}
            cy={MID}
            r={8}
            fill="var(--amber)"
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + draw, type: "spring", stiffness: 400, damping: 14 }}
          />
        </svg>
        <div className="text-muted relative mt-2 h-6 text-sm sm:text-base">
          {marks.map((m) => (
            <span
              key={m.label}
              className="absolute top-0 tabular-nums"
              style={{ left: m.left, transform: `translateX(${m.shift})` }}
            >
              {m.label}
            </span>
          ))}
        </div>
      </div>

      <motion.p
        className="mt-10 max-w-[38rem] text-lg leading-relaxed sm:text-xl"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: reduce ? 0 : 1.6 }}
      >
        {profile.intro}
      </motion.p>
    </section>
  );
}
