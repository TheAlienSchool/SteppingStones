import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import TodaysPractice from "@/components/TodaysPractice";
import PracticeReminder from "@/components/PracticeReminder";
import { getTodaysPractice, practices, getPracticesForArchetype, getArchetypeDisplayName, type Practice } from "@/lib/todaysPractice";
import { getLatestQuizResult, type ArchetypeType } from "@/lib/archetypeQuiz";
import { Clock, Sparkles, ChevronRight } from "lucide-react";

export default function TodaysPracticePage() {
  const todaysPractice = getTodaysPractice();
  const quizResult = getLatestQuizResult();
  const hasArchetype = !!quizResult;

  // Get other practices for exploration
  const otherPractices = practices.filter(p => p.id !== todaysPractice.id);

  // Group by archetype for exploration
  const archetypes: ArchetypeType[] = ['carrier', 'thrower', 'conscious', 'forger'];

  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Daily Practice
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Today's Practice
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {hasArchetype
                ? `Selected for your archetype: ${getArchetypeDisplayName(quizResult.archetype)}`
                : "A practice to ground you in the present moment"
              }
            </p>
          </div>

          {/* Main Practice Card */}
          <TodaysPractice variant="full" className="mb-8" />

          {/* Practice Reminder */}
          <PracticeReminder practice={todaysPractice} className="mb-16" />

          {/* Explore More Practices */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-serif text-stone-800 mb-2">
                Explore All Practices
              </h2>
              <p className="text-stone-600">
                Each archetype has practices designed for their unique journey
              </p>
            </div>

            <div className="grid gap-6">
              {archetypes.map(archetype => {
                const archetypePractices = getPracticesForArchetype(archetype);
                if (archetypePractices.length === 0) return null;

                return (
                  <div key={archetype} className="bg-stone-50 rounded-xl p-6">
                    <h3 className="font-serif text-lg text-stone-800 mb-4">
                      {getArchetypeDisplayName(archetype)}
                    </h3>
                    <div className="space-y-3">
                      {archetypePractices.map(practice => (
                        <PracticeCard
                          key={practice.id}
                          practice={practice}
                          isTodays={practice.id === todaysPractice.id}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-200 rounded-2xl p-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                Continue Your Journey
              </h3>
              <p className="text-stone-600 mb-6 max-w-lg mx-auto">
                Practices become stepping stones when integrated into daily life.
                Return tomorrow for your next practice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {!hasArchetype && (
                  <Link href="/archetype-quiz">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
                      Discover Your Archetype
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                )}
                <Link href="/practices">
                  <button className="inline-flex items-center gap-2 px-6 py-3 border border-amber-600 text-amber-700 hover:bg-amber-50 rounded-lg transition-colors">
                    View Practice Guide
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function PracticeCard({ practice, isTodays }: { practice: Practice; isTodays: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-lg border ${isTodays ? 'border-amber-400 ring-2 ring-amber-100' : 'border-stone-200'} overflow-hidden`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="font-medium text-stone-800">{practice.name}</span>
          {isTodays && (
            <span className="text-xs bg-amber-600 text-white px-2 py-0.5 rounded">
              Today
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-stone-500">
          <span className="flex items-center gap-1 text-xs">
            <Clock className="w-3 h-3" />
            {practice.duration}
          </span>
          <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 border-t border-stone-100">
          <p className="text-sm text-stone-600 mt-3 mb-4">
            {practice.shortDescription}
          </p>
          <ol className="space-y-2 text-sm">
            {practice.steps.map((step, i) => (
              <li key={i} className="flex gap-2 text-stone-700">
                <span className="text-amber-600 font-medium">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="text-xs text-stone-500 mt-4 pt-3 border-t border-stone-100">
            <strong>When to use:</strong> {practice.whenToUse}
          </p>
        </div>
      )}
    </div>
  );
}
