import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useBrowserLocation } from "wouter/use-browser-location";
import SteamSans from "@/components/SteamSans";

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
  play1937Suture: () => void;
  playWhakapapaChord: (index: number) => void;
  startSingingBowl: () => void;
  stopSingingBowl: () => void;
  setBowlBreathRatio: (ratio: number) => void;
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
  const noiseBufferRef = useRef<AudioBuffer | null>(null);
  
  // Interactive Scroll Tension refs
  const scrollTensionRef = useRef<number>(0);
  const lastTensionChimeTime = useRef<number>(0);
  const lastSwishTime = useRef<number>(0);
  const lastScrollY = useRef<number>(0);
  const lastScrollTime = useRef<number>(0);
  const chimeTimeout = useRef<number | null>(null);

  // Sympathetic Resonator refs
  const sympatheticInputRef = useRef<GainNode | null>(null);
  const sympatheticFiltersRef = useRef<BiquadFilterNode[]>([]);

  // Singing Bowl refs
  const singingBowlOscsRef = useRef<OscillatorNode[]>([]);
  const singingBowlGainRef = useRef<GainNode | null>(null);
  const singingBowlFilterRef = useRef<BiquadFilterNode | null>(null);
  const singingBowlLfoRef = useRef<OscillatorNode | null>(null);

  // Initialize AudioContext, Master Gain, and algorithmic convolver reverb
  const initAudio = (): AudioContext => {
    if (audioCtxRef.current) return audioCtxRef.current;

    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioCtxRef.current = ctx;

    // Master volume node (calibrated to comfortable sub-perceptual levels)
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.4, ctx.currentTime);
    master.connect(ctx.destination);
    masterGainRef.current = master;

    // Pre-allocate white noise buffer to eliminate runtime buffer creation lag
    try {
      const bufferSize = ctx.sampleRate * 2.0;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      noiseBufferRef.current = buffer;
    } catch (e) {
      console.warn("Noise buffer pre-allocation failed:", e);
    }

    // Construct 3D algorithmic convolver reverb (zero external asset footprint)
    try {
      const conv = ctx.createConvolver();
      const len = ctx.sampleRate * 4.0; // Silky 4.0s physical chamber decay
      const imp = ctx.createBuffer(2, len, ctx.sampleRate);
      
      // Fill left and right channels with decaying Gaussian noise (exponential curve 3.2 for warm trailing reflections)
      for (let ch = 0; ch < 2; ch++) {
        const d = imp.getChannelData(ch);
        for (let i = 0; i < len; i++) {
          d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
        }
      }
      conv.buffer = imp;

      const revGain = ctx.createGain();
      revGain.gain.setValueAtTime(0.42, ctx.currentTime); // Wet blend ratio
      
      conv.connect(revGain);
      revGain.connect(master);
      reverbRef.current = { conv, gain: revGain };
    } catch (e) {
      console.warn("Algorithmic convolver reverb initialization failed:", e);
    }

    // Initialize Sympathetic Strings Resonator Bank
    try {
      const symInput = ctx.createGain();
      symInput.gain.setValueAtTime(0.20, ctx.currentTime);
      sympatheticInputRef.current = symInput;

      const scaleFrequencies = [220.00, 261.63, 329.63, 392.00, 440.00]; // A3, C4, E4, G4, A4 (A-Minor Pentatonic)
      sympatheticFiltersRef.current = scaleFrequencies.map((freq) => {
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(freq, ctx.currentTime);
        filter.Q.setValueAtTime(95.0, ctx.currentTime); // High Q for bell-like sustain
        
        symInput.connect(filter);
        filter.connect(master);
        if (reverbRef.current) {
          filter.connect(reverbRef.current.conv);
        }
        return filter;
      });
    } catch (e) {
      console.warn("Sympathetic strings initialization failed:", e);
    }

    return ctx;
  };

  // Play detuned warm vibrato Sage voice for the Dojo Companion (spatialized with form filter sweep)
  const playSageVoice = (ctx: AudioContext, freq: number, dur: number, vel: number, now: number) => {
    if (!masterGainRef.current) return;

    try {
      const o1 = ctx.createOscillator();
      const o2 = ctx.createOscillator();
      const lfo = ctx.createOscillator();
      const lfoG = ctx.createGain();
      const out = ctx.createGain();
      const filt = ctx.createBiquadFilter();

      // Spatial stereo panner for a spacious, volumetric 3D image
      let panner: StereoPannerNode | null = null;
      if (ctx.createStereoPanner) {
        panner = ctx.createStereoPanner();
        panner.pan.setValueAtTime(Math.random() * 0.8 - 0.4, now); // Soft spatial drift
      }

      o1.type = "sine";
      o2.type = "triangle"; // Warm throat overtones
      
      o1.frequency.setValueAtTime(freq, now);
      o2.frequency.setValueAtTime(freq * 1.004, now); // Pure Pythagorean micro-detuning
      
      lfo.frequency.setValueAtTime(4.5, now); // Theta autonomic vibrato (4.5Hz)
      lfoG.gain.setValueAtTime(1.5, now); // Sub-perceptual depth (1.5Hz)

      lfo.connect(lfoG);
      lfoG.connect(o1.frequency);
      lfoG.connect(o2.frequency);

      filt.type = "lowpass";
      // Natural organic vocal sweep: opens on onset, then closes as it breathes out
      filt.frequency.setValueAtTime(freq * 2.5, now);
      filt.frequency.exponentialRampToValueAtTime(freq * 1.1, now + dur);
      filt.Q.setValueAtTime(1.5, now);

      const g1 = ctx.createGain();
      g1.gain.setValueAtTime(vel * 0.24, now);
      const g2 = ctx.createGain();
      g2.gain.setValueAtTime(vel * 0.14, now);

      o1.connect(g1);
      o2.connect(g2);
      g1.connect(filt);
      g2.connect(filt);

      if (panner) {
        filt.connect(panner);
        panner.connect(out);
      } else {
        filt.connect(out);
      }

      // Smooth amplitude swell to prevent ear fatigue, followed by an exponential release
      out.gain.setValueAtTime(0.001, now);
      out.gain.exponentialRampToValueAtTime(vel * 0.38, now + 0.2); // Soft attack swell
      out.gain.setValueAtTime(vel * 0.38, now + dur * 0.4);
      out.gain.exponentialRampToValueAtTime(0.001, now + dur); // Smooth release

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

      // Clean up/disconnect all nodes to prevent memory leaks
      setTimeout(() => {
        try {
          o1.disconnect();
          o2.disconnect();
          lfo.disconnect();
          lfoG.disconnect();
          g1.disconnect();
          g2.disconnect();
          filt.disconnect();
          if (panner) panner.disconnect();
          out.disconnect();
        } catch (e) {}
      }, dur * 1000 + 150);
    } catch (e) {
      console.warn("Companion Sage voice synthesis failed:", e);
    }
  };

  // Trigger a fast impulse into the high-Q sympathetic strings bank to excite harmonic vibrations
  const triggerSympatheticImpulse = (intensity: number) => {
    if (!isSoundActive) return;
    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      if (!sympatheticInputRef.current) return;

      const now = ctx.currentTime;
      
      // Generate a microscopic impulse noise burst (6ms)
      const bufferSize = ctx.sampleRate * 0.006;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3.0);
      }
      
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(intensity * 0.22, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.006);
      
      src.connect(gainNode);
      gainNode.connect(sympatheticInputRef.current);
      src.start(now);
      
      setTimeout(() => {
        try {
          src.disconnect();
          gainNode.disconnect();
        } catch (e) {}
      }, 50);
    } catch (e) {
      console.warn("Sympathetic impulse synthesis failed:", e);
    }
  };

  // Synthesize a continuous metal singing bowl sound with low beating fundamentals and rich overtones
  const startSingingBowl = () => {
    if (!isSoundActive) return;
    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Stop existing if already running
      stopSingingBowl();

      const now = ctx.currentTime;

      // Master gain for the bowl - starts completely silent and fades in slowly (allows the human to catch up)
      const bowlGain = ctx.createGain();
      bowlGain.gain.setValueAtTime(0.0, now);
      bowlGain.gain.linearRampToValueAtTime(0.08, now + 2.5); // Warm, gentle 2.5s fade-in
      bowlGain.connect(masterGainRef.current!);
      if (reverbRef.current) {
        bowlGain.connect(reverbRef.current.conv);
      }
      singingBowlGainRef.current = bowlGain;

      // Core Lowpass Filter to shape the frequency spectrum
      const bowlFilter = ctx.createBiquadFilter();
      bowlFilter.type = "lowpass";
      bowlFilter.frequency.setValueAtTime(350, now);
      bowlFilter.Q.setValueAtTime(1.8, now);
      bowlFilter.connect(bowlGain);
      singingBowlFilterRef.current = bowlFilter;

      // Fundamental beat pair (144Hz and 144.3Hz - Solfeggio 432Hz sub-octave)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.type = "triangle";
      osc2.type = "sine";
      osc1.frequency.setValueAtTime(144.0, now);
      osc2.frequency.setValueAtTime(144.3, now); // 0.3Hz beating rate

      // Harmonic Overtones (3rd and 5th harmonics: 432Hz and 720Hz)
      const osc3 = ctx.createOscillator();
      const osc4 = ctx.createOscillator();
      osc3.type = "sine";
      osc4.type = "sine";
      osc3.frequency.setValueAtTime(432.0, now);
      osc4.frequency.setValueAtTime(720.0, now);

      // Mix individual gains for balance
      const g1 = ctx.createGain();
      const g2 = ctx.createGain();
      const g3 = ctx.createGain();
      const g4 = ctx.createGain();

      g1.gain.setValueAtTime(0.5, now);
      g2.gain.setValueAtTime(0.4, now);
      g3.gain.setValueAtTime(0.2, now);
      g4.gain.setValueAtTime(0.12, now);

      // Low-frequency amplitude modulator for swirling overtone motion (0.12Hz)
      const bowlLfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      bowlLfo.type = "sine";
      bowlLfo.frequency.setValueAtTime(0.12, now);
      lfoGain.gain.setValueAtTime(0.06, now);
      bowlLfo.connect(lfoGain);
      lfoGain.connect(g3.gain); // Swirl 432Hz
      lfoGain.connect(g4.gain); // Swirl 720Hz

      osc1.connect(g1);
      osc2.connect(g2);
      osc3.connect(g3);
      osc4.connect(g4);

      g1.connect(bowlFilter);
      g2.connect(bowlFilter);
      g3.connect(bowlFilter);
      g4.connect(bowlFilter);

      osc1.start(now);
      osc2.start(now);
      osc3.start(now);
      osc4.start(now);
      bowlLfo.start(now);

      singingBowlOscsRef.current = [osc1, osc2, osc3, osc4];
      singingBowlLfoRef.current = bowlLfo;
    } catch (e) {
      console.warn("Singing bowl start failed:", e);
    }
  };

  const stopSingingBowl = () => {
    try {
      const gainNode = singingBowlGainRef.current;
      const oscs = singingBowlOscsRef.current;
      const lfo = singingBowlLfoRef.current;

      if (!gainNode) return;

      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const now = ctx.currentTime;
      // Gentle 2.2s fade-out to let the sound fade completely
      gainNode.gain.cancelScheduledValues(now);
      gainNode.gain.setValueAtTime(gainNode.gain.value, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      setTimeout(() => {
        try {
          oscs.forEach((osc) => {
            try { osc.stop(); osc.disconnect(); } catch (e) {}
          });
          if (lfo) {
            try { lfo.stop(); lfo.disconnect(); } catch (e) {}
          }
          gainNode.disconnect();
        } catch (e) {}
      }, 2400);

      singingBowlGainRef.current = null;
      singingBowlOscsRef.current = [];
      singingBowlLfoRef.current = null;
      singingBowlFilterRef.current = null;
    } catch (e) {
      console.warn("Singing bowl stop failed:", e);
    }
  };

  // Modify singing bowl lowpass frequency & intensity relative to breath phase ratio (0.0 to 1.0)
  const setBowlBreathRatio = (ratio: number) => {
    if (!singingBowlFilterRef.current || !audioCtxRef.current) return;
    try {
      const now = audioCtxRef.current.currentTime;
      // Inhale opens the filter to 980Hz (brightening), Exhale closes to 340Hz (warming)
      const freq = 340 + ratio * 640;
      singingBowlFilterRef.current.frequency.cancelScheduledValues(now);
      singingBowlFilterRef.current.frequency.setTargetAtTime(freq, now, 0.18);

      if (singingBowlGainRef.current) {
        // Subtle volume increase during peak inhale to somaticise lung expansion
        const targetGain = 0.08 + ratio * 0.024;
        singingBowlGainRef.current.gain.cancelScheduledValues(now);
        singingBowlGainRef.current.gain.setTargetAtTime(targetGain, now, 0.2);
      }
    } catch (e) {}
  };

  // Synthesize a warm, focus-inducing bronze chime using pure Pythagorean perfect fifths and Solfeggio 528Hz harmonics
  const playChime = (frequency: number = 528, mode: "harmonic" | "dissonant" = "harmonic") => {
    if (!isSoundActive) return;

    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;

      if (mode === "dissonant") {
        // Dissonant active tension/anticipation chime (warning friction scale)
        const vel = 0.24;
        const dur = 0.75;
        
        // Pythagorean active tension intervals: 1.0 (Root), 1.0667 (Minor Second 16:15), 1.414 (Tritone), 1.8 (Minor Seventh 9:5)
        const activeTensionRatios = [1.0, 1.0667, 1.414, 1.8];
        
        activeTensionRatios.forEach((r, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          const f = ctx.createBiquadFilter();

          o.type = "sine";
          o.frequency.setValueAtTime(frequency * r, now);

          // Add a subtle vibrato representing spinning physical friction
          const vib = ctx.createOscillator();
          const vibG = ctx.createGain();
          vib.frequency.setValueAtTime(8.0, now); // Fast tension vibration
          vibG.gain.setValueAtTime(3.0, now);
          vib.connect(vibG);
          vibG.connect(o.frequency);

          f.type = "lowpass";
          f.frequency.setValueAtTime(frequency * r * 1.5, now);
          f.Q.setValueAtTime(0.8, now);

          g.gain.setValueAtTime(0.001, now);
          g.gain.exponentialRampToValueAtTime(vel * [0.35, 0.18, 0.12, 0.08][i], now + 0.02);
          g.gain.exponentialRampToValueAtTime(0.0001, now + dur * (4 - i));
          
          o.connect(f);
          f.connect(g);
          g.connect(masterGainRef.current!);
          if (reverbRef.current) {
            g.connect(reverbRef.current.conv);
          }
          
          o.start(now);
          vib.start(now);
          o.stop(now + dur * (4 - i));
          vib.stop(now + dur * (4 - i));

          setTimeout(() => {
            try {
              o.disconnect();
              vib.disconnect();
              vibG.disconnect();
              f.disconnect();
              g.disconnect();
            } catch (e) {}
          }, dur * (4 - i) * 1000 + 150);
        });
      } else {
        // Harmonic Pythagorean Bronze Gamelan Chime (528Hz Solfeggio Root)
        // Eliminates micro-beating cortex friction via pure mathematical integer ratios
        const vel = 0.38;
        const dur = 1.2;

        const car = ctx.createOscillator();
        const mod = ctx.createOscillator();
        const modG = ctx.createGain();
        const out = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        car.type = "sine";
        mod.type = "sine";

        car.frequency.setValueAtTime(frequency, now);
        // Modulator tuned to pure Pythagorean fifth above the carrier (ratio 1.5)
        mod.frequency.setValueAtTime(frequency * 1.5, now);
        modG.gain.setValueAtTime(frequency * 0.8, now); // Smooth FM modulation index

        mod.connect(modG);
        modG.connect(car.frequency); 
        car.connect(filter);

        // Additive Pythagorean overtones (3:2 fifth, 5:4 major third, 2:1 octave) for absolute resonance
        const overtones = [1.5, 2.0, 2.5]; 
        const overtoneGains = [0.18, 0.12, 0.06];

        const oNodes: OscillatorNode[] = [];
        const ogNodes: GainNode[] = [];

        overtones.forEach((ratio, idx) => {
          const osc = ctx.createOscillator();
          const oGain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(frequency * ratio, now);
          
          oGain.gain.setValueAtTime(vel * overtoneGains[idx], now);
          oGain.gain.exponentialRampToValueAtTime(0.0001, now + dur * (2.5 - idx * 0.5));
          
          osc.connect(oGain);
          oGain.connect(filter);

          osc.start(now);
          osc.stop(now + dur * (2.5 - idx * 0.5));

          oNodes.push(osc);
          ogNodes.push(oGain);
        });

        // Dynamic Lowpass strike filter sweep (bright strike that rapidly dampens into a warm humming core)
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(frequency * 6.0, now);
        filter.frequency.exponentialRampToValueAtTime(frequency * 1.2, now + 1.2);
        filter.Q.setValueAtTime(1.5, now);

        filter.connect(out);

        // Chime Amplitude Envelope (Soft 15ms cosine-style strike to prevent auditory fatigue, then long ringing decay)
        out.gain.setValueAtTime(0.001, now);
        out.gain.linearRampToValueAtTime(vel * 0.65, now + 0.015);
        out.gain.exponentialRampToValueAtTime(vel * 0.22, now + 0.25);
        out.gain.exponentialRampToValueAtTime(0.0001, now + dur * 5.0);

        out.connect(masterGainRef.current!);
        if (reverbRef.current) {
          out.connect(reverbRef.current.conv);
        }

        car.start(now);
        mod.start(now);

        car.stop(now + dur * 5.0);
        mod.stop(now + dur * 5.0);

        // Memory cleanup
        setTimeout(() => {
          try {
            car.disconnect();
            mod.disconnect();
            modG.disconnect();
            filter.disconnect();
            out.disconnect();
            oNodes.forEach(o => o.disconnect());
            ogNodes.forEach(g => g.disconnect());
          } catch (e) {}
        }, dur * 5.0 * 1000 + 150);

        // ═══════════════════════════════════════════════════════════════════════════
        // THE DOJO COMPANION: Soft spatial harmonic echo 150ms later
        // Echoes tuned to Pythagorean perfect 3:2 fifth (1.5) or 2:1 octave (2.0)
        // ═══════════════════════════════════════════════════════════════════════════
        const companionDelay = 0.15;
        const companionFreq = frequency * (Math.random() > 0.5 ? 1.5 : 2.0);
        playSageVoice(ctx, companionFreq, 1.4, vel * 0.32, now + companionDelay);
      }
    } catch (e) {
      console.warn("AudioContext chime synthesis failed:", e);
    }
  };

  const playWhakapapaChord = (index: number) => {
    if (!isSoundActive) return;
    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const now = ctx.currentTime;
      const freqs = [264, 396, 528, 792];
      const freq = freqs[index % freqs.length];
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(freq * 3.5, now);
      filter.frequency.exponentialRampToValueAtTime(freq * 1.15, now + 1.2);
      filter.Q.setValueAtTime(1.0, now);
      
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current!);
      if (reverbRef.current) {
        gain.connect(reverbRef.current.conv);
      }
      
      osc.start(now);
      osc.stop(now + 2.0);
      
      setTimeout(() => {
        try {
          osc.disconnect();
          filter.disconnect();
          gain.disconnect();
        } catch (e) {}
      }, 2150);
    } catch (e) {
      console.warn("Whakapapa chord synthesis failed:", e);
    }
  };

  const play1937Suture = () => {
    if (!isSoundActive) return;
    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const now = ctx.currentTime;
      
      // 1. Synthesize tape hiss / vinyl crackle dynamically
      const bufferSize = ctx.sampleRate * 2.5; 
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        const crackle = Math.random() > 0.985 ? (Math.random() * 2 - 1) : 0;
        data[i] = white * 0.02 + crackle * 0.15;
      }
      
      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;
      
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.setValueAtTime(300, now);
      noiseFilter.frequency.exponentialRampToValueAtTime(3000, now + 2.0); 
      noiseFilter.Q.setValueAtTime(1.0, now);
      
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.06, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);
      
      noiseNode.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGainRef.current!);
      
      // 2. Synthesize the 1937 hum (193.7 Hz & 387.4 Hz sines)
      const o1 = ctx.createOscillator();
      const o2 = ctx.createOscillator();
      const humGain = ctx.createGain();
      
      o1.type = "sine";
      o1.frequency.setValueAtTime(193.7, now);
      
      o2.type = "sine";
      o2.frequency.setValueAtTime(387.4, now);
      
      humGain.gain.setValueAtTime(0.001, now);
      humGain.gain.linearRampToValueAtTime(0.12, now + 0.3); 
      humGain.gain.setValueAtTime(0.12, now + 1.2);
      humGain.gain.exponentialRampToValueAtTime(0.001, now + 2.5); 
      
      o1.connect(humGain);
      o2.connect(humGain);
      humGain.connect(masterGainRef.current!);
      
      // Start sources
      noiseNode.start(now);
      o1.start(now);
      o2.start(now);
      
      noiseNode.stop(now + 2.5);
      o1.stop(now + 2.5);
      o2.stop(now + 2.5);
      
      // 3. Play the 639 Hz Solfeggio FA resolving chime at t = 1.0 (generational bridge)
      setTimeout(() => {
        playChime(639, "harmonic");
      }, 1000);
      
      setTimeout(() => {
        try {
          noiseNode.disconnect();
          noiseFilter.disconnect();
          noiseGain.disconnect();
          o1.disconnect();
          o2.disconnect();
          humGain.disconnect();
        } catch (e) {}
      }, 2750);
    } catch (e) {
      console.warn("1937 Vector suture audio failed:", e);
    }
  };

  // Synthesize a soft, organic wind-swish representing the shifting sands of change
  // Driven by dual-band filters and a fast amplitude-modulating grain rate that scales with velocity
  const playSandSwish = (velocity: number) => {
    if (!isSoundActive || !masterGainRef.current) return;

    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const dur = 0.5; // Smooth tactile decay

      // Calculate gentle ambient volume bound to velocity (cap it low to prevent fatigue)
      const maxVol = 0.04;
      const vol = Math.min(maxVol, 0.005 + velocity * 0.012);

      // Use pre-allocated white noise buffer to prevent CPU overhead and sound stuttering!
      let src: AudioBufferSourceNode;
      if (noiseBufferRef.current) {
        src = ctx.createBufferSource();
        src.buffer = noiseBufferRef.current;
      } else {
        // Fallback buffer if pre-allocation failed
        const size = ctx.sampleRate * 2;
        const buf = ctx.createBuffer(1, size, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < size; i++) d[i] = Math.random() * 2 - 1;
        src = ctx.createBufferSource();
        src.buffer = buf;
      }

      // DUAL BIPASS FILTER PATHWAYS:
      // Filter 1 (Somatic Grounding): A warm, static bandpass around Solfeggio 528Hz
      const filter1 = ctx.createBiquadFilter();
      filter1.type = "bandpass";
      filter1.frequency.setValueAtTime(528, now);
      filter1.Q.setValueAtTime(2.5, now);

      // Filter 2 (Granular Grit): A crisp, high bandpass that slides up with scroll speed
      const filter2 = ctx.createBiquadFilter();
      filter2.type = "bandpass";
      const highCenterFreq = 3000 + Math.min(1200, velocity * 150);
      filter2.frequency.setValueAtTime(highCenterFreq, now);
      // Sweeps slightly upward to convey movement/anticipation
      filter2.frequency.exponentialRampToValueAtTime(highCenterFreq * 1.15, now + dur);
      filter2.Q.setValueAtTime(6.0, now); // Higher Q creates a lovely whistling sand-dune effect

      // GRANULAR AMPLITUDE MODULATOR:
      // Modulates Filter 2 gain at a high rate (35Hz - 75Hz) to simulate grain collisions
      const grainGain = ctx.createGain();
      const grainLfo = ctx.createOscillator();
      const grainLfoGain = ctx.createGain();

      grainLfo.type = "sine";
      const grainRate = 35 + Math.min(40, velocity * 10); // Rate increases as scroll speeds up!
      grainLfo.frequency.setValueAtTime(grainRate, now);
      grainLfoGain.gain.setValueAtTime(0.55, now); // Modulate volume by 55%

      grainLfo.connect(grainLfoGain);
      grainLfoGain.connect(grainGain.gain); // Drive grain density modulation

      // Mix gains
      const mix1 = ctx.createGain();
      mix1.gain.setValueAtTime(vol * 0.7, now); // Somatic base is steady and warm

      const mix2 = ctx.createGain();
      mix2.gain.setValueAtTime(vol * 0.5, now); // Shimmering grain gain

      const masterSwishGain = ctx.createGain();
      masterSwishGain.gain.setValueAtTime(0.001, now);
      // Soft breathing cosine-like attack (140ms) to ensure absolute smoothness
      masterSwishGain.gain.linearRampToValueAtTime(1.0, now + 0.14);
      masterSwishGain.gain.exponentialRampToValueAtTime(0.001, now + dur);

      // Wire pathways
      src.connect(filter1);
      filter1.connect(mix1);

      src.connect(filter2);
      filter2.connect(grainGain);
      grainGain.connect(mix2);

      mix1.connect(masterSwishGain);
      mix2.connect(masterSwishGain);

      masterSwishGain.connect(masterGainRef.current);
      if (reverbRef.current) {
        masterSwishGain.connect(reverbRef.current.conv);
      }

      src.start(now);
      grainLfo.start(now);

      src.stop(now + dur);
      grainLfo.stop(now + dur);

      // Prevent memory leaks
      setTimeout(() => {
        try {
          src.disconnect();
          filter1.disconnect();
          filter2.disconnect();
          grainLfo.disconnect();
          grainLfoGain.disconnect();
          grainGain.disconnect();
          mix1.disconnect();
          mix2.disconnect();
          masterSwishGain.disconnect();
        } catch (e) {}
      }, dur * 1000 + 150);
    } catch (e) {
      console.warn("Sand swish audio synthesis failed:", e);
    }
  };

  // Synthesize a majestic, multi-layered Pythagorean major chord on scroll-pause
  // Acts as a physical tension resolution (dopaminergic release) after rapid scroll scanning
  const playResolutionChord = (tension: number) => {
    if (!isSoundActive) return;

    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      
      // Decay length scales with how much tension was accumulated (longer tension -> deeper, longer resolution!)
      const dur = 1.5 + tension * 2.5; // Up to 4.0 seconds base duration
      const chordVel = 0.35 + tension * 0.15; // Slightly louder for larger resolutions

      // Chord Freqs: 264Hz (grounding root), 330Hz (major third), 396Hz (perfect fifth), 528Hz (somatic heart resonance)
      // Staggered arpeggiation (strum) to mimic a harp or physical string pluck
      const notes = [
        { f: 264, r: 1.0,  del: 0.00, v: 0.50 }, // Grounding Root
        { f: 330, r: 1.25, del: 0.04, v: 0.38 }, // Just Major Third
        { f: 396, r: 1.5,  del: 0.08, v: 0.32 }, // Pure Perfect Fifth
        { f: 528, r: 2.0,  del: 0.12, v: 0.25 }, // Somatic Heart Octave
      ];

      // If they scrolled REALLY fast, add an ecstatic high fifth for ultimate resolution!
      if (tension > 0.75) {
        notes.push({ f: 792, r: 3.0, del: 0.16, v: 0.14 }); // Shimmering high crown fifth
      }

      notes.forEach((note) => {
        const osc = ctx.createOscillator();
        const oGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(note.f, now + note.del);

        // Warm physically modeled filter sweep: start bright, damp quickly
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(note.f * 4.5, now + note.del);
        filter.frequency.exponentialRampToValueAtTime(note.f * 1.15, now + note.del + 1.5);
        filter.Q.setValueAtTime(1.0, now + note.del);

        // Amplitude envelope: delicate pluck attack, long luxurious release
        oGain.gain.setValueAtTime(0.001, now);
        oGain.gain.setValueAtTime(0.001, now + note.del);
        oGain.gain.linearRampToValueAtTime(chordVel * note.v, now + note.del + 0.02); // 20ms soft pluck
        oGain.gain.exponentialRampToValueAtTime(chordVel * note.v * 0.4, now + note.del + 0.3); // Settle into ring
        oGain.gain.exponentialRampToValueAtTime(0.0001, now + note.del + dur * 1.5); // Long ringing decay

        osc.connect(filter);
        filter.connect(oGain);
        oGain.connect(masterGainRef.current!);
        if (reverbRef.current) {
          oGain.connect(reverbRef.current.conv);
        }

        osc.start(now + note.del);
        osc.stop(now + note.del + dur * 1.5);

        setTimeout(() => {
          try {
            osc.disconnect();
            filter.disconnect();
            oGain.disconnect();
          } catch (e) {}
        }, (note.del + dur * 1.5) * 1000 + 150);
      });

    } catch (e) {
      console.warn("Resolution chord synthesis failed:", e);
    }
  };

  // Synthesize a deep somatic grounding drone modulated by a theta-range LFO (5.0Hz)
  // Incorporates high-frequency "silicon light" sparkling chimes to outline cognitive space
  const playSomaticTransitionSound = () => {
    if (!isSoundActive) return;

    try {
      const ctx = initAudio();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const dur = 2.2; // Silky decay spillover

      // ───────────────────────────────────────────────────────────────────────
      // 1. POINT 01: THE STRIKE (High Register Peking Chime - 1056Hz)
      // ───────────────────────────────────────────────────────────────────────
      const sOsc = ctx.createOscillator();
      const sFilter = ctx.createBiquadFilter();
      const sGain = ctx.createGain();

      sOsc.type = "sine";
      sOsc.frequency.setValueAtTime(1056, now);
      sOsc.frequency.exponentialRampToValueAtTime(528, now + 1.2); // Glide down to root

      sFilter.type = "lowpass";
      sFilter.frequency.setValueAtTime(3000, now);
      sFilter.frequency.exponentialRampToValueAtTime(1056, now + 0.8);
      sFilter.Q.setValueAtTime(1.5, now);

      sGain.gain.setValueAtTime(0.001, now);
      sGain.gain.linearRampToValueAtTime(0.045, now + 0.015); // Cosine-like attack spark
      sGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      sOsc.connect(sFilter);
      sFilter.connect(sGain);
      sGain.connect(masterGainRef.current!);
      if (reverbRef.current) {
        sGain.connect(reverbRef.current.conv);
      }

      sOsc.start(now);
      sOsc.stop(now + 1.8);

      // ───────────────────────────────────────────────────────────────────────
      // 2. POINT 02 & 03: THE SWELL & ROTATION (Low & Middle Registers)
      // ───────────────────────────────────────────────────────────────────────
      const d1 = ctx.createOscillator();
      const d2 = ctx.createOscillator();
      const droneFilter = ctx.createBiquadFilter();
      const droneGain = ctx.createGain();

      // Spatial stereo panner for volumetric 3D drift
      let panner: StereoPannerNode | null = null;
      if (ctx.createStereoPanner) {
        panner = ctx.createStereoPanner();
        panner.pan.setValueAtTime(-0.5, now);
        panner.pan.linearRampToValueAtTime(0.5, now + dur); // Soft structural sweep across the stereo field
      }

      d1.type = "sine";
      d1.frequency.setValueAtTime(52.8, now + 0.2); // Low sub-octave of root
      d1.frequency.exponentialRampToValueAtTime(105.6, now + dur); // Upward sub-bass swell

      d2.type = "triangle"; // Warm throat overtone
      d2.frequency.setValueAtTime(132, now + 0.2);

      droneFilter.type = "lowpass";
      droneFilter.frequency.setValueAtTime(220, now);
      droneFilter.Q.setValueAtTime(1.0, now);

      // Point 03: Theta wave LFO (4.5Hz) for autonomic spin modulation
      const thetaLfo = ctx.createOscillator();
      const thetaLfoG = ctx.createGain();
      thetaLfo.type = "sine";
      thetaLfo.frequency.setValueAtTime(4.5, now);
      thetaLfoG.gain.setValueAtTime(0.08, now); // Modulate volume gently by 8%

      thetaLfo.connect(thetaLfoG);
      thetaLfoG.connect(droneGain.gain);

      // Swell Volume Envelope (Slow, pillowy breath)
      const baseDroneVol = 0.22;
      droneGain.gain.setValueAtTime(0.001, now);
      droneGain.gain.setValueAtTime(0.001, now + 0.2);
      droneGain.gain.exponentialRampToValueAtTime(baseDroneVol, now + 0.6); // Slow rise
      droneGain.gain.setValueAtTime(baseDroneVol, now + 1.2);
      droneGain.gain.exponentialRampToValueAtTime(0.001, now + dur); // Smooth release

      d1.connect(droneFilter);
      d2.connect(droneFilter);
      
      if (panner) {
        droneFilter.connect(panner);
        panner.connect(droneGain);
      } else {
        droneFilter.connect(droneGain);
      }
      
      droneGain.connect(masterGainRef.current!);
      if (reverbRef.current) {
        droneGain.connect(reverbRef.current.conv);
      }

      d1.start(now + 0.2);
      d2.start(now + 0.2);
      thetaLfo.start(now);

      d1.stop(now + dur);
      d2.stop(now + dur);
      thetaLfo.stop(now + dur);

      // Clean nodes
      setTimeout(() => {
        try {
          sOsc.disconnect();
          sFilter.disconnect();
          sGain.disconnect();
          d1.disconnect();
          d2.disconnect();
          droneFilter.disconnect();
          thetaLfo.disconnect();
          thetaLfoG.disconnect();
          if (panner) panner.disconnect();
          droneGain.disconnect();
        } catch (e) {}
      }, dur * 1000 + 250);

    } catch (e) {
      console.warn("Somatic transition audio failed:", e);
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
        noiseBufferRef.current = null;
      }
    }
  };

  // Trigger somatic transition overlay globally (persists across unmounting layout containers)
  const triggerTransition = () => {
    const randomPrompt = SOMATIC_PROMPTS[Math.floor(Math.random() * SOMATIC_PROMPTS.length)];
    setActivePrompt(randomPrompt);
    setIsSteeping(true);
    
    // Play the glorious somatic theta drone & silicon light spark soundscape!
    playSomaticTransitionSound();

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

  // Global scroll velocity & scroll-tension monitor + keypress sympathetic strings hook
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

        // Play focus-enhancing sliding winds of change swish on normal scrolls!
        if (velocity > 0.08) {
          const nowTime = Date.now();
          // Throttle sand swish triggers to 120ms to prevent acoustic crowding while preserving responsiveness
          if (nowTime - lastSwishTime.current > 120) {
            playSandSwish(velocity);
            
            // Excite the sympathetic strings resonator bank on motion!
            triggerSympatheticImpulse(Math.min(1.4, velocity * 0.45));

            lastSwishTime.current = nowTime;
          }
          
          // Accumulate scroll tension proportional to velocity
          scrollTensionRef.current = Math.min(1.0, scrollTensionRef.current + velocity * 0.12);
        }

        // If tension crosses high threshold (> 0.7) and scrolling continues rapidly,
        // trigger a soft warning chime (396Hz) to prompt autonomic slowing down
        if (scrollTensionRef.current > 0.7 && velocity > 1.8) {
          const nowTime = Date.now();
          if (nowTime - lastTensionChimeTime.current > 1500) { // 1.5 seconds cooldown
            playChime(396, "dissonant");
            lastTensionChimeTime.current = nowTime;
          }
        }

        // Debounce returning to slow scrolling or pause to trigger deep harmonic resolution
        if (chimeTimeout.current) clearTimeout(chimeTimeout.current);
        chimeTimeout.current = window.setTimeout(() => {
          const finalTension = scrollTensionRef.current;
          if (finalTension > 0.35) {
            // Trigger glorious multi-layered deep harmonic Pythagorean chord resolution!
            playResolutionChord(finalTension);
          }
          // Reset tension to baseline
          scrollTensionRef.current = 0;
        }, 250) as any;
      }

      lastScrollY.current = currentScrollY;
      lastScrollTime.current = currentTime;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid meta key combinations
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      // Key strokes excite A-Minor Pentatonic sympathetic resonators
      const intensity = e.key === "Enter" ? 1.6 : (e.key === " " ? 1.3 : 0.85);
      triggerSympatheticImpulse(intensity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      if (chimeTimeout.current) clearTimeout(chimeTimeout.current);
    };
  }, [isSoundActive]);

  return (
    <SoundContext.Provider value={{ isSoundActive, toggleSoundActive, playChime, isSteeping, triggerTransition, visibleLocation, setLocation, play1937Suture, playWhakapapaChord, startSingingBowl, stopSingingBowl, setBowlBreathRatio }}>
      {children}
      
      {/* Global Somatic Pacing Overlay - rendered at app root to prevent remount clipping */}
      {isSteeping && (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-stone-950/98 backdrop-blur-md transition-opacity duration-500">
          <div className="flex flex-col items-center gap-6 max-w-sm text-center px-6">
            <svg className="w-20 h-20 text-amber-500 star-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 12.5 8.5 15 11C17.5 13.5 24 14 24 14C24 14 17.5 14.5 15 17C12.5 19.5 12 26 12 26C12 26 11.5 19.5 9 17C6.5 14.5 0 14 0 14C0 14 6.5 13.5 9 11C11.5 8.5 12 2 12 2Z" />
            </svg>
             <div className="text-xl text-stone-200 tracking-wide font-light min-h-[3rem] flex items-center justify-center">
               <SteamSans text={activePrompt} register="hba" fontSize={20} />
             </div>
            <div className="w-16 h-[1px] bg-amber-500/30 mt-2" />
          </div>
        </div>
      )}
    </SoundContext.Provider>
  );
}
