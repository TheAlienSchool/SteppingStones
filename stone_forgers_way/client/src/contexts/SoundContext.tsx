import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useBrowserLocation } from "wouter/use-browser-location";

const SOMATIC_PROMPTS = [
  "Breathe in... Pivot... Merge.",
  "Rest the shoulders. Find the seat. Begin.",
  "Deep breath in... Release the weight... Stand tall.",
  "Notice the ground. Feel the weight. Carry on.",
  "Soft gaze. Deep breath. Forge ahead.",
  "Inhale present moment... Exhale history... Arrive.",
  "Receive the spark. Hold the heat. Forge.",
];

interface SoundContextType {
  isSoundActive: boolean;
  toggleSoundActive: () => void;
  playChime: (frequency?: number, mode?: "harmonic" | "dissonant") => void;
  isSteeping: boolean;
  triggerTransition: () => void;
  visibleLocation: string;
  setLocation: (to: string, options?: any) => void;
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
  const [activePrompt, setActivePrompt] = useState<string>("Breathe in... Pivot... Merge.");
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const reverbRef = useRef<{ conv: ConvolverNode; gain: GainNode } | null>(null);

  // Initialize AudioContext, Master Gain, and algorithmic convolver reverb
  const initAudio = (): AudioContext => {
    if (audioCtxRef.current) return audioCtxRef.current;

    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioCtxRef.current = ctx;

    // Master volume node
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.5, ctx.currentTime);
    master.connect(ctx.destination);
    masterGainRef.current = master;

    // Construct 3D algorithmic convolver reverb (zero external asset footprint)
    try {
      const conv = ctx.createConvolver();
      const len = ctx.sampleRate * 3.5; // 3.5 seconds decay length
      const imp = ctx.createBuffer(2, len, ctx.sampleRate);
      
      // Fill left and right channels with decaying Gaussian noise
      for (let ch = 0; ch < 2; ch++) {
        const d = imp.getChannelData(ch);
        for (let i = 0; i < len; i++) {
          d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.8);
        }
      }
      conv.buffer = imp;

      const revGain = ctx.createGain();
      revGain.gain.setValueAtTime(0.38, ctx.currentTime); // Wet blend ratio
      
