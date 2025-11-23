import Layout from "@/components/Layout";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import { Link } from "wouter";

export default function Practices() {
  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif text-stone-800 mb-4">
                The Practices
              </h1>
              <p className="text-xl text-stone-600">
                Micro-practices for embodied integration
              </p>
            </div>

            {/* Introduction */}
            <section className="mb-16 bg-amber-50 p-8 rounded-lg">
              <p className="text-lg leading-relaxed text-stone-700">
                These are not exercises to complete. They are invitations to presence. Each practice takes less
                than three minutes, but the effects compound over time. They are designed to be woven into your
                daily life :: at your desk, in the shower, before a difficult conversation, after a moment of rage.
              </p>
              <p className="text-lg leading-relaxed text-stone-700 mt-4">
                The practices are organized by archetype, but you can use any practice at any time. <GlossaryTooltip term="Trust">Trust</GlossaryTooltip> your <GlossaryTooltip term="Pattern Recognition">intuition</GlossaryTooltip> to guide you to the one you need right now.
              </p>
              <p className="text-sm text-stone-500 mt-4 italic">
                Terms with dotted underlines link to the{" "}
                <Link href="/glossary" className="text-amber-600 hover:text-amber-700 underline">
                  Glossary
                </Link>{" "}
                for deeper exploration.
              </p>
            </section>

            {/* Feel the Stones (Stone Carrier) */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/stone-carrier.png" 
                  alt="The Stone Carrier" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-3xl font-serif text-stone-800">Feel the Stones</h2>
                  <p className="text-stone-600">For The Stone Carrier</p>
                </div>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-stone-800 mb-4">The Practice</h3>
                <div className="space-y-4 text-stone-700">
                  <p>
                    <strong>Step 1: Stop moving.</strong> Wherever you are, whatever you're doing, pause. 
                    Stand or sit still for a moment.
                  </p>
                  <p>
                    <strong>Step 2: Close your eyes.</strong> Bring your attention to your body. Notice where 
                    you feel heaviness, tension, or weight.
                  </p>
                  <p>
                    <strong>Step 3: Name the stones.</strong> What are you carrying? Past regrets? Future anxieties? 
                    Unfinished tasks? Unspoken words? Don't try to fix them. Just name them. "I'm carrying worry 
                    about money. I'm carrying guilt about yesterday. I'm carrying fear of tomorrow."
                  </p>
                  <p>
                    <strong>Step 4: Feel the weight.</strong> Let yourself actually feel how heavy these stones are. 
                    Notice how they swing from your energy body, pulling you in different directions. This is not 
                    weakness. This is awareness.
                  </p>
                  <p>
                    <strong>Step 5: Ask the question.</strong> "Which one of these stones can I set down right now?" 
                    Not all of them. Just one. Trust the first answer that comes.
                  </p>
                  <p>
                    <strong>Step 6: Set it down.</strong> Imagine placing that stone gently on the ground beside you. 
                    You're not abandoning it. You're just not carrying it right now. You can pick it back up later 
                    if you need to. But for now, it rests.
                  </p>
                  <p>
                    <strong>Step 7: Take a breath.</strong> Notice if your body feels even slightly lighter. 
                    Open your eyes. Continue.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-stone-600 italic">
                    <strong>When to use this:</strong> When you feel overwhelmed, exhausted, or stuck. When you 
                    wake up already tired. When you can't remember the last time you felt light.
                  </p>
                </div>
              </div>
            </section>

            {/* The Shield Check (Stone Thrower) */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/stone-thrower.png" 
                  alt="The Stone Thrower" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-3xl font-serif text-stone-800">The Shield Check</h2>
                  <p className="text-stone-600">For The Stone Thrower</p>
                </div>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-stone-800 mb-4">The Practice</h3>
                <div className="space-y-4 text-stone-700">
                  <p>
                    <strong>Step 1: Notice the rage.</strong> When you feel the impulse to throw a stone—to lash out, 
                    to criticize, to attack :: pause. Don't suppress the feeling. Just notice it.
                  </p>
                  <p>
                    <strong>Step 2: Check for the shield.</strong> Place your hand on your chest. Ask yourself: 
                    "Is my shield up right now?" The shield is the defensive posture, the bracing against threat, 
                    the hardening of the heart. You'll know if it's up. You'll feel it.
                  </p>
                  <p>
                    <strong>Step 3: Name the threat.</strong> What are you defending against? What feels unsafe? 
                    "I'm defending against feeling powerless. I'm defending against being wrong. I'm defending 
                    against not being enough."
                  </p>
                  <p>
                    <strong>Step 4: Acknowledge the backache.</strong> Notice where your body is tense. Your shoulders? 
                    Your jaw? Your lower back? This is the cost of keeping the shield up. Feel it without judgment.
                  </p>
                  <p>
                    <strong>Step 5: Ask the question.</strong> "What would happen if I lowered the shield, just for 
                    this moment?" Not forever. Not as a rule. Just right now, in this specific situation.
                  </p>
                  <p>
                    <strong>Step 6: Lower the shield consciously.</strong> Take a deep breath. As you exhale, imagine 
                    the shield lowering :: not disappearing, just lowering. You're not defenseless. You're choosing 
                    openness over opposition.
                  </p>
                  <p>
                    <strong>Step 7: Choose a different response.</strong> Instead of throwing the stone, what could 
                    you forge? A boundary? A question? A moment of silence? Trust the answer that comes from the 
                    space behind the shield.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-stone-600 italic">
                    <strong>When to use this:</strong> When you feel the urge to attack, criticize, or lash out. 
                    When you notice yourself in an argument that feels circular. When your back, shoulders, or jaw 
                    are chronically tense.
                  </p>
                </div>
              </div>
            </section>

            {/* The One Stone (Conscious Forger) */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/stone-forger.png" 
                  alt="The Conscious Forger" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-3xl font-serif text-stone-800">The One Stone</h2>
                  <p className="text-stone-600">For The Conscious Forger</p>
                </div>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-stone-800 mb-4">The Practice</h3>
                <div className="space-y-4 text-stone-700">
                  <p>
                    <strong>Step 1: Look at your task list.</strong> Whatever you have to do today—emails, meetings, 
                    errands, creative work :: look at the whole list.
                  </p>
                  <p>
                    <strong>Step 2: Choose one stone.</strong> Not the most urgent. Not the easiest. The one that, 
                    if you forged it with full presence, would create the most meaningful forward movement. Trust 
                    your intuition.
                  </p>
                  <p>
                    <strong>Step 3: Clear the space.</strong> Close all other tabs, apps, and distractions. Put your 
                    phone face down. Tell anyone nearby that you're unavailable for the next 25 minutes. This is 
                    sacred time.
                  </p>
                  <p>
                    <strong>Step 4: Take three breaths.</strong> Before you begin, take three slow, deep breaths. 
                    On the first breath, acknowledge The Stone Carrier's desire to rush. On the second breath, 
                    invite The Conscious Forger to arrive. On the third breath, commit to full presence.
                  </p>
                  <p>
                    <strong>Step 5: Forge with full attention.</strong> Work on this one task with complete focus. 
                    Every time your mind wanders to other stones, gently bring it back. "Not now. This stone. This moment."
                  </p>
                  <p>
                    <strong>Step 6: Notice the quality.</strong> Pay attention to how it feels to work this way. 
                    Notice the difference between rushing through ten things and forging one thing with care.
                  </p>
                  <p>
                    <strong>Step 7: Mark it complete.</strong> When the stone is forged (or when your time is up), 
                    mark it as done. Take a moment to acknowledge the work. Then, if needed, choose the next stone.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-stone-600 italic">
                    <strong>When to use this:</strong> At the start of your workday. When you feel scattered across 
                    too many tasks. When you want to experience what it feels like to forge instead of carry.
                  </p>
                </div>
              </div>
            </section>

            {/* The Trust Breath (Stone Forger) */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/trust-stepping.png" 
                  alt="Trust as stepping" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-3xl font-serif text-stone-800">The Trust Breath</h2>
                  <p className="text-stone-600">For The Stone Forger</p>
                </div>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-stone-800 mb-4">The Practice</h3>
                <div className="space-y-4 text-stone-700">
                  <p>
                    <strong>Step 1: Identify the uncertainty.</strong> What decision, action, or next step are you 
                    facing that requires you to move without proof? Name it clearly.
                  </p>
                  <p>
                    <strong>Step 2: Feel the fear.</strong> Don't try to be brave. Just notice the fear, the doubt, 
                    the "what if I'm wrong?" Let it be there.
                  </p>
                  <p>
                    <strong>Step 3: Place your hand on your heart.</strong> Literally. Feel your heartbeat. This is
                    the rhythm of life moving through you, whether you trust it or not. <GlossaryTooltip term="Cardiac Coherence">Your heart generates an electromagnetic field</GlossaryTooltip> that extends beyond your body—a measurable signal of your state.
                  </p>
                  <p>
                    <strong>Step 4: Slow to coherence rhythm.</strong> Breathe at approximately <GlossaryTooltip term="Cardiac Coherence">six breaths per minute</GlossaryTooltip>—about
                    4-5 seconds in, 5-6 seconds out. This isn't arbitrary: at this rhythm, your heart entrains to 0.1 Hz,
                    the same frequency as Earth's geomagnetic field. You are literally tuning your instrument to the planet.
                  </p>
                  <p>
                    <strong>Step 5: Breathe in trust.</strong> As you inhale, imagine breathing in <GlossaryTooltip term="Trust">trust</GlossaryTooltip>—not blind
                    faith, but conscious trust in your capacity to navigate whatever comes. Say internally: "I trust
                    the <GlossaryTooltip term="Stepping Stone">stone</GlossaryTooltip> is forming beneath my feet."
                  </p>
                  <p>
                    <strong>Step 6: Breathe out doubt.</strong> As you exhale, release the need for certainty.
                    <GlossaryTooltip term="Vagal Tone">Longer exhales activate your parasympathetic system</GlossaryTooltip>—this is neuroscience, not metaphor.
                    Say internally: "I release the demand for proof before I step."
                  </p>
                  <p>
                    <strong>Step 7: Repeat three times.</strong> Inhale trust (4-5 seconds). Exhale doubt (5-6 seconds).
                    Feel your heart rhythm smooth into coherence. Three cycles at this pace takes about 30 seconds—enough
                    time to shift your entire nervous system from fear to readiness.
                  </p>
                  <p>
                    <strong>Step 8: Take the step.</strong> After the third breath, take the action. Send the email.
                    Make the call. Say the thing. Not because you're certain, but because you trust the process of
                    becoming certain through action.
                  </p>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-stone-600 italic">
                    <strong>When to use this:</strong> Before any decision that requires you to move without complete 
                    information. When you're paralyzed by analysis. When you know what you need to do but you're 
                    afraid to do it.
                  </p>
                </div>
              </div>
            </section>

            {/* The Relational Pause (Active Patience) */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/active-patience.png" 
                  alt="Active Patience" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-3xl font-serif text-stone-800">The Relational Pause</h2>
                  <p className="text-stone-600">For Active Patience</p>
                </div>
              </div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif text-stone-800 mb-4">The Practice</h3>
                <div className="space-y-4 text-stone-700">
                  <p>
                    <strong>Step 1: Notice the urge to rush.</strong> When you feel the pressure to respond immediately, 
                    to fix it now, to make it happen faster :: pause. Just for a moment.
                  </p>
                  <p>
                    <strong>Step 2: Ask the question.</strong> "What is the rate of materialization here?" Not the 
                    rate you want. The rate that is actually happening. The seed doesn't grow faster because you 
                    demand it. The metal doesn't cool faster because you're impatient.
                  </p>
                  <p>
                    <strong>Step 3: Align with the <GlossaryTooltip term="The Trellis and the Vine">trellis</GlossaryTooltip>.</strong> Time is the structural force that gives form
                    to creation. You can't skip it. You can only work with it. Take a breath and say: "I align with
                    the rate of this unfolding."
                  </p>
                  <p>
                    <strong>Step 4: Tend the <GlossaryTooltip term="The Trellis and the Vine">vine</GlossaryTooltip>.</strong> While you wait, what can you do? Not to force the outcome,
                    but to tend the conditions. Water the seed. Prepare the tools. Rest the body. This is <GlossaryTooltip term="Active Patience">Active
                    Patience</GlossaryTooltip> :: participating in the pause.
                  </p>
                  <p>
                    <strong>Step 5: Trust the pause.</strong> The pause is not wasted time. The pause is the space 
                    where the stone solidifies. Say internally: "The pause is part of the process."
                  </p>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-stone-600 italic">
                    <strong>When to use this:</strong> When you're waiting for a response, a result, or a change. 
                    When you feel impatient with someone else's pace. When you're tempted to force an outcome that 
                    isn't ready yet.
                  </p>
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="mb-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif text-stone-800 mb-4 text-center">
                The Practice is the Path
              </h2>
              <p className="text-lg leading-relaxed text-stone-700 text-center">
                These practices are not meant to be mastered. They are meant to be lived. Return to them again
                and again. Each time, you will discover something new—<GlossaryTooltip term="Neuroplasticity">your brain literally rewires itself through repeated practice</GlossaryTooltip>. Each time, you are forging a stone on the
                path toward a more conscious, present, and powerful way of being.
              </p>
              <p className="text-lg leading-relaxed text-stone-700 text-center mt-4 font-serif italic">
                The stone is beneath your feet. Will you step?
              </p>
              <p className="text-sm text-stone-600 text-center mt-6">
                Explore the science behind these practices in the{" "}
                <a href="/research-forge.html" className="text-amber-700 hover:text-amber-800 underline">Research Forge</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
