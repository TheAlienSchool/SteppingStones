import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import { useSound } from "@/contexts/SoundContext";

export default function SamuelRHarris() {
  const { playWhakapapaChord, play1937Suture } = useSound();

  const AncestralName = ({ name, index }: { name: string; index: number }) => {
    return (
      <span
        onMouseEnter={() => playWhakapapaChord && playWhakapapaChord(index)}
        onClick={() => playWhakapapaChord && playWhakapapaChord(index)}
        className="cursor-pointer border-b border-dotted border-amber-600/50 hover:border-amber-600 text-stone-850 hover:text-stone-950 font-semibold transition-colors duration-200"
        title="Somatic Lineage Coordinate"
      >
        {name}
      </span>
    );
  };

  return (
    <Layout>
      <SEO
        title="Samuel R. Harris :: Legacy & Life :: The Stone Forger's Way"
        description="Read the biographical retrospective, chemistry insights, and story of the disappearance of Samuel R. Harris."
      />
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4 leading-tight">
                Samuel R. Harris
              </h1>
              <p className="text-xl text-stone-600">
                1916–1977 · Research Chemist, Educator, Community Light Bearer
              </p>
              <p className="text-lg text-stone-500 italic mt-4">
                "It is better to light a candle than to curse the darkness."
              </p>
              <p className="text-sm text-stone-400 mt-2">
                — Reverend William L. Watkinson (1907), remixed by Samuel R. Harris
              </p>
            </div>

            {/* Family Photo Gallery */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/kamau-with-speech.jpeg"
                    alt="Kamau Zuberi Akabueze holding his grandfather's speech from May 1976"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">Kamau holding the speech, 2022</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/samuel-newspaper.jpeg"
                    alt="Newspaper clipping: Samuel R. Harris, Miner With a Mind, Enjoys Research Chemist Job"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">The newspaper article and the speech</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/family-photos.jpeg"
                    alt="Family photographs including young Kamau and Samuel R. Harris"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">Generations: Samuel, his family, and young Kamau</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/sermon-notes.jpeg"
                    alt="Handwritten sermon notes on God as love, hope, courage, good will, and peace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">Sermon notes: "God is love, hope, courage, good will, peace"</p>
                  </div>
                </div>
              </div>
            </section>

            {/* The Quantum Poetry */}
            <section className="mb-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6 leading-tight">
                Quantum Poetry in <GlossaryTooltip term="Whakapapa">Ancestral Motion</GlossaryTooltip>
              </h2>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-stone-700">
  Samuel R. Harris was a research chemist who understood combustion, light, and energy 
                  at the molecular level.
</p>
<p className="text-lg leading-relaxed text-stone-700">
  When he chose to live by the principle "It is better to light 
                  a candle than to curse the darkness," he knew what it meant to light a candle. He knew 
                  the chemistry of illumination.
</p>
                <p className="text-lg leading-relaxed text-stone-700">
  But his remix went deeper. He spoke of <strong>"the irresistible nature of one solitary 
                  life, lit up by love."</strong> Not just a candle.
</p>
<p className="text-lg leading-relaxed text-stone-700">
  A life. Not just <GlossaryTooltip term="Biophotons">light</GlossaryTooltip>.
</p>
<p className="text-lg leading-relaxed text-stone-700">
  Love. This is
                  quantum poetry :: the recognition that a single conscious being, aligned with love, creates
                  a <GlossaryTooltip term="The Field">field effect</GlossaryTooltip> that cannot be resisted.
</p>
                <p className="text-lg leading-relaxed text-stone-700">
  In 2022, Samuel's daughter Janis handed his grandson Kamau an envelope containing this
                  speech. That same year, Kamau launched THE ÅLïEN SCõÖL for Creative Thinking.
</p>
<p className="text-lg leading-relaxed text-stone-700">
  The treasure revealed itself when the Tertön 
                  was ready to receive it.
</p>
              </div>
            </section>

            {/* Early Life */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6 leading-tight">
                From the Coal Mines to the Laboratory
              </h2>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-stone-700">
  Samuel R. Harris was born in 1916 in Esmont, Virginia.
</p>
<p className="text-lg leading-relaxed text-stone-700">
  His father worked in the mines. The expectation was that Samuel would 
                  follow the same path :: loading coal, breathing dust, living the hard life of a miner's son.
</p>
                <p className="text-lg leading-relaxed text-stone-700">
                  But in the summer of 1937, everything changed.
                </p>
              </div>
            </section>

            {/* Ray Kemp: The Invisible Bridge */}
            <section className="mb-16 bg-white border-l-4 border-amber-600 p-8">
              <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6 leading-tight">
                Ray Kemp: The Invisible Bridge
              </h2>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-stone-700">
                  <strong><AncestralName name="Raymond Howard Kemp" index={0} /></strong> (1907–2002) was a legend. Born in Cecil, Pennsylvania, he worked in the coal mines for a year before enrolling at Duquesne University, where he became an All-American football player. In 1933, he became one of the first Black players in the NFL, playing for the Pittsburgh Pirates (later the Steelers).
                </p>

                <p className="text-lg leading-relaxed text-stone-700">
                  By 1937, <AncestralName name="Ray" index={0} /> was the head coach of football, basketball, and track at Lincoln University in Jefferson City, Missouri. That summer, while vacationing at his family home near McDonald, Pennsylvania, <AncestralName name="Ray" index={0} /> met <AncestralName name="Samuel R. Harris" index={1} />.
                </p>

                <p className="text-lg leading-relaxed text-stone-700">
                  After "a rather rough game of touch football," <AncestralName name="Ray" index={0} /> offered <AncestralName name="Samuel" index={1} /> an athletic scholarship to play football at Lincoln. This was the moment. The invisible bridge materialized beneath <AncestralName name="Samuel" index={1} />'s feet. <AncestralName name="Ray Kemp" index={0} /> saw something in <AncestralName name="Samuel" index={1} /> that day—potential, determination, intelligence—and offered him a path out of the mines.
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  <AncestralName name="Samuel" index={1} /> accepted. He left the coal mines and went to college.
                </p>
              </div>
            </section>

            {/* The 1937 Vector Somatic Practice */}
            <section className="mb-16 bg-stone-950 text-stone-100 p-8 rounded-lg border border-amber-500/20 shadow-2xl relative overflow-hidden">
              {/* Grainy background grid lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-mono rounded-full border border-amber-500/30">
                    Active Practice :: The 1937 Vector
                  </span>
                  {/* Four-point star indicator */}
                  <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 2 12.5 8.5 15 11C17.5 13.5 24 14 24 14C24 14 17.5 14.5 15 17C12.5 19.5 12 26 12 26C12 26 11.5 19.5 9 17C6.5 14.5 0 14 0 14C0 14 6.5 13.5 9 11C11.5 8.5 12 2 12 2Z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-serif text-amber-400 mb-4">
                  Somatic Time Suture :: Grounding the Load
                </h3>

                <p className="text-stone-300 leading-relaxed mb-6 font-sans">
                  Do not stand in a void. When your creative spark feels heavy, calcified by institutional friction, 
                  you are invited to perform the ancestral grounding check. Ground your active weight today directly 
                  into the stepping stones laid in 1937.
                </p>

                <div className="bg-stone-900/60 p-6 rounded-lg border border-stone-800 mb-8 space-y-4 font-mono text-sm text-stone-300">
                  <p className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">1.</span>
                    <span>Stand flat-footed on the floor, close your eyes, and feel the physical weight in your shoulders.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">2.</span>
                    <span>Visualize this friction traveling down your spine, passing through your heels, and locking into a massive, solid bronze coordinate laid precisely in 1937.</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">3.</span>
                    <span>Prepare your voice. Press the sensor below to activate the time suture.</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <button
                    onClick={() => play1937Suture && play1937Suture()}
                    className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-stone-950 font-serif text-lg font-bold rounded-md shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98]"
                  >
                    <span>Activate Time Suture</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </button>
                  <div className="text-sm text-stone-400 italic text-center sm:text-left">
                    Requires Sound Active. Speaks directly to the somatic body.
                  </div>
                </div>
              </div>
            </section>

            {/* 141 N McDonald Street: The Sacred Nexus */}
            <section className="mb-16 bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6 leading-tight">
                141 N McDonald Street: The Sacred Nexus
              </h2>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-stone-700">
                  <AncestralName name="Ray Kemp" index={0} />'s family home was at <strong>141 N McDonald Street</strong> in McDonald, Pennsylvania. 
                  This address was also the location of the <strong>First Baptist Church of McDonald</strong>, 
                  founded in 1848 and central to the Black community.
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  Decades later, <AncestralName name="Samuel R. Harris" index={1} />'s grandson <strong><AncestralName name="Kamau Zuberi Akabueze" index={4} /></strong> (formerly Samuel Todd 
                  Harris) would attend church at this exact location with his grandmother <strong><AncestralName name="Mabel Carter Harris" index={2} /></strong>, his aunt <strong><AncestralName name="Aunt Janis" index={3} /></strong>, and his father <strong><AncestralName name="Samuel Roland Harris" index={5} /></strong>.
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  This is not coincidence. This is the Field revealing its patterns.
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  The stepping stone <AncestralName name="Ray Kemp" index={0} /> placed for <AncestralName name="Samuel" index={1} /> in 1937 became the foundation <AncestralName name="Kamau" index={4} /> stood on as a child. The invisible bridge made visible across generations.
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  <AncestralName name="Kamau" index={4} /> remembers family reunions near the church with his wonderful <strong><AncestralName name="Aunt Grace" index={6} /></strong> (Mabel's sister) and <strong>Uncle Jerry</strong>. He remembers <strong><AncestralName name="Aunt Janis" index={3} /></strong> as "the warm hug I needed growing up in a stone-faced world." The gift of Grace :: both the person and the quality :: woven into his childhood.
                </p>
              </div>
            </section>

            {/* Education & Career */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6 leading-tight">
                Education & Career
              </h2>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-stone-700">
  Samuel graduated from Lincoln University in 1942 with a B.S. in Chemistry. He married 
                  <strong> Mabel Carter</strong> on August 4, 1942.
</p>
<p className="text-lg leading-relaxed text-stone-700">
  Mabel was from McDonald, Pennsylvania, 
                  and they had met in 1936 through church-oriented functions. Her family became "as brothers 
                  and sisters" to Samuel, creating the extended "Family of Friends."
</p>
                <p className="text-lg leading-relaxed text-stone-700">
                  After serving in World War II, Samuel pursued graduate studies at the University of Pittsburgh, 
                  earning his M.S. in Chemistry in 1948. During those years (1946–1948), Mabel was "wife, mother, 
                  and wage earner" while Samuel was "student and babysitter." Their partnership was the foundation.
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
  Samuel spent his career as a research chemist at the U.S. Bureau of Mines in Pittsburgh, 
                  conducting groundbreaking research on coal chemistry, mine safety, and environmental protection.
</p>
<p className="text-lg leading-relaxed text-stone-700">
  He was the only one in his high school class of 59 to earn a Master's Degree.
</p>
                <p className="text-lg leading-relaxed text-stone-700">
                  In 1969, he received the prestigious BCR Award for his contributions to coal research.
                </p>
              </div>
            </section>

            {/* The Lineage Continues */}
            <section className="mb-16 bg-white border-l-4 border-amber-600 p-8">
              <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6 leading-tight">
                The Lineage of Light
              </h2>
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-stone-700">
                  Samuel R. Harris's philosophy: <em>"It is better to light a candle than to curse the darkness."</em>
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  His son, <strong>Samuel Roland Harris</strong>, carried the lineage through Pittsburgh, Wheeling
                  (West Virginia), Houston (Texas), Lake Charles (Louisiana), and Rock Hill (South Carolina).
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  Samuel Roland's children—<strong>Kamau Zuberi Akabueze</strong> (from his first marriage), and
                  <strong> Omar Luqmaan Harris</strong> and <strong>Sameerah Harris</strong> (from his second
                  marriage)—carry the lineage forward. They would gather together at family reunions at First
                  Baptist Church of McDonald, the same sacred ground where Ray Kemp first saw Samuel R. Harris's
                  potential.
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  In February 2025, Kamau moved to Gastonia, North Carolina to join Omar and Sameerah in a
                  family home—a powerfully creative household continuing the legacy of light.
                </p>
                <p className="text-lg leading-relaxed text-stone-700">
                  Kamau created The Stone Forger's Way—a temporal approach to intentional creation. The lineage
                  continues. The candle burns. The stones are forged.
                </p>
              </div>
            </section>

            {/* Research Forge Connection */}
            <section className="mb-16 text-center">
              <p className="text-sm text-stone-600">
                Explore the research traditions that inform The Stone Forger's Way—including the science of{" "}
                <GlossaryTooltip term="Biophotons">light emission</GlossaryTooltip>,{" "}
                <GlossaryTooltip term="Whakapapa">ancestral wisdom</GlossaryTooltip>, and the{" "}
                <GlossaryTooltip term="The Field">quantum field</GlossaryTooltip>—in the{" "}
                <a href="/research-forge.html" className="text-amber-700 hover:text-amber-800 underline">Research Forge</a>.
              </p>
            </section>

            {/* Attribution Note */}
            <section className="mb-16 bg-stone-100 p-6 rounded-lg">
              <h3 className="text-xl font-serif text-stone-800 mb-4">
                A Note on the Quote
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
  "It is better to light a candle than to curse the darkness" was first written by 
                <strong> Reverend William L. Watkinson</strong> in 1907 in his sermon "The Invincible Strategy." 
                The sermon was reprinted in a missionary periodical called "China's Millions," which is why 
                the quote is often misattributed to Confucius or labeled a Chinese proverb.
</p>
<p className="text-sm text-stone-600 leading-relaxed">
  Eleanor Roosevelt 
                became associated with it after Adlai Stevenson eulogized her in 1962, saying "she would rather 
                light a candle than curse the darkness, and her glow has warmed the world."
</p>
              <p className="text-sm text-stone-600 leading-relaxed mt-4">
  Samuel R. Harris knew the true origin and chose to live by it anyway :: not because it was ancient 
                or exotic, but because it was true.
</p>
<p className="text-sm text-stone-600 leading-relaxed mt-4">
  And he remixed it with his own wisdom about "the irresistible 
                nature of one solitary life, lit up by love."
</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
