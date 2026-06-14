# ConAir Extract Solutions — Decision Log

A running record of every major choice, recommendation, and conclusion reached during this project. Reference before making new suggestions.

---

## Site Architecture

| # | Decision | Choice Made | Rationale | Date |
|---|----------|-------------|-----------|------|
| A1 | Tech stack | Single-file HTML + Tailwind CSS CDN (play script) | No build pipeline, easy hosting anywhere, client-editable | Session 1 |
| A2 | Page structure | Homepage (`index.html`) + `services/` subdirectory + `areas/` subdirectory | Clean URL structure, enables local SEO targeting, standard site tree | Session 2 |
| A3 | Component sharing | Shared nav/footer/head extracted to `conair_components.json` for generator script | Avoids manual duplication across 14 pages; any future nav change only needs one generator re-run | Session 2 |
| A4 | Sitemap | `sitemap.xml` at root, 15 URLs (homepage + 10 services + 4 areas) | Standard Google Search Console requirement | Session 2 |

---

## Design & Brand

| # | Decision | Choice Made | Rationale | Date |
|---|----------|-------------|-----------|------|
| D1 | Colour palette | Black `#0c0c0c` bg / `#141414` cards / `#00b4a2` teal accent / white text | Matches ConAir's existing brand identity (black/white/grey/teal) | Session 1 |
| D2 | Typography | Inter (Google Fonts) — weights 400/500/600/700/800/900 | Clean, professional, highly legible on dark bg; widely used in trade/B2B sites | Session 1 |
| D3 | WCAG target | 2.2 AA compliance throughout | Legal best practice for commercial websites; protects client from accessibility complaints | Session 1 |
| D4 | Mobile-first | All layouts mobile-first responsive; min tap target 44px | Majority of search traffic is mobile; Google mobile-first indexing | Session 1 |
| D5 | Card hover style | `glow-card` — translateY(-5px) + teal border glow on hover | Subtle interactivity that reinforces brand colour without being garish | Session 1 |
| D6 | CTA button | Primary = teal `#00b4a2` fill, text `#0c0c0c`; Secondary = transparent + subtle border | High contrast; primary action is unambiguous | Session 1 |

---

## Content & Copy

| # | Decision | Choice Made | Rationale | Date |
|---|----------|-------------|-----------|------|
| C1 | Hero description | "Professional commercial kitchen ventilation cleaning across Bristol & Somerset. Qualified in ventilation hygiene to National Occupational Standards BSEV11, in line with BESA TR19 & NAADUK. Protecting your business from fire risk and failed inspections." | Client-specified; leads with geography, qualification, and benefit | Session 2 |
| C2 | Services count | 9 cards on homepage (10 services; Ductwork Alterations + Filter Supply share one card on homepage, have separate pages) | Grid works best in 3×3 on desktop; individual pages give each service full SEO treatment | Session 2 |
| C3 | CTA wording | "Get a Quote" everywhere (not "Free Quote" or "Free Quotation") | Client decision: some quotes incur a small fee for distance/fuel | Session 2 |
| C4 | Night work / working hours | Removed entirely | Client instruction: no longer accurate | Session 2 |
| C5 | Turnaround time claim | "cleaned and certified within days" removed | Client instruction: bookings are typically 1–2 months ahead | Session 2 |
| C6 | Testimonials | Left in place; client flagged as potentially outdated | Client to review and update separately | Session 2 |
| C7 | "overnight" in testimonial | Replaced with "They were professional throughout, minimal disruption" | Client instruction: no references to night work anywhere | Session 2 |

---

## SEO

| # | Decision | Choice Made | Rationale | Date |
|---|----------|-------------|-----------|------|
| S1 | SEO page format | Standalone HTML files matching homepage design (not a CMS) | Consistent with existing single-file architecture; no server required | Session 2 |
| S2 | Schema types used | `Service` + `FAQPage` + `BreadcrumbList` on service pages; `LocalBusiness` + `FAQPage` + `BreadcrumbList` on area pages | Covers rich result eligibility for FAQ, breadcrumb, and local pack | Session 2 |
| S3 | FAQ count | 3–4 per page | Minimum for FAQ schema eligibility; enough to cover real user intent without padding | Session 2 |
| S4 | Area pages chosen | Bristol, Weston-super-Mare, Taunton & Bridgwater, Clevedon/Nailsea/Burnham | Client-specified target areas | Session 2 |
| S5 | Canonical URLs | Set per page, pointing to `https://www.conair-extractsolutions.co.uk/...` | Prevents duplicate content issues if site is ever mirrored | Session 2 |
| S6 | Internal linking | Homepage service cards → service pages ("Learn more →"); homepage footer → individual service + area pages | Passes PageRank to new pages; improves crawlability | Session 2 |
| S7 | Breadcrumbs | Home › Services › [Service Name] on service pages; Home › Service Areas › [Area] on area pages | Matches BreadcrumbList schema; improves UX and search appearance | Session 2 |

---

## Technical

| # | Decision | Choice Made | Rationale | Date |
|---|----------|-------------|-----------|------|
| T1 | Relative paths on sub-pages | `../index.html#anchor` for nav links; `../` for logo home link | Pages live in subdirectories; absolute paths would break on local preview | Session 2 |
| T2 | JS on sub-pages | Stripped to nav toggle + scroll reveal only (no slider/form JS) | Sub-pages have no slider or quote form; smaller JS footprint | Session 2 |
| T3 | Footer layout | 3-column grid (`sm:grid-cols-2 lg:grid-cols-3`) | Removed "Opening Hours" column (no longer shown); clean 3-col fits NAP + Services + Areas/Accreditations | Session 2 |
| T4 | Access doors card | FireMac mentioned prominently (accredited installer) | Key differentiator; FireMac is the recognised standard referenced by fire risk assessors | Session 2 |

---

## Open Questions / Deferred Decisions

| # | Question | Status |
|---|----------|--------|
| OQ1 | Testimonials — are existing ones still accurate? | **Client to review**. Left in place for now. |
| OQ2 | Real photography for before/after slider | Currently uses Unsplash placeholder images. Client to supply own photos when available. |
| OQ3 | Google Analytics / tracking | Not implemented. Client to specify preferred analytics tool. |
| OQ4 | Actual domain / hosting | Pages built with `https://www.conair-extractsolutions.co.uk/` as canonical base. Confirm this is the live domain before publishing. |
| OQ5 | Google Business Profile | Schema uses `+441934528450` and Weston-super-Mare address. Ensure GBP listing matches exactly. |
| OQ6 | Additional area pages | Wells & Glastonbury and "All of Somerset" appear in footer but have no dedicated area pages. Add if local SEO for those areas becomes a priority. |

---

## How to Use This Log

- **Before making a new recommendation**: check this log for any prior decision that might conflict.
- **When a client changes their mind**: update the relevant row and note the date + reason.
- **When a new question is resolved**: move it from Open Questions into the relevant table above.
