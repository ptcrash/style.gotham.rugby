/* @ds-bundle: {"format":4,"namespace":"GothamKnightsDesignSystem_c42f90","components":[{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Crest","sourcePath":"components/Crest/Crest.jsx"},{"name":"FixtureRow","sourcePath":"components/FixtureRow/FixtureRow.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/SectionHeading/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/Stat/Stat.jsx"},{"name":"Tag","sourcePath":"components/Tag/Tag.jsx"}],"sourceHashes":{"components/Badge/Badge.jsx":"c7f2031109f6","components/Button/Button.jsx":"553d9494f4c4","components/Card/Card.jsx":"d23bdd9a89bc","components/Crest/Crest.jsx":"fe713d4600dc","components/FixtureRow/FixtureRow.jsx":"10a38a38b7ec","components/Input/Input.jsx":"a0f8944c4097","components/SectionHeading/SectionHeading.jsx":"6fb207ce28ea","components/Stat/Stat.jsx":"e601fb0b3b3d","components/Tag/Tag.jsx":"1604cda10ea5","ui_kits/website/App.jsx":"b10d3eabee2d","ui_kits/website/FixturesScreen.jsx":"0f14692e5da9","ui_kits/website/HomeScreen.jsx":"fc619448a9f8","ui_kits/website/JoinScreen.jsx":"c2ae431dde0c","ui_kits/website/SiteFooter.jsx":"fcd2e18b15ca","ui_kits/website/SiteHeader.jsx":"61b678ec8a4b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GothamKnightsDesignSystem_c42f90 = window.GothamKnightsDesignSystem_c42f90 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gotham Knights — Badge
 * Small status/label marker. Solid or subtle fill across brand + status colors.
 */
function Badge({
  children,
  variant = "gold",
  subtle = false,
  style = {},
  ...rest
}) {
  const map = {
    gold: {
      solidBg: "var(--gold-500)",
      solidFg: "var(--navy-700)",
      softBg: "var(--gold-200)",
      softFg: "var(--gold-700)"
    },
    navy: {
      solidBg: "var(--navy-700)",
      solidFg: "var(--white)",
      softBg: "var(--navy-100)",
      softFg: "var(--navy-600)"
    },
    success: {
      solidBg: "var(--success)",
      solidFg: "var(--white)",
      softBg: "var(--success-bg)",
      softFg: "var(--success)"
    },
    warning: {
      solidBg: "var(--warning)",
      solidFg: "var(--white)",
      softBg: "var(--warning-bg)",
      softFg: "var(--warning)"
    },
    danger: {
      solidBg: "var(--danger)",
      solidFg: "var(--white)",
      softBg: "var(--danger-bg)",
      softFg: "var(--danger)"
    },
    neutral: {
      solidBg: "var(--ink-500)",
      solidFg: "var(--white)",
      softBg: "var(--ink-100)",
      softFg: "var(--ink-700)"
    }
  };
  const c = map[variant] || map.gold;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gotham Knights — Button
 * Confident, blocky, 2px-stroke energy. Gold primary on navy or paper.
 */
function Button({
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
    sm: {
      padding: "8px 16px",
      fontSize: "0.8125rem",
      gap: "6px"
    },
    md: {
      padding: "12px 22px",
      fontSize: "0.9375rem",
      gap: "8px"
    },
    lg: {
      padding: "16px 30px",
      fontSize: "1.0625rem",
      gap: "10px"
    }
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
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--on-accent)",
      borderColor: "var(--accent)"
    },
    secondary: {
      background: "var(--navy-700)",
      color: "var(--white)",
      borderColor: "var(--navy-700)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "transparent"
    }
  };
  const hoverEnter = e => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(-1px)";
    if (variant === "primary") el.style.background = "var(--accent-hover)";
    if (variant === "secondary") el.style.background = "var(--navy-600)";
    if (variant === "outline") {
      el.style.background = "var(--navy-700)";
      el.style.color = "var(--white)";
      el.style.borderColor = "var(--navy-700)";
    }
    if (variant === "ghost") el.style.background = "rgba(13,29,65,0.07)";
  };
  const hoverLeave = e => {
    if (disabled) return;
    const el = e.currentTarget;
    el.style.transform = "translateY(0)";
    Object.assign(el.style, {
      background: variants[variant].background,
      color: variants[variant].color,
      borderColor: variants[variant].borderColor
    });
  };
  const press = e => {
    if (!disabled) e.currentTarget.style.transform = "translateY(1px)";
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: hoverEnter,
    onMouseLeave: hoverLeave,
    onMouseDown: press,
    onMouseUp: hoverEnter,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gotham Knights — Card
 * Surface container. Flat fill + 2px border OR soft navy shadow — rarely both.
 * `featured` adds the signature gold top-rule.
 */
function Card({
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
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "var(--surface-card)",
      border: "var(--bw-base) solid var(--navy-700)",
      boxShadow: "none"
    },
    navy: {
      background: "var(--navy-600)",
      border: "var(--bw-hairline) solid rgba(255,255,255,0.10)",
      boxShadow: "var(--shadow-md)",
      color: "var(--white)"
    },
    raised: {
      background: "var(--surface-card)",
      border: "none",
      boxShadow: "var(--shadow-lg)"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      padding,
      overflow: "hidden",
      ...variants[variant],
      ...style
    }
  }, rest), featured && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "var(--bw-bold)",
      background: "var(--gold-500)"
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Crest/Crest.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gotham Knights — Crest
 * Renders the club shield/crest mark. Use as badge, watermark, bullet, or loading mark.
 * Points at the shield SVG in assets/logos — override `src` to match your project path.
 */
