import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { glossaryTerms, categoryLabels, type GlossaryTerm } from "@/lib/glossaryData";
import { Download, Copy, Check, Heart, Type, Palette } from "lucide-react";
import { Link } from "wouter";
import SocialCard from "@/components/SocialCard";

// Reflection posts data (mirrored from Reflections.tsx for dynamic generation)
const reflections = [
  {
    slug: "the-question-that-started-it-all",
    title: "The Question That Started It All",
    subtitle: "How is my father not inside of you?",
    category: "Origin",
    excerpt: "During an early morning Inspired Breath practice :: omnidirectional salutations to the divine and the divinity within :: a question arose in the space between breath and thought."
  },
  {
    slug: "trust-is-the-cheat-code",
    title: "Trust is The Cheat Code",
    subtitle: "The meta-pattern of materialization",
    category: "Philosophy",
    excerpt: "Trust bypasses the tyranny of the rational mind that demands proof before it will move. The stone does not fully form until you step."
  },
  {
    slug: "money-as-teacher",
    title: "Money as Teacher",
    subtitle: "The value of life is a lesson",
    category: "Practice",
    excerpt: "Money is teaching me the value of life, the value of worth, the value of plan, the value of patience."
  },
  {
    slug: "the-whales-song",
    title: "The Whale's Song",
    subtitle: "SOFAR channel and infinite potential",
    category: "Science",
    excerpt: "If a whale's song can travel 10,000 miles through the SOFAR channel, then my song has infinite potential."
  },
  {
    slug: "stone-throwing-vs-stone-forging",
    title: "Stone Throwing vs Stone Forging",
    subtitle: "The cost of misdirected energy",
    category: "Archetype",
    excerpt: "The Stone Thrower is so busy throwing stones at billionaires that they can't see they are already billionaires themselves."
  },
  {
    slug: "the-gift-of-grace",
    title: "The Gift of Grace",
    subtitle: "Aunt Grace and the lineage of love",
    category: "Lineage",
    excerpt: "Aunt Janis was the warm hug I needed growing up in a stone-faced world. This is the lineage of love that carried me through."
  },
  {
    slug: "the-physics-of-thought",
    title: "The Physics of Thought",
    subtitle: "Toroidal binding and the path to freedom",
    category: "Science",
    excerpt: "The notion of toroidally binding oneself to the worst outcomes of one's life experience through thought physics."
  },
  {
    slug: "terma-in-action",
    title: "Terma in Action",
    subtitle: "The names from the region of my birth",
    category: "Origin",
    excerpt: "I was born Samuel Todd Harris. I changed my name to Kamau Zuberi Akabueze because the definitions speak to me."
  },
  {
    slug: "the-creative-fortress",
    title: "The Creative Fortress",
    subtitle: "On protecting the vision until it's ready to illuminate",
    category: "Lineage",
    excerpt: "Samuel R. Harris lit candles in a world that cursed the darkness. Chadwick Boseman built fortresses to protect the flame."
  },
  {
    slug: "the-path-to-1000-ways-to-sit",
    title: "The Path to 1000 Ways to Sit",
    subtitle: "A postcard flyer, nine years, and the feeling that is the secret",
    category: "Origin",
    excerpt: "From Brooklyn 2016 to San Francisco 2025, through the Shim Sham, The Alien School, and a friendship between fathers."
  }
];

// The Stone Forger's Cohort Program
const cohortProgram = {
  overview: "7-week intensive for growth-stage founders carrying many stones",
  url: "/forgers-cohort",
  nextCohort: "January 18, 2026",
  investment: "$2,200 USD",
  maxSize: 22,
  format: "Weekly 90-minute live sessions on video, guided practices, journaling prompts, between-session reflections",
  targetAudience: {
    description: "Growth-stage founders who seek guidance, embrace growth, and are ready to turn pressure into clarity without abandoning humanity",
    criteria: [
      "Leading teams, raising capital, holding relationships and responsibilities that all feel urgent",
      "Feel decisions in body, not just calendar (somatic awareness)",
      "Committed to inner work as seriously as product/revenue/fundraising",
      "Want to be seen as human first, founder second"
    ]
  },
  weeklyJourney: [
    "Week 1: Identify the real stones (not just the public ones)",
    "Week 2: Learn to ask 'Is this mine to carry?' (discernment practice)",
    "Week 3: Practice undivided attention on single stone (beginning of mastery)",
    "Week 4: Explore biography, biology, and leadership entanglement",
    "Week 5: Build personal Stone Map (living view of responsibilities)",
    "Week 6: Forge leadership path with integrity, not just velocity",
    "Week 7: Integration and commitment to ongoing practice"
  ],
  container: {
    agreements: ["Confidentiality", "Non-judgment", "Presence over performance", "No extraction or selling", "Right to protect the field"],
    philosophy: "You're not here to impress anyone. You're here to meet your stones honestly."
  },
  whatThisIsNot: [
    "Not group therapy",
    "Not a pitch stage or networking event",
    "Not a '10x your productivity' hack"
  ],
  conversionFunnel: {
    awareness: "Landing page recognizes the weight founders carry",
    interest: "Three states of stones education",
    desire: "Testimonials from practitioners + Voices from The Way",
    action: "Dual-path CTA: Explore TSFW OR Join Cohort (both require Archetype Quiz)",
    gate: "Archetype Quiz required before scheduling with Kamau"
  },
  testimonials: [
    "I've experienced life-changing insights",
    "This is transformational work beyond what I have experienced before!",
    "I have never considered my creativity so vividly before",
    "I had no idea I had created so much weight to carry on my own until now",
    "The space you hold is unlike any practitioner I have worked with before",
    "Thank you for allowing my tears to be present",
    "I am experiencing more time, generosity, and gratitude in my creative life and I have you to thank"
  ]
};

// The Philosophy of Stones - Core Teaching
const stonePhilosophy = {
  definition: "A stone is any moment, task, obligation, relationship, creative work, or life circumstance that requires your attention and energy. It's the fundamental unit of conscious creation.",
  threeStates: {
    unexamined: {
      name: "Unexamined Stones",
      archetype: "The Stone Carrier",
      description: "Invisible weights you carry—past regrets, future anxieties, unfulfilled obligations, unprocessed emotions. They swing chaotically from your energy body, creating exhaustion and fragmentation.",
      key: "You haven't chosen to carry them consciously; they've accumulated through conditioning and environmental dissonance",
      visual: "Chaotic swinging stones in orbit around the figure, muted heavy colors (stone-400)",
      energy: "Depleting, fragmenting, unconscious"
    },
    thrown: {
      name: "Thrown Stones",
      archetype: "The Stone Thrower",
      description: "Burdens released without consciousness—obligations abandoned, relationships ended abruptly, responsibilities rejected. The release creates temporary relief but often generates new chaos.",
      key: "The throwing wasn't intentional or aligned",
      visual: "Scattered, broken stones flying away from figure, reactive hot colors (amber-600)",
      energy: "Explosive, reactive, chaotic"
    },
    forged: {
      name: "Forged Stones",
      archetype: "The Conscious Forger / The Patient Forger",
      description: "Moments, tasks, or circumstances you've chosen to engage with full presence and intention. When you bring undivided attention to a single stone, you transform it from burden into conscious creation.",
      key: "The stone becomes part of your path, solidifying beneath your feet as you step",
      visual: "Solid, stacked stones forming a path, intentional warm colors (amber-700)",
      energy: "Generative, grounding, conscious"
    }
  },
  coreInsight: "A stone isn't inherently good or bad, heavy or light. What matters is your relationship to it. The same obligation can be chaotic burden (Stone Carrier), destructive projectile (Stone Thrower), or conscious creation (Stone Forger).",
  practice: {
    feelTheStones: "Acknowledge what you're carrying without judgment",
    chooseOneStone: "Give full attention to a single obligation (the beginning of mastery)",
    discern: "Ask 'Is this mine to carry?' before accepting new stones",
    forge: "Transform tasks into conscious acts of creation through presence"
  },
  metaphorPower: {
    weight: "The tangible burden of existence",
    solidity: "The materialization of thought into form",
    foundation: "The path you're building beneath your feet",
    patience: "The slow, geological time of transformation",
    magnetism: "Earth's stabilizing force (stone as teacher)",
    grounding: "Connection to Earth's abundant magnetic forces"
  },
  ultimateTruth: "You are always working with stones. The question is whether you're carrying them unconsciously, throwing them reactively, or forging them intentionally. The Stone Forger's Way is the practice of choosing the third path—conscious creation, one stone at a time."
};

