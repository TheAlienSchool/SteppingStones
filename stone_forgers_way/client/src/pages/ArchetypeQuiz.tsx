import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
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

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete
      const quizResult = calculateArchetype(newAnswers);
      saveQuizResult(quizResult);
      setResult(quizResult);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    const archetypeName = getArchetypeName(result.archetype);
    const description = getArchetypeDescription(result.archetype);
    const practices = getArchetypePractices(result.archetype);

    return (
      <Layout>
        <div className="min-h-screen py-24 bg-gradient-to-b from-amber-50 to-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Results Header */}
              <div className="text-center mb-12">
                <h1 className="text-5xl font-serif text-stone-800 mb-4">
                  Your Archetype
                </h1>
                <p className="text-xl text-stone-600">
                  Based on your responses, your primary archetype is:
                </p>
              </div>

              {/* Archetype Reveal */}
              <Card className="p-8 mb-8 bg-white border-2 border-amber-600">
                <h2 className="text-4xl font-serif text-center text-amber-700 mb-6">
                  {archetypeName}
                </h2>
                <p className="text-lg leading-relaxed text-stone-700 mb-6">
                  {description}
                </p>

                {/* Score Breakdown */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <div className="text-sm text-stone-600 mb-1">Stone Carrier</div>
                    <div className="text-2xl font-bold text-stone-800">{result.scores.carrier}</div>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <div className="text-sm text-stone-600 mb-1">Stone Thrower</div>
                    <div className="text-2xl font-bold text-stone-800">{result.scores.thrower}</div>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <div className="text-sm text-stone-600 mb-1">Conscious Forger</div>
                    <div className="text-2xl font-bold text-stone-800">{result.scores.conscious}</div>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <div className="text-sm text-stone-600 mb-1">Stone Forger</div>
                    <div className="text-2xl font-bold text-stone-800">{result.scores.forger}</div>
                  </div>
                </div>

                <p className="text-sm text-stone-600 italic text-center">
                  Remember :: you are all four archetypes. This reveals where you are now.
                </p>
              </Card>

              {/* Personalized Practices */}
              <Card className="p-8 mb-8 bg-white">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setLocation('/archetypes')}
                  variant="default"
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700"
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
                <Button
                  onClick={() => setLocation('/practices')}
                  variant="outline"
                  size="lg"
                >
                  View All Practices
                </Button>
              </div>

              {/* Note */}
              <div className="mt-12 text-center">
                <p className="text-sm text-stone-600 leading-relaxed">
                  Your results are saved locally in your browser. You can return anytime to see your archetype.
                  As you grow and evolve, consider retaking the quiz to track your journey.
                </p>
              </div>
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
                    className="w-full text-left p-6 rounded-lg border-2 border-stone-200 hover:border-amber-600 hover:bg-amber-50 transition-all duration-200 group"
                  >
                    <p className="text-lg text-stone-700 group-hover:text-stone-900 leading-relaxed">
                      {option.text}
                    </p>
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
