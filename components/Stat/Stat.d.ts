import * as React from "react";

/**
 * Big tabular-mono number with an uppercase label — scoreboard / KPI energy.
 */
export interface StatProps {
  /** The headline figure, e.g. "27", "1998", "150+". */
  value: React.ReactNode;
  /** Uppercase caption under the number. */
  label?: string;
  /** Optional smaller line below the label. */
  sublabel?: string;
  /** Number color. @default "gold" */
  accent?: "gold" | "navy" | "white";
  /** @default "left" */
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
