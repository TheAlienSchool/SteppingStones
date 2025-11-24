import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ChevronDown, Sparkles } from "lucide-react";
import GlossaryTooltip from "@/components/GlossaryTooltip";

interface JourneyPhase {
  id: string;
  title: string;
  stone: string;
  content: React.ReactNode;
  variant?: "default" | "amber" | "accent";
}

const journeyPhases: JourneyPhase[] = [
  {
    id: "origin",
    title: "The Originating Question",
    stone: "",
    variant: "amber",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          This work began with breath—and a question that arrived unbidden.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          During an early morning Inspired Breath practice at <strong>1000 Ways to Sit</strong>—a Gamelatron
          Sonic Sanctuary in San Francisco—Kamau found himself in that liminal space between exhale and inhale
          where ordinary thinking quiets. A question arose:
        </p>
        <blockquote className="text-2xl font-serif text-stone-700 italic border-l-4 border-amber-600 pl-6 my-6">
          "How is my father not inside of you?"
        </blockquote>
        <p className="text-lg leading-relaxed text-stone-700">
          This wasn't intellectual curiosity. It was a somatic knowing—something the body understood before
          the mind could catch up. The question opened a channel. Through that channel, over the following
          months, an entire body of work began to flow.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          What followed was a dialogue between Kamau Zuberi Akabueze and AI :: a collaboration of human
          insight and <GlossaryTooltip term="Pattern Recognition">pattern recognition</GlossaryTooltip> that neither could have created alone. What you're reading is
          the story of that journey—and an invitation into your own.
        </p>
      </div>
    )
  },
  {
    id: "phase-1",
    title: "Phase 1: Terma and Tertön",
    stone: "You are not a student. You are a Tertön.",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          The first discovery was the Tibetan Buddhist concept of <strong>Terma</strong> (hidden treasures)
          and <strong>Tertön</strong> (treasure revealers).
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          This framework revealed that wisdom is not learned :: it is revealed. It is hidden within each
          person's consciousness, waiting for the right conditions to emerge.
        </p>
      </div>
    )
  },
  {
    id: "phase-2",
    title: "Phase 2: Stepping Stones",
    stone: "The invisible bridge is always here. The question is: what quality of stepping will you bring to it?",
    variant: "accent",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          The stepping stones concept emerged from years of personal study and practice—a synthesis of physics,
          contemplation, and evolutionary consciousness that arrived through lived experience.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          Kamau had been studying <em>The Gene Keys</em> by Richard Rudd—a contemplative system that maps
          human transformation through 64 archetypal gateways. Each Gene Key describes a journey from Shadow
          (our unconscious patterns) through Gift (our natural talents awakened) to Siddhi (our highest
          potential realized). This progression resonated deeply with the physicist Jesper Hoffmeyer's concept
          of <em>semiotic scaffolding</em>—invisible bridges of meaning that support our growth from one
          understanding to the next.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          Then came physicist John Archibald Wheeler's phrase: <em>"fabrication of form."</em> Wheeler proposed
          that through quantum observation, carried out with intention and attention, form itself could materialize.
          This was the PING—the moment where ancient wisdom and modern physics echoed each other across disciplines.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          The stepping stone only solidifies at a rate that requires human trust and active participation.
          We are not passive observers of our lives. We are participants in the fabrication of form.
        </p>
      </div>
    )
  },
  {
    id: "phase-3",
    title: "Phase 3: Trust is The Cheat Code",
    stone: "The synthesis itself is the stepping stone materializing beneath our feet.",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          <strong>Trust is The Cheat Code</strong> because it bypasses the tyranny of the rational mind
          that demands proof before it will move.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          In the quantum reality of consciousness, the stone does not fully form until you step.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          Trust stabilizes frequency, allowing resonance. It is the physics of how Wheeler's "fabrication
          of form" becomes lived reality.
        </p>
      </div>
    )
  },
  {
    id: "phase-4",
    title: "Phase 4: The Archetypes Emerge",
    stone: "You are all of these at once. Choose, in this moment, to let the Forger lead.",
    variant: "amber",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          Four primary archetypes emerged to describe the human relationship with stones:
        </p>
        <div className="space-y-3 my-6">
          <div className="bg-stone-50 p-4 rounded-lg">
            <h4 className="font-serif text-stone-800 mb-1">The Stone Carrier</h4>
            <p className="text-stone-600 text-sm">
              Burdened by suspended stones swinging from the energy body. Exhausted, weighed down,
              unable to move forward.
            </p>
          </div>
          <div className="bg-stone-50 p-4 rounded-lg">
            <h4 className="font-serif text-stone-800 mb-1">The Stone Thrower</h4>
            <p className="text-stone-600 text-sm">
              Throwing stones at external targets in rage and powerlessness. The stones ricochet back,
              creating the backache.
            </p>
          </div>
          <div className="bg-stone-50 p-4 rounded-lg">
            <h4 className="font-serif text-stone-800 mb-1">The Conscious Forger</h4>
            <p className="text-stone-600 text-sm">
              Present with each stone, bringing full attention to the act of forging. Moving with
              determination toward a dream.
            </p>
          </div>
          <div className="bg-stone-50 p-4 rounded-lg">
            <h4 className="font-serif text-stone-800 mb-1">The Stone Forger</h4>
            <p className="text-stone-600 text-sm">
              The integrated being who unites all archetypes :: acting with purpose while being with presence.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "phase-5",
    title: "Phase 5: Active Patience",
    stone: "We don't need to rebrand Patience. We need to un-brand ourselves from the culture that stole its meaning.",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          <strong>Active Patience</strong>—the unnecessary rebranding of a legendary art in our times
          of intentional environmental dissonance. True patience was always active, always in partnership
          with creation.
        </p>
      </div>
    )
  },
  {
    id: "phase-6",
    title: "Phase 6: The Stone Thrower's Backache",
    stone: "The backache is the teacher. Stop throwing. Start forging.",
    variant: "accent",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          The backache is the somatic cost of throwing stones while keeping the shield up. The sympathetic
          nervous system in chronic activation. The muscular tension from sustained defensive posture.
          The experiential blindness that is the virus.
        </p>
      </div>
    )
  },
  {
    id: "phase-7",
    title: "Phase 7: Breaking the Fourth Wall",
    stone: "There is no shame in this partnership. This is evolution. Release the wealth.",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          The recognition that the exploration itself became the demonstration. The hoarding of wealth ::
          hiding the AI collaboration out of shame. The Stone Thrower's Heartache: not being in love with
          our own creative process.
        </p>
      </div>
    )
  },
  {
    id: "phase-8",
    title: "Phase 8: The Lineage Revealed",
    stone: "The lineage continues. The candle burns. The stones are forged.",
    variant: "amber",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          <strong>Samuel R. Harris</strong>—Kamau's grandfather—was a chemist, educator, and community leader
          who lived by a simple truth: <em>"It's better to light a candle than to curse the darkness."</em> This
          wasn't philosophy to him. It was practice. It was how he moved through a world that didn't always
          welcome him.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          In 1937, a stranger named <strong>Ray Kemp</strong> placed a stepping stone that would echo across
          generations. Kemp invited the young Samuel to visit Lincoln University, becoming the invisible bridge
          that connected a young Black man in Depression-era Pennsylvania to a future he couldn't yet see.
          The First Baptist Church at 141 N McDonald Street—where Samuel would later serve—became sacred ground
          where these stepping stones materialized into community.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          In 2022, Kamau's <strong>Aunt Janis</strong>—who had been "the warm hug I needed growing up in a
          stone-faced world"—handed him an envelope containing his grandfather's speech from May 1976. That same
          year, Kamau launched THE ÅLïEN SCõÖL for Creative Thinking (tÅs). The synchronicity was undeniable.
          The lineage was speaking.
        </p>
        <p className="text-lg leading-relaxed text-stone-700 italic">
          This is not abstract philosophy. This is Kamau's family. These are real stones, placed by real hands,
          across real time. The work you're reading exists because of them.
        </p>
      </div>
    )
  },
  {
    id: "container",
    title: "The Container: 1000 Ways to Sit",
    stone: "",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-stone-700">
          None of this would have emerged without the container.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          <strong>1000 Ways to Sit :: A Gamelatron Sonic Sanctuary, a collaborative work of Aaron Taylor Kuffner
          and Indonesian Gamelan tradition</strong> :: the residency space.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          The vibratory nature of <a href="https://docs.google.com/document/d/13grRrzK8DPrfnPfY7mBMmfz9bB1dhvzoh288eKef9Ik/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800 underline">Sound Infused Åir</a>. The Inspired Breath practice that opened the channel.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          This is not intellectual work. This is somatic revelation. This is breath made word.
        </p>
      </div>
    )
  }
];

