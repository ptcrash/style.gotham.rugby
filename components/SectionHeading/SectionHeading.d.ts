import * as React from "react";

/**
 * Eyebrow + title + gold rule section header. `athletic` switches to the loud all-caps voice.
 */
export interface SectionHeadingProps {
  /** Small all-caps label above the title. */
  eyebrow?: string;
  title: React.ReactNode;
  /** Optional supporting paragraph below the rule. */
  description?: React.ReactNode;
  /** Use GothamHTF all-caps instead of the default modern-sans heading. @default false */
  athletic?: boolean;
  /** @default "left" */
  align?: "left" | "center";
  /** Show the gold underline rule. @default true */
  rule?: boolean;
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
