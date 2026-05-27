import React, { createContext, useContext, useState, useEffect, useRef } from "react";

interface SoundContextType {
  isSoundActive: boolean;
  toggleSoundActive: () => void;
  playChime: (frequency?: number, mode?: "harmonic" | "dissonant") => void;
  isSteeping: boolean;
  triggerTransition: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isSoundActive, setIsSoundActive] = useState<boolean>(() => {
    const saved = localStorage.getItem("tsfw_sound_active");
    return saved === "true";
  });

  const [isSteeping, setIsSteeping] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Helper to programmatically synthesize a warm bronze chime (0 bytes, zero-latency offline Web Audio API)
  const playChime = (frequency: number = 440, mode: "harmonic" | "dissonant" = "harmonic") => {
    if (!isSoundActive && !audioCtxRef.current) return;

    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Master gain node with fast attack and long exponential decay
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, now);
      masterGain.gain.linearRampToValueAtTime(mode === "dissonant" ? 0.08 : 0.15, now + 0.005);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + (mode === "dissonant" ? 1.0 : 3.0));

      // Resonant Low-Pass filter to round off harsh digital highs for a warm physical tone
      const filter = ctx.createBiquadFilterNode();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.setValueAtTime(1.5, now);

      // Carrier Oscillator (fundamental frequency)
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(frequency, now);

      // Modulator Oscillator (overtone ratio for bell-bronze inharmonic spectrum)
      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      const ratio = mode === "dissonant" ? 1.414 : 2.312;
      osc2.frequency.setValueAtTime(frequency * ratio, now);

      const modGain = ctx.createGain();
      modGain.gain.setValueAtTime(mode === "dissonant" ? 0.05 : 0.03, now);

      // Sub Oscillator (deep body resonance)
      const subOsc = ctx.createOscillator();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(frequency * 0.5, now);
      
      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(mode === "dissonant" ? 0 : 0.04, now);

      // Node connection path
      osc1.connect(masterGain);
      osc2.connect(modGain);
      modGain.connect(masterGain);
      subOsc.connect(subGain);
      subGain.connect(masterGain);
      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // Start/stop timing
      osc1.start(now);
      osc2.start(now);
      subOsc.start(now);

      const duration = mode === "dissonant" ? 1.2 : 3.2;
      osc1.stop(now + duration);
      osc2.stop(now + duration);
      subOsc.stop(now + duration);
    } catch (e) {
      console.warn("AudioContext chime synthesis failed:", e);
    }
  };

  // Toggle sound activation and securely unlock AudioContext inside user-click gesture event
  const toggleSoundActive = () => {
    setIsSoundActive((prev) => {
      const next = !prev;
      localStorage.setItem("tsfw_sound_active", String(next));
      
      if (next) {
        // Initialize AudioContext directly inside click handler to satisfy browser safety constraints
        try {
          if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
          }
          if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
          }
          // Play a beautiful, instant confirmation chime (528Hz) to verify the soundscape is active
          setTimeout(() => {
            playChime(528, "harmonic");
          }, 50);
        } catch (e) {
          console.warn("Could not initialize AudioContext on activation click:", e);
        }
      } else if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      return next;
    });
  };

  // Trigger somatic transition overlay globally (persists across unmounting layout containers)
  const triggerTransition = () => {
    setIsSteeping(true);
    window.scrollTo(0, 0); // Scroll to top instantly during transition
    setTimeout(() => {
      setIsSteeping(false);
    }, 1500);
  };

  // Global scroll velocity soundscape monitor
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(0);
  const isScrollingFast = useRef(false);
  const chimeTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (!isSoundActive) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();

      const elapsed = currentTime - lastScrollTime.current;
      const distance = Math.abs(currentScrollY - lastScrollY.current);

      if (elapsed > 0) {
        const velocity = distance / elapsed; // px per ms

        // If scrolling extremely fast (> 2.5px/ms), flag as rapid velocity
        if (velocity > 2.5 && !isScrollingFast.current) {
          isScrollingFast.current = true;
          // Play warning dissonant chime (slightly higher, metallic)
          playChime(320, "dissonant");
        }

        // Debounce returning to slower scrolling/stillness
        if (chimeTimeout.current) clearTimeout(chimeTimeout.current);
        chimeTimeout.current = window.setTimeout(() => {
          if (isScrollingFast.current) {
            isScrollingFast.current = false;
            // Play deep harmonic resolving chime when slowing down or pausing
            playChime(220, "harmonic");
          }
        }, 300);
      }

      lastScrollY.current = currentScrollY;
      lastScrollTime.current = currentTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (chimeTimeout.current) clearTimeout(chimeTimeout.current);
    };
  }, [isSoundActive]);

  return (
    <SoundContext.Provider value={{ isSoundActive, toggleSoundActive, playChime, isSteeping, triggerTransition }}>
      {children}
      
      {/* Global Somatic Pacing Overlay - rendered at app root to prevent remount clipping */}
      {isSteeping && (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-stone-950/98 backdrop-blur-md transition-opacity duration-500">
          <div className="flex flex-col items-center gap-6 max-w-sm text-center px-6">
            <svg className="w-20 h-20 text-amber-500 star-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 12.5 8.5 15 11C17.5 13.5 24 14 24 14C24 14 17.5 14.5 15 17C12.5 19.5 12 26 12 26C12 26 11.5 19.5 9 17C6.5 14.5 0 14 0 14C0 14 6.5 13.5 9 11C11.5 8.5 12 2 12 2Z" />
            </svg>
            <p className="text-xl font-serif text-stone-200 tracking-wide font-light">
              Breathe in... Pivot... Merge.
            </p>
            <div className="w-16 h-[1px] bg-amber-500/30 mt-2" />
          </div>
        </div>
      )}
    </SoundContext.Provider>
  );
}
