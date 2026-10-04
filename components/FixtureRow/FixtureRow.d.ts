import * as React from "react";

/** A calendar date split into day + short month. */
export interface FixtureDate {
  /** Day of month, e.g. "12". */
  day: string;
  /** Short month, e.g. "OCT". */
  month: string;
}

/**
 * One match row for a fixtures/results list — date, home/away, opponent, and either
 * a kickoff time (upcoming) or a mono score with W/L/D chip (played).
 * @startingPoint section="Club" subtitle="Fixtures & results list rows" viewport="700x120"
 */
export interface FixtureRowProps {
  date: FixtureDate;
  /** Opposing club name. */
  opponent: string;
  /** Knights playing at home. @default true */
  home?: boolean;
  /** Competition / league label. */
  competition?: string;
  /** Kickoff time for an upcoming match, e.g. "1:00 PM". */
  kickoff?: string;
  /** Knights' score — provide both scores to render as a played result. */
  scoreFor?: number;
  /** Opponent's score. */
  scoreAgainst?: number;
  style?: React.CSSProperties;
}

export function FixtureRow(props: FixtureRowProps): JSX.Element;
