export const uberGifts = {
  id: 'uber-gifts',
  title: 'Uber Gifts: Instant Joy, Delivered',
  company: 'Uber (Concept)',
  hook: 'A 0→1 product vision exploring how Uber could own the instant gifting moment by leveraging its delivery infrastructure.',
  tags: ['0→1 Product', 'Market Sizing', 'Competitive Strategy'],
  thumbnail: '/case-studies/uber-thumb.jpg', // Placeholder
  year: '2024',

  context: {
    title: 'Gifting on Impulse Is Broken',
    body: `You remember a friend's birthday at 6pm. You open an app. It's either fast-but-generic (DoorDash sending a gift card), or beautiful-but-takes-3-days (Etsy). Nobody has solved both.

**The core tension:** Speed vs. Selection. The faster the delivery, the worse the gift options. No platform has cracked both — yet.

**Market opportunity:**
- $23B online personal gifting market in the US
- Growing 3× faster than physical retail gifting (11% CAGR)
- Post-COVID habit shift: remote gifting is now normalized

**Uber's unfair advantage:** 34% US market share on Uber Eats + existing delivery fleet = zero infrastructure cost to pilot.`
  },

  problem: {
    title: 'The White Space Nobody Owns',
    body: `Three categories of players exist, each with fatal gaps:

**Instant Gifting (DoorDash, Sugarwish)**
- Only food items, gift cards, digital gifts
- No physical gift options, no personalization

**Personalized Gifting (Etsy, Shutterfly)**
- Minimum 6-hour window — no spontaneity
- High delivery costs, poor tracking

**Gift Marketplaces (Amazon, Walmart)**
- Not associated with gifting in users' minds
- 2–5 day delivery standard, no personalization layer

The gap: No player offers instant delivery + broad selection + personalization. That's the white space Uber Gifts targets.`
  },

  hardCall: {
    title: 'Focus or Feature Creep',
    body: `The temptation was to launch with everything: instant delivery, broad selection, personalization, *and* a "Green Gifts" sustainability category.

**The tradeoff:** Launch with a focused MVP that proves the core hypothesis, or launch broad with every nice-to-have and risk shipping late with unproven assumptions.

**What I chose:**
1. **Instant + Broad Selection** — Partner with Etsy and curated merchants for same-day delivery via Uber's fleet
2. **Personalization at Speed** — Simple personalized note feature (no 6-hour lead time)

**What I deliberately excluded from MVP:**
- Green Gifts / sustainability category
- Advanced customization features
- Two-way sync with gift registries

**Why this mattered:** The only bet worth testing was whether Uber could solve the **speed vs. selection trade-off** using its delivery infrastructure. Adding a sustainability angle or deeper customization would have diluted focus, added merchant complexity, and risked shipping late.

I resisted feature creep in favor of ruthlessly testing the one hypothesis that mattered: can Uber own instant gifting?`
  },

  solution: {
    title: 'The MVP Journey',
    body: `**User flow:**
1. Discovery — "Gifts" tab in Uber Eats home, search hints
2. Browse — Category cards (Plants, Jewelry, Decor, Wrap)
3. Item Detail — Product info pulled from partner APIs, estimated delivery time
4. Checkout — Receiver name + personalized note field

**Pilot market:** Miami, FL (55% Uber Eats market share, highest usage in US)

**Success metrics (phased):**
- **Phase 1 (0–3 months):** Discoverability, usability, NPS
- **Phase 2 (3–6 months):** Retention, MAU growth, avg products viewed per session

**Honest trade-offs accepted:**
- App complexity increases (heavier UI, longer load times)
- Delivery fleet strain during peak seasons
- Discovery friction for first-time users (mitigated with 'NEW' badge)`
  },

  outcome: {
    metrics: [
      'Conceptual case study — not implemented',
      'Bottom-up market sizing: ~$200M addressable in Miami pilot',
      'Competitive gap analysis validated white space opportunity'
    ],
    reflection: `This exercise reinforced the importance of **strategic restraint in 0→1 products.** The most valuable discipline wasn't generating ideas — it was killing the ones that didn't directly test the core hypothesis. A focused MVP proves the wedge; everything else is distraction until that wedge works.`
  }
};
