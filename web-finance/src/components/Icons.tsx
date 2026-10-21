// =========================================================
// IKONY – všechny ikony webu na jednom místě (čisté SVG, bez knihoven)
// Použití: <Icon name="investice" className="h-8 w-8 text-gold-dark" />
// Barvu ikony určuje třída text-… (ikony kreslí barvou "currentColor").
// Novou ikonu přidáte jako další položku do objektu `paths`.
// =========================================================

const paths = {
  plan: (
    <>
      <path d="M11 3.05A9 9 0 1 0 20.95 13H11V3.05z" />
      <path d="M20.49 9H15V3.51A9 9 0 0 1 20.49 9z" />
    </>
  ),
  pojisteni: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  investice: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  reality: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  sprava: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9" />
      <path d="M17 6l3 3" />
    </>
  ),
  check: <path d="M20 6L9 17l-5-5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  pin: (
    <>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.5L8 22l4-2 4 2-1-7.5" />
    </>
  ),
  shield: <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />,
  home: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </>
  ),
}

export type IconName = keyof typeof paths

type IconProps = {
  name: IconName
  className?: string
  strokeWidth?: number
}

export function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}

// Zlaté uvozovky u citátů a referencí
export function QuoteMark({ className = 'h-5 w-6' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 22" fill="currentColor" className={className}>
      <path d="M0 22V12C0 5 4 1 11 0l1 3C8 4 6 7 6 10h5v12H0zm16 0V12c0-7 4-11 11-12l1 3c-4 1-6 4-6 7h5v12H16z" />
    </svg>
  )
}
