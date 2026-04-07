# Local SEO Analysis — lulusstreetfood.se
**Updated:** April 2026 (v2)  
**Previous version:** April 2026 (v1)  
**Skill:** claude-seo:seo-local (March 2026 edition)

---

## Local SEO Score

| Version | Score | Change |
|---------|-------|--------|
| v1 (before any fixes) | 26/100 | — |
| v2 (current, after all code changes) | **50/100** | +24 pts |
| Ceiling without off-site action | ~55/100 | GBP (25%) + Reviews (20%) = 45% require real-world work |

### Score Breakdown

| Dimension | Weight | v1 Score | v2 Score | v1 pts | v2 pts | Change |
|-----------|--------|----------|----------|--------|--------|--------|
| GBP Signals | 25% | 2/10 | 2/10 | 5.0 | 5.0 | — |
| Reviews & Reputation | 20% | 2/10 | 2/10 | 4.0 | 4.0 | — |
| Local On-Page SEO | 20% | 4/10 | 8/10 | 8.0 | 16.0 | **+8.0** |
| NAP Consistency | 15% | 1/10 | 9/10 | 1.5 | 13.5 | **+12.0** |
| Local Schema Markup | 10% | 5/10 | 9/10 | 5.0 | 9.0 | **+4.0** |
| Local Link & Authority | 10% | 2/10 | 2/10 | 2.0 | 2.0 | — |
| **Total** | | | | **25.5** | **49.5** | **+24** |

> GBP Signals and Reviews cannot be improved from code alone — they require claiming and managing the actual listings. Those two categories represent 45% of the total score.

---

## Business Type — UPDATED
**Hybrid** (updated from SAB)  
Physical address confirmed: **Nygatan 71, 462 31 Vänersborg**.  
Serves all of Sweden. Both `address` (for trust/verification) and `areaServed` (for coverage) are now correctly set in schema.

## Industry Vertical
**Custom vehicle manufacturing / Professional Service**  
`ProfessionalService` schema type remains correct and appropriate.

---

## What Was Fixed Since v1

| # | Item | Status | Where |
|---|------|--------|-------|
| 1 | Phone placeholder replaced with real number | ✅ Done | Footer, schema, BottomCTA |
| 2 | Email updated to `contact@lulusstreetfood.com` | ✅ Done | Footer, all schemas |
| 3 | Physical address added to footer HTML | ✅ Done | `Footer.tsx` in `<address>` |
| 4 | `telephone` added to LocalBusiness schema | ✅ Done | `layout.tsx` |
| 5 | `email` added to LocalBusiness schema | ✅ Done | `layout.tsx` |
| 6 | `address` with `PostalAddress` added to schema | ✅ Done | `layout.tsx` |
| 7 | `geo` coordinates added (58.37820, 12.32345) | ✅ Done | `layout.tsx` |
| 8 | `openingHoursSpecification` Mon–Fri 08:00–17:00 | ✅ Done | `layout.tsx` |
| 9 | `areaServed` expanded to 10 named Swedish cities | ✅ Done | `layout.tsx` |
| 10 | Semantic `<address>` element in footer | ✅ Done | `Footer.tsx` |
| 11 | `tel:` click-to-call link in footer | ✅ Done | `Footer.tsx` |
| 12 | `tel:` click-to-call link in contact section | ✅ Done | `BottomCTA.tsx` |
| 13 | `mailto:` link in footer | ✅ Done | `Footer.tsx` |
| 14 | `FAQPage` schema (6 Q&As for AI/LLM citation) | ✅ Done | `layout.tsx` |
| 15 | `BreadcrumbList` schema on `/policy` | ✅ Done | `policy/page.tsx` |
| 16 | Villkor page (`/villkor`) with legal terms | ✅ Done | `app/villkor/page.tsx` |
| 17 | English page (`/en`) with hreflang alternate | ✅ Done | `app/en/` |
| 18 | `robots.ts` blocking `/login`, `/api/` | ✅ Done | `app/robots.ts` |
| 19 | `sitemap.ts` with image entries | ✅ Done | `app/sitemap.ts` |

