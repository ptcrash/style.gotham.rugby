import React from "react";

/**
 * Gotham Knights — Badge
 * Small status/label marker. Solid or subtle fill across brand + status colors.
 */
export function Badge({
  children,
  variant = "gold",
  subtle = false,
  style = {},
  ...rest
}) {
  const map = {
    gold: { solidBg: "var(--gold-500)", solidFg: "var(--navy-700)", softBg: "var(--gold-200)", softFg: "var(--gold-700)" },
    navy: { solidBg: "var(--navy-700)", solidFg: "var(--white)", softBg: "var(--navy-100)", softFg: "var(--navy-600)" },
    success: { solidBg: "var(--success)", solidFg: "var(--white)", softBg: "var(--success-bg)", softFg: "var(--success)" },
    warning: { solidBg: "var(--warning)", solidFg: "var(--white)", softBg: "var(--warning-bg)", softFg: "var(--warning)" },
    danger: { solidBg: "var(--danger)", solidFg: "var(--white)", softBg: "var(--danger-bg)", softFg: "var(--danger)" },
    neutral: { solidBg: "var(--ink-500)", solidFg: "var(--white)", softBg: "var(--ink-100)", softFg: "var(--ink-700)" },
  };
  const c = map[variant] || map.gold;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--fw-bold)",
        fontSize: "var(--fs-overline)",
        textTransform: "uppercase",
        letterSpacing: "var(--ls-wider)",
        lineHeight: 1,
        padding: "5px 9px",
        borderRadius: "var(--radius-xs)",
        background: subtle ? c.softBg : c.solidBg,
        color: subtle ? c.softFg : c.solidFg,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
