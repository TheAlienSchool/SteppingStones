import { useState } from "react";
import Layout from "@/components/Layout";
import { glossaryTerms, categoryLabels, type GlossaryTerm } from "@/lib/glossaryData";
import { Download, Copy, Check, Heart } from "lucide-react";
import { Link } from "wouter";

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

// Design system tokens
const designSystem = {
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
    usage: {
      background: "stone-50, white",
      text: "stone-700 (body), stone-800 (headings)",
      accent: "amber-600, amber-700 (links, highlights)",
      muted: "stone-400, stone-500 (secondary text)"
    }
  },
  typography: {
    fonts: {
      serif: "Georgia, Times New Roman, serif (headings, titles)",
      sans: "System UI, -apple-system, sans-serif (body)"
    },
    scale: {
      "text-sm": "0.875rem (14px) - captions, meta",
      "text-base": "1rem (16px) - body text",
      "text-lg": "1.125rem (18px) - lead paragraphs",
      "text-xl": "1.25rem (20px) - section intros",
      "text-2xl": "1.5rem (24px) - h3 subheadings",
      "text-3xl": "1.875rem (30px) - h2 section titles",
      "text-4xl": "2.25rem (36px) - h1 page titles (mobile)",
      "text-5xl": "3rem (48px) - h1 page titles (desktop)"
    },
    lineHeight: {
      "leading-tight": "1.25 - headings",
      "leading-snug": "1.375 - subheadings",
      "leading-relaxed": "1.625 - body text"
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
    languagePhilosophy: "Weight is tangible (physical, mental, experiential) for every human. Metaphor is a keystone to integrating value and practical embodiment. The path uplifts visitors toward enlightenment through synthesis, not negation."
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
  conversionStrategy: {
    primary: "Archetype quiz (engagement + personalization)",
    secondary: "Try one micro-practice (immediate relief + validation)",
    tertiary: "Subscribe to newsletter (ongoing relationship)",
    quaternary: "Contribute financially (intentional value exchange)"
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
      version: "1.0"
    },
    designSystem,
    voiceGuidelines,
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
                    onClick={() => setActiveSection(section.id)}
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
                      <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Typography</h3>
                      <div className="bg-stone-50 p-6 rounded-lg space-y-4">
                        <div>
                          <p className="text-sm font-medium text-stone-600 mb-2">Fonts</p>
                          <p className="text-stone-700"><strong>Headings:</strong> {designSystem.typography.fonts.serif}</p>
                          <p className="text-stone-700"><strong>Body:</strong> {designSystem.typography.fonts.sans}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-stone-600 mb-2">Scale</p>
                          {Object.entries(designSystem.typography.scale).map(([cls, desc]) => (
                            <p key={cls} className="text-sm text-stone-600">
                              <code className="bg-stone-200 px-1 rounded">{cls}</code> :: {desc}
                            </p>
                          ))}
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
                            <p className="text-sm text-stone-600">{desc}</p>
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
