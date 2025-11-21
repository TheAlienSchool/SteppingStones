import { useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  getLatestQuizResult,
  getArchetypeName,
  getArchetypeDescription,
  getArchetypePractices,
  getQuizHistory,
  type ArchetypeType,
  type QuizResult
} from "@/lib/archetypeQuiz";
import SocialShare from "@/components/SocialShare";

export default function MyArchetype() {
  const [result, setResult] = useState<ReturnType<typeof getLatestQuizResult>>(null);
  const [history, setHistory] = useState<ReturnType<typeof getQuizHistory>>([]);

  useEffect(() => {
    const latestResult = getLatestQuizResult();
    const allResults = getQuizHistory();
    setResult(latestResult);
    setHistory(allResults);
  }, []);

  if (!result) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <h1 className="text-4xl font-serif text-stone-800">
              Discover Your Archetype
            </h1>
            <p className="text-lg text-stone-600">
              You haven't taken the archetype quiz yet. Take it now to discover which archetype you're currently inhabiting.
            </p>
            <Link href="/archetype-quiz">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Take the Quiz
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const archetypeName = getArchetypeName(result.archetype);
  const description = getArchetypeDescription(result.archetype);
  const practices = getArchetypePractices(result.archetype);

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-serif text-stone-800">
              Your Archetype
            </h1>
            <p className="text-xl text-stone-600">
              Taken on {new Date(result.completedAt).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-serif text-amber-700">
                {archetypeName}
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                Your Archetype Scores
              </h3>
              <div className="space-y-4">
                {Object.entries(result.scores).map(([key, score]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-700 font-medium">
                        {getArchetypeName(key as ArchetypeType)}
                      </span>
                      <span className="text-amber-700 font-semibold">
                        {score}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-3">
                      <div
                        className="bg-amber-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                Your Practice
              </h3>
              <div className="bg-amber-50 p-6 rounded-lg space-y-4">
                {practices.map((practice, i) => (
                  <p key={i} className="text-stone-700 leading-relaxed">
                    {practice}
                  </p>
                ))}
              </div>
            </div>

            {history.length > 1 && (
              <div className="border-t border-stone-200 pt-8">
                <h3 className="text-2xl font-serif text-stone-800 mb-4">
                  Your Archetype Evolution
                </h3>
                <div className="space-y-4">
                  {history.map((h: QuizResult, index: number) => (
                    <div key={h.completedAt} className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg">
                      <div className="text-sm text-stone-500 w-32">
                        {new Date(h.completedAt).toLocaleDateString()}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-stone-800">
                          {getArchetypeName(h.archetype)}
                        </span>
                        {index === 0 && (
                          <span className="ml-2 text-xs bg-amber-600 text-white px-2 py-1 rounded">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-stone-200 pt-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-4 text-center">
                Share Your Archetype
              </h3>
              <SocialShare 
                title={`I discovered my archetype :: ${archetypeName}`}
              />
            </div>

            <div className="text-center pt-8">
              <Link href="/archetype-quiz">
                <Button size="lg" variant="outline" className="mr-4">
                  Retake Quiz
                </Button>
              </Link>
              <Link href="/archetypes">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Learn About Archetypes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
