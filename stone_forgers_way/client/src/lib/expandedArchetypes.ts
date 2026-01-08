// Expanded Archetypes :: The Six Frictional Reality States
// Part of The Stone Forger's Way Expansion Kit v1.2

export type ExpandedArchetypeId =
  | 'jade-hunter'
  | 'walker-of-the-way'
  | 'stone-keeper'
  | 'stone-breaker'
  | 'stone-caller'
  | 'stone-witness';

export type CoreArchetypeId = 'carrier' | 'thrower' | 'conscious' | 'forger';

export interface ExpandedArchetype {
  id: ExpandedArchetypeId;
  name: string;
  subtitle: string;
  simpleDefinition: string;
  experience: string;
  insight: string;
  gift: string;
  shadow: string;
  visualSignature: string;
  imagePath: string;
  corePractice: {
    name: string;
    description: string;
  };
  progressionPath: {
    title: string;
    goal: string;
    tool: {
      name: string;
      description: string;
    };
    glossaryFocus: string[];
  };
  relatedCoreArchetypes: CoreArchetypeId[];
}

export const expandedArchetypes: Record<ExpandedArchetypeId, ExpandedArchetype> = {
  'jade-hunter': {
    id: 'jade-hunter',
    name: 'The Jade Hunter',
    subtitle: 'The Seeker of Truth',
    simpleDefinition: 'The one who sees the code beneath the reality.',
    experience: 'You feel a constant dissonance between what is shown and what is true. You are often the "hacker" of systems, finding shortcuts or hidden paths. You carry the burden of knowing too much but not always knowing how to act on it.',
    insight: 'Your gift is **Discernment**. You don\'t just carry stones; you analyze their composition. You are the system architect of the Stone Forger\'s world.',
    gift: 'Discernment',
    shadow: 'Analysis paralysis :: knowing the code but refusing to execute. Becoming so focused on what\'s broken that you forget to build what\'s possible.',
    visualSignature: 'A hooded, faceless silhouette examining a floating jade-green cubic stone. The figure is a vessel of focus, obscured in shadow, revealing only the digital wireframe projection of the stone.',
    imagePath: '/images/archetypes/jade_hunter_v5.png',
    corePractice: {
      name: 'The Code Audit',
      description: 'Before picking up any stone (obligation, belief, project), pause and examine its underlying structure. Ask: "What belief system created this stone? Is this code mine to run, or am I executing someone else\'s program?" Write down the belief beneath the burden.'
    },
    progressionPath: {
      title: 'Path of the Code',
      goal: 'Move from analyzing to rewriting.',
      tool: {
        name: 'The System Override',
        description: 'Journaling prompt: Identify one limiting belief (a "bug in your code"). Write the current version, then rewrite it as if you were patching the system. Example: "I must prove my worth" becomes "My worth is inherent; I create from overflow."'
      },
      glossaryFocus: ['Structure', 'Pattern', 'Algorithm', 'Discernment', 'Code Audit']
    },
    relatedCoreArchetypes: ['conscious', 'carrier']
  },

  'walker-of-the-way': {
    id: 'walker-of-the-way',
    name: 'Walker of The Way',
    subtitle: 'The Pathmaker of Ancestral Knowing',
    simpleDefinition: 'The one who walks with inner compass, forging paths for others to follow.',
    experience: 'You carry ancestral knowing that a Way exists—not taught, but endowed. You sense your steps before you take them. People walk alongside you because they feel the safety of your inner compass. You build trust through pathmaking, forging forward knowing the Peak is as accessible as the Sun\'s light from the forthcoming precipice. You are a co-creator with the nature of Life, strolling at the edge of possibility.',
    insight: 'Your gift is **Wayfinding**. You don\'t need the whole map—you trust the knowing that lives in your bones. You are often unseen in your time, memorialized only after your Way is walked.',
    gift: 'Wayfinding',
    shadow: 'Invisible burden :: walking the path alone while others benefit from what you\'ve forged. Becoming so focused on the horizon that you forget to tend your own needs. The loneliness of being seen only in retrospect.',
    visualSignature: 'A lone figure walking a path of materializing stones, each step solidifying beneath them. The horizon glows with possibility. They are faceless, timeless—a vessel for the Way itself.',
    imagePath: '/images/archetypes/walker_of_the_way_v4.png',
    corePractice: {
      name: 'The Inner Compass Check',
      description: 'Before making a decision, place your hand on your heart. Ask: "Does this align with the Way I sense?" Wait for the resonance—not thought, but knowing. The compass lives in your body, not your mind. Trust the pull toward the Peak, even when you can\'t see the full path.'
    },
    progressionPath: {
      title: 'Path of the Wayfinder',
      goal: 'Move from invisible pathmaking to recognized lineage.',
      tool: {
        name: 'The Map You\'re Making',
        description: 'Document your path. Not for ego, but for those who will walk after you. Each week, write one insight from your journey. One stone you forged. One decision made by inner compass. This becomes the map—not for you, but for the lineage you\'re creating.'
      },
      glossaryFocus: ['Wayfinding', 'Ancestral Knowing', 'Inner Compass', 'Pathmaking', 'Lineage']
    },
    relatedCoreArchetypes: ['conscious', 'forger']
  },

  'stone-keeper': {
    id: 'stone-keeper',
    name: 'The Stone Keeper',
    subtitle: 'The Guardian of Lineage',
    simpleDefinition: 'The one who preserves what must not be lost.',
    experience: 'You feel the weight of history, ancestry, and legacy. You carry stones not for yourself, but for those who came before and those who will come after. You struggle with releasing anything that feels "sacred" or "important."',
    insight: 'Your gift is **Stewardship**. You ensure the continuity of wisdom. You are the librarian of the Stone Forger\'s archives.',
    gift: 'Stewardship',
    shadow: 'Hoarding :: confusing preservation with possession. Holding so tightly to what was that you block what wants to become.',
    visualSignature: 'An ageless, faceless guardian standing in a stylized archive. They hold a glowing stone with reverence, their form wrapped in timeless, layered robes that suggest neither past nor future, but permanence.',
    imagePath: '/images/archetypes/stone_keeper_v5.png',
    corePractice: {
      name: 'The Lineage Check',
      description: 'When you feel burdened by a "sacred obligation," pause and ask: "Is this stone mine, or does it belong to the ancestors? Is this stone for me to carry, or for me to honor and release?" Speak aloud: "I honor what you carried. I release what is not mine to hold."'
    },
    progressionPath: {
      title: 'Path of the Archive',
      goal: 'Move from hoarding to curating.',
      tool: {
        name: 'The Legacy Filter',
        description: 'Ritual practice: Create a physical or digital "archive" of ancestral stones (family expectations, cultural traditions, inherited beliefs). For each one, ask: "Does this serve my becoming, or am I carrying it out of guilt?" Keep what serves. Release the rest with gratitude.'
      },
      glossaryFocus: ['Lineage', 'Stewardship', 'Memory', 'Archive', 'Ancestral Stones']
    },
    relatedCoreArchetypes: ['carrier']
  },

  'stone-breaker': {
    id: 'stone-breaker',
    name: 'The Stone Breaker',
    subtitle: 'The Disruptor of Patterns',
    simpleDefinition: 'The one who cracks open the calcified to reveal the light.',
    experience: 'You feel an intense energy to change, fix, or destroy what isn\'t working. You are often labeled as "intense" or "disruptive." You carry the burden of necessary destruction.',
    insight: 'Your gift is **Liberation**. You release the energy trapped in old forms. You are the catalyst of the Stone Forger\'s evolution.',
    gift: 'Liberation',
    shadow: 'Destruction for its own sake :: breaking what doesn\'t need to be broken. Becoming addicted to the intensity of impact rather than the clarity of transformation.',
    visualSignature: 'A dynamic, dark silhouette in a powerful martial stance, striking a stone block. The figure is pure kinetic energy, devoid of industrial gear or specific identity—a force of nature cracking the shell.',
    imagePath: '/images/archetypes/stone_breaker_v5.png',
    corePractice: {
      name: 'The Impact Strike',
      description: 'When frustration builds, resist the urge to explode outward. Instead, channel it into one focused action. Write the pattern you want to break on paper. Tear the paper with intention. Breathe. Ask: "What small, precise change can I make right now instead of burning it all down?"'
    },
    progressionPath: {
      title: 'Path of the Hammer',
      goal: 'Move from destruction to sculpting.',
      tool: {
        name: 'The Chisel Strike',
        description: 'Practice of precision: Instead of demolishing entire systems, identify the smallest change that would shift the pattern. One conversation. One boundary. One "no." Practice the art of the surgical strike rather than the bomb.'
      },
      glossaryFocus: ['Transformation', 'Release', 'Impact', 'Calcification', 'Liberation']
    },
    relatedCoreArchetypes: ['thrower']
  },

  'stone-caller': {
    id: 'stone-caller',
    name: 'The Stone Caller',
    subtitle: 'The Summoner of Reality',
    simpleDefinition: 'The one who speaks stones into existence.',
    experience: 'You realize that your words and thoughts instantly manifest as obligations or creations. You struggle with the weight of your own creative power. You often feel overwhelmed by the sheer volume of what you\'ve "called" in.',
    insight: 'Your gift is **Manifestation**. You understand the vibrational nature of stones. You are the bard/magician of the Stone Forger\'s world.',
    gift: 'Manifestation',
    shadow: 'Accidental summoning :: calling in chaos through unconscious words and scattered desires. Overwhelming yourself with promises you can\'t keep.',
    visualSignature: 'A creative silhouette standing with arms raised, summoning cubic stones from the ground. The figure is an active channel, their identity secondary to the act of creation itself.',
    imagePath: '/images/archetypes/stone_caller_v4.png',
    corePractice: {
      name: 'The Silence Before Speech',
      description: 'Before making any commitment, promise, or declaration of intent, pause for three breaths. Feel into your body. Ask: "Is this aligned? Do I have the energy to forge this stone?" Only speak when you feel resonance. Practice the power of "Let me think about that and get back to you."'
    },
    progressionPath: {
      title: 'Path of the Voice',
      goal: 'Move from accidental summoning to intentional casting.',
      tool: {
        name: 'The True Name',
        description: 'Practice of precision language: Each week, choose one desire or project. Write down what you *think* you want. Then ask: "What do I *actually* want beneath this?" Keep refining until you arrive at the True Name—the clearest, most honest expression of your desire. Only then, speak it aloud.'
      },
      glossaryFocus: ['Manifestation', 'Vibration', 'Word', 'Summoning', 'Resonance']
    },
    relatedCoreArchetypes: ['thrower', 'conscious']
  },

  'stone-witness': {
    id: 'stone-witness',
    name: 'The Stone Witness',
    subtitle: 'The Observer of Chaos',
    simpleDefinition: 'The one who sees without interfering.',
    experience: 'You feel a profound detachment that can be mistaken for apathy. You see the chaos of others\' stone-throwing and carrying but choose not to engage. You carry the burden of "doing nothing" while seeing everything.',
    insight: 'Your gift is **Presence**. You hold the frequency of calm that allows others to find their own way. You are the mirror of the Stone Forger\'s truth.',
    gift: 'Presence',
    shadow: 'Spiritual bypassing :: using "witness consciousness" as an excuse for inaction when engagement is needed. Confusing detachment with disconnection.',
    visualSignature: 'A grounded, faceless void standing perfectly still amidst a scene of motion. They are not investigating; they are *anchoring*. A pillar of observation in a chaotic world.',
    imagePath: '/images/archetypes/stone_witness_v5.png',
    corePractice: {
      name: 'The Anchored Gaze',
      description: 'Choose one challenging situation in your life (a conflict, a problem, an emotion). Set a timer for 5 minutes. Simply observe it without trying to fix, solve, or change it. Notice the urge to act. Breathe through it. Practice being the immovable center while the storm passes around you.'
    },
    progressionPath: {
      title: 'Path of the Mirror',
      goal: 'Move from detachment to compassionate presence.',
      tool: {
        name: 'The Holding Space',
        description: 'Active listening practice: When someone shares their struggle, resist the urge to solve, advise, or relate. Simply hold space. Reflect back what you hear without adding your story. "It sounds like you\'re feeling..." This is presence in action.'
      },
      glossaryFocus: ['Presence', 'Observation', 'Stillness', 'Anchoring', 'Witness Consciousness']
    },
    relatedCoreArchetypes: ['conscious', 'forger']
  }
};