function Crest({
  size = 64,
  variant = "2c",
  watermark = false,
  src,
  alt = "Gotham Knights crest",
  style = {},
  ...rest
}) {
  const files = {
    "2c": "assets/logos/shield-2c.svg",
    "k": "assets/logos/shield-k.svg",
    "1c": "assets/logos/shield-1c.svg"
  };
  const resolved = src || files[variant] || files["2c"];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: resolved,
    alt: watermark ? "" : alt,
    "aria-hidden": watermark ? "true" : undefined,
    width: size,
    style: {
      display: "block",
      height: typeof size === "number" ? `${size}px` : size,
      width: "auto",
      opacity: watermark ? 0.06 : 1,
      userSelect: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Crest });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Crest/Crest.jsx", error: String((e && e.message) || e) }); }

// components/FixtureRow/FixtureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gotham Knights — FixtureRow
 * One match in a fixtures/results list. Shows date, home/away, opponent,
 * and either a kickoff time (upcoming) or a mono score + W/L/D result (played).
 */
function FixtureRow({
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
  const resultColor = {
    W: "var(--success)",
    L: "var(--danger)",
    D: "var(--ink-500)"
  }[result];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-5)",
      background: "var(--surface-card)",
      border: "var(--bw-hairline) solid var(--border)",
      borderLeft: `var(--bw-bold) solid ${home ? "var(--gold-500)" : "var(--navy-700)"}`,
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      flex: "none",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "1.25rem",
      color: "var(--text-strong)",
      lineHeight: 1
    }
  }, date?.day), /*#__PURE__*/React.createElement("div", {
    style: {
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wide)",
      fontSize: "var(--fs-overline)",
      color: "var(--text-muted)",
      marginTop: "2px"
    }
  }, date?.month)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-overline)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wider)",
      padding: "2px 6px",
      borderRadius: "var(--radius-xs)",
      background: home ? "var(--gold-200)" : "var(--navy-100)",
      color: home ? "var(--gold-700)" : "var(--navy-600)"
    }
  }, home ? "Home" : "Away"), competition && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, competition)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-lg)",
      color: "var(--text-strong)",
      marginTop: "3px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, home ? "Knights" : opponent, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontWeight: 400
    }
  }, "v"), " ", home ? opponent : "Knights")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      textAlign: "right"
    }
  }, played ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "1.375rem",
      color: "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, scoreFor, "\u2013", scoreAgainst), /*#__PURE__*/React.createElement("span", {
    "aria-label": result,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "26px",
      height: "26px",
      borderRadius: "var(--radius-xs)",
      background: resultColor,
      color: "var(--white)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-body-sm)"
    }
  }, result)) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "1.125rem",
      color: "var(--accent-press)"
    }
  }, kickoff)));
}
Object.assign(__ds_scope, { FixtureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/FixtureRow/FixtureRow.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gotham Knights — Input
 * Text field with label, hint, and error. Gold focus ring, 2px field border.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-strong)",
      marginBottom: "var(--space-2)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)"
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
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
      transition: "border-color var(--dur-fast) var(--ease-standard)"
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/SectionHeading/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gotham Knights — SectionHeading
 * Eyebrow + title + optional gold rule. `athletic` swaps the serif for the loud
 * all-caps GothamHTF voice.
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  athletic = false,
  align = "left",
  rule = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-overline)",
      fontSize: "var(--fs-overline)",
      color: "var(--accent-press)",
      marginBottom: "var(--space-3)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: athletic ? "var(--font-athletic)" : "var(--font-heading)",
      fontWeight: athletic ? "var(--fw-black)" : "var(--fw-extrabold)",
      textTransform: athletic ? "uppercase" : "none",
      lineHeight: athletic ? "var(--lh-tight)" : "var(--lh-heading)",
      letterSpacing: athletic ? "var(--ls-tight)" : "var(--ls-tight)",
      fontSize: athletic ? "var(--fs-display-lg)" : "var(--fs-display-md)",
      color: "var(--text-strong)"
    }
  }, title), rule && /*#__PURE__*/React.createElement("hr", {
    style: {
      height: "var(--bw-bold)",
      width: "56px",
      border: 0,
      borderRadius: "var(--radius-pill)",
      background: "var(--gold-500)",
      margin: align === "center" ? "var(--space-4) auto 0" : "var(--space-4) 0 0"
    }
  }), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      maxWidth: "60ch",
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/SectionHeading/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/Stat/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gotham Knights — Stat
 * Big mono number + label. Scoreboard energy for results, counts, KPIs.
 */
