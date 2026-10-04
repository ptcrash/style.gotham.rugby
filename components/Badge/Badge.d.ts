import * as React from "react";

/**
 * Small uppercase status/label marker in brand + status colors, solid or subtle.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "gold" */
  variant?: "gold" | "navy" | "success" | "warning" | "danger" | "neutral";
  /** Use the soft tinted fill instead of solid. @default false */
  subtle?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
