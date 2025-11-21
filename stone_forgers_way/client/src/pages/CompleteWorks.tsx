import Layout from "@/components/Layout";
import ContributionInvitation from "@/components/ContributionInvitation";
import { useState } from "react";

export default function CompleteWorks() {
  const works = [
    {
      title: "The Stone Forger's Glossary",
      subtitle: "Making the invisible visible",
      description: "A comprehensive glossary that bridges technical concepts with lived experience. Each term is presented in three parts: The Simple Idea, The Lived Experience, and The Stone Forger's Insight.",
      path: "/content/The_Stone_Forgers_Glossary_Final.md",
      category: "Foundation"
    },
    {
      title: "On Stone Forging",
      subtitle: "Where the idea of productivity meets the nature of presence",
      description: "A synthesis that resolves the false dichotomy between doing and being, revealing that true productivity is not about quantity of stones laid, but quality of presence brought to each stone.",
      path: "/content/On_Stone_Forging_Final.md",
      category: "Practice"
    },
    {
      title: "Active Patience",
      subtitle: "The unnecessary rebranding of a legendary art",
      description: "A cultural critique and restoration of patience as an active, participatory practice. Explores how Intentional Environmental Dissonance has stolen the meaning of patience and how to reclaim it.",
      path: "/content/Active_Patience_Final_Draft.md",
      category: "Philosophy"
    },
    {
      title: "Trust is The Cheat Code",
      subtitle: "A meta-synthesis on breaking the fourth wall",
      description: "The recognition that the synthesis itself is the stepping stone materializing beneath our feet. Explores how trust bypasses the tyranny of proof and allows fabrication of form.",
      path: "/content/Trust_is_The_Cheat_Code_Final.md",
      category: "Philosophy"
    },
    {
      title: "The Stone Thrower's Backache",
      subtitle: "The somatic cost of misdirected energy",
      description: "Explores the physical, emotional, and energetic cost of throwing stones at external targets instead of forging your own path. Includes the Shield Check practice.",
      path: "/content/The_Stone_Throwers_Backache.md",
      category: "Archetype"
    },
    {
      title: "Stepping Stones Synthesis",
      subtitle: "The invisible bridge made of existence",
      description: "A synthesis of Josephson's semiotic scaffolding, Magnetism in Plain English, and the Gene Keys' understanding of evolutionary progression. Explores how consciousness materializes reality.",
      path: "/content/stepping_stones_synthesis.md",
      category: "Philosophy"
    },
    {
      title: "Dialogue: Josephson & MiPE",
      subtitle: "Physics and contemplation in conversation",
      description: "A practical dialogue between Professor Brian D. Josephson's 'The Physics of Mind and Thought' and Magnetism in Plain English, exploring interrelations, skepticism, and opportunities for synthesis.",
      path: "/content/dialogue_josephson_mipe.md",
      category: "Research"
    },
    {
      title: "Integrated Design Framework",
      subtitle: "Terma, Jugaad, and Communal Internet",
      description: "A synthesis of Terma/Tertön (Tibetan hidden treasures), Jugaad Innovation (Indian frugal design), and Communal Internet Experiences as the philosophical foundation for conscious creation.",
      path: "/content/integrated_design_framework.md",
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
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif text-stone-800 mb-4">
                The Complete Works
              </h1>
              <p className="text-xl text-stone-600">
                All texts, freely accessible
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
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

            {/* Works Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                    <a
                      href={work.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg text-center transition-colors"
                    >
                      Read Online
                    </a>
                    <a
                      href={work.path}
                      download
                      className="flex-1 bg-stone-600 hover:bg-stone-700 text-white px-6 py-3 rounded-lg text-center transition-colors"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Contribution Invitation */}
            <ContributionInvitation />

            {/* Note on Usage */}
            <section className="mt-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">A Note on Usage</h2>
              <p className="text-lg leading-relaxed text-stone-700">
                All works are released under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International 
                License. You are free to share, adapt, and build upon this work for non-commercial purposes, as long 
                as you credit the source and share your adaptations under the same license.
              </p>
              <p className="text-lg leading-relaxed text-stone-700 mt-4">
                This work emerged through collaboration between Kamau Zuberi Akabueze and Manus AI. It is offered 
                freely in the spirit of lighting candles, not cursing darkness.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