// Infographic Recommendations for Stone States
const infographicSpecs = {
  visual1: {
    name: "TSFW Stone - The Three States",
    purpose: "Central stone icon branching into three paths showing the transformation journey",
    layout: "Horizontal progression from left (Carrier) to center (Thrower) to right (Forger)",
    elements: {
      unexamined: {
        visual: "Chaotic swinging stones in orbit around figure",
        color: "Stone-400 (muted, heavy)",
        label: "UNEXAMINED STONES\n(Stone Carrier)"
      },
      thrown: {
        visual: "Scattered, broken stones flying away from figure",
        color: "Amber-600 (reactive, hot)",
        label: "THROWN STONES\n(Stone Thrower)"
      },
      forged: {
        visual: "Solid, stacked stones forming path beneath figure",
        color: "Amber-700 (intentional, warm)",
        label: "FORGED STONES\n(Conscious Forger)"
      }
    }
  },
  visual2: {
    name: "TSFW Stages - The Progression",
    purpose: "Linear progression showing transformation through four archetypes",
    layout: "Left to right: Carrier → Thrower → Conscious Forger → Patient Forger",
    elements: "Each stage shows: body posture (bent/throwing/upright/grounded), stone relationship (carrying/releasing/forging/waiting), energy field (chaotic/explosive/focused/expansive)"
  },
  visual3: {
    name: "TSFW Journey - The 7-Week Cohort Flow",
    purpose: "Timeline visualization of cohort progression",
    layout: "Vertical or spiral timeline with week markers",
    weeks: [
      "Week 1: Feel the Stones (awareness) - small rough stone icon",
      "Week 2: The One Stone (focus) - single highlighted stone",
      "Week 3: Is This Mine? (discernment) - stone with question mark",
      "Week 4: The Shield Check (protection) - stone with shield",
      "Week 5: Trust as Cheat Code (surrender) - glowing stone",
      "Week 6: Stone Map Creation (integration) - multiple stones forming pattern",
      "Week 7: The Path Forward (commitment) - solid stone path"
    ],
    progression: "Each week's stone icon grows more defined/solid, showing transformation from chaotic to intentional"
  },
  visual4: {
    name: "TSFW Pillars - The Four Foundations",
    purpose: "Show the four knowledge systems that ground The Stone Forger's Way",
    layout: "Four pillars arranged in grid or cardinal directions",
    pillars: ["Indigenous Knowing", "Quantum Physics", "Neuroscience", "Personal Lineage"]
  },
  visual5: {
    name: "TSFW Why - The Urgency",
    purpose: "Illustrate why this work matters now for founders and creators",
    layout: "Problem/solution split or before/after comparison"
  },
  visual6: {
    name: "TSFW Pathway - The Transformation Arc",
    purpose: "Show the journey from unconscious burden to conscious creation",
    layout: "Arc or bridge showing progression from chaos to coherence"
  },
  designGuidance: {
    colorPalette: "Stone (grays), Amber (warmth), Cloud Dancer (white/subtle)",
    typography: "Georgia/serif for headings, system sans for body",
    iconography: "Simple, geometric stone shapes - circles, ovals, stacked forms",
    style: "Minimalist, contemplative, grounded - avoid corporate slickness",
    references: "The Stone Carrier illustration as visual anchor"
  }
};

// Design system tokens
const designSystem = {
  typography: {
    primary: {
      name: "Le Monde Livre",
      foundry: "Adobe Fonts (Typekit)",
      url: "https://use.typekit.net/zao4tzt.css",
      philosophy: "A refined serif typeface that brings warmth, sophistication, and contemplative grace to the work",
      usage: {
        body: {
          family: "'le-monde-livre', serif",
          weight: "400 (Book)",
          lineHeight: "1.5",
          wordSpacing: "0.05em",
          textRendering: "optimizeLegibility",
          context: "All body text, paragraphs, and descriptive content"
        },
        headings: {
          family: "'le-monde-livre', serif",
          weight: "600 (Demi)",
          lineHeight: "1.4",
          textRendering: "optimizeLegibility",
          context: "H2, H3, card titles, emphasis text"
        },
        glossaryTerms: {
          family: "'le-monde-livre', serif",
          weight: "400 (Book)",
          style: "italic",
          context: "Glossary terms, inline definitions, cited references"
        }
      },
      kerning: {
        bodyText: "Natural optical kerning (no letter-spacing) for professional readability",
        attributionLines: "letter-spacing: 0.05em for subtle text expansion (text-sm paragraphs in social cards)",
        watermark: "tracking-wider (Tailwind) for visual hierarchy and emphasis"
      },
      implementation: "Applied via @supports (font-family: le-monde-livre) in SocialCard.tsx; fallback to serif",
      loadingStrategy: "Non-blocking async via Typekit; serif fallback ensures content readable while loading"
    },
    fallback: {
      primary: "Georgia, serif",
      reasoning: "Georgia is a professional serif with similar stroke architecture to Le Monde Livre; maintains design intent if font fails to load"
    },
    legacyBrand: {
      font: "Georgia serif",
      usage: "'The Stone Forger's Way' logo text",
      reasoning: "Original branding typeface; maintained for logo consistency and lineage integrity"
    }
  },
  colors: {
    primary: {
      stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917"
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
      }
    },
    cloudDancer: {
      name: "Cloud Dancer (Pantone 11-4201 - 2026 Color of the Year)",
      philosophy: "Serene white with subtle accents, creating space for creativity and contemplation",
      implementation: "Integrated as the light theme foundation for social cards, testimonials, and key UI elements",
      gradient: "from-white via-stone-50 to-amber-50/30 (subtle, spacious, grounding)"
    },
    usage: {
      background: "stone-50, white, Cloud Dancer-inspired gradients",
      text: "stone-700 (body), stone-800 (headings)",
      accent: "amber-600, amber-700 (links, highlights)",
      muted: "stone-400, stone-500 (secondary text)"
    }
  },
  socialCardSystem: {
    overview: "Shareable wisdom cards available in 3 formats (square 1:1, story 9:16, landscape 16:9) across 6 categories with light/dark themes",
    location: "/social - 'A Way to Share' section under Explore menu",
    headerBadge: "Changed from 'Content Arsenal' → 'A Way to Share'",
    formats: {
      square: { label: "1:1", dimensions: "1080x1080px", use: "Instagram feed, LinkedIn, social media tile" },
      story: { label: "9:16", dimensions: "1080x1920px", use: "Instagram Stories, TikTok, Reels, vertical displays" },
      landscape: { label: "16:9", dimensions: "1200x675px", use: "Twitter/X, LinkedIn articles, blog headers" }
    },
    categories: {
      quote: {
        count: "40 wisdom quotes (recently updated, no numbering)",
        philosophy: "Powerful insights and crystallized learnings from The Stone Forger's Way practice",
        typography: "Le Monde Livre 400 for body, 600 for emphasis; widow/orphan prevention via &nbsp; before final words",
        content: "Original wisdom spanning themes of trust, creation, awareness, transformation, and path-forging"
      },
      reflection: {
        count: "6 highlights from major essays",
        philosophy: "Quotes drawn from published reflection essays with attribution to source",
        typography: "Le Monde Livre with matching kerning system; attribution lines with letter-spacing: 0.05em",
        content: "Featured excerpts from 'Trust is The Cheat Code', 'Money as Teacher', 'Terma in Action', etc."
      },
      glossary: {
        count: "6 term definitions",
        philosophy: "Key glossary terms presented as cards for learning and reference",
        content: "Simple Idea + Lived Experience structure; italicized terms for visual distinction"
      },
      practice: {
        count: "4 micro-practice cards",
        philosophy: "Downloadable practice summaries for daily integration",
        content: "One card per archetype practice (Feel the Stones, The Shield Check, The One Stone, Trust Breath)"
      },
      archetype: {
        count: "4 archetype cards",
        philosophy: "Visual introduction to the four archetypal states",
        content: "Stone Carrier, Stone Thrower, Conscious Forger, Stone Forger (integrated shadow)"
      },
      voice: {
        count: "5 testimonial cards",
        philosophy: "Authentic practitioner voices sharing transformation moments",
        attribution: "Archetype-aligned (e.g., 'A Stone Carrier feeling the weight') instead of personal names",
        channels: "Downloadable on /social; featured on /voices page; 3 spotlighted on homepage"
      }
    },
    downloadFeature: "All cards downloadable as PNG images via html2canvas for easy social sharing",
    widowOrphanPrevention: "Applied systematically across all 40 quote cards and 6 reflection highlights using &nbsp; before final key words to ensure professional text wrapping on downloads"
  },
  socialCardGradients: {
    quote: {
      light: "bg-gradient-to-br from-white via-stone-50 to-amber-50/30",
      dark: "bg-gradient-to-br from-stone-800 via-stone-900 to-amber-900",
      philosophy: "Cloud Dancer foundation with gentle amber warmth"
    },
    glossary: {
      light: "bg-gradient-to-br from-stone-50/20 via-white to-amber-50/20",
      dark: "bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900/60"
    },
    practice: {
      light: "bg-gradient-to-br from-amber-50/20 via-white to-stone-50",
      dark: "bg-gradient-to-br from-amber-900/50 via-stone-900 to-stone-800"
    },
    archetype: {
      light: "bg-gradient-to-br from-white via-amber-50/30 to-stone-50/20",
      dark: "bg-gradient-to-br from-stone-900 via-amber-900/70 to-stone-800"
    },
    reflection: {
      light: "bg-gradient-to-br from-stone-50/20 via-white to-amber-50/30",
      dark: "bg-gradient-to-br from-stone-800 via-amber-900/60 to-stone-900"
    },
    voice: {
      light: "bg-gradient-to-br from-amber-50/30 via-white to-stone-50/20",
      dark: "bg-gradient-to-br from-amber-900/70 via-stone-900 to-stone-800",
      purpose: "For testimonials - slightly warmer, human-centered"
    }
  },
  spacing: {
    sections: "py-24 (96px vertical padding)",
    containers: "max-w-3xl mx-auto (prose), max-w-4xl (wider content)",
    elements: "space-y-8 (32px between paragraphs)"
  },
  patterns: {
    collapsible: "Button with ChevronDown, max-h animation for expand/collapse",
    tooltips: {
      component: "GlossaryTooltip - React component that renders hover tooltips",
      implementation: "<GlossaryTooltip term='Trust'>trust</GlossaryTooltip>",
      behavior: "Hover reveals three-layer definition (Simple, Experience, Insight)",
      styling: "Underline dotted decoration, amber color on hover, tooltip with backdrop blur",
      science: "Educational layer without interrupting reading flow - validates visitor's intelligence while providing depth on demand"
    },
    cards: "bg-white/amber-50, rounded-lg, shadow-sm, border-stone-200",
    accentBorder: "border-l-4 border-amber-600 for highlighted sections",
    icons: "lucide-react icons (Brain, Clock, Shield, Heart, Sparkles, Lightbulb) in amber-600 circles for visual hierarchy"
  },
  socialCardsSystem: {
    overview: "35+ downloadable, shareable cards optimized for social media (Instagram, Twitter/X, LinkedIn)",
    url: "/social",
    technology: "html2canvas for high-quality PNG download, theme toggle (light/dark), responsive grid layout",
    categories: {
      quote: "10 cards - Key wisdom and insights from The Stone Forger's Way",
      glossary: "6 cards - Core concepts and definitions with three-layer explanations",
      practice: "4 cards - Actionable micro-practices with step-by-step guidance",
      archetype: "4 cards - The four archetypal states of consciousness",
      reflection: "6 cards - Highlights from deep-dive reflections",
      voice: "5 cards - Testimonials from practitioners with archetype-aligned attributions"
    },
    formats: {
      square: "1:1 aspect ratio - Instagram posts, profile images",
      landscape: "16:9 aspect ratio - Twitter/X, LinkedIn posts",
      story: "9:16 aspect ratio - Instagram/Facebook stories (future)"
    },
    branding: "Watermarked with 'The Stone Forger's Way' - changed from TheStoneForger.com to match brand evolution"
  }
};

