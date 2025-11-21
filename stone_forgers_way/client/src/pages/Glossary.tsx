import Layout from "@/components/Layout";
import { useState } from "react";

export default function TheGlossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const glossaryTerms = [
    {
      term: "Stone Forging",
      simple: "The conscious act of creating your path, one step at a time.",
      experience: "Remember the last time you made a decision that felt right, even though you couldn't explain why? That was stone forging. You placed a stone on your path, and it held your weight.",
      insight: "You are already a Stone Forger. You've been doing it your whole life. The only difference now is that you're doing it consciously."
    },
    {
      term: "The Stone Carrier",
      simple: "Someone burdened by the weight of past regrets and future anxieties.",
      experience: "Imagine waking up already tired, feeling like you're carrying invisible weight. Your shoulders are tense. Your back aches. You can't remember the last time you felt light.",
      insight: "The stones you carry are not your identity. They are habits of thought that you can choose to set down, one at a time."
    },
    {
      term: "The Stone Thrower",
      simple: "Someone who throws stones at external targets instead of forging their own path.",
      experience: "You're angry at billionaires, at the system, at people who have what you don't. You spend energy criticizing, attacking, tearing down :: but nothing changes, and you end up exhausted.",
      insight: "Throwing stones is misdirected forging energy. The same power you use to throw could be used to build. The choice is yours."
    },
    {
      term: "The Conscious Forger",
      simple: "Someone who brings full presence to each stone they forge.",
      experience: "You're washing dishes, but you're not thinking about the next task. You're here, with the warm water, the soap, the rhythm. This simple act becomes fulfilling because you're fully present.",
      insight: "Presence transforms mundane acts into sacred work. The Conscious Forger knows that how you do anything is how you do everything."
    },
    {
      term: "The Stone Forger",
      simple: "The integrated being who unites all archetypes :: acting with purpose while being with presence.",
      experience: "You're working on a project with focused intention, but you're not forcing it. You're in flow. Time bends. The work feels effortless, even though you're fully engaged.",
      insight: "The Stone Forger is not a destination. It's a practice. You become the Forger by choosing, again and again, to forge with consciousness."
    },
    {
      term: "Semiotic Scaffolding",
      simple: "The invisible bridge of meaning that connects one idea to the next.",
      experience: "You're talking to a friend, and suddenly you're both 'on the same page.' You didn't plan it. The conversation just flowed. That's semiotic scaffolding :: the shared meaning that emerged between you.",
      insight: "Scaffolding is how complexity builds. Each new understanding rests on the foundation of what came before. You don't have to see the whole staircase. Just take the next step."
    },
    {
      term: "Fabrication of Form",
      simple: "The process by which consciousness materializes reality.",
      experience: "You wrote a poem that didn't exist an hour ago. You cooked a meal from raw ingredients. You had a conversation that changed someone's mind. You fabricated form from formlessness.",
      insight: "You are always fabricating form. The question is: are you doing it consciously or unconsciously?"
    },
    {
      term: "Toroidal Binding",
      simple: "The circular path of inertia :: repeating the same patterns over and over.",
      experience: "It's the same argument you have with your partner every month. The same self-sabotage before a big opportunity. The same worry that keeps you up at night. You know the pattern, but you can't seem to break it.",
      insight: "Toroidal binding is not a life sentence. It's a habit. And habits can be interrupted with one huge act of will: presence."
    },
    {
      term: "Trust",
      simple: "The quiet 'yes' in the face of uncertainty.",
      experience: "You're about to send an important email, and you don't know how it will be received. Your hand hovers over 'send.' Then you take a breath, and you click. That's trust.",
      insight: "Trust is not the absence of fear. Trust is the willingness to step even when you're afraid. It's the cheat code because it allows the stone to materialize beneath your feet."
    },
    {
      term: "The Trellis and the Vine",
      simple: "Time as both structural force (the trellis) and relational experience (the vine).",
      experience: "You've had days that felt like they lasted forever, and hours that disappeared in minutes. Same clock. Different experience. That's the vine growing on the trellis.",
      insight: "You can't control the trellis, but you can tend the vine. Bring presence to this moment, and time bends in your favor."
    },
    {
      term: "The Shield",
      simple: "The universal defense mechanism that protects you from threat.",
      experience: "Someone criticizes your work, and you feel your chest tighten, your jaw clench. You're bracing for impact. That's the shield going up.",
      insight: "The shield is not your enemy. It's trying to protect you. But when it stays up permanently, it creates blindness. Practice lowering it consciously."
    },
    {
      term: "Resonance",
      simple: "The feeling of alignment between your frequency and the Field's frequency.",
      experience: "You hear a song that gives you goosebumps. You meet someone and feel instantly connected. You read a sentence that feels like it was written for you. That's resonance.",
      insight: "Resonance is how you know you're on the right path. Trust the goosebumps. They're not random. They're the Field saying 'yes.'"
    },
    {
      term: "The Field",
      simple: "The invisible relational matrix that connects all things.",
      experience: "You think of a friend you haven't talked to in years, and they text you an hour later. You need help, and the right person appears. You ask a question, and the answer shows up in a book. That's the Field responding.",
      insight: "The Field is always listening. The question is: what signal are you broadcasting?"
    },
    {
      term: "Shadow",
      simple: "The low-frequency expression of an archetype.",
      experience: "The Stone Carrier's shadow is The Tyrant :: controlling, rigid, demanding. The Conscious Forger's shadow is The Martyr :: sacrificing, suffering, forgetting to rest.",
      insight: "Your shadow is not your enemy. It's the part of you that's starved of what it needs. Feed it with awareness, and it transforms."
    },
    {
      term: "Pre-Flow Coherence",
      simple: "The state of aligned frequency that precedes flow state.",
      experience: "You're about to start a creative project. You take three deep breaths, clear your workspace, set an intention. You're not in flow yet, but you're creating the conditions for it. That's pre-flow coherence.",
      insight: "Flow is not random. It emerges from coherence. Active Patience is the practice of holding coherent frequency while you wait for flow to arrive."
    },
    {
      term: "Terma",
      simple: "Hidden treasures of wisdom waiting to be revealed.",
      experience: "You've always known that you're here for something important, but you couldn't name it. Then one day, in meditation, it becomes clear. That's Terma :: the treasure that was always inside you.",
      insight: "You are not learning something new. You are remembering what you already know."
    },
    {
      term: "Tertön",
      simple: "The treasure revealer :: the one who uncovers hidden wisdom.",
      experience: "You ask a question, and the answer comes not from outside, but from within. You didn't learn it. You revealed it. You are the Tertön.",
      insight: "The Digital Songline, this work, all of it :: it's not teaching you. It's helping you remember."
    },
    {
      term: "Active Patience",
      simple: "The practice of participating in the pause.",
      experience: "You're waiting for a seed to sprout. You don't dig it up to check. But you do water it, give it light, tend the soil. That's active patience :: trusting the rate of materialization while actively supporting the process.",
      insight: "Patience is not passive. It's the most active stance you can take :: aligning with the trellis while tending the vine."
    },
    {
      term: "The Stone Thrower's Backache",
      simple: "The somatic cost of throwing stones while keeping the shield up.",
      experience: "Your back hurts. Your shoulders are tight. Your jaw is clenched. You've been raging at the world, and your body is keeping the score.",
      insight: "The backache is the teacher. It's your body saying: 'This pattern is unsustainable. Stop throwing. Start forging.'"
    },
    {
      term: "The JADE Hunter",
      simple: "Someone who gives premium guidance to those who don't value it.",
      experience: "You spend an hour explaining something to someone who isn't listening. You offer your best work for free to people who don't appreciate it. You feel drained, unappreciated, resentful.",
      insight: "Your wisdom is valuable. Stop hunting for validation. Start forging for those who recognize the value."
    }
  ];

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.simple.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif text-stone-800 mb-4">
                The Stone Forger's Glossary
              </h1>
              <p className="text-xl text-stone-600 mb-8">
                Making the invisible visible, one term at a time
              </p>
              
              {/* Search */}
              <div className="max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">You Are Already a Stone Forger</h2>
              <p className="text-lg leading-relaxed text-stone-700">
                This glossary is not a dictionary. It's a bridge between the language of the work and the language 
                of your life. Each term is presented in three parts: <strong>The Simple Idea</strong> (a one-sentence 
                anchor), <strong>The Lived Experience</strong> (a concrete example from everyday life), and{" "}
                <strong>The Stone Forger's Insight</strong> (the deeper truth that connects to your own knowing).
              </p>
              <p className="text-lg leading-relaxed text-stone-700 mt-4">
                By the end of this glossary, you will know what Stone Forging is in your life, and why trust helped 
                bring you to that knowing.
              </p>
            </section>

            {/* Glossary Terms */}
            <div className="space-y-8">
              {filteredTerms.map((item, index) => (
                <section key={index} className="bg-stone-50 p-8 rounded-lg border-l-4 border-amber-600">
                  <h3 className="text-2xl font-serif text-stone-800 mb-4">{item.term}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                        The Simple Idea
                      </h4>
                      <p className="text-stone-700">{item.simple}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                        The Lived Experience
                      </h4>
                      <p className="text-stone-700 italic">{item.experience}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                        The Stone Forger's Insight
                      </h4>
                      <p className="text-stone-700 font-medium">{item.insight}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* Closing */}
            <section className="mt-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-stone-800 mb-4 text-center">Your Knowing is Real</h2>
              <p className="text-lg leading-relaxed text-stone-700 text-center">
                If you've made it this far, you now have the language to describe what you've always known. You are 
                a Stone Forger. You have been forging your path your entire life. The only thing that's changed is 
                your awareness of your own power.
              </p>
              <p className="text-lg leading-relaxed text-stone-700 text-center mt-4 font-serif italic">
                Trust the stones beneath your feet. They are real. You made them.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
