// ============================================================================
// ConAir Extract Solutions – Homepage
// Senior UX/UI | Front-End Architect | Technical SEO
// Colour Palette: #5CA8A6 Teal | #000000 Black | #FFFFFF White | #2A2A2A Charcoal
// ============================================================================

import { useState, useEffect, useRef } from "react";

// ─── SVG Icon Components ─────────────────────────────────────────────────────

const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
    <line x1="18" y1="6"  x2="6"  y2="18" />
    <line x1="6"  y1="6"  x2="18" y2="18" />
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 22 22" fill="none" className="w-6 h-6 flex-shrink-0 mt-0.5" aria-hidden="true">
    <circle cx="11" cy="11" r="11" fill="#5CA8A6" />
    <polyline points="6,11.5 9.5,15 16,8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <path d="M24 4L6 12v14c0 9.4 7.7 18.2 18 20 10.3-1.8 18-10.6 18-20V12L24 4z" fill="#5CA8A6" fillOpacity="0.15" stroke="#5CA8A6" strokeWidth="2.5" />
    <polyline points="16,24 21,30 32,18" stroke="#5CA8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCertificate = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <rect x="6" y="8" width="36" height="26" rx="3" fill="#5CA8A6" fillOpacity="0.12" stroke="#5CA8A6" strokeWidth="2.5" />
    <line x1="14" y1="18" x2="34" y2="18" stroke="#5CA8A6" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="24" x2="28" y2="24" stroke="#5CA8A6" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="38" r="6" fill="#5CA8A6" fillOpacity="0.18" stroke="#5CA8A6" strokeWidth="2" />
    <polyline points="20,38 23,41 28,35" stroke="#5CA8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconHardHat = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <path d="M8 28h32v5a3 3 0 01-3 3H11a3 3 0 01-3-3v-5z" fill="#5CA8A6" fillOpacity="0.15" stroke="#5CA8A6" strokeWidth="2.5" />
    <path d="M24 10c-8.8 0-16 7.2-16 16h32c0-8.8-7.2-16-16-16z" fill="#5CA8A6" fillOpacity="0.12" stroke="#5CA8A6" strokeWidth="2.5" />
    <line x1="24" y1="10" x2="24" y2="16" stroke="#5CA8A6" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const IconCanopy = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
    <rect x="6" y="18" width="36" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <line x1="12" y1="26" x2="12" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="26" x2="24" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="36" y1="26" x2="36" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M14 18C14 14 34 14 34 18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M9 18l3-8h24l3 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconDuct = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
    <rect x="6" y="14" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="6" y="28" width="24" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <line x1="30" y1="24" x2="30" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M30 36 L38 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="40" cy="36" r="2" fill="currentColor" />
    <line x1="12" y1="19" x2="36" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
  </svg>
);

const IconExtract = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
    <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M24 10 L24 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 30 L24 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 24 L32 20 L28 28 L24 24" fill="currentColor" />
    <path d="M24 24 L16 28 L20 20 L24 24" fill="currentColor" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

// ─── Static Data ──────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Projects", href: "#projects" },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

const TRUST_ITEMS = [
  { icon: <IconShield />,      label: "Fully Insured",             sub: "Public & Employers Liability" },
  { icon: <IconCertificate />, label: "Quality Assured",           sub: "ISO-Aligned Standards" },
  { icon: <IconHardHat />,     label: "H&S Compliant",             sub: "COSHH & Risk Assessed" },
];

const SERVICES = [
  {
    id:    "canopy-cleaning",
    icon:  <IconCanopy />,
    title: "Canopy & Hood Cleaning",
    desc:  "Deep-clean commercial kitchen canopies, plenums, and baffles to TR19® standard. We remove grease build-up that poses fire and hygiene risks, restoring full airflow and leaving your kitchen fully compliant.",
    tag:   "TR19® Compliant",
  },
  {
    id:    "ductwork-cleaning",
    icon:  <IconDuct />,
    title: "Ductwork Cleaning",
    desc:  "Thorough internal ductwork cleaning using specialist access equipment. We clean and re-seal all duct sections, providing a full photographic report and compliance certificate accepted by insurers.",
    tag:   "Full Compliance Certificate",
  },
  {
    id:    "extraction-systems",
    icon:  <IconExtract />,
    title: "Extraction System Servicing",
    desc:  "Complete inspection, cleaning, and servicing of fans, motors, and filters. We identify early faults, improve energy efficiency, and extend the operational life of your extraction investment.",
    tag:   "Energy Efficiency Gains",
  },
];

