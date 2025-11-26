import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ContributionInvitation from "@/components/ContributionInvitation";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useState, useEffect } from "react";
import { Menu, X, Brain, Clock, Shield, Heart, Sparkles, Lightbulb } from "lucide-react";
import SEO from "@/components/SEO";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import { useNavigation } from "@/hooks/useNavigation";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navGroups = useNavigation();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <Layout showNav={false}>
      <SEO
        title="The Stone Forger's Way :: Move from Chaos to Coherence"
        description="Are you aware of how many stones you are carrying? Their weight is your opportunity. Learn practices to move from anxious chaos to conscious creation."
        image="/stone-carrier.png"
        type="website"
      />
      {/* Floating Hamburger Menu */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-stone-900 shadow-xl overflow-y-auto">
            <div className="sticky top-0 bg-stone-900 border-b border-stone-700 p-4 flex justify-between items-center">
              <Link href="/">
                <span
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-serif text-amber-100 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  The Stone Forger's Way
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-300 hover:text-amber-300 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              {navGroups.map((group) => (
                <div key={group.label}>
                  {group.items ? (
                    <div>
                      <p className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-3">
                        {group.label}
                      </p>
                      <div className="space-y-1 pl-3 border-l-2 border-stone-700">
                        {group.items.map((item) => (
                          <Link key={item.href} href={item.href}>
                            <div
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 px-3 text-stone-200 hover:text-amber-300 hover:bg-stone-800 rounded-r transition-colors cursor-pointer"
                            >
                              {item.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={group.href!}>
                      <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 text-xl font-medium text-stone-100 hover:text-amber-300 transition-colors cursor-pointer border-b border-stone-700"
                      >
                        {group.label}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-stone-700">
              <p className="text-xs text-stone-500 text-center italic">
                "It's better to light a candle than to curse the darkness."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Immediate Diagnosis & Validation */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-amber-50 to-stone-50"></div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/stone-carrier.png"
                alt="The Stone Carrier - carrying invisible weight"
                className="w-80 h-80 object-cover rounded-xl shadow-2xl"
              />
            </div>

            {/* Headline */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-serif text-stone-800 leading-tight">
                Are You Aware of How Many Stones<br />You Are Carrying?
              </h1>

              <p className="text-xl md:text-2xl text-amber-700 leading-relaxed max-w-3xl mx-auto">
                Their weight is your opportunity. Welcome to <strong>The Stone Forger's Way</strong> :: an Earth-optimized grounding practice for moving from audible chaos to clarified coherence
              </p>
            </div>

            {/* Body Copy */}
            <div className="bg-white/80 backdrop-blur p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-stone-700">
              <p>
                You know the feeling. The invisible weight. The constant busyness that somehow leads nowhere.
                The exhaustion of carrying past regrets, future anxieties, and unfulfilled obligations—all
                swinging chaotically with every step you take.
              </p>
              <p>
                This is <GlossaryTooltip term="The Stone Carrier">The Stone Carrier</GlossaryTooltip>. Every human
                knows this weight. The question is: what will you do with it?
              </p>
              <p>
                <strong>The Stone Forger's Way</strong> offers a path :: a temporal approach to conscious creation
                that draws from ancient wisdom, modern science, and Earth's most grounding force—stone itself.
                This practice teaches you to transform weight into opportunity. To <GlossaryTooltip term="Trust">trust</GlossaryTooltip> that
                the <GlossaryTooltip term="Stepping Stone">stone solidifies as you step</GlossaryTooltip>.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/archetype-quiz">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6 w-full sm:w-auto">
                  Discover Your Archetype
                </Button>
              </Link>
              <Link href="/practices">
                <Button size="lg" variant="outline" className="border-2 border-stone-600 text-stone-700 hover:bg-stone-100 text-lg px-8 py-6 w-full sm:w-auto">
                  Start with One Practice
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section 1: The Shift You're Seeking */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-6">
              From Chaos to Coherence
            </h2>
            <p className="text-xl text-stone-600 text-center max-w-2xl mx-auto mb-16">
              What this practice offers
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Neurological Shift */}
              <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Neurological Shift</h3>
                <p className="text-stone-700 leading-relaxed">
                  Break the amygdala-loop. Move from fear state to executive state. Achieve the <GlossaryTooltip term="Pre-Flow Coherence">pre-flow coherence</GlossaryTooltip> necessary
                  for creativity, productivity, and presence.
                </p>
              </div>

              {/* Temporal Mastery */}
              <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Temporal Mastery</h3>
                <p className="text-stone-700 leading-relaxed">
                  Stop chasing time. Learn <GlossaryTooltip term="Active Patience">Active Patience</GlossaryTooltip>—the art of growing
                  beautifully along <GlossaryTooltip term="The Trellis and the Vine">the structure of time</GlossaryTooltip>. Build systems that work while you rest.
                </p>
              </div>

              {/* Energy Protection */}
              <div className="bg-amber-50 p-8 rounded-xl border border-amber-100">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-snug">Energy Protection</h3>
                <p className="text-stone-700 leading-relaxed">
                  Develop discernment. Ask "Is this mine to carry?" before reacting. Protect your creative energy.
                  Choose your battles consciously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Ancient Wisdom Meets Modern Science */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-6">
              A Wellspring of Insight
            </h2>
            <p className="text-xl text-stone-600 text-center max-w-2xl mx-auto mb-12">
              Where this practice comes from
            </p>

            <p className="text-lg text-stone-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
              <strong>The Stone Forger's Way</strong> is an amalgamation—a synthesis of indigenous wisdom traditions,
              quantum physics, neuroscience, personal lineage, and lived creative practice.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                <Sparkles className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="text-lg font-medium text-stone-800 mb-2">Indigenous Knowing</h4>
                <p className="text-sm text-stone-600">
                  <GlossaryTooltip term="Terma">Terma</GlossaryTooltip> (hidden treasures), <GlossaryTooltip term="Tertön">tertön</GlossaryTooltip> (treasure
                  revealers), <GlossaryTooltip term="Whakapapa">whakapapa</GlossaryTooltip>, ancestral practices of presence
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                <Sparkles className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="text-lg font-medium text-stone-800 mb-2">Quantum Physics</h4>
                <p className="text-sm text-stone-600">
                  Observer effect, coherence, materialization, <GlossaryTooltip term="The Field">the Field</GlossaryTooltip>, the physics of thought becoming form
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                <Sparkles className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="text-lg font-medium text-stone-800 mb-2">Neuroscience</h4>
                <p className="text-sm text-stone-600">
                  Amygdala regulation, prefrontal cortex activation, <GlossaryTooltip term="Neuroplasticity">neuroplasticity</GlossaryTooltip>, <GlossaryTooltip term="Cardiac Coherence">cardiac coherence</GlossaryTooltip>,
                  the biology of transformation
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                <Sparkles className="w-8 h-8 text-amber-600 mb-4" />
                <h4 className="text-lg font-medium text-stone-800 mb-2">Personal Lineage</h4>
                <p className="text-sm text-stone-600">
                  <Link href="/samuel-r-harris" className="text-amber-700 hover:text-amber-800 underline">Samuel R. Harris</Link> (chemist,
                  minister, "one solitary life lit up by love"), Ray Kemp, the Carter Clan
                </p>
              </div>
            </div>

            <p className="text-stone-600 text-center mt-12 max-w-3xl mx-auto leading-relaxed">
              This practice draws from decades of creative presence work throughout a career needing many
              deep breaths, explorative research on methodologies for uplifting the creative spirit in
              organizations and teams, and intentional behavior shifting realizations by Kamau Zuberi Akabueze
              on his path to informed and intentional creative responsibility. Most importantly, <strong>The Stone
              Forger's Way</strong> is grounded in Earth's abundant magnetic forces :: appreciating stone as teacher,
              stone as ally.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Where This Practice Meets You */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-6">
              This Works For
            </h2>
            <p className="text-xl text-stone-600 text-center max-w-2xl mx-auto mb-16">
              Your life, your practice, your path
            </p>

            <p className="text-lg text-stone-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Whether you're navigating work deadlines, relationship dynamics, creative blocks, plant medicine integration,
              cognitive wellness, or spiritual practice—these archetypes and frameworks meet you where you are.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-stone-50 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-stone-800 mb-2">Work & Productivity</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Transform mundane tasks into conscious <GlossaryTooltip term="Stone Forging">forging</GlossaryTooltip>. Move from
                  "always busy" to aligned materialization. Focus attention. Build true productivity.
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-stone-800 mb-2">Relationships & Boundaries</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Practice discernment. Protect your energy. Recognize what's yours to carry and what isn't. Create healthy containers.
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-stone-800 mb-2">Creative Practice</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Access <GlossaryTooltip term="Flow State">flow states</GlossaryTooltip>. Trust the materialization process. Build
                  systems that support your creative work even while you rest.
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-stone-800 mb-2">Plant Medicine Integration</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Ground non-ordinary insights into embodied practice. Navigate altered states with coherence and presence.
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-stone-800 mb-2">Cognitive Wellness</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Break repetitive <GlossaryTooltip term="Toroidal Binding">thought patterns</GlossaryTooltip>. Achieve neurological
                  coherence. Master your relationship with time and attention.
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-xl">
                <h4 className="text-lg font-medium text-stone-800 mb-2">Spiritual Practice</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Integrate ancient wisdom with modern life. Ground insights. Walk the path of conscious creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Four Practices for Immediate Relief */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-6">
              Start Here
            </h2>
            <p className="text-xl text-stone-600 text-center max-w-2xl mx-auto mb-16">
              Four practices for immediate relief :: No prerequisites. Just begin.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="text-lg font-medium text-stone-800 mb-3">Feel the Stones</h4>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Pause. Acknowledge the weight you carry—the worries, the obligations, the regrets—without trying
                  to fix or judge them. Validation is the first step to freedom.
                </p>
                <Link href="/practices">
                  <span className="text-sm text-amber-700 hover:text-amber-800 font-medium cursor-pointer">
                    Learn This Practice →
                  </span>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="text-lg font-medium text-stone-800 mb-3">The One Stone</h4>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Look at your swinging cloud of obligations. Choose just one. Vow to give it full, undivided attention
                  for five minutes. Let the others swing. This is the beginning of mastery.
                </p>
                <Link href="/practices">
                  <span className="text-sm text-amber-700 hover:text-amber-800 font-medium cursor-pointer">
                    Learn This Practice →
                  </span>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="text-lg font-medium text-stone-800 mb-3">The Silent Check</h4>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Before reacting to any request or obligation, pause and ask: "Is this mine to carry?" This is
                  your shield—the practice of discernment that protects your energy.
                </p>
                <Link href="/practices">
                  <span className="text-sm text-amber-700 hover:text-amber-800 font-medium cursor-pointer">
                    Learn This Practice →
                  </span>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="text-lg font-medium text-stone-800 mb-3">The Trust Breath</h4>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Three breaths to move from fear to presence. Inhale trust. Exhale doubt. <GlossaryTooltip term="Trust">Trust
                  is the cheat code</GlossaryTooltip> that bypasses the tyranny of the rational mind.
                </p>
                <Link href="/practices">
                  <span className="text-sm text-amber-700 hover:text-amber-800 font-medium cursor-pointer">
                    Learn This Practice →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Discover Your Archetype */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-6">
              Which Archetype Are You?
            </h2>
            <p className="text-xl text-stone-600 text-center max-w-2xl mx-auto mb-12">
              Take the journey :: Understanding your current archetype helps you see where you are and where you're growing
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  name: "The Stone Carrier",
                  image: "/stone-carrier.png",
                  description: "Moving through life with invisible weight, exhausted but heroic"
                },
                {
                  name: "The Stone Thrower",
                  image: "/stone-thrower.png",
                  description: "Releasing burdens without consciousness, creating chaos"
                },
                {
                  name: "The Conscious Forger",
                  image: "/active-patience.png",
                  description: "Beginning to shape stones with intention, learning presence"
                },
                {
                  name: "The Stone Forger",
                  image: "/stone-forger.png",
                  description: "Mastering the art of conscious creation, trusting the process"
                }
              ].map((archetype) => (
                <div key={archetype.name} className="text-center space-y-4 p-4 rounded-xl hover:bg-stone-50 transition-colors">
                  <img
                    src={archetype.image}
                    alt={archetype.name}
                    className="w-56 h-56 mx-auto object-cover rounded-lg shadow-lg"
                  />
                  <h3 className="text-xl font-semibold text-stone-800">{archetype.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{archetype.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/archetype-quiz">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-10 py-6">
                  Take the Archetype Quiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Explore the Ecosystem */}
      <section className="py-24 bg-stone-800 text-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center leading-tight mb-6">
              Go Deeper
            </h2>
            <p className="text-xl text-stone-300 text-center max-w-2xl mx-auto mb-16">
              The complete practice
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/reflections">
                <div className="p-8 bg-stone-700 rounded-lg hover:bg-stone-600 transition-colors cursor-pointer h-full">
                  <h3 className="text-2xl font-serif mb-4 leading-tight">Reflections</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Read essays exploring the philosophy, science, and lived experience of stone forging.
                    Filter by Origin, Philosophy, Practice, Science, Archetype, or Lineage.
                  </p>
                </div>
              </Link>

              <Link href="/concepts">
                <div className="p-8 bg-stone-700 rounded-lg hover:bg-stone-600 transition-colors cursor-pointer h-full">
                  <h3 className="text-2xl font-serif mb-4 leading-tight">Concepts & Practices</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Dive into the core frameworks: <GlossaryTooltip term="Trust">Trust as The Cheat Code</GlossaryTooltip>, <GlossaryTooltip term="Active Patience">Active
                    Patience</GlossaryTooltip>, <GlossaryTooltip term="The Trellis and the Vine">The Trellis and the Vine</GlossaryTooltip>, <GlossaryTooltip term="The Shield">The Shield</GlossaryTooltip>.
                  </p>
                </div>
              </Link>

              <Link href="/glossary">
                <div className="p-8 bg-stone-700 rounded-lg hover:bg-stone-600 transition-colors cursor-pointer h-full">
                  <h3 className="text-2xl font-serif mb-4 leading-tight">Glossary & Lineage</h3>
                  <p className="text-stone-300 leading-relaxed">
                    Understand the language of stone forging. Meet <Link href="/samuel-r-harris" className="text-amber-400 hover:text-amber-300 underline">Samuel
                    R. Harris</Link> and the lineage that grounds this work.
                  </p>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <p className="text-stone-400 mb-6">
                Explore the research traditions that inform this practice
              </p>
              <a
                href="/research-forge.html"
                className="text-amber-400 hover:text-amber-300 underline font-medium text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the Research Forge →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Section 7: Conscious Value Exchange */}
      <section className="py-24 bg-gradient-to-b from-stone-800 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ContributionInvitation />
          </div>
        </div>
      </section>
    </Layout>
  );
}
