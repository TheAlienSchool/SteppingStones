// The Stone Forger's Way :: Consolidated Practices System
// Integrating Core + Expanded Archetypes

import type { CoreArchetypeId } from './archetypeQuiz';
import type { ExpandedArchetypeId } from './expandedArchetypes';

export interface Practice {
  id: string;
  name: string;
  description: string;
  instructions: string;
  coreArchetypeTags: CoreArchetypeId[];
  expandedArchetypeTags: ExpandedArchetypeId[];
  duration?: string;
  frequency?: string;
  category: 'breath' | 'embodied' | 'contemplative' | 'active' | 'ritual';
}

export const practices: Practice[] = [
  // CORE ARCHETYPE PRACTICES (from existing system)
  {
    id: 'feel-the-stones',
    name: 'Feel the Stones',
    description: 'A somatic practice for acknowledging the weight you carry.',
    instructions: 'Place your hands on your lower back. Breathe into the weight. Ask: "What am I carrying that is not mine to carry?" Listen for the answer in your body, not your mind.',
    coreArchetypeTags: ['carrier'],
    expandedArchetypeTags: ['stone-keeper'],
    duration: '5-10 minutes',
    frequency: 'Daily',
    category: 'embodied'
  },
  {
    id: 'release-breath',
    name: 'The Release Breath',
    description: 'Breathwork for dissolving suspended stones.',
    instructions: 'Exhale fully, imagining each suspended stone dissolving into light. You are not abandoning responsibility—you are releasing what was never yours. Repeat for 10 breaths.',
    coreArchetypeTags: ['carrier'],
    expandedArchetypeTags: ['stone-keeper'],
    duration: '3-5 minutes',
    frequency: 'As needed',
    category: 'breath'
  },
  {
    id: 'gratitude-practice',
    name: 'The Gratitude Practice',
    description: 'Evening ritual for celebrating release.',
    instructions: 'Each evening, name three stones you successfully put down today. Speak them aloud or write them down. Celebrate the act of letting go.',
    coreArchetypeTags: ['carrier', 'conscious'],
    expandedArchetypeTags: ['stone-keeper'],
    duration: '2-3 minutes',
    frequency: 'Evening',
    category: 'contemplative'
  },
  {
    id: 'silent-check',
    name: 'The Silent Check',
    description: 'Pause before reactive throwing.',
    instructions: 'Before responding in anger, take three breaths. Ask: "Is this stone mine to throw, or am I defending against a threat that isn\'t real?" Let the answer emerge without forcing it.',
    coreArchetypeTags: ['thrower'],
    expandedArchetypeTags: ['stone-breaker'],
    duration: '1-2 minutes',
    frequency: 'As needed',
    category: 'breath'
  },
  {
    id: 'redirect',
    name: 'The Redirect',
    description: 'Channeling throwing energy inward with compassion.',
    instructions: 'When you feel the urge to throw, place your hands on your heart. Redirect the energy inward with compassion. Breathe it into your chest. Feel it transform from attack to protection.',
    coreArchetypeTags: ['thrower'],
    expandedArchetypeTags: ['stone-breaker', 'stone-caller'],
    duration: '3-5 minutes',
    frequency: 'As needed',
    category: 'embodied'
  },
  {
    id: 'apology-practice',
    name: 'The Apology Practice',
    description: 'Breaking the throwing pattern through accountability.',
    instructions: 'When you recognize you\'ve thrown a stone, apologize quickly and without defense. This breaks the pattern. Say: "I threw that stone. I see it. I\'m sorry." No justification. Just truth.',
    coreArchetypeTags: ['thrower'],
    expandedArchetypeTags: ['stone-breaker'],
    duration: 'As long as needed',
    frequency: 'As needed',
    category: 'active'
  },
  {
    id: 'one-stone',
    name: 'The One Stone',
    description: 'Daily practice of focused forging.',
    instructions: 'Each morning, choose one stone to forge today. Not ten. One. Bring your full presence to it. Release attachment to all others for this day.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['jade-hunter', 'stone-witness'],
    duration: '1 minute (choosing) + all day (forging)',
    frequency: 'Morning',
    category: 'contemplative'
  },
  {
    id: 'trust-breath',
    name: 'The Trust Breath',
    description: 'Anchoring in the invisible bridge.',
    instructions: 'When doubt arises, breathe and repeat: "The invisible bridge is always here. I choose to step." Feel the ground beneath you. Feel the support.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-witness', 'jade-hunter'],
    duration: '2-3 minutes',
    frequency: 'As needed',
    category: 'breath'
  },
  {
    id: 'witness-practice',
    name: 'The Witness Practice',
    description: 'Evening reflection without judgment.',
    instructions: 'At the end of each day, witness yourself without judgment. What did you forge? What did you learn? No critique. Just observation. Write it down if it helps.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-witness'],
    duration: '5-10 minutes',
    frequency: 'Evening',
    category: 'contemplative'
  },
  {
    id: 'lineage-practice',
    name: 'The Lineage Practice',
    description: 'Honoring those who forged before you.',
    instructions: 'Honor those who forged stones before you. Speak their names. Recognize that you are the continuation. Say aloud: "I stand on stones forged by [names]. I honor their work. I continue the lineage."',
    coreArchetypeTags: ['forger'],
    expandedArchetypeTags: ['stone-keeper', 'stone-witness'],
    duration: '3-5 minutes',
    frequency: 'Weekly',
    category: 'ritual'
  },
  {
    id: 'overflow-practice',
    name: 'The Overflow Practice',
    description: 'Releasing the wealth, sharing the insights.',
    instructions: 'Your work is not just for you. Let it overflow. Choose one insight, one creation, one gift from this week. Give it away. No transaction. Pure overflow.',
    coreArchetypeTags: ['forger'],
    expandedArchetypeTags: ['stone-caller', 'walker-of-the-way'],
    duration: 'Varies',
    frequency: 'Weekly',
    category: 'active'
  },
  {
    id: 'integration-practice',
    name: 'The Integration Practice',
    description: 'Welcoming all parts of yourself.',
    instructions: 'You are all four archetypes. When Carrier or Thrower arise, welcome them with compassion. Say: "I see you. You are part of my wholeness. What do you need?" Listen.',
    coreArchetypeTags: ['forger', 'conscious'],
    expandedArchetypeTags: ['stone-witness', 'jade-hunter'],
    duration: '10-15 minutes',
    frequency: 'As needed',
    category: 'contemplative'
  },

  // EXPANSION KIT v1.2 PRACTICES (The Six Core Practices)
  {
    id: 'code-audit',
    name: 'The Code Audit',
    description: 'Examining the belief structure beneath a stone.',
    instructions: 'Before picking up any stone (obligation, belief, project), pause and examine its underlying structure. Ask: "What belief system created this stone? Is this code mine to run, or am I executing someone else\'s program?" Write down the belief beneath the burden.',
    coreArchetypeTags: ['conscious'],
    expandedArchetypeTags: ['jade-hunter'],
    duration: '5-10 minutes',
    frequency: 'Before taking on new obligations',
    category: 'contemplative'
  },
  {
    id: 'inner-compass-check',
    name: 'The Inner Compass Check',
    description: 'Trusting the knowing in your bones over external maps.',
    instructions: 'Before making a decision, place your hand on your heart. Ask: "Does this align with the Way I sense?" Wait for the resonance—not thought, but knowing. The compass lives in your body, not your mind. Trust the pull toward the Peak, even when you can\'t see the full path.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['walker-of-the-way'],
    duration: '2-5 minutes',
    frequency: 'Before major decisions',
    category: 'embodied'
  },
  {
    id: 'lineage-check',
    name: 'The Lineage Check',
    description: 'Discerning ancestral stones from personal ones.',
    instructions: 'When you feel burdened by a "sacred obligation," pause and ask: "Is this stone mine, or does it belong to the ancestors? Is this stone for me to carry, or for me to honor and release?" Speak aloud: "I honor what you carried. I release what is not mine to hold."',
    coreArchetypeTags: ['carrier'],
    expandedArchetypeTags: ['stone-keeper'],
    duration: '5-10 minutes',
    frequency: 'When feeling ancestral weight',
    category: 'ritual'
  },
  {
    id: 'impact-strike',
    name: 'The Impact Strike',
    description: 'Channeling frustration into focused transformation.',
    instructions: 'When frustration builds, resist the urge to explode outward. Instead, channel it into one focused action. Write the pattern you want to break on paper. Tear the paper with intention. Breathe. Ask: "What small, precise change can I make right now instead of burning it all down?"',
    coreArchetypeTags: ['thrower', 'conscious'],
    expandedArchetypeTags: ['stone-breaker'],
    duration: '10-15 minutes',
    frequency: 'When feeling destructive energy',
    category: 'active'
  },
  {
    id: 'silence-before-speech',
    name: 'The Silence Before Speech',
    description: 'Pausing to verify alignment before summoning.',
    instructions: 'Before making any commitment, promise, or declaration of intent, pause for three breaths. Feel into your body. Ask: "Is this aligned? Do I have the energy to forge this stone?" Only speak when you feel resonance. Practice the power of "Let me think about that and get back to you."',
    coreArchetypeTags: ['conscious'],
    expandedArchetypeTags: ['stone-caller'],
    duration: '1-2 minutes',
    frequency: 'Before making commitments',
    category: 'breath'
  },
  {
    id: 'anchored-gaze',
    name: 'The Anchored Gaze',
    description: 'Witnessing without interfering.',
    instructions: 'Choose one challenging situation in your life (a conflict, a problem, an emotion). Set a timer for 5 minutes. Simply observe it without trying to fix, solve, or change it. Notice the urge to act. Breathe through it. Practice being the immovable center while the storm passes around you.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-witness'],
    duration: '5-10 minutes',
    frequency: 'Daily',
    category: 'contemplative'
  },

  // EXPANSION KIT v1.2 PROGRESSION PATH TOOLS
  {
    id: 'system-override',
    name: 'The System Override',
    description: 'Rewriting limiting beliefs (Jade Hunter progression tool).',
    instructions: 'Journaling prompt: Identify one limiting belief (a "bug in your code"). Write the current version, then rewrite it as if you were patching the system. Example: "I must prove my worth" becomes "My worth is inherent; I create from overflow." Write both versions. Feel the shift.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['jade-hunter'],
    duration: '15-20 minutes',
    frequency: 'Weekly',
    category: 'contemplative'
  },
  {
    id: 'map-youre-making',
    name: 'The Map You\'re Making',
    description: 'Documenting your path for the lineage (Walker progression tool).',
    instructions: 'Document your path. Not for ego, but for those who will walk after you. Each week, write one insight from your journey. One stone you forged. One decision made by inner compass. This becomes the map—not for you, but for the lineage you\'re creating.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['walker-of-the-way'],
    duration: '10-15 minutes',
    frequency: 'Weekly',
    category: 'contemplative'
  },
  {
    id: 'legacy-filter',
    name: 'The Legacy Filter',
    description: 'Ritual for returning ancestral stones (Stone Keeper progression tool).',
    instructions: 'Ritual practice: Create a physical or digital "archive" of ancestral stones (family expectations, cultural traditions, inherited beliefs). For each one, ask: "Does this serve my becoming, or am I carrying it out of guilt?" Keep what serves. Release the rest with gratitude.',
    coreArchetypeTags: ['carrier', 'conscious'],
    expandedArchetypeTags: ['stone-keeper'],
    duration: '30-60 minutes',
    frequency: 'Monthly or as needed',
    category: 'ritual'
  },
  {
    id: 'chisel-strike',
    name: 'The Chisel Strike',
    description: 'Practice of precision over explosion (Stone Breaker progression tool).',
    instructions: 'Practice of precision: Instead of demolishing entire systems, identify the smallest change that would shift the pattern. One conversation. One boundary. One "no." Practice the art of the surgical strike rather than the bomb.',
    coreArchetypeTags: ['thrower', 'conscious'],
    expandedArchetypeTags: ['stone-breaker'],
    duration: '10-20 minutes',
    frequency: 'When feeling urge to destroy',
    category: 'active'
  },
  {
    id: 'true-name',
    name: 'The True Name',
    description: 'Practice of precision language (Stone Caller progression tool).',
    instructions: 'Practice of precision language: Each week, choose one desire or project. Write down what you *think* you want. Then ask: "What do I *actually* want beneath this?" Keep refining until you arrive at the True Name—the clearest, most honest expression of your desire. Only then, speak it aloud.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-caller'],
    duration: '20-30 minutes',
    frequency: 'Weekly',
    category: 'contemplative'
  },
  {
    id: 'holding-space',
    name: 'The Holding Space',
    description: 'Active listening practice (Stone Witness progression tool).',
    instructions: 'Active listening practice: When someone shares their struggle, resist the urge to solve, advise, or relate. Simply hold space. Reflect back what you hear without adding your story. "It sounds like you\'re feeling..." This is presence in action.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-witness'],
    duration: 'As long as needed',
    frequency: 'In conversation',
    category: 'active'
  },

  // ADDITIONAL SUPPORTIVE PRACTICES
  {
    id: 'active-patience',
    name: 'Active Patience',
    description: 'Participating in the pause.',
    instructions: 'You\'re waiting for something to manifest. Don\'t force it, but don\'t abandon it. Tend it. Water it. Give it light. Trust the rate of materialization while actively supporting the process.',
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-witness', 'stone-keeper'],
    duration: 'Ongoing',
    frequency: 'Daily awareness',
    category: 'contemplative'
  },
  {
    id: '1937-vector',
    name: 'The 1937 Vector',
    description: 'A dynamic micro-practice connecting your current friction to ancestral support.',
    instructions: 'Stand flat-footed on the Dojo floor, eyes closed. Somaticize the structural load currently felt in your chest or shoulders. Visualize this load traveling straight down your spine, passing through your feet, and anchoring into a solid, glowing stepping stone laid precisely in 1937. Speak aloud: "I do not stand in a void. The vector laid in 1937 holds the weight of my step in 2026." Feel the vagal tone release as the ancestral coordinate absorbs the somatic friction.',
    coreArchetypeTags: ['forger'],
    expandedArchetypeTags: ['walker-of-the-way', 'stone-keeper'],
    duration: '3-5 minutes',
    frequency: 'When feeling creative fatigue',
    category: 'ritual'
  }
];

