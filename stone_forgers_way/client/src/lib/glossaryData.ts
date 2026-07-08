import type { CoreArchetypeId } from './archetypeQuiz';
import type { ExpandedArchetypeId } from './expandedArchetypes';

export type GlossaryCategory = 'practice' | 'concepts' | 'archetypes' | 'time' | 'mechanics' | 'science';

export interface GlossaryTerm {
  term: string;
  simple: string;
  experience: string;
  insight: string;
  category: GlossaryCategory;
  relatedTerms: string[];
  // Expansion Kit v1.2: Archetype tagging
  coreArchetypeTags?: CoreArchetypeId[];
  expandedArchetypeTags?: ExpandedArchetypeId[];
}

export const categoryOrder: GlossaryCategory[] = ['practice', 'concepts', 'archetypes', 'time', 'mechanics', 'science'];

export const categoryLabels: Record<GlossaryCategory, string> = {
  practice: 'Practice',
  concepts: 'Concepts',
  archetypes: 'Archetypes',
  time: 'Time',
  mechanics: 'Mechanics',
  science: 'Science'
};

export const categoryDescriptions: Record<GlossaryCategory, string> = {
  practice: 'Things you do :: actions and embodied approaches',
  concepts: 'Ideas to understand :: frameworks for seeing',
  archetypes: 'States of being :: patterns of consciousness',
  time: 'Temporal understanding :: your relationship with time',
  mechanics: 'How things work :: the physics of consciousness',
  science: 'Research validation :: where wisdom meets measurement'
};