---

## Remaining Issues

### 🔴 Critical (Off-site — no code can fix these)

#### 1. Google Business Profile not claimed
**Impact:** GBP = 32% of local pack weight. Single biggest ranking factor.  
**Action:**
1. Go to business.google.com → claim `Nygatan 71, 462 31 Vänersborg`
2. Primary category: **"Custom Truck Builder"** or **"Vehicle Customization Service"**
3. Secondary: "Food Equipment Supplier", "Trailer Dealer", "Industrial Equipment Supplier"
4. Upload 20+ photos (vehicles, interior shots, workshop, team)
5. **Do NOT set website URL to homepage** (Sterling Sky Diversity Update — risks suppressing organic rankings). Create a dedicated `/om-oss` page and link that instead.
6. Business hours must match `openingHoursSpecification` in schema (Mon–Fri 08:00–17:00)

#### 2. No reviews
**Impact:** 10+ reviews is the "magic threshold" for local pack visibility (Sterling Sky). 0 reviews = near-invisible in map pack.  
**Action:** Build a review request flow. The 18-day rule applies — at least one new review every 18 days to maintain rankings. Do NOT pre-screen customers (Google fake engagement policy + FTC $10,088/violation).

---

### 🟠 High Priority

#### 3. Bing Places not claimed
**Impact:** Bing Places is the primary data source for ChatGPT, Copilot, and Alexa local recommendations. ChatGPT converts at 15.9% vs Google organic at 1.76%.  
**Action:** bingplaces.com — free, 15 min setup. Use exact same NAP as GBP.

#### 4. Apple Business Connect not claimed
**Impact:** Powers Apple Maps, Siri, and Spotlight Search. Usage doubled to 27% in 2026.  
**Action:** register.apple.com/business — free. Especially critical for mobile/iOS users.

#### 5. H1 lacks city/service keyword
**Current H1:** "Utforska framtidens Gatumat"  
**Ideal:** Include "matvagnar" + "Sverige" or "Vänersborg" for local organic.  
**Recommendation:** Add "i Sverige" or change subtitle to include geographic context. Design decision required.

---

### 🟡 Medium Priority

#### 6. `aggregateRating` missing from schema
Enables star ratings in SERPs (+43% CTR, Webstix study). Add once 10+ Google reviews are collected:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "14",
  "bestRating": "5"
}
```
File: `app/layout.tsx` → inside `localBusinessSchema`

#### 7. NAP on auto-generated directories not verified
Ratsit.se, Hitta.se, and Eniro.se auto-generate listings for registered Swedish companies. These may have outdated or incorrect NAP.  
**Action:** Search each site for "Lulu's Streetfood" and request corrections if NAP doesn't match.

#### 8. No GBP posts strategy
GBP posts trigger "Post Justifications" in local pack snippets (direct visibility boost). Aim for 1–2 posts/week after claiming.

#### 9. No "best of" list presence
"Best of" list placements = #1 AI visibility citation factor (Whitespark 2026). Target Swedish food industry lists, matvagn/food truck directories, and local business awards.

---

### 🟢 Low Priority

#### 10. Create a dedicated contact/about page
A `/kontakt` page with embedded Google Map, full NAP, and driving directions reinforces geographic signals. Embedding a Google Map is a trust signal (not a direct ranking factor but strongly correlated).

---

## NAP Consistency Audit — Current State

| Source | Name | Phone | Email | Address |
|--------|------|-------|-------|---------|
| Footer HTML (`<address>`) | Lulu's Streetfood | ✅ +46 73 953 44 72 | ✅ contact@lulusstreetfood.com | ✅ Nygatan 71, 462 31 Vänersborg |
| LocalBusiness JSON-LD | Lulu's Streetfood AB | ✅ +46739534472 | ✅ contact@lulusstreetfood.com | ✅ PostalAddress |
| Organization JSON-LD | Lulu's Streetfood AB | — | ✅ contact@lulusstreetfood.com | — |
| GBP | ❓ Not claimed | ❓ | ❓ | ❓ |
| Bing Places | ❓ Not claimed | ❓ | ❓ | ❓ |

> ⚠️ Minor: Footer displays "Lulu's Streetfood" (without "AB") while schema uses "Lulu's Streetfood AB". This is acceptable — Google tolerates abbreviation variations. However, GBP name must match exactly one of these consistently.

---

## Local Schema Status — Current State

```
ProfessionalService (LocalBusiness subtype)
├── @id:                    ✅ https://lulusstreetfood.se/#business
├── name:                   ✅ "Lulu's Streetfood AB"
├── url:                    ✅ https://lulusstreetfood.se
├── telephone:              ✅ "+46739534472"
├── email:                  ✅ "contact@lulusstreetfood.com"
├── address (PostalAddress):✅ Nygatan 71, 462 31 Vänersborg, SE
├── geo (GeoCoordinates):   ✅ 58.37820, 12.32345
├── openingHoursSpecification: ✅ Mon–Fri 08:00–17:00
├── areaServed:             ✅ Sweden + 10 named cities
├── priceRange:             ✅ "80 000 kr – 200 000 kr"
├── hasOfferCatalog:        ✅ 2 services
└── aggregateRating:        ❌ Missing — add after 10+ reviews

