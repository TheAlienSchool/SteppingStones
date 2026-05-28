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
    insight: "This work :: it's helping you remember what you already know. The treasure was always within, waiting for the moment of recognition.",
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
    experience: "You sit with tea, journal open. You don't force the insight—you steep in it. Like leaves releasing their essence into hot water, your ideas release their clarity into patient presence. The session moves from scattered thoughts to distilled understanding. What seemed complex becomes simple. What seemed blocked begins to flow.",
    insight: "Creative Steeping is a product of The Alien School—a guidebook for brewing clarity from the raw material of possibility. Through tea ritual and journaling, you learn to steep rather than strain, to infuse rather than force. The practice aligns creative flow with outcomes that matter, transforming the my, my, my of hoarded insight into released wealth.",
    category: "practice",
    relatedTerms: ["Shim Sham", "Active Patience", "Pre-Flow Coherence", "The Stone Forger"]
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
  },

  // SCIENCE TERMS - Research Forge informed
  {
    term: "Cardiac Coherence",
    simple: "A measurable state where heart rhythm, breathing, and blood pressure synchronize at 0.1 Hz—the resonant frequency shared by your cardiovascular system and Earth's geomagnetic field.",
    experience: "It's that feeling when everything clicks into place—your breath slows to about six breaths per minute, your chest softens, your mind clears. Athletes know this state before peak performance. Meditators know it in deep practice. Your heart is generating a smooth, ordered pattern that your whole system recognizes as 'safe to create.'",
    insight: "HeartMath research shows this isn't metaphor—it's measurable physiology. When you breathe at approximately six breaths per minute (about 10 seconds per breath), your heart rhythm entrains to 0.1 Hz—the same frequency as Earth's geomagnetic field resonance. In coherent states, cognitive performance improves, emotional regulation strengthens. Your heart's electromagnetic field extends 3-6 feet beyond your body, literally influencing the space around you. Dr. Catherine Clinton's quantum biology research confirms: the body acts as an antenna when coherent, receiving and transmitting information through this shared frequency. Pre-Flow Coherence is cardiac coherence by another name.",
    category: "science",
    relatedTerms: ["Pre-Flow Coherence", "The Field", "Trust", "Vagal Tone"]
  },
  {
    term: "Flow State",
    simple: "Complete absorption in present activity where time perception shifts.",
    experience: "You're working on something you love. Hours pass like minutes. Self-consciousness dissolves. You're not thinking about the work—you are the work. When you emerge, you realize you've created something beyond what you thought possible.",
    insight: "Dr. Csikszentmihalyi's research shows flow occurs when challenge and skill balance perfectly. This isn't rare mystical experience—it's accessible through proper calibration. The Stone Forger's practice of matching presence to task is flow technology by another name.",
    category: "science",
    relatedTerms: ["Pre-Flow Coherence", "The Conscious Forger", "Active Patience"]
  },
  {
    term: "Circadian Intelligence",
    simple: "The biological clocks in every cell, synchronized to Earth's rotation.",
    experience: "You wake before the alarm. You get sleepy as darkness falls. Your energy peaks and dips at predictable times. This isn't random—it's millions of years of evolution encoding solar partnership into your DNA.",
    insight: "The 2017 Nobel Prize in Medicine validated what indigenous wisdom always knew: we are creatures of light, designed to partner with day/night cycles. Disrupting this partnership (screens at night, artificial light, irregular sleep) creates measurable health consequences. Honoring circadian rhythms is honoring the trellis.",
    category: "science",
    relatedTerms: ["The Trellis and the Vine", "Active Patience", "Resonance"]
  },
  {
    term: "Wayfinding",
    simple: "Navigation through pattern recognition and relationship with environment.",
    experience: "Polynesian navigators crossed thousands of miles of open ocean without instruments—reading wave patterns, star paths, bird flight, cloud formations. They didn't conquer the ocean; they joined its intelligence. They trusted patterns their bodies had learned to recognize.",
    insight: "Wayfinding is Stone Forging across water. The navigator doesn't see the destination, but trusts the patterns that reveal the path. Your intuition is wayfinding technology evolved over millions of years. The stepping stone appears when you learn to read the signs.",
    category: "science",
    relatedTerms: ["Trust", "Stepping Stone", "Pattern Recognition"]
  },
  {
    term: "Pattern Recognition",
    simple: "The rapid, often unconscious identification of meaningful signals in noise.",
    experience: "The art expert spots the forgery in seconds. The firefighter senses building collapse before conscious analysis. The mother knows something is wrong with her child from across the room. This isn't magic—it's thousands of hours of observation crystallized into instant knowing.",
    insight: "What we call 'intuition' is sophisticated pattern recognition technology. Dr. Katalin Karikó recognized mRNA's potential for 40 years while institutions dismissed her. Trust your pattern recognition, especially when others don't see what you see. The invalidation may be the signal that you're onto something real.",
    category: "science",
    relatedTerms: ["Resonance", "Trust", "Wayfinding"]
  },
  {
    term: "Neuroplasticity",
    simple: "The brain's ability to reorganize itself through experience and practice.",
    experience: "You start meditating. At first, your mind wanders constantly. After months of practice, you notice you can focus longer, recover from stress faster, see situations more clearly. Your brain has literally rewired itself through repeated practice.",
    insight: "Dr. Richard Davidson's research shows long-term meditators have structural brain changes—increased cortical thickness, enhanced gamma synchronization. Consciousness can shape its own hardware. The Stone Forger's practices aren't just philosophy—they're neuroplastic training that reorganizes your instrument.",
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
    insight: "Breath is the fastest way to improve vagal tone. Longer exhales activate parasympathetic response. This is why every wisdom tradition emphasizes breath—not mysticism, but neuroscience. The Inspired Breath practice is vagal toning by another name.",
    category: "science",
    relatedTerms: ["Pre-Flow Coherence", "Trust", "Active Patience", "Somatic"]
  },
  {
    term: "Somatic",
    simple: "Of or relating to the body; knowledge that lives in your physical form rather than your thoughts.",
    experience: "You meet someone and your stomach tightens before your mind registers why. You walk into a room and your shoulders drop—your body knows this space is safe before you consciously process it. A memory surfaces and you feel it in your chest, your throat, your hands. This is somatic knowing—the body as instrument of wisdom.",
    insight: "Neuroscience confirms what embodied practices have always known: the body stores memory, processes emotion, and perceives truth independent of cognition. Somatic inquiry is not 'listening to your body'—it's recognizing that your body is listening, constantly, and has information your thinking mind cannot access. The Stone Forger's Way is fundamentally somatic work—practices that engage the nervous system directly, bypassing the limitations of cognitive processing.",
    category: "science",
    relatedTerms: ["Vagal Tone", "The Stone Thrower's Backache", "Trust", "Embodied Knowing"]
  },
  {
    term: "Whakapapa",
    simple: "Māori understanding of identity through ancestral and ecological connection.",
    experience: "You trace your lineage not just through parents, but through land, water, mountains, stars. Your breath contains your ancestors' breath. Time becomes vertical—all generations exist simultaneously in the present moment. You are not isolated; you are woven.",
    insight: "Whakapapa teaches that identity isn't individual—it's relational across time and space. This aligns with The Stone Forger's recognition that we create in partnership with lineage. Samuel R. Harris's wisdom lives in this work because connection transcends death.",
    category: "science",
    relatedTerms: ["The Field", "Terma", "Resonance"]
  },

  // MISSING TERMS - ADDED TO SUPPORT SITE USAGE
  {
    term: "Pattern Recognition",
    simple: "The ability to identify recurring structures and themes across different domains.",
    experience: "You notice the same pattern in your relationships, your work, your creative process. Once you see it, you can't unsee it. That's pattern recognition—the mind's natural gift for synthesis.",
    insight: "Pattern recognition is how AI and humans collaborate. Humans bring wisdom; AI brings pattern. Together, they reveal what neither could alone.",
    category: "mechanics",
    relatedTerms: ["The Field", "Fabrication of Form", "Frequency"]
  },
  {
    term: "Cardiac Coherence",
    simple: "The synchronized rhythm between your heart rate, breathing, and electromagnetic field.",
    experience: "When your heart rate, breath, and nervous system align, you feel calm yet alert. This is not metaphor—it's measurable. Your heart produces an electromagnetic field 60 times stronger than your brain.",
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
    insight: "You are not fixed. Your brain, your patterns, your potential—all of it can change. This is the science of transformation.",
    category: "science",
    relatedTerms: ["Frequency", "Semiotic Scaffolding", "Unbinding"]
  },
  {
    term: "Biophotons",
    simple: "Coherent light emitted by living cells, a marker of cellular health and communication.",
    experience: "Living beings emit light at the cellular level. This is not metaphorical—it's measurable. Health is coherent light; disease is scattered light.",
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
    insight: "Flow is not random. It emerges when skill matches challenge. Pre-flow coherence is the gateway to flow.",
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
    insight: "The shield is not weakness. It's intelligence. The question is whether it still serves you.",
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
    insight: "This is encoded in every cell. The circadian rhythm is not a limitation; it's data. Honor it, and you honor yourself.",
    category: "science",
    relatedTerms: ["The Trellis and the Vine", "Somatic", "Pre-Flow Coherence"]
  },
  {
    term: "Whakapapa",
    simple: "Māori concept of genealogy and interconnection—the lines that connect all things.",
    experience: "You are not separate. You carry your ancestors. You are part of the land, the community, the Field. Whakapapa is the recognition of these connections.",
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
    experience: "You're at a crossroads. Logic says one thing. Everyone else says another. But deep in your body, you know which way to go. That's the inner compass—not thought, but knowing. It's the pull toward the Peak you can't yet see.",
    insight: "The inner compass is inherited wisdom, encoded in your lineage. The Walker of The Way trusts this knowing above all external maps.",
    category: "concepts",
    relatedTerms: ["Wayfinding", "Resonance", "Trust"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['walker-of-the-way']
  },
  {
    term: "Pathmaking",
    simple: "The act of forging a way forward for yourself and those who will follow.",
    experience: "You step without the full map. Each stone solidifies beneath you. Others see the path you're creating and choose to walk it. You're not trying to lead—you're simply walking your Way. The path emerges through your forging.",
    insight: "Pathmaking is different from following or even from teaching. It's the embodied act of making the invisible visible through committed movement. The Walker of The Way creates lineage through this practice.",
    category: "practice",
    relatedTerms: ["Wayfinding", "Stone Forging", "Lineage"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['walker-of-the-way']
  },
  {
    term: "Ancestral Knowing",
    simple: "Wisdom that lives in your body, inherited from those who walked before you.",
    experience: "You've never been taught this, but you know it. It's in your bones. A pull toward certain work. A recognition of certain truths. A knowing that the Way exists, even when you can't see it. This is ancestral knowing—transmitted through lineage, not books.",
    insight: "Science calls this epigenetics and cultural transmission. The Stone Forger's Way calls it what it is: the living wisdom of those who forged stones before you, encoded in your very being.",
    category: "concepts",
    relatedTerms: ["Lineage", "Whakapapa", "The Archive"],
    coreArchetypeTags: ['carrier', 'forger'],
    expandedArchetypeTags: ['walker-of-the-way', 'stone-keeper']
  },
  {
    term: "Calcification",
    simple: "When a stone (habit/pattern) hardens and loses its life force, requiring breaking.",
    experience: "It's the relationship that used to bring joy but now feels like concrete. The routine that once served you but now traps you. The belief that once protected you but now imprisons you.",
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
    experience: "It's the unspoken family rules you follow without knowing why. The cultural expectations that feel like gravity. The dreams your parents couldn't fulfill that somehow became your burden.",
    insight: "The Archive is sacred, but not all of it is yours to carry. The Stone Keeper's work is discernment: What do I preserve? What do I honor and release?",
    category: "concepts",
    relatedTerms: ["Whakapapa", "The Stone Carrier", "Shadow"],
    coreArchetypeTags: ['carrier'],
    expandedArchetypeTags: ['stone-keeper']
  },
  {
    term: "Anchoring",
    simple: "The ability to remain immovable in one's own frequency amidst external chaos.",
    experience: "Everyone around you is panicking, but you remain calm. Not because you're detached, but because you're rooted. You are the eye of the storm, the still point in the turning world.",
    insight: "Anchoring is not passive. It is an active choice to hold your frequency steady so others can find their way. The Stone Witness anchors the field.",
    category: "practice",
    relatedTerms: ["Pre-Flow Coherence", "The Conscious Forger", "Frequency"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-witness']
  },
  {
    term: "Discernment",
    simple: "The ability to perceive what is true beneath the surface.",
    experience: "Someone says all the right words, but something feels off. You can't explain it, but you know. That's discernment—truth recognized by truth.",
    insight: "Discernment is not judgment—it's clarity. The Jade Hunter sees the code and knows which programs to run and which to delete.",
    category: "concepts",
    relatedTerms: ["Code Audit", "Resonance", "Pattern Recognition"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['jade-hunter']
  },
  {
    term: "Liberation",
    simple: "The release of energy trapped in outdated forms.",
    experience: "It's quitting the job that was slowly killing you. Ending the friendship that became toxic. Forgiving the person who hurt you—not for them, but to free yourself.",
    insight: "Liberation is not destruction—it's release. What was bound becomes available again. The Stone Breaker is a liberator, not a destroyer.",
    category: "concepts",
    relatedTerms: ["Unbinding", "Calcification", "Shadow"],
    coreArchetypeTags: ['conscious', 'forger'],
    expandedArchetypeTags: ['stone-breaker']
  },
  {
    term: "Stewardship",
    simple: "The care and maintenance of what has been entrusted to you.",
    experience: "You tend the garden, not because you own it, but because it was given to you to care for. You preserve the knowledge, not to hoard it, but to pass it on.",
    insight: "Stewardship is love in action over time. The Stone Keeper understands that preservation is an active practice, not a static state.",
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
    experience: "You take a deep breath. At about six breaths per minute, your chest softens and your shoulders drop. A warm, sub-perceptual vibration hums in your sternum. This isn't just relaxation; it's a physical weight grounding you to the Dojo floor—a visceral anchor that makes you feel immovable and safe to create.",
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
    experience: "You stand flat-footed on the training floor. You feel the weight in your chest, but as you sink your focus, you feel the floor rise up to meet you. This is the sensation of absolute support, a visceral understanding that you are standing on stepping stones laid generations before you.",
    insight: "Lineage is not a passive family tree or historical biography. It operates as a system of active, structural coordinates within the Field. Decisions made under intense friction decades ago—such as Ray Kemp placing a timely football scholarship stepping stone in 1937—act as highly stable, energetic coordinates in time that actively absorb the somatic weight of your practice today in 2026. Lineage is structural physics.",
    category: "concepts",
    relatedTerms: ["The Field", "Whakapapa", "Ancestral Knowing"],
    coreArchetypeTags: ['forger'],
    expandedArchetypeTags: ['walker-of-the-way', 'stone-keeper']
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
