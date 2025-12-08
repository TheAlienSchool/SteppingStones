interface SocialCardProps {
  id: string;
  title: string;
  content: React.ReactNode;
  format: "square" | "story" | "landscape";
  theme?: "light" | "dark";
  category: "quote" | "glossary" | "practice" | "archetype" | "reflection" | "voice";
}

const formatDimensions = {
  square: { label: "1:1", width: "w-full max-w-sm", aspect: "aspect-square", dimensions: "1080x1080" },
  story: { label: "9:16", width: "w-full max-w-xs", aspect: "aspect-[9/16]", dimensions: "1080x1920" },
  landscape: { label: "16:9", width: "w-full max-w-lg", aspect: "aspect-video", dimensions: "1200x675" }
};

const gradients = {
  quote: {
    light: "bg-gradient-to-br from-white via-stone-50 to-amber-50/30",
    dark: "bg-gradient-to-br from-stone-800 via-stone-900 to-amber-900"
  },
  glossary: {
    light: "bg-gradient-to-br from-amber-50/20 via-white to-stone-50/40",
    dark: "bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800"
  },
  practice: {
    light: "bg-gradient-to-br from-stone-50/30 via-white to-amber-50/40",
    dark: "bg-gradient-to-br from-amber-900 via-stone-900 to-stone-800"
  },
  archetype: {
    light: "bg-gradient-to-br from-white via-amber-50/30 to-stone-50/30",
    dark: "bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900/80"
  },
  reflection: {
    light: "bg-gradient-to-br from-stone-50/20 via-white to-amber-50/30",
    dark: "bg-gradient-to-br from-stone-800 via-amber-900/60 to-stone-900"
  },
  voice: {
    light: "bg-gradient-to-br from-amber-50/30 via-white to-stone-50/20",
    dark: "bg-gradient-to-br from-amber-900/70 via-stone-900 to-stone-800"
  }
};

export default function SocialCard({
  id,
  title,
  content,
  format,
  theme = "light",
  category
}: SocialCardProps) {
  const formatInfo = formatDimensions[format];
  const gradient = gradients[category][theme];
  const textColor = theme === "dark" ? "text-stone-100" : "text-stone-800";

  return (
    <div className="space-y-3">
      {/* Card Title */}
      <div>
        <h3 className="font-serif text-lg text-stone-800">{title}</h3>
        <p className="text-xs text-stone-500">
          {formatInfo.dimensions} · {formatInfo.label}
        </p>
      </div>

      {/* Card Preview */}
      <div
        id={id}
        className={`${formatInfo.width} ${formatInfo.aspect} ${gradient} rounded-lg ${format === "landscape" ? "p-4" : "p-6"} flex flex-col items-center justify-center ${textColor} shadow-lg overflow-hidden`}
      >
        <style>{`
          @supports (font-family: le-monde-livre) {
            #${id} p {
              font-family: 'le-monde-livre', serif;
              line-height: ${format === "landscape" ? "1.3" : "1.5"};
              word-spacing: 0.05em;
              text-rendering: optimizeLegibility;
              font-weight: 400;
            }
            #${id} p.text-sm {
              letter-spacing: 0.05em;
              ${format === "landscape" ? "font-size: 0.85rem;" : ""}
            }
            #${id} h3 {
              font-family: 'le-monde-livre', serif;
              font-weight: 600;
              line-height: 1.4;
              text-rendering: optimizeLegibility;
              ${format === "landscape" ? "font-size: 1.5rem; margin-bottom: 0.5rem;" : ""}
            }
            #${id} em {
              font-style: italic;
              font-weight: 400;
            }
          }
        `}</style>
        <div className={`text-center max-w-md w-full ${format === "landscape" ? "space-y-2 overflow-y-auto max-h-full" : "space-y-6"}`}>
          {content}

          {/* Watermark */}
          <div className={`text-xs ${theme === "dark" ? "text-stone-400" : "text-stone-500"} ${format === "landscape" ? "mt-2" : "mt-8"} font-serif tracking-wider`}>
            The Stone Forger's Way
          </div>
        </div>
      </div>

      {/* Format Badge */}
      <div className="flex gap-2 text-xs">
        <span className="inline-flex items-center px-2 py-1 rounded-full bg-amber-100 text-amber-700">
          {formatInfo.label}
        </span>
        <span className="inline-flex items-center px-2 py-1 rounded-full bg-stone-100 text-stone-600 capitalize">
          {category}
        </span>
      </div>
    </div>
  );
}
