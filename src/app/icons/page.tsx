const iconCategories = [
  {
    name: "Nuclear & Energy",
    icons: [
      {
        label: "Atom",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="3" fill="#7CC842" />
            <ellipse cx="18" cy="18" rx="14" ry="6" stroke="#1A1A2E" strokeWidth="1.5" transform="rotate(0 18 18)" />
            <ellipse cx="18" cy="18" rx="14" ry="6" stroke="#1A1A2E" strokeWidth="1.5" transform="rotate(60 18 18)" />
            <ellipse cx="18" cy="18" rx="14" ry="6" stroke="#1A1A2E" strokeWidth="1.5" transform="rotate(120 18 18)" />
          </svg>
        ),
      },
      {
        label: "Reactor",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="10" y="6" width="16" height="20" rx="2" stroke="#1A1A2E" strokeWidth="1.5" />
            <rect x="13" y="10" width="10" height="8" rx="1" fill="#7CC842" opacity="0.3" />
            <circle cx="18" cy="14" r="2" fill="#7CC842" />
            <line x1="12" y1="28" x2="24" y2="28" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="14" y1="26" x2="14" y2="30" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="22" y1="26" x2="22" y2="30" stroke="#1A1A2E" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        label: "Radiation",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="3" fill="#1A1A2E" />
            <path d="M18 15C18 15 22 8 28 10C28 10 24 15 18 15Z" fill="#7CC842" />
            <path d="M15.5 19.5C15.5 19.5 8 20 8 14C8 14 14 16 15.5 19.5Z" fill="#7CC842" />
            <path d="M20.5 19.5C20.5 19.5 24 26 18 28C18 28 17 22 20.5 19.5Z" fill="#7CC842" />
          </svg>
        ),
      },
      {
        label: "Fuel Rod",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="15" y="4" width="6" height="28" rx="1" stroke="#1A1A2E" strokeWidth="1.5" />
            <rect x="16" y="8" width="4" height="4" fill="#7CC842" opacity="0.5" />
            <rect x="16" y="14" width="4" height="4" fill="#7CC842" opacity="0.7" />
            <rect x="16" y="20" width="4" height="4" fill="#7CC842" />
            <line x1="13" y1="4" x2="23" y2="4" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="13" y1="32" x2="23" y2="32" stroke="#1A1A2E" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        label: "Energy Grid",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="4" stroke="#7CC842" strokeWidth="1.5" />
            <line x1="18" y1="4" x2="18" y2="14" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="18" y1="22" x2="18" y2="32" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="4" y1="18" x2="14" y2="18" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="22" y1="18" x2="32" y2="18" stroke="#1A1A2E" strokeWidth="1.5" />
            <circle cx="18" cy="4" r="2" fill="#7CC842" />
            <circle cx="18" cy="32" r="2" fill="#7CC842" />
            <circle cx="4" cy="18" r="2" fill="#7CC842" />
            <circle cx="32" cy="18" r="2" fill="#7CC842" />
          </svg>
        ),
      },
      {
        label: "Nuclear Plant",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M6 30L6 20L12 14L12 30" stroke="#1A1A2E" strokeWidth="1.5" />
            <path d="M14 30L14 16L20 10L20 30" stroke="#1A1A2E" strokeWidth="1.5" />
            <rect x="22" y="12" width="8" height="18" rx="4" stroke="#1A1A2E" strokeWidth="1.5" />
            <path d="M26 12C26 12 27 8 26 5" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4" y1="30" x2="32" y2="30" stroke="#1A1A2E" strokeWidth="1.5" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Exploration & Geology",
    icons: [
      {
        label: "Drill Core",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="14" y="2" width="8" height="32" rx="4" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="14" y1="10" x2="22" y2="10" stroke="#7CC842" strokeWidth="1" />
            <line x1="14" y1="16" x2="22" y2="16" stroke="#7CC842" strokeWidth="1" />
            <line x1="14" y1="22" x2="22" y2="22" stroke="#7CC842" strokeWidth="1" />
            <rect x="15.5" y="12" width="5" height="3" fill="#7CC842" opacity="0.3" />
          </svg>
        ),
      },
      {
        label: "Pickaxe",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="8" y1="28" x2="22" y2="14" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 14L28 8C30 6 32 8 30 10L24 16" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 14L16 8C14 6 12 8 14 10L20 16" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Mountain",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M4 30L14 10L24 30" stroke="#1A1A2E" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M16 30L24 16L32 30" stroke="#1A1A2E" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M14 10L16 14L12 14Z" fill="#7CC842" opacity="0.3" />
            <line x1="4" y1="30" x2="32" y2="30" stroke="#1A1A2E" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        label: "Compass",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#1A1A2E" strokeWidth="1.5" />
            <polygon points="18,6 20,16 18,18 16,16" fill="#7CC842" />
            <polygon points="18,30 16,20 18,18 20,20" fill="#1A1A2E" opacity="0.3" />
            <circle cx="18" cy="18" r="2" fill="#1A1A2E" />
          </svg>
        ),
      },
      {
        label: "Map Pin",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 4C12.5 4 8 8.5 8 14C8 22 18 32 18 32C18 32 28 22 28 14C28 8.5 23.5 4 18 4Z" stroke="#1A1A2E" strokeWidth="1.5" />
            <circle cx="18" cy="14" r="4" fill="#7CC842" />
          </svg>
        ),
      },
      {
        label: "Layers",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 6L4 14L18 22L32 14Z" stroke="#1A1A2E" strokeWidth="1.5" fill="#7CC842" opacity="0.1" />
            <path d="M4 18L18 26L32 18" stroke="#1A1A2E" strokeWidth="1.5" />
            <path d="M4 22L18 30L32 22" stroke="#1A1A2E" strokeWidth="1.5" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Data & Analytics",
    icons: [
      {
        label: "Bar Chart",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="6" y="20" width="6" height="12" rx="1" fill="#7CC842" opacity="0.5" />
            <rect x="15" y="12" width="6" height="20" rx="1" fill="#7CC842" opacity="0.7" />
            <rect x="24" y="6" width="6" height="26" rx="1" fill="#7CC842" />
            <line x1="4" y1="32" x2="32" y2="32" stroke="#1A1A2E" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        label: "Trend Up",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <polyline points="4,28 12,20 18,24 26,12 32,8" stroke="#7CC842" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <polygon points="28,8 32,8 32,12" fill="#7CC842" />
            <line x1="4" y1="32" x2="32" y2="32" stroke="#1A1A2E" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        label: "Pie Chart",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#1A1A2E" strokeWidth="1.5" />
            <path d="M18 4A14 14 0 0 1 32 18L18 18Z" fill="#7CC842" />
            <path d="M18 18L32 18A14 14 0 0 1 18 32Z" fill="#7CC842" opacity="0.4" />
          </svg>
        ),
      },
      {
        label: "Table",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="4" width="28" height="28" rx="2" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="4" y1="12" x2="32" y2="12" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="4" y1="20" x2="32" y2="20" stroke="#1A1A2E" strokeWidth="1" opacity="0.3" />
            <line x1="4" y1="28" x2="32" y2="28" stroke="#1A1A2E" strokeWidth="1" opacity="0.3" />
            <line x1="16" y1="4" x2="16" y2="32" stroke="#1A1A2E" strokeWidth="1" opacity="0.3" />
            <rect x="4" y="4" width="28" height="8" fill="#7CC842" opacity="0.15" />
          </svg>
        ),
      },
      {
        label: "Target",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#1A1A2E" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="9" stroke="#1A1A2E" strokeWidth="1" opacity="0.4" />
            <circle cx="18" cy="18" r="4" fill="#7CC842" />
          </svg>
        ),
      },
      {
        label: "Calendar",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="8" width="28" height="24" rx="2" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="4" y1="14" x2="32" y2="14" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="12" y1="4" x2="12" y2="10" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="24" y1="4" x2="24" y2="10" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="8" y="18" width="4" height="4" rx="0.5" fill="#7CC842" />
            <rect x="16" y="18" width="4" height="4" rx="0.5" fill="#1A1A2E" opacity="0.15" />
            <rect x="24" y="18" width="4" height="4" rx="0.5" fill="#1A1A2E" opacity="0.15" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Corporate & Finance",
    icons: [
      {
        label: "Dollar",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#1A1A2E" strokeWidth="1.5" />
            <path d="M14 22C14 22 16 24 18 24C20 24 22 23 22 21C22 19 20 18 18 18C16 18 14 17 14 15C14 13 16 12 18 12C20 12 22 14 22 14" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="8" x2="18" y2="12" stroke="#7CC842" strokeWidth="1.5" />
            <line x1="18" y1="24" x2="18" y2="28" stroke="#7CC842" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        label: "Building",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="8" y="6" width="12" height="26" stroke="#1A1A2E" strokeWidth="1.5" />
            <rect x="20" y="14" width="10" height="18" stroke="#1A1A2E" strokeWidth="1.5" />
            <rect x="11" y="10" width="3" height="3" fill="#7CC842" opacity="0.5" />
            <rect x="11" y="16" width="3" height="3" fill="#7CC842" opacity="0.5" />
            <rect x="15" y="10" width="3" height="3" fill="#7CC842" opacity="0.5" />
            <rect x="15" y="16" width="3" height="3" fill="#7CC842" opacity="0.5" />
            <rect x="23" y="18" width="3" height="3" fill="#7CC842" opacity="0.5" />
            <rect x="23" y="24" width="3" height="3" fill="#7CC842" opacity="0.5" />
            <line x1="4" y1="32" x2="32" y2="32" stroke="#1A1A2E" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        label: "Handshake",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M4 20L10 14L16 18L22 14L28 18" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28 18L32 16" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 20L8 22" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="16" cy="18" r="2" fill="#7CC842" />
          </svg>
        ),
      },
      {
        label: "Shield",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 4L6 10V18C6 24 11 30 18 32C25 30 30 24 30 18V10L18 4Z" stroke="#1A1A2E" strokeWidth="1.5" />
            <path d="M14 18L17 21L23 15" stroke="#7CC842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        label: "Certificate",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="6" width="22" height="24" rx="2" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="8" y1="12" x2="22" y2="12" stroke="#1A1A2E" strokeWidth="1" opacity="0.3" />
            <line x1="8" y1="16" x2="18" y2="16" stroke="#1A1A2E" strokeWidth="1" opacity="0.3" />
            <line x1="8" y1="20" x2="20" y2="20" stroke="#1A1A2E" strokeWidth="1" opacity="0.3" />
            <circle cx="28" cy="24" r="6" stroke="#7CC842" strokeWidth="1.5" />
            <path d="M26 24L28 26L31 22" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        label: "Globe",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#1A1A2E" strokeWidth="1.5" />
            <ellipse cx="18" cy="18" rx="8" ry="14" stroke="#1A1A2E" strokeWidth="1" opacity="0.3" />
            <line x1="4" y1="18" x2="32" y2="18" stroke="#1A1A2E" strokeWidth="1" opacity="0.3" />
            <line x1="6" y1="11" x2="30" y2="11" stroke="#1A1A2E" strokeWidth="1" opacity="0.2" />
            <line x1="6" y1="25" x2="30" y2="25" stroke="#1A1A2E" strokeWidth="1" opacity="0.2" />
            <circle cx="18" cy="18" r="2" fill="#7CC842" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Environment & Territory",
    icons: [
      {
        label: "Leaf",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M8 28C8 28 8 12 24 8C24 8 24 24 8 28Z" stroke="#1A1A2E" strokeWidth="1.5" fill="#7CC842" opacity="0.15" />
            <path d="M8 28C12 22 16 16 24 8" stroke="#7CC842" strokeWidth="1" />
            <path d="M12 24C14 20 17 16 22 12" stroke="#7CC842" strokeWidth="0.5" opacity="0.5" />
          </svg>
        ),
      },
      {
        label: "Water Drop",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 4C18 4 8 16 8 22C8 28 12.5 32 18 32C23.5 32 28 28 28 22C28 16 18 4 18 4Z" stroke="#1A1A2E" strokeWidth="1.5" />
            <path d="M14 22C14 22 14 26 18 26" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Tree",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <polygon points="18,4 8,16 12,16 6,26 30,26 24,16 28,16" stroke="#1A1A2E" strokeWidth="1.5" fill="#7CC842" opacity="0.1" strokeLinejoin="round" />
            <rect x="16" y="26" width="4" height="6" fill="#1A1A2E" opacity="0.3" />
          </svg>
        ),
      },
      {
        label: "Sun",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="6" fill="#7CC842" opacity="0.3" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="18" y1="4" x2="18" y2="9" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="27" x2="18" y2="32" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4" y1="18" x2="9" y2="18" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="27" y1="18" x2="32" y2="18" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="8" x2="11.5" y2="11.5" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="24.5" y1="24.5" x2="28" y2="28" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="28" x2="11.5" y2="24.5" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="24.5" y1="11.5" x2="28" y2="8" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        label: "Snowflake",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="18" y1="4" x2="18" y2="32" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="6" y1="11" x2="30" y2="25" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="6" y1="25" x2="30" y2="11" stroke="#1A1A2E" strokeWidth="1.5" />
            <line x1="18" y1="4" x2="15" y2="7" stroke="#7CC842" strokeWidth="1" />
            <line x1="18" y1="4" x2="21" y2="7" stroke="#7CC842" strokeWidth="1" />
            <line x1="18" y1="32" x2="15" y2="29" stroke="#7CC842" strokeWidth="1" />
            <line x1="18" y1="32" x2="21" y2="29" stroke="#7CC842" strokeWidth="1" />
            <circle cx="18" cy="18" r="2" fill="#7CC842" />
          </svg>
        ),
      },
      {
        label: "Wind",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M4 14H24C26.2 14 28 12.2 28 10C28 7.8 26.2 6 24 6" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 22H20C22.2 22 24 23.8 24 26C24 28.2 22.2 30 20 30" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 18H28" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
];

