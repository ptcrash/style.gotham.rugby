import React from "react";

/**
 * Gotham Knights — Crest
 * Renders the club shield/crest mark. Use as badge, watermark, bullet, or loading mark.
 * Points at the shield SVG in assets/logos — override `src` to match your project path.
 */
export function Crest({
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
    "1c": "assets/logos/shield-1c.svg",
  };
  const resolved = src || files[variant] || files["2c"];
  return (
    <img
      src={resolved}
      alt={watermark ? "" : alt}
      aria-hidden={watermark ? "true" : undefined}
      width={size}
      style={{
        display: "block",
        height: typeof size === "number" ? `${size}px` : size,
        width: "auto",
        opacity: watermark ? 0.06 : 1,
        userSelect: "none",
        ...style,
      }}
      {...rest}
    />
  );
}
