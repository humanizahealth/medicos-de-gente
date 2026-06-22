import { bridgeSteps } from "../content/site";
import { Reveal } from "./Reveal";

export function PonteViva() {
  return (
    <section id="ponte-viva" className="section bridge-band">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="section-kicker">Ponte Viva</div>
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <h2 className="section-title">O fio do cuidado mudou de instrumento, não de direção.</h2>
            </div>
            <p className="section-copy">
              A linha que começou na escuta e no vínculo atravessa a evidência e chega à tecnologia. O
              ponto não é parecer mais moderno; é construir ferramentas que respeitam a complexidade do
              cuidado real.
            </p>
          </div>
        </Reveal>

        <div className="bridge-flow" aria-hidden="true">
          <svg viewBox="0 0 1200 210" role="img" aria-label="Linha de evolução do cuidado">
            <defs>
              <linearGradient id="bridge-gradient" x1="40" y1="0" x2="1160" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#F97316" />
                <stop offset="0.48" stopColor="#F7C99B" />
                <stop offset="1" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
            <path className="bridge-path-muted" d="M40 128 C160 40 250 178 370 100 S570 56 670 130 880 190 1020 96 1128 64 1160 118" />
            <path className="bridge-path-active" d="M40 128 C160 40 250 178 370 100 S570 56 670 130 880 190 1020 96 1128 64 1160 118" />
          </svg>
        </div>

        <div className="bridge-grid">
          {bridgeSteps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.05}>
              <article className="bridge-card">
                <div className="bridge-card-head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <step.icon size={26} strokeWidth={1.7} />
                </div>
                <h3>{step.label}</h3>
                <strong>{step.title}</strong>
                <dl>
                  <div>
                    <dt>Antes</dt>
                    <dd>{step.before}</dd>
                  </div>
                  <div>
                    <dt>Agora</dt>
                    <dd>{step.now}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