// Helper functions
export function getExpandedArchetype(id: ExpandedArchetypeId): ExpandedArchetype {
  return expandedArchetypes[id];
}

export function getAllExpandedArchetypes(): ExpandedArchetype[] {
  return Object.values(expandedArchetypes);
}

export function getExpandedArchetypesByCore(coreId: CoreArchetypeId): ExpandedArchetype[] {
  return getAllExpandedArchetypes().filter(arch =>
    arch.relatedCoreArchetypes.includes(coreId)
  );
}

// Mapping logic for quiz results
export function getRecommendedExpandedArchetypes(
  coreArchetype: CoreArchetypeId,
  answers?: number[]
): ExpandedArchetypeId[] {
  // Returns suggested expanded archetypes based on core archetype
  // This will be enhanced with actual quiz logic in Phase 2
  const mappings: Record<CoreArchetypeId, ExpandedArchetypeId[]> = {
    carrier: ['stone-keeper', 'jade-hunter'],
    thrower: ['stone-breaker', 'stone-caller'],
    conscious: ['jade-hunter', 'stone-witness', 'walker-of-the-way'],
    forger: ['stone-witness', 'walker-of-the-way', 'jade-hunter']
  };

  return mappings[coreArchetype] || [];
}

export function getExpandedArchetypeName(id: ExpandedArchetypeId): string {
  return expandedArchetypes[id].name;
}

export function getExpandedArchetypeDescription(id: ExpandedArchetypeId): string {
  return expandedArchetypes[id].experience;
}
