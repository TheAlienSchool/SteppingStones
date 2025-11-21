import Layout from "@/components/Layout";
import { useState } from "react";
import { glossaryTerms, termToSlug } from "@/lib/glossaryData";

export default function TheGlossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.simple.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif text-stone-800 mb-4">
                The Stone Forger's Glossary
              </h1>
              <p className="text-xl text-stone-600 mb-8">
                Making the invisible visible, one term at a time
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">You Are Already a Stone Forger</h2>
              <p className="text-lg leading-relaxed text-stone-700">
                This glossary is not a dictionary. It's a bridge between the language of the work and the language 
                of your life. Each term is presented in three parts: <strong>The Simple Idea</strong> (a one-sentence 
                anchor), <strong>The Lived Experience</strong> (a concrete example from everyday life), and{" "}
                <strong>The Stone Forger's Insight</strong> (the deeper truth that connects to your own knowing).
              </p>
              <p className="text-lg leading-relaxed text-stone-700 mt-4">
                By the end of this glossary, you will know what Stone Forging is in your life, and why trust helped 
                bring you to that knowing.
              </p>
            </section>

            {/* Glossary Terms */}
            <div className="space-y-8">
              {filteredTerms.map((item, index) => (
                <section
                  key={index}
                  id={termToSlug(item.term)}
                  className="bg-stone-50 p-8 rounded-lg border-l-4 border-amber-600 scroll-mt-24"
                >
                  <h3 className="text-2xl font-serif text-stone-800 mb-4">{item.term}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                        The Simple Idea
                      </h4>
                      <p className="text-stone-700">{item.simple}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                        The Lived Experience
                      </h4>
                      <p className="text-stone-700 italic">{item.experience}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                        The Stone Forger's Insight
                      </h4>
                      <p className="text-stone-700 font-medium">{item.insight}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>

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
