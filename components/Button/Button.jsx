import React from "react";

/**
 * Gotham Knights — Button
 * Confident, blocky, 2px-stroke energy. Gold primary on navy or paper.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", fontSize: "0.8125rem", gap: "6px" },
    md: { padding: "12px 22px", fontSize: "0.9375rem", gap: "8px" },
    lg: { padding: "16px 30px", fontSize: "1.0625rem", gap: "10px" },
  };

  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--fw-bold)",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    lineHeight: 1,
    border: "var(--bw-base) solid transparent",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--on-accent)",
      borderColor: "var(--accent)",
    },
    secondary: {
      background: "var(--navy-700)",
      color: "var(--white)",
      borderColor: "var(--navy-700)",
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--border-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "transparent",
    },
  };

  const hoverEnter = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(-1px)";
    if (variant === "primary") el.style.background = "var(--accent-hover)";
    if (variant === "secondary") el.style.background = "var(--navy-600)";
    if (variant === "outline") { el.style.background = "var(--navy-700)"; el.style.color = "var(--white)"; el.style.borderColor = "var(--navy-700)"; }
    if (variant === "ghost") el.style.background = "rgba(13,29,65,0.07)";
  };
  const hoverLeave = (e) => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    Object.assign(el.style, {
      background: variants[variant].background,
      color: variants[variant].color,
      borderColor: variants[variant].borderColor,
    });
  };
  const press = (e) => { if (!disabled) e.currentTarget.style.transform = "translateY(1px)"; };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}
      onMouseDown={press}
      onMouseUp={hoverEnter}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
