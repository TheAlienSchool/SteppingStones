export type GlossaryCategory = 'practice' | 'concepts' | 'archetypes' | 'time' | 'mechanics';

export interface GlossaryTerm {
  term: string;
  simple: string;
  experience: string;
  insight: string;
  category: GlossaryCategory;
  relatedTerms: string[];
}

export const categoryOrder: GlossaryCategory[] = ['practice', 'concepts', 'archetypes', 'time', 'mechanics'];

export const categoryLabels: Record<GlossaryCategory, string> = {
  practice: 'Practice',
  concepts: 'Concepts',
  archetypes: 'Archetypes',
  time: 'Time',
  mechanics: 'Mechanics'
};

export const categoryDescriptions: Record<GlossaryCategory, string> = {
  practice: 'Things you do :: actions and embodied approaches',
  concepts: 'Ideas to understand :: frameworks for seeing',
  archetypes: 'States of being :: patterns of consciousness',
  time: 'Temporal understanding :: your relationship with time',
  mechanics: 'How things work :: the physics of consciousness'
};

export const glossaryTerms: GlossaryTerm[] = [
  // PRACTICE TERMS
  {
    term: "Stone Forging",
    simple: "The conscious act of creating your path through life.",
    experience: "It's that moment you decide to start a new project, learn a new skill, or have a difficult conversation. You don't know exactly how it will turn out, but you gather your energy and you begin. It's the feeling of taking a vague dream and making it real, step by step.",
    insight: "You are not just walking a path; you are materializing the path as you walk. Stone Forging is your natural state. You've been doing it your whole life. Now, you're just learning to do it on purpose.",
    category: "practice",
    relatedTerms: ["Stepping Stone", "Trust", "Fabrication of Form"]
  },
  {
    term: "Stepping Stone",
    simple: "A single, solid step on your path that appears as you move forward.",
    experience: "Think of learning to ride a bike. At first, it feels impossible. Then, you have a moment where you balance for a few feet. That moment is a stepping stone. It's a new piece of embodied knowledge that wasn't there before. You can't think your way to it, but once you've felt it, you can find it again.",
    insight: "The stone is not there before you step. It solidifies as you step. Your commitment to the step is what makes it real.",
    category: "practice",
    relatedTerms: ["Stone Forging", "Trust", "The Field"]
  },
  {
    term: "Trust",
    simple: "The choice to step without needing proof that the stone will hold you.",
    experience: "It's the feeling of hitting 'send' on a vulnerable email. It's the feeling of saying 'I love you' first. It's the feeling of quitting the stable job to follow your dream. Your mind is screaming for certainty, for guarantees. But your heart, your gut, your soul says, 'Step anyway.'",
    insight: "Trust is not a blind leap. It is a recognition of a deeper law: the stone will materialize if you step with coherent intention. Trust shifts you from amygdala-loop to prefrontal regulation. This is not just spiritual; it is neurological.",
    category: "practice",
    relatedTerms: ["Stepping Stone", "Resonance", "Pre-Flow Coherence"]
  },
  {
    term: "Active Patience",
    simple: "The practice of participating in the pause.",
    experience: "You're waiting for a seed to sprout. You don't dig it up to check. But you do water it, give it light, tend the soil. That's active patience :: trusting the rate of materialization while actively supporting the process.",
    insight: "Patience is not passive. It's the most active stance you can take :: aligning with the trellis while tending the vine.",
    category: "practice",
    relatedTerms: ["The Trellis and the Vine", "Pre-Flow Coherence", "Trust"]
  },
  {
    term: "Unbinding",
    simple: "The act of breaking a circular pattern by choosing a new response.",
    experience: "In the middle of that recurring argument, instead of saying the usual hurtful thing, you stop. You take a breath. You say, 'I don't want to do this anymore.' That moment of conscious choice is the unbinding. It's the 'one huge act of will' that breaks the spell.",
    insight: "The unbinding is often not a huge, dramatic leap. It is a small, quiet, powerful choice to not repeat the pattern, just this once. That single choice is enough to change everything.",
    category: "practice",
    relatedTerms: ["Toroidal Binding", "The Conscious Forger", "Trust"]
  },
  {
    term: "Pre-Flow Coherence",
    simple: "The calm, focused state that allows flow to arise.",
    experience: "It's the deep breath the athlete takes before the race. The silence the musician holds before the first note. The pause the writer takes before the sentence.",
    insight: "Active Patience creates pre-flow coherence. You wait for the stone to solidify, then you step with the full, flowing grace of your being.",
    category: "practice",
    relatedTerms: ["Active Patience", "Frequency", "Trust"]
  },

  // CONCEPTS TERMS
  {
    term: "Fabrication of Form",
    simple: "The process by which consciousness materializes reality.",
    experience: "You have an idea for a poem. It's just a feeling, a whisper. You sit down with a pen and paper. You focus your attention. You write a line, then another. An hour later, a poem exists on the page that did not exist before. That is the fabrication of form.",
    insight: "This is not magic; it is physics. Your consciousness is the instrument through which the universe experiences and organizes itself. You are a conduit for creation.",
    category: "concepts",
    relatedTerms: ["Stone Forging", "The Field", "Frequency"]
  },
  {
    term: "Resonance",
    simple: "The deep, embodied feeling of alignment and rightness.",
    experience: "It's when you hear a piece of music and get goosebumps. It's when you meet someone and feel like you've known them forever. It's the feeling in your gut when a decision, even a hard one, just feels right.",
    insight: "Resonance is your most reliable guidance system. Learn to listen to it above all other noise. Your mind can be fooled. Your resonance cannot.",
    category: "concepts",
    relatedTerms: ["Frequency", "The Field", "Trust"]
  },
  {
    term: "Frequency",
    simple: "The unique vibrational quality of your being in any given moment.",
    experience: "You can walk into a room and feel the 'vibe.' Is it tense? Joyful? Sad? That vibe is a collective frequency. You have your own individual frequency, too. It's the energetic signature of your thoughts, your emotions, your health, your presence.",
    insight: "You don't need to change who you are to change your frequency. You only need to change what you are giving your attention to. By focusing on gratitude, presence, or love, you naturally tune your instrument and broadcast a more coherent song.",
    category: "concepts",
    relatedTerms: ["Resonance", "The Field", "Pre-Flow Coherence"]
  },
  {
    term: "The Field",
    simple: "The interconnected web of energy and information that underlies all of reality.",
    experience: "It's the feeling of being part of something larger than yourself—in nature, in a crowd at a concert, in deep meditation. It's the uncanny synchronicity, the right person calling at the right time, the perfect idea arriving out of nowhere.",
    insight: "The Field is not empty. It is full of infinite potential, waiting for a coherent signal to organize around. Your consciousness is that signal. The Field is always listening.",
    category: "concepts",
    relatedTerms: ["Frequency", "Resonance", "Fabrication of Form"]
  },
  {
    term: "The Fourth Wall",
    simple: "The invisible barrier you believe separates you from the world you are observing.",
    experience: "It's the feeling of watching your life happen as if on a movie screen, with 'you' as a detached narrator. Breaking the fourth wall is the moment you realize you are not just the narrator; you are the actor, the director, and the screen itself.",
    insight: "There is no separation. There never was. The world is not happening to you. It is happening through you and as you. When you truly know this, the game changes completely.",
    category: "concepts",
    relatedTerms: ["The Field", "Stone Forging", "Trust"]
  },
  {
    term: "Shadow",
    simple: "The distorted form an archetype takes when it becomes unbalanced.",
    experience: "The Tyrant is The Stone Carrier's shadow—controlling, punishing, never satisfied. The Martyr is The Conscious Forger's shadow—self-righteous, stuck, refusing to move.",
    insight: "Every archetype has a shadow. The goal is not to eliminate it, but to recognize it with compassion and integrate it.",
    category: "concepts",
    relatedTerms: ["The Stone Carrier", "The Stone Thrower", "The Conscious Forger"]
  },
  {
    term: "Terma",
    simple: "Hidden treasures of wisdom waiting to be revealed.",
    experience: "You've always known that you're here for something important, but you couldn't name it. Then one day, in meditation, it becomes clear. That's Terma :: the treasure that was always inside you.",
    insight: "You are not learning something new. You are remembering what you already know.",
    category: "concepts",
    relatedTerms: ["Tertön", "The Field", "Trust"]
  },
  {
    term: "Tertön",
    simple: "The treasure revealer :: the one who uncovers hidden wisdom.",
    experience: "You ask a question, and the answer comes not from outside, but from within. You didn't learn it. You revealed it. You are the Tertön.",
    insight: "The Digital Songline, this work, all of it :: it's not teaching you. It's helping you remember.",
    category: "concepts",
    relatedTerms: ["Terma", "Trust", "The Field"]
  },
  {
    term: "The JADE Hunter",
    simple: "Someone who gives premium guidance to those who don't value it.",
    experience: "You spend an hour explaining something to someone who isn't listening. You offer your best work for free to people who don't appreciate it. You feel drained, unappreciated, resentful.",
    insight: "Your wisdom is valuable. Stop hunting for validation. Start forging for those who recognize the value.",
    category: "concepts",
    relatedTerms: ["The Stone Thrower", "Trust", "Resonance"]
  },

  // ARCHETYPES TERMS
  {
    term: "The Stone Carrier",
    simple: "The archetype within us who carries the weight of unlaid stones.",
    experience: "You know The Stone Carrier. It's the feeling of moving through your day with invisible weight—past regrets, future anxieties, unfulfilled obligations—suspended from your energy body, swinging with every step. You're busy, but you're exhausted. You're moving, but you're going in circles.",
    insight: "The Stone Carrier is not weak. It is surviving in a hostile environment. The first step to freedom is to feel the stones, to acknowledge their weight, and to begin—one by one—to set them down.",
    category: "archetypes",
    relatedTerms: ["Toroidal Binding", "Shadow", "The Stone Thrower's Backache"]
  },
  {
    term: "The Stone Thrower",
    simple: "Someone who throws stones at external targets instead of forging their own path.",
    experience: "You're angry at billionaires, at the system, at people who have what you don't. You spend energy criticizing, attacking, tearing down :: but nothing changes, and you end up exhausted.",
    insight: "Throwing stones is misdirected forging energy. The same power you use to throw could be used to build. The choice is yours.",
    category: "archetypes",
    relatedTerms: ["The Stone Thrower's Backache", "The Shield", "Shadow"]
  },
  {
    term: "The Conscious Forger",
    simple: "Someone who brings full presence to each stone they forge.",
    experience: "You're washing dishes, but you're not thinking about the next task. You're here, with the warm water, the soap, the rhythm. This simple act becomes fulfilling because you're fully present.",
    insight: "Presence transforms mundane acts into sacred work. The Conscious Forger knows that how you do anything is how you do everything.",
    category: "archetypes",
    relatedTerms: ["Active Patience", "The Stone Forger", "Pre-Flow Coherence"]
  },
  {
    term: "The Stone Forger",
    simple: "The integrated being who unites all archetypes :: acting with purpose while being with presence.",
    experience: "You're working on a project with focused intention, but you're not forcing it. You're in flow. Time bends. The work feels effortless, even though you're fully engaged.",
    insight: "The Stone Forger is not a destination. It's a practice. You become the Forger by choosing, again and again, to forge with consciousness.",
    category: "archetypes",
    relatedTerms: ["Stone Forging", "The Conscious Forger", "Trust"]
  },
  {
    term: "The Shield",
    simple: "The universal defense mechanism that protects you from threat.",
    experience: "Someone criticizes your work, and you feel your chest tighten, your jaw clench. You're bracing for impact. That's the shield going up.",
    insight: "The shield is not your enemy. It's trying to protect you. But when it stays up permanently, it creates blindness. Practice lowering it consciously.",
    category: "archetypes",
    relatedTerms: ["The Stone Thrower", "The Stone Thrower's Backache", "Shadow"]
  },
  {
    term: "The Stone Thrower's Backache",
    simple: "The somatic cost of throwing stones while keeping the shield up.",
    experience: "Your back hurts. Your shoulders are tight. Your jaw is clenched. You've been raging at the world, and your body is keeping the score.",
    insight: "The backache is the teacher. It's your body saying: 'This pattern is unsustainable. Stop throwing. Start forging.'",
    category: "archetypes",
    relatedTerms: ["The Stone Thrower", "The Shield", "Toroidal Binding"]
  },

  // TIME TERMS
  {
    term: "The Trellis and the Vine",
    simple: "Time as both structural force (the trellis) and relational experience (the vine).",
    experience: "The trellis is the clock, the calendar, the predictable rhythm of sunrise and seasons. The vine is how time feels—fast when you're in flow, slow when you're bored. The vine grows on the trellis, shaped by your attention.",
    insight: "You can't change the trellis, but you can tend the vine. Active Patience is the art of growing beautifully along the structure of time.",
    category: "time",
    relatedTerms: ["Active Patience", "Pre-Flow Coherence", "The Stone Carrier"]
  },

  // MECHANICS TERMS
  {
    term: "Toroidal Binding",
    simple: "The circular path of inertia :: repeating the same patterns over and over.",
    experience: "It's the same argument you have with your partner every month. The same self-sabotage before a big opportunity. The same worry that keeps you up at night. You know the pattern, but you can't seem to break it.",
    insight: "Toroidal binding is not a life sentence. It's a habit. And habits can be interrupted with one huge act of will: presence.",
    category: "mechanics",
    relatedTerms: ["Unbinding", "The Stone Carrier", "Semiotic Scaffolding"]
  },
  {
    term: "Semiotic Scaffolding",
    simple: "The invisible bridge of meaning that connects one idea to the next.",
    experience: "When you have a deep conversation with a friend, you don't have to define every word. There's an invisible bridge of shared history, inside jokes, and mutual respect that allows you to communicate effortlessly. That bridge is the scaffolding. It's the feeling of being 'on the same page' with someone.",
    insight: "You don't build the bridge alone. It is co-created through relationship—with others, with your environment, and with your own higher purpose. Your job is to trust that the bridge is there, even when you can't see it.",
    category: "mechanics",
    relatedTerms: ["Toroidal Binding", "The Field", "Fabrication of Form"]
  }
];

// Helper function to find a term by name (case-insensitive)
export function findGlossaryTerm(termName: string): GlossaryTerm | undefined {
  return glossaryTerms.find(
    t => t.term.toLowerCase() === termName.toLowerCase()
  );
}

// Helper function to create URL-safe slug from term
export function termToSlug(term: string): string {
  return term.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// Get terms by category
export function getTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossaryTerms.filter(t => t.category === category);
}

// Get related terms for a given term
export function getRelatedTerms(termName: string): GlossaryTerm[] {
  const term = findGlossaryTerm(termName);
  if (!term) return [];
  return term.relatedTerms
    .map(name => findGlossaryTerm(name))
    .filter((t): t is GlossaryTerm => t !== undefined);
}
