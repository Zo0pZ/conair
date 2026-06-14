# Design Critique: conair-extractsolutions.co.uk

**Reviewed**: 3 June 2026  
**Audit stage**: Existing live site  
**Overall verdict**: The site communicates the business exists, but actively undermines trust with potential customers. It needs a redesign, not a refresh.

---

## What Works ✅

Before the problems — there are genuine positives to build on:

- **Contact info is front and centre.** Phone and email in the header is exactly right for a local service business. This is the right instinct.
- **Real client names in the footer.** "Hadley's at Number One", "The Old Vicarage Nursing Home" — these are trust signals. They're currently buried but the asset is there.
- **The teal brand colour (#3FB7B7) is distinctive.** It's clean and professional. It just isn't used where it matters.
- **Navigation is logical.** The page labels (About, Why Clean, Services, Testimonials, Gallery, Contact) match what a new visitor would want.
- **The before/after concept is strong.** Showing the results of your work is exactly the right evidence — it just needs better execution.

---

## 1. First Impression (2 seconds)

**What the eye goes to first**: The logo and header contact strip — then immediately to the black voids either side of the content. On any screen wider than ~1,000px (which is most modern laptops and desktops), the site appears as a narrow strip of content floating in a sea of pure black.

**The problem**: This layout was designed for 1024px screens in 2013. On a modern 1440px+ screen it looks like a broken page, not a professional business. The first emotional reaction is *dated*, which translates to *untrustworthy* for a service business asking for access to commercial kitchens.

**The hero slider is the wrong opening move.** It auto-rotates through images labelled "Before Canopy Cleaning process" and "Before Extraction Cleaning process." These show dark, greasy, dirty equipment — which is the problem you solve, not the solution you're selling. A first-time visitor with no context could scroll away thinking this is a gallery of failures, not evidence of capability.

**There's no visible call to action above the fold.** Nothing on the visible screen says "get a quote", "call us", or "book a clean." The phone number is in the header but doesn't stand out as actionable. A B2B service buyer visiting for the first time has no obvious next step.

**Fix**: Replace the slider with a split hero — headline on the left ("Commercial Kitchen Extract Cleaning in Somerset & Bristol"), a clear after-photo on the right, and a teal "Get a Free Quote" button. Immediately communicates purpose, evidence, and action.

---

## 2. Usability

### No primary CTA
There is no button on the homepage that says "get in touch", "request a quote", or "book a clean." The only conversion path is to click "Contact Us" in the navigation — which leads to a **404 error page**. Any visitor motivated enough to enquire hits a dead end.

**Fix**: Add a teal CTA button ("Get a Free Quote — Call 01934 528 450") in the hero and at the bottom of every page. Restore the contact page immediately.

### The slider is a usability trap
Auto-rotating sliders have been shown to have near-zero click rates and actively confuse users who try to read the content before it rotates away. The before/after concept works better as a static side-by-side comparison section.

### Four-column section is too cramped
The content below the slider splits into four equal columns inside a 980px fixed container — each column is roughly 230px wide. The body text is **13px Arial**, which is below the recommended 16px minimum and is genuinely difficult to read at the column widths available. "OUR SERVICES" just says "All our work is fully insured and quality assured" with no links to actual service pages.

**Fix**: Reduce to two columns (or a single column with icons), increase font to 16px, and make "Our Services" a proper list linking to individual service pages.

### Navigation "Contact Us" goes to a 404
This has been flagged in the SEO audit but it's equally a UX failure. Every piece of traffic driven to this page — from Google, from word of mouth, from the footer phone number — has "Contact Us" as its destination, and it's broken.

### Footer "Free Quotation" is just a phone number
The footer labels a section "Free Quotation" but delivers nothing except a phone number repeated from the header. There's no form, no link, no CTA. This is a missed conversion opportunity on every page.

---

## 3. Visual Hierarchy

### Reading order is unclear
The eye travels: logo → header contact → nav → slider → four small columns → footer. There is no hierarchy that guides a visitor toward an action. Every section has roughly equal visual weight.

The four-column section below the slider has four headings in ALL CAPS at the same size and weight — "KITCHEN EXTRACT CLEANING SPECIALISTS", "WHY CLEAN KITCHEN EXTRACT SYSTEMS?", "OUR SERVICES", "THE BENEFITS OF A CONAIR CLEAN:" — none is more prominent than the others. The visitor doesn't know where to focus.

### The most important headline is the weakest one
"KITCHEN EXTRACT CLEANING SPECIALISTS" is the closest thing to a value proposition on the page. It's in a cramped 230px column in small ALL CAPS text — visually the same weight as a footer label. This should be the H1 headline in the hero, at 40–48px, with the service area underneath.

### Checklist benefits are good but invisible
The four benefit points ("Reduced risk of fire", "Compliant with insurance", "Improved hygiene", "Minimise breakdowns") are exactly the right things to tell a potential customer. They're in 11–12px text in the bottom-right corner of the page, with tiny checkbox icons. These belong above the fold, next to the CTA.

### Whitespace is absent
The 980px container has content squeezed into every available pixel. There is no breathing room around sections, which makes everything feel cramped and hard to scan. More whitespace would actually make the content feel more substantial, not less.

---

## 4. Consistency

### Brand name is spelled three different ways
On the same page, the business is referred to as:
- "ConAir extract Solutions" (logo area, some headings)
- "Con Air Extract Solutions" (other headings, title tag)
- "ConAir Extract Solutions Limited" (footer copyright)

This erodes trust — it suggests a lack of attention to detail, which is the opposite of what a cleaning business wants to project.

**Fix**: Decide on one name and apply it everywhere. "Con Air Extract Solutions" (two words, capital E, capital S) appears to be the registered form.

### The teal colour is only used in the footer
The brand's most distinctive visual element — the teal `#3FB7B7` — appears exclusively on the service buttons in the footer. It isn't used for CTAs, links, highlights, or any above-the-fold content. This means the brand colour has no functional role in guiding user attention.

### Service button sizes are inconsistent
In the footer, the teal service pill buttons vary in size: "Cleaning" and "Extraction" are large, "Ductwork" is small, "Kitchen Ventilation Cleaning" wraps. This suggests no system was applied — they were added one by one.

### Section heading styles are inconsistent
- Main section headings: `font-size: 16px`, normal weight, ALL CAPS (via CSS `text-transform`)
- Slider caption: `font-size: 32.5px`, bold, white on dark
- H3: `font-size: 16px`, normal weight, black

The heading scale doesn't create a meaningful typographic hierarchy.

---

## 5. Accessibility

| Issue | Detail | Fix |
|-------|--------|-----|
| Body text 13px | Below 16px recommended minimum; fails WCAG at small column widths | Set `body { font-size: 16px }` |
| `maximum-scale=1` in viewport | Prevents pinch-to-zoom for users with visual impairments — WCAG 2.1 AA failure (SC 1.4.4) | Remove `maximum-scale=1` |
| No keyboard focus styles visible | Interactive elements show no visible focus ring | Add `:focus-visible` outline styles |
| Auto-rotating slider | Content changes without user control — WCAG 2.2.2 failure (Pause, Stop, Hide) | Add a pause button, or replace with static content |
| 1 image missing alt text | An `<img>` has no alt attribute | Add descriptive alt text |
| Colour contrast — body text | `rgb(85,85,85)` (#555) on white = 5.74:1 — passes AA for normal text | ✅ This is fine |
| Colour contrast — nav text | White on transparent over dark background — need to verify against actual bg | Check nav background colour |
| Touch targets | Navigation links and slider arrows likely below 44×44px recommended minimum | Increase tap target size for mobile |

---

## Priority Fixes

### Do immediately (under 1 hour each)

1. **Restore the contact page** — every conversion path on the site is broken right now
2. **Add a CTA button** to the hero area — even just a linked phone number in a teal button
3. **Increase body font to 16px** — single CSS change, immediately improves readability
4. **Remove `maximum-scale=1`** from the viewport meta tag — accessibility fix
5. **Pick one brand name spelling** and apply it to the title, logo alt text, and footer

### Short-term redesign priorities (1–2 days)

6. **Replace the slider with a static hero** — headline, subtext, after-photo, and CTA button
7. **Move the four benefits above the fold** — they're the best copy on the site
8. **Expand the layout to full-width** — remove the fixed 980px container and let the design breathe
9. **Apply the teal colour to CTAs and links** throughout, not just the footer
10. **Fix the mobile layout** — the site doesn't reflow at mobile width despite having a viewport tag; it needs responsive CSS

### Longer-term

11. **Replace the before/after slider concept** with a proper gallery or side-by-side comparison component
12. **Add a contact form** above the fold (not buried on a separate page)
13. **Establish a proper type scale** — a minimum of H1, H2, H3, body, and small with consistent sizes and weights
14. **Apply consistent spacing** — define a spacing unit (e.g. 8px grid) and use it throughout

---

## One-Paragraph Summary for a Developer Brief

The site needs a responsive rebuild. The core issues are: a fixed 980px layout that looks broken on modern screens, no call-to-action connected to a working contact method, body text too small to read comfortably, and a visual hierarchy that gives equal prominence to everything (meaning nothing stands out). The brand colour and logo are good assets to keep. The rebuild should be mobile-first, use the teal brand colour for CTAs, increase body font to 16px, put "Get a Free Quote" above the fold with a working contact form or phone link, and replace the auto-rotating slider with a static hero that shows an after-photo and a clear headline.
