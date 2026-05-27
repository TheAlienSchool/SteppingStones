import React, { useMemo, useEffect, useRef } from "react";
import "./steam-sans.css";

interface SteamSansProps {
  text: string;
  register: "harris" | "hba" | "vapor";
  className?: string;
  fontSize?: number;
}

export default function SteamSans({ text, register, className = "", fontSize = 24 }: SteamSansProps) {
  if (register === "harris") {
    return (
      <span className={`font-sans font-light uppercase tracking-[0.25em] opacity-95 ${className}`}>
        {text}
      </span>
    );
  }

  if (register === "hba") {
    // Split text by spaces to preserve word boundaries, then split each word into characters.
    // Each word is rendered in a non-breaking wrapper to prevent mid-word line-wrapping.
    const words = useMemo(() => {
      let charIndex = 0;
      return text.split(" ").map((word, wordIdx) => {
        const characters = word.split("").map((char) => {
          const duration = `${(3.5 + Math.random() * 2.5).toFixed(2)}s`;
          const delay = `${(charIndex * 0.08 + Math.random() * 0.05).toFixed(2)}s`;
          charIndex++;
          return {
            char,
            style: { "--dur": duration, "--del": delay } as React.CSSProperties,
          };
        });
        return {
          word,
          characters,
        };
      });
    }, [text]);

    return (
      <span className={`steam-hba font-mono font-light tracking-wide inline-flex flex-wrap ${className}`}>
        {words.map((wordObj, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
            {wordObj.characters.map((item, charIdx) => (
              <span
                key={charIdx}
                className="hba-char"
                style={item.style}
              >
                {item.char}
              </span>
            ))}
          </span>
        ))}
      </span>
    );
  }

  if (register === "vapor") {
    // Automatically degrade to HBA (Witness) register on mobile screens or low-pixel-density ratios for performance
    const isLowSpec = typeof window !== "undefined" && (window.innerWidth < 768 || (window.devicePixelRatio || 1) < 1.5);
    if (isLowSpec) {
      return <SteamSans text={text} register="hba" fontSize={fontSize} className={className} />;
    }
    return <VaporCanvas text={text} fontSize={fontSize} className={className} />;
  }

  return <span className={className}>{text}</span>;
}

/* ═══════════════════════════════════════════════════════════════════════════
   VAPOR REGISTER CANVAS ENGINE WITH DYNAMIC COLOR INHERITANCE
   ═══════════════════════════════════════════════════════════════════════════ */
function VaporCanvas({ text, fontSize, className = "" }: { text: string; fontSize: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = canvas.offsetWidth || 400);
    let H = (canvas.height = canvas.offsetHeight || 100);
    
    // Auto-inherit text color from computed CSS style of the parent container
    const styles = window.getComputedStyle(canvas);
    const textColor = styles.color || "rgba(245, 241, 232, 0.9)";
    
    // Setup offscreen canvas to sample text pixel coordinates
    const off = document.createElement("canvas");
    const oct = off.getContext("2d")!;
    off.width = W; off.height = H;
    oct.font = `300 ${fontSize}px 'DM Sans'`;
    oct.fillStyle = "#fff";
    oct.textBaseline = "middle";
    const m = oct.measureText(text);
    oct.fillText(text, (W - m.width) / 2, H / 2);

    const imgData = oct.getImageData(0, 0, W, H).data;
    const gap = 3;
    const particles: Array<{
      homeX: number; homeY: number;
      x: number; y: number;
      tx: number; ty: number;
      speed: number; size: number; opacity: number;
    }> = [];

    // Map high density pixels into sand grain coordinates
    for (let y = 0; y < H; y += gap) {
      for (let x = 0; x < W; x += gap) {
        if (imgData[(y * W + x) * 4 + 3] > 128) {
          const sc = 180;
          particles.push({
            homeX: x, homeY: y,
            x: x + (Math.random() - 0.5) * sc,
            y: y + (Math.random() - 0.5) * sc,
            tx: x, ty: y,
            speed: 0.03 + Math.random() * 0.05,
            size: 0.7 + Math.random() * 0.8,
            opacity: 0.5 + Math.random() * 0.5,
          });
        }
      }
    }

    let frameCount = 0;
    const loop = () => {
      animId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, W, H);
      frameCount++;

      particles.forEach((p) => {
        // Slowly glide home, adding a tiny tactile wiggle
        p.x += (p.tx - p.x) * p.speed;
        p.y += (p.ty - p.y) * p.speed;
        
        p.x += Math.sin(frameCount * 0.05 + p.homeY) * 0.05;
        p.y += Math.cos(frameCount * 0.05 + p.homeX) * 0.05;

        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = textColor;
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;
    };

    loop();
    return () => {
      cancelAnimationFrame(animId);
    };
  }, [text, fontSize]);

  return <canvas ref={canvasRef} className={`w-full h-24 ${className}`} />;
}
