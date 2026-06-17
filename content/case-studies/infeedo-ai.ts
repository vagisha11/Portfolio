export const inFeedoAI = {
  id: 'infeedo-ai',
  title: 'InFeedo AI Assist: Competing on Differentiation, Not Parity',
  company: 'InFeedo',
  hook: 'Entered a crowded AI-powered employee engagement space by choosing which USPs to own, not which features to match.',
  tags: ['Competitive Strategy', 'AI Product', 'Feature Prioritization'],
  thumbnail: '/case-studies/infeedo-thumb.jpg', // Placeholder
  year: '2024',

  context: {
    title: 'Four Competitors. One Positioning Question.',
    body: `InFeedo was building AI Assist in a space already occupied by established players. The temptation: match competitors feature-for-feature to claim "parity," then differentiate later.

**The risk:** Spreading engineering thin across 10+ features to achieve breadth, rather than owning 2–3 features deeply enough to be genuinely better.

**The stakes:** In a crowded market, "we do what they do, plus..." is a weak wedge. Users don't switch for incremental improvements — they switch when something is *substantially* better on the dimension they care about most.`
  },

  problem: {
    title: 'Breadth vs. Depth',
    body: `Feature gap analysis against four named competitors surfaced 12+ potential features spanning:
- Sentiment analysis
- Pulse surveys
- Attrition prediction
- AI-driven action recommendations
- Manager coaching nudges
- Anonymous feedback loops
- Integration depth (Slack, Teams, HRIS)

Every competitor had a slightly different feature bundle. No clear "table stakes" emerged — meaning we *could* justify building anything.

**The trap:** Chasing feature parity across all dimensions would yield a product that's "pretty good" at everything and differentiated at nothing. In enterprise SaaS, "pretty good at everything" loses to "clearly the best at X."`
  },

  hardCall: {
    title: 'Which Two Bets to Make',
    body: `Engineering had capacity to ship 2–3 differentiated features deeply in the next 6 months, or 6–8 features at "good enough" depth.

**The tradeoff:** Compete on breadth (feature parity) vs. compete on depth (2–3 USPs done substantially better).

**What I chose:**
Focus on **two specific USPs** with clear differentiation in the market:
1. **Employee Communication & Announcements with GenAI copilot** — Unique approach competitors hadn't nailed: AI-powered content generation + native delivery in collaboration channels (Teams/Slack) to push conversion from 10% → 30%+
2. **Knowledge Copilot (Self-Improving AI)** — Measurably better execution on a known pain point: continuous learning system that auto-generates knowledge articles from unanswered queries, reducing HR effort while improving containment rate

**What I deliberately deprioritized:**
- Feature-for-feature matching on dimensions where we'd be "me-too"
- Building integrations broadly before proving core value
- Advanced analytics dashboards (postponed to Phase 2)

**Why this mattered:** I bet that being *meaningfully better* on 2 dimensions would win more deals than being *slightly worse* on 8. Customers evaluate vendors on "does this solve my top problem better than alternatives," not "does this have 90% of the feature list."

The prioritization framework: **differentiation beats parity. Depth beats breadth.**`
  },

  solution: {
    title: 'The 90-Day Roadmap',
    body: `**Phase 1: Ship the Two USPs**
- Deep implementation of USP #1 with measurable customer outcome
- Deep implementation of USP #2 with competitive benchmarking

**Phase 2: Measure & Iterate**
- 90-day measurement plan tracking:
  - Customer adoption rate per USP
  - Competitive win rate (tracked via sales feedback)
  - Feature request volume (are customers asking for parity features, or asking for *more depth* on the USPs?)

**Instrumentation from day one:**
- Track usage per feature to validate which USP actually drove adoption
- Measure time-to-value for each workflow
- Run head-to-head demos vs. competitors to validate differentiation claims`
  },

  outcome: {
    metrics: [
      'Employee communication open rates increased to 35%+ (vs 10% email baseline) with GenAI-assisted content',
      'Knowledge base containment rate improved 5+ percentage points through self-learning AI pipeline',
      'HR content creation time reduced by 30% with GenAI copilot; manual query resolution time down 25%'
    ],
    reflection: `This case study reinforced a principle: **in crowded markets, trying to compete everywhere guarantees you'll differentiate nowhere.** Feature parity feels safe — "we can't lose a deal for lacking X" — but it's a trap. Customers don't buy the longest feature list; they buy the product that's *substantially better* at solving their specific problem.

The hard call was accepting that we'd lose some deals for lacking features competitors had. But we'd win the deals that mattered — where our differentiation was the deciding factor.`
  }
};
