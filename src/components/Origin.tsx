import { originPillars } from "../content/site";
import { Reveal } from "./Reveal";

export function Origin() {
  return (
    <section id="origem" className="section light-band origin-band">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.25fr] md:px-8">
        <Reveal>
          <div className="section-kicker">A origem</div>
          <h2 className="section-title">Antes de existir uma empresa de tecnologia, existiu uma prática.</h2>
          <p className="section-copy">
            Sentar, ouvir, entender o contexto e cuidar de pessoas reais. O Médicos de Gente nasceu no
            território, no sertão e nas periferias de Pernambuco, da convicção de que cuidar vai muito
            além de prescrever.
          </p>
          <div className="origin-media">
            <img
              src="/assets/mdg/taipa-care-card.webp"
              alt="Registro histórico de atendimento em casa de taipa"
              loading="lazy"
            />
            <div>
              <span>De gente. Para gente.</span>
              <p>Uma frase simples que continua orientando a nova fase.</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {originPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <article className="pillar-card">
                <pillar.icon className="text-mdg-sky" size={32} strokeWidth={1.7} />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