function Stat({
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
    white: "var(--white)"
  }[accent] || "var(--gold-500)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-display-md)",
      lineHeight: 1,
      color: accentColor,
      fontVariantNumeric: "tabular-nums"
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)",
      fontWeight: "var(--fw-bold)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-wide)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-strong)"
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "2px",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Stat/Stat.jsx", error: String((e && e.message) || e) }); }

// components/Tag/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gotham Knights — Tag
 * Pill chip for filters, positions, categories. Optional dismiss + selected state.
 */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
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
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      border: 0,
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      fontSize: "1.1em",
      lineHeight: 1,
      padding: 0,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tag/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Gotham Knights — Website UI kit app shell
function App() {
  const [screen, setScreen] = React.useState("home");
  const go = s => {
    setScreen(s);
    window.scrollTo({
      top: 0
    });
  };
  const {
    SiteHeader,
    SiteFooter,
    HomeScreen,
    FixturesScreen,
    JoinScreen
  } = window;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    current: screen,
    onNavigate: go
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, screen === "home" && /*#__PURE__*/React.createElement(HomeScreen, {
    onNavigate: go
  }), screen === "fixtures" && /*#__PURE__*/React.createElement(FixturesScreen, {
    onNavigate: go
  }), screen === "join" && /*#__PURE__*/React.createElement(JoinScreen, {
    onNavigate: go
  })), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FixturesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Gotham Knights — Fixtures & Results screen
