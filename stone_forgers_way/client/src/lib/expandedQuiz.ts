// Expanded Archetype Quiz :: Layer 2
// Part of The Stone Forger's Way Expansion Kit v1.2

import type { CoreArchetypeId } from './archetypeQuiz';
import type { ExpandedArchetypeId } from './expandedArchetypes';

export interface ExpandedQuizQuestion {
  id: number;
  question: string;
  context?: string; // Optional context for why this question matters
  options: {
    text: string;
    scores: Partial<Record<ExpandedArchetypeId, number>>;
  }[];
  // Optional: restrict which core archetypes see this question
  showForCoreArchetypes?: CoreArchetypeId[];
}

export interface ExpandedQuizResult {
  expandedArchetype: ExpandedArchetypeId;
  coreArchetype: CoreArchetypeId;
  scores: Record<ExpandedArchetypeId, number>;
  completedAt: string;
  answers: number[];
}

// Layer 2 Questions: These appear after core archetype is determined
// Questions are written in Plain English, grounded in real-life experience
export const expandedQuizQuestions: ExpandedQuizQuestion[] = [
  {
    id: 1,
    question: "When you encounter a heavy stone (obligation, belief, problem), your first instinct is to:",
    options: [
      {
        text: "Examine why it exists and how it was created",
        scores: { 'jade-hunter': 3 }
      },
      {
        text: "Trust the knowing in your bones about whether to pick it up",
        scores: { 'walker-of-the-way': 3 }
      },
      {
        text: "Check if it belongs to your lineage or your personal path",
        scores: { 'stone-keeper': 3 }
      },
      {
        text: "Feel the urge to break it open and see what's inside",
        scores: { 'stone-breaker': 3 }
      },
      {
        text: "Realize you may have called this stone in, even unconsciously",
        scores: { 'stone-caller': 3 }
      },
      {
        text: "Observe it closely without rushing to engage with it",
        scores: { 'stone-witness': 3 }
      }
    ]
  },

  {
    id: 2,
    question: "Your relationship with knowing—how you access truth—feels like:",
    options: [
      {
        text: "I analyze patterns until I see the code beneath the surface",
        scores: { 'jade-hunter': 3 }
      },
      {
        text: "I trust what my body tells me before my mind catches up",
        scores: { 'walker-of-the-way': 3 }
      },
      {
        text: "I feel what my ancestors knew, even if I wasn't taught",
        scores: { 'stone-keeper': 2, 'walker-of-the-way': 1 }
      },
      {
        text: "I know when something needs to break, even if I can't explain why",
        scores: { 'stone-breaker': 3 }
      },
      {
        text: "I notice my words and thoughts manifesting as reality",
        scores: { 'stone-caller': 3 }
      },
      {
        text: "I see clearly by not trying to change what I observe",
        scores: { 'stone-witness': 3 }
      }
    ]
  },

  {
    id: 3,
    question: "When others look to you for guidance, you:",
    options: [
      {
        text: "Help them see the systems and patterns they're caught in",
        scores: { 'jade-hunter': 3 }
      },
      {
        text: "Walk your path and trust they'll follow if it resonates",
        scores: { 'walker-of-the-way': 3 }
      },
      {
        text: "Share the wisdom you've been entrusted to preserve",
        scores: { 'stone-keeper': 3 }
      },
      {
        text: "Show them what needs to break for transformation to happen",
        scores: { 'stone-breaker': 3 }
      },
      {
        text: "Remind them of the power of their words and intentions",
        scores: { 'stone-caller': 3 }
      },
      {
        text: "Hold space for them to find their own answers",
        scores: { 'stone-witness': 3 }
      }
    ]
  },

  {
    id: 4,
    question: "The burden you carry most often is:",
    options: [
      {
        text: "Seeing what's broken in systems others accept as normal",
        scores: { 'jade-hunter': 3 }
      },
      {
        text: "Walking a path others will see value in only after you've walked it",
        scores: { 'walker-of-the-way': 3 }
      },
      {
        text: "Holding sacred what others want to discard or forget",
        scores: { 'stone-keeper': 3 }
      },
      {
        text: "Being seen as 'too intense' when you're breaking necessary patterns",
        scores: { 'stone-breaker': 3 }
      },
      {
        text: "Overwhelming yourself with what you've accidentally summoned",
        scores: { 'stone-caller': 3 }
      },
      {
        text: "The misunderstanding that your stillness means you don't care",
        scores: { 'stone-witness': 3 }
      }
    ]
  },

  {
    id: 5,
    question: "When you think about the future, you sense:",
    options: [
      {
        text: "The need to rewrite broken systems for what's coming",
        scores: { 'jade-hunter': 3 }
      },
      {
        text: "A Peak on the horizon you're walking toward, even without a full map",
        scores: { 'walker-of-the-way': 3 }
      },
      {
        text: "Your responsibility to pass wisdom forward to future generations",
        scores: { 'stone-keeper': 3 }
      },
      {
        text: "What must be dismantled before the new can be built",
        scores: { 'stone-breaker': 3 }
      },
      {
        text: "The reality you're calling into being through your focus and words",
        scores: { 'stone-caller': 3 }
      },
      {
        text: "That the future will unfold as it should, regardless of my interference",
        scores: { 'stone-witness': 3 }
      }
    ]
  },

  {
    id: 6,
    question: "Your gift—the thing people don't always see but benefit from—is:",
    options: [
      {
        text: "My ability to see the code beneath the chaos",
        scores: { 'jade-hunter': 3 }
      },
      {
        text: "My inner compass that creates safe paths for others",
        scores: { 'walker-of-the-way': 3 }
      },
      {
        text: "My commitment to keeping alive what must not be lost",
        scores: { 'stone-keeper': 3 }
      },
      {
        text: "My courage to crack open what's calcified",
        scores: { 'stone-breaker': 3 }
      },
      {
        text: "My understanding that words and intentions create reality",
        scores: { 'stone-caller': 3 }
      },
      {
        text: "My ability to hold steady frequency while others find their way",
        scores: { 'stone-witness': 3 }
      }
    ]
  },

  {
    id: 7,
    question: "The practice that speaks most to you right now is:",
    options: [
      {
        text: "Examining beliefs before I pick up new stones",
        scores: { 'jade-hunter': 2 }
      },
      {
        text: "Trusting my inner compass over external validation",
        scores: { 'walker-of-the-way': 2 }
      },
      {
        text: "Discerning ancestral stones from my own work",
        scores: { 'stone-keeper': 2 }
      },
      {
        text: "Channeling frustration into precise transformation",
        scores: { 'stone-breaker': 2 }
      },
      {
        text: "Pausing before I speak things into existence",
        scores: { 'stone-caller': 2 }
      },
      {
        text: "Watching without trying to fix, solve, or change",
        scores: { 'stone-witness': 2 }
      }
    ]
  },

  {
    id: 8,
    question: "When you feel most alive and aligned, you are:",
    options: [
      {
        text: "Seeing through illusions and revealing hidden structures",
        scores: { 'jade-hunter': 3 }
      },
      {
        text: "Walking forward with no map, trusting each stone will solidify",
        scores: { 'walker-of-the-way': 3 }
      },
      {
        text: "Tending the archive, preserving what matters for those who come next",
        scores: { 'stone-keeper': 3 }
      },
      {
        text: "Breaking patterns that have trapped energy for too long",
        scores: { 'stone-breaker': 3 }
      },
      {
        text: "Consciously creating reality with clear intention and aligned words",
        scores: { 'stone-caller': 3 }
      },
      {
        text: "Anchoring calm presence while chaos moves around me",
        scores: { 'stone-witness': 3 }
      }
    ]
  }
];

