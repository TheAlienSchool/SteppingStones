import { useState } from "react";
import { Download, Link as LinkIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialCardProps {
  id: string;
  title: string;
  content: React.ReactNode;
  format: "square" | "story" | "landscape";
  theme?: "light" | "dark";
  category: "quote" | "glossary" | "practice" | "archetype" | "reflection" | "voice";
  onDownload?: (id: string, format: string) => void;
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
  category,
  onDownload
}: SocialCardProps) {
  const [copied, setCopied] = useState(false);
  const formatInfo = formatDimensions[format];
  const gradient = gradients[category][theme];
  const textColor = theme === "dark" ? "text-stone-100" : "text-stone-800";
  const accentColor = theme === "dark" ? "text-amber-400" : "text-amber-700";

  const handleCopyUrl = () => {
    const url = `${window.location.origin}/social#${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (onDownload) {
      onDownload(id, format);
    }
  };

  return (
    <div className="space-y-3">
      {/* Card Title & Controls */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg text-stone-800">{title}</h3>
          <p className="text-xs text-stone-500">
            {formatInfo.dimensions} · {formatInfo.label}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleCopyUrl}
            variant="outline"
            size="sm"
            className="h-8 px-2"
          >
            {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
          </Button>
          <Button
            onClick={handleDownload}
            variant="outline"
            size="sm"
            className="h-8 px-3"
          >
            <Download className="w-4 h-4 mr-1" />
            Save
          </Button>
        </div>
      </div>

      {/* Card Preview */}
      <div
        id={id}
        className={`${formatInfo.width} ${formatInfo.aspect} ${gradient} rounded-lg p-8 flex flex-col items-center justify-center ${textColor} shadow-lg overflow-hidden`}
      >
        <style>{`
          @supports (font-family: futura-pt) {
            #${id} p, #${id} h3 {
              font-family: 'futura-pt', sans-serif;
              line-height: 1.4;
              word-spacing: 0.1em;
              text-rendering: optimizeLegibility;
            }
          }
        `}</style>
        <div className="space-y-6 text-center max-w-md w-full">
          {content}

          {/* Watermark */}
          <div className={`text-xs ${theme === "dark" ? "text-stone-400" : "text-stone-500"} mt-8 font-serif`}>
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
