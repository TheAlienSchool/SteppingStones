import { useEffect, useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  getLatestQuizResult,
  getArchetypeName,
  getArchetypeDescription,
  getArchetypePractices,
  getQuizHistory,
  type ArchetypeType,
  type QuizResult
} from "@/lib/archetypeQuiz";
import {
  getExpandedQuizHistory,
  type ExpandedQuizResult
} from "@/lib/expandedQuiz";
import {
  getExpandedArchetype,
  getExpandedArchetypeName
} from "@/lib/expandedArchetypes";
import { useSound } from "@/contexts/SoundContext";
import SocialShare from "@/components/SocialShare";
import TodaysPractice from "@/components/TodaysPractice";
import PracticeReminder from "@/components/PracticeReminder";
import { getTodaysPractice } from "@/lib/todaysPractice";
import StoneMap from "@/components/StoneMap";
import SteamSans from "@/components/SteamSans";

export default function MyArchetype() {
  const [result, setResult] = useState<ReturnType<typeof getLatestQuizResult>>(null);
  const [history, setHistory] = useState<ReturnType<typeof getQuizHistory>>([]);
  const [expandedHistory, setExpandedHistory] = useState<ExpandedQuizResult[]>([]);
  const { playChime } = useSound();

  useEffect(() => {
    const latestResult = getLatestQuizResult();
    const allResults = getQuizHistory();
    const allExpandedResults = getExpandedQuizHistory();
    setResult(latestResult);
    setHistory(allResults);
    setExpandedHistory(allExpandedResults);
  }, []);

  if (!result) {
    return (
      <Layout>
        <SEO 
          title="Discover Your Archetype :: The Stone Forger's Way"
          description="Determine your archetype to begin your deskside somatic practice."
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <h1 className="text-4xl font-serif text-stone-800">
              <SteamSans text="Discover Your Archetype" register="harris" />
            </h1>
            <p className="text-lg text-stone-600">
              You haven't taken the archetype quiz yet. Take it now to discover which archetype you're currently inhabiting.
            </p>
            <Link href="/archetype-quiz">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Take the Quiz
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const archetypeName = getArchetypeName(result.archetype);
  const description = getArchetypeDescription(result.archetype);
  const practices = getArchetypePractices(result.archetype);
  const getSomaticFrequencyDetails = (arch: string) => {
    const details: Record<string, { freq: number; note: string; quality: string }> = {
      'carrier': { freq: 396, note: 'UT', quality: 'Grounding Weight' },
      'stone-keeper': { freq: 396, note: 'UT', quality: 'Grounding Weight' },
      'thrower': { freq: 417, note: 'RE', quality: 'Dissolving Friction' },
      'stone-breaker': { freq: 417, note: 'RE', quality: 'Dissolving Friction' },
      'conscious': { freq: 528, note: 'MI', quality: 'Transformational Presence' },
      'jade-hunter': { freq: 528, note: 'MI', quality: 'Transformational Presence' },
      'walker-of-the-way': { freq: 639, note: 'FA', quality: 'Lineage Resonance' },
      'stone-caller': { freq: 741, note: 'SOL', quality: 'Intentional Expression' },
      'stone-witness': { freq: 852, note: 'LA', quality: 'Pure Observation' },
      'forger': { freq: 1056, note: 'SI', quality: 'Crown Integration' }
    };
    return details[arch] || { freq: 528, note: 'MI', quality: 'Autonomic Balance' };
  };
  const freqDetails = getSomaticFrequencyDetails(result.archetype);

  const handlePrint = () => {
    // 1. Set the parent window title temporarily so the OS print dialog suggestions capture it
    const originalTitle = document.title;
    document.title = `Somatic Workspace Anchor - ${archetypeName}`;

    // 2. Create a hidden iframe for scoped postcard styling
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "none";
    document.body.appendChild(iframe);

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    // Set doc title too just in case
    doc.title = `Somatic Workspace Anchor - ${archetypeName}`;

    // 3. Copy all style elements and stylesheet links to maintain identical premium styling inside the iframe
    Array.from(document.head.querySelectorAll("style, link")).forEach((el) => {
      doc.head.appendChild(el.cloneNode(true));
    });

    // Copy custom page-wide body classes for styling compatibility
    doc.body.className = document.body.className;

    // 4. Find our printable element
    const postcardElement = document.getElementById("somatic-postcard-print");
    const contentToPrint = postcardElement ? postcardElement.outerHTML : "";

    // 5. Write content to iframe and trigger print
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Somatic Workspace Anchor - ${archetypeName}</title>
          <style>
            @media print {
              body {
                background: white;
                color: black;
              }
            }
          </style>
        </head>
        <body class="bg-white p-0 m-0 flex items-center justify-center min-h-screen">
          ${contentToPrint}
          <script>
            window.onload = function() {
              window.focus();
              window.print();
              setTimeout(function() {
                window.parent.document.body.removeChild(window.frameElement);
                // Restore parent title dynamically after print dialog triggers
                window.parent.document.title = ${JSON.stringify(originalTitle)};
              }, 1000);
            };
          </script>
        </body>
      </html>
    `);
    doc.close();
  };



  // Combine core and expanded histories chronologically
  const combinedHistory = history.map(core => {
    const coreTime = new Date(core.completedAt).getTime();
    const matchingExpanded = expandedHistory.find(exp => {
      const expTime = new Date(exp.completedAt).getTime();
      return Math.abs(coreTime - expTime) < 15 * 60 * 1000; // within 15 minutes
    });
    return {
      core,
      expanded: matchingExpanded
    };
  }).sort((a, b) => new Date(b.core.completedAt).getTime() - new Date(a.core.completedAt).getTime());

  const playTimelineChime = (arch: string) => {
    const frequencies: Record<string, number> = {
      'carrier': 396,
      'stone-keeper': 396,
      'thrower': 417,
      'stone-breaker': 417,
      'conscious': 528,
      'jade-hunter': 528,
      'walker-of-the-way': 639,
      'stone-caller': 741,
      'stone-witness': 852,
      'forger': 1056
    };
    const freq = frequencies[arch] || 528;
    playChime(freq);
  };

  return (
    <Layout>
      <SEO 
        title={`Your Archetype :: The Stone Forger's Way`}
        description="Your personalized archetype and deskside somatic practice card."
      />
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-5xl font-serif text-stone-800">
              <SteamSans text="Your Archetype" register="harris" />
            </h1>
            <p className="text-xl text-stone-600">
              Taken on {new Date(result.completedAt).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-serif text-amber-700">
                {archetypeName}
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed">
                {description}
              </p>
              
              {/* Dynamic SVG Stone Map of Commitment States */}
              <StoneMap archetypeId={result.archetype} />
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                <SteamSans text="Your Archetype Scores" register="harris" />
              </h3>
              <div className="space-y-4">
                {Object.entries(result.scores).map(([key, score]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-700 font-medium">
                        {getArchetypeName(key as ArchetypeType)}
                      </span>
                      <span className="text-amber-700 font-semibold">
                        {score}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-3">
                      <div
                        className="bg-amber-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                <SteamSans text="Your Practice" register="harris" />
              </h3>
              <div className="bg-amber-50 p-6 rounded-lg space-y-4">
                {practices.map((practice, i) => (
                  <p key={i} className="text-stone-700 leading-relaxed">
                    {practice}
                  </p>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                <SteamSans text="Today's Practice" register="harris" />
              </h3>
              <TodaysPractice variant="full" />
              <PracticeReminder practice={getTodaysPractice()} className="mt-4" />
            </div>

            {combinedHistory.length > 1 && (
              <div className="border-t border-stone-200 pt-8 no-print">
                <h3 className="text-2xl font-serif text-stone-800 mb-6 text-center md:text-left">
                  <SteamSans text="Your Somatic Evolution Timeline" register="harris" />
                </h3>
                
                {/* Visual Timeline Track */}
                <div className="relative border-l-2 border-dashed border-stone-200 ml-4 md:ml-6 pl-6 space-y-8 my-8">
                  {combinedHistory.map((node, index) => {
                    const isLatest = index === 0;
                    const coreArch = node.core.archetype;
                    const expArch = node.expanded?.expandedArchetype;
                    const dateStr = new Date(node.core.completedAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    });
                    
                    return (
                      <div 
                        key={node.core.completedAt} 
                        className="relative group transition-all duration-300 hover:translate-x-1"
                      >
                        {/* Timeline Circle Anchor (Hover Trigger) */}
                        <div 
                          className={`absolute -left-[35px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 shadow-md ${
                            isLatest 
                              ? 'bg-amber-600 border-amber-600 text-white scale-110 shadow-amber-500/20' 
                              : 'bg-white border-stone-400 hover:border-amber-600 text-stone-400 hover:text-amber-600'
                          }`}
                          onMouseEnter={() => playTimelineChime(expArch || coreArch)}
                          title={`Click to sound this state's coordinate`}
                          onClick={() => playTimelineChime(expArch || coreArch)}
                        >
                          {isLatest ? (
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
                            </span>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 group-hover:bg-amber-600 transition-colors" />
                          )}
                        </div>

                        {/* Timeline Card */}
                        <div className={`p-5 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
                          isLatest 
                            ? 'bg-gradient-to-r from-amber-50/50 to-white/50 border-amber-200/60 shadow-md shadow-amber-500/5' 
                            : 'bg-stone-50/60 border-stone-200/50 hover:border-stone-300'
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span className="text-xs font-mono text-stone-500 tracking-wider">
                              {dateStr}
                            </span>
                            {isLatest ? (
                              <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-amber-600 text-white px-2 py-0.5 rounded-full">
                                Active Presence Coordinate
                              </span>
                            ) : (
                              <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full">
                                Historic Training State
                              </span>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Left: Core State */}
                            <div>
                              <h4 className="text-sm font-semibold text-stone-700 uppercase tracking-wider mb-1">
                                Core Archetype
                              </h4>
                              <p className="text-lg font-serif text-stone-900 mb-2">
                                {getArchetypeName(coreArch)}
                              </p>
                              
                              {/* Small Score Bars */}
                              <div className="space-y-1 mt-2">
                                {Object.entries(node.core.scores).map(([key, score]) => (
                                  <div key={key} className="flex items-center text-xs">
                                    <span className="w-20 text-stone-500 truncate text-[10px] font-semibold">
                                      {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </span>
                                    <div className="flex-1 bg-stone-200 h-1.5 rounded-full overflow-hidden mx-2">
                                      <div 
                                        className={`h-full rounded-full ${
                                          key === coreArch ? 'bg-amber-600' : 'bg-stone-400/50'
                                        }`}
                                        style={{ width: `${score}%` }}
                                      />
                                    </div>
                                    <span className="w-8 text-right font-mono text-stone-600">
                                      {score}%
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right: Expanded State */}
                            <div className="border-t md:border-t-0 md:border-l border-stone-200/60 pt-3 md:pt-0 md:pl-4">
                              <h4 className="text-sm font-semibold text-stone-700 uppercase tracking-wider mb-1">
                                Inner Resonance
                              </h4>
                              {node.expanded ? (
                                <div>
                                  <p className="text-lg font-serif text-amber-700 mb-1">
                                    {getExpandedArchetypeName(expArch!)}
                                  </p>
                                  <p className="text-xs text-stone-600 italic line-clamp-2">
                                    "{getExpandedArchetype(expArch!).subtitle}"
                                  </p>
                                  <div className="mt-2 flex gap-2">
                                    <span className="text-[10px] font-sans bg-amber-50 text-amber-800 border border-amber-200/50 px-2 py-0.5 rounded">
                                      Gift: {getExpandedArchetype(expArch!).gift}
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <div className="h-full flex items-center">
                                  <p className="text-xs text-stone-500 italic">
                                    No Layer 2 calibration recorded for this session.
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="border-t border-stone-200 pt-8 no-print">
              <h3 className="text-2xl font-serif text-stone-800 mb-4 text-center">
                <SteamSans text="Share Your Archetype" register="harris" className="w-full text-center" />
              </h3>
              <SocialShare 
                title={`I discovered my archetype :: ${archetypeName}`}
              />
            </div>

            {/* Print Deskside Postcard Generator (The Somatic Workspace Anchor) */}
            <div className="border-t border-stone-200 pt-8 text-center no-print">
              <h3 className="text-2xl font-serif text-stone-800 mb-2">
                <SteamSans text="Somatic Workspace Anchor" register="harris" />
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                Print your archetype’s custom 4x6 deskside card. Place it on your physical desk as a quiet reminder to check your breath and choose presence in moments of daily friction.
              </p>
              <Button 
                onClick={handlePrint} 
                className="bg-stone-900 hover:bg-stone-800 text-stone-100 flex items-center gap-2 mx-auto"
                size="lg"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Deskside Postcard (4x6)
              </Button>
            </div>

            <div className="text-center pt-8 no-print">
              <Link href="/archetype-quiz">
                <Button size="lg" variant="outline" className="mr-4">
                  Retake Quiz
                </Button>
              </Link>
              <Link href="/archetypes">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Learn About Archetypes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Print-Only Postcard Element */}
      <div className="hidden print:block print:fixed print:inset-0 print:bg-white print:z-[9999] print:p-0 print:m-0">
        <div id="somatic-postcard-print" className="w-[6in] h-[4in] border border-stone-800/80 p-1 mx-auto bg-white text-stone-950 font-serif box-border relative select-none" style={{ pageBreakInside: 'avoid' }}>
          <div className="w-full h-full border border-amber-600/30 p-5 flex flex-col justify-between relative bg-stone-50/20">
            {/* Background Geometric Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] overflow-hidden select-none">
              <svg className="w-[120%] h-[120%] text-amber-800" viewBox="0 0 200 200" fill="none" stroke="currentColor">
                {/* Concentric rings */}
                <circle cx="100" cy="100" r="80" strokeWidth="0.5" strokeDasharray="2,2" />
                <circle cx="100" cy="100" r="60" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" strokeWidth="0.5" strokeDasharray="4,4" />
                {/* Alignment vectors */}
                <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.5" />
                <line x1="30" y1="30" x2="170" y2="170" strokeWidth="0.5" strokeDasharray="1,1" />
                <line x1="170" y1="30" x2="30" y2="170" strokeWidth="0.5" strokeDasharray="1,1" />
                {/* Constellation nodes */}
                <circle cx="100" cy="40" r="2" fill="currentColor" />
                <circle cx="100" cy="160" r="2" fill="currentColor" />
                <circle cx="40" cy="100" r="2" fill="currentColor" />
                <circle cx="160" cy="100" r="2" fill="currentColor" />
              </svg>
            </div>

            {/* Absolute Spatial Vector Sutures (Fine Crop Marks) */}
            <div className="absolute top-2 left-2 text-[9px] font-mono text-amber-700/35 select-none">+</div>
            <div className="absolute top-2 right-2 text-[9px] font-mono text-amber-700/35 select-none">+</div>
            <div className="absolute bottom-2 left-2 text-[9px] font-mono text-amber-700/35 select-none">+</div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-amber-700/35 select-none">+</div>

            {/* Somatic Tuning Scale Coordinate (Fine Vertical Scale) */}
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 select-none pointer-events-none text-stone-400 font-mono text-[7px] uppercase tracking-[0.2em] [writing-mode:vertical-lr]">
              <span>Coordinate :: {freqDetails.note} — {freqDetails.freq} Hz</span>
              <span className="text-[5.5px] text-amber-700/60 font-semibold">{freqDetails.quality}</span>
            </div>

            {/* Postcard Header */}
            <div className="flex justify-between items-start border-b border-stone-200/80 pb-2 relative z-10">
              <div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-stone-400 font-sans font-semibold">
                  The Stone Forger's Way
                </span>
                <h2 className="text-xl text-stone-900 font-bold leading-tight mt-0.5">
                  The <SteamSans text={archetypeName.replace("The ", "")} register="harris" className="text-xl inline font-bold" />
                </h2>
              </div>
              {/* Small Gold Star Logo */}
              <svg className="w-5 h-5 text-amber-600/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 12.5 8.5 15 11C17.5 13.5 24 14 24 14C24 14 17.5 14.5 15 17C12.5 19.5 12 26 12 26C12 26 11.5 19.5 9 17C6.5 14.5 0 14 0 14C0 14 6.5 13.5 9 11C11.5 8.5 12 2 12 2Z" />
              </svg>
            </div>

            {/* Archetype Description & Lived Sensation */}
            <div className="flex-1 my-3 flex flex-col justify-center relative z-10 px-4">
              <p className="text-[11px] italic text-stone-700 leading-relaxed mb-3 text-center px-6 relative">
                <span className="text-lg font-serif text-amber-600/30 absolute -left-1 -top-2">“</span>
                {description}
                <span className="text-lg font-serif text-amber-600/30 absolute -right-1 bottom-0">”</span>
              </p>
              <div className="bg-stone-50/70 backdrop-blur-sm border-l border-amber-600 p-2.5 shadow-sm rounded-r">
                <h4 className="text-[8px] font-bold uppercase tracking-widest text-stone-800 mb-1">
                  Active Presence Practice:
                </h4>
                <p className="text-[9.5px] text-stone-600 leading-snug">
                  {practices[0] || "Feel the stones: Pause, check your breath, and decide if this obligation is yours to carry."}
                </p>
              </div>
            </div>

            {/* Experiential Deskside Guidance & Postcard Signatures */}
            <div className="border-t border-stone-200/80 pt-2 flex justify-between items-end relative z-10">
              <div className="max-w-[72%]">
                <h5 className="text-[8px] font-sans font-bold uppercase tracking-widest text-stone-500 mb-0.5">
                  Deskside Anchoring Guidance:
                </h5>
                <p className="text-[8px] text-stone-500 leading-normal font-sans">
                  {result.archetype.includes("carrier") && "Place this card under your monitor. When a new request arrives, look at the card, take a slow breath, and ask: Is this mine to carry?"}
                  {result.archetype.includes("thrower") && "Place this card on your keyboard when taking a break. Let frustration dissolve into the paper before speaking a reaction."}
                  {result.archetype.includes("conscious") && "Keep this card flat on your desk. Stand a single physical stone on it to lock your attention onto your single active task."}
                  {!result.archetype.includes("carrier") && !result.archetype.includes("thrower") && !result.archetype.includes("conscious") && "Place this card on your desk where it catches morning light. Step forward with trust, knowing the path solidifies beneath you as you step."}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-mono text-stone-400 uppercase tracking-widest">
                  "Trust is the cheat code"
                </p>
                <p className="text-[6px] font-sans uppercase tracking-[0.15em] text-amber-700/60 font-bold mt-0.5">
                  The Stone Forger's Way
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
