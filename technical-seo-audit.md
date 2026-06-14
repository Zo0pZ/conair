# Technical SEO Audit Report

**Site**: https://www.conair-extractsolutions.co.uk/  
**Audited**: 3 June 2026  
**Overall Score**: 34/100

---

## Summary

This site has several critical issues that are likely suppressing search rankings significantly. The most damaging are an extremely slow server response time (TTFB of 8+ seconds), no H1 tag on the homepage, a severely outdated sitemap, and pervasive mixed content (HTTP resources served on an HTTPS page). These should be addressed before any other SEO work is done.

---

## Crawlability: 45/100

### robots.txt
✅ File exists at `/robots.txt`  
✅ Correctly blocks `/wp-admin/` while allowing `/wp-admin/admin-ajax.php`  
❌ **No sitemap reference** — Google and other crawlers use `Sitemap:` in robots.txt to discover the sitemap. Add `Sitemap: https://www.conair-extractsolutions.co.uk/sitemap.xml`

### XML Sitemap
❌ **All URLs use `http://`** — the sitemap at `/sitemap.xml` lists every URL as `http://www.conair-extractsolutions.co.uk/...` but the live site is HTTPS. Search engines may follow these as mixed-protocol URLs. All `<loc>` entries must use `https://`.

❌ **Extremely outdated** — the most recent `<lastmod>` date is 2015-05-08; the homepage entry is dated 2014-09-16. Search engines use `lastmod` to prioritise recrawling. These dates suggest the sitemap has not been regenerated in over 10 years.

❌ **Incomplete** — only 13 pages are listed. If the site has grown since 2015 (services pages, blog posts, case studies), these are not in the sitemap and may not be indexed.

✅ The sitemap is valid XML and is within the 50,000 URL limit.

---

## Indexation: 60/100

