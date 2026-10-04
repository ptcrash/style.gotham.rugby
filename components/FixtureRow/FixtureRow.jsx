import React from "react";

/**
 * Gotham Knights — FixtureRow
 * One match in a fixtures/results list. Shows date, home/away, opponent,
 * and either a kickoff time (upcoming) or a mono score + W/L/D result (played).
 */
export function FixtureRow({
  date,
  opponent,
  home = true,
  competition,
  kickoff,
  scoreFor,
  scoreAgainst,
  style = {},
  ...rest
}) {
  const played = scoreFor != null && scoreAgainst != null;
  const result = !played ? null : scoreFor > scoreAgainst ? "W" : scoreFor < scoreAgainst ? "L" : "D";
  const resultColor = { W: "var(--success)", L: "var(--danger)", D: "var(--ink-500)" }[result];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        padding: "var(--space-4) var(--space-5)",
        background: "var(--surface-card)",
        border: "var(--bw-hairline) solid var(--border)",
        borderLeft: `var(--bw-bold) solid ${home ? "var(--gold-500)" : "var(--navy-700)"}`,
        borderRadius: "var(--radius-sm)",
        fontFamily: "var(--font-body)",
        ...style,
      }}
      {...rest}
    >
      {/* Date block */}
      <div style={{ width: "56px", flex: "none", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontWeight: "var(--fw-semibold)", fontSize: "1.25rem", color: "var(--text-strong)", lineHeight: 1 }}>
          {date?.day}
        </div>
        <div style={{ textTransform: "uppercase", letterSpacing: "var(--ls-wide)", fontSize: "var(--fs-overline)", color: "var(--text-muted)", marginTop: "2px" }}>
          {date?.month}
        </div>
      </div>

      {/* Opponent */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{
            fontWeight: "var(--fw-bold)",
            fontSize: "var(--fs-overline)",
            textTransform: "uppercase",
            letterSpacing: "var(--ls-wider)",
            padding: "2px 6px",
            borderRadius: "var(--radius-xs)",
            background: home ? "var(--gold-200)" : "var(--navy-100)",
            color: home ? "var(--gold-700)" : "var(--navy-600)",
          }}>
            {home ? "Home" : "Away"}
          </span>
          {competition && (
            <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>{competition}</span>
          )}
        </div>
        <div style={{ fontWeight: "var(--fw-semibold)", fontSize: "var(--fs-body-lg)", color: "var(--text-strong)", marginTop: "3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {home ? "Knights" : opponent} <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>v</span> {home ? opponent : "Knights"}
        </div>
      </div>

      {/* Result / kickoff */}
      <div style={{ flex: "none", textAlign: "right" }}>
        {played ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontWeight: "var(--fw-semibold)", fontSize: "1.375rem", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums" }}>
              {scoreFor}–{scoreAgainst}
            </span>
            <span aria-label={result} style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "26px", height: "26px", borderRadius: "var(--radius-xs)",
              background: resultColor, color: "var(--white)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)",
            }}>
              {result}
            </span>
          </div>
        ) : (
          <div style={{ fontFamily: "var(--font-mono)", fontWeight: "var(--fw-semibold)", fontSize: "1.125rem", color: "var(--accent-press)" }}>
            {kickoff}
          </div>
        )}
      </div>
    </div>
  );
}
