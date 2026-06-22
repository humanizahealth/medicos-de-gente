import { ArrowRight, Instagram } from "lucide-react";
import { closingCards, links } from "../content/site";
import { ExternalLink } from "./ExternalLink";
import { Reveal } from "./Reveal";

export function Follow() {
  return (
    <section id="acompanhe" className="section follow-band">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <Reveal>
          <div className="section-kicker">Acompanhe esta transição</div>
          <h2 className="section-title">O próximo capítulo está sendo escrito a muitas mãos.</h2>
          <p className="section-copy">
            Vamos retomar o Médicos de Gente para contar, com clareza, como a experiência do cuidado
            próximo ajudou a construir a Humaniza Health.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ExternalLink className="btn btn-primary" href={links.instagram}>
              Acompanhar @medicos.de.gente <Instagram size={18} />
            </ExternalLink>
            <ExternalLink className="btn btn-secondary" href={links.humaniza}>
              Conhecer Humaniza Health <ArrowRight size={18} />
            </ExternalLink>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {closingCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="closing-card">
                <card.icon size={30} strokeWidth={1.8} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