export default function IconsPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-gen-green tracking-[0.2em] text-sm font-medium mb-3">
            ICONS
          </p>
          <h1 className="font-display italic text-5xl md:text-6xl text-gen-dark mb-4">
            Icon System
          </h1>
          <p className="text-slate text-lg max-w-2xl">
            30 custom SVG icons across 5 categories. Consistent 36x36 viewBox,
            Gen Dark strokes with Gen Green accents. Designed for presentations,
            collateral, and web.
          </p>
        </div>

        <section id="icon-system" className="scroll-mt-20">
          {iconCategories.map((category) => (
            <div key={category.name} className="mb-16">
              <h2 className="font-display italic text-2xl text-gen-dark mb-2">
                {category.name}
              </h2>
              <div className="h-0.5 w-12 bg-gen-green mb-6" />
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {category.icons.map((icon) => (
                  <div
                    key={icon.label}
                    className="bg-arctic-white border border-gen-dark/5 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-gen-green/30 hover:shadow-md transition group aspect-square"
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {icon.svg}
                    </div>
                    <p className="text-[11px] text-slate text-center font-medium">
                      {icon.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Usage Guidelines */}
          <div className="bg-gen-dark rounded-2xl p-8 md:p-12 mt-8">
            <h3 className="font-display italic text-2xl text-white mb-6">
              Usage Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-gen-green text-sm font-semibold mb-2">
                  Sizing
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Icons are designed on a 36x36 grid. Use at 24px for inline,
                  36px for standard, and 48px for featured contexts.
                </p>
              </div>
              <div>
                <p className="text-gen-green text-sm font-semibold mb-2">
                  Color
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Primary strokes in Gen Dark (#1A1A2E). Accent fills and
                  details in Gen Green (#7CC842). On dark backgrounds, swap
                  strokes to white.
                </p>
              </div>
              <div>
                <p className="text-gen-green text-sm font-semibold mb-2">
                  Spacing
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Maintain minimum 8px clear space around each icon. In card
                  layouts, center with equal padding on all sides.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