// Calculate expanded archetype from quiz answers
export function calculateExpandedArchetype(
  coreArchetype: CoreArchetypeId,
  answers: number[]
): ExpandedQuizResult {
  // Initialize scores for all expanded archetypes
  const scores: Record<ExpandedArchetypeId, number> = {
    'jade-hunter': 0,
    'walker-of-the-way': 0,
    'stone-keeper': 0,
    'stone-breaker': 0,
    'stone-caller': 0,
    'stone-witness': 0
  };

  // Calculate scores from answers
  answers.forEach((answerIndex, questionIndex) => {
    const question = expandedQuizQuestions[questionIndex];
    if (!question) return;

    const selectedOption = question.options[answerIndex];
    if (!selectedOption) return;

    // Add scores from this answer
    Object.entries(selectedOption.scores).forEach(([archetypeId, score]) => {
      scores[archetypeId as ExpandedArchetypeId] += score;
    });
  });

  // Find the highest scoring archetype
  const archetypeEntries = Object.entries(scores) as [ExpandedArchetypeId, number][];
  const primaryArchetype = archetypeEntries.reduce((a, b) =>
    a[1] > b[1] ? a : b
  )[0];

  return {
    expandedArchetype: primaryArchetype,
    coreArchetype,
    scores,
    completedAt: new Date().toISOString(),
    answers
  };
}

// Get questions appropriate for a given core archetype
// (Currently returns all questions, but can be filtered in future)
export function getQuestionsForCoreArchetype(
  coreArchetype: CoreArchetypeId
): ExpandedQuizQuestion[] {
  return expandedQuizQuestions.filter(q => {
    // If question has core archetype restrictions, check them
    if (q.showForCoreArchetypes) {
      return q.showForCoreArchetypes.includes(coreArchetype);
    }
    // Otherwise, show to all
    return true;
  });
}

// localStorage helpers for expanded quiz results
const EXPANDED_QUIZ_STORAGE_KEY = 'stone_forgers_way_expanded_quiz_results';

export function saveExpandedQuizResult(result: ExpandedQuizResult): void {
  localStorage.setItem(EXPANDED_QUIZ_STORAGE_KEY, JSON.stringify(result));
}

export function getLatestExpandedQuizResult(): ExpandedQuizResult | null {
  const stored = localStorage.getItem(EXPANDED_QUIZ_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function clearExpandedQuizData(): void {
  localStorage.removeItem(EXPANDED_QUIZ_STORAGE_KEY);
}

// Combined result helper
export interface CombinedQuizResult {
  core: {
    archetype: CoreArchetypeId;
    completedAt: string;
  };
  expanded: {
    archetype: ExpandedArchetypeId;
    completedAt: string;
  };
}

export function getCombinedQuizResult(): CombinedQuizResult | null {
  const coreStored = localStorage.getItem('stone_forgers_way_quiz_results');
  const expandedStored = localStorage.getItem(EXPANDED_QUIZ_STORAGE_KEY);

  if (!coreStored || !expandedStored) return null;

  const coreResult = JSON.parse(coreStored);
  const expandedResult = JSON.parse(expandedStored);

  return {
    core: {
      archetype: coreResult.archetype,
      completedAt: coreResult.completedAt
    },
    expanded: {
      archetype: expandedResult.expandedArchetype,
      completedAt: expandedResult.completedAt
    }
  };
}
