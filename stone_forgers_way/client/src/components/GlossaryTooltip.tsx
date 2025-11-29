import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { findGlossaryTerm, termToSlug } from "@/lib/glossaryData";
import { X } from "lucide-react";

interface GlossaryTooltipProps {
  term: string;
  children?: React.ReactNode;
  className?: string;
}

export default function GlossaryTooltip({ term, children, className = "" }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("bottom");
  const [horizontalAlign, setHorizontalAlign] = useState<"center" | "left" | "right">("center");
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  const glossaryEntry = findGlossaryTerm(term);

  // Calculate tooltip position based on viewport
  useEffect(() => {
    if (isOpen && triggerRef.current && tooltipRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      // Vertical positioning
      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }

      // Horizontal positioning - use actual tooltip width and add viewport padding
      const actualTooltipWidth = tooltipRef.current.offsetWidth;
      const viewportPadding = 16; // 16px padding from screen edges
      const halfWidth = actualTooltipWidth / 2;

      // On mobile, use fixed positioning to ensure tooltip stays in viewport
      if (isMobile) {
        const maxTooltipWidth = window.innerWidth - (viewportPadding * 2);

        // Calculate optimal left position
        let leftPosition = rect.left;

        // Ensure tooltip doesn't overflow right edge
        if (leftPosition + actualTooltipWidth > window.innerWidth - viewportPadding) {
          leftPosition = window.innerWidth - actualTooltipWidth - viewportPadding;
        }

        // Ensure tooltip doesn't overflow left edge
        if (leftPosition < viewportPadding) {
          leftPosition = viewportPadding;
        }

        setTooltipStyle({
          position: 'fixed',
          left: `${leftPosition}px`,
          maxWidth: `${maxTooltipWidth}px`,
          width: 'auto'
        });
        setHorizontalAlign("left");
      } else {
        // Desktop: use centered positioning when possible
        setTooltipStyle({});
        if (rect.left < halfWidth + viewportPadding) {
          setHorizontalAlign("left");
        } else if (window.innerWidth - rect.right < halfWidth + viewportPadding) {
          setHorizontalAlign("right");
        } else {
          setHorizontalAlign("center");
        }
      }
    }
  }, [isOpen, isMobile]);

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
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
        className={`cursor-help border-b border-dotted border-amber-600 text-amber-700 hover:text-amber-800 hover:border-amber-800 transition-colors ${className}`}
      >
        {children || term}
      </span>

      {isOpen && (
        <div
          ref={tooltipRef}
          className={`${isMobile ? '' : 'absolute'} z-50 w-80 max-w-[90vw] max-h-[60vh] overflow-y-auto p-4 bg-white rounded-lg shadow-xl border border-stone-200 ${
            position === "top" ? "bottom-full mb-0.5" : "top-full mt-0.5"
          } ${
            !isMobile ? (
              horizontalAlign === "left" ? "left-0" :
              horizontalAlign === "right" ? "right-0" :
              "left-1/2 -translate-x-1/2"
            ) : ""
          }`}
          style={isMobile ? {
            ...tooltipStyle,
            top: position === "top"
              ? `${triggerRef.current!.getBoundingClientRect().top - 8}px`
              : `${triggerRef.current!.getBoundingClientRect().bottom + 8}px`,
            transform: position === "top" ? 'translateY(-100%)' : 'none'
          } : undefined}
          onMouseEnter={() => !isMobile && setIsOpen(true)}
          onMouseLeave={() => !isMobile && setIsOpen(false)}
        >
          {/* Arrow - only show when centered */}
          {horizontalAlign === "center" && (
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-stone-200 transform rotate-45 ${
                position === "top"
                  ? "bottom-[-6px] border-r border-b"
                  : "top-[-6px] border-l border-t"
              }`}
            />
          )}

          {/* Content */}
          <div className="relative">
            {/* Mobile close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center text-stone-400 hover:text-stone-600 sm:hidden"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <h4 className="font-serif text-lg text-stone-800 mb-2 pr-6 sm:pr-0">
              {glossaryEntry.term}
            </h4>
            <p className="text-sm text-stone-600 mb-3">
              {glossaryEntry.simple}
            </p>
            <Link
              href={`/glossary#${termToSlug(glossaryEntry.term)}`}
              className="text-xs text-amber-600 hover:text-amber-700 font-medium inline-flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
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
