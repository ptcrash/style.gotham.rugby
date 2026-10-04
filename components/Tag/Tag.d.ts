import * as React from "react";

/**
 * Pill chip for filters, positions, categories — supports selected state and dismiss.
 */
export interface TagProps {
  children: React.ReactNode;
  /** Filled navy when selected. @default false */
  selected?: boolean;
  /** Show an × and call this when clicked. */
  onRemove?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
