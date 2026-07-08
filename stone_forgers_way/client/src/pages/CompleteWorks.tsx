import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ContributionInvitation from "@/components/ContributionInvitation";
import { useState } from "react";
import { Link } from "wouter";

interface Work {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  linkTo?: string; // Internal link (e.g., /glossary)
  comingSoon?: boolean;
}

export default function CompleteWorks() {
  const works: Work[] = [
    {
      title: "The Stone Forger's Glossary",
      subtitle: "Making the invisible visible",
      description: "A comprehensive glossary that bridges technical concepts with lived experience. Each term is presented in three parts: The Simple Idea, The Lived Experience, and The Stone Forger's Insight.",
      linkTo: "/glossary",
      category: "Foundation"
    },
    {
      title: "The Expanded Archetypes",
      subtitle: "Six frictional reality states of the path",
      description: "Go deeper into how you relate to stones, knowing, and transformation. Discover The Jade Hunter, Walker of The Way, The Stone Keeper, The Stone Breaker, The Stone Caller, and The Stone Witness—each with practices, glossary focus, and progression paths.",
      linkTo: "/archetypes",
      category: "Archetype"
    },
    {
      title: "The Two-Layer Archetype System",
      subtitle: "From core pattern to specific path",
      description: "Understand the architecture of transformation: four core archetypes (Carrier, Thrower, Conscious Forger, Forger) branching into six expanded states. Take the quiz to discover both your core and expanded archetype.",
      linkTo: "/archetype-quiz",
      category: "Practice"
    },
    {
      title: "On Stone Forging",
      subtitle: "Where the idea of productivity meets the nature of presence",
      description: "A synthesis that resolves the false dichotomy between doing and being, revealing that true productivity is not about quantity of stones laid, but quality of presence brought to each stone.",
      comingSoon: true,
      category: "Practice"
    },
    {
      title: "Active Patience",
      subtitle: "The unnecessary rebranding of a legendary art",
      description: "A cultural critique and restoration of patience as an active, participatory practice. Explores how Intentional Environmental Dissonance has stolen the meaning of patience and how to reclaim it.",
      comingSoon: true,
      category: "Philosophy"
    },
    {
      title: "Trust is The Cheat Code",
      subtitle: "A meta-synthesis on breaking the fourth wall",
      description: "The recognition that the synthesis itself is the stepping stone materializing beneath our feet. Explores how trust bypasses the tyranny of proof and allows fabrication of form.",
      comingSoon: true,
      category: "Philosophy"
    },
    {
      title: "The Stone Thrower's Backache",
      subtitle: "The somatic cost of misdirected energy",
      description: "Explores the physical, emotional, and energetic cost of throwing stones at external targets instead of forging your own path. Includes the Shield Check practice.",
      comingSoon: true,
      category: "Archetype"
    },
    {
      title: "Stepping Stones Synthesis",
      subtitle: "The invisible bridge made of existence",
      description: "A synthesis of Josephson's semiotic scaffolding, Kamau Zuberi Akabueze's Stone Cold Magnets, and the Gene Keys' understanding of evolutionary progression. Explores how consciousness materializes reality.",
      comingSoon: true,
      category: "Philosophy"
    },
    {
      title: "Dialogue: Josephson & Magnetism",
      subtitle: "Physics and contemplation in conversation",
      description: "A practical dialogue between Professor Brian D. Josephson's 'The Physics of Mind and Thought' and Kamau Zuberi Akabueze's 'Stone Cold Magnets', exploring interrelations, skepticism, and opportunities for synthesis.",
      comingSoon: true,
      category: "Research"
    },
    {
      title: "Collabinative Design Framework",
      subtitle: "Terma, Jugaad, and Communal Internet",
      description: "A synthesis of Terma/Tertön (Tibetan hidden treasures), Jugaad Innovation (Indian frugal design), and Communal Internet Experiences as the philosophical foundation for conscious creation.",
      comingSoon: true,
      category: "Research"
    }
  ];

  const categories = ["All", "Foundation", "Practice", "Philosophy", "Archetype", "Research"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredWorks = selectedCategory === "All"
    ? works
    : works.filter(work => work.category === selectedCategory);

  return (
    <Layout>
      <SEO
        title="Complete Works :: Samuel R. Harris :: The Stone Forger's Way"
        description="Explore the full collection of papers, letters, and research notes of Samuel R. Harris."
      />
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 no-print">
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 leading-tight">
                The Complete Works
              </h1>
              <p className="text-xl text-stone-600">
                All texts, freely accessible
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 no-print">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-amber-600 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Global Booklet Compilation Button */}
            <div className="flex justify-center mb-16 no-print">
              <button 
                onClick={() => window.print()} 
                className="bg-stone-900 hover:bg-stone-800 text-stone-100 flex items-center gap-2 px-8 py-6 text-lg shadow-lg border border-amber-600/30"
              >
                <svg className="w-5 h-5 text-amber-500 mr-1 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Compile & Print Complete Booklet (PDF)
              </button>
            </div>

            {/* Works Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 no-print">
              {filteredWorks.map((work, index) => (
                <div key={index} className="bg-stone-50 p-8 rounded-lg border-l-4 border-amber-600">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full mb-3">
                      {work.category}
                    </span>
                    <h3 className="text-2xl font-serif text-stone-800 mb-2">{work.title}</h3>
                    <p className="text-lg text-amber-700 italic mb-4">{work.subtitle}</p>
                  </div>

                  <p className="text-stone-700 mb-6">{work.description}</p>

                  <div className="flex gap-3">
                    {work.linkTo ? (
                      <>
                        <Link href={work.linkTo}>
                          <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg text-center transition-colors">
                            Explore
                          </button>
                        </Link>
                        <button
                          onClick={() => window.print()}
                          className="flex-1 bg-stone-900 hover:bg-stone-800 text-stone-100 px-6 py-3 rounded-lg text-center transition-colors text-sm font-medium"
                        >
                          Print Booklet PDF
                        </button>
                      </>
                    ) : work.comingSoon ? (
                      <>
                        <button
                          disabled
                          className="flex-1 bg-stone-200 text-stone-400 px-6 py-3 rounded-lg text-center cursor-not-allowed opacity-60"
                        >
                          Coming Soon
                        </button>
                        <button
                          onClick={() => window.print()}
                          className="flex-1 bg-stone-900 hover:bg-stone-800 text-stone-100 px-6 py-3 rounded-lg text-center transition-colors text-sm font-medium"
                        >
                          Print Booklet PDF
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg text-center transition-colors">
                          Read Online
                        </button>
                        <button 
                          onClick={() => window.print()}
                          className="flex-1 bg-stone-900 hover:bg-stone-800 text-stone-100 px-6 py-3 rounded-lg text-center transition-colors text-sm font-medium"
                        >
                          Print Booklet PDF
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contribution Invitation */}
            <div className="no-print">
              <ContributionInvitation />
            </div>

            {/* Note on Usage */}
            <section className="mt-16 bg-amber-50 p-8 rounded-lg no-print">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">A Note on Usage</h2>
              <p className="text-lg leading-relaxed text-stone-700">
                All works are released under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
                License. You are free to share, adapt, and build upon this work for non-commercial purposes, as long
                as you credit the source and share your adaptations under the same license.
              </p>
              <p className="text-lg leading-relaxed text-stone-700 mt-4">
                This work emerged through collaboration between Kamau Zuberi Akabueze and AI. It is offered
                freely in the spirit of lighting candles, not cursing darkness.
              </p>
            </section>

            {/* Hidden Print-Only booklet markup */}
            <div id="print-booklet" className="hidden print:block bg-white text-stone-950 font-serif leading-relaxed px-12 py-8">
              <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                  html, body {
                    background: white !important;
                    color: #1c1917 !important;
                    font-family: 'Georgia', 'Times New Roman', serif !important;
                    font-size: 11.5pt !important;
                    line-height: 1.625 !important;
                  }
                  nav, header, footer, .no-print, button, .flex-wrap, .text-center {
                    display: none !important;
                  }
                  #print-booklet {
                    display: block !important;
                    visibility: visible !important;
                    position: relative !important;
                    width: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                  }
                  .print-page-break {
                    page-break-before: always !important;
                    break-before: page !important;
                    padding-top: 3.5rem;
                  }
                  .cover-page {
                    height: 92vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    text-align: center;
                    padding: 6rem 2rem;
                    box-sizing: border-box;
                    page-break-after: always;
                    break-after: page;
                  }
                  .editorial-quote {
                    font-style: italic;
                    font-size: 1.25rem;
                    line-height: 1.5;
                    border-left: 4px solid #d97706;
                    padding-left: 1.5rem;
                    margin: 2.5rem 0;
                    color: #44403c;
                  }
                  .dropcap::first-letter {
                    float: left;
                    font-size: 4.5rem;
                    line-height: 0.8;
                    margin-top: 0.12em;
                    margin-right: 0.1em;
                    font-family: 'Georgia', serif;
                    font-weight: bold;
                    color: #b45309;
                  }
                }
              `}} />

              {/* Cover Page */}
              <div className="cover-page flex flex-col justify-between items-center h-[90vh] text-center border-2 border-stone-300 p-8">
                <div className="w-16 h-[1px] bg-stone-300 my-8" />
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-stone-900 font-serif">
                    The Stone Forger's Way
                  </h1>
                  <div className="w-12 h-[1px] bg-amber-600 mx-auto my-4" />
                  <p className="text-lg italic text-amber-800 max-w-lg mx-auto">
                    The Complete Collection of Reflections, Somatic Practices, and Archetypal Scaffolding
                  </p>
                  <div className="w-24 h-24 text-amber-700 mx-auto my-8 flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C12 2 12.5 8.5 15 11C17.5 13.5 24 14 24 14C24 14 17.5 14.5 15 17C12.5 19.5 12 26 12 26C12 26 11.5 19.5 9 17C6.5 14.5 0 14 0 14C0 14 6.5 13.5 9 11C11.5 8.5 12 2 12 2Z" />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-md font-sans uppercase tracking-widest text-stone-600 font-semibold">
                    Kamau Zuberi Akabueze
                  </p>
                  <p className="text-xs text-stone-500">
                    2025–2026 · THE ÅLïEN SCõÖL for Creative Thinking
                  </p>
                  <p className="text-sm italic text-stone-600 mt-8 max-w-sm mx-auto border-t border-stone-200 pt-4">
                    "It is better to light a candle than to curse the darkness."
                  </p>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="print-page-break">
                <h2 className="text-3xl font-bold font-serif border-b border-stone-300 pb-3 mb-8 text-stone-900">
                  Table of Contents
                </h2>
                <div className="space-y-4 font-serif text-lg text-stone-800">
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>01. The Question That Started It All (Origin)</span>
                    <span className="font-mono text-stone-500">Page 3</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>02. Trust is The Cheat Code (Philosophy)</span>
                    <span className="font-mono text-stone-500">Page 5</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>03. Money as Teacher (Practice)</span>
                    <span className="font-mono text-stone-500">Page 7</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>04. The Whale's Song (Science)</span>
                    <span className="font-mono text-stone-500">Page 9</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>05. Stone Throwing vs Stone Forging (Archetype)</span>
                    <span className="font-mono text-stone-500">Page 11</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>06. The Gift of Grace (Lineage)</span>
                    <span className="font-mono text-stone-500">Page 13</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>07. The Physics of Thought (Science)</span>
                    <span className="font-mono text-stone-500">Page 15</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>08. Terma in Action (Origin)</span>
                    <span className="font-mono text-stone-500">Page 17</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>09. The Creative Fortress (Lineage)</span>
                    <span className="font-mono text-stone-500">Page 19</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>10. The Path to 1000 Ways to Sit (Origin)</span>
                    <span className="font-mono text-stone-500">Page 21</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span>11. Multifaceted Meditation for Multi-Dimensional Beings</span>
                    <span className="font-mono text-stone-500">Page 23</span>
                  </div>
                  <div className="flex justify-between border-t border-stone-300 pt-4 font-bold">
                    <span>12. The Consolidated Practices Handbook</span>
                    <span className="font-mono text-stone-700">Page 25</span>
                  </div>
                </div>
              </div>

              {/* Essay 1 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">01 · Origin</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">The Question That Started It All</h2>
                <h3 className="text-lg italic text-amber-800">"How is my father not inside of you?"</h3>
                <div className="editorial-quote">
                  "During an early morning Inspired Breath practice at 1000 Ways to Sit, a question arose in the space between breath and thought. This question opened a channel, and through that channel, an entire body of work began to flow."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  T was in that quiet space between exhale and inhale where the mind suspends its constant demands, that the first stepping stone materialized. The question did not arrive as an intellectual curiosity, but as a somatic weight, vibrating in the bones. It demanded an answer not from logic, but from presence.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  In honoring this quote, we preserve the exact morning breath query as the constitutional seed of our entire practice. The question forces us to look inside and ask where our inheritance truly resides. We learn that we carry our ancestors in our biology, in our choices, and in the structural weight of the steps we take.
                </p>
              </div>

              {/* Essay 2 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">02 · Philosophy</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">Trust is The Cheat Code</h2>
                <h3 className="text-lg italic text-amber-800">The meta-pattern of materialization</h3>
                <div className="editorial-quote">
                  "Trust is the cheat code because it bypasses the tyranny of the rational mind that demands proof before it will move. In the quantum reality of consciousness, the stone does not fully form until you step."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  T o move forward in uncertainty requires a fundamental shift in our relationship with proof. The rational mind wants the map fully drawn, the bridge fully built, the stone fully solidified before it will commit its weight. But this demand is the very mechanism that keeps us suspended in calculation, never stepping.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  Trust is not a passive sentiment; it is a structural coordinate of quantum physics. Like John Wheeler's 'fabrication of form,' the act of stepping with full attention and intention is what collapse-renders the bridge itself. The stone solidifies at the exact rate that we trust the path.
                </p>
              </div>

              {/* Essay 3 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">03 · Practice</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">Money as Teacher</h2>
                <h3 className="text-lg italic text-amber-800">The value of life is a lesson</h3>
                <div className="editorial-quote">
                  "Money is teaching me the value of life, the value of worth, the value of plan, the value of patience. And as I understand this and affirm the Value of Life, my work is made known to me."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  W e often treat money as a separate domain, a transactional necessity stripped of spiritual value. But money is one of our most potent mirrors, exposing our patterns of fear, scarcity, and suspended worth. When we treat money as a teacher, we begin to see that value exchange is a sacred loop.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  By declaring 'Trust is the cheat code,' we understand that our worth is inherent, not calculated by account balances. We forge from overflow, allowing our creative responsibility to guide the exchange. In this state of active patience, money ceases to be a burden and becomes a direct coordinate of support.
                </p>
              </div>

              {/* Essay 4 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">04 · Science</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">The Whale's Song</h2>
                <h3 className="text-lg italic text-amber-800">SOFAR channel and infinite potential</h3>
                <div className="editorial-quote">
                  "If a whale's song can travel 10,000 miles through the SOFAR channel, then my song has infinite potential. When my intention sinks deep enough, it doesn't drown :: it echoes forever."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  I n the depths of the ocean lies the Sound Fixing and Ranging channel—a layer of water where temperature and pressure coordinate to trap sound waves, allowing them to propagate across planetary scales. The whale does not demand to be heard; it simply sings into the deep, trusting the medium.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  This is the physics of intention. Surface intentions are like splashes—loud, localized, quickly fading. But when our intention is allowed to sink through breath and focus into the heart space (the somatic root of coherence), it enters the SOFAR channel of consciousness. It echoes forever, materializing its matching reality in the Field.
                </p>
              </div>

              {/* Essay 5 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">05 · Archetype</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">Stone Throwing vs Stone Forging</h2>
                <h3 className="text-lg italic text-amber-800">The cost of misdirected energy</h3>
                <div className="editorial-quote">
                  "The Stone Thrower is so busy throwing stones at billionaires that they can't see they are already billionaires themselves—billionaires in ideas, imagination, possibilities. Redirect that energy to forging stones for."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  R age and defensiveness are seductive. They provide a temporary surge of power, but their long-term cost is physical and energetic exhaustion. The backache is the somatic fee of throwing stones at external targets while keeping our shields rigid. It keeps our nervous system in chronic, calcified activation.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  When we recognize that we are already rich in the currency of imagination and potential, we stop wasting our stones. We lower our arms, soften our gaze, and bring our hands to the anvil. We redirect the raw kinetic energy of frustration into the deliberate, loving craft of forging stepping stones that support the whole.
                </p>
              </div>

              {/* Essay 6 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">06 · Lineage</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">The Gift of Grace</h2>
                <h3 className="text-lg italic text-amber-800">Aunt Grace, Aunt Janis, and the lineage of love</h3>
                <div className="editorial-quote">
                  "To know that I grew up with the gift of Grace is a beautiful knowing. Aunt Janis was the warm hug I needed growing up in a stone-faced world. This is the lineage of love."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  W e often think we walk our paths entirely alone, carrying the weight of our own creation. But we are always suspended and supported by a web of love that preceded us. Aunt Grace and Aunt Janis provided the visceral safety—the soft, open presence—that allowed a young boy to survive in a rigid, challenging environment.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  This love is not passive biography; it is active physics. It is the generative force that stabilizes our frequency when we face daily friction. In honoring their memory, we acknowledge that we are the continuation of their warmth, carrying their gift forward to illuminate the path for others.
                </p>
              </div>

              {/* Essay 7 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">07 · Science</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">The Physics of Thought</h2>
                <h3 className="text-lg italic text-amber-800">Toroidal binding and the path to freedom</h3>
                <div className="editorial-quote">
                  "The notion of toroidally binding oneself to the worst outcomes through thought physics :: unbinding into new possibilities is the bi-product of presence."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  W hen our minds are caught in worry, our thoughts loop in a closed electromagnetic shape—a torus. This toroidal binding acts as a vortex, locking our attention into our worst past experiences and projecting them as our inevitable future. This closed loop traps energy, calcifying the backache and blocking flow.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  Freedom is the act of unbinding. By bringing full, unjudging attention to the present moment, we interrupt the toroidal loop. We step off the circular groove. The vortex opens into a creative, upward spiral, unbinding our energy to forge new stepping stones in the Field.
                </p>
              </div>

              {/* Essay 8 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">08 · Origin</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">Terma in Action</h2>
                <h3 className="text-lg italic text-amber-800">The names from the region of my birth</h3>
                <div className="editorial-quote">
                  "I was born Samuel Todd Harris. I changed my name to Kamau Zuberi Akabueze. I learned later that they are names from the region of my birth. I remembered what was already hidden."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  T he Tibetan concept of Terma reminds us that wisdom is not imported; it is revealed. It is a hidden treasure that resides within our consciousness, waiting for the right somatic container to emerge. Our naming of ourselves is often the first act of uncovering this hidden coordinate.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  When I claimed my chosen names, I was not fabricating a new identity, but unearthing an ancient truth that was already in my blood. This is terma in action—the alignment of naming and being, showing us that all the pieces of our puzzle already exist, waiting for us to choose presence and see the portrait whole.
                </p>
              </div>

              {/* Essay 9 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">09 · Lineage</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">The Creative Fortress</h2>
                <h3 className="text-lg italic text-amber-800">Protecting the vision until it is ready to illuminate</h3>
                <div className="editorial-quote">
                  "Samuel R. Harris lit candles in a world that cursed the darkness. Chadwick Boseman built fortresses to protect the flame until it was strong enough. Both understood: transformation happens through practice."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  T he creative act requires containment. If we expose a young, raw vision to the wind of public performance, it is easily extinguished. We must build a fortress—not of isolation or defense, but of focused discipline and active patience—to tend the spark until it becomes a mature, self-sustaining flame.
                </p>
                <p className="text-justify leading-relaxed text-stone-855">
                  Both grandfather Samuel R. Harris and actor Chadwick Boseman understood the physics of containment. They did not rush to perform; they committed themselves to the Dojo of active practice, refining their craft in quiet resonance until they were ready to step forward and light the way for their people.
                </p>
              </div>

              {/* Essay 10 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">10 · Origin</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">The Path to 1000 Ways to Sit</h2>
                <h3 className="text-lg italic text-amber-800">A postcard flyer, nine years, and the feeling that is the secret</h3>
                <div className="editorial-quote">
                  "How a postcard flyer stayed on my desk for nine years, waiting. How a feeling remembered became a path materialized. From Brooklyn 2016 to San Francisco 2025—this is terma emerging."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  T ime is a generous container. We often panic when our creations do not manifest instantly, forgetting that the vine requires the trellis to grow. In 2016, a postcard flyer for a robotic gamelan residency caught my eye. I placed it on my desk. For nine years, it sat, a quiet coordinate in the physical Field.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  I did not chase it. I simply let it steep. In 2025, that nine-year-old coordinate materialized into the physical residency at 1000 Ways to Sit. The bridge had formed because the feeling—the somatic memory of resonance—was kept alive in trust. This is the ultimate lesson of wayfinding: the horizon is already one with your next step.
                </p>
              </div>

              {/* Essay 11 */}
              <div className="print-page-break space-y-6">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">11 · Philosophy</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">Multifaceted Meditation</h2>
                <h3 className="text-lg italic text-amber-800">For the Multi-Dimensional Being</h3>
                <div className="editorial-quote">
                  "Meditation is not merely one posture, one breath pattern—but a multifaceted practice for beings who exist across multiple dimensions simultaneously."
                </div>
                <p className="dropcap text-justify leading-relaxed text-stone-850">
                  W e are not static, flat shapes; we are multi-dimensional vessels of consciousness. We exist in biology, in relationship, in ancestral lineage, and in the quantum field of infinite potential. A rigid, single-posture meditation is too small for our wholeness. We require a multifaceted meditation that honors all dimensions.
                </p>
                <p className="text-justify leading-relaxed text-stone-850">
                  At 1000 Ways to Sit, we sit in the soundscape of the Gamelatron, breathing consciously, observing our thoughts without judgment. We steep in the resonance of bronze and air. In this Dojo, we are not trying to escape our humanity; we are actively forging it, unbinding ourselves into new coordinates of presence and responsibility.
                </p>
              </div>

              {/* Handbook */}
              <div className="print-page-break space-y-8">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-sans font-bold">Appendix · Practice</span>
                <h2 className="text-4xl font-bold font-serif text-stone-900 leading-tight">Consolidated Practices Handbook</h2>
                
                <div className="space-y-6 text-stone-850">
                  <div className="border-b border-stone-200 pb-4">
                    <h3 className="text-xl font-bold text-amber-800">01. Feel the Stones</h3>
                    <p className="text-sm text-stone-600 italic">Core practice for Carrier & Stone Keeper</p>
                    <p className="mt-2 text-justify">
                      Place your hands on your lower back. Breathe slowly, letting your abdomen expand. Ask yourself: "What weight am I carrying that is not mine to carry?" Do not answer with your mind; simply feel the physical sensation in your body. Breathe into it, acknowledging and validating the burden before choosing if it is yours to hold.
                    </p>
                  </div>

                  <div className="border-b border-stone-200 pb-4">
                    <h3 className="text-xl font-bold text-amber-800">02. The Silent Check</h3>
                    <p className="text-sm text-stone-600 italic">Core practice for Thrower & Stone Breaker</p>
                    <p className="mt-2 text-justify">
                      Before responding to any conflict, demand, or request in anger or defensiveness, pause and take three slow, deliberate breaths. Feel the heat of reaction in your chest. Ask: "Is this stone mine to throw, or am I defending against a threat that isn't real?" Redirect this energy inward with compassion.
                    </p>
                  </div>

                  <div className="border-b border-stone-200 pb-4">
                    <h3 className="text-xl font-bold text-amber-800">03. The One Stone</h3>
                    <p className="text-sm text-stone-600 italic">Core practice for Conscious Forger & Jade Hunter</p>
                    <p className="mt-2 text-justify">
                      Each morning, look at the swarm of demands on your calendar. Choose exactly one stone—one task, one conversation, one project. Declare: "This is the stone I will forge today." For ten minutes, bring your absolute, undivided presence to this single act, letting all other suspended stones float without your attention.
                    </p>
                  </div>

                  <div className="border-b border-stone-200 pb-4">
                    <h3 className="text-xl font-bold text-amber-800">04. The 1937 Vector (Ancestral Grounding Check)</h3>
                    <p className="text-sm text-stone-600 italic">Specialized practice for Lineage & Wayfinding</p>
                    <p className="mt-2 text-justify">
                      Stand flat-footed on the floor. Exhale completely, sinking your weight into the soles of your feet. Imagine the structural physics of your lineage—how steps taken by Ray Kemp in 1937 directly anchor and stabilize the active weight of your practice in 2026. Speak aloud: "I stand on stepping stones laid before me. I forge with their strength, choosing to light a candle."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
