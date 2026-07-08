# Standard Architecture Standard for Agentic Rooms: The /creative-context

This manual details the standard pattern for initializing and maintaining a **Creative Context** ("Room") inside of any software repository. Initializing this space dramatically speeds up AI onboarding, prevents misalignment drift, and provides agentic partners with direct access to your project's foundational DNA.

---

## 1. What is a "Creative Context" Room?

A `/creative-context` is a dynamic index and JSON-structured database built directly into your application codebase. It acts as an automated "mirror" of your project's identity, design tokens, terminology rules, roadmap status, and guidelines. 

Rather than relying on disjointed system prompts, a `/creative-context` keeps your code, definitions, and AI directives in the exact same place.

---

## 2. Core Directory Layout

When setting up a new repository, implement the following coordinates:

```text
your-repo/
├── creative-context-manual.md             # This structural manual
└── client/ or database/
    └── src/
        ├── pages/
        │   └── CreativeContext.tsx        # Front-facing UI dashboard
        └── lib/
            └── creativeContextData.ts     # Complete JSON database export
```

---

## 3. The 7 Pillars of Context DNA

Your `creativeContextData` payload must contain these seven schema-compliant properties:

| Pillar Segment | Purpose | Description |
| :--- | :--- | :--- |
| **`1. Meta / Versioning`** | Traceability | Stores current package version, active release log, and direct system updates. |
| **`2. Pages Index`**| Complete Sitemap | Explicitly documents every single route (`/about`, `/utility`, `/utility-disclaimer`) ensuring AI never creates routing drift. |
| **`3. Design Tokens`** | Visual Consistency | Houses Typography fallback strategies, Tailwind Color definitions, and spacing margins. |
| **`4. Philosophy Model`**| System Physics | Outlines the core engine. (e.g., In TSFW, the *Three States of Stones*). |
| **`5. Glossary Mapping`**| Universal Language | Lists all project-specific keywords. Bridges the gap between raw code and esoteric domain context. |
| **`6. Voice & Tone Rules`**| Semantic Safeguards | Restricts forbidden grammar, enforces positive-outlook formatting, and defines collective pronouns. |
| **`7. Progression Funnel`**| CTA & Business Logic | Details conversion pathways, cohorts, and programmatic value streams. |

---

## 4. Establishing the Tone Guidelines

Keep your voice guidelines highly structured to keep your AI aligned. Standardize your specifications using the following format:

1. **The Double-Colon (`::`) Pause**: Use `::` to represent organic pacing and conceptual bridging.
2. **Negative Imagination Filter**: Instruct assistants to rewrite negative statements (e.g., "The feature was not functional") into outcome-focused positives (e.g., "The feature was upgraded to unlock functional tracking").
3. **Collective Pronoun Shift**: Move instructions from prescriptive (`you/your`) to inclusive (`we/our`) to position the AI as an active fellow practitioner on the floor.

---

## 5. Guide: How to Initialize a Context Room (If `/creative-context` Does Not Exist)

If you are entering an empty repository that does not yet possess a dynamic `/creative-context` room, execute these incremental scaffolding steps to bring your agentic workspace upright:

### Step 01: Discover and Read
Command your AI agent to scan the directory topology, configurations, and scripts:
```text
PROMPT: "We are initializing our interactive Creative Context. List all top-level folders, sitemap pages, routing files (such as App.tsx or routes.ts), design assets, and primary readmes in the workspace."
```

### Step 02: Gather the Foundational Material
Ask the agent to extract the implicit core philosophies, vocabulary, and tones from your existing READMEs, core narratives, and mission files. Have it draft an initial database of parameters:
* **The Physics/Philosophy**: What are your project's main concepts?
* **The Glossary**: What coordinates of language are unique to this environment?
* **The Voice**: Are there specific tone registers, separators, or stylistic guidelines?

### Step 03: Scaffold the Data Layer
Initialize the local static data file. In your code repository (e.g., `src/lib/creativeContextData.ts` or as a standalone `creative-context.json` file in the project's root), tell the agent:
```text
PROMPT: "Generate a schema-compliant TS config / JSON dictionary representing our Creative Context metadata based on our gathered sitemap, typography styling, philosophy systems, and vocabularies. Include versioning arrays starting at v1.0.0."
```

### Step 04: Render the Portal View & Register Routes
Create a dashboard page (e.g., `src/pages/CreativeContext.tsx`) that reads and visualizes this data beautifully, featuring action buttons to **Download JSON** or **Copy Database to Clipboard**. Finally, link this route to your sitemap (e.g., `/creative-context`) in your main layout menus and sitemap generation scripts.

---

## 6. Implementation Command for AI Assistants

When onboarding a new AI engine to a repository containing this space, copy and copy-paste this direct execution prompt:

```text
ONBOARDING PROMPT:
"Please locate the files matching *CreativeContext* or *creative-context* or check the `CREATIVE_CONTEXT_STANDARDS.md` file in our root. 
Read the context object, review the sitemap index, and ingest our language/typography standards before making edits. 
We treat this space as the single source of truth for the landscape of our work. Align all proposed code modifications, practices, and metadata to this blueprint. Shift all system voice responses to our defined collective/somatic voice."
```
