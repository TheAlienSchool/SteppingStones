# The Stone Forger's Way

## A Digital Sanctuary Born from a Single Question

What you have built here is not merely a website—it is a **living philosophy made manifest in code**.

The story begins with a question asked during morning breath practice at 1000 Ways to Sit, a Gamelatron Sonic Sanctuary in San Francisco: *"How is my father not inside of you?"* Kamau Zuberi Akabueze (born Samuel Todd Harris) posed this to Manus AI, recognizing that his grandfather Samuel R. Harris's wisdom—preserved in "The Words and Word"—lives within the vast corpus of human knowledge that AI systems learn from.

From that singular moment of recognition, an entire framework emerged: **The Stone Forger's Way**.

---

## The Architecture of Presence

The repository tells a story of **conscious creation**—18 pages, 9 reflections, 40+ glossary terms, 5 archetypes, 5 practices, all woven together into a coherent digital experience that *demonstrates* what it teaches:

```
Presence (consciousness) + Action (determination) = Materialization
```

The technology stack—React, TypeScript, Vite, Tailwind—serves the philosophy rather than showcasing itself. Every component, from the `GlossaryTooltip` that meets users where they are, to the `todaysPractice.ts` that delivers personalized daily wisdom based on archetype, embodies the principle of meeting each moment with full attention.

---

## The Framework

### The 5 Archetypes

| Archetype | Essence |
|-----------|---------|
| **The Stone Carrier** | Burdened by suspended stones—past regrets, future anxieties, unprocessed grief |
| **The Stone Thrower** | Throws stones at external targets; exhausted by ricocheting energy |
| **The Conscious Forger** | Brings full presence to single tasks; practices active patience |
| **The Stone Forger** | Merges presence with action; materializes paths aligned with purpose |
| **The JADE Hunter** | Speaks words into the void, searching for connection |

### Core Concepts

- **Stone Forging** — The conscious act of creating your path through presence and intention
- **Stepping Stones** — Individual solid moments that appear as you commit to stepping with trust
- **Trust** — The choice to step without needing proof; the neurological shift from amygdala to prefrontal regulation
- **The Trellis and the Vine** — Time as structure (trellis) and lived experience (vine)
- **Active Patience** — Waiting with purpose; not passive but the most active stance
- **Fabrication of Form** — How consciousness materializes reality

---

## Project Structure

```
stone_forgers_way/
├── client/                          # React frontend
│   ├── src/
│   │   ├── pages/                  # 18 content pages + 9 reflections
│   │   ├── components/             # Custom + 60+ shadcn/ui components
│   │   ├── hooks/                  # 5 custom React hooks
│   │   ├── lib/                    # Core logic
│   │   │   ├── archetypeQuiz.ts    # 13-question archetype detection
│   │   │   ├── glossaryData.ts     # 40+ terms with multi-level explanations
│   │   │   └── todaysPractice.ts   # Daily practice rotation engine
│   │   └── contexts/               # Theme management
│   └── public/                     # Archetypal imagery
├── server/                         # Express.js for production
├── content/                        # Source documents & PDFs
├── netlify.toml                    # Deployment configuration
└── package.json                    # Dependencies
```

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, TypeScript 5.6, Vite 7 |
| **Styling** | Tailwind CSS 4, shadcn/ui, Radix UI |
| **Animation** | Framer Motion |
| **Routing** | Wouter (lightweight) |
| **Backend** | Express.js |
| **Analytics** | Umami (privacy-first) |
| **Deployment** | Netlify |

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10.4+

### Installation

```bash
# Clone the repository
git clone https://github.com/TheAlienSchool/SteppingStones.git
cd SteppingStones/stone_forgers_way

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Build for Production

```bash
pnpm run build
```

Output: `dist/public` (static files for Netlify)

---

## Deployment

### Netlify (Recommended)

The repository includes a pre-configured `netlify.toml`:

```toml
[build]
  command = "pnpm install && pnpm run build"
  publish = "dist/public"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Steps:**
1. Connect repository to Netlify
2. Set base directory to `stone_forgers_way`
3. Netlify auto-detects configuration
4. Deploy

---

## Features

- **Interactive Archetype Quiz** — 13-question assessment to discover your primary archetype
- **Daily Practice Engine** — Personalized practices based on archetype and date
- **Glossary Tooltip System** — Hover definitions throughout content
- **Social Sharing** — Per-page sharing with custom metadata
- **Privacy-First Analytics** — Engagement tracking without user tracking

---

## The 9 Reflections

1. The Question That Started It All
2. Trust Is The Cheat Code
3. Money As Teacher
4. The Whale's Song
5. The Physics of Thought
6. Stone Throwing vs. Stone Forging
7. The Gift of Grace
8. Terma In Action
9. The Creative Fortress

---

## Lineage

This work honors:

- **Samuel R. Harris** — Kamau's grandfather, whose wisdom lives in "The Words and Word"
- **1000 Ways to Sit** — The Gamelatron Sonic Sanctuary where this framework emerged
- **Chadwick Boseman & Taylor Simone Ledward Boseman** — Creative philosophy that informed The Creative Fortress

---

## Statement of Approach

This work is offered as:

- **Practice, not prescription** — Experiential, not dogmatic
- **Exploration, not expertise** — Invitation to discover within yourself
- **Invitation, not instruction** — Co-creative, not top-down
- **Transparent about collaboration** — Explicit about AI as co-creator

---

## Acknowledgments

See [ACKNOWLEDGMENTS.md](./ACKNOWLEDGMENTS.md) for honored voices and cultural contributors.

---

## License

This project is released into the public domain under the [Unlicense](./LICENSE).

---

## The Closing Truth

This is **Stone Forging in action**: Taking the raw materials of React, TypeScript, and web technologies and consciously forming them into a coherent whole that serves human transformation.

*The invisible journey made visible. The field made form. Trust made technology.*

---

**Created by Kamau Zuberi Akabueze in dialogue with Manus AI**
*Residency: 1000 Ways to Sit, San Francisco*