const BENEFITS = [
  { headline: "Reduced Risk of Fire",          detail: "Grease deposits are the leading cause of commercial kitchen fires. Regular certified cleaning dramatically reduces your risk." },
  { headline: "Compliant with Insurance",       detail: "Insurers require documented, certified ductwork cleaning. Our compliance certificates keep your policy valid and claims honoured." },
  { headline: "Improved Hygiene Standards",     detail: "Eliminate bacteria, odours, and contamination sources, creating a safer environment for kitchen staff and customers alike." },
  { headline: "Enhanced Airflow & Efficiency",  detail: "Clean systems perform better with less energy, lowering utility bills and reducing unnecessary strain on motors and fans." },
];

const RECENT_PROJECTS = [
  { name: "The Grand Hotel, Weston-super-Mare",  desc: "Full ductwork clean & TR19® certification" },
  { name: "Somerset County Hospital Canteen",     desc: "Canopy deep-clean, fan service & full report" },
  { name: "Bristol City Centre Restaurant Group", desc: "3-site extraction system overhaul" },
  { name: "Burnham-on-Sea Holiday Village",       desc: "Annual maintenance contract – full kitchen extract" },
];

const FOOTER_SERVICES = [
  "Canopy & Hood Cleaning",
  "Ductwork Cleaning",
  "Extraction System Servicing",
  "Fan & Motor Maintenance",
  "Grease Filter Replacement",
  "Post-Clean Certification",
];

// JSON-LD LocalBusiness schema (also injected via index.html head in production)
const JSON_LD = {
  "@context":   "https://schema.org",
  "@type":      "LocalBusiness",
  "name":       "ConAir Extract Solutions",
  "description":"Commercial kitchen canopy cleaning, ductwork cleaning and extraction system servicing across Weston-super-Mare and Somerset.",
  "url":        "https://www.conairextract.co.uk",
  "telephone":  "+441934000000",
  "email":      "info@conairextract.co.uk",
  "address": {
    "@type":           "PostalAddress",
    "streetAddress":   "Unit 12, Locking Road Industrial Estate",
    "addressLocality": "Weston-super-Mare",
    "addressRegion":   "Somerset",
    "postalCode":      "BS23 3HG",
    "addressCountry":  "GB",
  },
  "geo": {
    "@type":     "GeoCoordinates",
    "latitude":  51.3458,
    "longitude": -2.9774,
  },
  "openingHoursSpecification": [{
    "@type":     "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens":     "07:30",
    "closes":    "18:00",
  }],
  "areaServed": ["Weston-super-Mare","Somerset","Bristol","Bath","Taunton","Bridgwater","Burnham-on-Sea","Minehead","Clevedon","Nailsea"],
  "priceRange": "££",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name":  "Kitchen Extract Cleaning Services",
    "itemListElement": [
      { "@type":"Offer", "itemOffered":{"@type":"Service","name":"Commercial Kitchen Canopy Cleaning"} },
      { "@type":"Offer", "itemOffered":{"@type":"Service","name":"Kitchen Ductwork Cleaning"} },
      { "@type":"Offer", "itemOffered":{"@type":"Service","name":"Extraction System Servicing"} },
    ],
  },
};

