import React from "react";

/**
 * Gotham Knights — Card
 * Surface container. Flat fill + 2px border OR soft navy shadow — rarely both.
 * `featured` adds the signature gold top-rule.
 */
export function Card({
  children,
  variant = "default",
  featured = false,
  padding = "var(--space-6)",
  as = "div",
  style = {},
  ...rest
}) {
  const Tag = as;
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "var(--bw-hairline) solid var(--border)",
      boxShadow: "var(--shadow-sm)",
    },
    outline: {
      background: "var(--surface-card)",
      border: "var(--bw-base) solid var(--navy-700)",
      boxShadow: "none",
    },
    navy: {
      background: "var(--navy-600)",
      border: "var(--bw-hairline) solid rgba(255,255,255,0.10)",
      boxShadow: "var(--shadow-md)",
      color: "var(--white)",
    },
    raised: {
      background: "var(--surface-card)",
      border: "none",
      boxShadow: "var(--shadow-lg)",
    },
  };
  return (
    <Tag
      style={{
        position: "relative",
        borderRadius: "var(--radius-lg)",
        padding,
        overflow: "hidden",
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {featured && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "var(--bw-bold)",
            background: "var(--gold-500)",
          }}
        />
      )}
      {children}
    </Tag>
  );
}