WebSite:                    ✅
Organization:               ✅
FAQPage (6 Q&As):           ✅ — AI/LLM citation ready
BreadcrumbList (/policy):   ✅
```

---

## Citation Presence

| Platform | Status | Priority | Action |
|----------|--------|----------|--------|
| Google Business Profile | ❓ Not claimed | 🔴 Critical | business.google.com |
| Bing Places | ❓ Not claimed | 🟠 High | bingplaces.com |
| Apple Business Connect | ❓ Not claimed | 🟠 High | register.apple.com/business |
| Ratsit.se | ⚠️ Auto-generated, unverified | 🟡 Medium | Verify NAP |
| Hitta.se | ⚠️ Auto-generated, unverified | 🟡 Medium | Verify NAP |
| Eniro.se | ⚠️ Auto-generated, unverified | 🟡 Medium | Verify NAP |
| Yelp.se | ❓ Unknown | 🟡 Medium | Create listing |

---

## Prioritized Action Plan

| # | Priority | Action | Effort | Impact |
|---|----------|--------|--------|--------|
| 1 | 🔴 Critical | Claim + fully optimize Google Business Profile | 2h | +20 pts potential |
| 2 | 🔴 Critical | Launch review generation strategy (18-day cadence) | Ongoing | +10 pts at 10+ reviews |
| 3 | 🟠 High | Claim Bing Places (ChatGPT/Copilot source) | 15 min | AI visibility |
| 4 | 🟠 High | Claim Apple Business Connect (Siri/Maps) | 15 min | iOS/Safari users |
| 5 | 🟠 High | Add location keyword to H1 or hero subtitle | 15 min | Local organic |
| 6 | 🟡 Medium | Add `aggregateRating` to schema once 10+ reviews | 10 min | Star rich result |
| 7 | 🟡 Medium | Verify NAP on Ratsit, Hitta, Eniro | 30 min | Citation consistency |
| 8 | 🟡 Medium | Begin GBP posts (1–2/week) after claiming | Ongoing | Post Justifications |
| 9 | 🟢 Low | Create `/kontakt` page with Google Maps embed | 1h | Geographic signal |
| 10 | 🟢 Low | Target "best of matvagnar" list placements | Ongoing | AI visibility |

---

## Limitations

Static code analysis only. The following cannot be assessed without live tool access:
- Live Google local pack position or geo-grid ranking
- GBP completeness score, review count, and velocity
- Domain Authority / backlink profile → run `/seo backlinks`
- Real-time NAP consistency across all citation sources
- ChatGPT/Perplexity brand mention presence → run `/seo geo`
- Geographic proximity signals (determined at search time)
