"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";

interface NavSection {
  label: string;
  items: { label: string; href: string }[];
}

const navSections: NavSection[] = [
  {
    label: "Foundation",
    items: [
      { label: "Design Tokens", href: "/foundation#design-tokens" },
      { label: "Extended Palette", href: "/foundation#extended-palette" },
      { label: "Typography", href: "/foundation#typography" },
    ],
  },
  {
    label: "Presentation",
    items: [
      { label: "Hero Slide", href: "/presentation#hero-slide" },
      { label: "Statement", href: "/presentation#statement" },
      { label: "Section Divider", href: "/presentation#section-divider" },
      { label: "Signature Components", href: "/presentation#signature-components" },
      { label: "Split Image", href: "/presentation#split-image" },
    ],
  },
  {
    label: "Data & Templates",
    items: [
      { label: "Map Frame", href: "/data-templates#map-frame" },
      { label: "Data Slide", href: "/data-templates#data-slide" },
      { label: "Timeline", href: "/data-templates#timeline" },
      { label: "Peer Comparison", href: "/data-templates#peer-comparison" },
      { label: "Drill Results", href: "/data-templates#drill-results" },
      { label: "Cross Section", href: "/data-templates#cross-section" },
      { label: "Core Photo", href: "/data-templates#core-photo" },
      { label: "Property Map", href: "/data-templates#property-map" },
      { label: "Callout Library", href: "/data-templates#callout-library" },
      { label: "Infographics", href: "/data-templates#infographics" },
    ],
  },
  {
    label: "Collateral",
    items: [
      { label: "Investor One-Pager", href: "/collateral#investor-one-pager" },
      { label: "Quarterly Update", href: "/collateral#quarterly-update" },
      { label: "Social Media", href: "/collateral#social-media" },
      { label: "Email & Letterhead", href: "/collateral#email-letterhead" },
      { label: "Conference Banners", href: "/collateral#conference-banners" },
      { label: "Web Components", href: "/collateral#web-components" },
    ],
  },
  {
    label: "Icons",
    items: [{ label: "Icon System", href: "/icons#icon-system" }],
  },
];

function NavDropdown({ section }: { section: NavSection }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="text-sm text-white/80 hover:text-gen-green transition-colors px-3 py-2 font-medium tracking-wide"
        onClick={() => setOpen((prev) => !prev)}
      >
        {section.label}
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-gen-dark border border-white/10 rounded-lg shadow-2xl py-2 min-w-[220px] z-50">
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-white/70 hover:text-gen-green hover:bg-white/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gen-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-gen-green font-bold tracking-[0.2em] text-sm"
        >
          GENERATION STYLE
        </Link>
        <div className="flex items-center gap-1">
          {navSections.map((section) => (
            <NavDropdown key={section.label} section={section} />
          ))}
          <a
            href="https://generationuranium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/80 hover:text-gen-green transition-colors px-3 py-2 font-medium tracking-wide"
          >
            TSX-V: GEN ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
