type DoodleProps = { className?: string };

export function HandwrittenUnderline({ className }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 190 18"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 10C42 3 104 3 185 6M15 15C63 9 113 10 161 12"
        pathLength="1"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// A loose, drawn version of the paper plane in Amanda's brand icon set.
export function TravelDoodle({ className }: DoodleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 110"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 97C37 103 61 84 48 73C34 62 23 83 43 90C64 97 83 74 90 60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 6"
        opacity="0.7"
      />
      <path
        d="M76 31L149 7L129 71L105 54L91 69L90 43L76 31ZM90 43L149 7L105 54L91 69"
        pathLength="1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