      conv.connect(revGain);
      revGain.connect(master);
      reverbRef.current = { conv, gain: revGain };
    } catch (e) {
      console.warn("Algorithmic convolver reverb initialization failed:", e);
    }

    return ctx;
  };

  // Play detuned warm vibrato Sage voice for the Dojo Companion
  const playSageVoice = (ctx: AudioContext, freq: number, dur: number, vel: number, now: number) => {
    if (!masterGainRef.current) return;

    try {
      const o1 = ctx.createOscillator();
      const o2 = ctx.createOscillator();
      const lfo = ctx.createOscillator();
      const lfoG = ctx.createGain();
      const out = ctx.createGain();
      const filt = ctx.createBiquadFilter();

      o1.type = "sine";
      o2.type = "triangle";
      
      o1.frequency.setValueAtTime(freq, now);
      o2.frequency.setValueAtTime(freq * 1.003, now); // Soft analog detuning
      
      lfo.frequency.setValueAtTime(2.8, now); // Vibrato speed
      lfoG.gain.setValueAtTime(1.8, now); // Vibrato depth

      lfo.connect(lfoG);
      lfoG.connect(o1.frequency);

      filt.type = "lowpass";
      filt.frequency.setValueAtTime(freq * 2.2, now);
      filt.Q.setValueAtTime(1.2, now);

      const g1 = ctx.createGain();
      g1.gain.setValueAtTime(vel * 0.22, now);
      const g2 = ctx.createGain();
      g2.gain.setValueAtTime(vel * 0.12, now);

      o1.connect(g1);
      o2.connect(g2);
      g1.connect(filt);
      g2.connect(filt);
      filt.connect(out);

      // Amplitude envelope
      out.gain.setValueAtTime(0.001, now);
      out.gain.exponentialRampToValueAtTime(vel * 0.35, now + 0.15); // soft attack
      out.gain.setValueAtTime(vel * 0.35, now + dur * 0.5);
      out.gain.exponentialRampToValueAtTime(0.001, now + dur); // smooth release

      out.connect(masterGainRef.current);
      if (reverbRef.current) {
        out.connect(reverbRef.current.conv);
      }

      o1.start(now);
      o2.start(now);
      lfo.start(now);

      o1.stop(now + dur);
      o2.stop(now + dur);
      lfo.stop(now + dur);

      // Clean up/disconnect all nodes after they finish playing to prevent memory leaks (clogging the drain)
      setTimeout(() => {
        try {
          o1.disconnect();
          o2.disconnect();
          lfo.disconnect();
          lfoG.disconnect();
          g1.disconnect();
          g2.disconnect();
          filt.disconnect();
          out.disconnect();
        } catch (e) {}
      }, dur * 1000 + 100);
    } catch (e) {
      console.warn("Companion Sage voice synthesis failed:", e);
    }
  };

  // Helper to programmatically synthesize a warm bronze chime (responsive user FM and delayed companion echo)
  const playChime = (frequency: number = 440, mode: "harmonic" | "dissonant" = "harmonic") => {
    if (!isSoundActive) return;

    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;

      if (mode === "dissonant") {
        // Dissonant Dojo bell synthesis (warning scroll friction)
        const vel = 0.28;
        const dur = 0.6;
        
        [1, 1.414, 2.756, 4.2].forEach((r, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.frequency.setValueAtTime(frequency * r, now);
          g.gain.setValueAtTime(vel * [0.4, 0.2, 0.12, 0.08][i], now);
          g.gain.exponentialRampToValueAtTime(0.0001, now + dur * (5 - i));
          
          o.connect(g);
          g.connect(masterGainRef.current!);
          if (reverbRef.current) {
            g.connect(reverbRef.current.conv);
          }
          
          o.start(now);
          o.stop(now + dur * (5 - i));

          // Clean up/disconnect node after it finishes playing to prevent memory leaks
          setTimeout(() => {
            try {
              o.disconnect();
              g.disconnect();
            } catch (e) {}
          }, dur * (5 - i) * 1000 + 100);
        });
      } else {
        // Harmonic active User Chime (Bronze Gamelan FM Synthesis)
        const vel = 0.42;
        const dur = 0.8;

        const car = ctx.createOscillator();
        const mod = ctx.createOscillator();
        const modG = ctx.createGain();
        const out = ctx.createGain();

        car.type = "sine";
        mod.type = "triangle";

        car.frequency.setValueAtTime(frequency, now);
        mod.frequency.setValueAtTime(frequency * 1.414, now); // Inharmonic FM modulator ratio
        modG.gain.setValueAtTime(frequency * 1.2, now); // Modulator depth index

        mod.connect(modG);
        modG.connect(car.frequency); // Modulate carrier frequency directly
        car.connect(out);

        // Overtone resonance multiplier
        const p2 = ctx.createOscillator();
        const p2g = ctx.createGain();
        p2.frequency.setValueAtTime(frequency * 2.756, now);
        p2g.gain.setValueAtTime(vel * 0.15, now);
        
        p2.connect(p2g);
        p2g.connect(out);

        // Core chime amplitude envelope
        out.gain.setValueAtTime(vel * 0.65, now);
        out.gain.exponentialRampToValueAtTime(vel * 0.28, now + 0.15);
        out.gain.exponentialRampToValueAtTime(0.0001, now + dur * 4.5);

        out.connect(masterGainRef.current!);
        if (reverbRef.current) {
          out.connect(reverbRef.current.conv);
        }

        car.start(now);
        mod.start(now);
        p2.start(now);

        car.stop(now + dur * 4.5);
        mod.stop(now + dur * 4.5);
        p2.stop(now + dur * 4.5);

        // Clean up/disconnect all user chime nodes after they finish playing to prevent memory leaks
        setTimeout(() => {
          try {
            car.disconnect();
            mod.disconnect();
            modG.disconnect();
            p2.disconnect();
            p2g.disconnect();
            out.disconnect();
          } catch (e) {}
        }, dur * 4.5 * 1000 + 100);

        // ═══════════════════════════════════════════════════════════════════════════
        // THE DOJO COMPANION: Soft harmonic response echo 120ms later
        // ═══════════════════════════════════════════════════════════════════════════
        const companionDelay = 0.12; // 120ms offset
        const companionFreq = frequency * (Math.random() > 0.5 ? 1.498 : 2.0); // Perfect fifth or octave above
        playSageVoice(ctx, companionFreq, 1.2, vel * 0.35, now + companionDelay);
      }
    } catch (e) {
      console.warn("AudioContext chime synthesis failed:", e);
    }
  };

  // Toggle sound activation and SECURELY unlock AudioContext synchronously inside user-click event thread
  const toggleSoundActive = () => {
    const nextActive = !isSoundActive;
    setIsSoundActive(nextActive);
    localStorage.setItem("tsfw_sound_active", String(nextActive));
    
    if (nextActive) {
      // Synchronous, direct creation of AudioContext inside the user interaction click call stack
      try {
        const ctx = initAudio();
        if (ctx.state === "suspended") {
          ctx.resume();
        }
        // Play instant beautiful, multi-layered chime to verify the audio field is fully active
        playChime(528, "harmonic");
      } catch (e) {
        console.warn("Could not synchronously initialize AudioContext on click event:", e);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
        masterGainRef.current = null;
        reverbRef.current = null;
      }
    }
  };

  // Trigger somatic transition overlay globally (persists across unmounting layout containers)
  const triggerTransition = () => {
    const randomPrompt = SOMATIC_PROMPTS[Math.floor(Math.random() * SOMATIC_PROMPTS.length)];
    setActivePrompt(randomPrompt);
    setIsSteeping(true);
    window.scrollTo(0, 0); // Scroll to top instantly during transition
    setTimeout(() => {
      setIsSteeping(false);
    }, 1500);
  };

  const [location, setBrowserLocation] = useBrowserLocation();
  const [visibleLocation, setVisibleLocation] = useState<string>(location);
  const isTransitioning = useRef<boolean>(false);

  useEffect(() => {
    if (location !== visibleLocation && !isTransitioning.current) {
      isTransitioning.current = true;
      triggerTransition();
      
      const timer = setTimeout(() => {
        setVisibleLocation(location);
        isTransitioning.current = false;
      }, 750);
      
      return () => clearTimeout(timer);
    }
  }, [location, visibleLocation]);

  const setLocation = (to: string, options?: any) => {
    setBrowserLocation(to, options);
  };

  // Global scroll velocity soundscape monitor
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(0);
  const isScrollingFast = useRef(false);
  const chimeTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (!isSoundActive) return;

    let isThrottled = false;

    const handleScroll = () => {
      if (isThrottled) return;
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, 50);

      const currentScrollY = window.scrollY;
      const currentTime = Date.now();

      const elapsed = currentTime - lastScrollTime.current;
      const distance = Math.abs(currentScrollY - lastScrollY.current);

      if (elapsed > 10) { // Ensure a meaningful time delta
        const velocity = distance / elapsed; // px per ms

        // If scrolling extremely fast (> 2.5px/ms), flag as rapid velocity
        if (velocity > 2.5 && !isScrollingFast.current) {
          isScrollingFast.current = true;
          // Play warning dissonant chime
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
    <SoundContext.Provider value={{ isSoundActive, toggleSoundActive, playChime, isSteeping, triggerTransition, visibleLocation, setLocation }}>
      {children}
      
      {/* Global Somatic Pacing Overlay - rendered at app root to prevent remount clipping */}
      {isSteeping && (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-stone-950/98 backdrop-blur-md transition-opacity duration-500">
          <div className="flex flex-col items-center gap-6 max-w-sm text-center px-6">
            <svg className="w-20 h-20 text-amber-500 star-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 12.5 8.5 15 11C17.5 13.5 24 14 24 14C24 14 17.5 14.5 15 17C12.5 19.5 12 26 12 26C12 26 11.5 19.5 9 17C6.5 14.5 0 14 0 14C0 14 6.5 13.5 9 11C11.5 8.5 12 2 12 2Z" />
            </svg>
            <p className="text-xl font-serif text-stone-200 tracking-wide font-light">
              {activePrompt}
            </p>
            <div className="w-16 h-[1px] bg-amber-500/30 mt-2" />
          </div>
        </div>
      )}
    </SoundContext.Provider>
  );
}
