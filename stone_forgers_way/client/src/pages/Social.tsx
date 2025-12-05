import { useState } from "react";
import Layout from "@/components/Layout";
import SocialCard from "@/components/SocialCard";
import SEO from "@/components/SEO";
import { Sun, Moon, Share2 } from "lucide-react";
import html2canvas from "html2canvas";

type ThemeMode = "light" | "dark";

export default function Social() {
  const [theme, setTheme] = useState<ThemeMode>("light");

  const handleDownload = async (id: string, format: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: null,
        scale: 2, // Higher quality
        logging: false
      });

      const link = document.createElement("a");
      link.download = `tsfw-${id}-${format}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <Layout>
      <SEO
        title="Social Content :: The Stone Forger's Way"
        description="Shareable content from The Stone Forger's Way. Download and share wisdom, practices, and insights across your social channels."
        type="website"
      />

      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Share2 className="w-4 h-4" />
                Content Arsenal
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                Share the Way
              </h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Your repository of shareable wisdom. 30+ cards optimized for social media—
                screengrab and share what resonates, or download high-quality images for your posts.
              </p>

              {/* Theme Toggle */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <span className="text-sm text-stone-600">Preview Theme:</span>
                <div className="inline-flex rounded-lg border border-stone-200 p-1 bg-white">
                  <button
                    onClick={() => setTheme("light")}
                    className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                      theme === "light" ? "bg-amber-100 text-amber-700" : "text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <Sun className="w-4 h-4" />
                    Light
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                      theme === "dark" ? "bg-stone-800 text-stone-100" : "text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <Moon className="w-4 h-4" />
                    Dark
                  </button>
                </div>
              </div>
            </div>

            {/* Quote Cards Section */}
            <section className="mb-20">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-stone-800 mb-3">Quote Cards</h2>
                <p className="text-stone-600">
                  Powerful insights and wisdom from The Stone Forger's Way · 10 cards
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SocialCard
                  id="quote-stepping-stone"
                  title="The Stepping Stone"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        "The stone is not there before you step.
                      </p>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        It solidifies as you step."
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-trust"
                  title="Trust as Technology"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        "Trust is not faith in the outcome.
                      </p>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        Trust is clarity in the step."
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-backache"
                  title="The Stone Thrower's Teaching"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        "The backache is the teacher.
                      </p>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        Stop throwing. Start forging."
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-candle"
                  title="Light a Candle"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        "It's better to light a candle
                      </p>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        than to curse the darkness."
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-somatic"
                  title="Somatic Revelation"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        "This is not intellectual work.
                      </p>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        This is somatic revelation."
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-field"
                  title="The Field"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        "You don't create in a vacuum.
                      </p>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        You create in The Field."
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-trust-cheat-code"
                  title="Trust is The Cheat Code"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-xl md:text-2xl font-serif leading-tight">
                        "Trust is the cheat code because it bypasses the tyranny of the rational mind
                      </p>
                      <p className="text-xl md:text-2xl font-serif leading-tight">
                        that demands proof before it will move."
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-backache-somatic"
                  title="The Somatic Cost"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        "The backache is the somatic cost of throwing stones while keeping the shield up.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The sympathetic nervous system in chronic activation."
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-breath-word"
                  title="Breath Made Word"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        "This is not intellectual work.
                      </p>
                      <p className="text-2xl md:text-3xl font-serif leading-tight">
                        This is breath made word."
                      </p>
                    </>
                  }
                />
              </div>
            </section>

            {/* Glossary Cards Section */}
            <section className="mb-20">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-stone-800 mb-3">Glossary Cards</h2>
                <p className="text-stone-600">
                  Core concepts and definitions from The Stone Forger's Way
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SocialCard
                  id="glossary-stone-forging"
                  title="Stone Forging"
                  format="square"
                  theme={theme}
                  category="glossary"
                  onDownload={handleDownload}
                  content={
                    <>
                      <h3 className="text-2xl font-serif mb-4">Stone Forging</h3>
                      <p className="text-lg leading-relaxed">
                        The conscious act of creating your path through life.
                      </p>
                      <p className="text-sm mt-4 opacity-80">
                        You are not just walking a path; you are materializing the path as you walk.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="glossary-trust"
                  title="Trust"
                  format="square"
                  theme={theme}
                  category="glossary"
                  onDownload={handleDownload}
                  content={
                    <>
                      <h3 className="text-2xl font-serif mb-4">Trust</h3>
                      <p className="text-lg leading-relaxed">
                        Not belief that things will work out, but clarity that you can handle whatever comes.
                      </p>
                      <p className="text-sm mt-4 opacity-80">
                        Trust is your operating system, not your outcome.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="glossary-somatic"
                  title="Somatic"
                  format="square"
                  theme={theme}
                  category="glossary"
                  onDownload={handleDownload}
                  content={
                    <>
                      <h3 className="text-2xl font-serif mb-4">Somatic</h3>
                      <p className="text-lg leading-relaxed">
                        Knowledge that lives in your physical form rather than your thoughts.
                      </p>
                      <p className="text-sm mt-4 opacity-80">
                        The body is listening, constantly, with information your mind cannot access.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="glossary-stepping-stone"
                  title="Stepping Stone"
                  format="square"
                  theme={theme}
                  category="glossary"
                  onDownload={handleDownload}
                  content={
                    <>
                      <h3 className="text-2xl font-serif mb-4">Stepping Stone</h3>
                      <p className="text-lg leading-relaxed">
                        A single, solid step on your path that appears as you move forward.
                      </p>
                      <p className="text-sm mt-4 opacity-80">
                        The stone solidifies as you step. Your commitment makes it real.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="glossary-field"
                  title="The Field"
                  format="square"
                  theme={theme}
                  category="glossary"
                  onDownload={handleDownload}
                  content={
                    <>
                      <h3 className="text-2xl font-serif mb-4">The Field</h3>
                      <p className="text-lg leading-relaxed">
                        The energetic environment in which all creation occurs.
                      </p>
                      <p className="text-sm mt-4 opacity-80">
                        You don't create in isolation. The Field is always listening.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="glossary-active-patience"
                  title="Active Patience"
                  format="square"
                  theme={theme}
                  category="glossary"
                  onDownload={handleDownload}
                  content={
                    <>
                      <h3 className="text-2xl font-serif mb-4">Active Patience</h3>
                      <p className="text-lg leading-relaxed">
                        Patience with momentum. Waiting while moving.
                      </p>
                      <p className="text-sm mt-4 opacity-80">
                        Not passive waiting, but engaged presence during emergence.
                      </p>
                    </>
                  }
                />
              </div>
            </section>

            {/* Practice Cards Section */}
            <section className="mb-20">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-stone-800 mb-3">Practice Cards</h2>
                <p className="text-stone-600">
                  Actionable practices you can share and guide others through
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <SocialCard
                  id="practice-one-stone"
                  title="The One Stone Practice"
                  format="landscape"
                  theme={theme}
                  category="practice"
                  onDownload={handleDownload}
                  content={
                    <div className="text-left space-y-3 w-full">
                      <h3 className="text-2xl font-serif mb-4 text-center">The One Stone</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>1.</strong> Close your eyes. Take three breaths.</p>
                        <p><strong>2.</strong> Ask: "What is the one stone I need to forge right now?"</p>
                        <p><strong>3.</strong> Notice what surfaces. Don't judge it.</p>
                        <p><strong>4.</strong> Name it clearly.</p>
                        <p><strong>5.</strong> Take one step toward forging that stone today.</p>
                      </div>
                      <p className="text-xs text-center mt-4 opacity-70 italic">
                        Not the hundred stones. The one stone.
                      </p>
                    </div>
                  }
                />

                <SocialCard
                  id="practice-trust-breath"
                  title="The Trust Breath"
                  format="landscape"
                  theme={theme}
                  category="practice"
                  onDownload={handleDownload}
                  content={
                    <div className="text-left space-y-3 w-full">
                      <h3 className="text-2xl font-serif mb-4 text-center">The Trust Breath</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>1.</strong> Breathe in for 4 counts through your nose.</p>
                        <p><strong>2.</strong> Hold for 4 counts.</p>
                        <p><strong>3.</strong> Breathe out for 6 counts through your mouth.</p>
                        <p><strong>4.</strong> As you exhale, release one thing you're trying to control.</p>
                        <p><strong>5.</strong> Repeat 3-5 times.</p>
                      </div>
                      <p className="text-xs text-center mt-4 opacity-70 italic">
                        Trust begins in the breath.
                      </p>
                    </div>
                  }
                />

                <SocialCard
                  id="practice-silent-check"
                  title="The Silent Check"
                  format="landscape"
                  theme={theme}
                  category="practice"
                  onDownload={handleDownload}
                  content={
                    <div className="text-left space-y-3 w-full">
                      <h3 className="text-2xl font-serif mb-4 text-center">The Silent Check</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>1.</strong> Pause what you're doing.</p>
                        <p><strong>2.</strong> Close your eyes for 30 seconds.</p>
                        <p><strong>3.</strong> Notice: What am I feeling right now?</p>
                        <p><strong>4.</strong> Don't change it. Just see it.</p>
                        <p><strong>5.</strong> Open your eyes. Continue with awareness.</p>
                      </div>
                      <p className="text-xs text-center mt-4 opacity-70 italic">
                        Consciousness before action.
                      </p>
                    </div>
                  }
                />

                <SocialCard
                  id="practice-shield-check"
                  title="The Shield Check"
                  format="landscape"
                  theme={theme}
                  category="practice"
                  onDownload={handleDownload}
                  content={
                    <div className="text-left space-y-3 w-full">
                      <h3 className="text-2xl font-serif mb-4 text-center">The Shield Check</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>1.</strong> Notice when you're about to react defensively.</p>
                        <p><strong>2.</strong> Pause. Ask: "Is my shield up?"</p>
                        <p><strong>3.</strong> Take three breaths.</p>
                        <p><strong>4.</strong> Lower the shield consciously.</p>
                        <p><strong>5.</strong> Respond from purpose, not protection.</p>
                      </div>
                      <p className="text-xs text-center mt-4 opacity-70 italic">
                        The shield keeps you safe and blind. Lower it to see.
                      </p>
                    </div>
                  }
                />
              </div>
            </section>

            {/* Archetype Cards Section */}
            <section className="mb-20">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-stone-800 mb-3">Archetype Cards</h2>
                <p className="text-stone-600">
                  The four archetypal states of consciousness in The Stone Forger's Way
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <SocialCard
                  id="archetype-stone-carrier"
                  title="The Stone Carrier"
                  format="square"
                  theme={theme}
                  category="archetype"
                  onDownload={handleDownload}
                  content={
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif">The Stone Carrier</h3>
                      <p className="text-lg leading-relaxed">
                        Weighted by unexamined burdens. Aware enough to feel the stones, not yet ready to set them down.
                      </p>
                      <p className="text-sm opacity-80">
                        Practice: Feel the Stones
                      </p>
                    </div>
                  }
                />

                <SocialCard
                  id="archetype-stone-thrower"
                  title="The Stone Thrower"
                  format="square"
                  theme={theme}
                  category="archetype"
                  onDownload={handleDownload}
                  content={
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif">The Stone Thrower</h3>
                      <p className="text-lg leading-relaxed">
                        Exhausted by misdirected energy. Throwing stones at external targets while the shield stays up.
                      </p>
                      <p className="text-sm opacity-80">
                        Practice: The Shield Check
                      </p>
                    </div>
                  }
                />

                <SocialCard
                  id="archetype-conscious-forger"
                  title="The Conscious Forger"
                  format="square"
                  theme={theme}
                  category="archetype"
                  onDownload={handleDownload}
                  content={
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif">The Conscious Forger</h3>
                      <p className="text-lg leading-relaxed">
                        Actively creating your path. Each step intentional, each stone forged with purpose.
                      </p>
                      <p className="text-sm opacity-80">
                        Practice: The One Stone
                      </p>
                    </div>
                  }
                />

                <SocialCard
                  id="archetype-patient-forger"
                  title="The Patient Forger"
                  format="square"
                  theme={theme}
                  category="archetype"
                  onDownload={handleDownload}
                  content={
                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif">The Patient Forger</h3>
                      <p className="text-lg leading-relaxed">
                        Trusting the process. Waiting while moving, patient while present, allowing emergence.
                      </p>
                      <p className="text-sm opacity-80">
                        Practice: Active Patience
                      </p>
                    </div>
                  }
                />
              </div>
            </section>

            {/* Reflection Highlights Section */}
            <section className="mb-20">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-stone-800 mb-3">Reflection Highlights</h2>
                <p className="text-stone-600">
                  Key insights from reflections that deserve to be shared
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SocialCard
                  id="reflection-money-teacher"
                  title="Money as Teacher"
                  format="square"
                  theme={theme}
                  category="reflection"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-xl md:text-2xl font-serif leading-tight mb-4">
                        "Money reveals where you don't trust yourself."
                      </p>
                      <p className="text-sm opacity-80">
                        From: Money as Teacher
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="reflection-whales-song"
                  title="The Whale's Song"
                  format="square"
                  theme={theme}
                  category="reflection"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-xl md:text-2xl font-serif leading-tight mb-4">
                        "The whale doesn't sing because it has an audience. It sings because that's what whales do."
                      </p>
                      <p className="text-sm opacity-80">
                        From: The Whale's Song
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="reflection-terma"
                  title="Terma in Action"
                  format="square"
                  theme={theme}
                  category="reflection"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-xl md:text-2xl font-serif leading-tight mb-4">
                        "What you need is already inside you, waiting for the right moment to be discovered."
                      </p>
                      <p className="text-sm opacity-80">
                        From: Terma in Action
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="reflection-grace"
                  title="The Gift of Grace"
                  format="square"
                  theme={theme}
                  category="reflection"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-xl md:text-2xl font-serif leading-tight mb-4">
                        "Grace is what happens when you stop fighting the river and learn to navigate it."
                      </p>
                      <p className="text-sm opacity-80">
                        From: The Gift of Grace
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="reflection-creative-fortress"
                  title="The Creative Fortress"
                  format="square"
                  theme={theme}
                  category="reflection"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-xl md:text-2xl font-serif leading-tight mb-4">
                        "Your creative practice needs protection, not from the world, but from your own patterns."
                      </p>
                      <p className="text-sm opacity-80">
                        From: The Creative Fortress
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="reflection-container"
                  title="The Container"
                  format="square"
                  theme={theme}
                  category="reflection"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-xl md:text-2xl font-serif leading-tight mb-4">
                        "You provided space and runway for wisdom to flow. The container shapes what emerges."
                      </p>
                      <p className="text-sm opacity-80">
                        From: The Container
                      </p>
                    </>
                  }
                />
              </div>
            </section>

            {/* Usage Guide */}
            <section className="bg-amber-50 rounded-xl p-8 mt-16">
              <h2 className="text-2xl font-serif text-stone-800 mb-4">How to Use</h2>
              <div className="grid md:grid-cols-2 gap-6 text-stone-700">
                <div>
                  <h3 className="font-semibold mb-2">📱 Mobile Screengrab</h3>
                  <p className="text-sm">
                    Open this page on your phone, find a card that resonates, take a screenshot.
                    Perfect for quick Instagram stories or posts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">💾 Download High Quality</h3>
                  <p className="text-sm">
                    Use the "Save" button to download a high-resolution PNG.
                    Great for scheduled posts and professional sharing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">🔗 Share Direct Links</h3>
                  <p className="text-sm">
                    Click the link icon to copy a URL to any specific card.
                    Share directly to drive traffic back to the site.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">🌗 Choose Your Vibe</h3>
                  <p className="text-sm">
                    Toggle between light and dark themes to match your feed aesthetic or
                    create visual variety across posts.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
}
