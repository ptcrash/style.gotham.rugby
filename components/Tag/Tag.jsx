import React from "react";

/**
 * Gotham Knights — Tag
 * Pill chip for filters, positions, categories. Optional dismiss + selected state.
 */
export function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style = {},
  ...rest
}) {
  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--fs-body-sm)",
        lineHeight: 1,
        padding: "7px 12px",
        borderRadius: "var(--radius-pill)",
        cursor: onClick ? "pointer" : "default",
        border: "var(--bw-hairline) solid",
        borderColor: selected ? "var(--navy-700)" : "var(--border-strong)",
        background: selected ? "var(--navy-700)" : "transparent",
        color: selected ? "var(--white)" : "var(--text-body)",
        transition: "all var(--dur-fast) var(--ease-standard)",
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <button
          aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{
            border: 0,
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
            fontSize: "1.1em",
            lineHeight: 1,
            padding: 0,
            opacity: 0.7,
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}