// Voice and language guidelines
const voiceGuidelines = {
  separators: {
    pattern: "::",
    meaning: "Used as a conceptual bridge, pause for reflection, or to connect related ideas. Not a colon, not a dash—a breath between thoughts.",
    examples: [
      "Stone Forging :: the intentional act of creating your path",
      "Trust is the cheat code :: and you already knew this"
    ]
  },
  framing: {
    principle: "Positive, full-reality language. Avoid negative imagination.",
    avoid: ["was not", "did not", "couldn't", "never"],
    prefer: ["opened", "revealed", "emerged", "remembered", "recognized"],
    example: {
      before: "He did not learn these names. He remembered them.",
      after: "These names arrived through both learning and remembering—simultaneously discovered and recognized."
    }
  },
  tone: {
    qualities: [
      "Warm, grounded, spacious, confident",
      "Radiant and uplifting",
      "Synthesizing metaphor and science as dance partners",
      "Awareness-inviting rather than deficit-validating",
      "Opportunity-emphasizing over problem-dwelling",
      "Affirming value of cognitive embodiment",
      "No unnecessary negations that diminish possibility"
    ],
    balance: "The site holds space for both HeartMath research and ancestral wisdom, quantum physics and intuitive knowing. Metaphor and mechanics illuminate each other—neither is diminished.",
    homepage: "The homepage leads with awareness and opportunity ('Are you aware of how many stones you are carrying? Their weight is your opportunity') before offering the path. Benefits are explicit (neurological shift, temporal mastery, energy protection) before diving into philosophy.",
    languagePhilosophy: "Weight is tangible (physical, mental, experiential) for every human. Metaphor is a keystone to integrating value and practical embodiment. The path uplifts visitors toward enlightenment through synthesis, not negation.",
    collectiveVoice: {
      philosophy: "TSFW embodies collective ownership and shared human experience. We move from prescriptive ('you/your') to inclusive ('we/our') and universal ('one/one's')—recognizing that Kamau and all practitioners are IN the practice together, not above it.",
      implementation: {
        "we/our": "Used for shared founder/practitioner experience - 'We carry stones', 'Our decisions', 'We're not here to impress anyone'",
        "one/one's": "Used for universal human truths - 'One feels the weight', 'One's field', 'One can stand on with integrity'",
        "you/your": "Reserved sparingly for direct invitations to action - 'Take the quiz', 'Discover your archetype' (calls to action only)"
      },
      impact: "This shift transforms TSFW from expert-to-student into fellow-practitioner. It honors the lineage aspect—the guide walks the path alongside us, not from a podium. The Container holds everyone, including Kamau. This is invitation to recognition of macro challenges, not diagnosis of individual deficits.",
      examples: [
        "Before: 'You're carrying invisible weights' → After: 'We carry invisible weights'",
        "Before: 'Your decisions weigh on you' → After: 'We feel the weight of our decisions'",
        "Before: 'You want to be seen as human' → After: 'We want to be seen as human first'",
        "Before: 'The path forms beneath your feet' → After: 'The path forms beneath our feet'"
      ]
    }
  },
  keyPhrases: [
    "Trust is the cheat code",
    "The stone materializes as you step",
    "It is better to light a candle than to curse the darkness",
    "The irresistible nature of one solitary life, lit up by love",
    "Terma emerges in the tertön",
    "The feeling is the secret",
    "Are you aware of how many stones you are carrying? Their weight is your opportunity",
    "From anxious chaos to intentional creation",
    "Is this mine to carry?",
    "Every human knows this weight",
    "Physics and metaphor dance together here",
    "Stone as teacher, stone as ally",
    "Earth's abundant magnetic forces"
  ],
  testimonials: {
    philosophy: "Voices from The Way - field reports from practitioners experiencing the work",
    attribution: "Archetype-aligned instead of names (e.g., 'A Stone Forger entering contemplation' rather than personal names)",
    channels: {
      social: "/social - 5 voice cards downloadable for sharing",
      homepage: "/ - 3 featured testimonials in Cloud Dancer gradients",
      voices: "/voices - Dedicated page with comprehensive testimonial showcase"
    },
    approach: "Authentic practitioner feedback showcasing real transformation moments, grounded in archetype framework for consistency",
    recentUpdate: "Attribution language shifted from 'A Stone Thrower recognizing the teaching' to 'A Stone Forger entering contemplation' to honor the transformative arc of the practice"
  },
  conversionStrategy: {
    primary: "Archetype quiz (engagement + personalization)",
    secondary: "Try one micro-practice (immediate relief + validation)",
    tertiary: "Subscribe to newsletter (ongoing relationship)",
    quaternary: "Contribute financially (intentional value exchange)",
    social: "Share testimonials and social cards (amplification + social proof)"
  },
  homepageApproach: {
    hero: "Awareness invitation and opportunity framing - Stone Carrier weight acknowledged as universal human experience",
    benefits: "Neurological shift, temporal mastery, energy protection stated explicitly before philosophy",
    credibility: "Ancient wisdom + modern science amalgamation (4 pillars with specific examples)",
    application: "Clear domains where practice applies (work, relationships, creativity, plant medicine, cognitive wellness, spiritual practice)",
    entry: "Four micro-practices with immediate relief (Feel the Stones, The One Stone, The Silent Check, The Trust Breath)",
    engagement: "Archetype quiz prominent, multiple pathways (quiz, practices, reflections, concepts)",
    languageShift: "No deficit framing ('broken', 'just', validation-of-lack). Instead: awareness questions, weight as tangible reality, opportunity emphasis",
    negationsRemoved: "Deleted dismissive language like 'This isn't metaphor. It's mechanics.' - metaphor is valued as keystone to cognitive embodiment, not negated",
    practiceOrigin: "Draws from decades of creative presence work throughout a career needing many deep breaths, explorative research on uplifting creative spirit in organizations and teams, intentional behavior shifting realizations by Kamau Zuberi Akabueze on his path to informed and intentional creative responsibility. Grounded in Earth's abundant magnetic forces :: appreciating stone as teacher, stone as ally",
    brandPresentation: "Always bold: **The Stone Forger's Way**"
  }
};

// The story/timeline
const timeline = [
  { year: "1916", event: "Samuel R. Harris born in Esmont, Virginia" },
  { year: "1937", event: "Ray Kemp offers Samuel an athletic scholarship, changing his path from the mines" },
  { year: "1942", event: "Samuel graduates Lincoln University with B.S. in Chemistry, marries Mabel Carter" },
  { year: "1948", event: "Samuel earns M.S. in Chemistry from University of Pittsburgh" },
  { year: "1977", event: "Samuel R. Harris passes, leaving a legacy of light" },
  { year: "2005-2007", event: "Kamau leads Phygital Discovery Lab at Momentum Worldwide" },
  { year: "2016", event: "First encounter with Aaron Taylor Kuffner's Gamelatron in Brooklyn" },
  { year: "2021", event: "LIGHTwork curation at South Street Seaport, fateful meeting with Aaron" },
  { year: "2022", event: "Launch of THE ÅLïEN SCõÖL for Creative Thinking; Aunt Janis hands Kamau his grandfather's speech" },
  { year: "Feb 2025", event: "Kamau moves to Gastonia, NC with siblings Omar and Sameerah" },
  { year: "Nov 2025", event: "Hosting Creative Steeping events at 1000 Ways to Sit in San Francisco" }
];