const GK_FIX = window.GothamKnightsDesignSystem_c42f90;
function FixturesScreen() {
  const {
    FixtureRow,
    SectionHeading,
    Tag
  } = GK_FIX;
  const [filter, setFilter] = React.useState("all");
  const upcoming = [{
    date: {
      day: "12",
      month: "OCT"
    },
    opponent: "Village Lions",
    home: true,
    competition: "Met Union",
    kickoff: "1:00 PM"
  }, {
    date: {
      day: "19",
      month: "OCT"
    },
    opponent: "Jersey Shore RFC",
    home: false,
    competition: "Met Union",
    kickoff: "12:00 PM"
  }, {
    date: {
      day: "02",
      month: "NOV"
    },
    opponent: "Hudson Valley",
    home: true,
    competition: "Friendly",
    kickoff: "1:00 PM"
  }];
  const results = [{
    date: {
      day: "28",
      month: "SEP"
    },
    opponent: "Brooklyn RFC",
    home: false,
    competition: "Met Union",
    scoreFor: 27,
    scoreAgainst: 12
  }, {
    date: {
      day: "21",
      month: "SEP"
    },
    opponent: "Hartford Wild",
    home: true,
    competition: "Met Union",
    scoreFor: 15,
    scoreAgainst: 22
  }, {
    date: {
      day: "14",
      month: "SEP"
    },
    opponent: "Long Island",
    home: true,
    competition: "Friendly",
    scoreFor: 31,
    scoreAgainst: 31
  }];
  const show = which => filter === "all" || filter === which;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-md)",
      margin: "0 auto",
      padding: "64px 28px 96px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "2026 Season",
    title: "Fixtures & Results",
    description: "Come cheer the Knights on. Home matches at Randall's Island."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      margin: "32px 0 28px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: filter === "all",
    onClick: () => setFilter("all")
  }, "All"), /*#__PURE__*/React.createElement(Tag, {
    selected: filter === "upcoming",
    onClick: () => setFilter("upcoming")
  }, "Upcoming"), /*#__PURE__*/React.createElement(Tag, {
    selected: filter === "results",
    onClick: () => setFilter("results")
  }, "Results")), show("upcoming") && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gk-overline",
    style: {
      marginBottom: "14px"
    }
  }, "Upcoming"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "10px"
    }
  }, upcoming.map((f, i) => /*#__PURE__*/React.createElement(FixtureRow, _extends({
    key: i
  }, f))))), show("results") && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gk-overline",
    style: {
      marginBottom: "14px"
    }
  }, "Recent results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "10px"
    }
  }, results.map((f, i) => /*#__PURE__*/React.createElement(FixtureRow, _extends({
    key: i
  }, f))))));
}
window.FixturesScreen = FixturesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FixturesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Gotham Knights — Home screen
const GK_HOME = window.GothamKnightsDesignSystem_c42f90;
function HomeScreen({
  onNavigate
}) {
  const {
    Button,
    Card,
    Stat,
    SectionHeading,
    Badge
  } = GK_HOME;
  const A = "../../assets/";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--navy-700)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "img/intro-to-rugby.jpg",
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(13,29,65,0.95) 0%, rgba(13,29,65,0.72) 50%, rgba(13,29,65,0.45) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "96px 28px 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      color: "var(--gold-400)",
      fontWeight: "var(--fw-bold)",
      textTransform: "uppercase",
      letterSpacing: "0.16em",
      fontSize: "0.75rem",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "28px",
      height: "3px",
      background: "var(--gold-500)",
      borderRadius: "99px"
    }
  }), "NYC's inclusive rugby club"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-athletic)",
      fontWeight: 900,
      textTransform: "uppercase",
      color: "#fff",
      fontSize: "5rem",
      lineHeight: 0.9,
      letterSpacing: "-0.01em",
      margin: 0,
      maxWidth: "14ch"
    }
  }, "Come find ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-500)"
    }
  }, "your pack")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--navy-100)",
      fontSize: "1.25rem",
      lineHeight: 1.5,
      maxWidth: "46ch",
      margin: "24px 0 36px"
    }
  }, "A fearless, welcoming home for queer athletes \u2014 and anyone who'll have a go. No experience? Perfect. Bring yourself."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => onNavigate("join")
  }, "Join the squad"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => onNavigate("fixtures"),
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.5)"
    }
  }, "See fixtures")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gold-500)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "28px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "150+",
    label: "Active members",
    accent: "navy"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1998",
    label: "Established",
    accent: "navy"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3",
    label: "Sides fielded",
    accent: "navy"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "All",
    label: "Bodies & levels",
    accent: "navy"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "80px 28px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Why Gotham",
    title: "Built different. Tackle harder.",
    description: "We field competitive sides while keeping our doors wide open. Pride on the pitch, pints after."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "24px",
      marginTop: "40px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    featured: true
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "gold"
  }, "All welcome"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-extrabold)",
      fontSize: "1.5rem",
      margin: "14px 0 8px"
    }
  }, "Every level"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)"
    }
  }, "First-timers train alongside veterans. We'll teach you to ruck, pass, and tackle from scratch.")), /*#__PURE__*/React.createElement(Card, {
    featured: true
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "gold"
  }, "Community"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-extrabold)",
      fontSize: "1.5rem",
      margin: "14px 0 8px"
    }
  }, "Found family"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)"
    }
  }, "More than a team \u2014 a queer NYC community that shows up for each other on and off the pitch.")), /*#__PURE__*/React.createElement(Card, {
    featured: true
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "gold"
  }, "Compete"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-extrabold)",
      fontSize: "1.5rem",
      margin: "14px 0 8px"
    }
  }, "Real rugby"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)"
    }
  }, "League matches, tournaments, and the Bingham Cup. We play to win and we play for keeps.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--navy-700)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "64px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "32px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-athletic)",
      fontWeight: 900,
      textTransform: "uppercase",
      color: "#fff",
      fontSize: "2.75rem",
      lineHeight: 0.95,
      margin: 0
    }
  }, "Tuesday nights.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-500)"
    }
  }, "Wall Street.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--navy-100)",
      fontSize: "1.125rem",
      margin: "16px 0 0"
    }
  }, "Drop in for Intro to Rugby, 8\u20139pm. Boots optional, courage required.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => onNavigate("join")
  }, "Get started"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JoinScreen.jsx