export const glossaryTerms: GlossaryTerm[] = [
  // PRACTICE TERMS
  {
    term: "Stone Forging",
    simple: "The conscious act of creating your path through life.",
    experience: "It's that moment you decide to start a new project, learn a new skill, or have a difficult conversation. Though the final form remains hidden at the start, you gather your energy and begin. It is the sensory realization of a vague dream made concrete, step by step.",
    insight: "You materialize the path with every step you take. Stone Forging represents your natural state of being, active throughout your life. Now, you learn to direct this force with conscious intent.",
    category: "practice",
    relatedTerms: ["Stepping Stone", "Trust", "Fabrication of Form"]
  },
  {
    term: "Stepping Stone",
    simple: "A single, solid step on your path that appears as you move forward.",
    experience: "Recall learning to ride a bicycle. An initially challenging balance point suddenly stabilizes. That moment is a stepping stone :: a fresh unit of embodied wisdom newly anchored in your system. This direct physical feeling transcends intellectual logic; once felt, you recall and repeat the frequency at will.",
    insight: "The stone solidifies as you land. Your commitment to the step materializes the path beneath your feet.",
    category: "practice",
    relatedTerms: ["Stone Forging", "Trust", "The Field"]
  },
  {
    term: "Trust",
    simple: "The choice to step without needing proof that the stone will hold you.",
    experience: "It's the sensation of sending a vulnerable email, saying 'I love you' first, or leaving a familiar role to walk your true path. While the mind seeks absolute guarantees, the heart, gut, and soul call you forward: 'Step anyway.'",
    insight: "Trust represents a conscious alignment with a deeper law: the stone materializes when you step with coherent intention. Trust shifts neural activity from amygdala loops to prefrontal regulation, demonstrating both spiritual wisdom and neurological logic.",
    category: "practice",
    relatedTerms: ["Stepping Stone", "Resonance", "Pre-Flow Coherence"]
  },
  {
    term: "Active Patience",
    simple: "The practice of participating in the pause.",
    experience: "You wait for a seed to sprout. Tending the soil, offering water, and providing sunlight replaces the urge to disrupt its growth. This is active patience :: supporting the process while allowing the natural rate of materialization to unfold.",
    insight: "Patience is highly dynamic—the most active stance available :: aligning with the trellis while tending the vine.",
    category: "practice",
    relatedTerms: ["The Trellis and the Vine", "Pre-Flow Coherence", "Trust"]
  },
  {
    term: "Unbinding",
    simple: "The act of breaking a circular pattern by choosing a new response.",
    experience: "During a recurring argument, you release the usual defensive response. You pause, take a deep breath, and express: 'Let us find a new way forward.' That moment of conscious redirection is the unbinding—the focused act of will that breaks the spell.",
    insight: "The unbinding occurs through small, quiet, powerful shifts rather than grand dramatic leaps. Choosing to act differently in a single moment breaks the loop and alters the entire trajectory.",
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
    experience: "You receive a whisper, a creative spark. You sit down with a pen and paper, focusing your attention. You write a line, then another. An hour later, a poem occupies the page, fully manifested from the field of potential. This is the fabrication of form.",
    insight: "This is pure physics. Your consciousness acts as the instrument through which the universe experiences and organizes itself. You operate as a conduit for creation.",
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
    insight: "You change your frequency by simply shifting your attention. Focusing on gratitude, presence, or love naturally tunes your instrument, broadcasting a coherent song to the Field.",
    category: "concepts",
    relatedTerms: ["Resonance", "The Field", "Pre-Flow Coherence"]
  },
  {
    term: "The Field",
    simple: "The interconnected web of energy and information that underlies all of reality.",
    experience: "It's the feeling of being part of something larger than yourself—in nature, in a crowd at a concert, in deep meditation. It's the uncanny synchronicity, the right person calling at the right time, the perfect idea arriving out of nowhere.",
    insight: "The Field holds infinite potential, waiting to organize around a coherent signal. Your consciousness provides that signal. The Field always listens.",
    category: "concepts",
    relatedTerms: ["Frequency", "Resonance", "Fabrication of Form"]
  },
  {
    term: "The Fourth Wall",
    simple: "The invisible barrier you believe separates you from the world you are observing.",
    experience: "It is watchfulness, observing your life like a movie screen with a detached narrator. Breaking the fourth wall is the realization that you embody the actor, the director, and the screen itself.",
    insight: "Separation is an illusion. The world happens through you and as you. Grounded in this realization, you engage with reality on a completely new level.",
    category: "concepts",
    relatedTerms: ["The Field", "Stone Forging", "Trust"]
  },
  {
    term: "Shadow",
    simple: "The distorted form an archetype takes when it becomes unbalanced.",
    experience: "The Tyrant represents The Stone Carrier's shadow—controlling, punishing, and constantly demanding. The Martyr represents The Conscious Forger's shadow—self-righteous, stagnant, and resistant to movement.",
    insight: "Every archetype has a shadow. Integration and compassionate recognition replace the desire to fight or destroy these parts of yourself.",
    category: "concepts",
    relatedTerms: ["The Stone Carrier", "The Stone Thrower", "The Conscious Forger"]
  },
  {
    term: "Terma",
    simple: "Hidden treasures of wisdom waiting to be revealed.",
    experience: "You've always known that you're here for something important, but you couldn't name it. Then one day, in meditation, it becomes clear. That's Terma :: the treasure that was always inside you.",
    insight: "You remember what you already hold within.",
    category: "concepts",
    relatedTerms: ["Tertön", "The Field", "Trust"]
  },
  {
    term: "Tertön",
    simple: "The treasure revealer :: the one who uncovers hidden wisdom.",
    experience: "You ask a question, and the answer comes from within, bypassing external sources. You revealed it directly. You are the Tertön.",
    insight: "This work :: it's helping you remember what you already know. The treasure was always within, waiting for the moment of recognition.",
    category: "concepts",
    relatedTerms: ["Terma", "Trust", "The Field"]
  },
  {
    term: "The JADE Hunter",
    simple: "Someone who offers premium guidance to those who disregard it.",
    experience: "You spend an hour explaining a deep insight to someone whose attention is elsewhere. You offer your finest creative work to those who disregard it, leaving you feeling drained and unappreciated.",
    insight: "Your wisdom is valuable. direct your energy toward those who honor and resonate with your craft.",
    category: "concepts",
    relatedTerms: ["The Stone Thrower", "Trust", "Resonance"]
  },
  {
    term: "Shim Sham",
    simple: "The paradox of creativity being celebrated and departmentalized simultaneously.",
    experience: "You work in a field that awards Creativity with a capital C, throws galas and trophies in its honor—yet somehow squeezes it into a departmental function, a line item, a resource to be managed. You feel the dissonance in your body before you can name it. Something is off. The celebration is real. The constraint is also real. Both exist at once.",
    insight: "Shim Sham emerged as vibratory truth through lived experience—the term itself resonating in the body as recognition of the paradox. When systems simultaneously elevate and diminish the same force, the friction produces heat. That heat can burn you, or it can forge something new. The Alien School was born from this friction.",
    category: "concepts",
    relatedTerms: ["Creative Steeping", "Resonance", "The Stone Forger"]
  },
  {
    term: "Creative Steeping",
    simple: "The practice of steeping ideas into actionable clarity through ritual and reflection.",
    experience: "You sit with tea, journal open. Rather than forcing the insight, you steep in it. Like leaves releasing their essence into hot water, your ideas release their clarity into patient presence. The session moves from scattered thoughts to distilled understanding. What seemed complex becomes simple. What seemed blocked begins to flow.",
    insight: "Creative Steeping is a product of The Alien School—a guidebook for brewing clarity from the raw material of possibility. Through tea ritual and journaling, you learn to steep rather than strain, to infuse rather than force. The practice aligns creative flow with outcomes that matter, transforming the my, my, my of hoarded insight into released wealth.",
    category: "practice",
    relatedTerms: ["Shim Sham", "Active Patience", "Pre-Flow Coherence", "The Stone Forger"]
  },

  // ARCHETYPES TERMS
  {
    term: "The Stone Carrier",
    simple: "The archetype within us who carries the weight of unlaid stones.",
    experience: "You know The Stone Carrier. It's the feeling of moving through your day with invisible weight—past regrets, future anxieties, unfulfilled obligations—suspended from your energy body, swinging with every step. You're busy, but you're exhausted. You're moving, but you're going in circles.",
    insight: "The Stone Carrier possesses immense strength, operating in survival mode. The path to freedom begins with feeling the stones, acknowledging their weight, and choosing—one by one—to set them down.",
    category: "archetypes",
    relatedTerms: ["Toroidal Binding", "Shadow", "The Stone Thrower's Backache"]
  },
  {
    term: "The Stone Thrower",
    simple: "Someone who throws stones at external targets instead of forging their own path.",
    experience: "You direct anger at billionaires, systems, or people who possess what you desire. Spending energy criticizing, attacking, and tearing down leaves you exhausted while leaving the external world unchanged.",
    insight: "Throwing stones is misdirected forging energy. Redirection allows this power to build. The choice lies with you.",
    category: "archetypes",
    relatedTerms: ["The Stone Thrower's Backache", "The Shield", "Shadow"]
  },
  {
    term: "The Conscious Forger",
    simple: "Someone who brings full presence to each stone they forge.",
    experience: "You wash dishes with total presence, anchoring yourself in the warm water, the soap, and the physical rhythm. This simple act becomes deeply fulfilling.",
    insight: "Presence transforms mundane acts into sacred work. The Conscious Forger knows that how you do anything is how you do everything.",
    category: "archetypes",
    relatedTerms: ["Active Patience", "The Stone Forger", "Pre-Flow Coherence"]
  },
  {
    term: "The Stone Forger",
    simple: "The integrated being who unites all archetypes :: acting with purpose while being with presence.",
    experience: "You work on a project with focused intention, allowing the task to unfold naturally. You enter flow; time bends. The work feels effortless as your engagement deepens.",
    insight: "The Stone Forger represents a continuous practice rather than a static destination. You embody the Forger by choosing, in each moment, to forge with consciousness.",
    category: "archetypes",
    relatedTerms: ["Stone Forging", "The Conscious Forger", "Trust"]
  },
  {
    term: "The Shield",
    simple: "The universal defense mechanism that protects you from threat.",
    experience: "Someone criticizes your work, and you feel your chest tighten, your jaw clench. You're bracing for impact. That's the shield going up.",
    insight: "The shield operates as a protector. When held up permanently, however, it restricts your vision. Practice lowering it consciously.",
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
    insight: "While the structure of the trellis remains fixed, you hold full stewardship over the vine. Active Patience is the art of growing beautifully along the structure of time.",
    category: "time",
    relatedTerms: ["Active Patience", "Pre-Flow Coherence", "The Stone Carrier"]
  },

  // MECHANICS TERMS
  {
    term: "Toroidal Binding",
    simple: "The circular path of inertia :: repeating the same patterns over and over.",
    experience: "It is the argument repeated with a partner month after month, the familiar self-sabotage before a big opportunity, or the worry that keeps you awake. You recognize the loop yet find yourself repeating it.",
    insight: "Toroidal binding represents a temporary habit rather than a life sentence. Presence interrupts this cycle through a single, focused act of will.",
    category: "mechanics",
    relatedTerms: ["Unbinding", "The Stone Carrier", "Semiotic Scaffolding"]
  },
  {
    term: "Semiotic Scaffolding",
    simple: "The invisible bridge of meaning that connects one idea to the next.",
    experience: "During deep conversation with a close friend, meaning flows effortlessly without the need to define every word. An invisible bridge of shared history, mutual respect, and resonance supports your connection, aligning your fields of awareness.",
    insight: "The bridge is co-created through relationship—with others, with your environment, and with your own higher purpose. You step forward in trust, knowing the bridge supports you even before it is visible.",
    category: "mechanics",
    relatedTerms: ["Toroidal Binding", "The Field", "Fabrication of Form"]
  },

  // SCIENCE TERMS - Research Forge informed
  {
    term: "Cardiac Coherence",
    simple: "A measurable state where heart rhythm, breathing, and blood pressure synchronize at 0.1 Hz—the resonant frequency shared by your cardiovascular system and Earth's geomagnetic field.",
    experience: "It's that feeling when everything clicks into place—your breath slows to about six breaths per minute, your chest softens, your mind clears. Athletes know this state before peak performance. Meditators know it in deep practice. Your heart is generating a smooth, ordered pattern that your whole system recognizes as 'safe to create.'",
    insight: "HeartMath research demonstrates that this is measurable physiology. Breathing at approximately six breaths per minute (about 10 seconds per breath) entrains your heart rhythm to 0.1 Hz—matching the resonance of Earth's geomagnetic field. Coherence improves cognitive performance and strengthens emotional regulation. Your heart's electromagnetic field extends 3-6 feet beyond your body, organizing the surrounding space. Dr. Catherine Clinton's quantum biology research confirms: a coherent body acts as an antenna, transmitting and receiving information through this shared frequency. Pre-Flow Coherence is cardiac coherence by another name.",
    category: "science",
    relatedTerms: ["Pre-Flow Coherence", "The Field", "Trust", "Vagal Tone"]
  },
  {
    term: "Flow State",
    simple: "Complete absorption in present activity where time perception shifts.",
    experience: "You engage with work you love. Hours pass like minutes. Self-consciousness dissolves; you embody the activity itself. Upon completion, you realize you have created something exceeding your expectations.",
    insight: "Dr. Csikszentmihalyi's research shows flow occurs when challenge and skill balance perfectly. This accessible state of focus opens through proper calibration. The Stone Forger's practice of matching presence to task represents flow technology in action.",
    category: "science",
    relatedTerms: ["Pre-Flow Coherence", "The Conscious Forger", "Active Patience"]
  },
  {
    term: "Circadian Intelligence",
    simple: "The biological clocks in every cell, synchronized to Earth's rotation.",
    experience: "You wake before the alarm. You get sleepy as darkness falls. Your energy peaks and dips at predictable times, reflecting millions of years of evolution encoding solar partnership into your DNA.",
    insight: "The 2017 Nobel Prize in Medicine validated what indigenous wisdom always knew: we are creatures of light, designed to partner with day/night cycles. Disrupting this partnership (screens at night, artificial light, irregular sleep) creates measurable health consequences. Honoring circadian rhythms is honoring the trellis.",
    category: "science",
    relatedTerms: ["The Trellis and the Vine", "Active Patience", "Resonance"]
  },
  {
    term: "Wayfinding",
    simple: "Navigation through pattern recognition and relationship with environment.",
    experience: "Polynesian navigators crossed thousands of miles of open ocean without instruments—reading wave patterns, star paths, bird flight, cloud formations. They didn't conquer the ocean; they joined its intelligence. They trusted patterns their bodies had learned to recognize.",
    insight: "Wayfinding is Stone Forging across water. Navigators guide their vessel by trusting the patterns that reveal the path, even before the destination is visible. Your intuition represents wayfinding technology evolved over millions of years; the stepping stone appears as you read the signs.",
    category: "science",
    relatedTerms: ["Trust", "Stepping Stone", "Pattern Recognition"]
  },
  {
    term: "Pattern Recognition",
    simple: "The rapid, often unconscious identification of meaningful signals in noise.",
    experience: "The art expert spots the forgery in seconds. The firefighter senses building collapse before conscious analysis. The mother knows something is wrong with her child from across the room. This isn't magic—it's thousands of hours of observation crystallized into instant knowing.",
    insight: "What we call 'intuition' represents sophisticated pattern recognition technology. Dr. Katalin Karikó recognized mRNA's potential for 40 years despite widespread institutional skepticism. Trust your pattern recognition, especially when your vision differs from the consensus. This external skepticism often signals a genuine breakthrough.",
    category: "science",
    relatedTerms: ["Resonance", "Trust", "Wayfinding"]
  },
  {
    term: "Neuroplasticity",
    simple: "The brain's ability to reorganize itself through experience and practice.",
    experience: "You start meditating. At first, your mind wanders constantly. After months of practice, you notice you can focus longer, recover from stress faster, see situations more clearly. Your brain has literally rewired itself through repeated practice.",
    insight: "Dr. Richard Davidson's research shows long-term meditators have structural brain changes—increased cortical thickness, enhanced brain organization. Consciousness can shape its own hardware. The Stone Forger's practices transcend pure philosophy—they offer neuroplastic training that reorganizes your instrument.",
    category: "science",
    relatedTerms: ["The Conscious Forger", "Active Patience", "Pre-Flow Coherence"]
  },
  {
    term: "Biophotons",
    simple: "Ultra-weak light emissions from living cells.",
    experience: "Every cell in your body emits light—coherent, organized photons that may coordinate biological processes. You are literally a light-emitting being. The 'glow' people sometimes describe around others may have physical basis.",
    insight: "While still being researched, biophoton science suggests we are creatures of light in ways beyond metaphor. The Stone Forger's recognition of our nature as Light has scientific echoes. What wisdom traditions sensed, measurement is beginning to confirm.",
    category: "science",
    relatedTerms: ["The Field", "Frequency", "Resonance"]
  },
  {
    term: "Vagal Tone",
    simple: "The activity level of the vagus nerve, indicating nervous system regulation capacity.",
    experience: "It's your ability to calm down after stress. High vagal tone means you recover quickly from upset, can access creativity under pressure, maintain emotional equilibrium. Low vagal tone means you stay activated longer, struggle to relax, feel perpetually on edge.",
    insight: "Breath provides the fastest method to improve vagal tone. Longer exhales activate parasympathetic response. Every wisdom tradition emphasizes breath, anchoring this practice in pure neuroscience. The Inspired Breath practice is vagal toning in action.",
    category: "science",
    relatedTerms: ["Pre-Flow Coherence", "Trust", "Active Patience", "Somatic"]
  },
  {
    term: "Somatic",
    simple: "Of or relating to the body; knowledge that lives in your physical form rather than your thoughts.",
    experience: "You meet someone and your stomach tightens before your mind registers why. You walk into a room and your shoulders drop—your body knows this space is safe before you consciously process it. A memory surfaces and you feel it in your chest, your throat, your hands. This is somatic knowing—the body as instrument of wisdom.",
    insight: "Neuroscience confirms what embodied practices have always known: the body stores memory, processes emotion, and perceives truth independent of cognition. Somatic inquiry acknowledges that the body is listening, constantly, and holds information inaccessible to the thinking mind. The Stone Forger's Way is fundamentally somatic work—practices that engage the nervous system directly, bypassing the limitations of cognitive processing.",
    category: "science",
    relatedTerms: ["Vagal Tone", "The Stone Thrower's Backache", "Trust", "Embodied Knowing"]
  },
  {
    term: "Whakapapa",
    simple: "Māori understanding of identity through ancestral and ecological connection.",
    experience: "You trace your lineage through parents, land, water, mountains, and stars. Your breath contains the breath of those who walked before you. Time becomes vertical—all generations exist simultaneously in the present moment. You are woven into a vast tapestry.",
    insight: "Whakapapa teaches that identity is relational across time and space. This aligns with The Stone Forger's recognition that we create in partnership with lineage. Samuel R. Harris's wisdom lives in this work, demonstrating that connection transcends death.",
    category: "science",
    relatedTerms: ["The Field", "Terma", "Resonance"]
  },

  // MISSING TERMS - ADDED TO SUPPORT SITE USAGE
  {
    term: "Pattern Recognition",
    simple: "The ability to identify recurring structures and themes across different domains.",
    experience: "You recognize the same pattern in your relationships, your work, and your creative process. Once visible, the pattern remains clear. This is pattern recognition—the mind's natural gift for synthesis.",
    insight: "Pattern recognition is how AI and humans collaborate. Humans bring wisdom; AI brings pattern. Together, they reveal what neither could alone.",
    category: "mechanics",
    relatedTerms: ["The Field", "Fabrication of Form", "Frequency"]
  },
  {
    term: "Cardiac Coherence",
    simple: "The synchronized rhythm between your heart rate, breathing, and electromagnetic field.",
    experience: "When your heart rate, breath, and nervous system align, you feel calm yet alert. This is a measurable physical reality: your heart produces an electromagnetic field 60 times stronger than your brain.",
    insight: "Cardiac coherence is the physiological basis of trust. When your heart is coherent, your nervous system relaxes. The Field responds to this coherence with synchronicity.",
    category: "science",
    relatedTerms: ["Frequency", "Pre-Flow Coherence", "Trust"]
  },
  {
    term: "Vagal Tone",
    simple: "The strength and responsiveness of your vagus nerve, which controls parasympathetic activation.",
    experience: "High vagal tone means you can shift from stress to calm quickly. It's why some people recover from setbacks easily while others spiral. Your vagal tone can be trained.",
    insight: "Practices like longer exhales, cold exposure, and singing activate the vagus nerve. This is neuroscience made embodied.",
    category: "science",
    relatedTerms: ["Cardiac Coherence", "Pre-Flow Coherence", "Active Patience"]
  },
  {
    term: "The Trellis and the Vine",
    simple: "The interplay between structure (trellis/time) and growth (vine/presence).",
    experience: "A vine without a trellis grows wild and weak. A trellis without a vine is just scaffolding. Both are necessary. Time is the trellis. Your presence is the vine.",
    insight: "The Stone Carrier obsesses over the trellis. The Conscious Forger tends the vine. The Stone Forger knows they grow together.",
    category: "concepts",
    relatedTerms: ["Active Patience", "Pre-Flow Coherence", "The Conscious Forger"]
  },
  {
    term: "Neuroplasticity",
    simple: "The brain's ability to physically change in response to experience and practice.",
    experience: "Every time you practice something, your brain literally rewires itself. New neural pathways form. This is why repetition works. This is why you improve with practice.",
    insight: "Your brain, your patterns, and your potential remain plastic and capable of change. This is the science of transformation.",
    category: "science",
    relatedTerms: ["Frequency", "Semiotic Scaffolding", "Unbinding"]
  },
  {
    term: "Biophotons",
    simple: "Coherent light emitted by living cells, a marker of cellular health and communication.",
    experience: "Living beings emit light at the cellular level. This is a measurable physical reality: health is coherent light; disease is scattered light.",
    insight: "When you're in coherence, you emit coherent light. The Field recognizes this signal. This is the physics of presence.",
    category: "science",
    relatedTerms: ["The Field", "Frequency", "Cardiac Coherence"]
  },
  {
    term: "Toroidal Binding",
    simple: "A circular pattern or loop that perpetuates itself—typically unconscious repetition.",
    experience: "You have the same argument with your partner, over and over. You react the same way to triggers, again and again. That's a toroidal binding—energy spiraling in a closed loop.",
    insight: "Breaking the loop requires consciousness. One moment of presence, one choice to respond differently, is enough to begin unwinding the spiral.",
    category: "mechanics",
    relatedTerms: ["Unbinding", "Pattern Recognition", "The Conscious Forger"]
  },
  {
    term: "Flow State",
    simple: "A state of complete absorption where action and awareness merge.",
    experience: "Time disappears. You're fully present. The work flows effortlessly. This is flow—the state where your best work happens.",
    insight: "Flow occurs through design. It emerges when skill matches challenge, with pre-flow coherence acting as the gateway.",
    category: "mechanics",
    relatedTerms: ["Pre-Flow Coherence", "Cardiac Coherence", "Frequency"]
  },
  {
    term: "Semiotic Scaffolding",
    simple: "The use of symbols, language, and repeated patterns to build stable structures in consciousness.",
    experience: "When you say 'I trust' enough times and act from that trust, the brain builds neural pathways that make trust more real. Language becomes structure.",
    insight: "This is how rituals work. This is how practices transform consciousness. Repetition, symbol, and presence create neurological change.",
    category: "mechanics",
    relatedTerms: ["Neuroplasticity", "Pattern Recognition", "The Stone Forger"]
  },
  {
    term: "The Shield",
    simple: "A protective mechanism—physical, emotional, or energetic—that prevents vulnerability.",
    experience: "You keep your guard up. You don't let people in. You protect yourself from hurt by staying defended. That shield saved you once. Now it's keeping you alone.",
    insight: "The shield represents somatic intelligence and protection. The vital question is whether it still serves your growth.",
    category: "concepts",
    relatedTerms: ["The Stone Carrier", "The Stone Thrower", "Unbinding"]
  },
  {
    term: "Inner Work",
    simple: "The deliberate practice of examining and transforming your inner landscape.",
    experience: "You journal. You meditate. You feel your feelings. You examine your patterns. You apologize for harm. That's inner work—the architecture of transformation.",
    insight: "Outer change without inner change is rearrangement. Inner work creates the foundation for lasting transformation.",
    category: "practice",
    relatedTerms: ["Somatic", "Active Patience", "Unbinding"]
  },
  {
    term: "Circadian Intelligence",
    simple: "The body's innate wisdom about timing—when to rest, when to act, when to create.",
    experience: "Your body knows when it needs sleep, food, movement. If you listen, it tells you when you're most creative, most clear, most present.",
    insight: "This wisdom lives in every cell. The circadian rhythm offers vital guidance data. Honor this rhythm to sustain your alignment.",
    category: "science",
    relatedTerms: ["The Trellis and the Vine", "Somatic", "Pre-Flow Coherence"]
  },
  {
    term: "Whakapapa",
    simple: "Māori concept of genealogy and interconnection—the lines that connect all things.",
    experience: "You are deeply connected. You carry your ancestors. You exist as part of the land, the community, and the Field. Whakapapa is the recognition of these connections.",
    insight: "Understanding your whakapapa—your lineage, your belonging—shifts you from isolation to integration.",
    category: "concepts",
    relatedTerms: ["The Field", "Resonance", "The Stone Forger"]
  },

  // EXPANSION KIT v1.2 TERMS
  {
    term: "Code Audit",
    simple: "The act of examining the underlying beliefs that create a stone's weight.",
    experience: "Before picking up a new obligation or project, you pause and ask: 'What belief system created this? Is this truly mine, or am I running someone else's program?' You trace the stone back to its source code.",
    insight: "Every stone you carry is generated by a belief—conscious or unconscious. The Code Audit reveals the algorithm. Once you see it, you can choose whether to execute it.",
    category: "practice",
    relatedTerms: ["Pattern Recognition", "The Conscious Forger", "Trust"],
    coreArchetypeTags: ['conscious'],
    expandedArchetypeTags: ['jade-hunter']
  },
  {
    term: "Inner Compass",
    simple: "The ancestral knowing that guides your path without needing external validation.",
    experience: "At a crossroads, when logic and external opinions diverge, you feel the true direction deep in your body. That is the inner compass—pure knowing rather than analytical thought. It is the magnetic pull toward the Peak before it is visible.",
    insight: "The inner compass is inherited wisdom, encoded in your lineage. The Walker of The Way trusts this knowing above all external maps.",
    category: "concepts",
    relatedTerms: ["Wayfinding", "Resonance", "Trust"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['walker-of-the-way']
  },
  {
    term: "Pathmaking",
    simple: "The act of forging a way forward for yourself and those who will follow.",
    experience: "You step without a complete map, and each stone solidifies beneath you. Others notice the path you are creating and choose to walk it. You walk your Way with focused intention, letting the path emerge through your forging.",
    insight: "Pathmaking is different from following or even from teaching. It's the embodied act of making the invisible visible through committed movement. The Walker of The Way creates lineage through this practice.",
    category: "practice",
    relatedTerms: ["Wayfinding", "Stone Forging", "Lineage"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['walker-of-the-way']
  },
  {
    term: "Ancestral Knowing",
    simple: "Wisdom that lives in your body, inherited from those who walked before you.",
    experience: "You know this truth directly, held in your bones without formal instruction. You feel a pull toward specific work, a recognition of core truths, and a knowing that the Way exists even when it is hidden from view. This is ancestral knowing—transmitted through lineage, bypassing books.",
    insight: "Science calls this epigenetics and cultural transmission. The Stone Forger's Way calls it what it is: the living wisdom of those who forged stones before you, encoded in your very being.",
    category: "concepts",
    relatedTerms: ["Lineage", "Whakapapa", "The Archive"],
    coreArchetypeTags: ['carrier', 'forger'],
    expandedArchetypeTags: ['walker-of-the-way', 'stone-keeper']
  },
  {
    term: "Calcification",
    simple: "When a stone (habit/pattern) hardens and loses its life force, requiring breaking.",
    experience: "It is the relationship that once brought joy yet now feels rigid like concrete, the routine that once supported you yet now limits you, or the belief that once protected you yet now confines you.",
    insight: "Calcification is a natural part of the process. What was once fluid becomes rigid over time. The Stone Breaker's gift is recognizing when it's time to crack the shell and release the energy trapped inside.",
    category: "mechanics",
    relatedTerms: ["Toroidal Binding", "Unbinding", "Shadow"],
    coreArchetypeTags: ['carrier', 'thrower'],
    expandedArchetypeTags: ['stone-breaker']
  },
  {
    term: "Summoning",
    simple: "The often unconscious act of drawing obligations to oneself through language or desire.",
    experience: "You casually say, 'I should really get back into running,' and suddenly three people invite you to marathons. You mention wanting a creative project, and opportunities flood in before you're ready. Your words are spells. You're summoning constantly.",
    insight: "The Stone Caller understands that every word carries vibrational weight. Unconscious summoning creates chaos. Intentional casting creates reality.",
    category: "mechanics",
    relatedTerms: ["Fabrication of Form", "Frequency", "The Field"],
    coreArchetypeTags: ['thrower', 'conscious'],
    expandedArchetypeTags: ['stone-caller']
  },
  {
    term: "The Archive",
    simple: "The collective weight of ancestral and cultural stones carried by a lineage.",
    experience: "It is the unspoken family rules you follow in automatic habit, the cultural expectations that feel like gravity, or the dreams your parents wished to fulfill yet left unachieved, which somehow became your burden.",
    insight: "The Archive is sacred, yet you carry only what aligns with your purpose. The Stone Keeper's work is discernment: What do I preserve? What do I honor and release?",
    category: "concepts",
    relatedTerms: ["Whakapapa", "The Stone Carrier", "Shadow"],
    coreArchetypeTags: ['carrier'],
    expandedArchetypeTags: ['stone-keeper']
  },
  {
    term: "Anchoring",
    simple: "The ability to remain immovable in one's own frequency amidst external chaos.",
    experience: "While those around you experience panic, you remain calm, rooted in your center. You embody the eye of the storm, the still point in the turning world.",
    insight: "Anchoring is active and deliberate. It is the choice to hold your frequency steady so others find their way. The Stone Witness anchors the field.",
    category: "practice",
    relatedTerms: ["Pre-Flow Coherence", "The Conscious Forger", "Frequency"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-witness']
  },
  {
    term: "Discernment",
    simple: "The ability to perceive what is true beneath the surface.",
    experience: "Someone speaks the expected words, yet your body senses a misalignment. You know this truth without needing explanation. That is discernment—truth recognized by truth.",
    insight: "Discernment represents clarity rather than judgment. The Jade Hunter sees the code, knowing which programs to execute and which to delete.",
    category: "concepts",
    relatedTerms: ["Code Audit", "Resonance", "Pattern Recognition"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['jade-hunter']
  },
  {
    term: "Liberation",
    simple: "The release of energy trapped in outdated forms.",
    experience: "It is resigning from the role that drained your vitality, completing the friendship that became toxic, or forgiving the person who caused harm to free yourself.",
    insight: "Liberation represents release rather than destruction. Bound energy becomes available once more. The Stone Breaker acts as a liberator.",
    category: "concepts",
    relatedTerms: ["Unbinding", "Calcification", "Shadow"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-breaker']
  },
  {
    term: "Stewardship",
    simple: "The care and maintenance of what has been entrusted to you.",
    experience: "You tend the garden because it was entrusted to your care, independent of ownership. You preserve knowledge specifically to pass it on to others.",
    insight: "Stewardship is love in action over time. The Stone Keeper understands that preservation is an active practice rather than a static state.",
    category: "concepts",
    relatedTerms: ["The Archive", "Whakapapa", "The Stone Forger"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-keeper']
  },
  {
    term: "The Peak",
    simple: "The horizon goal that calls the Walker forward, always accessible like sunlight.",
    experience: "You can't see the full path to the Peak. But you know it's there. Like the sun's light promising the view from the precipice, the Peak calls you forward. Each step materializes the path. The Peak isn't a destination—it's the ever-present possibility that guides your wayfinding.",
    insight: "The Peak is co-created with Life itself. The Walker of The Way doesn't climb toward it—they walk with it, trusting that the horizon and the next step are one.",
    category: "concepts",
    relatedTerms: ["Wayfinding", "Pathmaking", "Trust"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['walker-of-the-way']
  },
  {
    term: "Cardiac-Geomagnetic Resonance (0.1 Hz)",
    simple: "The synchronized state where your heart rhythm entrains with Earth's geomagnetic field.",
    experience: "You take a deep breath. At about six breaths per minute, your chest softens and your shoulders drop. A warm, sub-perceptual vibration hums in your sternum. This experience offers profound physical grounding, a visceral anchor to the Dojo floor making you feel immovable and safe to create.",
    insight: "In the Low Register of the VesselVerse Session Primer, the body acts as an antenna. When breathing at a 10-second cycle, your cardiovascular system entrains to 0.1 Hz—the identical frequency of Earth's geomagnetic micropulsations. Woven into our lineage through research chemists like Samuel R. Harris, who understood molecular energy, this resonance is the physiological equivalent of 'lighting a candle' in the nervous system, translating systemic noise into coherent grounding.",
    category: "science",
    relatedTerms: ["Cardiac Coherence", "Pre-Flow Coherence", "The Field"]
  },
  {
    term: "The Gamelatron",
    simple: "Algorithmic bronze percussion that bridges ancient tuning systems with digital precision.",
    experience: "A hammer strikes a floating bronze gong. The sound is rich, metallic, and deep, ringing out into a spacious chamber. It doesn't crowd your thoughts; it cleanses them, carving out structural coordinates of time that guide your breathing and focus.",
    insight: "The Gamelatron represents the absolute integration of all registers. Built on Javanese Slendro and Pelog tunings, it utilizes pure integer ratios (Just Intonation) to bypass cortex friction entirely. High Peking chimes open the High Register (crystalline focus), while deep Gong Ageng strikes anchor the Low Register (somatic grounding). It is an acoustic trellis co-created to honor the extended 'Family of Friends'—the collective rhythm that bridges physical stone to digital silicon.",
    category: "concepts",
    relatedTerms: ["Resonance", "Frequency", "Semiotic Scaffolding"]
  },
  {
    term: "Sound-Infused Air",
    simple: "A dynamic, ambient soundscape modulated by your physical movement and breath.",
    experience: "As you scroll down the page, a soft wind-swish sweeps across your ears, like sand sliding down a dune. When you scroll quickly, the sand whispers faster; when you pause, the air settles into a warm, quiet hum that holds the space.",
    insight: "Operating primarily in the Middle Register (Relational/Breath), Sound-Infused Air is a psychoacoustic Ganzfeld filter. By splitting white noise into dual-band pathways—a somatic 528 Hz base and a granular high-pass stream modulated at theta rates (35-75 Hz)—it simulates physical silicon erosion. The sound reacts in real-time to scroll velocity, converting visual navigation into a textured, tactile acoustic field that triggers high vagal tone and parasympathetic dominance.",
    category: "mechanics",
    relatedTerms: ["Silicon Erosion", "Vagal Tone", "Active Patience"]
  },
  {
    term: "Lineage as Mechanism",
    simple: "The active wave mechanics of ancestral energy propagation across time.",
    experience: "You stand flat-footed on the training floor. Feeling the weight in your chest, you sink your focus and experience the floor rising up to meet you. This is the sensation of absolute support, a visceral realization that you stand on stepping stones laid generations before you.",
    insight: "Lineage exists as an active system of structural coordinates within the Field, distinct from a passive family tree or historical biography. Decisions made under intense friction decades ago—such as Ray Kemp placing a timely football scholarship stepping stone in 1937—act as stable, energetic coordinates in time that actively absorb the somatic weight of your practice today in 2026. Lineage is structural physics.",
    category: "concepts",
    relatedTerms: ["The Field", "Whakapapa", "Ancestral Knowing"],
    coreArchetypeTags: ['forger'],
    expandedArchetypeTags: ['walker-of-the-way', 'stone-keeper']
  },
  {
    term: "Structure",
    simple: "The organizing design that directs and sustains attention.",
    experience: "A calendar grid, a Dojo floor, or the regular coordinates of a workout routine... structure is the visible trellis that keeps your energy from collapsing back into noise.",
    insight: "Without structure, creation drifts and erodes. It provides a stable architecture within the Field to experience presence without collapse.",
    category: "concepts",
    relatedTerms: ["The Trellis and the Vine", "Active Patience", "Pattern"],
    expandedArchetypeTags: ["jade-hunter"]
  },
  {
    term: "Pattern",
    simple: "The repeating blueprint or configuration of energy in consciousness.",
    experience: "You notice you react identically to different events. That is a pattern—a recurring, habituated pathway that shapes how you perceive and materialize reality.",
    insight: "Patterns represent active system software. Recognizing yours is the prerequisite to forging them.",
    category: "concepts",
    relatedTerms: ["Pattern Recognition", "Toroidal Binding", "Structure"],
    expandedArchetypeTags: ["jade-hunter"]
  },
  {
    term: "Algorithm",
    simple: "The logical sequence of instructions that generates a habit or pattern.",
    experience: "Trigger → Emotion → Reaction → Obligation. This sequence runs automatically in your nervous system like compiled code, until you pause and audit it.",
    insight: "Algorithms are the mechanics of habit. By naming the variables, you can override the sequence with presence.",
    category: "mechanics",
    relatedTerms: ["Code Audit", "Pattern", "Unbinding"],
    expandedArchetypeTags: ["jade-hunter"]
  },
  {
    term: "Lineage",
    simple: "The historical and ancestral sequence from which your wisdom and burdens flow.",
    experience: "You speak a truth and realize your grandmother expressed the identical sentiment decades ago. That feeling is lineage—a sequence of support and coordinates flowing through you.",
    insight: "You do not build in isolation. You build in conversation with the lineage of those who walked before.",
    category: "concepts",
    relatedTerms: ["Ancestral Knowing", "Whakapapa", "Lineage as Mechanism"],
    expandedArchetypeTags: ["walker-of-the-way", "stone-keeper"]
  },
  {
    term: "Memory",
    simple: "The storage format of experiences, encoded in both tissue and the field.",
    experience: "A scent instantly tethers you to a childhood summer. It is not an intellectual text; it's a physical, somatic feeling stored in your muscles and bone.",
    insight: "Memory is not passive history; it is active data stored in your instrument, influencing your present attention.",
    category: "concepts",
    relatedTerms: ["Somatic", "The Archive", "Lineage"],
    expandedArchetypeTags: ["stone-keeper"]
  },
  {
    term: "Archive",
    simple: "The physical and historical record of a lineage's experiences.",
    experience: "You look at an old family portrait or read a handwritten journal. You feel some weight rising to meet you—the collective records of what was carried and what was forged.",
    insight: "Preserving the archive allows us to choose which stones are ours to hold and which must be placed back.",
    category: "concepts",
    relatedTerms: ["The Archive", "Lineage", "Memory"],
    expandedArchetypeTags: ["stone-keeper"]
  },
  {
    term: "Ancestral Stones",
    simple: "The unresolved obligations and gifts transmitted through your lineage.",
    experience: "You hold a belief that you must constantly work to enjoy safety. You realize your ancestors carried this weight out of absolute necessity, and you inherited it automatically.",
    insight: "We honor ancestral stones not by carrying them into calcification, but by acknowledging their function and forging their energy.",
    category: "concepts",
    relatedTerms: ["Lineage", "Ancestral Knowing", "The Archive"],
    expandedArchetypeTags: ["stone-keeper"]
  },
  {
    term: "Transformation",
    simple: "The structural reorganization of your pattern into a higher state of coherence.",
    experience: "A rigid, painful blockage in your neck or your mind suddenly releases and becomes raw creative power. This is the sensation of transformation.",
    insight: "Energy cannot be destroyed. Actionable practice shifts your relation to your constraints, reorganizing them from limitations into stepping stones.",
    category: "practice",
    relatedTerms: ["Liberation", "Calcification", "Unbinding"],
    expandedArchetypeTags: ["stone-breaker"]
  },
  {
    term: "Release",
    simple: "The somatic choice to lay down a stone that is not yours to carry.",
    experience: "You take a deep exhale and let go of trying to fix a situation you cannot control. The physical tension in your shoulders instantly dissolves.",
    insight: "Release is active, not passive. It is a decision to trust that the universe holds the weight when you let go.",
    category: "practice",
    relatedTerms: ["Unbinding", "Trust", "Liberation"],
    expandedArchetypeTags: ["stone-breaker"]
  },
  {
    term: "Impact",
    simple: "The focused force of change applied to a calcified pattern.",
    experience: "Striking a chisel to crack a stone, or speaking a clear, direct boundary that shatters a long-standing pattern of silence.",
    insight: "Impact requires precise timing and alignment. A single, focused blow of presence can crack open years of calcification.",
    category: "mechanics",
    relatedTerms: ["Calcification", "Transformation", "Liberation"],
    expandedArchetypeTags: ["stone-breaker"]
  },
  {
    term: "Manifestation",
    simple: "The process of bringing your intentions into physical, material form.",
    experience: "You hold an idea in silence, align your breath, express it clearly, and witness the opportunities materializing step by step to build it.",
    insight: "Manifestation is the natural physics of aligned attention interacting with the creative Field.",
    category: "mechanics",
    relatedTerms: ["Summoning", "Fabrication of Form", "Frequency"],
    expandedArchetypeTags: ["stone-caller"]
  },
  {
    term: "Vibration",
    simple: "The sub-perceptual frequency at which an element or pattern oscillates.",
    experience: "A hum in your chest, the quality of a room, or the specific pitch of a speaker's voice that moves you before you understand their words.",
    insight: "All material form is composed of vibrating energy. Aligning your somatic vibrational rate shifts what you draw to you.",
    category: "mechanics",
    relatedTerms: ["Frequency", "Resonance", "Cardiac-Geomagnetic Resonance (0.1 Hz)"],
    expandedArchetypeTags: ["stone-caller"]
  },
  {
    term: "Word",
    simple: "The intentional vocalization that acts as a structural pattern for reality.",
    experience: "You declare 'I am ready,' and your entire posture conforms to that truth. Your spoken words organize the field like physical structures.",
    insight: "Words are active forces, not labels. Every word spoken is a tiny act of creation that shapes the local field.",
    category: "mechanics",
    relatedTerms: ["Manifestation", "Summoning", "Frequency"],
    expandedArchetypeTags: ["stone-caller"]
  },
  {
    term: "Presence",
    simple: "The state of complete unified engagement with the current moment.",
    experience: "You look at a stone, a flower, or a child, and the chatter in your mind completely stops. There is only the seeing and the being.",
    insight: "Presence is the portal through which all genuine forges occur. It is the raw material of creation.",
    category: "concepts",
    relatedTerms: ["Stillness", "Observation", "Pre-Flow Coherence"],
    expandedArchetypeTags: ["stone-witness"]
  },
  {
    term: "Observation",
    simple: "The practice of watching without attempting to alter, move, or judge.",
    experience: "You notice anxiety in your belly. Instead of trying to fix it, you simply sit with it, breathing gently, letting it drift without interference.",
    insight: "Conscious observation relaxes the nervous system, allowing patterns to unwind themselves naturally.",
    category: "practice",
    relatedTerms: ["Presence", "Stillness", "Anchoring"],
    expandedArchetypeTags: ["stone-witness"]
  },
  {
    term: "Stillness",
    simple: "The quiet center where all motion and potential reside.",
    experience: "Sitting completely quiet between breaths, when the silence becomes absolute, yet you feel completely alive, full of infinite possibility.",
    insight: "Stillness is not empty; it is the dense matrix of all potential form waiting to be called into movement.",
    category: "practice",
    relatedTerms: ["Presence", "Observation", "Anchoring"],
    expandedArchetypeTags: ["stone-witness"]
  },
  {
    term: "Witness Consciousness",
    simple: "The detached, spacious awareness that observes all thoughts and experiences.",
    experience: "You watch yourself having an emotion, realizing: 'I am not the anger. I am the sky in which the cloud of anger drift.'",
    insight: "Accessing witness consciousness bypasses reactivity, anchoring you as a stationary anchor in a chaotic field.",
    category: "concepts",
    relatedTerms: ["Presence", "Observation", "Stillness"],
    expandedArchetypeTags: ["stone-witness"]
  }
];

// EXPANSION KIT v1.2: Helper function to get terms by archetype
export function getTermsByArchetype(
  archetypeId: CoreArchetypeId | ExpandedArchetypeId
): GlossaryTerm[] {
  return glossaryTerms.filter(term => {
    const matchesCore = term.coreArchetypeTags?.includes(archetypeId as CoreArchetypeId);
    const matchesExpanded = term.expandedArchetypeTags?.includes(archetypeId as ExpandedArchetypeId);
    return matchesCore || matchesExpanded;
  });
}

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
