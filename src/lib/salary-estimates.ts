/**
 * Approximate annual CHF salary ranges for Swiss roofing trade roles.
 * Used when no salary data is available from the job source.
 */

export interface SalaryRange {
  min: number;
  max: number;
}

/**
 * Pattern → salary range mapping.
 * Checked top-to-bottom; first match wins, so put specific roles before generic ones.
 */
const ROLE_SALARY_MAP: { patterns: string[]; range: SalaryRange }[] = [
  // Leadership / senior roles
  {
    patterns: ["bauführer dach", "bauführer"],
    range: { min: 85_000, max: 110_000 },
  },
  {
    patterns: ["dachdeckerpolier", "polier dach"],
    range: { min: 80_000, max: 100_000 },
  },
  // Specialist roles
  {
    patterns: ["flachdach"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["steildach"],
    range: { min: 68_000, max: 85_000 },
  },
  {
    patterns: ["zimmermann", "holzbau"],
    range: { min: 68_000, max: 85_000 },
  },
  // Core trades
  {
    patterns: ["dachdecker"],
    range: { min: 65_000, max: 80_000 },
  },
  {
    patterns: ["spengler", "bauspengler"],
    range: { min: 65_000, max: 80_000 },
  },
  {
    patterns: ["dachsanier"],
    range: { min: 65_000, max: 82_000 },
  },
  {
    patterns: ["abdichter"],
    range: { min: 65_000, max: 78_000 },
  },
  {
    patterns: ["fassadenbauer", "fassade"],
    range: { min: 62_000, max: 78_000 },
  },
  {
    patterns: ["gerüstbauer", "gerüst"],
    range: { min: 60_000, max: 75_000 },
  },
  {
    patterns: ["gebäudehülle"],
    range: { min: 65_000, max: 85_000 },
  },
  // Broad fallbacks (keep last)
  {
    patterns: ["monteur", "dach"],
    range: { min: 62_000, max: 78_000 },
  },
];

/**
 * Estimate an annual CHF salary range from a job title.
 * Returns `null` when no pattern matches.
 */
export function estimateSalary(title: string): SalaryRange | null {
  const lower = title.toLowerCase();

  for (const entry of ROLE_SALARY_MAP) {
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) {
        return entry.range;
      }
    }
  }

  return null;
}

/**
 * Format a salary range as a Swiss-locale string, e.g. "65'000 – 80'000".
 */
export function formatSalaryRange(range: SalaryRange): string {
  const fmt = (n: number) =>
    n.toLocaleString("de-CH", { maximumFractionDigits: 0 });
  return `${fmt(range.min)} – ${fmt(range.max)}`;
}
