import * as React from "react";

/**
 * Confident, blocky uppercase button — gold primary, navy secondary, plus outline/ghost.
 * @startingPoint section="Core" subtitle="Primary actions, CTAs, forms" viewport="700x160"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Optional element rendered before the label (e.g. a Lucide icon). */
  iconLeft?: React.ReactNode;
  /** Optional element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  /** @default false */
  disabled?: boolean;
  /** @default "button" */
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
