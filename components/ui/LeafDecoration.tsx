type Variant = "corner-tl" | "corner-tr" | "corner-bl" | "corner-br" | "sprig" | "flourish";

type LeafDecorationProps = {
  variant: Variant;
  className?: string;
  primaryColor?: string;
  accentColor?: string;
};

export function LeafDecoration({
  variant,
  className = "",
  primaryColor = "currentColor",
  accentColor,
}: LeafDecorationProps) {
  const accent = accentColor ?? primaryColor;

  if (variant === "corner-tl" || variant === "corner-bl" || variant === "corner-tr" || variant === "corner-br") {
    const transforms: Record<typeof variant, string> = {
      "corner-tl": "",
      "corner-tr": "scale(-1, 1)",
      "corner-bl": "scale(1, -1)",
      "corner-br": "scale(-1, -1)",
    };
    return (
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
        style={{ transform: transforms[variant] }}
      >
        <g fill={primaryColor} opacity="0.55">
          <path d="M10 80 C 35 60, 65 55, 95 65 C 75 75, 50 80, 25 90 Z" />
          <path d="M5 130 C 30 110, 60 100, 90 110 C 70 122, 45 130, 20 140 Z" opacity="0.85" />
          <path d="M15 35 C 40 20, 70 18, 100 28 C 80 38, 55 42, 30 48 Z" opacity="0.7" />
        </g>
        <g fill={accent} opacity="0.45">
          <ellipse cx="60" cy="60" rx="25" ry="9" transform="rotate(-22 60 60)" />
          <ellipse cx="40" cy="110" rx="22" ry="8" transform="rotate(-30 40 110)" />
          <ellipse cx="80" cy="30" rx="20" ry="7" transform="rotate(-15 80 30)" />
        </g>
        <path
          d="M0 0 Q 80 60, 120 140"
          stroke={primaryColor}
          strokeWidth="1.5"
          fill="none"
          opacity="0.35"
        />
      </svg>
    );
  }

  if (variant === "sprig") {
    return (
      <svg
        viewBox="0 0 120 40"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        <line x1="10" y1="20" x2="110" y2="20" stroke={primaryColor} strokeWidth="1" opacity="0.5" />
        <g fill={primaryColor} opacity="0.7">
          <ellipse cx="35" cy="14" rx="10" ry="4" transform="rotate(-25 35 14)" />
          <ellipse cx="50" cy="26" rx="10" ry="4" transform="rotate(20 50 26)" />
          <ellipse cx="68" cy="14" rx="10" ry="4" transform="rotate(-25 68 14)" />
          <ellipse cx="83" cy="26" rx="10" ry="4" transform="rotate(20 83 26)" />
        </g>
        <circle cx="60" cy="20" r="2.5" fill={accent} opacity="0.8" />
      </svg>
    );
  }

  // "flourish" — gold gilded curl + leaf cluster, used as section divider
  return (
    <svg
      viewBox="0 0 240 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 30 Q 60 10, 100 30 T 180 30 Q 210 30, 220 30"
        stroke={accent}
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      <g fill={primaryColor} opacity="0.7">
        <ellipse cx="100" cy="22" rx="12" ry="5" transform="rotate(-18 100 22)" />
        <ellipse cx="120" cy="38" rx="12" ry="5" transform="rotate(18 120 38)" />
        <ellipse cx="140" cy="22" rx="12" ry="5" transform="rotate(-18 140 22)" />
      </g>
      <circle cx="120" cy="30" r="3" fill={accent} />
    </svg>
  );
}

type LeafBulletProps = {
  className?: string;
  color?: string;
};

export function LeafBullet({ className = "", color = "currentColor" }: LeafBulletProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="11" fill={color} opacity="0.12" />
      <path
        d="M12 5 C 8 8, 7 13, 9 18 C 14 17, 17 13, 17 8 C 14 7, 12 6, 12 5 Z"
        fill={color}
        opacity="0.95"
      />
      <path
        d="M11.5 7 C 11.5 11, 10.5 14, 10 17"
        stroke="white"
        strokeWidth="0.7"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}
