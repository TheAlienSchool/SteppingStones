# The Stone Forger's Way :: Site Evolution Planning Brief
**Integration Strategy for Expansion Kit v1.2**

---

## 1. Executive Summary

This brief outlines the technical and creative strategy for integrating the **Expansion Kit v1.2** into *The Stone Forger's Way* digital ecosystem. The goal is to evolve the site from a static informational resource into a dynamic **Archetypal Portal** that supports users' ongoing progression.

The expansion introduces six new "Frictional Reality Archetypes," a secondary layer to the Archetype Quiz, and specific progression paths ("What's Next") for each user. This evolution requires updates to the content architecture, frontend components, and user flow.

---

## 2. Integration Architecture

### 2.1 Content Architecture Updates

The site's content structure will expand to accommodate the new archetypes without disrupting the existing "Core Three" (Carrier, Thrower, Forger).

| Component | Current State | Future State |
| :--- | :--- | :--- |
| **Archetypes** | 3 Core Archetypes | 3 Core + 6 Expanded Archetypes (Nested structure) |
| **Quiz** | Single-layer logic | Two-layer logic (Core → Expansion) |
| **Results Page** | Static description | Dynamic "Portal" with progression path |
| **Glossary** | Alphabetical list | Filterable by Archetype Lens |
| **Practices** | General list | Tagged by Archetype (e.g., "For Stone Breakers") |

### 2.2 User Flow Evolution

**Current Flow:**
Home → Quiz → Result (Core Archetype) → Read Concepts → Exit

**New Flow:**
Home → Quiz (Layer 1) → Quiz (Layer 2) → **Archetype Portal** (Result) → **Progression Path** (What's Next) → Specific Practice → Glossary Lens → **Cohort/Community**

This new flow increases engagement depth and provides the requested "what to do with it" guidance.

---

## 3. Technical Implementation Plan

### 3.1 Phase 1: Asset Deployment
*   **Action:** Upload the 6 new archetype images to `/client/public/images/archetypes/`.
*   **Requirement:** Ensure images are optimized (WebP format recommended for production, though PNG is provided) and have consistent naming conventions (`_v5` suffix for regenerated assets).
*   **Deliverable:** Updated asset repository with Nameless/Faceless Textured Conceptual Illustration style assets.

### 3.2 Phase 2: Quiz Logic Enhancement
*   **Action:** Update the `Quiz` component to support a two-stage process.
*   **Logic:**
    *   Stage 1: Existing questions determine Core Archetype.
    *   Stage 2: New conditional questions (based on Core result) determine Expanded Archetype.
*   **State Management:** Update React state to hold `coreArchetype` and `expandedArchetype`.

### 3.3 Phase 3: The Archetype Portal (New Page Template)
*   **Action:** Create a dynamic `/archetype/[id]` page template.
*   **Features:**
    *   **Hero:** Large textured conceptual portrait of the archetype.
    *   **Identity:** "You are The [Archetype]."
    *   **The Experience:** "What it feels like" (Validation).
    *   **The Gift:** "Your superpower" (Empowerment).
    *   **The Shadow:** "Your burden" (Reality check).
    *   **Progression Path:** "Your Next Step" (Actionable tool).
    *   **Curated Glossary:** "Your Language" (3-5 key terms).

### 3.4 Phase 4: Glossary & Practice Tagging
*   **Action:** Update the `Glossary` and `Practices` data structures to include `archetypeTags`.
*   **Feature:** Add filter buttons to the Glossary page: "Show terms for [Archetype]."

---

## 4. Creative Direction & Voice

### 4.1 The "Portal" Concept
The results page should not feel like a "report card" but a **Portal**. It is a mirror reflecting their deeper self. The language must be:
*   **Validating:** "We see you."
*   **Elevating:** "Here is the power in your pattern."
*   **Direct:** "Here is the work you must do."

### 4.2 Visual Language
*   **Textured Conceptual Style:** Use the new "Textured Conceptual" illustrations (grainy, warm monochromatic, flat forms) as the primary visual anchors.
*   **Nameless/Faceless Aesthetic:** All archetype figures must be presented as silhouettes or obscured forms (inspired by the AND 1 mixtape era brand lore). This ensures users project their own identity into the vessel rather than seeing a specific character.
*   **Magnetite UI:** Use the deep iron-black and magnetic field lines (from the Verbal Infographics work) as the UI theme for the Expansion sections. This distinguishes the "deeper work" from the general site content.
*   **Four-Point Star:** Use the star signature as a navigation element or loading spinner for the "Portal" transition.

---

## 5. Success Metrics


*   **Quiz Completion Rate:** Maintain >80% despite added length (engagement quality).
*   **Portal Dwell Time:** Target >2 minutes on the Archetype Portal page (reading & reflection).
*   **Progression Click-through:** >40% of users clicking the "Try This Practice" CTA on their Portal page.

---

## 6. Next Steps for Developers

1.  **Review `TSFW_Expansion_Kit.md`** for full content definitions.
2.  **Ingest Visual Assets** from the provided folder (`_v5` versions).
3.  **Prototype the Portal Page** using the Jade Hunter as the test case.
4.  **Implement Quiz Logic** updates in a staging environment.

---

**Prepared by:** Manus AI
**Date:** Jan 06, 2026
**For:** The Stone Forger's Way Development Team
