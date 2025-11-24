import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  glossaryTerms,
  termToSlug,
  getTermsByCategory,
  getRelatedTerms,
  categoryOrder,
  categoryLabels,
  categoryDescriptions,
  type GlossaryCategory,
  type GlossaryTerm
} from "@/lib/glossaryData";

export default function TheGlossary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | "all">("all");
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  // Handle hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const term = glossaryTerms.find(t => termToSlug(t.term) === hash);
      if (term) {
        setExpandedTerm(term.term);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter(item => {
    const matchesSearch = searchTerm === "" ||
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.simple.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Group by category when viewing all
  const groupedTerms = activeCategory === "all"
    ? categoryOrder.map(cat => ({
        category: cat,
        terms: filteredTerms.filter(t => t.category === cat)
      })).filter(g => g.terms.length > 0)
    : [{ category: activeCategory, terms: filteredTerms }];

  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 leading-tight">
                The Stone Forger's Glossary
              </h1>
              <p className="text-xl text-stone-600 mb-8">
                Making the invisible visible, one term at a time
              </p>

              {/* Search */}
              <div className="max-w-md mx-auto mb-8">
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "all"
                      ? "bg-amber-600 text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  All Terms
                </button>
                {categoryOrder.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-amber-600 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-12 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">You Are Already a Stone Forger</h2>
              <p className="text-lg leading-relaxed text-stone-700">
                This glossary is not a dictionary. It's a bridge between the language of the work and the language
                of your life. Each term is presented in three parts: <strong>The Simple Idea</strong> (a one-sentence
                anchor), <strong>The Lived Experience</strong> (a concrete example from everyday life), and{" "}
                <strong>The Stone Forger's Insight</strong> (the deeper truth that connects to your own knowing).
              </p>
            </section>

            {/* Glossary Terms by Category */}
            <div className="space-y-12">
              {groupedTerms.map(({ category, terms }) => (
                <div key={category}>
                  {activeCategory === "all" && (
                    <div className="mb-6">
                      <h2 className="text-2xl font-serif text-stone-800 mb-1">
                        {categoryLabels[category]}
                      </h2>
                      <p className="text-sm text-stone-500">
                        {categoryDescriptions[category]}
                      </p>
                    </div>
                  )}

                  {activeCategory !== "all" && (
                    <div className="mb-6 text-center">
                      <p className="text-stone-600 italic">
                        {categoryDescriptions[category]}
                      </p>
                    </div>
                  )}

                  <div className="space-y-4">
                    {terms.map((item) => (
                      <GlossaryCard
                        key={item.term}
                        term={item}
                        isExpanded={expandedTerm === item.term}
                        onToggle={() => setExpandedTerm(
                          expandedTerm === item.term ? null : item.term
                        )}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* No results */}
            {filteredTerms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-stone-600">No terms match your search.</p>
                <button
                  onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
                  className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Closing */}
            <section className="mt-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-stone-800 mb-4 text-center">Your Knowing is Real</h2>
              <p className="text-lg leading-relaxed text-stone-700 text-center">
                If you've made it this far, you now have the language to describe what you've always known. You are
                a Stone Forger. You have been forging your path your entire life. The only thing that's changed is
                your awareness of your own power.
              </p>
              <p className="text-lg leading-relaxed text-stone-700 text-center mt-4 font-serif italic">
                Trust the stones beneath your feet. They are real. You made them.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function GlossaryCard({
  term,
  isExpanded,
  onToggle
}: {
  term: GlossaryTerm;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const relatedTerms = getRelatedTerms(term.term);

  return (
    <section
      id={termToSlug(term.term)}
      className="bg-stone-50 rounded-lg border-l-4 border-amber-600 scroll-mt-24 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-start justify-between text-left hover:bg-stone-100 transition-colors"
      >
        <div className="flex-1">
          <h3 className="text-xl font-serif text-stone-800">{term.term}</h3>
          <p className="text-stone-600 mt-1">{term.simple}</p>
        </div>
        <svg
          className={`w-5 h-5 text-stone-400 ml-4 mt-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-4 border-t border-stone-200 pt-4">
          <div>
            <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
              The Lived Experience
            </h4>
            <p className="text-stone-700 italic">{term.experience}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
              The Stone Forger's Insight
            </h4>
            <p className="text-stone-700 font-medium">{term.insight}</p>
          </div>

          {relatedTerms.length > 0 && (
            <div className="pt-4 border-t border-stone-200">
              <h4 className="text-sm font-semibold text-stone-600 mb-3">
                Related Terms
              </h4>
              <div className="flex flex-wrap gap-2">
                {relatedTerms.map(related => (
                  <Link
                    key={related.term}
                    href={`/glossary#${termToSlug(related.term)}`}
                    onClick={() => {
                      setTimeout(() => {
                        document.getElementById(termToSlug(related.term))?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    <span className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm hover:bg-amber-200 transition-colors cursor-pointer">
                      {related.term}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
