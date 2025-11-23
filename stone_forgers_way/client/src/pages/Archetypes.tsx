import Layout from "@/components/Layout";
import ContributionInvitation from "@/components/ContributionInvitation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import GlossaryTooltip from "@/components/GlossaryTooltip";

const archetypes = [
  {
    name: "The Stone Carrier",
    image: "/stone-carrier.png",
    description: "The one who carries the weight of suspended stones",
    fullText: `The Stone Carrier is burdened by stones suspended from their energy body :: past regrets, future anxieties, unprocessed grief, inherited trauma. These stones swing chaotically, like Newton's Cradle without precision, creating exhaustion with every step.

The Stone Carrier often doesn't even know the stones are there. They just feel the weight, the backache, the chronic fatigue. They wonder why moving forward feels so hard.

The Stone Carrier is not broken. The Stone Carrier is learning. The first step is recognition: "I am carrying stones I no longer need to carry."`,
    shadow: "The Tyrant",
    shadowText: "When The Stone Carrier is starved of meaning and exhausted by the weight, they can become The Tyrant :: demanding that others carry stones too, or lashing out at those who seem to move freely.",
    practice: "Feel the Stones",
    practiceText: "Pause. Close your eyes. Scan your body. Where do you feel weight? Tension? Heaviness? Name one stone you're carrying. Just name it. You don't have to drop it yet. Just see it."
  },
  {
    name: "The Stone Thrower",
    image: "/stone-thrower.png",
    description: "The one exhausted by misdirected energy",
    fullText: `The Stone Thrower throws stones at external targets :: billionaires, systems, people who have what they don't. The stones are meant to create change, to discharge pain, to feel powerful. But the targets have shields up. The stones ricochet back. The Stone Thrower is left with a backache.

The Stone Thrower's Backache is the somatic cost of keeping the shield up while throwing stones. The body cannot sustain this posture. It breaks down.

The Stone Thrower is not wrong to see injustice. The Stone Thrower is not wrong to want accountability. But throwing stones in rage is not the same as forging stones of justice. One exhausts. The other creates.`,
    shadow: "The Victim",
    shadowText: "When The Stone Thrower realizes the stones aren't working, they can collapse into The Victim :: believing they are powerless, that nothing they do matters, that the system is too big to change.",
    practice: "The Shield Check",
    practiceText: "Notice when you're about to throw a stone (literal or metaphorical). Pause. Ask: 'Is my shield up? Am I throwing from defense or from purpose?' If the shield is up, take three breaths. Lower it consciously. Then decide: throw, or forge?"
  },
  {
    name: "The Conscious Forger",
    image: "/active-patience.png",
    description: "The one who brings presence to each stone",
    fullText: `The Conscious Forger has learned to stop throwing and start forging. They bring full presence to each stone :: each task, each conversation, each moment. They ask: "What will I do with what I have?"

The Conscious Forger practices Active Patience: the art of waiting with purpose, of pausing with presence, of holding coherent frequency even in the face of chaos.

The Conscious Forger is not perfect. They still feel the pull to rush, to throw, to carry. But they have learned to pause. To breathe. To choose.`,
    shadow: "The Martyr",
    shadowText: "When The Conscious Forger forgets to move, they can become The Martyr :: so focused on presence that they stop taking action, so committed to patience that they forget determination.",
    practice: "The One Stone",
    practiceText: "Look at your to-do list. Choose one stone. Just one. Bring your full presence to it. No multitasking. No rushing. Forge this one stone with care. When it's done, pause. Breathe. Then choose the next."
  },
  {
    name: "The Stone Forger",
    image: "/stone-forger.png",
    description: "The integrated being who consciously creates their path",
    fullText: `The Stone Forger is the integration of all the archetypes. They acknowledge The Stone Carrier's burden. They understand The Stone Thrower's rage. They embody The Conscious Forger's presence. And they move forward anyway.

The Stone Forger knows that the path materializes beneath their feet as they step. They trust the rate of materialization. They hold coherent frequency. They forge with purpose and wait with patience.

The Stone Forger is not a destination. It is a practice. It is the conscious choice, made again and again, to create rather than react, to forge rather than throw, to trust rather than force.`,
    shadow: "None",
    shadowText: "The Stone Forger has integrated the shadows. They know The Tyrant, The Victim, and The Martyr intimately. They no longer fight them. They invite them to sit by the fire and rest.",
    practice: "Name the Archetype",
    practiceText: "Throughout your day, notice which archetype is leading. 'Right now, I am The Stone Carrier.' 'Right now, I am The Stone Thrower.' No judgment. Just recognition. Then, if you choose, invite The Stone Forger to arrive."
  }
];