// ─── Smooth-scroll helper ─────────────────────────────────────────────────────
function smoothTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── Logo mark ────────────────────────────────────────────────────────────────
function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <div
      className="rounded-md flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size, backgroundColor: "#5CA8A6" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" fill="none" style={{ width: size * 0.6, height: size * 0.6 }}>
        <path d="M8 28 C8 18 14 10 20 10 C26 10 32 18 32 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <line x1="14" y1="28" x2="14" y2="34" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="28" x2="20" y2="34" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="26" y1="28" x2="26" y2="34" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function LogoWordmark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark />
      <div>
        <span className={`block font-bold text-lg leading-none tracking-tight ${dark ? "text-black" : "text-white"}`}>
          ConAir
        </span>
        <span className="block text-xs font-semibold leading-none mt-0.5" style={{ color: "#5CA8A6" }}>
          Extract Solutions
        </span>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") ?? "";
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      smoothTo(href);
    }
  };

  return (
    <>
      {/* ── JSON-LD LocalBusiness Schema ─────────────────────────────────── */}
      {/* In production: move this <script> block into <head> of index.html   */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          HEADER — Sticky black navigation
      ══════════════════════════════════════════════════════════════════ */}
      {/* @section: sticky-header */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 bg-black transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_30px_rgba(92,168,166,0.18)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            {/* @section: header-logo */}
            <a
              href="#"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-md"
              aria-label="ConAir Extract Solutions – return to homepage"
            >
              <LogoWordmark />
            </a>

            {/* Desktop nav */}
            {/* @section: desktop-nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNav}
                  className="nav-link text-sm font-medium text-white/75 hover:text-white transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop actions */}
            {/* @section: header-cta */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+441934000000"
                className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                aria-label="Call ConAir on 01934 000 000"
              >
                <IconPhone />
                <span>01934 000 000</span>
              </a>
              <a
                href="#contact"
                onClick={handleNav}
                className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-6 rounded-md text-sm font-bold text-white transition-all duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal"
                style={{ backgroundColor: "#5CA8A6" }}
                aria-label="Request a free quotation"
              >
                Free Quotation
              </a>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+441934000000"
                className="flex items-center justify-center w-11 h-11 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Call ConAir"
              >
                <IconPhone />
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center justify-center w-11 h-11 rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {menuOpen ? <IconClose /> : <IconMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav panel */}
        {/* @section: mobile-nav */}
        <div
          id="mobile-menu"
          className={`mobile-nav lg:hidden bg-black border-t border-white/10 ${menuOpen ? "open" : "closed"}`}
          aria-hidden={!menuOpen}
        >
          <nav
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNav}
                className="flex items-center min-h-[44px] px-3 text-base font-medium text-white/75 hover:text-white hover:bg-white/8 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNav}
              className="mt-3 flex items-center justify-center min-h-[44px] px-6 rounded-md text-base font-bold text-white"
              style={{ backgroundColor: "#5CA8A6" }}
              aria-label="Request a free quotation"
            >
              Free Quotation
            </a>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════
          MAIN
      ══════════════════════════════════════════════════════════════════ */}
      <main id="main-content" role="main">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        {/* @section: hero */}
        <section
          ref={heroRef}
          aria-labelledby="hero-heading"
          className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden"
          style={{ paddingTop: "72px" }}
        >
          {/* Dark kitchen backdrop (replace data-uri comment with real CDN image URL) */}
          {/* 
            PRODUCTION NOTE: Replace the background-image below with a real
            high-quality commercial kitchen photo. Example:
            backgroundImage: `url("https://cdn.yourdomain.co.uk/images/kitchen-canopy.jpg")`
            Ensure the image has descriptive alt text via aria-label below.
          */}
          <div
            className="absolute inset-0 z-0"
            role="img"
            aria-label="A pristine stainless steel commercial kitchen with professional canopy extract system fitted above cooking ranges"
            style={{
              background: `
                radial-gradient(ellipse at 65% 35%, rgba(92,168,166,0.07) 0%, transparent 55%),
                linear-gradient(160deg, #0c0c0c 0%, #131313 45%, #0a0a0a 100%)
              `,
            }}
          >
            {/* Decorative stainless grid texture */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.038]" aria-hidden="true">
              <defs>
                <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse">
                  <path d="M52 0L0 0 0 52" fill="none" stroke="#fff" strokeWidth="0.7" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            {/* Teal glow blob */}
            <div
              className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #5CA8A6 0%, transparent 68%)" }}
              aria-hidden="true"
            />
          </div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.62) 55%, rgba(92,168,166,0.18) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Hero content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 w-full">
            <div className="max-w-[720px]">

              {/* Eyebrow pill */}
              <p
                className="animate-fade-in inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] mb-7 px-4 py-2 rounded-full border"
                style={{ color: "#5CA8A6", borderColor: "rgba(92,168,166,0.3)", backgroundColor: "rgba(92,168,166,0.07)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#5CA8A6" }} aria-hidden="true" />
                Weston-super-Mare &amp; Somerset Specialists
              </p>

              {/* H1 – single per page, target high-intent keywords */}
              {/* @section: hero-h1 */}
              <h1
                id="hero-heading"
                className="animate-fade-in-up delay-150 text-[clamp(2rem,6vw,3.75rem)] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
              >
                Commercial Kitchen{" "}
                <span style={{ color: "#5CA8A6" }}>Canopy &amp; Ductwork</span>{" "}
                Cleaning Specialists
              </h1>

              {/* Sub-headline */}
              <p className="animate-fade-in-up delay-300 text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed mb-10 max-w-[580px]">
                TR19®-compliant extract, canopy, and ductwork cleaning for restaurants, hotels, hospitals, and schools — fully certified and backed by comprehensive photographic reports.
              </p>

              {/* Dual CTAs */}
              {/* @section: hero-ctas */}
              <div className="animate-fade-in-up delay-450 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={handleNav}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-md text-base font-bold text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal shadow-lg"
                  style={{ backgroundColor: "#5CA8A6", boxShadow: "0 8px 32px rgba(92,168,166,0.28)" }}
                  aria-label="Request a free commercial kitchen cleaning quotation"
                >
                  Get a Free Quote
                  <IconArrow />
                </a>
                <a
                  href="#services"
                  onClick={handleNav}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-md text-base font-bold text-white border border-white/25 hover:bg-white/10 hover:border-white/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="View all ConAir extract cleaning services"
                >
                  View Our Services
                </a>
              </div>

              {/* Localised social proof */}
              <p className="animate-fade-in-up delay-600 mt-9 text-sm text-white/40 leading-relaxed">
                Serving commercial kitchens across Weston-super-Mare, Bristol, Taunton, Bridgwater{" "}
                and throughout Somerset &amp; the South West.
              </p>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" className="w-6 h-6">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </section>

        {/* ── TRUST & AUTHORITY BAR ────────────────────────────────────── */}
        {/* @section: trust-bar */}
        <section
          aria-label="Trust credentials and industry accreditations"
          className="bg-black border-t border-white/[0.08]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left py-6 sm:py-0 sm:px-8 first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0"
                >
                  {item.icon}
                  <div>
                    <p className="text-white font-bold text-base">{item.label}</p>
                    <p className="text-white/45 text-sm mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ─────────────────────────────────────────────── */}
        {/* @section: services-grid */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="bg-white py-20 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <header className="text-center mb-14">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "#5CA8A6" }}>
                What We Do
              </p>
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight"
              >
                Our Core Services
              </h2>
              <p className="mt-4 text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
                Every clean is carried out to TR19® and BESA standards with full photographic evidence reports and a compliance certificate.
              </p>
            </header>

            {/* 3-column responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {SERVICES.map((svc) => (
                <article
                  key={svc.id}
                  id={svc.id}
                  className="service-card flex flex-col bg-white rounded-2xl border border-gray-200 p-8"
                  aria-labelledby={`svc-title-${svc.id}`}
                >
                  {/* Compliance tag */}
                  <span
                    className="inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold mb-6"
                    style={{ backgroundColor: "rgba(92,168,166,0.1)", color: "#5CA8A6" }}
                  >
                    {svc.tag}
                  </span>

                  {/* Icon container */}
                  <div
                    className="service-icon w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-gray-500"
                    style={{ backgroundColor: "#f4f4f5", border: "1px solid #e4e4e7" }}
                  >
                    {svc.icon}
                  </div>

                  {/* Title */}
                  <h3
                    id={`svc-title-${svc.id}`}
                    className="text-xl font-extrabold text-black mb-3"
                  >
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{svc.desc}</p>

                  {/* Inline link CTA */}
                  <a
                    href="#contact"
                    onClick={handleNav}
                    className="inline-flex items-center gap-1.5 mt-7 text-sm font-bold transition-colors duration-200 hover:underline focus:outline-none focus-visible:underline"
                    style={{ color: "#5CA8A6" }}
                    aria-label={`Request a quote for ${svc.title}`}
                  >
                    Request a Quote
                    <IconArrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS SECTION ─────────────────────────────────────────── */}
        {/* @section: benefits */}
        <section
          id="benefits"
          aria-labelledby="benefits-heading"
          className="py-20 lg:py-28"
          style={{ backgroundColor: "#f7f9f9" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left: image placeholder with defined aspect ratio (CLS prevention) */}
              {/* @section: benefits-image */}
              <div className="order-2 lg:order-1">
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "4/3" }}
                  role="img"
                  aria-label="ConAir technician professionally cleaning a commercial kitchen ductwork extraction system in Somerset"
                >
                  {/*
                    PRODUCTION NOTE: Replace this placeholder div with:
                    <img src="https://cdn.yourdomain.co.uk/images/technician-ductwork.jpg"
                         alt="ConAir technician cleaning commercial kitchen ductwork" ... />
                  */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{
                      background: "linear-gradient(140deg, #181818 0%, #212121 60%, #1a1a1a 100%)",
                    }}
                  >
                    <svg viewBox="0 0 340 260" fill="none" className="w-2/3 opacity-[0.22]" aria-hidden="true">
                      <rect x="30" y="170" width="280" height="50" rx="4" fill="#444" />
                      <rect x="55" y="152" width="55" height="22" rx="3" fill="#555" />
                      <rect x="142" y="135" width="80" height="38" rx="3" fill="#555" />
                      <rect x="255" y="148" width="50" height="26" rx="3" fill="#555" />
                      <rect x="60" y="64" width="220" height="38" rx="4" fill="#5CA8A6" opacity="0.45" />
                      <rect x="90" y="28" width="18" height="38" rx="2" fill="#5CA8A6" opacity="0.38" />
                      <rect x="161" y="28" width="18" height="38" rx="2" fill="#5CA8A6" opacity="0.38" />
                      <rect x="232" y="28" width="18" height="38" rx="2" fill="#5CA8A6" opacity="0.38" />
                      <circle cx="170" cy="16" r="13" stroke="#5CA8A6" strokeWidth="1.8" fill="none" opacity="0.55" />
                      <path d="M170 3 L170 29 M157 16 L183 16" stroke="#5CA8A6" strokeWidth="1.8" opacity="0.55" />
                      <path d="M118 134 Q123 112 118 90 Q113 68 118 48" stroke="#5CA8A6" strokeWidth="1.4" fill="none" opacity="0.28" />
                      <path d="M170 134 Q175 112 170 90 Q165 68 170 48" stroke="#5CA8A6" strokeWidth="1.4" fill="none" opacity="0.28" />
                      <path d="M222 134 Q227 112 222 90 Q217 68 222 48" stroke="#5CA8A6" strokeWidth="1.4" fill="none" opacity="0.28" />
                    </svg>
                    <p className="absolute bottom-4 text-[10px] text-white/25 text-center px-6">
                      [ Replace with production site photo — see aria-label for required subject ]
                    </p>
                  </div>
                  {/* Teal left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[5px]"
                    style={{ backgroundColor: "#5CA8A6" }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Right: benefits list */}
              {/* @section: benefits-list */}
              <div className="order-1 lg:order-2">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "#5CA8A6" }}>
                  Why ConAir?
                </p>
                <h2
                  id="benefits-heading"
                  className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-5"
                >
                  The Benefits of a<br className="hidden sm:block" />
                  {" "}ConAir Clean
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  A clean extraction system isn't optional — it's a legal, insurance, and safety requirement. Here's what every ConAir service delivers:
                </p>

                {/* Benefit checklist */}
                <ul className="space-y-0" role="list" aria-label="Key benefits of ConAir extract cleaning">
                  {BENEFITS.map((b) => (
                    <li key={b.headline} className="benefit-item">
                      <IconCheck />
                      <div>
                        <h3 className="text-base font-bold text-black">{b.headline}</h3>
                        <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{b.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={handleNav}
                  className="inline-flex items-center justify-center gap-2 mt-9 min-h-[52px] px-8 rounded-md text-base font-bold text-white transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  style={{ backgroundColor: "#5CA8A6" }}
                  aria-label="Book your compliant kitchen extract clean with ConAir"
                >
                  Book a Compliant Clean
                  <IconArrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── RECENT PROJECTS ──────────────────────────────────────────── */}
        {/* @section: recent-projects */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="bg-black py-20 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-14">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "#5CA8A6" }}>
                Our Work
              </p>
              <h2
                id="projects-heading"
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
              >
                Recent Projects
              </h2>
              <p className="mt-4 text-base text-white/45 max-w-xl mx-auto leading-relaxed">
                Trusted by hotels, NHS facilities, restaurant groups, and holiday parks across Somerset and the South West.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {RECENT_PROJECTS.map((project, i) => (
                <article
                  key={project.name}
                  className="relative rounded-2xl border bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 p-7 group"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  aria-label={`Project: ${project.name}`}
                >
                  <span
                    className="absolute top-5 right-5 text-xs font-bold tabular-nums"
                    style={{ color: "rgba(92,168,166,0.45)" }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>

                  {/* Project image placeholder with defined aspect ratio */}
                  <div
                    className="w-full rounded-xl mb-5 overflow-hidden"
                    style={{ aspectRatio: "16/6" }}
                    role="img"
                    aria-label={`Project photograph for ${project.name}`}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, hsl(${175 + i * 7}, 18%, ${12 + i}%) 0%, hsl(${168 + i * 5}, 12%, 9%) 100%)`,
                      }}
                    >
                      <svg viewBox="0 0 80 30" fill="none" className="w-16 opacity-[0.18]" aria-hidden="true">
                        <rect x="4" y="12" width="72" height="10" rx="2" stroke="#5CA8A6" strokeWidth="1.5" />
                        <line x1="18" y1="22" x2="18" y2="28" stroke="#5CA8A6" strokeWidth="1.5" />
                        <line x1="40" y1="22" x2="40" y2="28" stroke="#5CA8A6" strokeWidth="1.5" />
                        <line x1="62" y1="22" x2="62" y2="28" stroke="#5CA8A6" strokeWidth="1.5" />
                        <path d="M14 12 C14 6 66 6 66 12" stroke="#5CA8A6" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-base mb-1">{project.name}</h3>
                  <p className="text-white/45 text-sm">{project.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────────────── */}
        {/* @section: cta-band */}
        <section
          aria-label="Call to action: Get a free quotation"
          className="py-16 lg:py-20"
          style={{ backgroundColor: "#5CA8A6" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready for a Certified, Compliant Kitchen Clean?
            </h2>
            <p className="text-lg text-white/80 mb-9 max-w-2xl mx-auto leading-relaxed">
              No obligation. We respond within one business day with a tailored quote for your premises across Weston-super-Mare, Somerset, and the wider South West.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={handleNav}
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-9 rounded-md text-base font-extrabold bg-black text-white hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
                aria-label="Request your free commercial kitchen cleaning quotation"
              >
                Request Free Quotation
                <IconArrow />
              </a>
              <a
                href="tel:+441934000000"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-9 rounded-md text-base font-bold border-2 border-white text-white hover:bg-white/15 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Call ConAir on 01934 000 000"
              >
                <IconPhone />
                01934 000 000
              </a>
            </div>
          </div>
        </section>

        {/* ── CONTACT & ENQUIRY ────────────────────────────────────────── */}
        {/* @section: contact-section */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-white py-20 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">

              {/* Contact information */}
              <div id="about">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "#5CA8A6" }}>
                  Get In Touch
                </p>
                <h2
                  id="contact-heading"
                  className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-4"
                >
                  Request Your Free Quotation
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-9">
                  Contact us directly or fill in the form and we'll respond within one business day with a tailored, no-obligation quote for your premises.
                </p>

                {/* NAP in semantic <address> */}
                <address
                  className="not-italic space-y-5 text-sm"
                  aria-label="ConAir Extract Solutions contact information"
                >
                  <div className="flex items-start gap-3 text-gray-600">
                    <IconPin />
                    <div>
                      <p className="font-bold text-black text-base">ConAir Extract Solutions</p>
                      <p className="mt-0.5">Unit 12, Locking Road Industrial Estate</p>
                      <p>Weston-super-Mare, Somerset, BS23 3HG</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <IconPhone />
                    <a
                      href="tel:+441934000000"
                      className="font-bold text-black text-base hover:underline"
                      style={{ textDecorationColor: "#5CA8A6" }}
                    >
                      01934 000 000
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <IconMail />
                    <a
                      href="mailto:info@conairextract.co.uk"
                      className="font-semibold text-black hover:underline"
                      style={{ textDecorationColor: "#5CA8A6" }}
                    >
                      info@conairextract.co.uk
                    </a>
                  </div>
                </address>

                <div className="mt-9 pt-9 border-t border-gray-100">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-3">Service Areas</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Weston-super-Mare · Taunton · Bridgwater · Bristol · Bath · Burnham-on-Sea ·
                    Clevedon · Minehead · Nailsea · Wells · throughout Somerset &amp; the South West
                  </p>
                  <div className="mt-6 flex items-center gap-3 flex-wrap">
                    {["TR19®","BESA","COSHH","Fully Insured"].map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-bold border rounded px-2.5 py-1"
                        style={{ borderColor: "rgba(92,168,166,0.35)", color: "#5CA8A6", backgroundColor: "rgba(92,168,166,0.06)" }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enquiry form */}
              {/* @section: contact-form */}
              <form
                className="space-y-5"
                aria-label="Free quotation enquiry form"
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="f-name" className="block text-sm font-semibold text-black mb-1.5">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="f-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-black placeholder-gray-400 bg-white focus:outline-none focus:border-[#5CA8A6] focus:ring-2 transition-colors"
                      style={{ "--tw-ring-color": "rgba(92,168,166,0.18)" } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label htmlFor="f-business" className="block text-sm font-semibold text-black mb-1.5">
                      Business Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="f-business"
                      type="text"
                      name="business"
                      required
                      placeholder="The Grand Hotel"
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-black placeholder-gray-400 bg-white focus:outline-none focus:border-[#5CA8A6] focus:ring-2 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="f-phone" className="block text-sm font-semibold text-black mb-1.5">
                      Phone <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="f-phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="01934 000 000"
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-black placeholder-gray-400 bg-white focus:outline-none focus:border-[#5CA8A6] focus:ring-2 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="f-email" className="block text-sm font-semibold text-black mb-1.5">
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="f-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="jane@hotel.co.uk"
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-black placeholder-gray-400 bg-white focus:outline-none focus:border-[#5CA8A6] focus:ring-2 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="f-service" className="block text-sm font-semibold text-black mb-1.5">
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      id="f-service"
                      name="service"
                      defaultValue=""
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-black bg-white appearance-none focus:outline-none focus:border-[#5CA8A6] focus:ring-2 transition-colors"
                    >
                      <option value="" disabled>Select a service…</option>
                      <option>Canopy &amp; Hood Cleaning</option>
                      <option>Ductwork Cleaning</option>
                      <option>Extraction System Servicing</option>
                      <option>Fan &amp; Motor Maintenance</option>
                      <option>Full Kitchen Extract Package</option>
                      <option>Not sure — need advice</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center" aria-hidden="true">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="f-message" className="block text-sm font-semibold text-black mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your premises, number of kitchens, last clean date, etc."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-black placeholder-gray-400 bg-white resize-none focus:outline-none focus:border-[#5CA8A6] focus:ring-2 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[52px] px-8 rounded-lg text-base font-extrabold text-white transition-all duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal"
                  style={{ backgroundColor: "#5CA8A6" }}
                  aria-label="Submit free quotation request"
                >
                  Send Enquiry &amp; Request Quote
                  <IconArrow />
                </button>
                <p className="text-xs text-center text-gray-400">
                  We typically respond within 1 business day. Your details are never shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* ══════════════════════════════════════════════════════════════════
          FOOTER — Dark charcoal #2A2A2A with 4 columns + NAP
      ══════════════════════════════════════════════════════════════════ */}
      {/* @section: site-footer */}
      <footer
        role="contentinfo"
        aria-label="Site footer"
        style={{ backgroundColor: "#2A2A2A" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

            {/* Col 1: About */}
            {/* @section: footer-about */}
            <div>
              <div className="mb-5">
                <LogoWordmark />
              </div>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                Commercial kitchen canopy, ductwork, and extraction system cleaning specialists. Serving Weston-super-Mare and the wider South West since 2010.
              </p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-2">Accreditations</p>
              <div className="flex items-center gap-2 flex-wrap">
                {["TR19®","BESA","COSHH"].map((a) => (
                  <span
                    key={a}
                    className="text-[11px] font-extrabold border rounded px-2 py-0.5 text-white/35"
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Col 2: Services */}
            {/* @section: footer-services */}
            <div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-widest mb-5">Services</h3>
              <ul className="space-y-3" role="list">
                {FOOTER_SERVICES.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      onClick={handleNav}
                      className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-150"
                    >
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#5CA8A6" }} aria-hidden="true" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Recent Projects */}
            {/* @section: footer-projects */}
            <div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-widest mb-5">Recent Projects</h3>
              <ul className="space-y-4" role="list">
                {RECENT_PROJECTS.map((p) => (
                  <li key={p.name}>
                    <a
                      href="#projects"
                      onClick={handleNav}
                      className="block group"
                      aria-label={`View project details: ${p.name}`}
                    >
                      <p className="text-sm text-white/65 group-hover:text-white transition-colors font-semibold leading-snug">{p.name}</p>
                      <p className="text-xs text-white/30 mt-0.5">{p.desc}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: NAP Contact — semantic <address> */}
            {/* @section: footer-contact */}
            <div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-widest mb-5">Contact</h3>
              <address
                className="not-italic space-y-4 text-sm text-white/50"
                aria-label="ConAir Extract Solutions full contact information"
              >
                <div className="flex items-start gap-3">
                  <IconPin />
                  <div>
                    <p className="font-bold text-white">ConAir Extract Solutions</p>
                    <p className="mt-0.5">Unit 12, Locking Road Industrial Estate</p>
                    <p>Weston-super-Mare</p>
                    <p>Somerset, BS23 3HG</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <IconPhone />
                  <a href="tel:+441934000000" className="hover:text-white transition-colors font-semibold">
                    01934 000 000
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <IconMail />
                  <a href="mailto:info@conairextract.co.uk" className="hover:text-white transition-colors break-all">
                    info@conairextract.co.uk
                  </a>
                </div>
              </address>
              <div className="mt-7">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-2">Hours</p>
                <p className="text-sm text-white/45">Mon – Fri: 07:30 – 18:00</p>
                <p className="text-sm text-white/45">Emergency cover available</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          {/* @section: footer-bottom */}
          <div
            className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <p>
              © {new Date().getFullYear()} ConAir Extract Solutions Ltd. All rights reserved.
              Registered in England &amp; Wales.
            </p>
            <nav className="flex items-center gap-5" aria-label="Legal links">
              {["Privacy Policy","Terms & Conditions","Cookie Policy"].map((l) => (
                <a key={l} href="#" className="hover:text-white/60 transition-colors">{l}</a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
