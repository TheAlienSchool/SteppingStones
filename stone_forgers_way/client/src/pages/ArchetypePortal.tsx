import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import SocialShare from "@/components/SocialShare";
import {
  getExpandedArchetype,
  type ExpandedArchetypeId
} from "@/lib/expandedArchetypes";
import {
  getCorePracticesForExpandedArchetype,
  type Practice
} from "@/lib/practicesData";
import { getLatestExpandedQuizResult } from "@/lib/expandedQuiz";

export default function ArchetypePortal() {
  const [, params] = useRoute("/archetype/:id");
  const archetypeId = params?.id as ExpandedArchetypeId;
  const [isUserArchetype, setIsUserArchetype] = useState(false);

  useEffect(() => {
    const result = getLatestExpandedQuizResult();
    if (result && result.expandedArchetype === archetypeId) {
      setIsUserArchetype(true);
    }
  }, [archetypeId]);

  if (!archetypeId || !params) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <h1 className="text-4xl font-serif text-stone-800">
              Archetype Not Found
            </h1>
            <p className="text-lg text-stone-600">
              The archetype you're looking for doesn't exist.
            </p>
            <Link href="/archetypes">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Explore All Archetypes
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const archetype = getExpandedArchetype(archetypeId);
  const practices = getCorePracticesForExpandedArchetype(archetypeId);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <section className="reveal-animate py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                {/* Image */}
                <div className="md:w-2/5">
                  <img
                    src={archetype.imagePath}
                    alt={`${archetype.name} - ${archetype.subtitle}`}
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                  />
                </div>

                {/* Title and Subtitle */}
                <div className="md:w-3/5 space-y-6 text-center md:text-left">
                  {isUserArchetype && (
                    <div className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Your Archetype
                    </div>
                  )}

                  <h1 className="text-5xl md:text-6xl font-serif text-stone-800">
                    {archetype.name}
                  </h1>

                  <p className="text-2xl text-amber-700 font-semibold">
                    {archetype.subtitle}
                  </p>

                  <p className="text-xl text-stone-600 italic">
                    {archetype.simpleDefinition}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Experience */}
        <section className="pivot-animate py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-serif text-stone-800 text-center">
                The Experience
              </h2>

              <div className="bg-amber-50 p-8 md:p-12 rounded-lg border-l-4 border-amber-600">
                <p className="text-lg text-stone-700 leading-relaxed">
                  {archetype.experience}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Gift & Insight */}
        <section className="py-16 bg-amber-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-serif text-stone-800 text-center">
                The Gift
              </h2>

              <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  <span className="text-4xl font-serif text-amber-700">
                    {archetype.gift}
                  </span>
                </div>

                <div
                  className="text-lg text-stone-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: archetype.insight }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Shadow */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-serif text-stone-800 text-center">
                The Shadow
              </h2>

              <p className="text-center text-stone-600 max-w-2xl mx-auto">
                Every archetype has a shadow :: the distortion that appears when the gift is unbalanced.
                Not to shame, but to recognize with compassion.
              </p>

              <div className="bg-stone-100 p-8 md:p-12 rounded-lg border-l-4 border-stone-400">
                <p className="text-lg text-stone-700 leading-relaxed">
                  {archetype.shadow}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Practice */}
        <section className="py-16 bg-amber-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-serif text-stone-800 text-center">
                Your Core Practice
              </h2>

              <div className="bg-white p-8 md:p-12 rounded-lg shadow-md border-l-4 border-amber-600">
                <h3 className="text-2xl font-serif text-amber-700 mb-4">
                  {archetype.corePractice.name}
                </h3>
                <p className="text-lg text-stone-700 leading-relaxed">
                  {archetype.corePractice.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Progression Path */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-serif text-stone-800 text-center">
                Your Progression Path
              </h2>

              <div className="text-center">
                <h3 className="text-2xl font-serif text-amber-700 mb-2">
                  {archetype.progressionPath.title}
                </h3>
                <p className="text-lg text-stone-600 italic">
                  {archetype.progressionPath.goal}
                </p>
              </div>

              <div className="bg-amber-50 p-8 md:p-12 rounded-lg border-l-4 border-amber-600">
                <h4 className="text-xl font-semibold text-stone-800 mb-3">
                  {archetype.progressionPath.tool.name}
                </h4>
                <p className="text-lg text-stone-700 leading-relaxed">
                  {archetype.progressionPath.tool.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practices for this Archetype */}
        {practices.length > 0 && (
          <section className="py-16 bg-amber-50/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-3xl font-serif text-stone-800 text-center">
                  Practices for {archetype.name}
                </h2>

                <div className="space-y-6">
                  {practices.map((practice: Practice) => (
                    <div
                      key={practice.id}
                      className="bg-white p-6 md:p-8 rounded-lg shadow-md"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-serif text-amber-700 mb-1">
                            {practice.name}
                          </h3>
                          <p className="text-stone-600">
                            {practice.description}
                          </p>
                        </div>

                        <div className="text-sm text-stone-500 md:text-right flex-shrink-0">
                          {practice.duration && (
                            <div>{practice.duration}</div>
                          )}
                          {practice.frequency && (
                            <div>{practice.frequency}</div>
                          )}
                        </div>
                      </div>

                      <div className="bg-amber-50 p-4 rounded">
                        <p className="text-stone-700 leading-relaxed">
                          {practice.instructions}
                        </p>
                      </div>

                      <div className="mt-3 text-xs text-stone-500">
                        Category: <span className="capitalize">{practice.category}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Link href="/practices">
                    <Button variant="outline" size="lg">
                      Explore All Practices
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Glossary Focus */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-serif text-stone-800 text-center">
                Key Concepts for Your Path
              </h2>

              <p className="text-center text-stone-600 max-w-2xl mx-auto">
                These glossary terms are particularly relevant to {archetype.name}.
                Hover over each to see its definition.
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                {archetype.progressionPath.glossaryFocus.map((term) => (
                  <div key={term} className="inline-block">
                    <GlossaryTooltip term={term}>
                      <span className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors">
                        {term}
                      </span>
                    </GlossaryTooltip>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <Link href="/glossary">
                  <Button variant="outline" size="lg">
                    Explore Full Glossary
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Signature (for reference) */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-serif text-stone-800 text-center">
                Visual Signature
              </h2>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-stone-700 leading-relaxed italic text-center">
                  {archetype.visualSignature}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-serif text-stone-800 text-center">
                Share This Archetype
              </h2>

              <SocialShare
                title={`${archetype.name} :: ${archetype.subtitle}`}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {!isUserArchetype && (
                <>
                  <h2 className="text-3xl font-serif text-stone-800">
                    Is this your archetype?
                  </h2>

                  <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                    Take the two-layer archetype quiz to discover your core state and
                    expanded archetype with precision.
                  </p>

                  <Link href="/archetype-quiz">
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6">
                      Discover Your Archetype
                    </Button>
                  </Link>
                </>
              )}

              {isUserArchetype && (
                <>
                  <h2 className="text-3xl font-serif text-stone-800">
                    This is your mirror
                  </h2>

                  <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                    You've found your archetype. Now the work begins. Return to this page
                    whenever you need to remember who you are and what you're here to forge.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/practices">
                      <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                        Explore Practices
                      </Button>
                    </Link>

                    <Link href="/glossary">
                      <Button size="lg" variant="outline">
                        Study the Glossary
                      </Button>
                    </Link>
                  </div>
                </>
              )}

              <div className="pt-8">
                <Link href="/archetypes">
                  <Button variant="ghost" className="text-stone-600 hover:text-stone-800">
                    ← Back to All Archetypes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
