import { Link } from "wouter";
import { getTodaysPractice, getArchetypeDisplayName } from "@/lib/todaysPractice";
import { getLatestQuizResult } from "@/lib/archetypeQuiz";
import { Clock, Sparkles, ChevronRight } from "lucide-react";

interface TodaysPracticeProps {
  variant?: "compact" | "full" | "nav";
  className?: string;
}

export default function TodaysPractice({ variant = "compact", className = "" }: TodaysPracticeProps) {
  const practice = getTodaysPractice();
  const quizResult = getLatestQuizResult();
  const hasArchetype = !!quizResult;

  if (variant === "nav") {
    return (
      <Link href="/todays-practice">
        <div className={`flex items-center gap-2 px-3 py-2 text-sm text-amber-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors ${className}`}>
          <Sparkles className="w-4 h-4" />
          <span>Today's Practice</span>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-200 rounded-xl p-5 ${className}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-amber-700">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-wide">Today's Practice</span>
            </div>
            <h3 className="text-xl font-serif text-stone-800">
              {practice.name}
            </h3>
            <p className="text-sm text-stone-600 line-clamp-2">
              {practice.shortDescription}
            </p>
            <div className="flex items-center gap-4 pt-1">
              <span className="flex items-center gap-1 text-xs text-stone-500">
                <Clock className="w-3 h-3" />
                {practice.duration}
              </span>
              {hasArchetype && (
                <span className="text-xs text-amber-600">
                  For {getArchetypeDisplayName(practice.archetype)}
                </span>
              )}
            </div>
          </div>
          <Link href="/todays-practice">
            <button className="flex items-center justify-center w-10 h-10 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors shrink-0">
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Full variant - used on dedicated page
  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium uppercase tracking-wide opacity-90">Today's Practice</span>
        </div>
        <h2 className="text-3xl font-serif">{practice.name}</h2>
        <div className="flex items-center gap-4 mt-3 text-amber-100">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {practice.duration}
          </span>
          <span>•</span>
          <span>{getArchetypeDisplayName(practice.archetype)}</span>
        </div>
      </div>

      <div className="p-8 space-y-8">
        <div>
          <p className="text-lg text-stone-700 leading-relaxed">
            {practice.shortDescription}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-serif text-stone-800">The Practice</h3>
          <ol className="space-y-4">
            {practice.steps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 bg-amber-100 text-amber-700 rounded-full font-semibold shrink-0">
                  {index + 1}
                </span>
                <p className="text-stone-700 pt-1 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-stone-50 rounded-xl p-6">
          <h4 className="font-semibold text-stone-800 mb-2">When to Use</h4>
          <p className="text-stone-600">{practice.whenToUse}</p>
        </div>

        {!hasArchetype && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
            <p className="text-stone-700 mb-4">
              This practice is selected randomly. Take the archetype quiz to receive personalized daily practices.
            </p>
            <Link href="/archetype-quiz">
              <button className="inline-flex items-center gap-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors">
                Discover Your Archetype
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
