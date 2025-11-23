import { getLatestQuizResult, type ArchetypeType } from './archetypeQuiz';

export interface Practice {
  id: string;
  name: string;
  archetype: ArchetypeType;
  shortDescription: string;
  duration: string;
  steps: string[];
  whenToUse: string;
}

export const practices: Practice[] = [
  {
    id: 'feel-the-stones',
    name: 'Feel the Stones',
    archetype: 'carrier',
    shortDescription: 'Acknowledge the weight you carry without trying to fix it.',
    duration: '3 minutes',
    steps: [
      'Stop moving. Pause wherever you are.',
      'Close your eyes. Bring attention to your body.',
      'Name the stones. What are you carrying?',
      'Feel the weight without judgment.',
      'Ask: Which stone can I set down right now?',
      'Imagine setting one stone gently beside you.',
      'Take a breath. Notice if you feel lighter.'
    ],
    whenToUse: 'When you feel overwhelmed, exhausted, or stuck.'
  },
  {
    id: 'the-shield-check',
    name: 'The Shield Check',
    archetype: 'thrower',
    shortDescription: 'Notice when your shield is up and choose whether to lower it.',
    duration: '3 minutes',
    steps: [
      'Notice the urge to throw a stone—to attack or criticize.',
      'Place your hand on your chest. Is your shield up?',
      'Name the threat. What feels unsafe?',
      'Notice where your body is tense.',
      'Ask: What would happen if I lowered the shield?',
      'Take a breath. Imagine the shield lowering.',
      'Choose a different response: a boundary, a question, silence.'
    ],
    whenToUse: 'When you feel the urge to attack, criticize, or lash out.'
  },
  {
    id: 'the-one-stone',
    name: 'The One Stone',
    archetype: 'conscious',
    shortDescription: 'Bring full presence to one task instead of scattering across many.',
    duration: '25 minutes',
    steps: [
      'Look at your task list.',
      'Choose one stone—not the most urgent, but the most meaningful.',
      'Clear the space. Close distractions.',
      'Take three breaths. Invite presence.',
      'Work with complete focus for 25 minutes.',
      'Notice the quality of working this way.',
      'Mark it complete. Acknowledge the work.'
    ],
    whenToUse: 'When you feel scattered or want to experience forging instead of carrying.'
  },
  {
    id: 'the-trust-breath',
    name: 'The Trust Breath',
    archetype: 'forger',
    shortDescription: 'Move through uncertainty by breathing in trust and exhaling doubt.',
    duration: '2 minutes',
    steps: [
      'Identify the uncertainty you\'re facing.',
      'Feel the fear without trying to fix it.',
      'Place your hand on your heart.',
      'Breathe in trust: "The stone is forming beneath my feet."',
      'Breathe out doubt: "I release the demand for proof."',
      'Repeat three times.',
      'Take the step. Act from trust, not certainty.'
    ],
    whenToUse: 'Before any decision that requires moving without complete information.'
  },
  {
    id: 'the-relational-pause',
    name: 'The Relational Pause',
    archetype: 'forger',
    shortDescription: 'Align with the natural rate of materialization instead of forcing.',
    duration: '3 minutes',
    steps: [
      'Notice the urge to rush or force an outcome.',
      'Ask: What is the actual rate of materialization here?',
      'Align with the trellis—time\'s structural force.',
      'Tend the vine—what can you do while you wait?',
      'Trust the pause as part of the process.'
    ],
    whenToUse: 'When you\'re impatient with someone else\'s pace or waiting for a result.'
  }
];

// Get today's practice based on archetype and date
export function getTodaysPractice(): Practice {
  const result = getLatestQuizResult();
  const archetype = result?.archetype || getRandomArchetype();

  // Get practices for this archetype
  const archetypePractices = practices.filter(p => p.archetype === archetype);

  // Use date to deterministically select practice (rotates daily)
  const today = new Date();
  const dayOfYear = getDayOfYear(today);
  const practiceIndex = dayOfYear % archetypePractices.length;

  return archetypePractices[practiceIndex] || practices[0];
}

// Get practice by ID
export function getPracticeById(id: string): Practice | undefined {
  return practices.find(p => p.id === id);
}

// Get all practices for an archetype
export function getPracticesForArchetype(archetype: ArchetypeType): Practice[] {
  return practices.filter(p => p.archetype === archetype);
}

// Helper: get day of year
function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Helper: get random archetype for users without quiz results
function getRandomArchetype(): ArchetypeType {
  const archetypes: ArchetypeType[] = ['carrier', 'thrower', 'conscious', 'forger'];
  const today = new Date();
  const dayOfYear = getDayOfYear(today);
  return archetypes[dayOfYear % archetypes.length];
}

// Get archetype display name
export function getArchetypeDisplayName(archetype: ArchetypeType): string {
  const names: Record<ArchetypeType, string> = {
    carrier: 'The Stone Carrier',
    thrower: 'The Stone Thrower',
    conscious: 'The Conscious Forger',
    forger: 'The Stone Forger'
  };
  return names[archetype];
}