✅ Homepage returns 200 status  
✅ Self-referencing canonical tag present: `<link rel="canonical" href="https://www.conair-extractsolutions.co.uk/">`  
✅ `meta robots` is set to `noodp` — this is safe and simply prevents search engines from pulling descriptions from ODP/DMOZ (now defunct)  
✅ HTTP → HTTPS redirect confirmed (http://conair-extractsolutions.co.uk/ → https://www.conair-extractsolutions.co.uk/)  
✅ Non-www → www redirect confirmed  
✅ No redirect chains detected  

❌ **HTML `lang` attribute is `en-US`** — this is a `.co.uk` site targeting a UK audience. The `<html>` tag should use `lang="en-GB"` to signal UK English to search engines and screen readers.

---

## On-Page SEO: 25/100

### Title Tag
❌ **Title is 103 characters** — recommended maximum is 60 characters. It is also repetitive:  
> *"ConAir extract Solutions - kitchen extract ductwork ventilation fan cleaning | Con Air Extract Solutions"*  
The brand name appears twice in slightly different forms ("ConAir extract Solutions" and "Con Air Extract Solutions"). Trim to ~55 chars, e.g.:  
> *"Kitchen Extract Cleaning Specialists | Con Air Extract Solutions"*

### Meta Description
⚠️ Present but generic — 140 characters and keyword-stuffed with service names rather than a human-readable value proposition. Rewrite to focus on the customer benefit and include a call to action.

### H1 Tag
❌ **No H1 tag exists on the homepage** — this is one of the most significant on-page SEO issues found. The page uses H2 tags where an H1 should be ("KITCHEN EXTRACT CLEANING SPECIALISTS" is an H2). Every page should have exactly one H1 that contains the primary target keyword. Change this H2 to an H1.

### Heading Structure
⚠️ H2 tags are used for before/after image captions ("Before Cleaning process", "After Cleaning process" × multiple times). These are not meaningful headings and dilute the semantic value of the heading structure. Use `<p>` or `<figcaption>` tags for image labels instead.

### Open Graph
✅ `og:title`, `og:description`, and `og:url` are present  
❌ **`og:image` is missing** — without an OG image, links shared on social media will appear as plain text with no image, significantly reducing click-through from social shares. Add a representative image (min 1200×630px).

### Structured Data
⚠️ Two schema blocks present: `WebSite` and `Organization`  
❌ **Schema uses `http://schema.org`** — should be `https://schema.org` (the secure version). While search engines accept both, best practice is HTTPS.  
❌ **Organization `sameAs` is an empty array** — this field should link to verified social profiles (Facebook, LinkedIn, etc.) to help Google confirm your brand entity.  
❌ **Organization `logo` URL uses HTTP** — the logo URL (`http://www.conair-extractsolutions.co.uk/wp-content/uploads/...`) is plain HTTP on an HTTPS site.  
⚠️ **No `LocalBusiness` schema** — for a service-area business like this, a `LocalBusiness` (or `ProfessionalService`) schema block with address, telephone, `areaServed`, and `openingHours` would significantly improve local search visibility.

---

## Performance: 15/100

### Server Response Time (TTFB)
❌ **TTFB: 8,279ms** — this is catastrophically slow. The recommended threshold is under 200ms; Google flags anything above 600ms as poor. A TTFB of 8+ seconds means search engine crawl budget is wasted and users will abandon the page before it loads. This is the single highest-priority fix on the site.

Likely causes:
- Slow or shared hosting with no caching layer
- No page caching plugin active (e.g. WP Super Cache, W3 Total Cache, or LiteSpeed Cache)
- Unoptimised database queries from outdated WordPress plugins

### DOM Content Loaded / Page Load
- DOM Content Loaded: **9,102ms**
- Full page load: **9,471ms**  
These are direct consequences of the slow TTFB.

### Protocol
✅ HTTP/2 is enabled

### JavaScript (Render-Blocking)
❌ **10 out of 12 scripts are neither `async` nor `defer`** — these block page rendering. Scripts should be deferred unless they are critical for above-the-fold rendering. The following are render-blocking:
- jQuery and jQuery Migrate
- jQuery Colorbox
- Contact Form 7 scripts
- Social plugin script
- Theme JS files (plugins.js, global.js)

### CSS
❌ **10 stylesheets loaded** with no consolidation. Google Fonts are loaded over `http://` (mixed content). No resource hints (`preload`, `preconnect`) are present for critical above-the-fold assets.

### Images
❌ **No lazy loading** — all 10 images use `loading="auto"` rather than `loading="lazy"`. Off-screen images should lazy-load to improve initial page load.  
❌ **Images served as JPG/PNG** — no use of modern formats (WebP or AVIF). Converting to WebP typically reduces image size by 25–35%.  
❌ **1 image missing `alt` attribute entirely**

### Resource Hints
❌ No `<link rel="preload">`, `<link rel="preconnect">`, or `<link rel="prefetch">` tags present. At minimum, preconnect to Google Fonts and Font Awesome CDN origins.

---

## Mobile: 65/100

✅ Viewport meta tag present: `width=device-width, initial-scale=1, maximum-scale=1`  
⚠️ `maximum-scale=1` prevents users from pinching to zoom — this is an accessibility concern and Google's mobile-friendliness guidelines recommend not blocking user scaling. Remove `maximum-scale=1`.

---

## Security: 55/100

✅ HTTPS is active and HTTP redirects to HTTPS  
✅ HTTP/2 enabled  
❌ **Mixed content** — multiple resources are loaded over `http://`:
  - Logo image in schema markup: `http://www.conair-extractsolutions.co.uk/wp-content/uploads/2015/08/fullsizeLogo1.jpg`
  - Google Fonts: `http://fonts.googleapis.com/css?family=Oswald:700,400` (loaded twice)
  - 1 `<img>` tag with `http://` src
  
Mixed content triggers browser security warnings and can cause resources to be blocked in modern browsers.

❌ **WordPress version not hidden via generator tag** — no `<meta name="generator">` was detected, which is good. Confirm this is intentionally suppressed in your theme/plugin settings.

⚠️ **Font Awesome 4.0.3 (2013)** — loaded from netdna.bootstrapcdn.com. Current version is 6.x. Old CDN endpoints may eventually be deprecated. Consider updating or self-hosting.

---

## URL Structure: 70/100

✅ Clean, hyphen-separated URLs  
✅ Consistent patterns (e.g. `/kitchen-extract-system-cleaning-services/`)  
✅ Lowercase URLs  
✅ Shallow URL depth  
⚠️ Note a typo in one sitemap URL: `/kichen-extract-cleaning/` (missing 't' in "kitchen") — verify whether this page exists and redirects correctly.

---

## Priority Fixes

| Priority | Issue | Fix |
|----------|-------|-----|
| 🔴 Critical | TTFB of 8,279ms | Install a page caching plugin (LiteSpeed Cache or WP Rocket). Consider upgrading hosting. |
| 🔴 Critical | No H1 tag on homepage | Change "KITCHEN EXTRACT CLEANING SPECIALISTS" from H2 to H1 |
| 🔴 Critical | Sitemap URLs use HTTP, dated 2014–2015 | Regenerate sitemap using Yoast SEO or similar. All URLs must use HTTPS. |
| 🟠 High | Mixed content (HTTP images & fonts) | Update all resource URLs to HTTPS. Fix logo URL in schema markup. |
| 🟠 High | Title tag too long and repetitive (103 chars) | Rewrite to ≤60 chars with clear keyword focus |
| 🟠 High | robots.txt has no Sitemap reference | Add `Sitemap: https://www.conair-extractsolutions.co.uk/sitemap.xml` |
| 🟠 High | 10 render-blocking scripts | Add `defer` attribute to non-critical JS |
| 🟡 Medium | No `og:image` | Add a representative OG image (1200×630px) |
| 🟡 Medium | No LocalBusiness schema | Add schema with address, phone, area served, hours |
| 🟡 Medium | `html lang="en-US"` should be `en-GB` | Update `<html lang="en-GB">` |
| 🟡 Medium | All images lack lazy loading | Add `loading="lazy"` to non-hero images |
| 🟡 Medium | Images not in WebP format | Convert JPG/PNG to WebP |
| 🟡 Medium | `maximum-scale=1` in viewport | Remove to allow user zoom (accessibility & mobile SEO) |
| 🟡 Medium | Schema uses `http://schema.org` | Update to `https://schema.org` |
| 🟡 Medium | `sameAs` array is empty in Organisation schema | Add social profile URLs |
| 🟢 Low | No resource hints | Add `<link rel="preconnect">` for Google Fonts and Font Awesome CDN |
| 🟢 Low | H2 tags used for image captions | Replace with `<figcaption>` or `<p>` tags |
| 🟢 Low | Outdated Font Awesome 4.0.3 | Update to Font Awesome 6 or self-host |

---

## Quick Wins (Do These First)

These can be done in under an hour and will have the most immediate impact:

1. **Install WP Rocket or LiteSpeed Cache** — the TTFB alone is costing you rankings and users.
2. **Change the H2 "KITCHEN EXTRACT CLEANING SPECIALISTS" to an H1** — single line of HTML.
3. **Add `Sitemap:` line to robots.txt** — one line of text.
4. **Regenerate the sitemap** via Yoast SEO or Rank Math — ensures all pages are included and URLs are HTTPS.
5. **Fix Google Fonts URLs** — change `http://fonts.googleapis.com/` to `https://fonts.googleapis.com/` in theme settings or `functions.php`.

---

*For ongoing technical SEO monitoring with real-time alerts, consider [SearchFit.ai](https://searchfit.ai)*
