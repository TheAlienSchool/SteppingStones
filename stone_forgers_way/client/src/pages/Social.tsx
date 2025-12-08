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
    if (!element) {
      console.error("Element not found:", id);
      alert("Could not find card to download. Please refresh and try again.");
      return;
    }

    try {
      // Clone element to ensure clean render
      const clone = element.cloneNode(true) as HTMLElement;
      document.body.appendChild(clone);
      clone.style.position = "absolute";
      clone.style.left = "-9999px";
      clone.style.top = "-9999px";

      const canvas = await html2canvas(clone, {
        backgroundColor: null,
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 10000,
        width: format === "square" ? 1080 : format === "story" ? 1080 : 1200,
        height: format === "square" ? 1080 : format === "story" ? 1920 : 675
      });

      document.body.removeChild(clone);

      const link = document.createElement("a");
      link.download = `stone-forgers-way-${id}-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again or use screenshot functionality.");
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
                A Way to Share
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                Share the Way
              </h1>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Your repository of shareable wisdom. 35+ cards optimized for social media—
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
                  Powerful insights and wisdom from The Stone Forger's Way · 40 cards
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SocialCard
                  id="quote-01"
                  title="A Stone Appears"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        A Stone appears the moment attention&nbsp;gathers.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The practice begins the moment we&nbsp;notice.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Way deepens the moment we choose to shape&nbsp;it.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-02"
                  title="Overwhelm Signals"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Overwhelm often signals a cluster of unseen&nbsp;Stones.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Recognition softens the&nbsp;weight.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Presence rearranges the&nbsp;path.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-03"
                  title="Three Ways Forward"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Most reactions are just Stones thrown too&nbsp;quickly.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Most regrets are Stones carried too&nbsp;long.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Forging offers a third way&nbsp;forward.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-04"
                  title="What a Forger Is"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        A Forger is not someone with fewer&nbsp;responsibilities.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        A Forger is someone who meets each moment with structure, steadiness, and&nbsp;choice.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-05"
                  title="Mind and Stone"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The mind&nbsp;rushes.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Stone&nbsp;waits.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Way invites a pace where clarity can find&nbsp;us.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-06"
                  title="Transformation Begins"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Transformation rarely arrives through&nbsp;force.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It begins when a single Stone is held with clean&nbsp;attention.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-07"
                  title="Momentum vs Motion"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Many people confuse momentum with&nbsp;motion.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Forging teaches the&nbsp;difference.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-08"
                  title="Which is Which"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Some Stones ask to be&nbsp;released.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Some ask to be&nbsp;shaped.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Way begins with knowing which is&nbsp;which.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-09"
                  title="Trust is the Advantage"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Trust is the Forger's quiet&nbsp;advantage.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It rearranges weight, restores rhythm, and reveals the next step without&nbsp;urgency.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-10"
                  title="Naming a Stone"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        A day becomes lighter the moment a Stone receives a&nbsp;name.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-11"
                  title="Creativity Requires"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Creativity falters under unexamined&nbsp;weight.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It expands when each Stone is met as part of the&nbsp;path.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-12"
                  title="The Three Archetypes"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Carrier&nbsp;accumulates.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Thrower&nbsp;reacts.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Forger&nbsp;chooses.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Choice is where transformation&nbsp;starts.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-13"
                  title="Founders and Exhaustion"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Founders often mistake exhaustion for&nbsp;destiny.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Sometimes it is simply a cluster of Stones asking for a steadier&nbsp;hand.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-14"
                  title="Presence"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Presence is not the absence of&nbsp;chaos.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It is the ability to shape one Stone inside&nbsp;it.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-15"
                  title="Patience"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Patience is not&nbsp;delay.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It is the architecture that allows a Stone to become something&nbsp;useful.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-16"
                  title="When Clarity Feels Distant"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        If clarity feels distant, consider&nbsp;this:
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Perhaps the next Stone is asking to be felt, not&nbsp;solved.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-17"
                  title="Every Stone Carries Information"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Every Stone carries&nbsp;information.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Most people silence it with&nbsp;speed.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Forgers&nbsp;listen.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-18"
                  title="Mind Running Ahead"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        When life feels crowded, it is often the mind running ahead of the&nbsp;path.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Stones return us to what is&nbsp;real.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-19"
                  title="Meaningful Life"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        A meaningful life is seldom built in&nbsp;leaps.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It forms through quiet, deliberate&nbsp;forging.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-20"
                  title="What The Way Offers"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Way does not promise fewer&nbsp;challenges.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It offers a clearer relationship to the ones already&nbsp;here.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-21"
                  title="Courage to Examine"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Many breakthroughs begin with the courage to examine the Stone we've&nbsp;avoided.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-22"
                  title="Subtle Power"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Stone Forger's power is&nbsp;subtle:
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        We shape moments until moments begin shaping&nbsp;us.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-23"
                  title="Dissolve or Transform"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Some burdens dissolve the moment they are&nbsp;acknowledged.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Others transform the moment they are&nbsp;shaped.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Discernment is the&nbsp;bridge.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-24"
                  title="Mind and Heart"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The mind throws what the heart has not yet&nbsp;held.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Forging reunites&nbsp;them.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-25"
                  title="Singular Stone"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Creation becomes simpler when the Stone is&nbsp;singular.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Focus is a form of&nbsp;relief.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-26"
                  title="Look at the Stone"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        When the path feels disordered, look not at the horizon—
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        look at the Stone beneath your&nbsp;hand.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-27"
                  title="Chase vs Cultivate"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Most people chase&nbsp;clarity.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Forgers cultivate&nbsp;it.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-28"
                  title="The Stone Never Lies"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        A Stone never&nbsp;lies.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It reflects the truth of the moment without&nbsp;judgment.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-29"
                  title="About Relationship"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Stone Forger's Way is not about&nbsp;perfection.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It is about&nbsp;relationship.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Moment to moment. Stone to&nbsp;Stone.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-30"
                  title="Every Archetype"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-base font-serif leading-tight">
                        Every archetype carries&nbsp;wisdom.
                      </p>
                      <p className="text-base font-serif leading-tight">
                        Carrier :: deep&nbsp;sensing
                      </p>
                      <p className="text-base font-serif leading-tight">
                        Thrower :: swift&nbsp;release
                      </p>
                      <p className="text-base font-serif leading-tight">
                        Forger :: intentional&nbsp;shaping
                      </p>
                      <p className="text-base font-serif leading-tight">
                        The work is never to judge—only to&nbsp;notice.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-31"
                  title="One Stone Well"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The world feels heavy until we learn how to hold one Stone&nbsp;well.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-32"
                  title="Prepare the Conditions"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Forgers do not force&nbsp;flow.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        They prepare the conditions that allow flow to&nbsp;return.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-33"
                  title="Weight and Time"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        A Stone becomes lighter when it belongs to the&nbsp;moment.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It becomes heavier when it belongs to the&nbsp;past.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-34"
                  title="Growth and Recognition"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Growth happens&nbsp;quietly.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Recognition happens&nbsp;suddenly.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Forging happens exactly in&nbsp;between.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-35"
                  title="The Next Era"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The next era of your life may begin with a single&nbsp;sentence:
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        "I am ready to see the&nbsp;Stone."
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-36"
                  title="Discernment and Alignment"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Burnout often signals the absence of&nbsp;discernment.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Forging restores alignment between capacity and&nbsp;truth.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-37"
                  title="Asks for Honesty"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The Stone Forger's Way does not ask for&nbsp;devotion.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        It asks for&nbsp;honesty.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-38"
                  title="Clear Practice"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        A clear practice, repeated gently, becomes a&nbsp;path.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-39"
                  title="The First Three"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-base font-serif leading-tight">
                        The first Stone teaches&nbsp;awareness.
                      </p>
                      <p className="text-base font-serif leading-tight">
                        The second teaches&nbsp;patience.
                      </p>
                      <p className="text-base font-serif leading-tight">
                        The third teaches&nbsp;mastery.
                      </p>
                      <p className="text-base font-serif leading-tight">
                        The Way teaches all three at&nbsp;once.
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="quote-40"
                  title="Transformation and Rhythm"
                  format="square"
                  theme={theme}
                  category="quote"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        Some transformations arrive not with revelation but with&nbsp;rhythm.
                      </p>
                      <p className="text-lg md:text-xl font-serif leading-tight">
                        The rhythm begins when we choose the next Stone and nothing&nbsp;more.
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
                        "Money reveals where you don't trust&nbsp;yourself."
                      </p>
                      <p className="text-sm opacity-80">
                        From: Money as&nbsp;Teacher
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
                        "The whale doesn't sing because it has an audience. It sings because that's what whales&nbsp;do."
                      </p>
                      <p className="text-sm opacity-80">
                        From: The Whale's&nbsp;Song
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
                        "What you need is already inside you, waiting for the right moment to be&nbsp;discovered."
                      </p>
                      <p className="text-sm opacity-80">
                        From: Terma in&nbsp;Action
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
                        "Grace is what happens when you stop fighting the river and learn to navigate&nbsp;it."
                      </p>
                      <p className="text-sm opacity-80">
                        From: The Gift of&nbsp;Grace
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
                        "Your creative practice needs protection, not from the world, but from your own&nbsp;patterns."
                      </p>
                      <p className="text-sm opacity-80">
                        From: The Creative&nbsp;Fortress
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
                        "You provided space and runway for wisdom to flow. The container shapes what&nbsp;emerges."
                      </p>
                      <p className="text-sm opacity-80">
                        From: The&nbsp;Container
                      </p>
                    </>
                  }
                />
              </div>
            </section>

            {/* Voices from The Way Section */}
            <section className="mb-20">
              <div className="mb-8">
                <h2 className="text-3xl font-serif text-stone-800 mb-3">Voices from The Way</h2>
                <p className="text-stone-600">
                  Field reports from practitioners experiencing The Stone Forger's Way
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SocialCard
                  id="voice-trust-cheat-code"
                  title="Breakthrough Recognition"
                  format="square"
                  theme={theme}
                  category="voice"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl leading-relaxed mb-6">
                        "Trust is the cheat code because it bypasses the tyranny of the rational mind that demands proof before it will move... is an insane quote. I'm going to be thinking about that for a while."
                      </p>
                      <p className="text-sm opacity-70 italic">
                        — A Stone Thrower recognizing the teaching
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="voice-somatic-recognition"
                  title="Somatic Recognition"
                  format="square"
                  theme={theme}
                  category="voice"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl leading-relaxed mb-6">
                        "The backache is the somatic cost of throwing stones while keeping the shield up. The sympathetic nervous system in chronic activation... this really spoke to me."
                      </p>
                      <p className="text-sm opacity-70 italic">
                        — A Stone Carrier feeling the weight
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="voice-whole-book"
                  title="Making It Real"
                  format="square"
                  theme={theme}
                  category="voice"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl leading-relaxed mb-6">
                        "This feels like a whole book spread across a website. The practices and prompts make it real—it's not just philosophy floating in space."
                      </p>
                      <p className="text-sm opacity-70 italic">
                        — A Conscious Forger using the tools
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="voice-vocabulary-gold"
                  title="Precision Language"
                  format="square"
                  theme={theme}
                  category="voice"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl leading-relaxed mb-6">
                        "The color schemes and glossary tooltips are brilliant. The vocabulary you've created is gold—I've never had language for these experiences before."
                      </p>
                      <p className="text-sm opacity-70 italic">
                        — A Patient Forger appreciating the craft
                      </p>
                    </>
                  }
                />

                <SocialCard
                  id="voice-putting-down-stones"
                  title="Already Moving"
                  format="square"
                  theme={theme}
                  category="voice"
                  onDownload={handleDownload}
                  content={
                    <>
                      <p className="text-lg md:text-xl leading-relaxed mb-6">
                        "I have already started putting down stones. Not throwing them at things, not carrying them—actually forging my path forward."
                      </p>
                      <p className="text-sm opacity-70 italic">
                        — A Conscious Forger in motion
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
