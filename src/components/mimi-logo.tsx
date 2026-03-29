export function MimiLogo() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="morph">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="2"
            seed="1"
          >
            <animate
              attributeName="baseFrequency"
              values="0.01;0.015;0.01"
              dur="6s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
      </defs>
      <g filter="url(#morph)">
        {/* Body */}
        <ellipse
          cx="50"
          cy="52"
          rx="34"
          ry="30"
          fill="currentColor"
          opacity="0.12"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        {/* Left eye */}
        <circle cx="38" cy="46" r="4" fill="currentColor" />
        {/* Right eye */}
        <circle cx="58" cy="44" r="5.5" fill="currentColor" />
        {/* Mouth */}
        <path
          d="M40 60 Q50 67 60 60"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Decorative dots */}
        <circle cx="22" cy="30" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="78" cy="28" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="75" cy="72" r="1.5" fill="currentColor" opacity="0.3" />
      </g>
    </svg>
  );
}
