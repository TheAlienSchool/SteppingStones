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
import TodaysPractice from "@/components/TodaysPractice";
import PracticeReminder from "@/components/PracticeReminder";
import { getTodaysPractice } from "@/lib/todaysPractice";
import StoneMap from "@/components/StoneMap";

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
              
              {/* Dynamic SVG Stone Map of Commitment States */}
              <StoneMap archetypeId={result.archetype} />
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

            <div className="border-t border-stone-200 pt-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                Today's Practice
              </h3>
              <TodaysPractice variant="full" />
              <PracticeReminder practice={getTodaysPractice()} className="mt-4" />
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

            <div className="border-t border-stone-200 pt-8 no-print">
              <h3 className="text-2xl font-serif text-stone-800 mb-4 text-center">
                Share Your Archetype
              </h3>
              <SocialShare 
                title={`I discovered my archetype :: ${archetypeName}`}
              />
            </div>

            {/* Print Deskside Postcard Generator (The Somatic Workspace Anchor) */}
            <div className="border-t border-stone-200 pt-8 text-center no-print">
              <h3 className="text-2xl font-serif text-stone-800 mb-2">
                Somatic Workspace Anchor
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                Print your archetype’s custom 4x6 deskside card. Place it on your physical desk as a quiet reminder to check your breath and choose presence in moments of daily friction.
              </p>
              <Button 
                onClick={() => window.print()} 
                className="bg-stone-900 hover:bg-stone-800 text-stone-100 flex items-center gap-2 mx-auto"
                size="lg"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Deskside Postcard (4x6)
              </Button>
            </div>

            <div className="text-center pt-8 no-print">
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

      {/* Hidden Print-Only Postcard Element */}
      <div className="hidden print:block print:fixed print:inset-0 print:bg-white print:z-[9999] print:p-0 print:m-0">
        <div className="w-[6in] h-[4in] border-2 border-stone-800 p-6 mx-auto flex flex-col justify-between bg-white text-stone-950 font-serif box-border relative" style={{ pageBreakInside: 'avoid' }}>
          {/* Postcard Header */}
          <div className="flex justify-between items-start border-b border-stone-300 pb-2">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-sans">
                The Stone Forger's Way
              </span>
              <h2 className="text-xl text-stone-900 font-bold leading-tight mt-0.5">
                The {archetypeName}
              </h2>
            </div>
            {/* Small Nameless Star Logo */}
            <svg className="w-6 h-6 text-amber-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 12.5 8.5 15 11C17.5 13.5 24 14 24 14C24 14 17.5 14.5 15 17C12.5 19.5 12 26 12 26C12 26 11.5 19.5 9 17C6.5 14.5 0 14 0 14C0 14 6.5 13.5 9 11C11.5 8.5 12 2 12 2Z" />
            </svg>
          </div>

          {/* Archetype Practice & Lived Sensation */}
          <div className="flex-1 my-4 flex flex-col justify-center">
            <p className="text-xs italic text-stone-700 leading-relaxed mb-3">
              "{description}"
            </p>
            <div className="bg-stone-50 border-l-2 border-amber-600 p-3">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-800 mb-1">
                Your Workspace Practice:
              </h4>
              <p className="text-[10px] text-stone-700 leading-snug">
                {practices[0] || "Feel the stones: Pause, check your breath, and decide if this obligation is yours to carry."}
              </p>
            </div>
          </div>

          {/* Experiential Deskside Guidance & Postcard Signatures */}
          <div className="border-t border-stone-300 pt-2 flex justify-between items-end">
            <div className="max-w-[70%]">
              <h5 className="text-[9px] font-sans font-bold uppercase tracking-wider text-stone-500 mb-0.5">
                Deskside Practice Guidance:
              </h5>
              <p className="text-[9px] text-stone-600 leading-normal font-sans">
                {result.archetype.includes("carrier") && "Place this card under your monitor. When a new request arrives, look at the card, take a slow breath, and ask: Is this mine to carry?"}
                {result.archetype.includes("thrower") && "Place this card on your keyboard when taking a break. Let frustration dissolve into the paper before speaking a reaction."}
                {result.archetype.includes("conscious") && "Keep this card flat on your desk. Stand a single physical stone or object on it to lock your attention onto your single active task."}
                {!result.archetype.includes("carrier") && !result.archetype.includes("thrower") && !result.archetype.includes("conscious") && "Place this card on your desk where it catches morning light. Step forward with trust, knowing the path solidifies beneath you as you step."}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-mono text-stone-400 uppercase tracking-widest">
                "Trust is the cheat code."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
