import { humanizaBlocks } from "../content/site";
import { Reveal } from "./Reveal";

export function Humaniza() {
  return (
    <section id="humaniza" className="section light-band humaniza-band">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.15fr] md:px-8">
        <Reveal>
          <div className="section-kicker">Humaniza Health hoje</div>
          <h2 className="section-title">Agora, a mesma inquietação virou uma healthtech.</h2>
          <p className="section-copy">
            Desenvolvida por médicos, a Humaniza Health oferece ferramentas inteligentes para o
            raciocínio clínico, com evidências, contexto brasileiro e responsabilidade.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {humanizaBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.08}>
              <article className="humaniza-row">
                <span>
                  <block.icon size={28} strokeWidth={1.7} />
                </span>
                <div>
                  <h3>{block.title}</h3>
                  <p>{block.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
