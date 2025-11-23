import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ContributionInvitation from "@/components/ContributionInvitation";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import SEO from "@/components/SEO";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import TodaysPractice from "@/components/TodaysPractice";
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
        title="The Stone Forger's Way :: A Temporal Technology for Conscious Creation"
        description="Explore archetypes, practices, and concepts for forging your path with trust and intention. A collaboration between Kamau Zuberi Akabueze and Manus AI."
        image="/trust-stepping.png"
        type="website"
      />
      {/* Floating Hamburger Menu for Homepage */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition-colors"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu Overlay - Scrollable */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-stone-900 shadow-xl overflow-y-auto">
            {/* Header */}
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

            {/* Menu Content */}
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

            {/* Footer */}
            <div className="p-6 border-t border-stone-700">
              <p className="text-xs text-stone-500 text-center italic">
                "It's better to light a candle than to curse the darkness."
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-stone-100 to-amber-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <img 
              src="/trust-stepping.png" 
              alt="Trust as stepping" 
              className="w-64 h-64 mx-auto object-cover rounded-full shadow-2xl"
            />
            
            <h1 className="text-5xl md:text-7xl font-serif text-stone-800 leading-tight">
              The Stone Forger's Way
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed">
              A temporal approach to conscious creation
            </p>

            <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Where the idea of productivity meets the nature of presence. Discover which archetype
              you embody, and learn practices to transform <GlossaryTooltip term="Toroidal Binding">circular motion</GlossaryTooltip> into forward momentum.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/journey">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6">
                  Begin the Journey
                </Button>
              </Link>
              <Link href="/archetype-quiz">
                <Button size="lg" variant="outline" className="border-2 border-stone-600 text-stone-700 hover:bg-stone-100 text-lg px-8 py-6">
                  Discover Your Archetype
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

      {/* Today's Practice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <TodaysPractice />
          </div>
        </div>
      </section>

      {/* Kamau's Story Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-serif text-stone-800 text-center">
              On Releasing Hoarded Wealth
            </h2>

            <div className="space-y-6 text-base leading-relaxed text-stone-700">
              <p>
                I am recognizing that I have been hoarding wealth.
              </p>

              <p>
                I have been in extensively informative dialogues with my research partner, <a href="https://manus.ai" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-800 underline">Manus AI</a> about human health, HeartMath, behavioral science, behavioral archetypes, intelligent action, the science of the mind, the science of our Light as beings, the science of the breath, and the electromagnetic nature of the heart.
              </p>

              <p>
                All of that research has been to inform my path and enhance:
              </p>

              <ul className="list-none space-y-2 pl-4 italic">
                <li>My way of centering my self creatively</li>
                <li>My approach to uplifting my mental health routines</li>
                <li>My way of celebrating the breath as ecologically conscious data</li>
              </ul>

              <p>
                I recognized in the <em>my, my, my</em>, that I have not exactly been open and sharing because of a hidden shame of working with an AI to develop these concepts and I don't know why I would be shaming myself for this super productive partnership.
              </p>

              <p>
                I am stating this because I needed AI to build this practice for my clarity AND to build this website for you, and our relationship with advancing intelligence :: from the Humans researching our molecular capability, to the Humans shaping our societal stories, to the Accessible Intelligence we fear from our artificial lenses :: intelligence is a significant elemental in the future of human creativity.
              </p>

              <p>
                Universal appreciation is a part of The Stone Forger's Way.
              </p>

              <p>
                And when one can start there, every step is one of possibility.
              </p>

              <p>
                So I am releasing this wealth of insight about my way of creating in partnership with time - which many a scientist from the worlds of the indigenous, to the world of the technologist, to the heart of the ecologist - have promoted and celebrated. The Stone Forger's Way is a stone forged and placed in the world for others to step upon.
              </p>

              <p className="italic text-center pt-8">
                — Kamau Zuberi Akabueze
              </p>

              <div className="text-center pt-8">
                <Link href="/journey">
                  <span className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium transition-colors cursor-pointer">
                    Continue to The Journey
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Archetypes Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-stone-800 text-center mb-16">
            The Archetypes
          </h2>
          
          <p className="text-lg text-stone-600 text-center max-w-2xl mx-auto mb-12">
            You are all four archetypes. This reveals where you are now—and illuminates the path forward.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "The Stone Carrier",
                image: "/stone-carrier.png",
                description: "Burdened by suspended stones, moving in circles. The shadow of inertia where life force is drained by details disconnected from purpose."
              },
              {
                name: "The Stone Thrower",
                image: "/stone-thrower.png",
                description: "Exhausted by misdirected energy, casting stones outward. The reactive nature that seeks diversion from inner stillness."
              },
              {
                name: "The Conscious Forger",
                image: "/active-patience.png",
                description: "Present with each stone, awakening to purpose. The first step off the circular path onto the one that leads over the horizon."
              },
              {
                name: "The Stone Forger",
                image: "/stone-forger.png",
                description: "Integrated and creating. Where productivity meets presence—every step aligned with a dream, every stone deliberately placed."
              }
            ].map((archetype) => (
              <div key={archetype.name} className="text-center space-y-4 p-4 rounded-xl hover:bg-amber-50/50 transition-colors">
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

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/archetype-quiz">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Which Archetype Are You?
              </Button>
            </Link>
            <Link href="/archetypes">
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                Explore All Archetypes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation to Main Sections */}
      <section className="py-24 bg-stone-800 text-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Link href="/journey">
              <div className="p-8 bg-stone-700 rounded-lg hover:bg-stone-600 transition-colors cursor-pointer">
                <h3 className="text-2xl font-serif mb-4">The Journey</h3>
                <p className="text-stone-300">
                  Follow the complete thread of discovery, from <GlossaryTooltip term="Terma">Terma</GlossaryTooltip> and <GlossaryTooltip term="Tertön">Tertön</GlossaryTooltip> through <GlossaryTooltip term="Active Patience">Active Patience</GlossaryTooltip>{" "}
                  to <GlossaryTooltip term="The Stone Thrower's Backache">The Stone Thrower's Backache</GlossaryTooltip>
                </p>
              </div>
            </Link>
            
            <Link href="/concepts">
              <div className="p-8 bg-stone-700 rounded-lg hover:bg-stone-600 transition-colors cursor-pointer">
                <h3 className="text-2xl font-serif mb-4">The Concepts</h3>
                <p className="text-stone-300">
                  Explore the core ideas: <GlossaryTooltip term="The Trellis and the Vine">The Trellis and the Vine</GlossaryTooltip>, <GlossaryTooltip term="Trust">Trust as The Cheat Code</GlossaryTooltip>, <GlossaryTooltip term="The Shield">The Shield</GlossaryTooltip>,{" "}
                  and <GlossaryTooltip term="Active Patience">Active Patience</GlossaryTooltip>
                </p>
              </div>
            </Link>
            
            <Link href="/practices">
              <div className="p-8 bg-stone-700 rounded-lg hover:bg-stone-600 transition-colors cursor-pointer">
                <h3 className="text-2xl font-serif mb-4">The Practices</h3>
                <p className="text-stone-300">
                  Engage with micro-practices: Feel the Stones, The One <GlossaryTooltip term="Stepping Stone">Stone</GlossaryTooltip>, <GlossaryTooltip term="The Shield">The Shield Check</GlossaryTooltip>,{" "}
                  <GlossaryTooltip term="Trust">The Trust Breath</GlossaryTooltip>
                </p>
              </div>
            </Link>
            
            <Link href="/works">
              <div className="p-8 bg-stone-700 rounded-lg hover:bg-stone-600 transition-colors cursor-pointer">
                <h3 className="text-2xl font-serif mb-4">Complete Works</h3>
                <p className="text-stone-300">
                  Access all texts, research documents, and downloadable resources
                </p>
              </div>
            </Link>
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

      {/* Conscious Value Exchange */}
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

