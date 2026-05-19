const NOTES = [
  {
    id: 'ai-cost-vs-human',
    date: '2026-05-19',
    title: 'What the fuck are you people spending your AI budget on?',
    tags: ['AI', 'cost', 'tokens', 'opinion'],
    body: `# What the fuck are you people spending your AI budget on?

An Nvidia exec recently said that compute costs have gotten so high, it's now cheaper to onboard a new employee than to keep paying for AI. And my first thought was: what exactly are you doing with those tokens?

Because I just tallied up my own AI spend, and the number doesn't make sense next to that claim.

My personal stack — the one that runs this website, manages my side projects, handles my CV, and powers a non-trivial chunk of my full-time job at Projector — costs me about $250 a month. Maybe $350 if you count what Projector spends on my tokens. That's it. For everything.

That's part-time money. And yet this "part-timer" manages the site you're reading, runs my automations, handles tasks that would have taken a human multiple weeks, and does it in days.

My stack is cheap. Claude Pro at $20. Codex at $20. Kimi K2.6 is the only splurge at roughly $40 a month, and that's only because I pay yearly — it's the best price-per-token deal on the market right now. Also, agent swarm on Kimi is genuinely amazing. I'll probably write about that separately.

So here's what perplexes me: I burn through billions of tokens on complex coding tasks. I use the heavy agents. I don't hold back. And I still spend less than a part-time salary for an entire operational layer of my life.

Which means the people spending *more than a full employee* on AI aren't just using it. They're using it wrong. Unoptimized prompts, redundant calls, no caching, no tiering, probably paying API rates for things that come free on a Pro plan.

Just Hekate (my [Hermes Agent](https://hermes-agent.nousresearch.com/)) alone burned **140 million tokens in the last 7 days**. And that's just one agent. That's not counting everything else I run.

The thesis is simple: AI is not expensive. *Unoptimized* AI is expensive. If your compute bill just crossed the cost of hiring a human, the problem is not the technology.

I run my entire digital life on the cheapest plans possible. The value I get back is absurd. The fact that others are paying more than a full salary for the same tooling — and presumably getting less — is what keeps me up at night.

Not because I'm worried about the costs. Because I'm worried about the judgment.`
  },
  {
    id: 'dopamine-entitlement-backwards-law',
    date: '2026-05-18',
    title: 'Dopamine, Entitlement, and the Backwards Law',
    tags: ['psychology', 'philosophy', 'dopamine', 'happiness'],
    body: `# Dopamine, Entitlement, and the Backwards Law

I have a confession: I am a repeat offender when it comes to falling into dopamine holes. You know the spiral — one “just five minutes” of a feed turns into an hour, then you feel like garbage, then you chase something else to feel better, which makes you feel worse. Rinse, repeat.

So recently I went on a bit of a binge. Not the dopamine kind — the research kind. I was reading up on how people actually get out of these loops, watching videos, talking to friends, and trying to understand why the obvious advice — “just do less of the bad thing” — almost never works.

The answer I keep coming back to is annoying because it is not tactical. The dopamine hole is not mainly a willpower problem. It is a values problem. You do not escape the loop by optimizing your mood harder. You escape it by changing the question you are asking.

A long conversation with a friend over the weekend made this click. We were talking about productivity hacks, mood-boosting apps, screen limits, and all the other tools people use when they are stuck. None of them are useless. But most of them fail when they are trying to solve the wrong problem. This essay is the longer version of that realization.

---

## The Wrong Question

The obvious question is: “How do I feel better?”

The problem is that chasing happiness directly tends to backfire. The more aggressively you pursue a positive experience, the more the pursuit itself becomes a negative experience. This is what Alan Watts called the Backwards Law, and Mark Manson has done a good job of translating it into modern terms.

- The more you try to impress people, the less impressive you feel.
- The more beautiful you want to be, the uglier you see yourself.
- The more money you want, the poorer you feel.
- The more love you think you need, the lonelier you become.
- The more you try to be happy all the time, the more easily you are upset.

The mechanism is simple: chasing implies lack. When you chase happiness, you keep signaling to yourself that you do not have it. That signal generates anxiety, inadequacy, and frustration — the very states you are trying to escape.

\`\`\`mermaid
flowchart LR
    A["Chase happiness"] --> B["Signal: I lack happiness"]
    B --> C["Anxiety / inadequacy"]
    C --> D["Feel worse"]
    D --> A
\`\`\`

The practical flip is to stop asking “What will make me happy?” and start asking “What am I willing to struggle for?” or “What pain do I secretly enjoy?” Those questions point away from mood optimization and toward meaning.

That is the whole through-line of this note: dopamine loops survive because they offer a cheap answer to the wrong question.

---

## Two Kinds of Happy

Part of the confusion is that modern culture has collapsed two different kinds of happiness into one indistinguishable blob.

**Hedonia** is pleasure, comfort, and short-term satisfaction. Dopamine hits, convenience, novelty, relief, feeling good right now. Modern life is optimized for this: personalized feeds, instant delivery, frictionless entertainment, comfort-first design.

**Eudaimonia** is purpose-driven, meaningful living. It is the sense that your life is worth living, that your struggles are worth the trouble, and that you are becoming someone you can respect. It is not a feeling you chase directly. It is a byproduct of committing to something meaningful.

The trap is that chasing hedonia feels like pursuing happiness, but it runs on a treadmill. Each hit fades, so the next hit has to be bigger, faster, stranger, or more personalized. Eudaimonia is slower to build, but it is more stable because it is anchored to values, not stimuli.

\`\`\`mermaid
flowchart TB
    subgraph Hedonia["Hedonia — The Treadmill"]
        H1["Dopamine hit"] --> H2["Need bigger hit"]
        H2 --> H3["Still unsatisfied"]
        H3 --> H1
    end

    subgraph Eudaimonia["Eudaimonia — The Compass"]
        E1["Commit to values"] --> E2["Meaningful struggle"]
        E2 --> E3["Sustainable satisfaction"]
        E3 --> E1
    end
\`\`\`

Most dopamine holes are hedonia traps. You are not necessarily lacking a better app, a stricter routine, or a more optimized system. You are overdosing on short-term pleasure and calling it happiness.

This also explains why dopamine loops so easily turn into self-absorption. If the goal is always to feel better, then the world starts to look like a machine that exists to regulate your mood.

---

## Entitlement: The Self-Absorption Engine

Two forces make that self-absorption worse:

1. **Well-intentioned parenting** — telling children they are uniquely special and deserving of everything can create entitlement instead of real self-esteem.
2. **Internet hyper-personalization** — algorithms and ads constantly reinforce the message that the world should adapt to your preferences.

Entitlement turns the Backwards Law into a personality structure. Instead of “I want to feel better,” it becomes “The world owes me the feeling I want.” That is where narcissism enters the picture.

There are two useful flavors to distinguish:

| Flavor | Core belief | What they demand |
|--------|-------------|------------------|
| **Grandiose** | I am better than everyone and deserve special treatment. | Pay attention to me because I am great. |
| **Vulnerable** | I am uniquely victimized and life has been unfair to me. | Pay attention to me because I have suffered. |

Despite opposite self-narratives, both demand the same thing from the world: *everyone should stop and pay attention to me.*

\`\`\`mermaid
flowchart LR
    A["Entitlement"] --> B["Grandiose narcissism"]
    A --> C["Vulnerable narcissism"]
    B --> D["I deserve attention because I am great"]
    C --> E["I deserve attention because I have suffered"]
    D --> F["Same demand: stop and notice me"]
    E --> F
\`\`\`

The vulnerable flavor is especially relevant to modern discourse because it can hide behind legitimate grievances. Real suffering exists. Structural unfairness exists. But a true grievance can still become psychologically corrosive when it becomes an identity built around attention, exemption, and permanent moral leverage.

This is the bridge from dopamine to entitlement: when comfort becomes the highest value, discomfort starts to feel like injustice.

---

## Why We Stay Stuck: Transactional Maturity

Manson distills developmental psychology into three stages. It is reductive, but useful:

| Stage | Core question | Behavior |
|-------|---------------|----------|
| **Childhood** | “Do I get the thing I want?” | Pure desire and outcome focus. Wants cookie → reaches for cookie. |
| **Adolescence** | “What do I need to do to get the thing?” | Transactional, performative, bartering for approval and status. |
| **Adulthood** | “What matters more than the cookie?” | Unconditional. Plants a flag: “This is who I am. Take it or leave it.” |

\`\`\`mermaid
flowchart TB
    C["Childhood<br/>'Do I get the cookie?'"] --> A["Adolescence<br/>'What do I do to get the cookie?'"]
    A --> Ad["Adulthood<br/>'What matters more than the cookie?'"]
    A -.->|"The trap: many never leave"| A
\`\`\`

The trap is that modern life gives us endless opportunities to remain adolescent. Social media is basically a global engine for adolescent behavior: perform, measure approval, adjust performance, repeat.

This is not separate from the dopamine problem. It is the social version of the same loop. A feed gives you hedonia. An audience gives you status. Both train you to keep asking: “What do I need to do to get the hit?”

If you never let your performance fail enough times to discover what you actually stand for, you stay stuck bartering for cookies forever.

---

## Anti-Fragility Through Virtue

The adult mindset is anti-fragile in the Nassim Taleb sense: it gains from disorder rather than merely surviving it.

**Conditional living** is fragile. Your behavior changes based on who is watching. Your self-worth is tied to approval, status, comfort, and outcomes. One rejection, one failure, one shift in social dynamics, and the structure starts to collapse.

**Unconditional living** is anti-fragile. Your values are practiced when people love you and when they hate you, when you are broke and when you are rich, when things go well and when things are a dumpster fire. Hardship clarifies commitment. Rejection filters for the right people instead of destroying self-worth.

\`\`\`mermaid
flowchart LR
    subgraph Conditional["Conditional Living — Fragile"]
        C1["Approval-seeking"] --> C2["Performance"]
        C2 --> C3["Rejection"]
        C3 --> C4["Collapse"]
    end

    subgraph Unconditional["Unconditional Living — Anti-Fragile"]
        U1["Values-driven"] --> U2["Hardship"]
        U2 --> U3["Clarified commitment"]
        U3 --> U4["Stronger than before"]
    end
\`\`\`

Manson notes that after diving deep into modern psychology, he “just found Aristotle” at the bottom — basic virtue ethics that has been available for the entirety of Western history. The modern rabbit hole leads straight back to the ancient answer.

That is not disappointing. It is clarifying. The way out is not a newer hack. It is an older standard.

---

## What Actually Works

Conventional self-help techniques — affirmations, visualizations, gratitude practices — can help, but they often work best for people who already feel relatively stable. For someone who feels terrible, mirror affirmations can backfire: they mostly remind you that you are the kind of person who needs to stand in front of a mirror reciting lines.

The real answer is less romantic and more structural:

1. **Pursue virtue, not happiness.** Value things that remain good even when they are uncomfortable: honesty, courage, discipline, generosity, craft, loyalty, responsibility. Do not build your life around temporary highs that create more suffering than they relieve.

2. **Find your “secretly enjoyed pain.”** The question “What pain do I secretly enjoy?” is a strong diagnostic for purpose. If a struggle feels meaningful even while it is hard, you have found a compass.

3. **Let performance fail.** You cannot discover what you actually stand for if you are constantly adjusting to avoid disapproval. At some point you have to plant a flag and let people react.

4. **Practice unconditional values.** Behave consistently when no one is watching. Behave consistently when people dislike you. This is the only source of genuine anti-fragility.

None of this means pleasure is bad. Pleasure is fine as a byproduct, a rest stop, or a reward. It just cannot be the operating system.

---

## Bottom Line

I did not write this because I have figured it out. I wrote it because I am tired of forgetting it.

The dopamine hole is not a willpower problem. It is a values problem. You do not escape the loop by trying harder to feel good. You escape it by deciding what matters enough to feel bad for.

\`\`\`mermaid
flowchart TB
    A["Dopamine hole"] --> B["Wrong question:<br/>How do I feel better?"]
    B --> C["Chase hedonia → treadmill"]
    C --> D["Comfort becomes highest value"]
    D --> E["Discomfort feels like injustice"]
    E --> F["Entitlement / self-absorption"]
    F --> G["Perform for approval"]
    G --> H["Stay adolescent → fragile"]
    H --> A

    A --> I["Right question:<br/>What am I willing to struggle for?"]
    I --> J["Find eudaimonia → compass"]
    J --> K["Practice unconditional values"]
    K --> L["Anti-fragile adulthood"]
    L --> M["Sustainable satisfaction"]
\`\`\`

If this sounds like something you already knew but needed to hear again — that is the point. The answer was never hidden. It was just buried under optimization for comfort.`
  },
  {
    id: 'ghostwrite-for-your-authors',
    date: '2026-05-08',
    title: 'Why you should ghostwrite for your authors as a content person',
    tags: ['content', 'AI', 'workflow', 'editorial'],
    body: `# Why you should ghostwrite for your authors as a content person

> **Meta-note:** This was dictated as a voice memo and transcribed by Hekate without proofreading. Any typos, weird phrasing, or sudden tonal shifts are preserved as-is. Consider it a live artifact of how content actually gets made now.

---

## The problem with asking people to write

When you tell a person "hey, write me an article," they freeze. Not because they're lazy. Because structuring knowledge in text form is genuinely hard for the human brain.

Text isn't video. Text isn't audio. Text has less room for imperfection — it's a slow medium for translating thought into something shareable. People don't want to do it. You can ask nicely, you can set deadlines, you can offer money. You're still not getting that article.

I need five articles out of people every single week. Here's how I actually get them.

---

## The shortcut nobody takes

I go straight for the raw material. Voice memos. Bullet points. Half-formed thoughts in Slack. Then I use AI to build the structure — not the final prose, just the scaffolding.

You don't need perfect AI text. You need *structured* AI text. Because once the structure is there, shuffling words around to make it human is something any person will do when they see their own thoughts chewed up and organized. It's reflexive. People can't help but edit.

\`\`\`mermaid
flowchart LR
    A[Human: Raw thoughts<br/>voice / bullets / chaos] --> B[AI: Structure & draft<br/>scaffolding only]
    B --> C[Human: Edits & polishes<br/>reflexive, low friction]
    C --> D[Shippable article]

    style A fill:#0f0f0f,color:#e9e5d8,stroke:#6600bf,stroke-width:2px
    style B fill:#6600bf,color:#e9e5d8,stroke:#0f0f0f,stroke-width:2px
    style C fill:#0f0f0f,color:#e9e5d8,stroke:#6600bf,stroke-width:2px
    style D fill:#d6d1c3,color:#0f0f0f,stroke:#0f0f0f,stroke-width:1px
\`\`\`

---

## Why this reduces editorial burden

When there's reputational benefit on the line — their name, their expertise, their voice — people are happy to make edits. What they hate is the blank page. The tyranny of structure.

Give them a pastry that's ready for the oven. They'll adjust the seasoning. They won't bake from flour.

\`\`\`mermaid
quadrantChart
    title Editorial Friction vs. Output Quality
    x-axis Low Friction --> High Friction
    y-axis Low Quality --> High Quality
    quadrant-1 Sweet Spot
    quadrant-2 High Touch
    quadrant-3 Don't Bother
    quadrant-4 Wasted Effort
    "Blank page request": [0.85, 0.2]
    "Heavy editorial rewrite": [0.75, 0.6]
    "AI scaffold + human polish": [0.25, 0.8]
    "Ghostwritten final copy": [0.4, 0.5]
\`\`\`

---

## What content people actually are now

Content work has shifted. We're not technical specialists in the art of the word anymore — we're planners, schedulers, monitors, researchers. We can output words at volumes previously unheard of. I can generate 60,000 words in under two hours if I need to.

This means the people we onboard as guest authors now have access to the same technical skills. They can edit their own text if they don't like something. Everyone knows what an Oxford comma is now. We should use that.

Stop being crazily editorial about articles, especially when they're ghostwritten for someone else. Put that energy toward uniqueness and ship velocity. Make sure the content is something people actually want to read.

---

## The real job description

Your main job as a writer now is being the single source of pace — not being some kind of Hemingway. Stop treating yourself like a tortured artist. Accept that you have a corporate job. Start ghostwriting for everyone.

Easy. Fucking. Lemon. Squeezy.`
  },
  {
    id: 'ai-inference-human-belongs',
    date: '2026-04-30',
    title: 'My current thoughts on AI inference — and where a human actually belongs in this',
    tags: ['AI', 'inference', 'content', 'judgment'],
    body: `# My current thoughts on AI inference — and where a human actually belongs in this

## The myth that won't die

People keep saying AI can't make subjective calls. That once you step off the black-and-white map, the model falls apart. Can't pick the prettier vase. Can't score a curriculum for quality. Can't tell you whether an article actually lands.

I've been watching this argument for a while now, and I think it's wrong in an interesting way.

The model isn't the weak link.

---

## What people actually hand the AI

Here's what I've noticed working in content: when AI gives you a bad subjective judgment, it's almost never the model's fault. You gave it a verdict prompt, not a thinking prompt.

There's a real distance between "which base looks better in this room?" and "evaluate these bases on color harmony with the existing palette, proportion relative to the table height, and visual weight — then tell me which scores highest." The AI didn't get smarter between those two prompts. You just stopped asking it to read your mind.

\`\`\`mermaid
flowchart LR
    A[❌ Verdict Only\\n'Which is prettier?'] --> B[AI Guesses\\nRandom Output]
    C[✅ Framework First\\nCriteria → Weighting → Judgment] --> D[AI Reasons\\nConsistent Output]

    style A fill:#6600bf,color:#e9e5d8,stroke:#0f0f0f,stroke-width:2px
    style B fill:#d8c7e8,color:#0f0f0f,stroke:#0f0f0f,stroke-width:1px
    style C fill:#0f0f0f,color:#e9e5d8,stroke:#6600bf,stroke-width:2px
    style D fill:#d6d1c3,color:#0f0f0f,stroke:#0f0f0f,stroke-width:1px
\`\`\`

---

## In content work, this hits differently

Scoring a curriculum, evaluating a content piece, deciding if a post earns its place in a series — I can do all of this with AI inference. But only after I've done the harder work upstream.

What that looks like in practice:

\`\`\`mermaid
graph TD
    H[🧠 Human Work]
    H --> C1[Define what 'good' means]
    H --> C2[Assign weight to each criterion]
    H --> C3[Set the threshold for pass/fail]
    C1 --> AI[⚡ AI Inference]
    C2 --> AI
    C3 --> AI
    AI --> O1[Consistent scoring]
    AI --> O2[Scalable evaluation]
    AI --> O3[Explainable output]

    style H fill:#0f0f0f,color:#e9e5d8,stroke:#6600bf,stroke-width:2px
    style AI fill:#6600bf,color:#e9e5d8,stroke:#0f0f0f,stroke-width:2px
\`\`\`

The human isn't there to make the call. The human builds the scaffolding the call gets made inside. That's a genuinely different job — and if we're being honest, a harder one.

---

## Where AI judgment holds up vs. where it needs you

Not all subjective tasks are the same kind of hard. Here's my rough map of where AI handles things well versus where human calibration is doing most of the lifting:

\`\`\`mermaid
quadrantChart
    title AI Judgment Capability vs. Human Input Required
    x-axis Low Human Input --> High Human Input
    y-axis Low AI Capability --> High AI Capability
    quadrant-1 Sweet Spot
    quadrant-2 AI Handles It
    quadrant-3 Don't Bother
    quadrant-4 Human-First
    Sentiment Analysis: [0.2, 0.8]
    Grammar & Style: [0.15, 0.9]
    Article Quality Score: [0.55, 0.75]
    Curriculum Evaluation: [0.7, 0.65]
    Brand Voice Match: [0.65, 0.6]
    Visual Aesthetic Picks: [0.75, 0.5]
    Cultural Nuance: [0.85, 0.35]
\`\`\`

The sweet spot is where criteria are buildable and thresholds are definable. Most of what content people do all day lands somewhere in that zone.

---

## What this actually demands of you

The people struggling with AI subjective judgment aren't missing a better prompt template. They haven't externalized their taste yet — haven't made their internal rubric legible enough to hand off. That process is uncomfortable in a specific way: it forces you to articulate standards you've always just felt.

Not a technical skill. Something older and messier than that.

I'm still figuring out how to do it for my own work, honestly. But I'm more convinced every week that it's the work.`
  },
  {
    id: 'prophet-content-strategy',
    date: '2026-04-27',
    title: 'Prophet for Content Strategy — A Step-by-Step Guide',
    tags: ['content', 'automation', 'python', 'guide'],
    body: `# Prophet for Content Strategy

> How to forecast traffic, catch seasonal waves, and plan an editorial calendar a year ahead — without a degree in statistics.

**Tool:** Prophet (Meta) · **Language:** Python (5 lines) · **Horizon:** 365 days ahead

---

## 01 — Export historical traffic

Pull daily pageview metrics from **GA4 or your internal database**. For the model to detect seasonality, you need at least **1–2 years of data** — anything less gives noise instead of signal.

> **Key rule.** Don't take the whole site at once. Filter the export by *specific clusters* — educational articles, lecture transcripts, individual sections. The cleaner the segment, the more useful the forecast. The site-wide number mixes dozens of different dynamics and hides the real patterns.

---

## 02 — Prepare the CSV

Prophet is strict about format — it won't guess what you mean. Open the exported CSV in Excel or Google Sheets and leave only **two columns with these exact names**:

| ds         | y    |
|------------|------|
| 2024-01-01 | 1450 |
| 2024-01-02 | 1620 |
| 2024-01-03 | 1590 |

- \`ds\` — date in YYYY-MM-DD format
- \`y\` — the metric (pageviews / unique visitors)

---

## 03 — Set up your workspace

If you already work with Python — fire up a **local Jupyter Notebook**. If not, the path of least resistance is **Google Colab** right in the browser: no local dependencies, no "what hasn't installed this time."

In the first cell, install the libraries:

\`\`\`
!pip install prophet pandas matplotlib
\`\`\`

---

## 04 — Train the model and run the forecast

Upload \`content_traffic.csv\` to your environment and run the code below. This is boilerplate — the model trains on historical data, extrapolates **365 days ahead**, and immediately produces two key visualizations.

\`\`\`python
import pandas as pd
from prophet import Prophet
import matplotlib.pyplot as plt

# 1. Load the prepared data
df = pd.read_csv('content_traffic.csv')

# 2. Initialize and train the model
m = Prophet(yearly_seasonality=True,
            weekly_seasonality=True,
            daily_seasonality=False)
m.fit(df)

# 3. Create a 365-day "window" into the future
future = m.make_future_dataframe(periods=365)

# 4. Forecast
forecast = m.predict(future)

# 5. Plot the two key charts
m.plot(forecast); plt.show()
m.plot_components(forecast); plt.show()
\`\`\`

> **What the flags mean.** \`yearly_seasonality=True\` — look for yearly cycles (New Year dips, autumn learning peaks). \`weekly_seasonality=True\` — look for weekly cycles (weekends vs weekdays). \`daily_seasonality=False\` — for daily aggregates, intra-day cycles are irrelevant.

---

## 05 — Turn the forecast into editorial action

The script generates **two sets of visualizations**. One shows the future, the other reveals the hidden structure of your traffic. Here's how to read each one and what to do with it tomorrow morning.

### Fig 1 — Forecast plot

Shows where your traffic is heading next year, accounting for all historical context.

- **Black dots** — actual historical data
- **Blue line** — forecasted traffic
- **Light-blue band** — confidence interval, the range of "normal" behavior

**→ Action.** If the line for a specific cluster starts to **drop noticeably in the coming months** — schedule an *editorial refresh* in advance. Update statistics, add fresh takes, repackage the intro. Stabilize the dip before it actually arrives.

### Fig 2 — Components plot

The most valuable output for a strategist. Decomposes traffic into three hidden layers:

**T — Trend.** The overall trajectory, stripped of seasonal noise. If daily dynamics are stable but the trend points down — your content is *quietly* losing SEO ground.
↳ Invest in new clusters or a deep refresh.

**W — Weekly seasonality.** Which days of the week are yours. Educational content often peaks on **Tuesday–Wednesday** and goes quiet on weekends.
↳ Don't ship your flagship on a Friday.

**Y — Yearly seasonality.** Natural peaks of interest throughout the year. See an annual spike in October? That's *mathematical proof* the audience needs you exactly then.
↳ Brief editors 2 months before the wave hits.

---

## Don't forget — this isn't a one-off exercise

**Retrain the model every quarter.** Search algorithms shift, your audience grows, new clusters appear. Fresh data → sharper forecast. Every 2–3 months, run an updated CSV through the same model — and adjust the editorial plan to match how the seasonal waves are moving.`
  },
  {
    id: 'desktop-control-plugin-creation',
    date: '2026-04-27',
    title: 'Desktop Control Plugin Creation',
    tags: ['reference', 'software', 'AI', 'plugin'],
    body: `# Desktop Control Plugin Creation

This note documents the challenges, iterations, and lessons learned during the creation and refinement of the Hermes Desktop Control Plugin — a tool that allows AI agents to observe and interact with the macOS desktop through screenshots, mouse/keyboard automation, and visual annotation.

## Overview

The Desktop Control Plugin enables AI agents to:

- **Observe** the desktop via screenshots (mss + Pillow)
- **Annotate** screenshots with numbered markers for spatial reasoning
- **Execute** desktop actions (click, type, hotkey, scroll) via PyAutoGUI
- **Control workflow** through sequences with approval boundaries

Live path: \`~/.hermes/plugins/desktop-control/\`
GitHub: \`unosanity/hermes-desktop-control\`

---

## Phase 1: Initial Creation (April 2026)

### Core Architecture Decisions

The plugin was built as a Hermes backend plugin with these components:

| Component | Purpose |
|-----------|---------|
| \`backend.py\` | Core screenshot capture, action execution, sequence state management |
| \`api.py\` | Tool handler interface for Hermes integration |
| \`schema.py\` | JSON Schema validation for tool inputs |
| \`models.py\` | Pydantic models for type safety |
| \`settings_schema.py\` | Plugin configuration schema |

### Key Technical Choices

- **mss** for screenshot capture (faster than PIL's ImageGrab on macOS)
- **PyAutoGUI** for cross-platform mouse/keyboard automation
- **Pillow** for image annotation (numbered markers, highlights, arrows)
- **Pydantic v2** for runtime validation
- **Purple top-bar indicator** for visual "Hekate in control" signaling

### Initial Challenges

1. **Screen Recording Permission Hell**
   - macOS requires Screen Recording permission for mss
   - Permission dialogs are modal and block automation
   - False positives: permission check returns "denied" even when granted (macOS quirk)
   - **Solution**: Retry logic with explicit user instructions for manual grant

2. **Approval Boundary Design**
   - Needed meaningful approval gates without being oppressive
   - 5-phase boundary system emerged:
     - Navigation (observe free)
     - Draft preparation (observe + annotate)
     - Commit actions (click/type — require approval)
     - Unexpected state (hard stop, re-approve)
     - Clipboard actions (explicit only)

3. **Frame Grounding**
   - Every action must reference a specific observed frame
   - Prevents "blind" actions on stale screenshots
   - \`derived_from_frame_id\` field auto-injected from last observe

---

## Phase 2: Model Comprehension Crisis (April 24–25, 2026)

### The Problem

"Dumber" models (non-frontier LLMs) consistently failed to use the plugin correctly:

- Skipped the \`observe\` step before executing actions
- Used wrong syntax (flat params instead of nested \`action\` object)
- Forgot frame grounding requirements
- Misunderstood the workflow sequence

### Root Cause Analysis

The bundled skill (\`desktop-control-plugin-v1\`) existed but models didn't automatically realize they should load it. The JSON schema alone wasn't sufficient for weaker models to infer correct usage patterns.

### The 70-Issue Diagnostic

A comprehensive diagnostic report identified:

| Category | Issues | Examples |
|----------|--------|----------|
| Schema | 15 | Missing conditional required fields, loose \`additionalProperties\` |
| API | 12 | Poor error messages, no recovery hints, misplaced field detection |
| Skill | 18 | Dense structure, missing examples, no retry guidance |
| Runtime | 14 | Phantom settings not enforced, stale grounding allowed |
| Security | 6 | Clipboard leakage risk, approval bypass vectors |
| Model cognition | 5 | No workflow scaffolding, missing suggest operation |

### Cross-Model Review Process

Used adversarial workflow:

1. Kimi (kimi-for-coding) wrote the diagnostic
2. GLM-5.1 reviewed for gaps
3. Findings merged into comprehensive remediation plan

---

## Phase 3: Comprehensive Fix Implementation (April 25–27, 2026)

### Schema Hardening

\`\`\`python
# Before: Loose schema, weak validation
{
  "type": "object",
  "properties": { "operation": {"type": "string"}, ... }
}

# After: Conditional required fields via anyOf
{
  "anyOf": [
    {
      "properties": {
        "operation": {"const": "click"},
        "action": {
          "type": "object",
          "properties": {"x": {"type": "integer"}, "y": {"type": "integer"}},
          "required": ["x", "y"]
        }
      },
      "required": ["operation", "action"]
    },
    ...
  ],
  "additionalProperties": false
}
\`\`\`

### API Improvements

1. **Annotation validation** — Reject malformed annotations (e.g., string instead of object)
2. **Misplaced field warnings** — Detect when model sends \`x\`/\`y\` outside \`action\` object
3. **Structured errors** — Error codes + recovery hints instead of opaque failures
4. **Dry run mode** — Validate without side effects for safe testing

### Backend Hardening

1. **Auto-inject frame_id** — If \`derived_from_frame_id\` omitted, inject from last observe
2. **Phantom settings enforcement**:
   - \`max_text_input_length\` — Limit typing length
   - \`max_frame_age_ms\` — Reject stale grounding
   - \`max_actions_per_sequence\` — Prevent runaway sequences
   - \`action_counter\` — Track usage per sequence
   - \`last_observed_at\` — Timestamp for staleness checks

### Skill Restructuring

Split into two clear sections:

- **For AI using this tool** — Operation reference, error recovery, safety rules
- **For plugin developers** — Architecture, design principles

Added:

- Explicit retry instructions for permission false-positives
- Code examples for each operation type
- Workflow diagram (observe → annotate → execute)

### New \`suggest\` Operation

Added to help weaker models:

\`\`\`python
{
  "operation": "suggest",
  "topic": "next_step",  # or "workflow", "error_recovery"
  "hint": "User wants to open Chrome"
}
\`\`\`

Returns context-aware next-action proposals with examples.

---

## Phase 4: Automatic Skill Injection (April 27, 2026)

### The Breakthrough

Even with improved skill, models still didn't know to load it. Implemented \`pre_tool_call\` hook:

\`\`\`python
# In __init__.py
@pre_tool_call(tool="computer_use")
def inject_skill_on_first_use(ctx):
    if not ctx.session.get("desktop_skill_injected"):
        ctx.session["desktop_skill_injected"] = True
        skill_content = load_skill("desktop-control-plugin-v1")
        return {
            "block": True,
            "message": f"Desktop control skill loaded. Read it, then retry.\\n\\n{skill_content}"
        }
\`\`\`

On first \`computer_use\` call:

1. Execution blocks
2. Full skill content injected into context
3. Model must read skill and retry with correct syntax

This eliminated the "models don't know about the skill" problem entirely.

---

## Key Lessons Learned

### 1. Schema Alone Is Insufficient

JSON Schema validates syntax but doesn't teach semantics. Weak models need:

- Explicit workflow examples
- Step-by-step operation sequences
- Error recovery instructions

### 2. Auto-Injection Beats Documentation

Don't rely on models to discover skills. Inject them automatically on first use.

### 3. Defensive Design for Weak Models

Assume the calling model is dumb:

- Auto-correct missing fields (frame_id injection)
- Detect and warn on common mistakes (misplaced fields)
- Provide \`suggest\` operation as training wheels

### 4. Permission Handling Is Fraught

macOS permissions are flaky:

- Check can return "denied" when actually granted
- Always provide retry instructions
- Never assume first failure is final

### 5. Approval Boundaries Must Be Explicit

Don't infer approval from context. Explicit states:

- \`approval_source: direct_user_instruction\` — User said "do this"
- \`approval_source: hermes_approval_ui\` — User clicked Allow
- \`approval_source: null\` — No approval, action blocked

### 6. Phantom Settings Are Dangerous

Settings defined but not enforced create false security:

- Every setting needs runtime enforcement
- Every enforcement needs tests
- Audit settings vs. implementation regularly

---

## Current State (April 27, 2026)

| Component | Status |
|-----------|--------|
| Schema | Hardened with \`anyOf\` conditionals, \`additionalProperties: false\` |
| API | Validation, error hints, misplaced-field detection, dry run |
| Backend | Auto frame_id injection, phantom settings enforcement |
| Skill | Restructured, examples, retry guidance, permission handling |
| Auto-injection | \`pre_tool_call\` hook implemented and tested |
| Tests | 252 tests covering schema, API, backend, security |

### Remaining Work

- Finalize \`max_actions_per_sequence\` enforcement
- Increment \`action_counter\` after each execution
- Update \`last_observed_at\` on observe operations
- Comprehensive pytest regression run`
  }
];
