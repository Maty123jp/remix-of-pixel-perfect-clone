/**
 * Neutrální plocha pro obrázek, který zatím nebyl dodán.
 * Až bude soubor k dispozici, stačí místo této komponenty vložit <img>.
 */
export function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-xl border-2 border-dashed border-input bg-muted p-6 text-center text-base text-muted-foreground ${className}`}
    >
      <span className="max-w-xs">{label}</span>
    </div>
  );
}
