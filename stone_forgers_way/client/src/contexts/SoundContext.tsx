import React, { createContext, useContext, useState, useEffect, useRef } from "react";

interface SoundContextType {
  isSoundActive: boolean;
  toggleSoundActive: () => void;
  playChime: (frequency?: number, mode?: "harmonic" | "dissonant") => void;
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

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Toggle sound activation and save in localStorage
  const toggleSoundActive = () => {
    setIsSoundActive((prev) => {
      const next = !prev;
      localStorage.setItem("tsfw_sound_active", String(next));
      if (!next && audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      return next;
    });
  };

  // Programmatically synthesize a warm, sustaining micro-tonal bronze chime
  const playChime = (frequency: number = 440, mode: "harmonic" | "dissonant" = "harmonic") => {
    if (!isSoundActive) return;

    try {
      // Lazy initialize AudioContext on user interaction
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Master Gain Node for smooth exponential volume decay
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, now);
      masterGain.gain.linearRampToValueAtTime(mode === "dissonant" ? 0.08 : 0.15, now + 0.005); // Fast attack
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + (mode === "dissonant" ? 1.0 : 3.0)); // Slow decay

      // Resonant Low-Pass Filter to round off harsh digital highs for a warm physical tone
      const filter = ctx.createBiquadFilterNode();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.setValueAtTime(1.5, now);

      // Carrier Oscillator (fundamental tone)
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(frequency, now);

      // Modulator Oscillator 1 (inharmonic overtone mimicking bell plates)
      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      // Mixed ratio (bell bronze inharmonic spectrum: 1.5, 2.3, 3.25)
      const ratio = mode === "dissonant" ? 1.414 : 2.312;
      osc2.frequency.setValueAtTime(frequency * ratio, now);

      // Modulator Gain (subtle blend of the overtone)
      const modGain = ctx.createGain();
      modGain.gain.setValueAtTime(mode === "dissonant" ? 0.05 : 0.03, now);

      // Sub Oscillator (deep body resonance)
      const subOsc = ctx.createOscillator();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(frequency * 0.5, now);
      
      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(mode === "dissonant" ? 0 : 0.04, now);

      // Connections
      osc1.connect(masterGain);
      
      osc2.connect(modGain);
      modGain.connect(masterGain);

      subOsc.connect(subGain);
      subGain.connect(masterGain);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // Start and Stop
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
    <SoundContext.Provider value={{ isSoundActive, toggleSoundActive, playChime }}>
      {children}
    </SoundContext.Provider>
  );
}
