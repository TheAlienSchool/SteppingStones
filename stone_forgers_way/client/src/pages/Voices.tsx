import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Heart } from "lucide-react";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import { Link } from "wouter";

export default function Voices() {
  return (
    <Layout>
      <SEO
        title="Voices from The Way :: The Stone Forger's Way"
        description="Field reports from practitioners experiencing The Stone Forger's Way—honest reflections on the path from chaos to coherence."
        type="website"
      />

      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Practitioner Voices
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                Voices from The Way
              </h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Field reports from practitioners experiencing The Stone Forger's Way. These are honest reflections
                from the path—the moments when the teaching lands, when the weight shifts, when the stone solidifies.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="space-y-8">

              {/* Voice 1: Trust Cheat Code */}
              <div className="bg-gradient-to-br from-amber-50/30 via-white to-stone-50/20 p-10 rounded-xl shadow-lg border border-stone-200">
                <div className="space-y-4">
                  <p className="text-2xl font-serif text-stone-800 leading-relaxed">
                    "Trust is the cheat code because it bypasses the tyranny of the rational mind that demands proof before it will move... is an insane quote."
                  </p>
                  <p className="text-lg text-stone-700">
                    "I'm going to be thinking about that for a while."
                  </p>
                  <div className="pt-4 border-t border-stone-200">
                    <p className="text-sm text-stone-500 italic">
                      — A <Link href="/archetypes" className="text-amber-700 hover:text-amber-800 underline">Stone Thrower</Link> recognizing the teaching
                    </p>
                  </div>
                </div>
              </div>

              {/* Voice 2: Somatic Recognition */}
              <div className="bg-gradient-to-br from-amber-50/30 via-white to-stone-50/20 p-10 rounded-xl shadow-lg border border-stone-200">
                <div className="space-y-4">
                  <p className="text-2xl font-serif text-stone-800 leading-relaxed">
                    "The backache is the <GlossaryTooltip term="Somatic">somatic</GlossaryTooltip> cost of throwing stones while keeping the shield up. The sympathetic nervous system in chronic activation..."
                  </p>
                  <p className="text-lg text-stone-700">
                    "This really spoke to me."
                  </p>
                  <div className="pt-4 border-t border-stone-200">
                    <p className="text-sm text-stone-500 italic">
                      — A <Link href="/archetypes" className="text-amber-700 hover:text-amber-800 underline">Stone Carrier</Link> feeling the weight
                    </p>
                  </div>
                </div>
              </div>

              {/* Voice 3: Making It Real */}
              <div className="bg-gradient-to-br from-amber-50/30 via-white to-stone-50/20 p-10 rounded-xl shadow-lg border border-stone-200">
                <div className="space-y-4">
                  <p className="text-2xl font-serif text-stone-800 leading-relaxed">
                    "This feels like a whole book spread across a website."
                  </p>
                  <p className="text-lg text-stone-700">
                    "The practices and prompts make it real—it's not just philosophy floating in space."
                  </p>
                  <div className="pt-4 border-t border-stone-200">
                    <p className="text-sm text-stone-500 italic">
                      — A <Link href="/archetypes" className="text-amber-700 hover:text-amber-800 underline">Conscious Forger</Link> using the tools
                    </p>
                  </div>
                </div>
              </div>

              {/* Voice 4: Vocabulary Gold */}
              <div className="bg-gradient-to-br from-amber-50/30 via-white to-stone-50/20 p-10 rounded-xl shadow-lg border border-stone-200">
                <div className="space-y-4">
                  <p className="text-2xl font-serif text-stone-800 leading-relaxed">
                    "The color schemes and glossary tooltips are brilliant."
                  </p>
                  <p className="text-lg text-stone-700">
                    "The vocabulary you've created is gold—I've never had language for these experiences before."
                  </p>
                  <div className="pt-4 border-t border-stone-200">
                    <p className="text-sm text-stone-500 italic">
                      — A <Link href="/archetypes" className="text-amber-700 hover:text-amber-800 underline">Patient Forger</Link> appreciating the craft
                    </p>
                  </div>
                </div>
              </div>

              {/* Voice 5: Already Moving */}
              <div className="bg-gradient-to-br from-amber-50/30 via-white to-stone-50/20 p-10 rounded-xl shadow-lg border border-stone-200">
                <div className="space-y-4">
                  <p className="text-2xl font-serif text-stone-800 leading-relaxed">
                    "I have already started putting down stones."
                  </p>
                  <p className="text-lg text-stone-700">
                    "Not throwing them at things, not carrying them—actually forging my path forward."
                  </p>
                  <div className="pt-4 border-t border-stone-200">
                    <p className="text-sm text-stone-500 italic">
                      — A <Link href="/archetypes" className="text-amber-700 hover:text-amber-800 underline">Conscious Forger</Link> in motion
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center bg-stone-50 p-10 rounded-xl">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">
                Your Voice Belongs Here
              </h2>
              <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
                If The Stone Forger's Way has resonated with you, we'd love to hear about your experience.
                Your insights help others recognize themselves in the teaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/archetype-quiz">
                  <span className="inline-block px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors cursor-pointer font-medium">
                    Discover Your Archetype
                  </span>
                </Link>
                <Link href="/social">
                  <span className="inline-block px-8 py-3 border-2 border-stone-600 text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer font-medium">
                    Share Content from The Way
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
