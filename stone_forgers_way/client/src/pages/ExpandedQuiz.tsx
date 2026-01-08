import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import {
  expandedQuizQuestions,
  calculateExpandedArchetype,
  saveExpandedQuizResult,
  type ExpandedQuizResult
} from "@/lib/expandedQuiz";
import {
  getLatestQuizResult,
  type CoreArchetypeId
} from "@/lib/archetypeQuiz";
import {
  getExpandedArchetype,
  type ExpandedArchetypeId
} from "@/lib/expandedArchetypes";
import SocialShare from "@/components/SocialShare";

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ExpandedQuiz() {
  const [, setLocation] = useLocation();
  const [coreArchetype, setCoreArchetype] = useState<CoreArchetypeId | null>(null);

  // Check if user has completed core quiz
  useEffect(() => {
    const coreResult = getLatestQuizResult();
    if (!coreResult) {
      setLocation("/archetype-quiz");
      return;
    }
    setCoreArchetype(coreResult.archetype as CoreArchetypeId);
  }, [setLocation]);

  // Randomize questions and options on mount
  const [randomizedQuestions, setRandomizedQuestions] = useState(() => {
    return shuffleArray(expandedQuizQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<ExpandedQuizResult | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQuestion + 1) / randomizedQuestions.length) * 100;
  const question = randomizedQuestions[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    if (isTransitioning || !coreArchetype) return;

    setSelectedOption(optionIndex);
    setIsTransitioning(true);

    const newAnswers = [...answers, optionIndex];

    // Delay to show selection confirmation
    setTimeout(() => {
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQuestion < randomizedQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      } else {
        // Quiz complete - calculate expanded archetype
        const quizResult = calculateExpandedArchetype(coreArchetype, newAnswers);
        saveExpandedQuizResult(quizResult);
        setResult(quizResult);

        // Delay showing result for dramatic reveal
        setTimeout(() => {
          setShowResult(true);
          setIsTransitioning(false);
        }, 500);
      }
    }, 400);
  };

  const handleRestart = () => {
    // Re-randomize questions and options for new quiz attempt
    setRandomizedQuestions(
      shuffleArray(expandedQuizQuestions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }))
    );
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setSelectedOption(null);
    setIsTransitioning(false);
    setShowResult(false);
  };

  // Loading state while checking core quiz
  if (!coreArchetype) {
    return (
      <Layout>
        <div className="min-h-screen py-24 bg-gradient-to-b from-amber-50 to-stone-50 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 mx-auto border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-xl text-stone-600 font-serif">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Results screen
  if (result) {
    const archetype = getExpandedArchetype(result.expandedArchetype);

    // Sort scores for display
    const sortedScores = Object.entries(result.scores)
      .map(([id, score]) => ({
        id: id as ExpandedArchetypeId,
        name: getExpandedArchetype(id as ExpandedArchetypeId).name,
        score
      }))
      .sort((a, b) => b.score - a.score);

    const maxScore = Math.max(...sortedScores.map(s => s.score));

    // Pre-reveal loading state
    if (!showResult) {
      return (
        <Layout>
          <div className="min-h-screen py-24 bg-gradient-to-b from-amber-50 to-stone-50 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
              <p className="text-xl text-stone-600 font-serif">Revealing your archetype...</p>
            </div>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        <div className="min-h-screen py-24 bg-gradient-to-b from-amber-50 to-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Results Header */}
              <div
                className="text-center mb-12 opacity-0 animate-fade-in"
                style={{ animation: "fadeInUp 0.6s ease-out forwards" }}
              >
                <p className="text-lg text-amber-600 mb-2">You have deepened</p>
                <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 leading-tight">
                  Your Expanded Archetype
                </h1>
              </div>

              {/* Archetype Reveal */}
              <Card
                className="p-8 mb-8 bg-white border-2 border-amber-600 opacity-0"
                style={{ animation: "fadeInUp 0.6s ease-out 0.3s forwards" }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                  <div className="md:w-1/3">
                    <img
                      src={archetype.imagePath}
                      alt={archetype.name}
                      className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                    />
                  </div>

                  <div className="md:w-2/3 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif text-amber-700">
                      {archetype.name}
                    </h2>
                    <p className="text-xl text-stone-600 font-semibold">
                      {archetype.subtitle}
                    </p>
                    <p className="text-lg text-stone-700 italic">
                      {archetype.simpleDefinition}
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg mb-6">
                  <p className="text-lg text-stone-700 leading-relaxed">
                    {archetype.experience}
                  </p>
                </div>

                {/* Score Breakdown */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-lg font-semibold text-stone-800 mb-3">Your Archetype Resonance</h3>
                  {sortedScores.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-4 p-3 rounded-lg ${
                        index === 0 ? 'bg-amber-50 border border-amber-200' : 'bg-stone-50'
                      }`}
                    >
                      <div className="w-8 text-center">
                        {index === 0 && <span className="text-amber-600 text-lg">★</span>}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-sm ${index === 0 ? 'font-semibold text-amber-800' : 'text-stone-600'}`}>
                            {item.name}
                          </span>
                          <span className={`text-sm font-bold ${index === 0 ? 'text-amber-700' : 'text-stone-700'}`}>
                            {item.score}
                          </span>
                        </div>
                        <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              index === 0 ? 'bg-amber-500' : 'bg-stone-400'
                            }`}
                            style={{ width: `${(item.score / maxScore) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-stone-600 italic text-center">
                  This archetype is your primary mode :: how you relate to stones, knowing, and transformation right now.
                </p>
              </Card>

              {/* What Now */}
              <Card
                className="p-8 mb-8 bg-gradient-to-br from-stone-800 to-stone-900 text-stone-100 opacity-0"
                style={{ animation: "fadeInUp 0.6s ease-out 0.6s forwards" }}
              >
                <h3 className="text-2xl font-serif mb-4 text-amber-300">
                  What Now?
                </h3>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Your expanded archetype reveals the specific way you engage with the path.
                  This isn't a label—it's a mirror. Here's how to work with what you've discovered:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-amber-100">Explore Your Archetype Portal</p>
                      <p className="text-sm text-stone-400">
                        Visit your archetype's dedicated page to see your gift, shadow, practices, and progression path.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-amber-100">Practice Your Core Practice</p>
                      <p className="text-sm text-stone-400">
                        Start with {archetype.corePractice.name} today.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-amber-100">Study Your Glossary Focus</p>
                      <p className="text-sm text-stone-400">
                        The concepts of {archetype.progressionPath.glossaryFocus.slice(0, 3).join(", ")} are key to your path.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Action Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
                style={{ animation: "fadeInUp 0.6s ease-out 0.9s forwards" }}
              >
                <Link href={`/archetype/${archetype.id}`}>
                  <Button size="lg" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                    Visit Your Archetype Portal
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleRestart}
                  className="w-full sm:w-auto"
                >
                  Retake Layer 2 Quiz
                </Button>
              </div>

              {/* Social Share */}
              <div
                className="mt-12 opacity-0"
                style={{ animation: "fadeInUp 0.6s ease-out 1.2s forwards" }}
              >
                <h3 className="text-2xl font-serif text-stone-800 mb-4 text-center">
                  Share Your Discovery
                </h3>
                <SocialShare
                  title={`I discovered my expanded archetype :: ${archetype.name}`}
                />
              </div>

              {/* Additional Navigation */}
              <div className="text-center mt-12 space-y-4">
                <Link href="/practices">
                  <Button variant="ghost" className="text-stone-600 hover:text-stone-800">
                    Explore All Practices
                  </Button>
                </Link>
                <span className="mx-2 text-stone-400">•</span>
                <Link href="/glossary">
                  <Button variant="ghost" className="text-stone-600 hover:text-stone-800">
                    Study the Glossary
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Quiz in progress
  return (
    <Layout>
      <div className="min-h-screen py-12 md:py-24 bg-gradient-to-b from-amber-50 to-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
                Layer 2 :: Go Deeper
              </h1>
              <p className="text-lg text-stone-600 mb-2">
                You've discovered your core archetype. Now let's reveal your specific path.
              </p>
              <p className="text-sm text-stone-500 italic">
                These questions explore how you relate to stones, knowing, and transformation.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-stone-600">
                  Question {currentQuestion + 1} of {randomizedQuestions.length}
                </span>
                <span className="text-sm text-amber-600 font-semibold">
                  {Math.round(progress)}%
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="p-8 mb-8 bg-white shadow-xl">
              <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-8 leading-relaxed">
                {question.question}
              </h2>

              {question.context && (
                <p className="text-sm text-stone-500 italic mb-6 border-l-4 border-amber-200 pl-4">
                  {question.context}
                </p>
              )}

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isTransitioning}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200
                      ${
                        selectedOption === index
                          ? 'border-amber-600 bg-amber-50 shadow-md'
                          : 'border-stone-200 hover:border-amber-400 hover:bg-amber-50/50'
                      }
                      ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    <p className="text-stone-700 leading-relaxed">{option.text}</p>
                  </button>
                ))}
              </div>
            </Card>

            {/* Helper Text */}
            <div className="text-center text-sm text-stone-500">
              <p>Answer honestly. There are no wrong choices—only mirrors.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
