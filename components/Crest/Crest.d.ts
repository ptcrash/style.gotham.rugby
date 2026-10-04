import * as React from "react";

/**
 * The club shield/crest mark — badge, watermark, bullet, or loading mark.
 * Defaults to the 2-color shield in assets/logos; set `src` to match your asset path.
 */
export interface CrestProps {
  /** Rendered height in px (or any CSS size string). @default 64 */
  size?: number | string;
  /** Which packaged shield to use. @default "2c" */
  variant?: "2c" | "1c" | "k";
  /** Dim to 6% opacity for a background watermark. @default false */
  watermark?: boolean;
  /** Override the asset path entirely. */
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
}

export function Crest(props: CrestProps): JSX.Element;
