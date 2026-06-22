type BrandMarkProps = {
  className?: string;
  showText?: boolean;
};

export function BrandMark({ className = "", showText = true }: BrandMarkProps) {
  return (
    <div className={`brand-mark ${className}`}>
      <img
        src="/assets/mdg/mdg-logo-256.png"
        srcSet="/assets/mdg/mdg-logo-256.png 1x, /assets/mdg/mdg-logo-512.png 2x"
        alt={showText ? "" : "Médicos de Gente"}
        className="brand-logo-img"
        height="44"
        width="44"
      />
      {showText ? (
        <span className="brand-copy">
          <strong>Médicos de Gente</strong>
          <span>Humaniza Health</span>
        </span>
      ) : null}
    </div>
  );
}
