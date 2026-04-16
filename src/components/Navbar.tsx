"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home",       id: "home",       hideOnTablet: false },
  { name: "About",      id: "about",      hideOnTablet: false },
  { name: "Skills",     id: "skills",     hideOnTablet: true  },
  { name: "Education",  id: "education",  hideOnTablet: true  },
  { name: "Experience", id: "experience", hideOnTablet: false },
  { name: "Projects",   id: "projects",   hideOnTablet: false },
  { name: "Contact",    id: "contact",    hideOnTablet: false },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ─── Scroll Spy ────────────────────────────────────────────────────────────
  // IntersectionObserver watches every section. When a section crosses the
  // top 25% of the viewport it becomes "active". Only color + border-bottom
  // of the matching nav link change — no size, weight, or spacing is touched.
  useEffect(() => {
    const sectionIds = links.map((l) => l.id);

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Fire when the section enters the upper 25% → lower 75% band of viewport
          rootMargin: "-10% 0px -75% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ─── Per-link class builder ─────────────────────────────────────────────────
  // Base classes are IDENTICAL for every link — font, size, weight, tracking.
  // Only color & border-bottom switch based on activeSection.
  const linkClass = (id: string, hideOnTablet: boolean) => {
    const base =
      "font-headline font-bold tracking-tight text-xs lg:text-sm uppercase pb-1 transition-colors";

    const visibility = hideOnTablet ? "hidden lg:block" : "block";

    const active =
      id === activeSection
        ? "text-[#00daf3] border-b-2 border-[#00daf3]"
        : "text-[#e2e2e6]/70 hover:text-[#e2e2e6] border-b-2 border-transparent";

    return `${base} ${visibility} ${active}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#111316]/80 backdrop-blur-xl shadow-2xl shadow-black/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">

        {/* Logo */}
        <div className="text-xl font-black tracking-tighter text-[#e2e2e6]">TALHA JAVED</div>

        {/* Horizontal links — tablet & desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={linkClass(item.id, item.hideOnTablet)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hire Me — tablet & desktop */}
        <Link
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-lg font-bold hover:scale-95 transition-transform"
        >
          Resume
        </Link>

        {/* Hamburger — mobile only */}
        <button
          className="block md:hidden text-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-surface-container-high border-t border-outline-variant/20 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col px-8 py-6 gap-6">
              {links.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  // Mobile menu: same active colour logic, no size change
                  className={`font-headline font-bold text-lg uppercase tracking-wider pb-0.5 ${
                    item.id === activeSection
                      ? "text-[#00daf3] border-b-2 border-[#00daf3]"
                      : "text-[#e2e2e6]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-lg font-bold text-center mt-4 uppercase tracking-wider"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
