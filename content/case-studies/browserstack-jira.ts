export const browserStackJira = {
  id: 'browserstack-jira',
  title: 'Improving Feature Adoption in Enterprise SaaS',
  company: 'BrowserStack',
  hook: 'Diagnosed why a high-value JIRA integration had near-zero adoption — and shipped the fixes that actually moved the needle.',
  tags: ['Diagnostic', 'Enterprise SaaS', 'Adoption Funnel'],
  thumbnail: '/case-studies/browserstack-thumb.jpg', // Placeholder
  year: '2024',

  // Full case study content
  context: {
    title: 'BrowserStack Built It. Nobody Came.',
    body: `BrowserStack's Live and App Live products offer QA engineers a native integration to log bugs directly into JIRA — without leaving the testing console. It's a meaningful workflow shortcut for teams that spend their days context-switching between tools.

But months after launch, adoption was stubbornly low. And it wasn't isolated — it was low across all user segments, all regions, all product versions.

**Why this mattered beyond feature usage:**
- Integrations are BrowserStack's stickiness lever. When QA teams log bugs from inside the platform, it becomes embedded in their daily workflow, not just a tool they open occasionally.
- Low adoption = shallow embedding = higher churn risk. Every bug logged outside BrowserStack is a reason for an enterprise account to question renewal.`
  },

  problem: {
    title: 'The Adoption Cliff',
    body: `The feature never gained traction from day one — a cold start problem, not a sudden drop. No JIRA updates, competitor launches, or market events explained the gap.

The core question: **Where in the journey from 'feature exists' to 'feature is used daily' are users dropping off — and what do we fix first?**

I decomposed adoption into three distinct stages, each with its own diagnostic question:
1. **Conversion** — Did they discover and set it up?
2. **Activation** — Did they use it for the first time?
3. **Usage** — Did they find value and return?

Research revealed the friction: inconsistent OAuth vs. API Token setup flows, missing custom field support, no way to attach additional files, and no view of previously reported bugs.`
  },

  hardCall: {
    title: 'Where I Drew the Line',
    body: `Four potential solutions surfaced from user research. I had to choose what to ship now versus what to hold.

**The tradeoff:** Engineering had capacity for 2–3 features in the next quarter. The fourth — a bug tracking and draft management hub — was the most requested feature, but also the highest effort with unclear ROI.

**What I prioritized:**
1. **Fix setup flow inconsistency (P1)** — High impact, low effort. Conversion bottleneck.
2. **Allow additional file attachments (P2)** — Medium impact, low effort. Activation unlock.
3. **Auto-generate 'Steps to Reproduce' (P3)** — High impact, medium effort. Usage multiplier.

**What I held:**
4. **Bug tracking & draft management hub** — Unclear ROI, high effort. Needs further research before commitment.

**Why this mattered:** I chose to remove blockers in the existing funnel rather than build new capabilities users might never reach. The "cooler" feature request would have been engineering-heavy with no guarantee it solved adoption. I diagnosed where adoption actually broke and fixed that first.`
  },

  solution: {
    title: 'What Moved',
    body: `Each feature launched with an A/B test and a defined success metric:

**Feature 1: OAuth Everywhere**
- Unified the setup flow — no more confusion between OAuth and API Token paths
- **Metric:** Setup completion rate ↑

**Feature 2: Additional Attachments**
- Users could attach session recordings, screenshots, and annotations directly to bug reports
- **Metric:** % bugs with attachments, avg bugs logged per user ↑

**Feature 3: Auto-Generated Steps to Reproduce**
- Session recordings automatically generated structured "Steps to Reproduce" documents
- **Metric:** Avg time per bug ↓, bugs per user ↑

All features rolled out incrementally with hypothesis-driven instrumentation from day one.`
  },

  outcome: {
    metrics: [
      'Setup completion rate improved (measured via A/B test)',
      'Activation rate increased — more users logging ≥1 bug',
      'Average bugs per user per week grew post-launch'
    ],
    reflection: `This case study reinforced a principle: **adoption problems are rarely feature problems.** The integration had all the functionality users claimed they wanted. What it lacked was a frictionless path to first value. By diagnosing the funnel, not just listening to feature requests, we shipped fixes that actually moved retention metrics.`
  }
};
