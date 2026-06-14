# Sympl Website Progress

Last updated: 2026-06-14

## Current State

- Homepage is built in `index.html`.
- Clients & Partners page is built in `sympl-clients-partners.html`.
- Service pages are built as:
  - `sympl-bookkeeping-payroll.html`
  - `sympl-reporting-compliance.html`
  - `sympl-cfo-advisory.html`
- Who We Serve pages are built as:
  - `sympl-arts.html`
  - `sympl-settlement.html`
- Shared proof/testimonial/FAQ/final CTA/footer components live in:
  - `sympl-components.css`
  - `sympl-components.js`
- Final CTA agenda card is reusable as `<sympl-cta-agenda>` and is used inside `<sympl-final-cta>` plus the homepage final CTA.
- Brand guide reviewed: `sympl-brand-guide.html`.
- Competitor workbook reviewed: `Sympl_Competitor_Analysis.xlsx`.

## Recent Who We Serve Work

- Added sector-specific proof/testimonial sections.
- Restored testimonial design to wide white cards with slider arrows.
- Added circular client image/initial placement.
- Added FAQ on Mist/light blue background.
- Added final CTA and footer to both sector pages.
- Fixed navigation between homepage and sector pages.
- On mobile, “What we do about it” visuals now consistently appear below each step.

## Current Design Rules To Preserve

- Calm, plain-English, nonprofit-specific copy.
- No generic finance jargon when sector language is better.
- Use concrete finance artifacts: grant tracker, payroll allocation, board package, cash forecast.
- Keep pages focused and not too long.
- Use section backgrounds to create rhythm: Paper, Tan, Mist, Inkwell.
- CTAs stay low-pressure: “Book a free review”, “See how it works”, “Get a quote”.
- Spacing should generally follow a 4px rhythm.

## Clients & Partners Page Direction

- Built as `sympl-clients-partners.html`.
- Purpose: credibility, auditor/referral trust, and a clear path for recommendations.
- Structure:
  - Hero with people mosaic (same grid as homepage, client/partner photo placeholders).
  - Client list with approved names/placeholders and sector tags.
  - Auditor partners section with partner placeholders and audit handoff process.
  - Recommendation section for EDs, board treasurers, auditors, CPAs, and nonprofit advisors.
  - Testimonials, final CTA, and footer.
- Keep it proof-oriented, not a long directory.

## Competitor Notes For Services Section

### Young Associates

- Positioning: bookkeeping, payroll, and financial consulting for Canada’s arts, charity, and nonprofit sectors.
- Useful takeaway: sector credibility first, services second.
- Avoid copying: do not make the page feel like a legacy WordPress services list.

### OTUS / Nonprofit CFO

- Service structure is very complete but too long for Sympl’s current direction.
- Useful patterns:
  - Split major services into clear buckets: bookkeeping, CFO, assessment/custom projects.
  - Include “when this is useful” language.
  - Add a short FAQ near the bottom.
- Avoid copying:
  - Too many service subsections.
  - Long explanatory text blocks.
  - Heavy resource/event/podcast ecosystem on the service page.

### Impact Finance Advisory

- Strong concise structure:
  - Hero with clear promise.
  - Why clients trust us.
  - Three service cards.
  - “Not sure what you need?” consultation CTA.
  - Short impact examples.
- Useful takeaway: keep services compact and decision-oriented.

### Charity Essentials

- Simple service list: bookkeeping, accounting, fractional CFO, financial analysis, IT.
- Strong testimonial/social proof volume.
- Useful takeaway: service cards are easy to scan.
- Avoid copying: too many testimonials/FAQ entries on a service page; it becomes long quickly.

## Recommended Sympl Services Direction

Goal: build separate service pages so each service gets proper cards, detail, and proof without making one long, convoluted services page.

Do not split services into “one-off” and “recurring” pages. That framing makes the offering harder to understand. Instead, group by the buyer’s problem and the finance function they need supported.

Primary service pages:

1. `sympl-bookkeeping-payroll.html`
   - Bookkeeping & Payroll
   - Covers monthly books, payroll coordination, reconciliations, allocations, and cleanup when needed.
   - This should be the first service page to build because it is the clearest entry point from competitors like Young Associates and Charity Essentials.

2. `sympl-reporting-compliance.html`
   - Reporting & Compliance
   - Covers board reports, funder/grant reports, restricted fund tracking, audit prep, year-end support, and compliance rhythm.
   - This should feel especially relevant to arts organizations and settlement agencies.

3. `sympl-cfo-advisory.html`
   - CFO & Advisory
   - Covers budgets, forecasts, cash flow planning, board/ED finance support, scenario planning, and finance decisions.
   - This should feel like the growth-stage layer, not a separate premium brochure.

Systems, migration, cleanup, and digital transformation should appear as supporting sections inside the relevant service page unless the site later needs a dedicated page. Avoid turning systems work into a fourth long page too early.

## Service Page Template

Each service page should be short enough to scan but detailed enough to sell the service.

1. Hero
   - Service-specific headline.
   - One plain-English paragraph.
   - CTAs: “Book a free review” and a secondary relevant link.

2. What This Includes
   - 4 to 6 cards max.
   - Use concrete deliverables, not vague benefits.

3. Visual Artifact
   - Small custom visual tied to the service: close checklist, payroll allocation, grant report, board pack, forecast view.
   - Should make the service feel tangible.

4. You Might Need This If
   - 4 to 5 sharp signs/problems.
   - Keep copy specific to nonprofit operations.

5. How It Works
   - 3 steps max.
   - Same overall rhythm across service pages for consistency.

6. Proof / FAQ
   - Use one compact proof strip or testimonial.
   - 4 FAQ questions max.

7. Final CTA / Footer
   - Reuse current final CTA and footer components.

## Next Build Direction

- Refine the three service pages visually and in copy.
- Use `sympl-bookkeeping-payroll.html` as the approved base template.
- Homepage Services nav/dropdown now points to all three service pages.
- Keep each page around 5 to 7 sections.
- Reuse components and visual language from the Who We Serve pages.
