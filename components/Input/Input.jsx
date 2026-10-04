import React from "react";

/**
 * Gotham Knights — Input
 * Text field with label, hint, and error. Gold focus ring, 2px field border.
 */
export function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `gk-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return (
    <label htmlFor={inputId} style={{ display: "block", fontFamily: "var(--font-body)", ...style }}>
      {label && (
        <span style={{
          display: "block",
          fontWeight: "var(--fw-semibold)",
          fontSize: "var(--fs-body-sm)",
          color: "var(--text-strong)",
          marginBottom: "var(--space-2)",
        }}>
          {label}{required && <span style={{ color: "var(--danger)" }}> *</span>}
        </span>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-body)",
          color: "var(--field-text)",
          background: "var(--field-bg)",
          padding: "11px 14px",
          borderRadius: "var(--radius-sm)",
          border: `var(--bw-base) solid ${error ? "var(--danger)" : focused ? "var(--gold-500)" : "var(--field-border)"}`,
          outline: "none",
          opacity: disabled ? 0.55 : 1,
          transition: "border-color var(--dur-fast) var(--ease-standard)",
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{
          display: "block",
          marginTop: "var(--space-2)",
          fontSize: "var(--fs-caption)",
          color: error ? "var(--danger)" : "var(--text-muted)",
        }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