export default function Archetypes() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-amber-50 to-white">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-6xl font-serif text-stone-800">
                The Archetypes
              </h1>

              <p className="text-xl text-stone-600 leading-relaxed">
                We are all of these. At different times.
              </p>

              <p className="text-xl text-stone-600 leading-relaxed">
                In different moments. The goal is not to kill off the archetypes we don't like.
              </p>

              <p className="text-xl text-stone-600 leading-relaxed">
                The goal is to <GlossaryTooltip term="Pattern Recognition">recognize them</GlossaryTooltip>, have compassion for them, and consciously choose which one leads.
              </p>

              <p className="text-sm text-stone-500 italic">
                New to these concepts? Each archetype connects to deeper patterns like{" "}
                <GlossaryTooltip term="Toroidal Binding">Toroidal Binding</GlossaryTooltip>,{" "}
                <GlossaryTooltip term="Shadow">Shadow</GlossaryTooltip>, and{" "}
                <GlossaryTooltip term="Active Patience">Active Patience</GlossaryTooltip>.{" "}
                <Link href="/glossary" className="text-amber-600 hover:text-amber-700 underline">
                  Explore the Glossary
                </Link>{" "}for definitions.
              </p>

              <div className="pt-4">
                <Link href="/archetype-quiz">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6">
                    Discover Your Archetype
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {archetypes.map((archetype, index) => (
          <section 
            key={archetype.name} 
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50/30'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                  <div className="md:w-1/3">
                    <img 
                      src={archetype.image} 
                      alt={archetype.name}
                      className="w-full max-w-sm mx-auto rounded-lg shadow-xl"
                    />
                  </div>
                  
                  <div className="md:w-2/3 space-y-6">
                    <h2 className="text-4xl font-serif text-stone-800">
                      {archetype.name}
                    </h2>
                    <p className="text-lg text-amber-700 font-semibold">
                      {archetype.description}
                    </p>
                    
                    <div className="space-y-8">
                      {archetype.fullText.split('\n\n').map((para, i) => (
                        <p key={i} className="text-lg text-stone-700 leading-relaxed">{para}</p>
                      ))}
                    </div>
                    
                    {archetype.shadow !== "None" && (
                      <div className="bg-stone-100 p-6 rounded-lg border-l-4 border-stone-400">
                        <h3 className="text-xl font-semibold text-stone-800 mb-2">
                          Shadow: {archetype.shadow}
                        </h3>
                        <p className="text-stone-700">{archetype.shadowText}</p>
                      </div>
                    )}
                    
                    {archetype.shadow === "None" && (
                      <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-400">
                        <h3 className="text-xl font-semibold text-stone-800 mb-2">
                          Integration
                        </h3>
                        <p className="text-stone-700">{archetype.shadowText}</p>
                      </div>
                    )}
                    
                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">
                        Practice: {archetype.practice}
                      </h3>
                      <p className="text-stone-700">{archetype.practiceText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <p className="text-sm text-stone-600">
              Explore the behavioral science and contemplative traditions behind the archetypes in the{" "}
              <a href="/research-forge.html" className="text-amber-700 hover:text-amber-800 underline">Research Forge</a>.
            </p>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-white to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ContributionInvitation />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
