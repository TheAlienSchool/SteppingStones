import Layout from "@/components/Layout";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import { Link } from "wouter";
import { useState } from "react";
import {
  getAllPractices,
  getPracticesByArchetype,
  type Practice
} from "@/lib/practicesData";
import type { CoreArchetypeId } from "@/lib/archetypeQuiz";
import type { ExpandedArchetypeId } from "@/lib/expandedArchetypes";
import { ArchetypeBadges } from "@/components/ArchetypeBadge";

type ArchetypeFilter = 'all' | CoreArchetypeId | ExpandedArchetypeId;

export default function Practices() {
  const [activeFilter, setActiveFilter] = useState<ArchetypeFilter>('all');
  const [expandedPractice, setExpandedPractice] = useState<string | null>(null);

  // Get all practices
  const allPractices = getAllPractices();

  // Filter practices based on active archetype
  const filteredPractices = activeFilter === 'all'
    ? allPractices
    : getPracticesByArchetype(activeFilter as CoreArchetypeId | ExpandedArchetypeId);

  // Sort alphabetically
  const sortedPractices = [...filteredPractices].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Archetype filter options
  const coreArchetypes: { id: CoreArchetypeId; name: string }[] = [
    { id: 'carrier', name: 'The Stone Carrier' },
    { id: 'thrower', name: 'The Stone Thrower' },
    { id: 'conscious', name: 'The Conscious Forger' },
    { id: 'forger', name: 'The Stone Forger' }
  ];

  const expandedArchetypes: { id: ExpandedArchetypeId; name: string }[] = [
    { id: 'jade-hunter', name: 'The Jade Hunter' },
    { id: 'walker-of-the-way', name: 'Walker of The Way' },
    { id: 'stone-keeper', name: 'The Stone Keeper' },
    { id: 'stone-breaker', name: 'The Stone Breaker' },
    { id: 'stone-caller', name: 'The Stone Caller' },
    { id: 'stone-witness', name: 'The Stone Witness' }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header - Pause Animation */}
            <div className="reveal-animate text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 leading-tight">
                The Practices
              </h1>
              <p className="text-xl text-stone-600">
                Micro-practices for embodied integration
              </p>
            </div>

            {/* Introduction - Pivot Animation */}
            <section className="pivot-animate mb-12 bg-amber-50 p-8 rounded-lg">
              <p className="text-lg leading-relaxed text-stone-700">
                These are not exercises to complete. They are invitations to presence. Each practice takes less
                than three minutes, but the effects compound over time. They are designed to be woven into your
                daily life :: at your desk, in the shower, before a difficult conversation, after a moment of rage.
              </p>
              <p className="text-lg leading-relaxed text-stone-700 mt-4">
                The practices are organized by archetype, but you can use any practice at any time. <GlossaryTooltip term="Trust">Trust</GlossaryTooltip> your <GlossaryTooltip term="Pattern Recognition">intuition</GlossaryTooltip> to guide you to the one you need right now.
              </p>
              <p className="text-sm text-stone-500 mt-4 italic">
                Terms with dotted underlines link to the{" "}
                <Link href="/glossary" className="text-amber-600 hover:text-amber-700 underline">
                  Glossary
                </Link>{" "}
                for deeper exploration.
              </p>
            </section>

            {/* Filter Section */}
            <section className="mb-12">
              <h2 className="text-xl font-serif text-stone-800 mb-4 text-center">
                Filter by Archetype
              </h2>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {/* View All */}
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'all'
                      ? "bg-amber-600 text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  View All ({allPractices.length})
                </button>

                {/* Core Archetypes */}
                {coreArchetypes.map(({ id, name }) => (
                  <button
                    key={id}
                    onClick={() => setActiveFilter(id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === id
                        ? "bg-amber-600 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {/* Expanded Archetypes */}
                {expandedArchetypes.map(({ id, name }) => (
                  <button
                    key={id}
                    onClick={() => setActiveFilter(id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === id
                        ? "bg-amber-600 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              {activeFilter !== 'all' && (
                <p className="text-center text-stone-600 mt-4">
                  Showing {sortedPractices.length} practice{sortedPractices.length !== 1 ? 's' : ''}
                </p>
              )}
            </section>

            {/* Practices Grid */}
            <section className="space-y-6 mb-16">
              {sortedPractices.map((practice) => (
                <PracticeCard
                  key={practice.id}
                  practice={practice}
                  isExpanded={expandedPractice === practice.id}
                  onToggle={() => setExpandedPractice(
                    expandedPractice === practice.id ? null : practice.id
                  )}
                />
              ))}
            </section>

            {/* No Results */}
            {sortedPractices.length === 0 && (
              <div className="text-center py-12 bg-stone-50 rounded-lg">
                <p className="text-stone-600 text-lg mb-4">
                  No practices match your current filter.
                </p>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="text-amber-600 hover:text-amber-700 font-medium underline"
                >
                  View all practices
                </button>
              </div>
            )}

            {/* Closing Section */}
            <section className="mt-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-stone-800 mb-4 text-center">
                The Practice is the Path
              </h2>
              <p className="text-lg leading-relaxed text-stone-700 text-center">
                You don't need to master all of these. Start with one. The one that makes you uncomfortable. The one
                that you keep avoiding. That's your stone. That's where the work lives.
              </p>
              <p className="text-lg leading-relaxed text-stone-700 text-center mt-4 font-serif italic">
                The path materializes beneath your feet. Step.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Practice Card Component
function PracticeCard({
  practice,
  isExpanded,
  onToggle
}: {
  practice: Practice;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-lg border-l-4 border-amber-600 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-serif text-stone-800 mb-2">
              {practice.name}
            </h3>

            {/* Archetype Badges */}
            <div className="mb-3">
              <ArchetypeBadges
                coreArchetypes={practice.coreArchetypeTags}
                expandedArchetypes={practice.expandedArchetypeTags}
                prefix="For:"
                size="sm"
              />
            </div>

            <p className="text-stone-600 mb-3">
              {practice.description}
            </p>

            {/* Metadata */}
            <div className="flex flex-wrap gap-4 text-sm text-stone-500">
              {practice.duration && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {practice.duration}
                </span>
              )}
              {practice.frequency && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {practice.frequency}
                </span>
              )}
              <span className="inline-flex items-center px-2 py-0.5 bg-stone-100 text-stone-600 rounded text-xs font-medium capitalize">
                {practice.category}
              </span>
            </div>
          </div>

          {/* Expand Icon */}
          <svg
            className={`w-5 h-5 text-stone-400 ml-4 mt-1 transition-transform flex-shrink-0 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded Instructions */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-stone-200 pt-4 bg-amber-50/30">
          <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-3">
            How to Practice
          </h4>
          <p className="text-stone-700 leading-relaxed whitespace-pre-line">
            {practice.instructions}
          </p>
        </div>
      )}
    </div>
  );
}
