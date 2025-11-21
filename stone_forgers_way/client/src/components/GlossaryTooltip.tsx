import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { findGlossaryTerm, termToSlug } from "@/lib/glossaryData";

interface GlossaryTooltipProps {
  term: string;
  children?: React.ReactNode;
  className?: string;
}

export default function GlossaryTooltip({ term, children, className = "" }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("bottom");
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  const glossaryEntry = findGlossaryTerm(term);

  // Calculate tooltip position based on viewport
  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      // If less than 200px below, show above
      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    }
  }, [isOpen]);

  // Close tooltip when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  if (!glossaryEntry) {
    // If term not found, just render the children/term without tooltip
    return <span className={className}>{children || term}</span>;
  }

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`cursor-help border-b border-dotted border-amber-600 text-amber-700 hover:text-amber-800 hover:border-amber-800 transition-colors ${className}`}
      >
        {children || term}
      </span>

      {isOpen && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 w-80 max-w-[90vw] p-4 bg-white rounded-lg shadow-xl border border-stone-200 ${
            position === "top" ? "bottom-full mb-2" : "top-full mt-2"
          } left-1/2 -translate-x-1/2`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Arrow */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-stone-200 transform rotate-45 ${
              position === "top"
                ? "bottom-[-6px] border-r border-b"
                : "top-[-6px] border-l border-t"
            }`}
          />

          {/* Content */}
          <div className="relative">
            <h4 className="font-serif text-lg text-stone-800 mb-2">
              {glossaryEntry.term}
            </h4>
            <p className="text-sm text-stone-600 mb-3">
              {glossaryEntry.simple}
            </p>
            <Link
              href={`/glossary#${termToSlug(glossaryEntry.term)}`}
              className="text-xs text-amber-600 hover:text-amber-700 font-medium inline-flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              Learn more
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </span>
  );
}

// Convenience component for inline usage with custom display text
export function Term({ name, children }: { name: string; children?: React.ReactNode }) {
  return <GlossaryTooltip term={name}>{children}</GlossaryTooltip>;
}