// Helper Functions
export function getPracticeById(id: string): Practice | undefined {
  return practices.find(p => p.id === id);
}

export function getPracticesByArchetype(
  archetypeId: CoreArchetypeId | ExpandedArchetypeId
): Practice[] {
  return practices.filter(practice => {
    const matchesCore = practice.coreArchetypeTags.includes(archetypeId as CoreArchetypeId);
    const matchesExpanded = practice.expandedArchetypeTags.includes(archetypeId as ExpandedArchetypeId);
    return matchesCore || matchesExpanded;
  });
}

export function getPracticesByCategory(category: Practice['category']): Practice[] {
  return practices.filter(p => p.category === category);
}

export function getAllPractices(): Practice[] {
  return practices;
}

export function getCorePracticesForExpandedArchetype(
  expandedArchetypeId: ExpandedArchetypeId
): Practice[] {
  // Returns the core practice + progression tool for each expanded archetype
  const coreIds: Record<ExpandedArchetypeId, string[]> = {
    'jade-hunter': ['code-audit', 'system-override'],
    'walker-of-the-way': ['inner-compass-check', 'map-youre-making'],
    'stone-keeper': ['lineage-check', 'legacy-filter'],
    'stone-breaker': ['impact-strike', 'chisel-strike'],
    'stone-caller': ['silence-before-speech', 'true-name'],
    'stone-witness': ['anchored-gaze', 'holding-space']
  };

  const ids = coreIds[expandedArchetypeId] || [];
  return ids
    .map(id => getPracticeById(id))
    .filter((p): p is Practice => p !== undefined);
}