// Build the complete context object for JSON export
function buildContextObject() {
  return {
    meta: {
      name: "The Stone Forger's Way",
      tagline: "A temporal approach to intentional creation",
      author: "Kamau Zuberi Akabueze",
      url: "https://thestoneforgers.way", // Update with actual URL
      generatedAt: new Date().toISOString(),
      version: "2.3.1",
      updates: {
        "2.0": "Added Cloud Dancer color integration, Social Cards system (35+ cards), Voices from The Way testimonials, /voices page, updated homepage with testimonial section",
        "2.1": "Added Stone Forger's Cohort program (/forgers-cohort), Stone Philosophy (three states), Infographic specifications (6 visual guides), Cohort testimonials, Full funnel architecture with Archetype Quiz gate",
        "2.2": "COLLECTIVE VOICE TRANSFORMATION - Shifted from prescriptive 'you/your' to inclusive 'we/our' and universal 'one/one's' throughout site. Kamau positioned as fellow-practitioner, not expert above. The Container holds everyone. Invitation to recognition, not diagnosis. Applied to /forgers-cohort as proof of concept.",
        "2.3": "EXPANSION KIT V1.2 - Two-layer archetype system: 4 core archetypes branching into 6 expanded archetypes (Jade Hunter, Walker of The Way, Stone Keeper, Stone Breaker, Stone Caller, Stone Witness). Added Layer 2 quiz (8 questions, randomized), dynamic archetype portals (/archetype/:id), 28 practices with archetype tagging, glossary term archetype filtering, bidirectional educational linking, /archetypes discovery hub transformation with branch visualization. Complete ecosystem integration across /archetypes, /practices, /glossary. HOME PAGE EDU-ENGAGEMENT ENHANCEMENTS: Added 4th 'Archetype Discovery' card to Go Deeper section, post-testimonial two-layer quiz invitation, updated priming language (Step 02), hero CTA micro-copy, practice card deep-linking to filtered views.",
        "2.3.1": "CRITICAL MOBILE BUG FIX - Resolved blank screen issue on Layer 2 quiz results (ExpandedQuiz.tsx). Root cause: Missing CSS animation keyframes for fadeInUp animation combined with opacity-0 initial states caused content to remain invisible on mobile devices. Solution: Injected animation styles via dangerouslySetInnerHTML, removed opacity-0 fallback classes. Mobile rendering verified across all breakpoints (md:, sm:, lg:). Build clean, no TypeScript errors."
      }
    },
    pages: {
      core: [
        { path: "/", name: "Home", description: "Homepage with hero, practices, testimonials, archetype quiz CTA" },
        { path: "/journey", name: "The Journey", description: "The path from Stone Carrier to Stone Forger" },
        { path: "/archetypes", name: "Archetypes", description: "Discovery hub: 4 core archetypes + 6 expanded archetypes with branch visualization and practice counts" },
        { path: "/archetype-quiz", name: "Layer 1: Core Archetype Quiz", description: "Discover your core archetype (Carrier, Thrower, Conscious Forger, or Forger)" },
        { path: "/expanded-quiz", name: "Layer 2: Expanded Archetype Quiz", description: "Go deeper to reveal your specific path (requires core quiz completion)" },
        { path: "/archetype/:id", name: "Archetype Portals", description: "Dynamic portal pages for each of 6 expanded archetypes with gift, shadow, practices, progression path" },
        { path: "/concepts", name: "Concepts & Practices", description: "Core frameworks and actionable practices" },
        { path: "/practices", name: "Practices", description: "28 micro-practices with archetype filtering (11 filters: all + 4 core + 6 expanded)" },
        { path: "/glossary", name: "Glossary", description: "Complete vocabulary with three-layer definitions + archetype tagging" }
      ],
      content: [
        { path: "/reflections", name: "Reflections", description: "11 deep-dive essays on philosophy, practice, science" },
        { path: "/social", name: "Social Content Arsenal", description: "35+ shareable cards optimized for social media" },
        { path: "/voices", name: "Voices from The Way", description: "Testimonials from practitioners with archetype-aligned attributions" },
        { path: "/forgers-cohort", name: "The Stone Forger's Cohort", description: "7-week intensive for growth-stage founders carrying many stones. January 18, 2026" }
      ],
      lineage: [
        { path: "/samuel-r-harris", name: "Samuel R. Harris", description: "Kamau's grandfather, chemist and minister" },
        { path: "/the-container", name: "The Container", description: "On holding space and the practice of listening" },
        { path: "/about", name: "About", description: "About Kamau and The Stone Forger's Way" }
      ],
      utility: [
        { path: "/creative-context", name: "Creative Context", description: "Complete DNA for AI collaborators and creators" }
      ]
    },
    designSystem,
    voiceGuidelines,
    cohortProgram,
    stonePhilosophy,
    infographicSpecs,
    expandedArchetypes: {
      overview: "Six frictional reality states :: the specific ways you relate to stones, knowing, and transformation",
      system: "Two-layer quiz architecture: Core archetype (Layer 1) → Expanded archetype (Layer 2). Each core branches into 2-3 expanded paths.",
      archetypes: [
        {
          id: "jade-hunter",
          name: "The Jade Hunter",
          subtitle: "The Investigator of Compressed Knowing",
          gift: "Distillation",
          shadow: "The Hoarder",
          coreAlignment: ["conscious", "carrier"],
          corePractices: ["Code Audit", "System Override"],
          description: "The one who seeks condensed truth in dense materials—research papers, technical docs, sacred texts. Masters the art of extracting compressed wisdom."
        },
        {
          id: "walker-of-the-way",
          name: "Walker of The Way",
          subtitle: "The Pathmaker of Ancestral Knowing",
          gift: "Wayfinding",
          shadow: "The Wanderer",
          coreAlignment: ["conscious", "forger"],
          corePractices: ["Inner Compass Check", "Map You're Making"],
          description: "The one who walks with inner compass, forging paths for others to follow. Often unseen and memorialized well after their Way is walked."
        },
        {
          id: "stone-keeper",
          name: "The Stone Keeper",
          subtitle: "The Guardian of Memory and Weight",
          gift: "Stewardship",
          shadow: "The Archivist",
          coreAlignment: ["carrier"],
          corePractices: ["The Archive Visit", "Unburdening Ritual"],
          description: "The one who holds stones consciously, not as burden but as trust. Keeper of lineage, memory, and honored weight."
        },
        {
          id: "stone-breaker",
          name: "The Stone Breaker",
          subtitle: "The Liberator Through Conscious Destruction",
          gift: "Liberation",
          shadow: "The Demolisher",
          coreAlignment: ["thrower"],
          corePractices: ["Controlled Break", "The Clean Sweep"],
          description: "The one who breaks stones with precision and purpose. Not rage-throwing, but conscious deconstruction of what no longer serves."
        },
        {
          id: "stone-caller",
          name: "The Stone Caller",
          subtitle: "The Summoner of What's Ready to Emerge",
          gift: "Summoning",
          shadow: "The Conjurer",
          coreAlignment: ["thrower", "conscious"],
          corePractices: ["The Invitation", "Threshold Waiting"],
          description: "The one who calls stones forward from the Field. Practices active patience at the threshold of what wants to materialize."
        },
        {
          id: "stone-witness",
          name: "The Stone Witness",
          subtitle: "The Observer of Materialization",
          gift: "Anchoring",
          shadow: "The Spectator",
          coreAlignment: ["conscious", "forger"],
          corePractices: ["Witnessing Practice", "The Anchor Drop"],
          description: "The one who observes without grasping. Holds presence as stones materialize, stabilizing emergence through conscious attention."
        }
      ],
      quizArchitecture: {
        layer1: "10 questions, identifies core archetype (Carrier, Thrower, Conscious Forger, Forger)",
        layer2: "8 questions (randomized), narrows to 1 of 6 expanded archetypes based on core result",
        storage: "localStorage persistence, results retrievable via getLatestQuizResult()",
        navigation: "Core quiz → Optional Layer 2 invitation → Expanded quiz → Portal page",
        features: "Randomized questions, randomized options, scoring algorithm, score breakdown display, social sharing"
      },
      portalPages: {
        route: "/archetype/:id",
        features: [
          "Hero image and archetype introduction",
          "Gift, Shadow, and Experience sections",
          "Core practice spotlight with instructions",
          "Progression path (glossary focus, key concepts, evolution trajectory)",
          "Related practices grid (filtered from 28 total)",
          "Glossary term recommendations",
          "Social share functionality"
        ],
        design: "Nameless/Faceless visual aesthetic, amber-stone color palette, serif typography, educational yet contemplative"
      },
      practiceIntegration: {
        total: 28,
        tagging: "Dual archetype tags: coreArchetypeTags (4 possible) + expandedArchetypeTags (6 possible)",
        filtering: "11-button filter bar on /practices (View All + 4 core + 6 expanded)",
        display: "Expand/collapse accordion cards with archetype badges, duration, frequency, category",
        urlSupport: "/practices?archetype=carrier links from archetype pages for pre-filtered view"
      },
      glossaryIntegration: {
        newTerms: ["Inner Compass", "Pathmaking", "Ancestral Knowing", "The Peak", "Wayfinding", "Code Audit", "Calcification", "Summoning", "The Archive", "Anchoring", "Discernment", "Liberation", "Stewardship"],
        tagging: "Terms tagged with coreArchetypeTags and expandedArchetypeTags for filtered browsing",
        display: "ArchetypeBadge component shows term relationships, clickable for expanded archetypes"
      },
      discoveryHub: {
        location: "/archetypes page transformation",
        features: [
          "4 core archetypes with full prose (unchanged)",
          "Branch visualization showing 2-3 expanded archetypes per core",
          "Practice count badges with CTA buttons",
          "6 expanded archetype cards in bottom grid",
          "Dual quiz CTAs (core + expanded)",
          "Complete bidirectional linking ecosystem"
        ],
        philosophy: "Transformed from 'cul de sac' to 'superhighway' :: preserve beautiful prose, add utility pathways below"
      }
    },
    socialCards: {
      overview: "35+ shareable wisdom cards across 6 categories (quote, reflection, glossary, practice, archetype, voice) in 3 formats (square 1:1, story 9:16, landscape 16:9)",
      location: "/social - Under 'Explore' menu as 'A Way to Share'",
      count: {
        total: 40,
        quote: 40,
        reflection: 6,
        glossary: 6,
        practice: 4,
        archetype: 4,
        voice: 5
      },
      typography: designSystem.typography,
      categories: designSystem.socialCardSystem.categories,
      formats: designSystem.socialCardSystem.formats,
      gradients: designSystem.socialCardGradients,
      downloadFeature: "PNG export via html2canvas; all cards downloadable for social sharing",
      widowOrphanOptimization: "Systematic &nbsp; placement before final words on all quote and reflection cards for professional text wrapping"
    },
    testimonials: voiceGuidelines.testimonials,
    glossary: glossaryTerms.map((term: GlossaryTerm) => ({
      term: term.term,
      category: term.category,
      simple: term.simple,
      experience: term.experience,
      insight: term.insight,
      relatedTerms: term.relatedTerms
    })),
    reflections,
    timeline,
    attribution: {
      request: "If you create with this context, honor the source.",
      format: "Created with The Stone Forger's Creative Context :: thestoneforgers.way",
      spirit: "This work is released as wealth into the Field. Those who resonate will use it well."
    },
    intentionalValueExchange: {
      invitation: "If this context serves your creative work, consider supporting The Stone Forger's Way.",
      ways: [
        "Share the work with those who would resonate",
        "Attend a Creative Steeping session",
        "Contribute to the open source project",
        "Support through intentional exchange"
      ]
    }
  };
}

