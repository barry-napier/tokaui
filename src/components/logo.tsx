export function Logo({ className = '', width = 40, height = 40 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={className}
      viewBox="0 0 105 105"
    >
      <g filter="url(#a)">
        <rect width="97" height="97" x="4" fill="url(#b)" rx="48.5" />
        <rect
          width="95"
          height="95"
          x="5"
          y="1"
          stroke="url(#c)"
          strokeOpacity=".2"
          strokeWidth="2"
          rx="47.5"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="76.5"
          x2="22.12"
          y1="8.5"
          y2="84.586"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A49" />
          <stop offset=".46" stopColor="#C21BD6" />
          <stop offset=".766" stopColor="#822FC8" />
          <stop offset="1" stopColor="#4911FF" />
        </linearGradient>
        <linearGradient id="c" x1="52.5" x2="52.5" y1="0" y2="97" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <filter
          id="a"
          width="105"
          height="105"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_5" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_5" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
