import * as React from "react";

/**
 * Labeled text field with hint + error states; gold focus ring, 2px border.
 */
export interface InputProps {
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — overrides hint and turns the field red. */
  error?: string;
  id?: string;
  /** @default "text" */
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
