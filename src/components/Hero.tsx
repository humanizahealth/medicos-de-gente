import { ArrowRight, Instagram } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { bridgeSteps, links } from "../content/site";
import { ExternalLink } from "./ExternalLink";
import { Reveal } from "./Reveal";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="topo" className="hero-section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="mx-auto grid min-h-[92svh] max-w-7xl items-center gap-10 px-5 pb-16 pt-32 md:px-8 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative z-10 max-w-3xl">
          <Reveal>
            <h1 className="hero-title">
              Médicos de Gente foi o começo.
              <span>Humaniza Health é o próximo capítulo.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[rgb(var(--color-muted))] md:text-xl">
              O cuidado que nasceu da escuta, do território e da medicina de família evoluiu para uma
              healthtech dedicada a construir tecnologia clínica com evidências, contexto brasileiro e
              responsabilidade.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ExternalLink className="btn btn-primary" href={links.humaniza}>
                Conheça a Humaniza Health <ArrowRight size={18} />
              </ExternalLink>
              <ExternalLink className="btn btn-secondary" href={links.instagram}>
                Acompanhe no Instagram <Instagram size={18} />
              </ExternalLink>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative z-10" delay={0.14}>
          <div className="hero-panel">
            <div className="hero-panel-line" aria-hidden="true">
              <motion.span
                initial={prefersReducedMotion ? false : { height: "18%" }}
                animate={prefersReducedMotion ? undefined : { height: "100%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              />
            </div>
            <div className="grid gap-6">
              {bridgeSteps.map((step) => (
                <div key={step.label} className="hero-step">
                  <span className="hero-step-icon">
                    <step.icon size={20} />
                  </span>
                  <div>
                    <strong>{step.label}</strong>
                    <p>{step.now}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
