const iconCategories = [
  {
    name: "Nuclear & Energy",
    icons: [
      {
        label: "Atom",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="3" fill="#7CC842"/>
            <ellipse cx="18" cy="18" rx="14" ry="6" stroke="#2D3748" strokeWidth="1.5"/>
            <ellipse cx="18" cy="18" rx="14" ry="6" stroke="#2D3748" strokeWidth="1.5" transform="rotate(60 18 18)"/>
            <ellipse cx="18" cy="18" rx="14" ry="6" stroke="#2D3748" strokeWidth="1.5" transform="rotate(120 18 18)"/>
          </svg>
        ),
      },
      {
        label: "Reactor",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="8" y="8" width="20" height="24" rx="2" stroke="#2D3748" strokeWidth="1.5"/>
            <rect x="12" y="4" width="4" height="6" rx="1" stroke="#2D3748" strokeWidth="1.5"/>
            <rect x="20" y="4" width="4" height="6" rx="1" stroke="#2D3748" strokeWidth="1.5"/>
            <circle cx="18" cy="22" r="5" stroke="#7CC842" strokeWidth="1.5"/>
            <circle cx="18" cy="22" r="2" fill="#7CC842"/>
          </svg>
        ),
      },
      {
        label: "Radiation",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="3" fill="#2D3748"/>
            <path d="M18 15C18 15 22 8 28 10C28 10 24 15 18 15Z" fill="#7CC842"/>
            <path d="M15.5 19.5C15.5 19.5 8 20 8 14C8 14 14 16 15.5 19.5Z" fill="#7CC842"/>
            <path d="M20.5 19.5C20.5 19.5 24 26 18 28C18 28 17 22 20.5 19.5Z" fill="#7CC842"/>
          </svg>
        ),
      },
      {
        label: "Fuel Rod",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="15" y="4" width="6" height="28" rx="1" stroke="#2D3748" strokeWidth="1.5"/>
            <rect x="16" y="8" width="4" height="4" fill="#7CC842" opacity="0.4"/>
            <rect x="16" y="14" width="4" height="4" fill="#7CC842" opacity="0.6"/>
            <rect x="16" y="20" width="4" height="4" fill="#7CC842"/>
            <line x1="13" y1="4" x2="23" y2="4" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="13" y1="32" x2="23" y2="32" stroke="#2D3748" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        label: "Energy Grid",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="4" stroke="#7CC842" strokeWidth="1.5"/>
            <line x1="18" y1="4" x2="18" y2="14" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="18" y1="22" x2="18" y2="32" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="4" y1="18" x2="14" y2="18" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="22" y1="18" x2="32" y2="18" stroke="#2D3748" strokeWidth="1.5"/>
            <circle cx="18" cy="4" r="2" fill="#7CC842"/>
            <circle cx="18" cy="32" r="2" fill="#7CC842"/>
            <circle cx="4" cy="18" r="2" fill="#7CC842"/>
            <circle cx="32" cy="18" r="2" fill="#7CC842"/>
          </svg>
        ),
      },
      {
        label: "Nuclear Plant",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M6 30V20L12 14V30" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M14 30V16L20 10V30" stroke="#2D3748" strokeWidth="1.5"/>
            <rect x="22" y="12" width="8" height="18" rx="4" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M26 12C26 12 27 8 26 5" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="4" y1="30" x2="32" y2="30" stroke="#2D3748" strokeWidth="1.5"/>
          </svg>
        ),
      },
    ],
  },
  {
    name: "Exploration & Geology",
    icons: [
      {
        label: "Drill Rig",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="18" y1="4" x2="18" y2="28" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="12" y1="8" x2="24" y2="8" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="12" y1="8" x2="18" y2="4" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="24" y1="8" x2="18" y2="4" stroke="#2D3748" strokeWidth="1.5"/>
            <rect x="16" y="28" width="4" height="4" fill="#7CC842" rx="0.5"/>
            <line x1="10" y1="32" x2="26" y2="32" stroke="#2D3748" strokeWidth="1.5"/>
            <circle cx="18" cy="18" r="2" fill="#7CC842" opacity="0.5"/>
          </svg>
        ),
      },
      {
        label: "Core Sample",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="14" y="2" width="8" height="32" rx="4" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="14" y1="10" x2="22" y2="10" stroke="#7CC842" strokeWidth="1"/>
            <line x1="14" y1="16" x2="22" y2="16" stroke="#7CC842" strokeWidth="1"/>
            <line x1="14" y1="22" x2="22" y2="22" stroke="#7CC842" strokeWidth="1"/>
            <rect x="15.5" y="12" width="5" height="3" fill="#7CC842" opacity="0.3"/>
          </svg>
        ),
      },
      {
        label: "Geiger Counter",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="6" y="12" width="18" height="16" rx="2" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="24" y1="20" x2="32" y2="10" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="32" cy="10" r="2" fill="#7CC842"/>
            <rect x="9" y="15" width="12" height="6" rx="1" stroke="#7CC842" strokeWidth="1" opacity="0.5"/>
            <line x1="12" y1="18" x2="14" y2="16" stroke="#7CC842" strokeWidth="1"/>
            <line x1="14" y1="16" x2="16" y2="19" stroke="#7CC842" strokeWidth="1"/>
            <line x1="16" y1="19" x2="18" y2="15" stroke="#7CC842" strokeWidth="1"/>
          </svg>
        ),
      },
      {
        label: "Radiometric",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#2D3748" strokeWidth="1.5"/>
            <circle cx="18" cy="18" r="8" stroke="#2D3748" strokeWidth="0.8" opacity="0.4"/>
            <circle cx="18" cy="18" r="2" fill="#7CC842"/>
            <line x1="18" y1="4" x2="18" y2="10" stroke="#7CC842" strokeWidth="1.5"/>
            <path d="M22 8L26 6" stroke="#7CC842" strokeWidth="1" opacity="0.6"/>
            <path d="M28 12L31 10" stroke="#7CC842" strokeWidth="1" opacity="0.4"/>
          </svg>
        ),
      },
      {
        label: "Mapping",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M4 8L14 4V28L4 32V8Z" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M14 4L24 8V32L14 28V4Z" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M24 8L32 4V28L24 32V8Z" stroke="#2D3748" strokeWidth="1.5"/>
            <circle cx="19" cy="16" r="2" fill="#7CC842"/>
          </svg>
        ),
      },
      {
        label: "Prospecting",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="16" cy="16" r="10" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="23" y1="23" x2="32" y2="32" stroke="#2D3748" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="4" stroke="#7CC842" strokeWidth="1"/>
            <circle cx="16" cy="16" r="1" fill="#7CC842"/>
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
            <rect x="6" y="20" width="6" height="12" rx="1" fill="#7CC842" opacity="0.4"/>
            <rect x="15" y="12" width="6" height="20" rx="1" fill="#7CC842" opacity="0.7"/>
            <rect x="24" y="6" width="6" height="26" rx="1" fill="#7CC842"/>
            <line x1="4" y1="32" x2="32" y2="32" stroke="#2D3748" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        label: "Trend Up",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <polyline points="4,28 12,20 18,24 26,12 32,8" stroke="#7CC842" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <polygon points="28,8 32,8 32,12" fill="#7CC842"/>
            <line x1="4" y1="32" x2="32" y2="32" stroke="#2D3748" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        label: "Pie Chart",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M18 4A14 14 0 0 1 32 18L18 18Z" fill="#7CC842"/>
            <path d="M18 18L32 18A14 14 0 0 1 18 32Z" fill="#7CC842" opacity="0.35"/>
          </svg>
        ),
      },
      {
        label: "Table",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="4" width="28" height="28" rx="2" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="4" y1="12" x2="32" y2="12" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="4" y1="20" x2="32" y2="20" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
            <line x1="4" y1="28" x2="32" y2="28" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
            <line x1="16" y1="4" x2="16" y2="32" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
            <rect x="4" y="4" width="28" height="8" fill="#7CC842" opacity="0.1"/>
          </svg>
        ),
      },
      {
        label: "Target",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#2D3748" strokeWidth="1.5"/>
            <circle cx="18" cy="18" r="9" stroke="#2D3748" strokeWidth="1" opacity="0.4"/>
            <circle cx="18" cy="18" r="4" fill="#7CC842"/>
          </svg>
        ),
      },
      {
        label: "Calendar",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="8" width="28" height="24" rx="2" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="4" y1="14" x2="32" y2="14" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="12" y1="4" x2="12" y2="10" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="24" y1="4" x2="24" y2="10" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round"/>
            <rect x="8" y="18" width="4" height="4" rx="0.5" fill="#7CC842"/>
          </svg>
        ),
      },
    ],
  },
  {
    name: "Corporate & Governance",
    icons: [
      {
        label: "Agreement",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="6" y="4" width="24" height="28" rx="2" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="10" y1="12" x2="26" y2="12" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
            <line x1="10" y1="16" x2="22" y2="16" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
            <line x1="10" y1="20" x2="24" y2="20" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
            <path d="M14 26L17 29L23 23" stroke="#7CC842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        label: "First Nations",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="14" r="6" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M8 30C8 24 12 20 18 20C24 20 28 24 28 30" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M18 8L20 4" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M18 8L16 4" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M18 8L18 3" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        label: "News",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="6" width="24" height="24" rx="2" stroke="#2D3748" strokeWidth="1.5"/>
            <rect x="8" y="6" width="0" height="24" rx="0" stroke="none"/>
            <path d="M28 12V28A2 2 0 0 0 30 30H6" stroke="#2D3748" strokeWidth="1.5"/>
            <rect x="8" y="10" width="10" height="6" fill="#7CC842" opacity="0.3" rx="1"/>
            <line x1="8" y1="20" x2="24" y2="20" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
            <line x1="8" y1="24" x2="20" y2="24" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
          </svg>
        ),
      },
      {
        label: "Dollar",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M14 22C14 22 16 24 18 24C20 24 22 23 22 21C22 19 20 18 18 18C16 18 14 17 14 15C14 13 16 12 18 12C20 12 22 14 22 14" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="18" y1="8" x2="18" y2="12" stroke="#7CC842" strokeWidth="1.5"/>
            <line x1="18" y1="24" x2="18" y2="28" stroke="#7CC842" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        label: "Shield",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 4L6 10V18C6 24 11 30 18 32C25 30 30 24 30 18V10L18 4Z" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M14 18L17 21L23 15" stroke="#7CC842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        label: "Globe",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#2D3748" strokeWidth="1.5"/>
            <ellipse cx="18" cy="18" rx="8" ry="14" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
            <line x1="4" y1="18" x2="32" y2="18" stroke="#2D3748" strokeWidth="1" opacity="0.3"/>
            <line x1="6" y1="11" x2="30" y2="11" stroke="#2D3748" strokeWidth="1" opacity="0.2"/>
            <line x1="6" y1="25" x2="30" y2="25" stroke="#2D3748" strokeWidth="1" opacity="0.2"/>
            <circle cx="18" cy="18" r="2" fill="#7CC842"/>
          </svg>
        ),
      },
    ],
  },
  {
    name: "Environment & Territory",
    icons: [
      {
        label: "Tundra",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M2 28Q9 22 18 24Q27 26 34 20" stroke="#2D3748" strokeWidth="1.5" fill="none"/>
            <path d="M2 32Q9 26 18 28Q27 30 34 24" stroke="#2D3748" strokeWidth="1" opacity="0.4" fill="none"/>
            <circle cx="12" cy="16" r="1.5" fill="#7CC842" opacity="0.6"/>
            <circle cx="20" cy="14" r="1" fill="#7CC842" opacity="0.4"/>
            <circle cx="26" cy="18" r="1.5" fill="#7CC842" opacity="0.5"/>
            <line x1="12" y1="17.5" x2="12" y2="22" stroke="#7CC842" strokeWidth="1" opacity="0.4"/>
            <line x1="20" y1="15" x2="20" y2="20" stroke="#7CC842" strokeWidth="1" opacity="0.3"/>
          </svg>
        ),
      },
      {
        label: "Arctic",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="18" y1="4" x2="18" y2="32" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="6" y1="11" x2="30" y2="25" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="6" y1="25" x2="30" y2="11" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="18" y1="4" x2="15" y2="7" stroke="#7CC842" strokeWidth="1"/>
            <line x1="18" y1="4" x2="21" y2="7" stroke="#7CC842" strokeWidth="1"/>
            <line x1="18" y1="32" x2="15" y2="29" stroke="#7CC842" strokeWidth="1"/>
            <line x1="18" y1="32" x2="21" y2="29" stroke="#7CC842" strokeWidth="1"/>
            <circle cx="18" cy="18" r="2" fill="#7CC842"/>
          </svg>
        ),
      },
      {
        label: "Water",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 4C18 4 8 16 8 22C8 28 12.5 32 18 32C23.5 32 28 28 28 22C28 16 18 4 18 4Z" stroke="#2D3748" strokeWidth="1.5"/>
            <path d="M14 22C14 22 14 26 18 26" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        label: "Wildlife",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M10 18C10 18 6 10 8 6" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M26 18C26 18 30 10 28 6" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round"/>
            <ellipse cx="18" cy="22" rx="10" ry="8" stroke="#2D3748" strokeWidth="1.5"/>
            <circle cx="14" cy="20" r="1.5" fill="#7CC842"/>
            <circle cx="22" cy="20" r="1.5" fill="#7CC842"/>
            <ellipse cx="18" cy="24" rx="2" ry="1" fill="#2D3748" opacity="0.3"/>
          </svg>
        ),
      },
      {
        label: "Sustainability",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M8 28C8 28 8 12 24 8C24 8 24 24 8 28Z" stroke="#2D3748" strokeWidth="1.5" fill="#7CC842" opacity="0.1"/>
            <path d="M8 28C12 22 16 16 24 8" stroke="#7CC842" strokeWidth="1"/>
            <path d="M12 24C14 20 17 16 22 12" stroke="#7CC842" strokeWidth="0.5" opacity="0.5"/>
            <circle cx="18" cy="18" r="2" fill="#7CC842" opacity="0.4"/>
          </svg>
        ),
      },
      {
        label: "Sun",
        svg: (
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="6" fill="#7CC842" opacity="0.2" stroke="#2D3748" strokeWidth="1.5"/>
            <line x1="18" y1="4" x2="18" y2="9" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="18" y1="27" x2="18" y2="32" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="4" y1="18" x2="9" y2="18" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="27" y1="18" x2="32" y2="18" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="8" y1="8" x2="11.5" y2="11.5" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="24.5" y1="24.5" x2="28" y2="28" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="8" y1="28" x2="11.5" y2="24.5" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="24.5" y1="11.5" x2="28" y2="8" stroke="#7CC842" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
];

export default function IconsPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-20">
          <p className="mono-label mb-4">ICONS</p>
          <h1 className="font-display font-bold text-[#2D3748] text-display-lg mb-4">
            Icon System
          </h1>
          <p className="text-[#4A5568] text-lg max-w-2xl leading-relaxed">
            30 custom SVG icons across 5 categories. Consistent 36x36 viewBox,
            dark graphite strokes with green accents. Designed for presentations,
            collateral, and web.
          </p>
        </div>

        <section id="icon-system" className="scroll-mt-24">
          {iconCategories.map((category) => (
            <div key={category.name} className="mb-20">
              <div className="flex items-baseline gap-4 mb-8">
                <p className="mono-label">{category.name.toUpperCase()}</p>
                <span className="font-mono text-[#6B7B8D] text-xs">{category.icons.length} icons</span>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {category.icons.map((icon) => (
                  <div
                    key={icon.label}
                    className="bg-white rounded-xl p-5 flex flex-col items-center justify-center gap-4 card-hover group aspect-square"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {icon.svg}
                    </div>
                    <p className="font-mono text-[10px] text-[#6B7B8D] text-center tracking-wider group-hover:text-[#7CC842] transition-colors duration-300">
                      {icon.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Usage Guidelines */}
          <div className="section-divider mb-16" />
          <div className="bg-white rounded-2xl p-8 md:p-12 card-hover border border-[#E8E5DD]">
            <h3 className="font-display font-bold text-xl text-[#2D3748] mb-8">
              Usage Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="mono-label mb-3">SIZING</p>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Icons are designed on a 36x36 grid. Use at 24px for inline,
                  36px for standard, and 48px for featured contexts.
                </p>
              </div>
              <div>
                <p className="mono-label mb-3">COLOR</p>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  Primary strokes in Graphite (#2D3748). Accent fills and
                  details in Green (#7CC842). On dark backgrounds, swap
                  strokes to Warm Sand.
                </p>
              </div>
              <div>
                <p className="mono-label mb-3">SPACING</p>
                <p className="text-[#4A5568] text-sm leading-relaxed">
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