try { (() => {
// Gotham Knights — Join / Get Started screen
const GK_JOIN = window.GothamKnightsDesignSystem_c42f90;
function JoinScreen({
  onNavigate
}) {
  const {
    Button,
    Card,
    Input,
    SectionHeading,
    Tag,
    Crest
  } = GK_JOIN;
  const [submitted, setSubmitted] = React.useState(false);
  const [picked, setPicked] = React.useState(["Brand new"]);
  const toggle = x => setPicked(p => p.includes(x) ? p.filter(y => y !== x) : [...p, x]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-sunken)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-md)",
      margin: "0 auto",
      padding: "64px 28px 96px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "92px"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Get started",
    title: "Your first session is free"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.0625rem",
      lineHeight: 1.6,
      color: "var(--text-body)",
      marginTop: "20px"
    }
  }, "Fill this out and a captain will reach out with everything you need for Tuesday's Intro to Rugby. Seriously \u2014 no experience needed."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "24px 0 0",
      display: "grid",
      gap: "12px"
    }
  }, ["All bodies & skill levels", "Boots & ball provided", "Pints after, always"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Crest, {
    size: 22,
    src: "../../assets/logos/shield-2c.svg"
  }), " ", t)))), /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    padding: "var(--space-7)"
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "20px 0"
    }
  }, /*#__PURE__*/React.createElement(Crest, {
    size: 72,
    src: "../../assets/logos/shield-2c.svg",
    style: {
      margin: "0 auto 18px"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-extrabold)",
      fontSize: "1.75rem",
      margin: "0 0 8px"
    }
  }, "You're in."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: "0 0 24px"
    }
  }, "Check your inbox \u2014 we'll see you Tuesday."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate("home")
  }, "Back home")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jordan Rivera",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@club.nyc",
    required: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 600,
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-strong)",
      marginBottom: "10px"
    }
  }, "Where are you at?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, ["Brand new", "Played before", "Just watching"].map(o => /*#__PURE__*/React.createElement(Tag, {
    key: o,
    selected: picked.includes(o),
    onClick: () => toggle(o)
  }, o)))), /*#__PURE__*/React.createElement(Input, {
    label: "Pronouns (optional)",
    placeholder: "they/them"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, "Count me in"))))));
}
window.JoinScreen = JoinScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JoinScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
// Gotham Knights — Site Footer
const {
  Crest: GKCrestF
} = window.GothamKnightsDesignSystem_c42f90;
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy-800)",
      color: "var(--navy-200)"
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "gk-pride-rule",
    style: {
      margin: 0,
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
      padding: "36px 28px",
      maxWidth: "var(--container-lg)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(GKCrestF, {
    size: 48,
    src: "../../assets/logos/shield-2c.svg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-wordmark)",
      color: "#fff",
      fontSize: "1.125rem",
      letterSpacing: "var(--tracking-wordmark)",
      textTransform: "uppercase"
    }
  }, "Gotham Knights RFC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)"
    }
  }, "New York City's inclusive rugby club"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "28px",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--navy-200)"
    }
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--navy-200)"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--navy-200)"
    }
  }, "Sponsors"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "0 0 24px",
      fontSize: "var(--fs-caption)",
      color: "var(--navy-300)"
    }
  }, "\xA9 2026 Gotham Knights Rugby Football Club \xB7 All bodies, all levels."));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// Gotham Knights — Site Header (marketing nav)
const {
  Button: GKButton,
  Crest: GKCrest
} = window.GothamKnightsDesignSystem_c42f90;
function SiteHeader({
  current,
  onNavigate
}) {
  const links = [{
    id: "home",
    label: "Home"
  }, {
    id: "fixtures",
    label: "Fixtures"
  }, {
    id: "join",
    label: "Join"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 28px",
      background: "rgba(13,29,65,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "var(--bw-base) solid var(--gold-500)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("home"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "none",
      border: 0,
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(GKCrest, {
    size: 40,
    src: "../../assets/logos/shield-2c.svg"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-wordmark)",
      color: "#fff",
      fontSize: "1.25rem",
      lineHeight: 1,
      letterSpacing: "var(--tracking-wordmark)",
      textTransform: "uppercase"
    }
  }, "Gotham Knights")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "4px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--fw-bold)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      fontSize: "0.8125rem",
      color: current === l.id ? "var(--gold-500)" : "rgba(255,255,255,0.82)",
      padding: "10px 14px",
      borderRadius: "var(--radius-sm)"
    }
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "10px"
    }
  }, /*#__PURE__*/React.createElement(GKButton, {
    size: "sm",
    variant: "primary",
    onClick: () => onNavigate("join")
  }, "Come play"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Crest = __ds_scope.Crest;

__ds_ns.FixtureRow = __ds_scope.FixtureRow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

})();