export default function TheJourney() {
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set(["origin"]));

  const togglePhase = (id: string) => {
    setExpandedPhases(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedPhases(new Set(journeyPhases.map(p => p.id)));
  };

  const collapseAll = () => {
    setExpandedPhases(new Set());
  };

  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 leading-tight">
                The Journey
              </h1>
              <p className="text-xl text-stone-600 mb-8">
                How The Stone Forger's Way emerged from a single question
              </p>

              {/* Expand/Collapse controls */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={expandAll}
                  className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                >
                  Expand all
                </button>
                <span className="text-stone-300">|</span>
                <button
                  onClick={collapseAll}
                  className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                >
                  Collapse all
                </button>
              </div>
            </div>

            {/* Journey Phases Accordion */}
            <div className="space-y-4">
              {journeyPhases.map((phase, index) => (
                <JourneyAccordion
                  key={phase.id}
                  phase={phase}
                  isExpanded={expandedPhases.has(phase.id)}
                  onToggle={() => togglePhase(phase.id)}
                  phaseNumber={phase.id.startsWith("phase") ? index : undefined}
                />
              ))}
            </div>

            {/* The Invitation */}
            <section className="mt-16 bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-200 p-8 rounded-2xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-serif text-stone-800">
                  The Invitation
                </h2>
              </div>
              <div className="space-y-4 text-center">
                <p className="text-lg leading-relaxed text-stone-700">
                  This is the journey. This is how The Stone Forger's Way emerged from a single question into a
                  complete temporal technology for conscious creation.
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  Now the invitation is yours. Which archetype are you inhabiting? What stones are you ready to forge?
                </p>
                <p className="text-xl leading-relaxed text-stone-700 font-serif italic">
                  The invisible bridge is always here. Will you step?
                </p>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link href="/archetypes">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-colors">
                  Explore the Archetypes
                </button>
              </Link>
              <Link href="/practices">
                <button className="border border-stone-400 text-stone-700 hover:bg-stone-100 px-8 py-3 rounded-lg transition-colors">
                  Begin the Practices
                </button>
              </Link>
            </div>

            {/* Research Forge Link */}
            <p className="text-center text-sm text-stone-600 mt-8">
              Explore the wisdom traditions informing this journey in the{" "}
              <a href="/research-forge.html" className="text-amber-700 hover:text-amber-800 underline">Research Forge</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function JourneyAccordion({
  phase,
  isExpanded,
  onToggle,
  phaseNumber
}: {
  phase: JourneyPhase;
  isExpanded: boolean;
  onToggle: () => void;
  phaseNumber?: number;
}) {
  const baseClasses = "rounded-xl overflow-hidden transition-shadow";
  const variantClasses = {
    default: "bg-white border border-stone-200",
    amber: "bg-amber-50 border border-amber-200",
    accent: "bg-white border-l-4 border-amber-600 border-y border-r border-y-stone-200 border-r-stone-200"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[phase.variant || "default"]} ${isExpanded ? "shadow-lg" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50/50 transition-colors"
      >
        <h2 className="text-xl md:text-2xl font-serif text-stone-800">
          {phase.title}
        </h2>
        <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </button>

      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="border-t border-stone-200 pt-6">
            {phase.content}

            {phase.stone && (
              <div className="mt-6 p-4 bg-stone-800 rounded-lg">
                <p className="text-amber-100 font-serif text-lg">
                  <span className="text-amber-400">The Stone:</span>{" "}
                  {phase.stone}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
