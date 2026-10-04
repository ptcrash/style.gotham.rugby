import React from "react";

/**
 * Gotham Knights — Stat
 * Big mono number + label. Scoreboard energy for results, counts, KPIs.
 */
export function Stat({
  value,
  label,
  sublabel,
  accent = "gold",
  align = "left",
  style = {},
  ...rest
}) {
  const accentColor = {
    gold: "var(--gold-500)",
    navy: "var(--text-strong)",
    white: "var(--white)",
  }[accent] || "var(--gold-500)";
  return (
    <div style={{ textAlign: align, fontFamily: "var(--font-body)", ...style }} {...rest}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--fs-display-md)",
        lineHeight: 1,
        color: accentColor,
        fontVariantNumeric: "tabular-nums",
      }}>
        {value}
      </div>
      {label && (
        <div style={{
          marginTop: "var(--space-2)",
          fontWeight: "var(--fw-bold)",
          textTransform: "uppercase",
          letterSpacing: "var(--ls-wide)",
          fontSize: "var(--fs-caption)",
          color: "var(--text-strong)",
        }}>
          {label}
        </div>
      )}
      {sublabel && (
        <div style={{ marginTop: "2px", fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>
          {sublabel}
        </div>
      )}
    </div>
  );
}
