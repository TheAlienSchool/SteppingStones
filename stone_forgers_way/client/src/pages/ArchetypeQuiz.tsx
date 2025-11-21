import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import {
  calculateArchetype,
  getArchetypeDescription,
  getArchetypeName,
  getArchetypePractices,
  quizQuestions,
  saveQuizResult,
  type QuizResult
} from "@/lib/archetypeQuiz";

export default function ArchetypeQuiz() {
  const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMilestone, setShowMilestone] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];
  const halfwayPoint = Math.floor(quizQuestions.length / 2);

  const handleAnswer = (optionIndex: number) => {
    if (isTransitioning) return;

    setSelectedOption(optionIndex);
    setIsTransitioning(true);

    const newAnswers = [...answers, optionIndex];

    // Delay to show selection confirmation
    setTimeout(() => {
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQuestion < quizQuestions.length - 1) {
        // Check for halfway milestone
        if (currentQuestion + 1 === halfwayPoint) {
          setShowMilestone(true);
          setTimeout(() => {
            setShowMilestone(false);
            setCurrentQuestion(currentQuestion + 1);
            setIsTransitioning(false);
          }, 2000);
        } else {
          setCurrentQuestion(currentQuestion + 1);
          setIsTransitioning(false);
        }
      } else {
        // Quiz complete - calculate and show result with animation
        const quizResult = calculateArchetype(newAnswers);
        saveQuizResult(quizResult);
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
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setSelectedOption(null);
    setIsTransitioning(false);
    setShowMilestone(false);
    setShowResult(false);
  };

  if (result) {
    const archetypeName = getArchetypeName(result.archetype);
    const description = getArchetypeDescription(result.archetype);
    const practices = getArchetypePractices(result.archetype);

    // Sort scores for ranked display
    const sortedScores = [
      { name: "Stone Carrier", score: result.scores.carrier, key: "carrier" },
      { name: "Stone Thrower", score: result.scores.thrower, key: "thrower" },
      { name: "Conscious Forger", score: result.scores.conscious, key: "conscious" },
      { name: "Stone Forger", score: result.scores.forger, key: "forger" }
    ].sort((a, b) => b.score - a.score);

    const maxScore = Math.max(...sortedScores.map(s => s.score));

    // Pre-reveal loading state
    if (!showResult) {
      return (
        <Layout>
          <div className="min-h-screen py-24 bg-gradient-to-b from-amber-50 to-stone-50 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto border-4 border-amber-600 border-t-transparent rounded-full animate-spin" />
              <p className="text-xl text-stone-600 font-serif">Forging your results...</p>
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
              {/* Results Header - Animated */}
              <div
                className="text-center mb-12 opacity-0 animate-fade-in"
                style={{ animation: "fadeInUp 0.6s ease-out forwards" }}
              >
                <p className="text-lg text-amber-600 mb-2">Your path has been revealed</p>
                <h1 className="text-5xl font-serif text-stone-800 mb-4">
                  You are
                </h1>
              </div>

              {/* Archetype Reveal - Animated */}
              <Card
                className="p-8 mb-8 bg-white border-2 border-amber-600 opacity-0"
                style={{ animation: "fadeInUp 0.6s ease-out 0.3s forwards" }}
              >
                <h2 className="text-5xl font-serif text-center text-amber-700 mb-6">
                  {archetypeName}
                </h2>
                <p className="text-lg leading-relaxed text-stone-700 mb-8 text-center">
                  {description}
                </p>

                {/* Score Breakdown - Ranked */}
                <div className="space-y-3 mb-6">
                  {sortedScores.map((item, index) => (
                    <div key={item.key} className={`flex items-center gap-4 p-3 rounded-lg ${index === 0 ? 'bg-amber-50 border border-amber-200' : 'bg-stone-50'}`}>
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
                            className={`h-full rounded-full transition-all duration-1000 ${index === 0 ? 'bg-amber-500' : 'bg-stone-400'}`}
                            style={{ width: `${(item.score / maxScore) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-stone-600 italic text-center">
                  Remember :: you are all four archetypes. This reveals where you are now—a snapshot on a living path.
                </p>
              </Card>

              {/* What Now? - Clear Guidance */}
              <Card
                className="p-8 mb-8 bg-gradient-to-br from-stone-800 to-stone-900 text-stone-100 opacity-0"
                style={{ animation: "fadeInUp 0.6s ease-out 0.6s forwards" }}
              >
                <h3 className="text-2xl font-serif mb-4 text-amber-300">
                  What Now?
                </h3>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Your archetype reveals where you stand on the stepping stones. The path forward isn't about
                  becoming a different archetype—it's about bringing presence to where you are now. Here's how to begin:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium text-amber-100">Start with one practice below</p>
                      <p className="text-sm text-stone-400">Choose the one that resonates. Do it once today.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium text-amber-100">Read The Journey</p>
                      <p className="text-sm text-stone-400">Understand the full arc from Terma to Stone Forging.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium text-amber-100">Return when you're ready</p>
                      <p className="text-sm text-stone-400">Retake the quiz in a week, a month, a year. Watch yourself evolve.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Personalized Practices */}
              <Card
                className="p-8 mb-8 bg-white opacity-0"
                style={{ animation: "fadeInUp 0.6s ease-out 0.9s forwards" }}
              >
                <h3 className="text-2xl font-serif text-stone-800 mb-6">
                  Practices for {archetypeName}
                </h3>
                <div className="space-y-6">
                  {practices.map((practice, index) => {
                    const [title, ...descParts] = practice.split(' :: ');
                    const desc = descParts.join(' :: ');
                    return (
                      <div key={index} className="border-l-4 border-amber-600 pl-6">
                        <h4 className="text-lg font-semibold text-stone-800 mb-2">{title}</h4>
                        <p className="text-stone-700 leading-relaxed">{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Actions */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
                style={{ animation: "fadeInUp 0.6s ease-out 1.2s forwards" }}
              >
                <Button
                  onClick={() => setLocation('/journey')}
                  variant="default"
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Begin The Journey
                </Button>
                <Button
                  onClick={() => setLocation('/archetypes')}
                  variant="outline"
                  size="lg"
                >
                  Explore All Archetypes
                </Button>
                <Button
                  onClick={handleRestart}
                  variant="outline"
                  size="lg"
                >
                  Retake Quiz
                </Button>
              </div>

              {/* Note */}
              <div
                className="mt-12 text-center opacity-0"
                style={{ animation: "fadeInUp 0.6s ease-out 1.5s forwards" }}
              >
                <p className="text-sm text-stone-600 leading-relaxed">
                  Your results are saved locally in your browser. As you grow and evolve,
                  return to track your journey along the stepping stones.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animation */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </Layout>
    );
  }

  // Milestone celebration overlay
  if (showMilestone) {
    return (
      <Layout>
        <div className="min-h-screen py-24 bg-gradient-to-b from-stone-50 to-amber-50 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <div className="text-6xl mb-4">◈</div>
            <h2 className="text-3xl font-serif text-stone-800">You're halfway there</h2>
            <p className="text-lg text-stone-600 max-w-md mx-auto">
              The stepping stones are forming beneath your feet. Keep going—presence is building with each answer.
            </p>
            <div className="flex justify-center gap-2 pt-4">
              {Array.from({ length: quizQuestions.length }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i < halfwayPoint ? 'bg-amber-500' : 'bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen py-24 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-serif text-stone-800 mb-4">
                Discover Your Archetype
              </h1>
              <p className="text-xl text-stone-600 mb-8">
                Answer honestly. There are no wrong answers :: only revelations.
              </p>

              {/* Progress */}
              <div className="mb-4">
                <Progress value={progress} className="h-2" />
              </div>
              <p className="text-sm text-stone-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
            </div>

            {/* Question Card */}
            <Card className="p-8 mb-8 bg-white">
              <h2 className="text-2xl font-serif text-stone-800 mb-8 leading-relaxed">
                {question.question}
              </h2>

              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isTransitioning}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-300 ${
                      selectedOption === index
                        ? 'border-amber-500 bg-amber-100 scale-[1.02] shadow-md'
                        : 'border-stone-200 hover:border-amber-600 hover:bg-amber-50'
                    } ${isTransitioning && selectedOption !== index ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        selectedOption === index
                          ? 'border-amber-500 bg-amber-500'
                          : 'border-stone-300'
                      }`}>
                        {selectedOption === index && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <p className={`text-lg leading-relaxed ${
                        selectedOption === index ? 'text-stone-900' : 'text-stone-700'
                      }`}>
                        {option.text}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Navigation Hint */}
            <div className="text-center">
              <p className="text-sm text-stone-500">
                Take your time. Feel into each response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
