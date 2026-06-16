import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Users, Heart, Check, ChevronDown, ChevronUp } from "lucide-react";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import { getLatestQuizResult } from "@/lib/archetypeQuiz";

export default function ForgersCohort() {
  const [showWhoThisIsFor, setShowWhoThisIsFor] = useState(false);
  const [showFAQ, setShowFAQ] = useState<{ [key: number]: boolean }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Check for quiz completion on mount and listen for changes
  useEffect(() => {
    const checkQuizCompletion = () => {
      const result = getLatestQuizResult();
      setQuizCompleted(result !== null);
    };

    // Check on mount
    checkQuizCompletion();

    // Listen for storage changes (e.g., quiz completed in another tab or on this page)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'stone_forgers_way_quiz_results') {
        checkQuizCompletion();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleFAQ = (index: number) => {
    setShowFAQ(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const faqs = [
    {
      question: "What if I miss a session?",
      answer: "Sessions are recorded and available to cohort members for 90 days. However, the container is strongest when everyone is present. If you know you'll miss more than one session, this may not be the right cohort timing for you."
    },
    {
      question: "What's the time commitment?",
      answer: "7 weekly live sessions (90 minutes each) plus 30-60 minutes between sessions for journaling, practice, and reflection. This is contemplative work—it requires space, not just time."
    },
    {
      question: "What if I'm not a 'growth-stage' founder?",
      answer: "The language is calibrated for founders leading teams and navigating complex responsibilities, but the practice works for anyone carrying stones consciously. If you recognize yourself in the work, you belong."
    },
    {
      question: "Can I expense this?",
      answer: "Many founders use professional development budgets. This is leadership development at the somatic and consciousness level. We can provide invoices for your accounting team."
    },
    {
      question: "Is this therapy or coaching?",
      answer: "Neither. This is structured contemplative practice for conscious creation. It's closer to a meditation intensive than group coaching—grounded in neuroscience, lineage wisdom, and embodied knowing."
    }
  ];

  const testimonials = [
    {
      quote: "I've experienced life-changing insights",
      archetype: "Stone Carrier discovering lightness"
    },
    {
      quote: "This is transformational work beyond what I have experienced before!",
      archetype: "Conscious Forger recognizing the path"
    },
    {
      quote: "I have never considered my creativity so vividly before.",
      archetype: "Stone Thrower seeing clearly"
    },
    {
      quote: "I had no idea I had created so much weight to carry on my own until now.",
      archetype: "Stone Carrier feeling the stones"
    },
    {
      quote: "The space you hold is unlike any practitioner I have worked with before.",
      archetype: "Patient Forger trusting the container"
    },
    {
      quote: "Thank you for allowing my tears to be present.",
      archetype: "Stone Carrier releasing weight"
    },
    {
      quote: "I am experiencing more time, generosity, and gratitude in my creative life and I have you to thank.",
      archetype: "Conscious Forger forging consciously"
    }
  ];

  return (
    <Layout>
      <SEO
        title="The Stone Forger's Way: 7-Week Cohort for Founders :: The Stone Forger's Way"
        description="For growth-stage founders who seek guidance, embrace growth, and are ready to turn pressure into clarity—without abandoning their humanity. August 18 cohort."
        type="website"
      />

      <div className="min-h-screen">

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  Next Cohort: August 18, 2026
                </div>
              </div>

              {/* Central Image */}
              <div className="flex justify-center mb-8">
                <img
                  src="/TSWF-Stone.png"
                  alt="The Stone Forger's Way - What is a Stone?"
                  className="w-full max-w-2xl rounded-xl shadow-2xl"
                />
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-serif text-stone-800 text-center leading-tight mb-6">
                The Stone Forger's Way
              </h1>
              <p className="text-2xl md:text-3xl text-amber-700 text-center leading-tight mb-6">
                A 7-Week Cohort for Founders Carrying Many Stones
              </p>

              {/* Subhead */}
              <p className="text-xl text-stone-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
                For growth-stage founders seeking guidance and growth—ready to turn pressure into clarity, resilience, and creative power without abandoning our humanity.
              </p>

              {/* Soft Entry CTA */}
              <div className="text-center">
                <Link href="#quiz">
                  <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50">
                    Discover your archetype first →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Weight We Carry */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-8">
                The Weight We Carry
              </h2>

              <div className="bg-stone-50 p-8 rounded-xl mb-8">
                <p className="text-lg text-stone-700 leading-relaxed mb-6">
                  We know the feeling. The invisible weight. The constant busyness that somehow leads nowhere.
                  The exhaustion of carrying past regrets, future anxieties, and unfulfilled obligations—all
                  swinging chaotically with every step we take.
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  This is <GlossaryTooltip term="The Stone Carrier">The Stone Carrier</GlossaryTooltip>. Every human
                  knows this weight. The question is: what will we do with it?
                </p>
              </div>

              {/* Who We Are - Collapsible */}
              <button
                onClick={() => setShowWhoThisIsFor(!showWhoThisIsFor)}
                className="w-full bg-amber-50 p-6 rounded-xl flex items-center justify-between hover:bg-amber-100 transition-colors"
              >
                <h3 className="text-2xl font-serif text-stone-800">Who We Are</h3>
                {showWhoThisIsFor ? (
                  <ChevronUp className="w-6 h-6 text-amber-700" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-amber-700" />
                )}
              </button>

              {showWhoThisIsFor && (
                <div className="bg-amber-50 p-8 rounded-b-xl -mt-2 space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <p className="text-stone-700">
                      We're leading teams, raising capital, and holding relationships and responsibilities that all feel urgent at once
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <p className="text-stone-700">
                      We feel the weight of our decisions in our <GlossaryTooltip term="Somatic">bodies</GlossaryTooltip>, not just our calendars
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <p className="text-stone-700">
                      We're committed to <GlossaryTooltip term="Inner Work">inner work</GlossaryTooltip> as seriously as we are to product, revenue, or fundraising
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <p className="text-stone-700">
                      We want a space where we're seen as human first, founder second
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 2: What Is a Stone? */}
        <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-8">
                What Is a Stone?
              </h2>

              <div className="bg-amber-50 p-8 rounded-xl mb-12">
                <p className="text-xl text-stone-700 leading-relaxed mb-4">
                  In <strong>The Stone Forger's Way</strong>, a <GlossaryTooltip term="Stepping Stone">stone</GlossaryTooltip> is any moment, task, obligation, relationship, creative work, or life circumstance that requires our attention and energy.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed italic">
                  It's the fundamental unit of conscious creation.
                </p>
              </div>

              <p className="text-lg text-stone-600 text-center mb-12">
                We're not short on stones. We're short on the practice of choosing which stones are ours to carry, which can be set down, and which are quietly forming the path beneath our feet.
              </p>

              {/* Image: TSFW Stages */}
              <img
                src="/TSFW-Stages.png"
                alt="The Three States of Stones"
                className="w-full rounded-xl shadow-2xl mb-12"
              />

              {/* Three States */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-stone-100 p-6 rounded-xl">
                  <h3 className="text-xl font-serif text-stone-800 mb-3">Unexamined Stones</h3>
                  <p className="text-sm text-stone-500 mb-4 italic">The Stone Carrier's burden</p>
                  <p className="text-stone-700 leading-relaxed">
                    Invisible weights we carry—past regrets, future anxieties, unfulfilled obligations. They swing chaotically, creating exhaustion and fragmentation.
                  </p>
                </div>

                <div className="bg-amber-100 p-6 rounded-xl">
                  <h3 className="text-xl font-serif text-stone-800 mb-3">Thrown Stones</h3>
                  <p className="text-sm text-amber-700 mb-4 italic">The Stone Thrower's release</p>
                  <p className="text-stone-700 leading-relaxed">
                    Burdens released without consciousness—obligations abandoned, relationships ended abruptly. Temporary relief that often generates new chaos.
                  </p>
                </div>

                <div className="bg-amber-200 p-6 rounded-xl">
                  <h3 className="text-xl font-serif text-stone-800 mb-3">Forged Stones</h3>
                  <p className="text-sm text-amber-800 mb-4 italic">The Stone Forger's creation</p>
                  <p className="text-stone-700 leading-relaxed">
                    Moments we've chosen to engage with full presence. When we bring undivided attention to a single stone, it becomes part of our path.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link href="/archetypes">
                  <span className="text-amber-700 hover:text-amber-800 underline cursor-pointer">
                    Learn more about the four archetypes →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What Grounds This Work? */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-8">
                What Grounds This Work?
              </h2>

              {/* Image: TSFW Pillars */}
              <img
                src="/TSFW-Pillars.png"
                alt="The Four Pillars of The Stone Forger's Way"
                className="w-full rounded-xl shadow-2xl mb-12"
              />

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-stone-50 p-6 rounded-xl">
                  <h3 className="text-xl font-serif text-stone-800 mb-3">Indigenous Knowing</h3>
                  <p className="text-stone-700 leading-relaxed">
                    <GlossaryTooltip term="Terma">Terma</GlossaryTooltip> (hidden treasures), <GlossaryTooltip term="Tertön">tertön</GlossaryTooltip> (treasure revealers), <GlossaryTooltip term="Whakapapa">whakapapa</GlossaryTooltip>, ancestral practices of presence.
                  </p>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl">
                  <h3 className="text-xl font-serif text-stone-800 mb-3">Quantum Physics</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Observer effect, coherence, materialization, <GlossaryTooltip term="The Field">the Field</GlossaryTooltip>—the physics of thought becoming form.
                  </p>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl">
                  <h3 className="text-xl font-serif text-stone-800 mb-3">Neuroscience</h3>
                  <p className="text-stone-700 leading-relaxed">
                    Amygdala regulation, <GlossaryTooltip term="Neuroplasticity">neuroplasticity</GlossaryTooltip>, <GlossaryTooltip term="Cardiac Coherence">cardiac coherence</GlossaryTooltip>—the biology of transformation.
                  </p>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl">
                  <h3 className="text-xl font-serif text-stone-800 mb-3">Personal Lineage</h3>
                  <p className="text-stone-700 leading-relaxed">
                    <Link href="/samuel-r-harris" className="text-amber-700 hover:text-amber-800 underline">Samuel R. Harris</Link> (chemist, minister, "one solitary life lit up by love"), Ray Kemp, the Carter Clan.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/research-forge.html"
                  className="text-amber-700 hover:text-amber-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the Research Forge →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Voices from The Way */}
        <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-6">
                Voices from The Way
              </h2>
              <p className="text-xl text-stone-600 text-center mb-12">
                Field reports from those who've worked with Kamau
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-stone-200">
                    <p className="text-lg text-stone-700 leading-relaxed mb-4 italic">
                      "{t.quote}"
                    </p>
                    <p className="text-sm text-stone-500">
                      — {t.archetype}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/voices">
                  <span className="text-amber-700 hover:text-amber-800 underline cursor-pointer">
                    Read more voices from The Way →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: What We'll Experience */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-8">
                What We'll Experience Over 7 Weeks
              </h2>

              {/* Image: TSFW Journey */}
              <img
                src="/TSFW-Journey.png"
                alt="The 7-Week Journey"
                className="w-full rounded-xl shadow-2xl mb-12"
              />

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-stone-800 mb-2">Identify the Real Stones</h3>
                    <p className="text-stone-700">
                      Not just the ones we talk about publicly—the actual weight we're carrying right now
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-stone-800 mb-2">Learn to Ask: "Is This Mine to Carry?"</h3>
                    <p className="text-stone-700">
                      Before taking on new weight, practice discernment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-stone-800 mb-2">Practice Undivided Attention</h3>
                    <p className="text-stone-700">
                      Bring full presence to a single stone at a time—the beginning of mastery
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-stone-800 mb-2">Explore Biography, Biology, and Leadership</h3>
                    <p className="text-stone-700">
                      How our past, our bodies, and our leadership are already entangled—and how to work with that instead of against it
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-stone-800 mb-2">Build Our Stone Map</h3>
                    <p className="text-stone-700">
                      A living view of the responsibilities, relationships, and creative work that truly belong in one's field
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-medium">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-stone-800 mb-2">Forge a Leadership Path</h3>
                    <p className="text-stone-700">
                      One we can stand on with integrity, not just velocity
                    </p>
                  </div>
                </div>
              </div>

              {/* Image: TSFW Pathway */}
              <img
                src="/TSFW-Pathway.png"
                alt="The Path from Carrier to Forger"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Section 6: What This Is Not */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="border-l-4 border-amber-600 pl-6">
                <h2 className="text-2xl font-serif text-stone-800 mb-4">What This Is Not</h2>
                <div className="space-y-3 text-stone-700">
                  <p className="flex items-center gap-2">
                    <span className="text-stone-400">✗</span> Not group therapy
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-stone-400">✗</span> Not a pitch stage or networking event
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-stone-400">✗</span> Not a "10x your productivity" hack
                  </p>
                </div>
                <p className="text-stone-600 mt-4 italic">
                  This is structured, contemplative work for founders who are willing to look honestly at what they're carrying and how they're carrying it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: The Container */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-8">
                The Container We Agree To
              </h2>

              <div className="bg-amber-50 p-8 rounded-xl border-2 border-amber-200">
                <p className="text-lg text-stone-700 leading-relaxed mb-6">
                  This cohort is held inside a clear agreement: <strong>confidentiality</strong>, <strong>non-judgment</strong>, <strong>presence over performance</strong>, no extraction or selling, and the right to protect the field if someone repeatedly breaks the container.
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  We're not here to impress anyone. We're here to meet our stones honestly.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link href="/the-container">
                  <span className="text-amber-700 hover:text-amber-800 underline cursor-pointer">
                    Read: The Container (on holding space) →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Format & Logistics */}
        <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-12">
                Format & Logistics
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-stone-800 mb-2">Duration</h3>
                  <p className="text-stone-700">7 weeks</p>
                  <p className="text-sm text-stone-500">Weekly 90-minute live sessions</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-stone-800 mb-2">Group Size</h3>
                  <p className="text-stone-700">Maximum 22 founders</p>
                  <p className="text-sm text-stone-500">Intimate cohort for depth</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-stone-800 mb-2">Investment</h3>
                  <p className="text-stone-700">$2,200 USD</p>
                  <p className="text-sm text-stone-500">Professional development eligible</p>
                </div>
              </div>

              <div className="bg-stone-50 p-6 rounded-xl">
                <p className="text-stone-700 leading-relaxed">
                  <strong>Format:</strong> Weekly live sessions on video, guided practices, journaling prompts, and optional between-session reflections. Recordings available for 90 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: About Kamau */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-8">
                About Kamau Zuberi Akabueze
              </h2>

              <div className="bg-stone-50 p-8 rounded-xl">
                <p className="text-lg text-stone-700 leading-relaxed mb-4">
                  Kamau is the founder of <strong>THE ÅLÏEN SCõÖL for Creative Thinking</strong> and creator of <strong>The Stone Forger's Way</strong>, a practice born from his own multi-decade creative and leadership journey and deep work in meditative and contemplative spaces.
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  The Stone Forger's Way is his "humanity product"—an offering for people building in uncertainty, carrying stones that affect teams, families, and futures.
                </p>
              </div>

              <div className="mt-8 text-center space-x-6">
                <Link href="/about">
                  <span className="text-amber-700 hover:text-amber-800 underline cursor-pointer">
                    About Kamau →
                  </span>
                </Link>
                <Link href="/samuel-r-harris">
                  <span className="text-amber-700 hover:text-amber-800 underline cursor-pointer">
                    Samuel R. Harris (lineage) →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Archetype Quiz Gate */}
        <section id="quiz" className="py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">

              {/* Image: TSFW Why */}
              <img
                src="/TSFW-Why.png"
                alt="Why This Matters Now"
                className="w-full rounded-xl shadow-2xl mb-12"
              />

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-8">
                Two Paths Forward
              </h2>

              <p className="text-xl text-stone-600 text-center mb-12 max-w-3xl mx-auto">
                Whether you're ready to join the cohort or want to explore The Stone Forger's Way first, you must complete the <strong>Archetype Quiz</strong>. It's your entry point.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Path A: Explore */}
                <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-stone-200">
                  <h3 className="text-2xl font-serif text-stone-800 mb-4">Path A: Explore The Way</h3>
                  <p className="text-stone-600 mb-6">
                    "Not sure if this is for you? Start here."
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                      <span className="text-stone-700">Take Archetype Quiz</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                      <span className="text-stone-700">Explore Practices</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" />
                      <span className="text-stone-700">Read Reflections</span>
                    </div>
                  </div>
                  <Link href="/archetype-quiz">
                    <Button className="w-full bg-stone-600 hover:bg-stone-700">
                      Discover Your Archetype
                    </Button>
                  </Link>
                </div>

                {/* Path B: Join Cohort */}
                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-xl border-2 border-amber-600">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-2xl font-serif text-stone-800">Path B: Join the Cohort</h3>
                  </div>
                  <p className="text-stone-600 mb-6">
                    "I recognize these stones. I'm ready."
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                      <span className="text-stone-700"><strong>Complete Archetype Quiz</strong></span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                      <span className="text-stone-700">Schedule with Kamau</span>
                    </div>
                  </div>
                  <div className="bg-amber-100 p-4 rounded-lg mb-6">
                    <p className="text-sm text-stone-700">
                      <strong>Investment:</strong> $2,200 USD
                    </p>
                    <p className="text-sm text-stone-700">
                      <strong>Next Cohort:</strong> August 18, 2026
                    </p>
                    <p className="text-sm text-stone-700">
                      <strong>Spots Remaining:</strong> Limited to 22 founders
                    </p>
                  </div>

                  {!quizCompleted ? (
                    <div className="space-y-4">
                      <Link href="/archetype-quiz">
                        <Button className="w-full bg-amber-600 hover:bg-amber-700">
                          1. Take Archetype Quiz First
                        </Button>
                      </Link>
                      <Button
                        disabled
                        className="w-full bg-stone-200 text-stone-400 cursor-not-allowed"
                      >
                        2. Schedule with Kamau (Quiz Required)
                      </Button>
                      <p className="text-xs text-stone-500 text-center">
                        Complete the Archetype Quiz to unlock scheduling
                      </p>
                    </div>
                  ) : (
                    <a
                      href="https://calendly.com/bethecandle/an-overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">
                        Schedule with Kamau →
                      </Button>
                    </a>
                  )}
                  <p className="text-xs text-stone-500 text-center mt-4">
                    For more information, contact <a href="mailto:connect@thealienschool.com" className="text-amber-700 hover:underline">connect@thealienschool.com</a>
                  </p>
                </div>
              </div>

              <p className="text-center text-stone-500 text-sm">
                <GlossaryTooltip term="Trust">Trust is the cheat code</GlossaryTooltip>. If we recognize ourselves in this work, we belong here.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 text-center leading-tight mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-stone-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                    >
                      <h3 className="text-lg font-medium text-stone-800 pr-4">{faq.question}</h3>
                      {showFAQ[index] ? (
                        <ChevronUp className="w-5 h-5 text-stone-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-stone-600 flex-shrink-0" />
                      )}
                    </button>
                    {showFAQ[index] && (
                      <div className="px-6 pb-6">
                        <p className="text-stone-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6 leading-tight">
                Ready to Begin?
              </h2>
              <p className="text-xl text-stone-600 mb-8">
                The stone solidifies as we step. <GlossaryTooltip term="Trust">Trust</GlossaryTooltip> that the path forms beneath our feet.
              </p>
              <Link href="/archetype-quiz">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-10 py-6">
                  Start with Your Archetype
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