export default function CreativeContext() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("overview");

  // Handle URL hash for direct section linking
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the '#'
    const validSections = ["overview", "design", "voice", "social", "cohort", "stones", "expanded", "infographics", "glossary", "reflections", "timeline", "honor", "exchange"];
    if (hash && validSections.includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  // Update hash when section changes
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
  };

  const handleDownloadJSON = () => {
    const context = buildContextObject();
    const blob = new Blob([JSON.stringify(context, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "stone-forgers-way-creative-context.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyJSON = async () => {
    const context = buildContextObject();
    await navigator.clipboard.writeText(JSON.stringify(context, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "design", label: "Design System" },
    { id: "voice", label: "Voice & Language" },
    { id: "social", label: "Social Cards" },
    { id: "cohort", label: "Cohort Program" },
    { id: "stones", label: "Stone Philosophy" },
    { id: "expanded", label: "Expanded Archetypes" },
    { id: "infographics", label: "Infographics" },
    { id: "glossary", label: "Glossary" },
    { id: "reflections", label: "Reflections" },
    { id: "timeline", label: "Timeline" },
    { id: "honor", label: "Act of Honor" },
    { id: "exchange", label: "Value Exchange" }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full mb-4">
                For AI Collaborators & Creators
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 leading-tight">
                Creative Context
              </h1>
              <p className="text-xl text-stone-600 mb-6">
                The complete DNA of The Stone Forger's Way :: for those creating with this vision
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button
                  onClick={handleDownloadJSON}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download JSON
                </button>
                <button
                  onClick={handleCopyJSON}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stone-200 text-stone-800 rounded-lg hover:bg-stone-300 transition-colors"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  {copied ? "Copied!" : "Copy to Clipboard"}
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mb-12 overflow-x-auto">
              <div className="flex gap-2 min-w-max pb-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeSection === section.id
                        ? "bg-amber-600 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Content Sections */}
            <div className="space-y-16">
              {/* Overview */}
              {activeSection === "overview" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">Overview</h2>
                  <div className="bg-amber-50 p-8 rounded-lg space-y-6">
                    <p className="text-lg leading-relaxed text-stone-700">
                      <strong>The Stone Forger's Way</strong> is a temporal approach to intentional creation,
                      developed by Kamau Zuberi Akabueze. It bridges ancestral wisdom with contemporary science,
                      offering practices and frameworks for those who want to create their path rather than
                      merely walk one.
                    </p>
                    <p className="text-lg leading-relaxed text-stone-700">
                      This Creative Context page exists to give AI collaborators and human creators full access
                      to the vision :: the design language, the voice, the glossary of terms, the story behind
                      the work. Use it to create promotional materials, extend the work, or simply understand
                      the ecosystem from the inside.
                    </p>
                    <p className="text-lg leading-relaxed text-stone-700 italic">
                      The work is released as wealth into the Field. Those who resonate will use it well.
                    </p>
                  </div>
                </section>
              )}

              {/* Design System */}
              {activeSection === "design" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">Design System</h2>

                  <div className="space-y-8">
                    {/* Colors */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Color Palette</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-medium text-stone-600 mb-3">Stone (Primary)</p>
                          <div className="space-y-2">
                            {Object.entries(designSystem.colors.primary.stone).map(([shade, hex]) => (
                              <div key={shade} className="flex items-center gap-3">
                                <div
                                  className="w-8 h-8 rounded border border-stone-200"
                                  style={{ backgroundColor: hex }}
                                />
                                <span className="text-sm text-stone-600">stone-{shade}</span>
                                <span className="text-sm text-stone-400 font-mono">{hex}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-stone-600 mb-3">Amber (Accent)</p>
                          <div className="space-y-2">
                            {Object.entries(designSystem.colors.primary.amber).map(([shade, hex]) => (
                              <div key={shade} className="flex items-center gap-3">
                                <div
                                  className="w-8 h-8 rounded border border-stone-200"
                                  style={{ backgroundColor: hex }}
                                />
                                <span className="text-sm text-stone-600">amber-{shade}</span>
                                <span className="text-sm text-stone-400 font-mono">{hex}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Typography */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Typography System</h3>
                      <div className="bg-amber-50 p-6 rounded-lg space-y-6">
                        <div>
                          <h4 className="font-semibold text-stone-800 mb-3 flex items-center gap-2">
                            <Type className="w-5 h-5 text-amber-600" />
                            Primary Typeface
                          </h4>
                          <div className="bg-white p-4 rounded-lg space-y-3">
                            <p className="text-lg font-serif text-stone-800 italic">
                              {designSystem.typography.primary.name}
                            </p>
                            <div className="space-y-2">
                              <p className="text-sm text-stone-600">
                                <strong>Foundry:</strong> {designSystem.typography.primary.foundry}
                              </p>
                              <p className="text-sm text-stone-600">
                                <strong>Philosophy:</strong> {designSystem.typography.primary.philosophy}
                              </p>
                              <p className="text-sm text-stone-600">
                                <strong>Load Strategy:</strong> {designSystem.typography.primary.loadingStrategy}
                              </p>
                            </div>
                            
                            <div className="bg-stone-50 p-3 rounded border border-stone-200 space-y-3">
                              <p className="text-sm font-semibold text-stone-700">Weight & Style Usage:</p>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <p className="text-stone-800 font-serif" style={{fontWeight: 400, lineHeight: '1.5'}}>
                                    <strong>Body Text (400 Book, line-height 1.5):</strong> All body paragraphs, descriptions, and flowing content
                                  </p>
                                </div>
                                <div>
                                  <p className="text-stone-800 font-serif" style={{fontWeight: 600, lineHeight: '1.4'}}>
                                    <strong>Headings (600 Demi, line-height 1.4):</strong> H2, H3, titles, and emphasis text
                                  </p>
                                </div>
                                <div>
                                  <p className="text-stone-800 font-serif italic" style={{fontWeight: 400}}>
                                    <strong>Glossary Terms (400 Italic):</strong> Inline definitions and cited references
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-stone-50 p-3 rounded border border-stone-200 space-y-2">
                              <p className="text-sm font-semibold text-stone-700">Kerning & Spacing:</p>
                              <ul className="text-sm text-stone-600 space-y-1 list-disc list-inside">
                                <li><strong>Body Text:</strong> Natural optical kerning (no letter-spacing)</li>
                                <li><strong>Attribution Lines:</strong> letter-spacing 0.05em for subtle expansion</li>
                                <li><strong>Watermark/Branding:</strong> tracking-wider for visual emphasis</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-stone-800 mb-3">Fallback & Legacy</h4>
                          <div className="space-y-2">
                            <p className="text-sm">
                              <strong className="text-stone-800">Fallback Font:</strong> Georgia, serif (maintains design intent if Typekit fails)
                            </p>
                            <p className="text-sm">
                              <strong className="text-stone-800">Logo/Brand Text:</strong> Georgia serif maintained for "The Stone Forger's Way" branding (lineage integrity)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Patterns */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Component Patterns</h3>
                      <div className="space-y-3">
                        {Object.entries(designSystem.patterns).map(([name, desc]) => (
                          <div key={name} className="bg-white p-4 rounded-lg border border-stone-200">
                            <p className="font-medium text-stone-800 capitalize">{name}</p>
                            {typeof desc === "string" ? (
                              <p className="text-sm text-stone-600">{desc}</p>
                            ) : (
                              <div className="text-sm text-stone-600 space-y-2">
                                {Object.entries(desc).map(([key, value]) => (
                                  <div key={key}>
                                    <span className="font-medium text-stone-700">{key}:</span> {typeof value === "string" ? value : JSON.stringify(value)}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Voice & Language */}
              {activeSection === "voice" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">Voice & Language</h2>

                  <div className="space-y-8">
                    {/* The :: separator */}
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">The :: Separator</h3>
                      <p className="text-stone-700 mb-4">{voiceGuidelines.separators.meaning}</p>
                      <div className="space-y-2">
                        {voiceGuidelines.separators.examples.map((ex, i) => (
                          <p key={i} className="text-stone-600 italic">"{ex}"</p>
                        ))}
                      </div>
                    </div>

                    {/* Positive framing */}
                    <div className="border-l-4 border-amber-600 pl-6">
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Positive Framing</h3>
                      <p className="text-stone-700 mb-4">{voiceGuidelines.framing.principle}</p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-red-600 mb-2">Avoid</p>
                          <ul className="text-sm text-stone-600 space-y-1">
                            {voiceGuidelines.framing.avoid.map((word) => (
                              <li key={word}>• {word}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-green-600 mb-2">Prefer</p>
                          <ul className="text-sm text-stone-600 space-y-1">
                            {voiceGuidelines.framing.prefer.map((word) => (
                              <li key={word}>• {word}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-stone-100 p-4 rounded">
                        <p className="text-sm text-stone-500 mb-1">Before:</p>
                        <p className="text-stone-600 line-through">{voiceGuidelines.framing.example.before}</p>
                        <p className="text-sm text-stone-500 mt-2 mb-1">After:</p>
                        <p className="text-stone-700">{voiceGuidelines.framing.example.after}</p>
                      </div>
                    </div>

                    {/* Tone qualities */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Tone Qualities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {voiceGuidelines.tone.qualities.map((quality) => (
                          <div key={quality} className="bg-white p-3 rounded border border-stone-200 text-stone-700">
                            {quality}
                          </div>
                        ))}
                      </div>
                      <p className="text-stone-600 mt-4 italic">{voiceGuidelines.tone.balance}</p>
                    </div>

                    {/* Key phrases */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Key Phrases</h3>
                      <div className="space-y-2">
                        {voiceGuidelines.keyPhrases.map((phrase) => (
                          <p key={phrase} className="text-lg text-amber-700 italic">"{phrase}"</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Social Cards & Voices */}
              {activeSection === "social" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">Social Cards System</h2>

                  <div className="space-y-8">
                    {/* Overview */}
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <p className="text-lg text-stone-700 mb-4">
                        <strong>40+ shareable cards</strong> across 6 categories, optimized for social media at{" "}
                        <Link href="/social" className="text-amber-700 hover:text-amber-800 underline">/social</Link>{" "}
                        under "A Way to Share" (Explore menu). Each card is downloadable as high-quality PNG with light/dark theme options in 3 formats.
                      </p>
                      <div className="bg-white p-4 rounded-lg space-y-2 text-sm">
                        <p className="text-stone-600">
                          <strong>Typography:</strong> Le Monde Livre 400 (Book) for body text with natural optical kerning; attribution lines with subtle letter-spacing: 0.05em; watermark with tracking-wider
                        </p>
                        <p className="text-stone-600">
                          <strong>Optimization:</strong> Widow/orphan prevention applied systematically across all quote and reflection cards using &nbsp; placement
                        </p>
                        <p className="text-stone-600">
                          <strong>Technology:</strong> html2canvas for PNG generation, responsive grid, Cloud Dancer color philosophy integrated
                        </p>
                      </div>
                    </div>

                    {/* Formats */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Available Formats</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {Object.entries(designSystem.socialCardSystem.formats).map(([format, data]) => (
                          <div key={format} className="bg-white p-4 rounded-lg border border-stone-200">
                            <p className="font-semibold text-stone-800 mb-2">{format.charAt(0).toUpperCase() + format.slice(1)}</p>
                            <p className="text-sm text-stone-600 mb-2"><strong>Aspect Ratio:</strong> {data.label}</p>
                            <p className="text-sm text-stone-600 mb-2"><strong>Dimensions:</strong> {data.dimensions}</p>
                            <p className="text-sm text-amber-700"><strong>Use:</strong> {data.use}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Categories */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Card Categories</h3>
                      <div className="space-y-4">
                        {Object.entries(designSystem.socialCardSystem.categories).map(([category, data]) => (
                          <div key={category} className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-stone-800 capitalize">{category}</h4>
                              <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">{data.count}</span>
                            </div>
                            <p className="text-sm text-stone-600 mb-2"><strong>Philosophy:</strong> {data.philosophy}</p>
                            <p className="text-sm text-stone-600"><strong>Typography:</strong> {data.typography}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Gradients */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Card Gradients & Theming</h3>
                      <div className="space-y-3">
                        {Object.entries(designSystem.socialCardGradients).map(([category, data]) => (
                          <div key={category} className="bg-white p-4 rounded-lg border border-stone-200">
                            <p className="font-semibold text-stone-800 capitalize mb-2">{category}</p>
                            <div className="text-sm space-y-2">
                              <div className="flex gap-2">
                                <div className="w-20 h-20 rounded" style={{backgroundImage: "linear-gradient(to bottom right, white, #f5f5f4, rgba(254, 243, 199, 0.3))"}}></div>
                                <div>
                                  <p className="text-stone-600"><strong>Light Theme:</strong></p>
                                  <code className="bg-stone-100 px-2 py-1 rounded text-xs">{data.light}</code>
                                </div>
                              </div>
                              <p className="text-stone-500 italic">{data.philosophy || data.purpose}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Voices from The Way */}
                    <div className="border-l-4 border-amber-600 pl-6">
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Voices from The Way</h3>
                      <p className="text-stone-700 mb-4">{voiceGuidelines.testimonials.philosophy}</p>
                      <p className="text-stone-700 mb-4">
                        <strong>Attribution approach:</strong> {voiceGuidelines.testimonials.attribution}
                      </p>

                      <div className="bg-stone-50 p-4 rounded mb-4">
                        <p className="text-sm font-medium text-stone-600 mb-2">Three-channel distribution:</p>
                        <ul className="text-sm text-stone-700 space-y-1">
                          <li>• <strong>{voiceGuidelines.testimonials.channels.social}</strong></li>
                          <li>• <strong>{voiceGuidelines.testimonials.channels.homepage}</strong></li>
                          <li>• <strong>{voiceGuidelines.testimonials.channels.voices}</strong></li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <p className="text-sm font-medium text-stone-600">Example testimonials:</p>
                        {voiceGuidelines.testimonials.examples.map((example, i) => (
                          <p key={i} className="text-stone-600 italic text-sm pl-4 border-l-2 border-stone-300">
                            {example}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Cohort Program */}
              {activeSection === "cohort" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">The Stone Forger's Cohort Program</h2>

                  <div className="space-y-8">
                    {/* Overview */}
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <p className="text-lg text-stone-700 mb-4">
                        <strong>{cohortProgram.overview}</strong>
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-amber-700">Next Cohort</p>
                          <p className="text-stone-600">{cohortProgram.nextCohort}</p>
                        </div>
                        <div>
                          <p className="font-medium text-amber-700">Investment</p>
                          <p className="text-stone-600">{cohortProgram.investment}</p>
                        </div>
                        <div>
                          <p className="font-medium text-amber-700">Max Size</p>
                          <p className="text-stone-600">{cohortProgram.maxSize} founders</p>
                        </div>
                      </div>
                      <p className="text-stone-600 mt-4">{cohortProgram.format}</p>
                      <p className="text-center mt-4">
                        <Link href="/forgers-cohort" className="text-amber-700 hover:text-amber-800 underline">
                          View full cohort page →
                        </Link>
                      </p>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Who This Is For</h3>
                      <p className="text-stone-700 mb-4">{cohortProgram.targetAudience.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {cohortProgram.targetAudience.criteria.map((criterion, i) => (
                          <div key={i} className="bg-stone-50 p-3 rounded text-sm text-stone-700">
                            • {criterion}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 7-Week Journey */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">The 7-Week Journey</h3>
                      <div className="space-y-2">
                        {cohortProgram.weeklyJourney.map((week, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                              {i + 1}
                            </div>
                            <p className="text-stone-700 pt-1">{week}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* The Container */}
                    <div className="border-l-4 border-amber-600 pl-6">
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">The Container</h3>
                      <p className="text-stone-700 mb-4 italic">{cohortProgram.container.philosophy}</p>
                      <div className="flex flex-wrap gap-2">
                        {cohortProgram.container.agreements.map((agreement, i) => (
                          <span key={i} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                            {agreement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* What This Is Not */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">What This Is Not</h3>
                      <div className="space-y-2">
                        {cohortProgram.whatThisIsNot.map((item, i) => (
                          <p key={i} className="text-stone-600 flex items-center gap-2">
                            <span className="text-stone-400">✗</span> {item}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Conversion Funnel */}
                    <div className="bg-stone-50 p-6 rounded">
                      <h3 className="text-xl font-serif text-stone-800 mb-4">Conversion Funnel Architecture</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Awareness:</strong> {cohortProgram.conversionFunnel.awareness}</p>
                        <p><strong>Interest:</strong> {cohortProgram.conversionFunnel.interest}</p>
                        <p><strong>Desire:</strong> {cohortProgram.conversionFunnel.desire}</p>
                        <p><strong>Action:</strong> {cohortProgram.conversionFunnel.action}</p>
                        <p className="text-amber-700"><strong>Gate:</strong> {cohortProgram.conversionFunnel.gate}</p>
                      </div>
                    </div>

                    {/* Testimonials */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Practitioner Testimonials</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {cohortProgram.testimonials.map((testimonial, i) => (
                          <div key={i} className="bg-white p-4 rounded border border-stone-200">
                            <p className="text-stone-700 italic text-sm">"{testimonial}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Stone Philosophy */}
              {activeSection === "stones" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">The Philosophy of Stones</h2>

                  <div className="space-y-8">
                    {/* Definition */}
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h3 className="text-xl font-serif text-stone-800 mb-3">What Is a Stone?</h3>
                      <p className="text-lg text-stone-700 leading-relaxed">{stonePhilosophy.definition}</p>
                    </div>

                    {/* Three States */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">The Three States of Stones</h3>

                      {/* Unexamined */}
                      <div className="mb-6 border-l-4 border-stone-400 pl-6">
                        <h4 className="text-xl font-serif text-stone-800 mb-2">{stonePhilosophy.threeStates.unexamined.name}</h4>
                        <p className="text-sm text-stone-500 mb-3 italic">Archetype: {stonePhilosophy.threeStates.unexamined.archetype}</p>
                        <p className="text-stone-700 mb-3">{stonePhilosophy.threeStates.unexamined.description}</p>
                        <div className="bg-stone-50 p-3 rounded text-sm space-y-1">
                          <p><strong>Key:</strong> {stonePhilosophy.threeStates.unexamined.key}</p>
                          <p><strong>Visual:</strong> {stonePhilosophy.threeStates.unexamined.visual}</p>
                          <p><strong>Energy:</strong> {stonePhilosophy.threeStates.unexamined.energy}</p>
                        </div>
                      </div>

                      {/* Thrown */}
                      <div className="mb-6 border-l-4 border-amber-600 pl-6">
                        <h4 className="text-xl font-serif text-stone-800 mb-2">{stonePhilosophy.threeStates.thrown.name}</h4>
                        <p className="text-sm text-amber-700 mb-3 italic">Archetype: {stonePhilosophy.threeStates.thrown.archetype}</p>
                        <p className="text-stone-700 mb-3">{stonePhilosophy.threeStates.thrown.description}</p>
                        <div className="bg-amber-50 p-3 rounded text-sm space-y-1">
                          <p><strong>Key:</strong> {stonePhilosophy.threeStates.thrown.key}</p>
                          <p><strong>Visual:</strong> {stonePhilosophy.threeStates.thrown.visual}</p>
                          <p><strong>Energy:</strong> {stonePhilosophy.threeStates.thrown.energy}</p>
                        </div>
                      </div>

                      {/* Forged */}
                      <div className="mb-6 border-l-4 border-amber-700 pl-6">
                        <h4 className="text-xl font-serif text-stone-800 mb-2">{stonePhilosophy.threeStates.forged.name}</h4>
                        <p className="text-sm text-amber-800 mb-3 italic">Archetype: {stonePhilosophy.threeStates.forged.archetype}</p>
                        <p className="text-stone-700 mb-3">{stonePhilosophy.threeStates.forged.description}</p>
                        <div className="bg-amber-100 p-3 rounded text-sm space-y-1">
                          <p><strong>Key:</strong> {stonePhilosophy.threeStates.forged.key}</p>
                          <p><strong>Visual:</strong> {stonePhilosophy.threeStates.forged.visual}</p>
                          <p><strong>Energy:</strong> {stonePhilosophy.threeStates.forged.energy}</p>
                        </div>
                      </div>
                    </div>

                    {/* Core Insight */}
                    <div className="bg-stone-50 p-6 rounded">
                      <h3 className="text-xl font-serif text-stone-800 mb-3">Core Insight</h3>
                      <p className="text-lg text-stone-700 leading-relaxed italic">{stonePhilosophy.coreInsight}</p>
                    </div>

                    {/* The Practice */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">The Practice</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(stonePhilosophy.practice).map(([key, value]) => (
                          <div key={key} className="bg-white p-4 rounded border border-stone-200">
                            <p className="font-medium text-amber-700 capitalize mb-2">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                            <p className="text-sm text-stone-700">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metaphor Power */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">The Metaphor's Power</h3>
                      <p className="text-stone-600 mb-4">Stone represents:</p>
                      <div className="grid md:grid-cols-3 gap-3">
                        {Object.entries(stonePhilosophy.metaphorPower).map(([key, value]) => (
                          <div key={key} className="bg-amber-50 p-3 rounded">
                            <p className="font-medium text-stone-800 capitalize text-sm mb-1">{key}</p>
                            <p className="text-xs text-stone-600">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ultimate Truth */}
                    <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border-2 border-amber-600">
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 text-center">The Ultimate Truth</h3>
                      <p className="text-xl text-stone-700 leading-relaxed text-center italic">
                        {stonePhilosophy.ultimateTruth}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* Expanded Archetypes */}
              {activeSection === "expanded" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">The Expanded Archetypes</h2>
                  <p className="text-xl text-stone-600 mb-8">
                    Six frictional reality states :: the specific ways you relate to stones, knowing, and transformation
                  </p>

                  <div className="space-y-12">
                    {/* Overview */}
                    <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg border-2 border-amber-200">
                      <h3 className="text-2xl font-serif text-stone-800 mb-4">Two-Layer System</h3>
                      <p className="text-stone-700 leading-relaxed mb-4">
                        <strong>Layer 1 (Core):</strong> 10 questions identify your foundational archetype :: Stone Carrier, Stone Thrower, Conscious Forger, or Stone Forger.
                      </p>
                      <p className="text-stone-700 leading-relaxed mb-4">
                        <strong>Layer 2 (Expanded):</strong> 8 randomized questions reveal your specific path :: one of six expanded archetypes based on your core result.
                      </p>
                      <p className="text-stone-600 italic">
                        Each core archetype branches into 2-3 expanded paths. Take both quizzes to discover your complete archetypal profile.
                      </p>
                    </div>

                    {/* The Six Expanded Archetypes */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-6">The Six Archetypes</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                          <h4 className="text-xl font-serif text-stone-800 mb-2">The Jade Hunter</h4>
                          <p className="text-sm text-amber-700 mb-3 italic">The Investigator of Compressed Knowing</p>
                          <div className="space-y-2 text-sm">
                            <p><strong>Gift:</strong> Distillation</p>
                            <p><strong>Shadow:</strong> The Hoarder</p>
                            <p><strong>Core Alignment:</strong> Conscious Forger, Stone Carrier</p>
                            <p className="text-stone-600 leading-relaxed">
                              The one who seeks condensed truth in dense materials—research papers, technical docs, sacred texts. Masters the art of extracting compressed wisdom.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                          <h4 className="text-xl font-serif text-stone-800 mb-2">Walker of The Way</h4>
                          <p className="text-sm text-amber-700 mb-3 italic">The Pathmaker of Ancestral Knowing</p>
                          <div className="space-y-2 text-sm">
                            <p><strong>Gift:</strong> Wayfinding</p>
                            <p><strong>Shadow:</strong> The Wanderer</p>
                            <p><strong>Core Alignment:</strong> Conscious Forger, Stone Forger</p>
                            <p className="text-stone-600 leading-relaxed">
                              The one who walks with inner compass, forging paths for others to follow. Often unseen and memorialized well after their Way is walked.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                          <h4 className="text-xl font-serif text-stone-800 mb-2">The Stone Keeper</h4>
                          <p className="text-sm text-amber-700 mb-3 italic">The Guardian of Memory and Weight</p>
                          <div className="space-y-2 text-sm">
                            <p><strong>Gift:</strong> Stewardship</p>
                            <p><strong>Shadow:</strong> The Archivist</p>
                            <p><strong>Core Alignment:</strong> Stone Carrier</p>
                            <p className="text-stone-600 leading-relaxed">
                              The one who holds stones consciously, not as burden but as trust. Keeper of lineage, memory, and honored weight.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                          <h4 className="text-xl font-serif text-stone-800 mb-2">The Stone Breaker</h4>
                          <p className="text-sm text-amber-700 mb-3 italic">The Liberator Through Conscious Destruction</p>
                          <div className="space-y-2 text-sm">
                            <p><strong>Gift:</strong> Liberation</p>
                            <p><strong>Shadow:</strong> The Demolisher</p>
                            <p><strong>Core Alignment:</strong> Stone Thrower</p>
                            <p className="text-stone-600 leading-relaxed">
                              The one who breaks stones with precision and purpose. Not rage-throwing, but conscious deconstruction of what no longer serves.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                          <h4 className="text-xl font-serif text-stone-800 mb-2">The Stone Caller</h4>
                          <p className="text-sm text-amber-700 mb-3 italic">The Summoner of What's Ready to Emerge</p>
                          <div className="space-y-2 text-sm">
                            <p><strong>Gift:</strong> Summoning</p>
                            <p><strong>Shadow:</strong> The Conjurer</p>
                            <p><strong>Core Alignment:</strong> Stone Thrower, Conscious Forger</p>
                            <p className="text-stone-600 leading-relaxed">
                              The one who calls stones forward from the Field. Practices active patience at the threshold of what wants to materialize.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                          <h4 className="text-xl font-serif text-stone-800 mb-2">The Stone Witness</h4>
                          <p className="text-sm text-amber-700 mb-3 italic">The Observer of Materialization</p>
                          <div className="space-y-2 text-sm">
                            <p><strong>Gift:</strong> Anchoring</p>
                            <p><strong>Shadow:</strong> The Spectator</p>
                            <p><strong>Core Alignment:</strong> Conscious Forger, Stone Forger</p>
                            <p className="text-stone-600 leading-relaxed">
                              The one who observes without grasping. Holds presence as stones materialize, stabilizing emergence through conscious attention.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Portal Pages */}
                    <div className="bg-stone-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-serif text-stone-800 mb-4">Archetype Portal Pages</h3>
                      <p className="text-stone-700 mb-4">
                        Each expanded archetype has a dedicated portal page at <code className="bg-white px-2 py-1 rounded text-sm">/archetype/:id</code>
                      </p>
                      <div className="space-y-2 text-sm text-stone-600">
                        <p>• Hero image and archetype introduction (Nameless/Faceless aesthetic)</p>
                        <p>• Gift, Shadow, and Experience sections</p>
                        <p>• Core practice spotlight with step-by-step instructions</p>
                        <p>• Progression path (glossary focus, key concepts, evolution trajectory)</p>
                        <p>• Related practices grid (filtered from 28 total)</p>
                        <p>• Glossary term recommendations with bidirectional links</p>
                        <p>• Social share functionality</p>
                      </div>
                    </div>

                    {/* Practice Integration */}
                    <div>
                      <h3 className="text-2xl font-serif text-stone-800 mb-4">Practice Integration</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-amber-50 p-4 rounded">
                          <p className="font-semibold text-stone-800 mb-2">28 Total Practices</p>
                          <p className="text-sm text-stone-600">
                            Each practice tagged with both core and expanded archetypes for precise filtering
                          </p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded">
                          <p className="font-semibold text-stone-800 mb-2">11-Button Filter Bar</p>
                          <p className="text-sm text-stone-600">
                            View All + 4 core archetypes + 6 expanded archetypes on /practices page
                          </p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded">
                          <p className="font-semibold text-stone-800 mb-2">URL Parameter Support</p>
                          <p className="text-sm text-stone-600">
                            /practices?archetype=carrier links from archetype pages for pre-filtered views
                          </p>
                        </div>
                        <div className="bg-amber-50 p-4 rounded">
                          <p className="font-semibold text-stone-800 mb-2">Archetype Badges</p>
                          <p className="text-sm text-stone-600">
                            Clickable badges on practices and glossary terms link to portal pages
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Discovery Hub */}
                    <div className="border-l-4 border-amber-600 pl-6">
                      <h3 className="text-2xl font-serif text-stone-800 mb-4">The Discovery Hub Transformation</h3>
                      <p className="text-stone-700 leading-relaxed mb-4">
                        The <Link href="/archetypes" className="text-amber-700 hover:text-amber-800 underline">/archetypes</Link> page transformed from "cul de sac" to "superhighway" :: beautiful prose preserved, utility pathways added below.
                      </p>
                      <div className="space-y-2 text-sm text-stone-600">
                        <p>• 4 core archetypes with full archetypal prose (unchanged)</p>
                        <p>• Branch visualization showing 2-3 expanded archetypes per core</p>
                        <p>• Practice count badges with CTA buttons</p>
                        <p>• 6 expanded archetype cards in bottom grid</p>
                        <p>• Dual quiz CTAs (Layer 1: Core + Layer 2: Expanded)</p>
                        <p>• Complete bidirectional linking ecosystem (practices ↔ portals ↔ glossary ↔ archetypes)</p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Infographics */}
              {activeSection === "infographics" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">Infographic Specifications</h2>
                  <p className="text-stone-600 mb-8">Visual guides for illustrating The Stone Forger's Way concepts</p>

                  <div className="space-y-8">
                    {Object.entries(infographicSpecs).filter(([key]) => key.startsWith('visual')).map(([key, spec]: [string, any]) => (
                      <div key={key} className="bg-white p-6 rounded-lg border border-stone-200">
                        <h3 className="text-xl font-serif text-stone-800 mb-2">{spec.name}</h3>
                        <p className="text-sm text-stone-500 mb-3 italic">{spec.purpose}</p>
                        <div className="space-y-2 text-sm">
                          <p><strong>Layout:</strong> {spec.layout}</p>
                          {spec.elements && typeof spec.elements === 'object' && !Array.isArray(spec.elements) && (
                            <div className="mt-3">
                              <p className="font-medium text-amber-700 mb-2">Elements:</p>
                              <div className="space-y-2">
                                {Object.entries(spec.elements).map(([elemKey, elemValue]: [string, any]) => (
                                  <div key={elemKey} className="bg-stone-50 p-3 rounded">
                                    <p className="font-medium capitalize">{elemKey}</p>
                                    <p className="text-xs text-stone-600">{elemValue.visual || elemValue}</p>
                                    {elemValue.color && <p className="text-xs text-stone-500">Color: {elemValue.color}</p>}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {spec.elements && typeof spec.elements === 'string' && (
                            <p><strong>Elements:</strong> {spec.elements}</p>
                          )}
                          {spec.weeks && (
                            <div className="mt-3">
                              <p className="font-medium text-amber-700 mb-2">Weekly Progression:</p>
                              <div className="space-y-1">
                                {spec.weeks.map((week: string, i: number) => (
                                  <p key={i} className="text-xs text-stone-600 pl-3">• {week}</p>
                                ))}
                              </div>
                            </div>
                          )}
                          {spec.pillars && (
                            <p><strong>Pillars:</strong> {spec.pillars.join(', ')}</p>
                          )}
                          {spec.progression && (
                            <p className="mt-2 italic text-stone-600">{spec.progression}</p>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Design Guidance */}
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-serif text-stone-800 mb-4">Design Guidance</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        {Object.entries(infographicSpecs.designGuidance).map(([key, value]) => (
                          <div key={key}>
                            <p className="font-medium text-amber-700 capitalize mb-1">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </p>
                            <p className="text-stone-700">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Glossary */}
              {activeSection === "glossary" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">
                    Complete Glossary ({glossaryTerms.length} terms)
                  </h2>
                  <p className="text-stone-600 mb-8">
                    Each term has three layers: Simple (what it is), Experience (how it feels),
                    and Insight (the deeper truth).
                  </p>
                  <div className="space-y-6">
                    {glossaryTerms.map((term: GlossaryTerm) => (
                      <div key={term.term} className="bg-white p-6 rounded-lg border border-stone-200">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-xl font-serif text-stone-800">{term.term}</h4>
                          <span className="text-xs px-2 py-1 bg-stone-100 text-stone-600 rounded">
                            {categoryLabels[term.category]}
                          </span>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-medium text-amber-700">Simple:</span>
                            <p className="text-stone-600">{term.simple}</p>
                          </div>
                          <div>
                            <span className="font-medium text-amber-700">Experience:</span>
                            <p className="text-stone-600">{term.experience}</p>
                          </div>
                          <div>
                            <span className="font-medium text-amber-700">Insight:</span>
                            <p className="text-stone-600">{term.insight}</p>
                          </div>
                          {term.relatedTerms.length > 0 && (
                            <div>
                              <span className="font-medium text-stone-500">Related:</span>
                              <span className="text-stone-400 ml-2">{term.relatedTerms.join(", ")}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Reflections */}
              {activeSection === "reflections" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">
                    Reflections ({reflections.length} essays)
                  </h2>
                  <div className="space-y-4">
                    {reflections.map((reflection) => (
                      <div key={reflection.slug} className="bg-white p-6 rounded-lg border border-stone-200">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xl font-serif text-stone-800">{reflection.title}</h4>
                          <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded">
                            {reflection.category}
                          </span>
                        </div>
                        <p className="text-amber-700 italic mb-2">{reflection.subtitle}</p>
                        <p className="text-stone-600 text-sm">{reflection.excerpt}</p>
                        <p className="text-stone-400 text-xs mt-2">/reflections/{reflection.slug}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Timeline */}
              {activeSection === "timeline" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">The Story Timeline</h2>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <span className="text-amber-600 font-mono text-sm whitespace-nowrap w-24">
                          {item.year}
                        </span>
                        <p className="text-stone-700">{item.event}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Act of Honor */}
              {activeSection === "honor" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">Act of Honor</h2>
                  <div className="bg-amber-50 p-8 rounded-lg space-y-6">
                    <p className="text-lg leading-relaxed text-stone-700">
                      This Creative Context is released as wealth into the Field. There are no legal restrictions
                      on how you use it. This is not a license—it's an invitation to honor.
                    </p>
                    <p className="text-lg leading-relaxed text-stone-700">
                      If you create something beautiful with this context—promotional materials, extensions,
                      interpretations, art—we ask only that you acknowledge the source. Not because we demand it,
                      but because attribution is an act of honor that completes the circle of creative exchange.
                    </p>
                    <div className="bg-white p-6 rounded border border-amber-200">
                      <p className="text-sm text-stone-500 mb-2">Suggested attribution:</p>
                      <p className="text-stone-800 font-medium">
                        Created with The Stone Forger's Creative Context :: thestoneforgers.way
                      </p>
                    </div>
                    <p className="text-stone-600 italic">
                      Those who resonate with this work will honor it naturally. Those who don't were never
                      the intended audience. Trust is the cheat code.
                    </p>
                  </div>
                </section>
              )}

              {/* Intentional Value Exchange */}
              {activeSection === "exchange" && (
                <section>
                  <h2 className="text-3xl font-serif text-stone-800 mb-6 leading-tight">Intentional Value Exchange</h2>
                  <div className="bg-stone-50 p-8 rounded-lg space-y-6">
                    <p className="text-lg leading-relaxed text-stone-700">
                      If this Creative Context serves your work—if it helps you create something valuable,
                      saves you time, or sparks ideas that lead to outcomes that matter—consider completing
                      the exchange.
                    </p>
                    <p className="text-lg leading-relaxed text-stone-700">
                      This isn't a paywall. The context is freely given. But creative work thrives in
                      ecosystems of mutual support. Here are ways to participate:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-stone-200">
                        <Heart className="w-6 h-6 text-amber-600 mb-2" />
                        <h4 className="font-medium text-stone-800 mb-1">Share the Work</h4>
                        <p className="text-sm text-stone-600">
                          Introduce The Stone Forger's Way to someone who would resonate with it.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-stone-200">
                        <Heart className="w-6 h-6 text-amber-600 mb-2" />
                        <h4 className="font-medium text-stone-800 mb-1">Attend Creative Steeping</h4>
                        <p className="text-sm text-stone-600">
                          Join a session at 1000 Ways to Sit in San Francisco.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-stone-200">
                        <Heart className="w-6 h-6 text-amber-600 mb-2" />
                        <h4 className="font-medium text-stone-800 mb-1">Contribute</h4>
                        <p className="text-sm text-stone-600">
                          The project is open source. Code, ideas, and refinements are welcome.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-stone-200">
                        <Heart className="w-6 h-6 text-amber-600 mb-2" />
                        <h4 className="font-medium text-stone-800 mb-1">Support Directly</h4>
                        <p className="text-sm text-stone-600">
                          Financial support helps sustain the work and expand its reach.
                        </p>
                      </div>
                    </div>
                    <div className="text-center pt-4">
                      <Link href="/about">
                        <span className="text-amber-700 hover:text-amber-800 underline cursor-pointer">
                          Learn more about Kamau and the work →
                        </span>
                      </Link>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
