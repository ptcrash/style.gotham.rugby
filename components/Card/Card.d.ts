import * as React from "react";

/**
 * Surface container — flat fill + border or soft navy shadow. Optional gold top-rule for featured.
 * @startingPoint section="Core" subtitle="Content surfaces, tiles, panels" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  /** @default "default" */
  variant?: "default" | "outline" | "navy" | "raised";
  /** Adds the signature gold top-rule. @default false */
  featured?: boolean;
  /** CSS padding value. @default "var(--space-6)" */
  padding?: string;
  /** Element/tag to render as. @default "div" */
  as?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
