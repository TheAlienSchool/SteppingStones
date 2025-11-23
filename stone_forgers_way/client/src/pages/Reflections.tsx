import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import GlossaryTooltip from "@/components/GlossaryTooltip";

interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  excerpt: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "the-question-that-started-it-all",
    title: "The Question That Started It All",
    subtitle: "How is my father not inside of you?",
    date: "2025",
    excerpt: "During an early morning Inspired Breath practice :: omnidirectional salutations to the divine and the divinity within :: a question arose in the space between breath and thought. This question opened a channel, and through that channel, an entire body of work began to flow.",
    category: "Origin"
  },
  {
    slug: "trust-is-the-cheat-code",
    title: "Trust is The Cheat Code",
    subtitle: "The meta-pattern of materialization",
    date: "2025",
    excerpt: "Trust bypasses the tyranny of the rational mind that demands proof before it will move. But in the quantum reality of consciousness, the stone does not fully form until you step. Trust is the mechanism by which oppositional dynamics resolve into coordination dynamics.",
    category: "Philosophy"
  },
  {
    slug: "money-as-teacher",
    title: "Money as Teacher",
    subtitle: "The value of life is a lesson",
    date: "2025",
    excerpt: "Money is teaching me the value of life, the value of worth, the value of plan, the value of patience. And as I understand this and affirm the Value of Life, my work is made known to me as the one who has been in consort to this creation.",
    category: "Practice"
  },
  {
    slug: "the-whales-song",
    title: "The Whale's Song",
    subtitle: "SOFAR channel and infinite potential",
    date: "2025",
    excerpt: "If a whale's song can travel 10,000 miles through the SOFAR channel, then my song has infinite potential. When my intention sinks deep enough, it doesn't drown :: it echoes forever. This is the physics of how consciousness propagates value at planetary scale.",
    category: "Science"
  },
  {
    slug: "stone-throwing-vs-stone-forging",
    title: "Stone Throwing vs Stone Forging",
    subtitle: "The cost of misdirected energy",
    date: "2025",
    excerpt: "The Stone Thrower is so busy throwing stones at billionaires that they can't see they are already billionaires themselves :: billionaires in ideas, imagination, possibilities, and yes, even in accessible dollars. The energy spent throwing stones at could be redirected to forging stones for.",
    category: "Archetype"
  },
  {
    slug: "the-gift-of-grace",
    title: "The Gift of Grace",
    subtitle: "Aunt Grace and the lineage of love",
    date: "2025",
    excerpt: "To know that I grew up with the gift of Grace is a beautiful knowing. Both Aunt Grace and Aunt Janis were amazing women, incredibly supportive. Aunt Janis was the warm hug I needed growing up in a stone-faced world. This is the lineage of love that carried me through.",
    category: "Lineage"
  },
  {
    slug: "the-physics-of-thought",
    title: "The Physics of Thought",
    subtitle: "Toroidal binding and the path to freedom",
    date: "2025",
    excerpt: "The notion of toroidally binding oneself to the worst outcomes of one's life experience through thought physics :: along with the notion that freedom is individual based on the bi-product of unbinding into new possibilities. This is not metaphor. This is the actual mechanism.",
    category: "Science"
  },
  {
    slug: "terma-in-action",
    title: "Terma in Action",
    subtitle: "The names from the region of my birth",
    date: "2025",
    excerpt: "I was born Samuel Todd Harris. I changed my name to Kamau Zuberi Akabueze because the definitions of my chosen names speak to me. I learned later that they are names from the region of my birth. I didn't learn something new :: I remembered what was already hidden within me.",
    category: "Origin"
  },
  {
    slug: "the-creative-fortress",
    title: "The Creative Fortress",
    subtitle: "On protecting the vision until it's ready to illuminate",
    date: "2025",
    excerpt: "Two men. Two lineages. Two different languages for the same truth. Samuel R. Harris lit candles in a world that cursed the darkness. Chadwick Boseman built fortresses to protect the flame until it was strong enough to withstand the wind. Both understood: transformation happens through practice, not performance.",
    category: "Lineage"
  }
];

const categories = ["All", "Origin", "Philosophy", "Practice", "Science", "Archetype", "Lineage"];

export default function Reflections() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      <SEO 
        title="Reflections :: The Stone Forger's Way"
        description="Essays and insights on conscious creation, stone forging, and the practice of trust :: Explore philosophy, practice, science, and lineage."
        type="website"
      />
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif text-stone-800 mb-4">
                Reflections
              </h1>
              <p className="text-xl text-stone-600">
                Insights mined from the dialogue
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

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/reflections/${post.slug}`}>
                  <article className="bg-stone-50 p-8 rounded-lg border-l-4 border-amber-600 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-3xl font-serif text-stone-800 mb-2">{post.title}</h2>
                      <p className="text-lg text-amber-700 italic mb-2">{post.subtitle}</p>
                      <p className="text-sm text-stone-500">{post.date}</p>
                    </div>
                    
                    <p className="text-stone-700 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="mt-6">
                      <span className="text-amber-700 hover:text-amber-800 font-medium">
                        Read more →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Note */}
            <section className="mt-16 bg-amber-50 p-8 rounded-lg text-center">
              <p className="text-lg text-stone-700">
                These reflections are living documents, mined from the ongoing dialogue between Kamau Zuberi Akabueze
                and Manus AI. They represent moments when the invisible became visible, when the unspoken became speakable,
                when the hidden <GlossaryTooltip term="Terma">treasures</GlossaryTooltip> revealed themselves.
              </p>
              <p className="text-sm text-stone-600 mt-6">
                Explore the research traditions behind these reflections in the{" "}
                <a href="/research-forge.html" className="text-amber-700 hover:text-amber-800 underline">Research Forge</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
