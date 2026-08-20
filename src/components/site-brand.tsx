import { cn } from "@/lib/utils";

interface SiteBrandProps {
  className?: string;
  inverse?: boolean;
}

/** A compact roof section from ridge to eaves; no external brand asset. */
export function SiteBrand({ className, inverse = false }: SiteBrandProps) {
  return (
    <span
      className={cn("site-brand", inverse && "site-brand--inverse", className)}
      role="img"
      aria-label="dachdeckerjobs.ch"
    >
      <svg
        className="site-brand__mark"
        viewBox="0 0 42 42"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M3 31 21 9l18 22" />
        <path d="M8 31h27M21 9v22M13 21h16M10 26h22" />
        <path d="M5 34h34" />
      </svg>
      <span className="site-brand__type">
        <strong>dachdecker</strong>
        <span>jobs.ch</span>
      </span>
    </span>
  );
}
