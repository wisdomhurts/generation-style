"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useCallback, useEffect } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Foundation", href: "/foundation" },
  { label: "Presentation", href: "/presentation" },
  { label: "Data & Templates", href: "/data-templates" },
  { label: "Collateral", href: "/collateral" },
  { label: "Icons", href: "/icons" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
          : "bg-black/40 backdrop-blur-xl border-b border-white/[0.03]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="font-display font-bold text-sm tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-white">
            GENERATION
          </span>
          <span className="font-display font-bold text-sm tracking-[0.2em] text-gen-green transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(200,230,74,0.4)]">
            STYLE
          </span>
        </Link>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm px-4 py-2 font-medium tracking-wide transition-all duration-300 link-underline ${
                  isActive
                    ? "text-gen-green"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gen-green shadow-[0_0_6px_rgba(200,230,74,0.5)]" />
                )}
                <span className={isActive ? "ml-1" : ""}>{item.label}</span>
              </Link>
            );
          })}

          {/* TSX-V Badge */}
          <a
            href="https://generationuranium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-3 py-1.5 rounded-full border border-gen-green/30 text-gen-green text-xs font-mono tracking-wider hover:border-gen-green/60 hover:shadow-[0_0_15px_rgba(200,230,74,0.15)] transition-all duration-300"
          >
            TSX-V: GEN
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-gen-green transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-2xl border-t border-white/5 px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-gen-green" : "text-white/70 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gen-green mr-2" />
                )}
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://generationuranium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2.5 text-sm font-mono text-gen-green tracking-wider"
          >
            TSX-V: GEN
          </a>
        </div>
      )}
    </nav>
  );
}
