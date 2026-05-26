import { useMemo } from "react";

interface StoneMapProps {
  archetypeId: string; // 'carrier', 'thrower', 'conscious-forger', 'forger'
}

export default function StoneMap({ archetypeId }: StoneMapProps) {
  // Normalize archetype ID to one of our core states
  const coreState = useMemo(() => {
    const cleanId = archetypeId.toLowerCase();
    if (cleanId.includes("carrier") || cleanId.includes("keeper")) return "carrier";
    if (cleanId.includes("thrower") || cleanId.includes("breaker")) return "thrower";
    if (cleanId.includes("conscious") || cleanId.includes("witness") || cleanId.includes("hunter")) return "conscious";
    return "forger"; // Default to integrated Forger / Wayfinder / Caller
  }, [archetypeId]);

  return (
    <div className="w-full max-w-lg mx-auto bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden my-8">
      {/* Decorative Grids */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent bg-[size:24px_24px] bg-repeat" />

      {/* SVG Container */}
      <svg
        className="w-full h-auto aspect-[4/3] relative z-10"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Muted Charcoal Heavy Stone Gradient */}
          <linearGradient id="stone-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#57534e" />
            <stop offset="100%" stopColor="#1c1917" />
          </linearGradient>
          {/* Hot Amber Dissonant Stone Gradient */}
          <linearGradient id="stone-hot" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          {/* Integrated Gold Forged Stone Gradient */}
          <linearGradient id="stone-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="70%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          {/* Golden Glow Filter */}
          <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic State Render */}
        {coreState === "carrier" && (
          <g>
            {/* Background Magnetite Magnetic Field Lines */}
            <path d="M 50 150 Q 200 80 350 150" stroke="#44403c" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 50 150 Q 200 220 350 150" stroke="#44403c" strokeWidth="1" strokeDasharray="4 4" />

            {/* Central Vessel Figure (Stone Carrier) */}
            <path
              d="M 200 120 C 205 120 210 125 210 135 L 205 170 L 195 170 L 190 135 C 190 125 195 120 200 120 Z"
              fill="#78716c"
            />
            <circle cx="200" cy="110" r="8" fill="#78716c" />
            {/* Bent posture suggesting burden */}
            <path d="M 195 125 Q 185 140 195 155" stroke="#78716c" strokeWidth="3" fill="none" />

            {/* Chaotic Orbiting / Swinging Stones */}
            {/* Stone 1 */}
            <ellipse cx="120" cy="110" rx="14" ry="10" fill="url(#stone-dark)" className="animate-orbit-1" />
            <line x1="200" y1="120" x2="120" x2-node="true" y2="110" stroke="#44403c" strokeWidth="0.7" strokeDasharray="2 2" className="animate-line-1" />

            {/* Stone 2 */}
            <ellipse cx="280" cy="120" rx="12" ry="15" fill="url(#stone-dark)" className="animate-orbit-2" />
            <line x1="200" y1="120" x2="280" y2="120" stroke="#44403c" strokeWidth="0.7" strokeDasharray="2 2" className="animate-line-2" />

            {/* Stone 3 */}
            <ellipse cx="160" cy="180" rx="16" ry="11" fill="url(#stone-dark)" className="animate-orbit-3" />
            <line x1="200" y1="120" x2="160" y2="180" stroke="#44403c" strokeWidth="0.7" strokeDasharray="2 2" className="animate-line-3" />

            {/* Stone 4 */}
            <ellipse cx="240" cy="80" rx="11" ry="8" fill="url(#stone-dark)" className="animate-orbit-4" />
            <line x1="200" y1="120" x2="240" y2="80" stroke="#44403c" strokeWidth="0.7" strokeDasharray="2 2" className="animate-line-4" />

            {/* Stone 5 */}
            <ellipse cx="140" cy="70" rx="9" ry="12" fill="url(#stone-dark)" className="animate-orbit-5" />
            <line x1="200" y1="120" x2="140" y2="70" stroke="#44403c" strokeWidth="0.7" strokeDasharray="2 2" className="animate-line-5" />
          </g>
        )}

        {coreState === "thrower" && (
          <g>
            {/* Dynamic Kinetic Background Waves */}
            <path d="M 120 150 Q 200 50 320 100" stroke="#b45309" strokeWidth="0.7" opacity="0.3" strokeDasharray="3 3" />
            
            {/* Central Vessel Figure (Stone Thrower in dynamic release posture) */}
            <path
              d="M 140 140 C 145 140 150 143 148 150 L 140 185 L 132 185 L 132 150 C 132 143 135 140 140 140 Z"
              fill="#a8a29e"
            />
            <circle cx="140" cy="130" r="8" fill="#a8a29e" />
            {/* Throwing arm vector */}
            <path d="M 142 145 Q 165 130 185 145" stroke="#a8a29e" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Scattered, Broken Shards flying outwards */}
            {/* Shard 1 */}
            <polygon points="260,110 275,115 270,128 255,120" fill="url(#stone-hot)" className="animate-shard-1" />
            {/* Shard 2 */}
            <polygon points="210,80 225,75 228,90 215,95" fill="url(#stone-hot)" className="animate-shard-2" />
            {/* Shard 3 */}
            <polygon points="310,140 325,145 320,158 305,150" fill="url(#stone-hot)" className="animate-shard-3" />
            {/* Shard 4 */}
            <polygon points="290,70 302,78 296,88 284,80" fill="url(#stone-hot)" className="animate-shard-4" />
            {/* Shard 5 */}
            <polygon points="180,180 195,182 190,195 175,190" fill="url(#stone-hot)" className="animate-shard-5" />

            {/* Kinetic trailing sparks */}
            <circle cx="230" cy="115" r="2" fill="#fbbf24" opacity="0.8" />
            <circle cx="275" cy="95" r="1.5" fill="#fcd34d" opacity="0.6" />
            <circle cx="195" cy="165" r="2" fill="#fbbf24" opacity="0.8" />
          </g>
        )}

        {(coreState === "conscious" || coreState === "forger") && (
          <g>
            {/* Clear, Spacious Horizon Lines */}
            <line x1="40" y1="200" x2="360" y2="200" stroke="#44403c" strokeWidth="1" />
            <line x1="40" y1="200" x2="360" y2="200" stroke="#d97706" strokeWidth="1.5" filter="url(#gold-glow)" opacity="0.4" />

            {/* Central Grounded Vessel (Conscious Forger in zazen) */}
            <path
              d="M 120 160 C 123 160 126 163 126 170 L 123 200 L 117 200 L 114 170 C 114 163 117 160 120 160 Z"
              fill="#a8a29e"
            />
            <circle cx="120" cy="150" r="8" fill="#a8a29e" />
            {/* Grounded cross-legged base overlay */}
            <path d="M 105 200 C 105 190 135 190 135 200 Z" fill="#78716c" />

            {/* Aligned, Stacked Stepping Stones Path leading to Horizon */}
            {/* Stone 1 - Grounded base under navigator */}
            <rect x="100" y="200" width="40" height="12" rx="4" fill="url(#stone-gold)" />

            {/* Stepping Stone 2 */}
            <rect x="155" y="185" width="36" height="11" rx="4" fill="url(#stone-gold)" className="animate-path-step" style={{ animationDelay: '0.2s' }} />

            {/* Stepping Stone 3 */}
            <rect x="205" y="165" width="32" height="10" rx="4" fill="url(#stone-gold)" className="animate-path-step" style={{ animationDelay: '0.4s' }} />

            {/* Stepping Stone 4 */}
            <rect x="250" y="140" width="28" height="9" rx="3" fill="url(#stone-gold)" filter="url(#gold-glow)" className="animate-path-step" style={{ animationDelay: '0.6s' }} />

            {/* Stepping Stone 5 */}
            <rect x="290" y="112" width="24" height="8" rx="3" fill="url(#stone-gold)" filter="url(#gold-glow)" className="animate-path-step" style={{ animationDelay: '0.8s' }} />

            {/* Stepping Stone 6 */}
            <rect x="325" y="80" width="20" height="7" rx="2" fill="url(#stone-gold)" filter="url(#gold-glow)" className="animate-path-step" style={{ animationDelay: '1.0s' }} />
          </g>
        )}
      </svg>

      {/* Somatic Context Label */}
      <div className="mt-4 border-t border-stone-800 pt-4 text-center">
        <h4 className="font-serif text-sm text-stone-300 uppercase tracking-widest">
          {coreState === "carrier" && "Orbiting Obligations :: Unexamined Weight"}
          {coreState === "thrower" && "Reactive Release :: Fragmented Momentum"}
          {coreState === "conscious" && "Aligned Presence :: The One Stone"}
          {coreState === "forger" && "The Path Materializing :: Trust Solidified"}
        </h4>
        <p className="text-xs text-stone-500 mt-1 font-sans">
          {coreState === "carrier" && "Weights are suspended in chaotic orbit, sapping present focus."}
          {coreState === "thrower" && "Energy is released in explosive bursts, dispersing collective force."}
          {coreState === "conscious" && "Attention is locked onto a single, stable coordinate of action."}
          {coreState === "forger" && "Pathways solidify beneath your feet in response to conscious stepping."}
        </p>
      </div>

      {/* Inline Animation styles for absolute reliability without global css compilation issues */}
      <style>{`
        /* Carrier Orbit Animations */
        @keyframes orbit1 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(15px, -10px); }
        }
        @keyframes orbit2 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-10px, 15px); }
        }
        @keyframes orbit3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(8px, -15px); }
        }
        @keyframes orbit4 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-15px, 8px); }
        }
        @keyframes orbit5 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(12px, 12px); }
        }
        .animate-orbit-1 { animation: orbit1 6s ease-in-out infinite; transform-origin: 200px 120px; }
        .animate-orbit-2 { animation: orbit2 5.5s ease-in-out infinite; transform-origin: 200px 120px; }
        .animate-orbit-3 { animation: orbit3 7s ease-in-out infinite; transform-origin: 200px 120px; }
        .animate-orbit-4 { animation: orbit4 6.5s ease-in-out infinite; transform-origin: 200px 120px; }
        .animate-orbit-5 { animation: orbit5 8s ease-in-out infinite; transform-origin: 200px 120px; }

        /* Thrower Shard Animations */
        @keyframes shard1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.85; }
          50% { transform: translate(10px, -8px) rotate(15deg); opacity: 1; }
        }
        @keyframes shard2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.85; }
          50% { transform: translate(5px, -12px) rotate(-10deg); opacity: 1; }
        }
        @keyframes shard3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.85; }
          50% { transform: translate(15px, 5px) rotate(20deg); opacity: 1; }
        }
        @keyframes shard4 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.85; }
          50% { transform: translate(8px, -5px) rotate(-15deg); opacity: 1; }
        }
        @keyframes shard5 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.85; }
          50% { transform: translate(2px, 12px) rotate(5deg); opacity: 1; }
        }
        .animate-shard-1 { animation: shard1 4.5s ease-in-out infinite; }
        .animate-shard-2 { animation: shard2 4s ease-in-out infinite; }
        .animate-shard-3 { animation: shard3 5s ease-in-out infinite; }
        .animate-shard-4 { animation: shard4 4.8s ease-in-out infinite; }
        .animate-shard-5 { animation: shard5 5.5s ease-in-out infinite; }

        /* Forger Path Entrance & Pulsing */
        @keyframes pathStep {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(217, 119, 6, 0.2)); }
          50% { transform: scale(1.03); filter: drop-shadow(0 0 8px rgba(217, 119, 6, 0.5)); }
        }
        .animate-path-step {
          animation: pathStep 4s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}
