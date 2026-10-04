import React from "react";

/**
 * Gotham Knights — SectionHeading
 * Eyebrow + title + optional gold rule. `athletic` swaps the serif for the loud
 * all-caps GothamHTF voice.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  athletic = false,
  align = "left",
  rule = true,
  style = {},
  ...rest
}) {
  return (
    <div style={{ textAlign: align, fontFamily: "var(--font-body)", ...style }} {...rest}>
      {eyebrow && (
        <div style={{
          fontWeight: "var(--fw-bold)",
          textTransform: "uppercase",
          letterSpacing: "var(--ls-overline)",
          fontSize: "var(--fs-overline)",
          color: "var(--accent-press)",
          marginBottom: "var(--space-3)",
        }}>
          {eyebrow}
        </div>
      )}
      <h2 style={{
        margin: 0,
        fontFamily: athletic ? "var(--font-athletic)" : "var(--font-heading)",
        fontWeight: athletic ? "var(--fw-black)" : "var(--fw-extrabold)",
        textTransform: athletic ? "uppercase" : "none",
        lineHeight: athletic ? "var(--lh-tight)" : "var(--lh-heading)",
        letterSpacing: athletic ? "var(--ls-tight)" : "var(--ls-tight)",
        fontSize: athletic ? "var(--fs-display-lg)" : "var(--fs-display-md)",
        color: "var(--text-strong)",
      }}>
        {title}
      </h2>
      {rule && (
        <hr style={{
          height: "var(--bw-bold)",
          width: "56px",
          border: 0,
          borderRadius: "var(--radius-pill)",
          background: "var(--gold-500)",
          margin: align === "center" ? "var(--space-4) auto 0" : "var(--space-4) 0 0",
        }} />
      )}
      {description && (
        <p style={{
          margin: "var(--space-4) 0 0",
          maxWidth: "60ch",
          marginLeft: align === "center" ? "auto" : undefined,
          marginRight: align === "center" ? "auto" : undefined,
          fontSize: "var(--fs-body-lg)",
          lineHeight: "var(--lh-body)",
          color: "var(--text-body)",
        }}>
          {description}
        </p>
      )}
    </div>
  );
}
