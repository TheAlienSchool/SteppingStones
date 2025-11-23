export type ArchetypeType = 'carrier' | 'thrower' | 'conscious' | 'forger';

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      carrier: number;
      thrower: number;
      conscious: number;
      forger: number;
    };
  }[];
}

export interface QuizResult {
  archetype: ArchetypeType;
  scores: {
    carrier: number;
    thrower: number;
    conscious: number;
    forger: number;
  };
  completedAt: string;
  answers: number[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When someone criticizes your work, your first instinct is to:",
    options: [
      {
        text: "Feel the weight of their words settle into your body, carrying them for days",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "Defend yourself immediately or mentally list their flaws",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "Pause, breathe, and consider if there's truth worth examining",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "Thank them for the feedback and integrate what serves your growth",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  },
  {
    id: 2,
    question: "When you think about past mistakes, you tend to:",
    options: [
      {
        text: "Replay them endlessly, feeling their weight in your chest and shoulders",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "Blame others or circumstances for what went wrong",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "Acknowledge them as teachers and extract the lesson",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "See them as necessary steps in your becoming",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  },
  {
    id: 3,
    question: "When faced with a challenge that requires patience, you:",
    options: [
      {
        text: "Feel exhausted before you even begin, overwhelmed by the weight of waiting",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "Get frustrated and look for someone or something to blame for the delay",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "Recognize patience as active participation, not passive waiting",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "Trust the timing and use the space to prepare for what's coming",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "Your relationship with your own creative work is best described as:",
    options: [
      {
        text: "Burdened :: I create, but it feels heavy and I doubt its worth",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "Defensive :: I create, but I'm quick to dismiss critics or compare myself to others",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "Present :: I create with full attention, honoring the process",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "Integrated :: I create as an act of love, trusting what emerges",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  },
  {
    id: 5,
    question: "When you feel stuck or blocked, you typically:",
    options: [
      {
        text: "Carry the stuckness like a heavy backpack, unable to move forward",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "Lash out at external circumstances or people you think are blocking you",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "Sit with the blockage and ask what it's trying to teach you",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "Trust that the block is part of the process and continue forging anyway",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  },
  {
    id: 6,
    question: "Your body's relationship with stress feels like:",
    options: [
      {
        text: "Chronic tension in my back, shoulders, and neck :: I'm always carrying something",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "Sharp, reactive tension :: my body is always ready to defend or attack",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "I notice stress arising and use breath and presence to work with it",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "Stress moves through me without sticking :: I trust my capacity to metabolize it",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  },
  {
    id: 7,
    question: "When someone shares their success with you, your honest reaction is:",
    options: [
      {
        text: "Happy for them, but it makes me feel heavier about my own lack of progress",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "Jealous or dismissive :: I find reasons why their success doesn't count",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "Genuinely happy and curious about what they learned in the process",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "Celebratory :: their success expands the Field for all of us",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  },
  {
    id: 8,
    question: "Your relationship with trust is best described as:",
    options: [
      {
        text: "I want to trust, but I'm weighed down by past betrayals and disappointments",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "I don't trust easily :: people have to prove themselves first",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "I'm learning to trust the process, even when I can't see the outcome",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "Trust is my default :: it's the cheat code that allows everything to flow",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  },
  {
    id: 9,
    question: "When you look at your life's work so far, you feel:",
    options: [
      {
        text: "Exhausted by all the unfinished projects and unrealized dreams I'm carrying",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "Frustrated that others don't recognize my efforts or that circumstances held me back",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "Grateful for the journey and present with what I'm creating now",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "Integrated :: every stone I've forged has led me exactly here",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  },
  {
    id: 10,
    question: "When you imagine your future self, you see someone who:",
    options: [
      {
        text: "Has finally put down all the weight I'm carrying now",
        scores: { carrier: 3, thrower: 0, conscious: 0, forger: 0 }
      },
      {
        text: "Has proven everyone wrong and shown them what I'm capable of",
        scores: { carrier: 0, thrower: 3, conscious: 0, forger: 0 }
      },
      {
        text: "Is fully present with each stone, forging with intention and care",
        scores: { carrier: 0, thrower: 0, conscious: 3, forger: 0 }
      },
      {
        text: "Embodies trust, creates with love, and walks the invisible bridge with grace",
        scores: { carrier: 0, thrower: 0, conscious: 0, forger: 3 }
      }
    ]
  }
];

export function calculateArchetype(answers: number[]): QuizResult {
  const scores = {
    carrier: 0,
    thrower: 0,
    conscious: 0,
    forger: 0
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = quizQuestions[questionIndex];
    const selectedOption = question.options[answerIndex];
    
    scores.carrier += selectedOption.scores.carrier;
    scores.thrower += selectedOption.scores.thrower;
    scores.conscious += selectedOption.scores.conscious;
    scores.forger += selectedOption.scores.forger;
  });

  // Determine primary archetype
  const archetypeEntries = Object.entries(scores) as [ArchetypeType, number][];
  const primaryArchetype = archetypeEntries.reduce((a, b) => 
    a[1] > b[1] ? a : b
  )[0];

  return {
    archetype: primaryArchetype,
    scores,
    completedAt: new Date().toISOString(),
    answers
  };
}

export function getArchetypeName(archetype: ArchetypeType): string {
  const names = {
    carrier: 'The Stone Carrier',
    thrower: 'The Stone Thrower',
    conscious: 'The Conscious Forger',
    forger: 'The Stone Forger'
  };
  return names[archetype];
}

export function getArchetypeDescription(archetype: ArchetypeType): string {
  const descriptions = {
    carrier: 'You are burdened by suspended stones swinging from your energy body. Exhausted, weighed down, unable to move forward with ease. The weight you carry is real, and it manifests in your body as chronic tension, backache, and fatigue.',
    thrower: 'You throw stones at external targets in rage and powerlessness. The stones ricochet back, creating the backache. Your energy is misdirected outward in defense and attack, keeping your sympathetic nervous system in chronic activation.',
    conscious: 'You are present with each stone, bringing full attention to the act of forging. You move with determination toward a dream, recognizing that patience is active participation. You are learning to trust the process.',
    forger: 'You are the integrated being who unites all archetypes :: acting with purpose while being with presence. Trust is your cheat code. You forge stones with love, walk the invisible bridge with grace, and know that the lineage continues through you.'
  };
  return descriptions[archetype];
}

export function getArchetypePractices(archetype: ArchetypeType): string[] {
  const practices = {
    carrier: [
      'Feel the Stones :: Place your hands on your lower back. Breathe into the weight. Ask: "What am I carrying that is not mine to carry?"',
      'The Release Breath :: Exhale fully, imagining each suspended stone dissolving into light. You are not abandoning responsibility—you are releasing what was never yours.',
      'The Gratitude Practice :: Each evening, name three stones you successfully put down today.'
    ],
    thrower: [
      'The Silent Check :: Before responding in anger, take three breaths. Ask: "Is this stone mine to throw, or am I defending against a threat that isn\'t real?"',
      'The Redirect :: When you feel the urge to throw, place your hands on your heart. Redirect the energy inward with compassion.',
      'The Apology Practice :: When you recognize you\'ve thrown a stone, apologize quickly and without defense. This breaks the pattern.'
    ],
    conscious: [
      'The One Stone :: Each morning, choose one stone to forge today. Not ten. One. Bring your full presence to it.',
      'The Trust Breath :: When doubt arises, breathe and repeat: "The invisible bridge is always here. I choose to step."',
      'The Witness Practice :: At the end of each day, witness yourself without judgment. What did you forge? What did you learn?'
    ],
    forger: [
      'The Lineage Practice :: Honor those who forged stones before you. Speak their names. Recognize that you are the continuation.',
      'The Overflow Practice :: Your work is not just for you. Let it overflow. Release the wealth. Share the insights.',
      'The Integration Practice :: You are all four archetypes. When Carrier or Thrower arise, welcome them with compassion. They are part of your wholeness.'
    ]
  };
  return practices[archetype];
}

// localStorage helpers
const QUIZ_STORAGE_KEY = 'stone_forgers_way_quiz_results';
const QUIZ_HISTORY_KEY = 'stone_forgers_way_quiz_history';

export function saveQuizResult(result: QuizResult): void {
  // Save current result
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(result));
  
  // Add to history
  const history = getQuizHistory();
  history.push(result);
  localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(history));
}

export function getLatestQuizResult(): QuizResult | null {
  const stored = localStorage.getItem(QUIZ_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

export function getQuizHistory(): QuizResult[] {
  const stored = localStorage.getItem(QUIZ_HISTORY_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function clearQuizData(): void {
  localStorage.removeItem(QUIZ_STORAGE_KEY);
  localStorage.removeItem(QUIZ_HISTORY_KEY);
}
